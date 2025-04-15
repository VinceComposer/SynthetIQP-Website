/*
  # Add Team Photos Storage and Update Profile Images
  
  1. Storage
    - Create storage bucket for team photos
    - Set up public access policy
  
  2. Profile Images
    - Update Vincenzo's profile image URL
*/

-- Create storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-photos', 'team-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to the bucket
CREATE POLICY "Give public access to team-photos"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'team-photos');

-- Update Vincenzo's profile image
UPDATE profile_images
SET image_url = 'https://bcokbbaojcskssszauog.supabase.co/storage/v1/object/public/team-photos/vincenzo-russotto.jpg'
WHERE name = 'Vincenzo Russotto';