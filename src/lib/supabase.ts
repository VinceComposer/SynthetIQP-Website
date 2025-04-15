import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wgvfirpfpckcwifbovkq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndmZpcnBmcGNrY3dpZmJvdmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMzU4ODMsImV4cCI6MjA1MzgxMTg4M30.SeXFf06PvP5N0hEvBHp7xLH47FpG6h1BRm5sVGXst-U';

export const supabase = createClient(supabaseUrl, supabaseKey);