import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts"; // Import DOMParser for Deno

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Utility function to unescape HTML entities while preserving HTML tags
const unescapeHtmlEntities = (html: string): string => {
  const parser = new DOMParser();
  // Wrap in a body tag to ensure proper parsing of HTML fragments
  const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
  return doc.body.innerHTML; // Get the HTML content back, with entities unescaped
};

// Mapping of service slugs to keywords for filtering blog posts
const serviceKeywords: Record<string, string[]> = {
  "life-insurance": ["life insurance", "life cover", "जीवन बीमा", "आयुर्विमा", "வாழ்வு காப்பீடு", "ಜೀವನ ವಿಮೆ", "జీవిత బీమా", "ജീവിത ഇൻഷുറൻസ്", "ਜੀਵਨ ਬੀਮਾ"],
  "health-insurance": ["health insurance", "medical", "आरोग्य विमा", "सுகாதார காப்பீடு", "ಆರೋಗ್ಯ ವಿಮೆ", "ఆరోగ్య బీమా", "ആരോഗ്യ ഇൻഷുറൻസ്", "ਸਿਹਤ ਬੀਮਾ"],
  "term-insurance": ["term insurance", "pure protection", "टर्म बीमा", "கால காப்பீடு", "ಅವಧಿ ವಿಮೆ", "టర్మ్ బీమా", "ടേം ഇൻഷുറൻസ്", "ਟਰਮ ਬੀਮਾ"],
  "motor-insurance": ["motor insurance", "car insurance", "vehicle", "मोटर बीमा", "மோட்டார் காப்பீடு", "ಮೋಟಾರ್ ವಿಮೆ", "మోటార్ బీమా", "മോട്ടോർ ഇൻഷുറൻസ്", "ਮੋਟਰ ਬੀਮਾ"],
  "sme-insurance": ["sme insurance", "fire insurance", "home insurance", "business insurance", "એસએમઇ", "अग्नि", "गृह", "એસએમઇ", "நெருப்பு", "வீடு", "ಎಸ್ಎಂಇ", "ಅಗ್ನಿ", "ಗೃಹ", "ఎస్ఎంఈ", "ಅಗ್ನಿ", "ಗೃಹ", "എസ്എംഇ", "ഫയർ", "ഹോം", "ਐਸਐਮਈ", "ਫਾਇਰ", "ਹੋਮ"],
  "travel-insurance": ["travel insurance", "trip", "journey", "प्रवास विमा", "பயண காப்பீடு", "ಪ್ರವಾಸ ವಿಮೆ", "ప్రయాణ బీಮಾ", "യാത്രാ ഇൻഷുറൻസ്", "ਯਾਤਰਾ ਬੀਮਾ"],
  "pension-plans": ["pension plans", "retirement", "income", "पेन्शन योजना", "ஓய்வூதிய திட்டங்கள்", "ಪಿಂಚಣಿ ಯೋಜನೆಗಳು", "పెన్షన్ ప్రణాళికలు", "പെൻഷൻ പദ്ധതികൾ", "ਪੈਨਸ਼ਨ ਯੋਜਨਾਵਾਂ"],
  "ulip-plans": ["ulip plans", "investment", "market-linked", "यूलिप", "யூலிப்", "ಯುಲಿಪ್", "యూలిప్", "യൂലിപ്", "ਯੂਲਿਪ"],
  "wedding-insurance": ["wedding insurance", "honeymoon", "marriage", "विवाह विमा", "திருமணம்", "தேனிலவு", "ವಿವಾಹ", "ಹನಿಮೂನ್", "వివాహ", "హనీమూన్", "വിവാഹ", "ഹണിമൂൺ", "ਵਿਆਹ", "ਹਨੀਮੂਨ"],
  "cyber-insurance": ["cyber insurance", "data breach", "online fraud", "सायबर विमा", "சைபர் காப்பீடு", "ಸೈಬರ್ ವಿಮೆ", "సైబర్ బీమా", "സൈബർ ഇൻഷುറൻസ്", "ਸਾਈਬਰ ਬੀਮਾ"],
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let serviceTypeSlug = url.searchParams.get('serviceType');

    // If not in URL, try to check the request body (for invoke calls)
    if (!serviceTypeSlug) {
      try {
        const body = await req.json();
        serviceTypeSlug = body.serviceType || body.serviceTypeSlug;
      } catch (e) {
        // Body might not be JSON or might be empty, ignore
      }
    }

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
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);

      const title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "No Title";
      const url = linkMatch ? linkMatch[1] : "#";
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "No summary available.";
      const description = unescapeHtmlEntities(rawSummary); // Use the new unescapeHtmlEntities function

      return { title, url, date, description };
    });

    let filteredPosts = blogPosts;

    if (serviceTypeSlug && serviceKeywords[serviceTypeSlug]) {
      const keywords = serviceKeywords[serviceTypeSlug].map(k => k.toLowerCase());
      filteredPosts = blogPosts.filter(post => {
        const titleLower = post.title.toLowerCase();
        const descriptionLower = post.description.toLowerCase();
        return keywords.some(keyword => titleLower.includes(keyword) || descriptionLower.includes(keyword));
      });
    }

    // Always sort the (potentially filtered) posts by date to get the latest among them
    filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Return only the latest matching post, or null if none found
    const latestMatchingPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

    return new Response(JSON.stringify({ post: latestMatchingPost }), { // Return a single 'post'
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