-- Create the notes table
-- Execute this SQL in the Supabase SQL Editor
-- (https://supabase.com/dashboard/project/xtjobupmjohbhnbttsfb/sql/new)

-- Create the table
CREATE TABLE notes (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert some sample data into the table
INSERT INTO notes (title)
VALUES
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');

-- Enable Row Level Security
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Create a policy to make the data publicly readable
CREATE POLICY "public can read notes"
ON public.notes
FOR SELECT TO anon
USING (true);
