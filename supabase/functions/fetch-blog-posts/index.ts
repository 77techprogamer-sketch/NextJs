import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const stripHtmlTags = (html: string): string => {
  try {
    const parser = new DOMParser();
    // First pass: Decode HTML entities.
    // If input is "&lt;b&gt;Text&lt;/b&gt;", this converts it to "<b>Text</b>"
    const decodedDoc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
    const decodedText = decodedDoc ? (decodedDoc.body.textContent || "") : html;

    // Second pass: Strip actual HTML tags.
    // If input was "<b>Text</b>", this converts it to "Text"
    const cleanDoc = parser.parseFromString(`<body>${decodedText}</body>`, 'text/html');
    return cleanDoc ? (cleanDoc.body.textContent || "") : decodedText;
  } catch (e) {
    return html;
  }
};

/**
 * STRICT SERVICE KEYWORDS
 */
const serviceKeywords: Record<string, string[]> = {
  "life_insurance": ["life insurance", "life cover", "जीवन बीमा", "death benefit", "policyholder", "whole life"],
  "health_insurance": ["health insurance", "medical insurance", "mediclaim", "hospitalization", "आरोग्य विमा", "medical cover", "base plan", "top up plan"],
  "term_insurance": ["term insurance", "pure protection", "टर्म बीमा", "income replacement", "term plan", "death protection"],
  "motor_insurance": ["motor insurance", "car insurance", "vehicle insurance", "मोटर बीमा", "two wheeler", "bike insurance", "third party insurance", "four wheeler", "auto insurance", "comprehensive car", "motor cover"],
  "sme_insurance": ["sme insurance", "fire insurance", "business insurance", "shopkeeper insurance", "commercial insurance", "workforce insurance"],
  "travel_insurance": ["travel insurance", "trip insurance", "journey insurance", "प्रवास विमा", "international travel", "overseas travel"],
  "pension_plans": ["pension plans", "retirement plans", "annuity", "पेन्शन योजना", "old age income", "pension scheme"],
  "ulip_plans": ["ulip plans", "unit linked", "market linked", "यूलिप", "investment insurance"],
  "wedding_insurance": ["wedding insurance", "marriage insurance", "विवाह विमा", "event cancellation"],
  "cyber_insurance": ["cyber insurance", "data breach", "online fraud", "सायबर विमा", "digital protection", "cyber security"],
};

// Generic categories to ignore during matching to prevent false positives
const IGNORED_CATEGORIES = ["insurance", "india", "blog", "posts", "news", "updates", "general"];

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
        console.log('[REQUEST_BODY]', JSON.stringify(body));
        serviceTypeSlug = body.serviceType || body.serviceTypeSlug;
      } catch (e) {
        console.log('[REQUEST_BODY_PARSE_ERROR]', (e as Error).message);
      }
    }

    const normalizedType = serviceTypeSlug ? serviceTypeSlug.toLowerCase().replace(/-/g, '_') : null;
    console.log(`[REQUEST] slug=${serviceTypeSlug} -> normalized=${normalizedType}`);
    console.log(`[KEYWORDS_AVAILABLE] ${normalizedType ? (serviceKeywords[normalizedType] ? 'YES' : 'NO - MISSING!') : 'NO SERVICE TYPE'}`);

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
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").trim() : "";

      const cleanSummary = rawSummary.split('https://insurance-support.vercel.app')[0];
      const description = stripHtmlTags(cleanSummary);

      const hashtags = (description.match(/#(\w+)/g) || []).map(h => h.toLowerCase());
      const categories = Array.from(item.matchAll(/<category\s+[^>]*?term=['"](.*?)['"]/g))
        .map(m => m[1].toLowerCase())
        .filter(c => !IGNORED_CATEGORIES.includes(c)); // Filter out generic categories

      return { title, url: postUrl, date, description, categories, hashtags };
    });

    let resultPost = null;
    const scores: { title: string; score: number; reasons: string[] }[] = [];

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
        // FIXED LOGIC: Corrected directionality. 
        // We check if the post Category includes the Keyword (e.g. Cat "Health Insurance" includes KW "Health")
        // OR if the Keyword includes the Category (BUT only if Category is not generic, handled by filter above)
        // Actually, safest is: Does the Category contains any of our SERVICE KEYWORDS?
        // e.g. Cat="Health Insurance Tips" -> contains "health insurance"? YES.
        if (post.categories.some(c =>
          targetHashtags.some(th => th.includes(c)) ||
          keywords.some(k => c.includes(k))
        )) {
          score += 8;
          matchReasons.push(`category`);
        }

        // 4. Description Whole Word Keyword Match - 3 points
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

      // Lowered Threshold: 5 points (more lenient matching)
      const matches = scoredPosts.filter(p => p.score >= 5);

      if (matches.length > 0) {
        matches.sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime());
        resultPost = matches[0];
        console.log(`[MATCH] for ${normalizedType}: "${resultPost.title}" Score=${resultPost.score}`);
      } else {
        console.log(`[NO_MATCH] for ${normalizedType}. Best score: ${Math.max(...scoredPosts.map(p => p.score), 0)}. Returning null instead of fallback.`);
        resultPost = null; // Explicitly set to null instead of falling through to latest post
      }
    } else {
      // Home page
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
    console.error('[ERROR]', (error as Error).message);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});