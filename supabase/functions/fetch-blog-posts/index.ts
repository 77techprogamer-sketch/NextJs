import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";
    const response = await fetch(blogspotRssUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();

    // Simple XML parsing for title, link, and pubDate
    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
    const blogPosts = items.map(item => {
      const titleMatch = item.match(/<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link.*?href=['"](.*?)['"].*?\/>/); // Extract link from <link rel='alternate' type='text/html' href='...' />
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);

      return {
        title: titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "") : "No Title",
        url: linkMatch ? linkMatch[1] : "#",
        date: pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString(),
      };
    });

    return new Response(JSON.stringify(blogPosts), {
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