import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://baysgcuwqxefxwdpmypo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJheXNnY3V3cXhlZnh3ZHBteXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NjA4MTMsImV4cCI6MjA2MTUzNjgxM30.CmMMsQftTVmNqGCji4CioymScgXAfp25u0s1MhMAT90";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
