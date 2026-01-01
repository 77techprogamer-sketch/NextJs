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
  "life_insurance": ["life insurance", "life cover", "जीवन बीमा", "death benefit", "policyholder", "death claim"],
  "health_insurance": ["health insurance", "medical", "hospital", "आरोग्य विमा", "mediclaim", "insurance plan"],
  "term_insurance": ["term insurance", "pure protection", "टर्म बीमा", "income replacement", "term plan"],
  "motor_insurance": ["motor insurance", "car insurance", "vehicle", "मोटर बीमा", "two wheeler", "bike insurance"],
  "sme_insurance": ["sme insurance", "fire insurance", "home insurance", "business insurance", "shopkeeper", "commercial"],
  "travel_insurance": ["travel insurance", "trip", "journey", "प्रवास विमा", "international travel", "overseas"],
  "pension_plans": ["pension plans", "retirement", "annuity", "पेन्शन योजना", "old age", "pension scheme"],
  "ulip_plans": ["ulip plans", "investment", "market-linked", "यूलिप", "wealth", "unit linked"],
  "wedding_insurance": ["wedding insurance", "honeymoon", "marriage", "विवाह विमा", "event insurance"],
  "cyber_insurance": ["cyber insurance", "data breach", "online fraud", "सायबर विमा", "digital protection"],
};

// Helper to convert service keys to potential hashtags
const getServiceHashtags = (serviceType: string): string[] => {
  // Normalize to underscore first
  const normalized = serviceType.replace(/-/g, '_');
  const words = normalized.split('_');
  const hashtag = '#' + words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return [hashtag.toLowerCase()];
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Get serviceType from URL or Body
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

    // NORMALIZE: Convert health-insurance to health_insurance to match map keys
    const normalizedType = serviceTypeSlug ? serviceTypeSlug.toLowerCase().replace(/-/g, '_') : null;
    console.log(`Input: ${serviceTypeSlug} -> Normalized: ${normalizedType}`);

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
      const categories = Array.from(item.matchAll(/<category\s+[^>]*?term=['"](.*?)['"]/g)).map(m => m[1].toLowerCase());

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "Untitled";
      const url = linkMatch ? linkMatch[1] : (simpleLinkMatch ? simpleLinkMatch[1] : "#");
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "";
      const description = unescapeHtmlEntities(rawSummary);
      const hashtags = (description.match(/#(\w+)/g) || []).map(h => h.toLowerCase());

      return { title, url, date, description, categories, hashtags };
    });

    let resultPost = null;
    let debugInfo = { received: serviceTypeSlug, normalized: normalizedType, matchType: 'none', score: 0 };

    if (normalizedType && serviceKeywords[normalizedType]) {
      const keywords = serviceKeywords[normalizedType].map(k => k.toLowerCase());
      const targetHashtags = getServiceHashtags(normalizedType);

      const scoredPosts = blogPosts.map(post => {
        let score = 0;
        const titleLower = post.title.toLowerCase();
        const descLower = post.description.toLowerCase();
        const catsLower = post.categories.join(" ");

        // Match Reasons
        if (post.hashtags.some(h => targetHashtags.includes(h))) score += 12; // Higher priority for hashtags
        if (post.categories.some(c => targetHashtags.some(th => th.includes(c)) || keywords.some(k => k.includes(c)))) score += 10;
        if (keywords.some(k => titleLower.includes(k))) score += 8;

        // Body match - only if keywords are very specific or common in description
        const keywordMatchesInBody = keywords.filter(k => descLower.substring(0, 1000).includes(k)).length;
        score += keywordMatchesInBody * 2;

        return { ...post, score };
      });

      // Filter by threshold (min 6 points for specific service pages)
      const matches = scoredPosts.filter(p => p.score >= 6);

      if (matches.length > 0) {
        matches.sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        resultPost = matches[0];
        debugInfo.matchType = 'filtered';
        debugInfo.score = resultPost.score;
      } else {
        debugInfo.matchType = 'no-threshold';
      }
    } else {
      // Home page or unknown service: just return absolute latest
      resultPost = blogPosts.length > 0 ? blogPosts[0] : null;
      debugInfo.matchType = 'latest-fallback';
    }

    return new Response(JSON.stringify({ post: resultPost, debug: debugInfo }), {
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