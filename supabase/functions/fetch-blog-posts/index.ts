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

/**
 * STRICT SERVICE KEYWORDS
 * We use two-word specific terms to ensure accuracy.
 */
const serviceKeywords: Record<string, string[]> = {
  "life_insurance": ["life insurance", "life cover", "जीवन बीमा", "death benefit", "policyholder", "whole life"],
  "health_insurance": ["health insurance", "medical insurance", "mediclaim", "hospitalization", "आरोग्य विमा", "medical cover", "base plan", "top up plan"],
  "term_insurance": ["term insurance", "pure protection", "टर्म बीमा", "income replacement", "term plan", "death protection"],
  "motor_insurance": ["motor insurance", "car insurance", "vehicle insurance", "मोटर बीमा", "two wheeler", "bike insurance", "third party insurance"],
  "sme_insurance": ["sme insurance", "fire insurance", "business insurance", "shopkeeper insurance", "commercial insurance", "workforce insurance"],
  "travel_insurance": ["travel insurance", "trip insurance", "journey insurance", "प्रवास विमा", "international travel", "overseas travel"],
  "pension_plans": ["pension plans", "retirement plans", "annuity", "पेन्शन योजना", "old age income", "pension scheme"],
  "ulip_plans": ["ulip plans", "unit linked", "market linked", "यूलिप", "investment insurance"],
  "wedding_insurance": ["wedding insurance", "marriage insurance", "विवाह विमा", "event cancellation"],
  "cyber_insurance": ["cyber insurance", "data breach", "online fraud", "सायबर विमा", "digital protection", "cyber security"],
};

// Helper to convert service keys to potential hashtags
const getServiceHashtags = (serviceType: string): string[] => {
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
    const url = new URL(req.url);
    let serviceTypeSlug = url.searchParams.get('serviceType');

    if (!serviceTypeSlug) {
      try {
        const body = await req.json();
        serviceTypeSlug = body.serviceType || body.serviceTypeSlug;
      } catch (e) {
        // Fallback for body read
      }
    }

    const normalizedType = serviceTypeSlug ? serviceTypeSlug.toLowerCase().replace(/-/g, '_') : null;
    console.log(`[REQUEST] slug=${serviceTypeSlug} -> normalized=${normalizedType}`);

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

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "Untitled";
      const postUrl = linkMatch ? linkMatch[1] : (simpleLinkMatch ? simpleLinkMatch[1] : "#");
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "";

      // Remove common footer/link to avoid false positives (e.g. matching 'insurance-support' as a keyword)
      const cleanSummary = rawSummary.split('https://insurance-support.vercel.app')[0];
      const description = unescapeHtmlEntities(cleanSummary);

      const hashtags = (description.match(/#(\w+)/g) || []).map(h => h.toLowerCase());
      const categories = Array.from(item.matchAll(/<category\s+[^>]*?term=['"](.*?)['"]/g)).map(m => m[1].toLowerCase());

      return { title, url: postUrl, date, description, categories, hashtags };
    });

    let resultPost = null;
    const scores: any[] = [];

    if (normalizedType && serviceKeywords[normalizedType]) {
      const keywords = serviceKeywords[normalizedType].map(k => k.toLowerCase());
      const targetHashtags = getServiceHashtags(normalizedType);

      const scoredPosts = blogPosts.map(post => {
        let score = 0;
        const titleLower = post.title.toLowerCase();
        const descLower = post.description.toLowerCase();
        const matchReasons: string[] = [];

        // 1. Hashtag Exact Match - 15 points
        if (post.hashtags.some(h => targetHashtags.includes(h))) {
          score += 15;
          matchReasons.push(`hashtag:${targetHashtags}`);
        }

        // 2. Title Keyword Match - 10 points per unique keyword
        keywords.forEach(k => {
          if (titleLower.includes(k)) {
            score += 10;
            matchReasons.push(`title_kw:${k}`);
          }
        });

        // 3. Category Match - 8 points
        if (post.categories.some(c => targetHashtags.some(th => th.includes(c)) || keywords.some(k => k.includes(c)))) {
          score += 8;
          matchReasons.push(`category`);
        }

        // 4. Description Whole Word Keyword Match - 3 points
        // We use a stricter regex for description to avoid partial matches like "health" inside "healthcare"
        keywords.forEach(k => {
          const regex = new RegExp(`\\b${k}\\b`, 'i');
          if (regex.test(descLower.substring(0, 1500))) {
            score += 3;
            matchReasons.push(`desc_kw:${k}`);
          }
        });

        const scoredPost = { ...post, score, matchReasons };
        scores.push({ title: post.title, score, reasons: matchReasons });
        return scoredPost;
      });

      // Stricter Threshold: 8 points (Requires at least one title match or multiple hits)
      const matches = scoredPosts.filter(p => p.score >= 8);

      if (matches.length > 0) {
        matches.sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime());
        resultPost = matches[0];
        console.log(`[MATCH] for ${normalizedType}: "${resultPost.title}" Score=${resultPost.score}`);
      } else {
        console.log(`[NO_MATCH] for ${normalizedType}. Best score was ${Math.max(...scoredPosts.map(p => p.score), 0)}`);
      }
    } else {
      // Home page: just return latest
      resultPost = blogPosts.length > 0 ? blogPosts[0] : null;
      console.log(`[FALLBACK] Home page latest selected: "${resultPost?.title}"`);
    }

    return new Response(JSON.stringify({
      post: resultPost,
      debug: {
        service: normalizedType,
        all_scores: scores.sort((a, b) => b.score - a.score).slice(0, 3)
      }
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ERROR]', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});