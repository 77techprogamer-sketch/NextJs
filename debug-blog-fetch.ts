
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const stripHtmlTags = (html: string): string => {
    try {
        const parser = new DOMParser();
        // First pass: Decode HTML entities.
        const decodedDoc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
        const decodedText = decodedDoc ? (decodedDoc.body.textContent || "") : html;

        // Second pass: Strip actual HTML tags.
        const cleanDoc = parser.parseFromString(`<body>${decodedText}</body>`, 'text/html');
        return cleanDoc ? (cleanDoc.body.textContent || "") : decodedText;
    } catch (e) {
        return html;
    }
};
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

const IGNORED_CATEGORIES = ["insurance", "india", "blog", "posts", "news", "updates", "general"];

const getServiceHashtags = (serviceType: string): string[] => {
    const normalized = serviceType.replace(/-/g, '_');
    const words = normalized.split('_');
    const hashtag = '#' + words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return [hashtag.toLowerCase()];
};

async function runDebug() {
    console.log("Fetching RSS feed...");
    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";
    const response = await fetch(blogspotRssUrl);
    const xmlText = await response.text();

    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
    console.log(`Found ${items.length} items in RSS feed.`);

    const blogPosts = items.map(item => {
        const titleMatch = item.match(/<title>(.*?)<\/title>/);
        const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);
        const categories = Array.from(item.matchAll(/<category\s+[^>]*?term=['"](.*?)['"]/g))
            .map(m => m[1].toLowerCase())
            .filter(c => !IGNORED_CATEGORIES.includes(c));

        const rawSummary = descriptionMatch ? descriptionMatch[1].replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").trim() : "";
        const cleanSummary = rawSummary.split('https://insurance-support.vercel.app')[0];
        const description = stripHtmlTags(cleanSummary);
        const hashtags = (description.match(/#(\w+)/g) || []).map(h => h.toLowerCase());

        return {
            title: titleMatch ? titleMatch[1] : "Untitled",
            categories,
            hashtags,
            description,
            descriptionSnippet: description.substring(0, 100).replace(/\n/g, ' ')
        };
    });

    // TEST CASES
    const testServices = ["health_insurance", "life_insurance", "cyber_insurance"];

    for (const service of testServices) {
        console.log(`\n--- TESTING SERVICE: ${service} ---`);
        const keywords = serviceKeywords[service].map(k => k.toLowerCase());
        const targetHashtags = getServiceHashtags(service);
        console.log(`Keywords: ${JSON.stringify(keywords)}`);
        console.log(`Target Hashtags: ${JSON.stringify(targetHashtags)}`);

        const scoredPosts = blogPosts.map(post => {
            let score = 0;
            const reasons: string[] = [];
            const titleLower = post.title.toLowerCase();
            // note: using snippet for display but full desc for search approx
            // For this debug script I'll simple search title/hashtags/cats

            // 1. Hashtag Exact Match - 15 points
            if (post.hashtags.some(h => targetHashtags.includes(h))) {
                score += 15;
                reasons.push(`hashtag:${post.hashtags.filter(h => targetHashtags.includes(h))}`);
            }

            // 2. Title Keyword Match - 10 points
            keywords.forEach(k => {
                if (titleLower.includes(k)) {
                    score += 10;
                    reasons.push(`title_kw:${k}`);
                }
            });

            // 3. Category Match - 8 points
            if (post.categories.some(c =>
                targetHashtags.some(th => th.includes(c)) ||
                keywords.some(k => c.includes(k))
            )) {
                score += 8;
                reasons.push(`category_match`);
            }

            // 4. Description Whole Word Keyword Match - 3 points
            const descLower = post.description.toLowerCase();
            keywords.forEach(k => {
                const regex = new RegExp(`\\b${k}\\b`, 'i');
                if (regex.test(descLower.substring(0, 1500))) {
                    score += 3;
                    reasons.push(`desc_kw:${k}`);
                }
            });

            return { title: post.title, score, reasons, categories: post.categories };
        });

        // Sort and show top 5
        scoredPosts.sort((a, b) => b.score - a.score);
        scoredPosts.slice(0, 5).forEach(p => {
            console.log(`[${p.score}] ${p.title}`);
            console.log(`   Reasons: ${p.reasons.join(", ")}`);
            console.log(`   Cats: ${p.categories.join(", ")}`);
        });
    }
}

runDebug();
