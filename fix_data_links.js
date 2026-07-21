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

const guideMappings = {
    "/resources/guides/maturity-claim-guide": "/resources/guides/lic-revival-maturity-masterclass",
    "/resources/guides/lic-maturity-claim-forms": "/resources/guides/lic-revival-maturity-masterclass",
    "/resources/guides/neft-mandate-troubleshooting": "/resources/guides/lic-revival-maturity-masterclass",
    "/resources/guides/lost-lic-policy-help": "/resources/guides/lic-revival-maturity-masterclass",
    "/resources/guides/health-insurance-rejection-reasons-guide": "/resources/guides/claim-rejection-appeal",
    "/resources/guides/health-claim-recovery": "/resources/guides/claim-rejection-appeal",
    "/resources/guides/claim-process": "/resources/guides/claim-rejection-appeal",
    "/resources/guides/general-insurance-claim": "/resources/guides/general-insurance-claim-process",
    "/resources/general-insurance-claim-process": "/resources/guides/general-insurance-claim-process",
    "/resources/claim-recovery-guide": "/resources/guides/claim-recovery-guide",
    "/resources/guides/lic-policy-revival": "/resources/guides/lapsed-policy-revival",
    "/resources/national-insurance-claim-process": "/resources/guides/general-insurance-claim-process",
    "/resources/faq/how-to-revive-lapsed-lic-policy": "/resources/guides/lapsed-policy-revival",
    "/resources/faq/documents-required-for-death-claim": "/resources/guides/death-claim-settlement",
    "/resources/faq/cashless-hospitalization-process": "/resources/guides/claim-recovery-guide",
    "/resources/faq/how-to-claim-insurance-if-rejected": "/resources/guides/claim-rejection-appeal",
    "/resources/faq/motor-insurance-claim-process": "/resources/guides/general-insurance-claim-process",
    "/resources/faq/how-to-file-complaint-with-irdai": "/support",
    "/resources/faq/insurance-ombudsman-complaint": "/support"
};

function fixContent(content) {
    if (!content) return content;
    let newContent = content;

    // Cleanup phase 1: Fix repeated path segments caused by previous buggy runs
    newContent = newContent.replace(/resources\/guides\/resources\/guides\//g, 'resources/guides/');
    newContent = newContent.replace(/general-insurance-claim-process(-process)+/g, 'general-insurance-claim-process');

    const escapedDomain = domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // 0. Fix specific guide mappings
    // Sort by length descending to avoid partial matches
    const sortedGuides = Object.entries(guideMappings).sort((a, b) => b[0].length - a[0].length);

    for (const [legacy, canonical] of sortedGuides) {
        const escapedLegacy = legacy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Match legacy path ONLY if:
        // 1. Preceded by domain, quote, parenthesis, or whitespace/start of string
        // 2. NOT preceded by 'resources/guides' if legacy already starts with 'resources' (to avoid double nesting)
        // 3. NOT followed by alphanumeric, hyphen, or slash (to ensure full match)
        
        // Strict regex for absolute links
        const absRegex = new RegExp(`${escapedDomain}${escapedLegacy}(?![\\w\\-/])`, 'g');
        newContent = newContent.replace(absRegex, `${domain}${canonical}`);

        // Strict regex for relative links (quoted or in parens)
        // Ensure it's not already correct (e.g. don't match /resources/x if it's part of /resources/guides/x)
        const relRegex = new RegExp(`(["'\\(])${escapedLegacy}(?![\\w\\-/])`, 'g');
        newContent = newContent.replace(relRegex, `$1${canonical}`);
        
        // Also handle cases without /resources prefix if any
        const legacyNoPrefix = legacy.replace('/resources', '');
        if (legacyNoPrefix !== legacy) {
            const escapedNoPrefix = legacyNoPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            
            const absNoPrefixRegex = new RegExp(`${escapedDomain}${escapedNoPrefix}(?![\\w\\-/])`, 'g');
            newContent = newContent.replace(absNoPrefixRegex, `${domain}${canonical}`);

            const relNoPrefixRegex = new RegExp(`(["'\\(])${escapedNoPrefix}(?![\\w\\-/])`, 'g');
            newContent = newContent.replace(relNoPrefixRegex, `$1${canonical}`);
        }
    }

    // 1. Fix [service]-in-[city] patterns
    for (const city of citySlugs) {
        const stateSlug = slugify(cityToState[city]);
        const statePath = `locations/${stateSlug}`;
        
        for (const service of services) {
            const legacyPattern = `${service}-in-${city}`;
            const newUrl = `${statePath}/${city}/${service}`;
            
            const absPatternRegex = new RegExp(`${escapedDomain}/${legacyPattern}(?![\\w\\-/])`, 'g');
            newContent = newContent.replace(absPatternRegex, `${domain}/${newUrl}`);

            const relPatternRegex = new RegExp(`(["'\\(/])${legacyPattern}(?![\\w\\-/])`, 'g');
            newContent = newContent.replace(relPatternRegex, `$1${newUrl}`);
        }

        // Fix locations/${city} -> locations/${state}/${city}
        // Use negative lookbehind to ensure we don't match if it's already locations/${state}/
        // But since stateSlug can be multiple words, let's just match locations/${city} 
        // ONLY if it's NOT already locations/${stateSlug}/${city}
        
        const escapedStateSlug = stateSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const cityRegex = new RegExp(`(?<!locations\\/${escapedStateSlug}\\/)locations\\/${city}(?![\\w\\-/])`, 'g');
        newContent = newContent.replace(cityRegex, `locations/${stateSlug}/${city}`);
        
        const cityAbsRegex = new RegExp(`${escapedDomain}\\/${city}(?![\\w\\-/])`, 'g');
        newContent = newContent.replace(cityAbsRegex, `${domain}/locations/${stateSlug}/${city}`);
    }

    // Cleanup phase 2: Fix Jammu recursion (and any others)
    newContent = newContent.replace(/(jammu-and-kashmir\/)+jammu-and-kashmir/g, 'jammu-and-kashmir');
    newContent = newContent.replace(/locations\/jammu-and-kashmir\/jammu-and-kashmir\//g, 'locations/jammu-and-kashmir/');

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

    // Fix cityData.ts
    const cityDataPath = path.join(baseDir, 'src/data/cityData.ts');
    if (fs.existsSync(cityDataPath)) {
        let content = fs.readFileSync(cityDataPath, 'utf8');
        let newContent = fixContent(content);
        if (content !== newContent) {
            fs.writeFileSync(cityDataPath, newContent);
            console.log(`Fixed ${cityDataPath}`);
        }
    }

    // Fix Header.tsx
    const headerPath = path.join(baseDir, 'src/components/Header.tsx');
    if (fs.existsSync(headerPath)) {
        let content = fs.readFileSync(headerPath, 'utf8');
        let newContent = fixContent(content);
        if (content !== newContent) {
            fs.writeFileSync(headerPath, newContent);
            console.log(`Fixed ${headerPath}`);
        }
    }

    // Fix Footer.tsx
    const footerPath = path.join(baseDir, 'src/components/Footer.tsx');
    if (fs.existsSync(footerPath)) {
        let content = fs.readFileSync(footerPath, 'utf8');
        let newContent = fixContent(content);
        if (content !== newContent) {
            fs.writeFileSync(footerPath, newContent);
            console.log(`Fixed ${footerPath}`);
        }
    }
}

