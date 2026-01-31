-- Migration: Add phone column to existing submissions table
-- Run this if you already have the submissions table created

-- Add the phone column
ALTER TABLE public.submissions 
ADD COLUMN IF NOT EXISTS phone TEXT;

-- Set it as NOT NULL with a default value for existing rows
-- First, update any existing rows with a placeholder
UPDATE public.submissions 
SET phone = 'Not provided' 
WHERE phone IS NULL;

-- Now make it NOT NULL
ALTER TABLE public.submissions 
ALTER COLUMN phone SET NOT NULL;

-- Verify the change
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'submissions' 
AND table_schema = 'public'
ORDER BY ordinal_position;
