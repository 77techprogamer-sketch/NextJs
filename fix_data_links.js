const fs = require('fs');
const path = require('path');

// City to State mapping from cityData.ts
const cityToState = {
    "bangalore": "Karnataka",
    "bangalore-indiranagar": "Karnataka",
    "bangalore-koramangala": "Karnataka",
    "bangalore-jayanagar": "Karnataka",
    "bangalore-whitefield": "Karnataka",
    "chennai": "Tamil Nadu",
    "vellore": "Tamil Nadu",
    "hosur": "Tamil Nadu",
    "kanchipuram": "Tamil Nadu",
    "mysore": "Karnataka",
    "coimbatore": "Tamil Nadu",
    "salem": "Tamil Nadu",
    "tirupati": "Andhra Pradesh",
    "hyderabad": "Telangana",
    "pune": "Maharashtra",
    "mumbai": "Maharashtra",
    "ahmedabad": "Gujarat",
    "kolkata": "West Bengal",
    "lucknow": "Uttar Pradesh",
    "jaipur": "Rajasthan",
    "chandigarh": "Chandigarh",
    "kochi": "Kerala",
    "trivandrum": "Kerala",
    "madurai": "Tamil Nadu",
    "trichy": "Tamil Nadu",
    "pondicherry": "Puducherry",
    "vijayawada": "Andhra Pradesh",
    "vizag": "Andhra Pradesh",
    "surat": "Gujarat",
    "nagpur": "Maharashtra",
    "indore": "Madhya Pradesh",
    "bhopal": "Madhya Pradesh",
    "patna": "Bihar",
    "delhi": "Delhi",
    "agra": "Uttar Pradesh",
    "ajmer": "Rajasthan",
    "amritsar": "Punjab",
    "dehradun": "Uttarakhand",
    "jalandhar": "Punjab",
    "kanpur": "Uttar Pradesh",
    "ludhiana": "Punjab",
    "meerut": "Uttar Pradesh",
    "varanasi": "Uttar Pradesh",
    "srinagar": "Jammu and Kashmir",
    "jammu": "Jammu and Kashmir",
    "goa": "Goa",
    "nashik": "Maharashtra",
    "rajkot": "Gujarat",
    "thane": "Maharashtra",
    "vadodara": "Gujarat",
    "aurangabad": "Maharashtra",
    "bhubaneswar": "Odisha",
    "guwahati": "Assam",
    "jamshedpur": "Jharkhand",
    "raipur": "Chhattisgarh"
};

// Service list
const services = [
    "life-insurance", "health-insurance", "motor-insurance", "term-insurance",
    "pension-plans", "ulip-plans", "sme-insurance", "fire-insurance",
    "travel-insurance", "wedding-insurance", "cyber-insurance"
];

function slugify(text) {
    if (!text) return "";
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}

const citySlugs = Object.keys(cityToState);
const domain = "https://insurancesupport.online";

function fixContent(content) {
    if (!content) return content;
    let newContent = content;

    // 1. Fix [service]-in-[city] patterns
    // Example: term-insurance-in-bangalore -> locations/karnataka/bangalore/term-insurance
    for (const city of citySlugs) {
        const stateSlug = slugify(cityToState[city]);
        for (const service of services) {
            const legacyPattern = `${service}-in-${city}`;
            const newUrl = `locations/${stateSlug}/${city}/${service}`;
            
            // Fix absolute links
            newContent = newContent.split(`${domain}/${legacyPattern}`).join(`${domain}/${newUrl}`);
            // Fix relative links
            newContent = newContent.split(`/${legacyPattern}`).join(`/${newUrl}`);
        }
    }

    // 2. Fix locations/[city]/[service] and locations/[city]
    for (const city of citySlugs) {
        const stateSlug = slugify(cityToState[city]);
        
        // locations/[city]/[service] -> locations/[state]/[city]/[service]
        for (const service of services) {
            const legacyPath = `locations/${city}/${service}`;
            const newPath = `locations/${stateSlug}/${city}/${service}`;
            newContent = newContent.split(legacyPath).join(newPath);
        }

        // locations/[city] -> locations/[state]/[city]
        // This handles cases where it's not followed by a service
        const legacyPathCity = `locations/${city}`;
        const newPathCity = `locations/${stateSlug}/${city}`;
        
        // Use a safe string replace that doesn't double-replace
        // We look for patterns like /locations/bangalore but NOT /locations/karnataka/bangalore
        // Since we already replaced the ones with services, we can replace the remaining ones.
        // But some services might not have been in the list.
        
        // A better way: replace /locations/CITY with /locations/STATE/CITY if STATE is not already there.
        const regex = new RegExp(`locations/${city}(?!/)`, 'g');
        newContent = newContent.replace(regex, `locations/${stateSlug}/${city}`);
        
        // Also handle the case where it has a trailing slash or is just a root city link
        const regexRoot = new RegExp(`${domain}/${city}(?!/)`, 'g');
        newContent = newContent.replace(regexRoot, `${domain}/locations/${stateSlug}/${city}`);
    }

    return newContent;
}

const rootDirs = [
    'd:/Insurance-Support/insurance-support-next',
    'd:/Insurance-Support/Insurance-Support/insurance-support-next'
];

for (const baseDir of rootDirs) {
    if (!fs.existsSync(baseDir)) continue;
    console.log(`Processing directory: ${baseDir}`);

    // Fix blogs.json
    const blogsPath = path.join(baseDir, 'src/data/blogs.json');
    if (fs.existsSync(blogsPath)) {
        try {
            const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
            const fixedBlogsData = blogsData.map(blog => ({
                ...blog,
                summary: fixContent(blog.summary),
                content: fixContent(blog.content)
            }));
            fs.writeFileSync(blogsPath, JSON.stringify(fixedBlogsData, null, 2));
            console.log(`Fixed ${blogsPath}`);
        } catch (e) {
            console.error(`Error fixing ${blogsPath}: ${e.message}`);
        }
    }

    // Fix guides
    const guidesDir = path.join(baseDir, 'src/app/resources/guides');
    if (fs.existsSync(guidesDir)) {
        const guideDirs = fs.readdirSync(guidesDir);
        for (const guide of guideDirs) {
            const pagePath = path.join(guidesDir, guide, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                let content = fs.readFileSync(pagePath, 'utf8');
                let newContent = fixContent(content);
                if (content !== newContent) {
                    fs.writeFileSync(pagePath, newContent);
                    console.log(`Fixed ${guide}/page.tsx in ${baseDir}`);
                }
            }
        }
    }
}
