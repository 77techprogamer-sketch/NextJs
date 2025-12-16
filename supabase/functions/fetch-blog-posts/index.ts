import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts"; // Import DOMParser for Deno

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Utility function to unescape HTML entities without stripping tags
const unescapeHtml = (html: string): string => {
  const parser = new DOMParser();
  // Wrap the HTML in a body tag to ensure it's parsed as content
  const doc = parser.parseFromString(`<!DOCTYPE html><html><body>${html}</body></html>`, 'text/html');
  // Return the innerHTML of the body, which will have entities unescaped and tags preserved
  return doc.body.innerHTML || '';
};

// Mapping of service slugs to keywords for filtering blog posts
const serviceKeywords: Record<string, string[]> = {
  "life-insurance": ["life insurance", "life cover", "जीवन बीमा", "आयुर्विमा", "வாழ்வு காப்பீடு", "ಜೀವನ ವಿಮೆ", "జీవిత బీಮಾ", "ജീവിത ഇൻഷുറൻസ്", "ਜੀਵਨ ਬੀਮਾ"],
  "health-insurance": ["health insurance", "medical", "आरोग्य विमा", "सுகாதார காப்பீடு", "ಆರೋಗ್ಯ ವಿಮೆ", "ಆರೋಗ್ಯ ಬೀಮಾ", "ആരോഗ്യ ഇൻഷുറൻസ്", "ਸਿਹਤ ਬੀਮਾ"],
  "term-insurance": ["term insurance", "pure protection", "टर्म बीमा", "கால காப்பீடு", "ಅವಧಿ ವಿಮೆ", "టర్మ్ బీమా", "ടേം ഇൻഷുറൻസ്", "ਟਰਮ ਬੀਮਾ"],
  "motor-insurance": ["motor insurance", "car insurance", "vehicle", "मोटर बीमा", "மோட்டார் காப்பீடு", "ಮೋಟಾರ್ ವಿಮೆ", "మోటార్ బీಮಾ", "മോട്ടോർ ഇൻഷുറൻസ്", "ਮੋਟਰ ਬੀਮਾ"],
  "sme-insurance": ["sme insurance", "fire insurance", "home insurance", "business insurance", "એસએમઇ", "अग्नि", "गृह", "એસએમઇ", "நெருப்பு", "வீடு", "ಎಸ್ಎಂಇ", "ಅಗ್ನಿ", "ಗೃಹ", "ఎస్ఎంఈ", "అగ్ని", "గృహ", "എസ്എംഇ", "ഫയർ", "ഹോം", "ਐਸਐਮਈ", "ਫਾਇਰ", "ਹੋਮ"],
  "travel-insurance": ["travel insurance", "trip", "journey", "प्रवास विमा", "பயண காப்பீடு", "ಪ್ರವಾಸ ವಿಮೆ", "ಪ್ರಯಾಣ ಬೀಮಾ", "യാത്രാ ഇൻഷുറൻസ്", "ਯਾਤਰਾ ਬੀਮਾ"],
  "pension-plans": ["pension plans", "retirement", "income", "पेन्शन योजना", "ஓய்வூதிய திட்டங்கள்", "ಪಿಂಚಣಿ ಯೋಜನೆಗಳು", "పెన్షన్ ప్రణాళికలు", "പെൻഷൻ പദ്ധതികൾ", "ਪੈਨਸ਼ਨ ਯੋਜਨਾਵਾਂ"],
  "ulip-plans": ["ulip plans", "investment", "market-linked", "यूलिप", "யூலிப்", "ಯುಲಿಪ್", "యూలిప్", "യൂലിപ്", "ਯੂਲਿਪ"],
  "wedding-insurance": ["wedding insurance", "honeymoon", "marriage", "विवाह विमा", "திருமணம்", "தேனிலவு", "ವಿವಾಹ", "ಹನಿಮೂನ್", "విವಾಹ", "హనీమూన్", "വിവാഹ", "ഹണിമൂൺ", "ਵਿਆਹ", "ਹਨੀਮੂਨ"],
  "cyber-insurance": ["cyber insurance", "data breach", "online fraud", "सायबर विमा", "சைபர் காப்பீடு", "ಸೈಬರ್ ವಿಮೆ", "ಸೈಬರ್ ಬೀಮಾ", "സൈബർ ഇൻഷുറൻസ്", "ਸਾਈਬਰ ਬੀਮਾ"],
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const serviceTypeSlug = url.searchParams.get('serviceType');
    console.log(`[Edge Function] Request received for serviceType: ${serviceTypeSlug || 'none'}`);

    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";
    console.log('[Edge Function] Attempting to fetch RSS feed from:', blogspotRssUrl);
    const response = await fetch(blogspotRssUrl);

    if (!response.ok) {
      console.error(`[Edge Function] Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();
    console.log('[Edge Function] Successfully fetched RSS feed. Parsing XML...');

    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
    console.log(`[Edge Function] Found ${items.length} RSS items.`);

    const blogPosts = items.map(item => {
      const titleMatch = item.match(/<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link\s+rel=['"]alternate['"]\s+type=['"]text\/html['"]\s+href=['"](.*?)['"]/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "No Title";
      const url = linkMatch ? linkMatch[1] : "#";
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "No summary available.";
      const description = unescapeHtml(rawSummary); // Unescape HTML entities here, preserving tags

      console.log(`[Edge Function] Parsed post: Title="${title}", URL="${url}", Date="${date}", Description length=${description.length}`);
      return { title, url, date, description };
    });

    let filteredPosts = blogPosts;

    if (serviceTypeSlug && serviceKeywords[serviceTypeSlug]) {
      const keywords = serviceKeywords[serviceTypeSlug].map(k => k.toLowerCase());
      console.log(`[Edge Function] Filtering with keywords for '${serviceTypeSlug}': ${keywords.join(', ')}`);

      filteredPosts = blogPosts.filter(post => {
        const titleLower = post.title.toLowerCase();
        const descriptionLower = post.description.toLowerCase();
        const isMatch = keywords.some(keyword => titleLower.includes(keyword) || descriptionLower.includes(keyword));
        if (isMatch) {
          console.log(`[Edge Function] Matched post: "${post.title}"`);
        }
        return isMatch;
      });
      console.log(`[Edge Function] Found ${filteredPosts.length} posts after filtering.`);
    } else if (serviceTypeSlug) {
      console.log(`[Edge Function] No keywords defined for serviceType: '${serviceTypeSlug}'. Returning all posts.`);
    } else {
      console.log(`[Edge Function] No serviceType provided. Returning all posts.`);
    }

    // Always sort the (potentially filtered) posts by date to get the latest among them
    filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Return only the latest matching post, or null if none found
    const latestMatchingPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

    if (latestMatchingPost) {
      console.log(`[Edge Function] Returning latest matching post: "${latestMatchingPost.title}"`);
    } else {
      console.log('[Edge Function] No matching blog post found.');
    }

    return new Response(JSON.stringify({ post: latestMatchingPost }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Edge Function] Error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});