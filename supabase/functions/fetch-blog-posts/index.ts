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

// Helper to convert service keys to potential hashtags
const getServiceHashtags = (serviceType: string): string[] => {
  const words = serviceType.split('_');
  const hashtag = '#' + words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return [hashtag.toLowerCase()];
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
      const simpleLinkMatch = item.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);

      // Extract categories from RSS if present
      const categories = Array.from(item.matchAll(/<category\s+[^>]*?term=['"](.*?)['"]/g)).map(m => m[1].toLowerCase());

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "Untitled";
      const url = linkMatch ? linkMatch[1] : (simpleLinkMatch ? simpleLinkMatch[1] : "#");
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "";
      const description = unescapeHtmlEntities(rawSummary);

      // Extract hashtags from description
      const hashtags = (description.match(/#(\w+)/g) || []).map(h => h.toLowerCase());

      return { title, url, date, description, categories, hashtags };
    });

    let resultPost = null;

    if (serviceTypeSlug && serviceKeywords[serviceTypeSlug]) {
      const keywords = serviceKeywords[serviceTypeSlug].map(k => k.toLowerCase());
      const targetHashtags = getServiceHashtags(serviceTypeSlug);

      const scoredPosts = blogPosts.map(post => {
        let score = 0;
        const titleLower = post.title.toLowerCase();
        const descLower = post.description.toLowerCase();

        // 1. Hashtag Match (High confidence) - 10 points
        if (post.hashtags.some(h => targetHashtags.includes(h))) score += 10;

        // 2. Category Match (High confidence) - 8 points
        if (post.categories.some(c => targetHashtags.some(th => th.includes(c)) || keywords.some(k => k.includes(c)))) score += 8;

        // 3. Title Keyword Match - 6 points per first unique keyword found
        if (keywords.some(k => titleLower.includes(k))) score += 6;

        // 4. Description/Body Match (Lower confidence) - 2 points
        // Only check first 500 chars to avoid "mentions in passing"
        const snippet = descLower.substring(0, 500);
        if (keywords.some(k => snippet.includes(k))) score += 2;

        return { ...post, score };
      });

      // Filter by threshold (min 5 points for specific service pages)
      const matches = scoredPosts.filter(p => p.score >= 5);

      if (matches.length > 0) {
        // Sort by score (desc) then date (desc)
        matches.sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        resultPost = matches[0];
        console.log(`Found optimal match for ${serviceTypeSlug}: "${resultPost.title}" (Score: ${resultPost.score})`);
      } else {
        console.log(`No high-confidence matches for ${serviceTypeSlug}. Threshold not met.`);
      }
    } else {
      // Home page: just return absolute latest
      resultPost = blogPosts.length > 0 ? blogPosts[0] : null;
      console.log(`Requested latest post for Home page: "${resultPost?.title}"`);
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