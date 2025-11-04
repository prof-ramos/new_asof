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

-- Newsletter subscriptions
CREATE TABLE newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  segments text[] NOT NULL DEFAULT '{}',
  consent_lgpd boolean NOT NULL DEFAULT false,
  consent_timestamp timestamptz NOT NULL DEFAULT timezone('utc'::text, now()),
  source text NOT NULL DEFAULT 'newsletter-page',
  created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE UNIQUE INDEX newsletter_subscriptions_email_idx
ON newsletter_subscriptions (lower(email));

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public can insert newsletter"
ON newsletter_subscriptions
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "service role can select newsletter"
ON newsletter_subscriptions
FOR SELECT TO service_role
USING (true);
