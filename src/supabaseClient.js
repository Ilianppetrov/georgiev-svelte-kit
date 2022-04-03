import { createClient } from '@supabase/supabase-js';

const supabaseUrl = String(import.meta.env.VITE_SVELTE_APP_SUPABASE_URL);
const supabaseAnonKey = String(import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabaseUrl;
