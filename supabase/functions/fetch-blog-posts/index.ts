import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts"; // Import DOMParser for Deno

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Utility function to decode HTML entities using Deno's DOMParser
const decodeHtmlEntities = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc?.documentElement?.textContent || '';
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";
    console.log('Attempting to fetch RSS feed from:', blogspotRssUrl);
    const response = await fetch(blogspotRssUrl);

    if (!response.ok) {
      console.error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();
    console.log('Successfully fetched RSS feed. Parsing XML...');

    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
    console.log(`Found ${items.length} RSS items.`);

    const blogPosts = items.map(item => {
      const titleMatch = item.match(/<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link\s+rel=['"]alternate['"]\s+type=['"]text\/html['"]\s+href=['"](.*?)['"]/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/); // Extract description

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "No Title";
      const url = linkMatch ? linkMatch[1] : "#";
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "No summary available.";
      const summary = decodeHtmlEntities(rawSummary); // Decode HTML entities here

      console.log(`Parsed post: Title="${title}", URL="${url}", Date="${date}", Summary length=${summary.length}`);
      return { title, url, date, description: summary }; // Use 'description' to match RSS structure
    });

    return new Response(JSON.stringify({ posts: blogPosts }), { // Wrap in 'posts' object
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