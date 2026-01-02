
const unescapeHtml = (str) => {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
}

async function inspectCyber() {
    console.log("Fetching RSS feed...");
    const blogspotRssUrl = "https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss";

    try {
        const response = await fetch(blogspotRssUrl);
        const xmlText = await response.text();
        const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];

        const cyberPost = items.find(i => i.includes("Cyber Insurance"));
        if (cyberPost) {
            const descMatch = cyberPost.match(/<description>([\s\S]*?)<\/description>/);
            const rawDesc = descMatch ? descMatch[1] : "";
            const decoded = unescapeHtml(rawDesc); // Simple decode
            console.log("--- CYBER POST RAW DESCRIPTION (Snippet) ---");
            console.log(decoded.substring(0, 2000));
            console.log("--------------------------------------------");

            if (decoded.toLowerCase().includes("health insurance")) {
                console.log("!!! ALERT: 'health insurance' found in Cyber Post description !!!");
            } else {
                console.log("No 'health insurance' found in description.");
            }
        } else {
            console.log("Cyber post not found.");
        }

    } catch (e) { console.error(e); }
}

inspectCyber();
