/*
  # Update Vincenzo's profile image URL
  
  1. Updates
    - Fix the double slash in the image URL for Vincenzo's profile
*/

-- Update Vincenzo's profile image with the correct URL
UPDATE profile_images 
SET image_url = 'https://bcokbbaojcskssszauog.supabase.co/storage/v1/object/public/team-photos/vincenzo-russotto.jpg'
WHERE name = 'Vincenzo Russotto';