// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://oofkcnptysrzuovmnzwp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vZmtjbnB0eXNyenVvdm1uendwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzQzMDQsImV4cCI6MjA2NDExMDMwNH0.yoLE8YfFk0HUdXPIqwInEdmlQXWelsMEQu3Js1sGBaw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);