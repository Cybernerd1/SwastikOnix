-- Create submissions table
CREATE TABLE IF NOT EXISTS public.submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  requirements TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous inserts" ON public.submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all submissions (for admin panel)
CREATE POLICY "Allow authenticated reads" ON public.submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow service role full access
CREATE POLICY "Service role has full access" ON public.submissions
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON public.submissions(created_at DESC);

-- Create an index on email for searching
CREATE INDEX IF NOT EXISTS submissions_email_idx ON public.submissions(email);

-- Add a trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
