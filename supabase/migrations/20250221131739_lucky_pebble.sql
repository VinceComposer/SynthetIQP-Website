/*
  # Add Profile Images Table
  
  1. New Tables
    - `profile_images` - Stores team member profile images
      - `id` (uuid, primary key)
      - `name` (text) - Team member name
      - `role` (text) - Team member role
      - `image_url` (text) - URL to profile image
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS profile_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profile_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON profile_images
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data for Vincenzo
INSERT INTO profile_images (name, role, image_url)
VALUES (
  'Vincenzo Russotto',
  'Chief Executive Officer',
  'https://bcokbbaojcskssszauog.supabase.co/storage/v1/object/public/team-photos/vincenzo-russotto.jpg'
);