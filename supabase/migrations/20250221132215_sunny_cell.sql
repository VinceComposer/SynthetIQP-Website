/*
  # Fix profile images and storage setup
  
  1. Tables
    - Create profile_images table if it doesn't exist
    - Enable RLS with public read access
  
  2. Storage
    - Create team-photos bucket if it doesn't exist
    - Set up public access policy
*/

-- Create profile_images table if it doesn't exist
CREATE TABLE IF NOT EXISTS profile_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profile_images ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists and create new one
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Allow public read access" ON profile_images;
    
    CREATE POLICY "Allow public read access"
      ON profile_images
      FOR SELECT
      TO public
      USING (true);
END $$;

-- Create storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-photos', 'team-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policy if it exists and create new one for storage
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Give public access to team-photos" ON storage.objects;
    
    CREATE POLICY "Give public access to team-photos"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'team-photos');
END $$;

-- Insert or update team members
INSERT INTO profile_images (name, role, image_url)
VALUES 
  ('Vincenzo Russotto', 'Chief Executive Officer', 'https://bcokbbaojcskssszauog.supabase.co/storage/v1/object/public/team-photos/vincenzo-russotto.jpg'),
  ('José Ramón Pérez', 'Chief Strategy Officer', ''),
  ('Carlos Mendoza', 'Chief Technology Officer', '')
ON CONFLICT (id) DO NOTHING;