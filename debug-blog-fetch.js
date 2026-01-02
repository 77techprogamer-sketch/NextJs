
const serviceKeywords = {
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

const getServiceHashtags = (serviceType) => {
    const normalized = serviceType.replace(/-/g, '_');
    const words = normalized.split('_');
    const hashtag = '#' + words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return [hashtag.toLowerCase()];
};

// Simple unescape for basic entities
const unescapeHtml = (str) => {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
}

async function runDebug() {
    console.log("Fetching RSS feed...");
    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";

    try {
        const response = await fetch(blogspotRssUrl);
        const xmlText = await response.text();

        const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
        console.log(`Found ${items.length} items in RSS feed.`);

        const blogPosts = items.map(item => {
            const titleMatch = item.match(/<title>(.*?)<\/title>/);
            const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);

            // Extract Categories
            const categories = [];
            const catRegex = /<category\s+[^>]*?term=['"](.*?)['"]/g;
            let match;
            while ((match = catRegex.exec(item)) !== null) {
                if (!IGNORED_CATEGORIES.includes(match[1].toLowerCase())) {
                    categories.push(match[1].toLowerCase());
                }
            }

            const rawSummary = descriptionMatch ? descriptionMatch[1].replace("<![CDATA[", "").replace("]]>", "").trim() : "";
            const cleanSummary = rawSummary.split('https://insurance-support.vercel.app')[0];
            const description = unescapeHtml(cleanSummary);
            const descLower = description.toLowerCase();

            // Extract Hashtags
            const hashtags = (description.match(/#(\w+)/g) || []).map(h => h.toLowerCase());

            return {
                title: titleMatch ? titleMatch[1] : "Untitled",
                categories,
                hashtags,
                descLower
            };
        });

        // TEST CASES
        const testServices = ["health_insurance", "life_insurance", "cyber_insurance"];

        for (const service of testServices) {
            console.log(`\n--- TESTING SERVICE: ${service} ---`);
            const keywords = serviceKeywords[service].map(k => k.toLowerCase());
            const targetHashtags = getServiceHashtags(service);
            console.log(`Keywords: ${JSON.stringify(keywords)}`);

            const scoredPosts = blogPosts.map(post => {
                let score = 0;
                const reasons = [];
                const titleLower = post.title.toLowerCase();

                // 1. Hashtag Exact Match - 15 points
                if (post.hashtags.some(h => targetHashtags.includes(h))) {
                    score += 15;
                    reasons.push(`hashtag`);
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

                // 4. Desc Match - 3 points
                keywords.forEach(k => {
                    // Simple boundaries check for node script
                    if (post.descLower.includes(k)) {
                        // Simplified check, but good enough for scoring proof
                        score += 3;
                        reasons.push(`desc_kw:${k}`);
                    }
                });

                return { title: post.title, score, reasons, categories: post.categories };
            });

            // Sort and show top 5
            scoredPosts.sort((a, b) => b.score - a.score);
            console.log("TOP SCORES:");
            scoredPosts.slice(0, 5).forEach(p => {
                console.log(`[${p.score}] ${p.title}`);
                console.log(`   Reasons: ${p.reasons.join(", ")}`);
                console.log(`   Cats: ${p.categories.join(", ")}`);
            });
        }

    } catch (e) {
        console.error("Error:", e);
    }
}

runDebug();
