import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ip_address, isp, city, region, country } = await req.json();

    if (!ip_address) {
      return new Response(JSON.stringify({ error: 'IP address is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create a Supabase client with the service role key to bypass RLS
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Implement rate limiting: Check for recent visits from the same IP
    const { data: recentVisits, error: fetchError } = await supabaseClient
      .from('visitors')
      .select('created_at')
      .eq('ip_address', ip_address)
      .gte('created_at', new Date(Date.now() - 60 * 1000).toISOString()); // Last 60 seconds

    if (fetchError) {
      console.error('Error fetching recent visits:', fetchError.message);
      return new Response(JSON.stringify({ error: 'Failed to check rate limit' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (recentVisits && recentVisits.length > 0) {
      // If there's any visit in the last 60 seconds, consider it rate-limited
      return new Response(JSON.stringify({ message: 'Rate limit exceeded for this IP address.' }), {
        status: 429, // Too Many Requests
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Insert the visitor data
    const { error: insertError } = await supabaseClient
      .from('visitors')
      .insert({ 
        ip_address, 
        isp,
        city,
        region,
        country,
      });

    if (insertError) {
      console.error('Error inserting visitor data:', insertError.message);
      return new Response(JSON.stringify({ error: 'Failed to log visitor' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Visitor logged successfully' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Edge Function error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});