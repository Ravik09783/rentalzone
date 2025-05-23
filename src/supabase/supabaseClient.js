// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual values from Supabase dashboard
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
