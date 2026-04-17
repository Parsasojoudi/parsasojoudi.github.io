-- Publications synced from Google Scholar
CREATE TABLE public.publications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT,
  venue TEXT,
  year TEXT,
  scholar_url TEXT,
  citations INTEGER DEFAULT 0,
  position INTEGER NOT NULL DEFAULT 0,
  last_synced_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;

-- Public read access (portfolio is public)
CREATE POLICY "Publications are viewable by everyone"
ON public.publications
FOR SELECT
USING (true);

-- No INSERT/UPDATE/DELETE policies = only service role (edge function) can mutate.

-- Index for ordering
CREATE INDEX idx_publications_position ON public.publications(position);

-- Track sync metadata (single-row table)
CREATE TABLE public.publications_sync_meta (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  last_synced_at TIMESTAMPTZ,
  last_status TEXT,
  last_error TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.publications_sync_meta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sync meta is viewable by everyone"
ON public.publications_sync_meta
FOR SELECT
USING (true);

INSERT INTO public.publications_sync_meta (id, last_synced_at) VALUES (1, NULL);

-- Generic timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_publications_updated_at
BEFORE UPDATE ON public.publications
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_publications_sync_meta_updated_at
BEFORE UPDATE ON public.publications_sync_meta
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();