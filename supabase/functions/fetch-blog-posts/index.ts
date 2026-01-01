import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const unescapeHtmlEntities = (html: string): string => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
    return doc ? doc.body.innerHTML : html;
  } catch (e) {
    return html;
  }
};

const serviceKeywords: Record<string, string[]> = {
  "life_insurance": ["life insurance", "life cover", "जीवन बीमा", "death benefit", "policyholder"],
  "health_insurance": ["health insurance", "medical", "hospital", "आरोग्य विमा", "mediclaim"],
  "term_insurance": ["term insurance", "pure protection", "टर्म बीमा", "income replacement"],
  "motor_insurance": ["motor insurance", "car insurance", "vehicle", "मोटर बीमा", "two wheeler"],
  "sme_insurance": ["sme insurance", "fire insurance", "home insurance", "business insurance", "shopkeeper"],
  "travel_insurance": ["travel insurance", "trip", "journey", "प्रवास विमा", "international travel"],
  "pension_plans": ["pension plans", "retirement", "annuity", "पेन्शन योजना", "old age"],
  "ulip_plans": ["ulip plans", "investment", "market-linked", "यूलिप", "wealth"],
  "wedding_insurance": ["wedding insurance", "honeymoon", "marriage", "विवाह विमा", "event insurance"],
  "cyber_insurance": ["cyber insurance", "data breach", "online fraud", "सायबर विमा", "digital protection"],
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let serviceTypeSlug = url.searchParams.get('serviceType');

    if (!serviceTypeSlug) {
      try {
        const body = await req.json();
        serviceTypeSlug = body.serviceType || body.serviceTypeSlug;
      } catch (e) {
        // Body might not be JSON or might be empty
      }
    }

    console.log(`Analyzing request for serviceType: ${serviceTypeSlug}`);

    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";
    const response = await fetch(blogspotRssUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];

    const blogPosts = items.map(item => {
      const titleMatch = item.match(/<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link\s+rel=['"]alternate['"]\s+type=['"]text\/html['"]\s+href=['"](.*?)['"]/);
      // If alternate link not found, try simple link tag
      const simpleLinkMatch = item.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);
      const categories = Array.from(item.matchAll(/<category\s+[^>]*?term=['"](.*?)['"]/g)).map(m => m[1]);

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "Untitled";
      const url = linkMatch ? linkMatch[1] : (simpleLinkMatch ? simpleLinkMatch[1] : "#");
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "";
      const description = unescapeHtmlEntities(rawSummary);

      return { title, url, date, description, categories };
    });

    let filteredPosts = blogPosts;

    if (serviceTypeSlug && serviceKeywords[serviceTypeSlug]) {
      const keywords = serviceKeywords[serviceTypeSlug].map(k => k.toLowerCase());
      filteredPosts = blogPosts.filter(post => {
        const titleLower = post.title.toLowerCase();
        const descriptionLower = post.description.toLowerCase();
        const catsLower = post.categories.join(" ").toLowerCase();

        return keywords.some(keyword =>
          titleLower.includes(keyword) ||
          descriptionLower.includes(keyword) ||
          catsLower.includes(keyword)
        );
      });
      console.log(`Filtered to ${filteredPosts.length} posts for ${serviceTypeSlug}`);
    }

    // Sort by date latest first
    filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // If we have filtered posts, pick the latest. 
    // If we have no matches for a specific category, we return the absolute latest post 
    // so the section isn't empty on the home page, but for specific services, 
    // maybe we should return null if no match found to avoid "wrong" articles?
    // Let's decide: if serviceTypeSlug is provided but NO matches, return null.
    // That way "wrong" articles won't show.

    let resultPost = null;
    if (serviceTypeSlug) {
      resultPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    } else {
      // Home page: just return absolute latest
      resultPost = blogPosts.length > 0 ? blogPosts[0] : null;
    }

    return new Response(JSON.stringify({ post: resultPost }), {
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