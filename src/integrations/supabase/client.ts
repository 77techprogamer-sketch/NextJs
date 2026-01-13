"use client";

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://idzvdeemgxhwlkyphnel.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkenZkZWVtZ3hod2xreXBobmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNjU1NDAsImV4cCI6MjA3NzY0MTU0MH0.q11DxU-2I9KKzdb-pEBXM73_yLnqYuRSElie831uB6w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);