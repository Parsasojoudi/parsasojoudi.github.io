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
  // Each publication row starts with <tr class="gsc_a_tr">. The </tr> may be omitted
  // in HTML5 source, so split on row openings and treat each segment as a row.
  const parts = html.split(/<tr[^>]*class="gsc_a_tr"[^>]*>/);
  // parts[0] is everything before the first row; skip it.
  const rows = parts.slice(1).map((seg) => {
    // Cut off at the next <tr or </tbody/</table to avoid pulling in everything after.
    const end = seg.search(/<\/tr>|<tr[\s>]|<\/tbody>|<\/table>/);
    return end === -1 ? seg : seg.slice(0, end);
  });

  for (const row of rows) {
    // Skip empty skeleton rows (no title link)
    if (!row.includes("gsc_a_at")) continue;

    // Title + link inside <a class="gsc_a_at" href="...">TITLE</a>
    const titleMatch = row.match(
      /<a[^>]*class="gsc_a_at"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/
    );
    if (!titleMatch) continue;
    const href = titleMatch[1].replace(/&amp;/g, "&");
    const title = stripHtml(titleMatch[2]).trim();
    if (!title) continue;

    // Two <div class="gs_gray"> nodes follow: authors, then venue (with year span inside)
    const grayMatches = [
      ...row.matchAll(/<div[^>]*class="gs_gray"[^>]*>([\s\S]*?)<\/div>/g),
    ];
    const authors = grayMatches[0] ? stripHtml(grayMatches[0][1]).trim() : "";
    const venueRawHtml = grayMatches[1] ? grayMatches[1][1] : "";

    // Year is inside <span class="gs_oph">, 2020</span> within the venue div,
    // OR in the right-hand <span class="gsc_a_h ...">2020</span>.
    let year = "";
    const ophMatch = venueRawHtml.match(
      /<span[^>]*class="gs_oph"[^>]*>([\s\S]*?)<\/span>/
    );
    if (ophMatch) {
      const m = stripHtml(ophMatch[1]).match(/(\d{4})/);
      if (m) year = m[1];
    }
    if (!year) {
      const yearMatch = row.match(
        /<span[^>]*class="gsc_a_h[^"]*"[^>]*>([\s\S]*?)<\/span>/
      );
      if (yearMatch) {
        const y = stripHtml(yearMatch[1]).trim();
        if (/^\d{4}$/.test(y)) year = y;
      }
    }

    // Strip the gs_oph span out of venue, then strip HTML.
    const venue = stripHtml(
      venueRawHtml.replace(/<span[^>]*class="gs_oph"[^>]*>[\s\S]*?<\/span>/g, "")
    )
      .replace(/[,\s]+$/, "")
      .trim();

    // Citations in <a class="gsc_a_ac ...">N</a>
    const citeMatch = row.match(
      /<a[^>]*class="gsc_a_ac[^"]*"[^>]*>([\s\S]*?)<\/a>/
    );
    const citations = citeMatch
      ? parseInt(stripHtml(citeMatch[1]).trim(), 10) || 0
      : 0;

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
    const rowMatches = html.match(/<tr[^>]*class="gsc_a_tr"[^>]*>/g) ?? [];
    console.log(
      `Scholar HTML length=${html.length}, gsc_a_tr opens=${rowMatches.length}, has gsc_a_at=${html.includes("gsc_a_at")}`
    );
    const pubs = parsePublications(html);
    console.log(`Parsed ${pubs.length} publications`);

    if (pubs.length === 0) {
      throw new Error(
        `Parser found 0 publications — Scholar layout may have changed (htmlLen=${html.length}, rowOpens=${rowMatches.length})`
      );
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
