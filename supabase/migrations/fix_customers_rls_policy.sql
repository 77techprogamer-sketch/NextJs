-- Fix: Allow anonymous users to INSERT into the customers table
-- This is required for QuoteForm and ShortLeadForm to capture lead data
-- Without this policy, all form submissions fail with error code 42501:
-- "new row violates row-level security policy for table customers"

-- 1. Allow anonymous inserts (lead capture from public forms)
CREATE POLICY "Allow anonymous inserts" 
ON public.customers
FOR INSERT 
TO anon
WITH CHECK (true);

-- 2. Allow authenticated users full read access (for engagement dashboard)
CREATE POLICY "Allow authenticated reads" 
ON public.customers
FOR SELECT 
TO authenticated
USING (true);
