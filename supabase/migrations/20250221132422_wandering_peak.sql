/*
  # Fix profile images table setup
  
  1. New Tables
    - `profile_images`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `role` (text, not null)
      - `image_url` (text, not null)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `profile_images` table
    - Add policy for public read access

  3. Data
    - Insert team member data
*/

-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS profile_images;

-- Create profile_images table
CREATE TABLE profile_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profile_images ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON profile_images
  FOR SELECT
  TO public
  USING (true);

-- Insert team members data
INSERT INTO profile_images (name, role, image_url)
VALUES 
  ('Vincenzo Russotto', 'Chief Executive Officer', 'https://bcokbbaojcskssszauog.supabase.co/storage/v1/object/public/team-photos/vincenzo-russotto.jpg'),
  ('José Ramón Pérez', 'Chief Strategy Officer', ''),
  ('Carlos Mendoza', 'Chief Technology Officer', '');