-- Alternative fix: Modify existing table without dropping it
-- Use this if you already have data in the submissions table

-- Add default values to existing columns
ALTER TABLE public.submissions 
  ALTER COLUMN created_at SET DEFAULT timezone('utc'::text, now());

ALTER TABLE public.submissions 
  ALTER COLUMN updated_at SET DEFAULT timezone('utc'::text, now());

-- Update any existing NULL values (if any)
UPDATE public.submissions 
SET created_at = timezone('utc'::text, now()) 
WHERE created_at IS NULL;

UPDATE public.submissions 
SET updated_at = timezone('utc'::text, now()) 
WHERE updated_at IS NULL;

-- Ensure the columns are NOT NULL
ALTER TABLE public.submissions 
  ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE public.submissions 
  ALTER COLUMN updated_at SET NOT NULL;

-- Add the auto-update trigger if it doesn't exist
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if it exists and recreate
DROP TRIGGER IF EXISTS set_updated_at ON public.submissions;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Verify the changes
SELECT column_name, column_default, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'submissions' 
AND table_schema = 'public'
ORDER BY ordinal_position;
