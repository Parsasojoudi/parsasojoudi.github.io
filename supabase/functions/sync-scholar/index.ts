// Edge function: scrape Google Scholar profile via Firecrawl and replace publications in DB.
import { createClient } from "npm:@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=g0Srzp4AAAAJ&hl=en&pagesize=100";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  scholar_url?: string;
  citations: number;
}

// Parse the Scholar profile HTML to extract publications.
function parsePublications(html: string): Publication[] {
  const pubs: Publication[] = [];
  // Each publication row has class "gsc_a_tr"
  const rowRegex = /<tr[^>]*class="gsc_a_tr"[^>]*>([\s\S]*?)<\/tr>/g;
  const rows = html.match(rowRegex) ?? [];

  for (const row of rows) {
    // Title + link inside <a class="gsc_a_at" href="...">TITLE</a>
    const titleMatch = row.match(
      /<a[^>]*class="gsc_a_at"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/
    );
    if (!titleMatch) continue;
    const href = titleMatch[1];
    const title = stripHtml(titleMatch[2]).trim();
    if (!title) continue;

    // Two <div class="gs_gray"> nodes follow: authors, then venue+year
    const grayMatches = [
      ...row.matchAll(/<div[^>]*class="gs_gray"[^>]*>([\s\S]*?)<\/div>/g),
    ];
    const authors = grayMatches[0] ? stripHtml(grayMatches[0][1]).trim() : "";
    const venueRaw = grayMatches[1] ? stripHtml(grayMatches[1][1]).trim() : "";

    // Year is in <span class="gsc_a_h ...">YEAR</span>
    const yearMatch = row.match(
      /<span[^>]*class="gsc_a_h[^"]*"[^>]*>([\s\S]*?)<\/span>/
    );
    const year = yearMatch ? stripHtml(yearMatch[1]).trim() : "";

    // Citations in <a class="gsc_a_ac ...">N</a>
    const citeMatch = row.match(
      /<a[^>]*class="gsc_a_ac[^"]*"[^>]*>([\s\S]*?)<\/a>/
    );
    const citations = citeMatch
      ? parseInt(stripHtml(citeMatch[1]).trim(), 10) || 0
      : 0;

    // Strip trailing year from venue if present (e.g. "Analytical Letters, 2024")
    const venue = venueRaw.replace(/,\s*\d{4}\s*$/, "").trim();

    const scholar_url = href.startsWith("http")
      ? href
      : `https://scholar.google.com${href}`;

    pubs.push({ title, authors, venue, year, scholar_url, citations });
  }
  return pubs;
}

function stripHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");
}

async function scrapeWithFirecrawl(apiKey: string): Promise<string> {
  const res = await fetch("https://api.firecrawl.dev/v2/scrape", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: SCHOLAR_URL,
      formats: ["rawHtml"],
      onlyMainContent: false,
      waitFor: 4000,
      actions: [{ type: "wait", milliseconds: 3000 }],
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      `Firecrawl failed [${res.status}]: ${JSON.stringify(data).slice(0, 500)}`
    );
  }
  const html =
    data?.data?.rawHtml || data?.data?.html || data?.rawHtml || data?.html;
  if (!html) {
    throw new Error(
      `No HTML returned from Firecrawl: ${JSON.stringify(data).slice(0, 500)}`
    );
  }
  return html as string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const FIRECRAWL_API_KEY = Deno.env.get("FIRECRAWL_API_KEY");

  if (!SUPABASE_URL || !SERVICE_ROLE) {
    return json({ error: "Supabase env vars missing" }, 500);
  }
  if (!FIRECRAWL_API_KEY) {
    return json({ error: "FIRECRAWL_API_KEY missing" }, 500);
  }

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

  // Optional force flag in body; otherwise only sync if >90 days old
  let force = false;
  if (req.method === "POST") {
    try {
      const body = await req.json();
      force = !!body?.force;
    } catch {
      /* ignore */
    }
  }

  // Check last sync
  const { data: meta } = await admin
    .from("publications_sync_meta")
    .select("last_synced_at")
    .eq("id", 1)
    .maybeSingle();

  const lastSynced = meta?.last_synced_at ? new Date(meta.last_synced_at) : null;
  const ninetyDaysMs = 90 * 24 * 60 * 60 * 1000;
  const isStale =
    !lastSynced || Date.now() - lastSynced.getTime() > ninetyDaysMs;

  if (!force && !isStale) {
    return json({
      synced: false,
      reason: "not stale",
      last_synced_at: lastSynced,
    });
  }

  try {
    const html = await scrapeWithFirecrawl(FIRECRAWL_API_KEY);
    const pubs = parsePublications(html);

    if (pubs.length === 0) {
      throw new Error("Parser found 0 publications — Scholar layout may have changed");
    }

    // Replace all rows
    await admin.from("publications").delete().not("id", "is", null);
    const rows = pubs.map((p, i) => ({
      title: p.title,
      authors: p.authors,
      venue: p.venue,
      year: p.year,
      scholar_url: p.scholar_url,
      citations: p.citations,
      position: i,
    }));
    const { error: insertErr } = await admin.from("publications").insert(rows);
    if (insertErr) throw insertErr;

    await admin
      .from("publications_sync_meta")
      .update({
        last_synced_at: new Date().toISOString(),
        last_status: "ok",
        last_error: null,
      })
      .eq("id", 1);

    return json({ synced: true, count: pubs.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("sync-scholar error:", message);
    await admin
      .from("publications_sync_meta")
      .update({
        last_status: "error",
        last_error: message,
      })
      .eq("id", 1);
    return json({ error: message }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
