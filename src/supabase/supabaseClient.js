// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual values from Supabase dashboard
const supabaseUrl = 'https://opckeukdnpytblnkfuwf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wY2tldWtkbnB5dGJsbmtmdXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTg0MDksImV4cCI6MjA2MjI5NDQwOX0.xb1B2wvvXN-j7n2lcBdfcQ6cpRgTNwqMlS1rah2Jdvg'


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
