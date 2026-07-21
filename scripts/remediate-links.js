const fs = require('fs');
const path = require('path');

// Authoritative mapping from indianCities.ts
const INDIAN_LOCATIONS = [
    { city: 'mumbai', state: 'maharashtra' },
    { city: 'delhi', state: 'delhi' },
    { city: 'bangalore', state: 'karnataka' },
    { city: 'hyderabad', state: 'telangana' },
    { city: 'chennai', state: 'tamil-nadu' },
    { city: 'kolkata', state: 'west-bengal' },
    { city: 'pune', state: 'maharashtra' },
    { city: 'ahmedabad', state: 'gujarat' },
    { city: 'jaipur', state: 'rajasthan' },
    { city: 'lucknow', state: 'uttar-pradesh' },
    { city: 'kanpur', state: 'uttar-pradesh' },
    { city: 'nagpur', state: 'maharashtra' },
    { city: 'indore', state: 'madhya-pradesh' },
    { city: 'thane', state: 'maharashtra' },
    { city: 'bhopal', state: 'madhya-pradesh' },
    { city: 'visakhapatnam', state: 'andhra-pradesh' },
    { city: 'pimpri-chinchwad', state: 'maharashtra' },
    { city: 'patna', state: 'bihar' },
    { city: 'vadodara', state: 'gujarat' },
    { city: 'ghaziabad', state: 'uttar-pradesh' },
    { city: 'ludhiana', state: 'punjab' },
    { city: 'agra', state: 'uttar-pradesh' },
    { city: 'nashik', state: 'maharashtra' },
    { city: 'faridabad', state: 'haryana' },
    { city: 'meerut', state: 'uttar-pradesh' },
    { city: 'rajkot', state: 'gujarat' },
    { city: 'kalyan-dombivli', state: 'maharashtra' },
    { city: 'vasai-virar', state: 'maharashtra' },
    { city: 'varanasi', state: 'uttar-pradesh' },
    { city: 'srinagar', state: 'jammu-and-kashmir' },
    { city: 'aurangabad', state: 'maharashtra' },
    { city: 'dhanbad', state: 'jharkhand' },
    { city: 'amritsar', state: 'punjab' },
    { city: 'navi-mumbai', state: 'maharashtra' },
    { city: 'allahabad', state: 'uttar-pradesh' },
    { city: 'howrah', state: 'west-bengal' },
    { city: 'ranchi', state: 'jharkhand' },
    { city: 'gwalior', state: 'madhya-pradesh' },
    { city: 'jabalpur', state: 'madhya-pradesh' },
    { city: 'coimbatore', state: 'tamil-nadu' },
    { city: 'vijayawada', state: 'andhra-pradesh' },
    { city: 'jodhpur', state: 'rajasthan' },
    { city: 'madurai', state: 'tamil-nadu' },
    { city: 'raipur', state: 'chhattisgarh' },
    { city: 'kota', state: 'rajasthan' },
    { city: 'guwahati', state: 'assam' },
    { city: 'chandigarh', state: 'chandigarh' },
    { city: 'solapur', state: 'maharashtra' },
    { city: 'hubli-dharwad', state: 'karnataka' },
    { city: 'bareilly', state: 'uttar-pradesh' },
    { city: 'moradabad', state: 'uttar-pradesh' },
    { city: 'mysore', state: 'karnataka' },
    { city: 'gurgaon', state: 'haryana' },
    { city: 'aligarh', state: 'uttar-pradesh' },
    { city: 'jalandhar', state: 'punjab' },
    { city: 'tiruchirappalli', state: 'tamil-nadu' },
    { city: 'bhubaneswar', state: 'odisha' },
    { city: 'salem', state: 'tamil-nadu' },
    { city: 'mira-bhayandar', state: 'maharashtra' },
    { city: 'warangal', state: 'telangana' },
    { city: 'thiruvananthapuram', state: 'kerala' },
    { city: 'bhiwandi', state: 'maharashtra' },
    { city: 'saharanspur', state: 'uttar-pradesh' },
    { city: 'guntur', state: 'andhra-pradesh' },
    { city: 'amravati', state: 'maharashtra' },
    { city: 'bikaner', state: 'rajasthan' },
    { city: 'noida', state: 'uttar-pradesh' },
    { city: 'jamshedpur', state: 'jharkhand' },
    { city: 'bhilai', state: 'chhattisgarh' },
    { city: 'cuttack', state: 'odisha' },
    { city: 'firozabad', state: 'uttar-pradesh' },
    { city: 'kochi', state: 'kerala' },
    { city: 'nellore', state: 'andhra-pradesh' },
    { city: 'bhavnagar', state: 'gujarat' },
    { city: 'dehradun', state: 'uttarakhand' },
    { city: 'durgapur', state: 'west-bengal' },
    { city: 'asansol', state: 'west-bengal' },
    { city: 'rourkela', state: 'odisha' },
    { city: 'nanded', state: 'maharashtra' },
    { city: 'kolhapur', state: 'maharashtra' },
    { city: 'ajmer', state: 'rajasthan' },
    { city: 'akola', state: 'maharashtra' },
    { city: 'gulbarga', state: 'karnataka' },
    { city: 'jamnagar', state: 'gujarat' },
    { city: 'ujjain', state: 'madhya-pradesh' },
    { city: 'loni', state: 'uttar-pradesh' },
    { city: 'siliguri', state: 'west-bengal' },
    { city: 'jhansi', state: 'uttar-pradesh' },
    { city: 'ulhasnagar', state: 'maharashtra' },
    { city: 'jammu', state: 'jammu-and-kashmir' },
    { city: 'sangli-miraj-kupwad', state: 'maharashtra' },
    { city: 'mangalore', state: 'karnataka' },
    { city: 'erode', state: 'tamil-nadu' },
    { city: 'belgaum', state: 'karnataka' },
    { city: 'ambattur', state: 'tamil-nadu' },
    { city: 'tirunelveli', state: 'tamil-nadu' },
    { city: 'malegaon', state: 'maharashtra' },
    { city: 'gaya', state: 'bihar' },
    { city: 'jalgaon', state: 'maharashtra' },
    { city: 'udaipur', state: 'rajasthan' },
    { city: 'maheshtala', state: 'west-bengal' },
    { city: 'davanagere', state: 'karnataka' },
    { city: 'kozhikode', state: 'kerala' },
    { city: 'akbarpur', state: 'uttar-pradesh' },
    { city: 'kurnool', state: 'andhra-pradesh' },
    { city: 'rajpur-sonarpur', state: 'west-bengal' },
    { city: 'bokaro', state: 'jharkhand' },
    { city: 'south-dumdum', state: 'west-bengal' },
    { city: 'bellary', state: 'karnataka' },
    { city: 'patiala', state: 'punjab' },
    { city: 'gopalpur', state: 'west-bengal' },
    { city: 'agartala', state: 'tripura' },
    { city: 'bhagalpur', state: 'bihar' },
    { city: 'muzaffarnagar', state: 'uttar-pradesh' },
    { city: 'bhatpara', state: 'west-bengal' },
    { city: 'panihati', state: 'west-bengal' },
    { city: 'latur', state: 'maharashtra' },
    { city: 'dhule', state: 'maharashtra' },
    { city: 'rohtak', state: 'haryana' },
    { city: 'korba', state: 'chhattisgarh' },
    { city: 'bhilwara', state: 'rajasthan' },
    { city: 'brahmapur', state: 'odisha' },
    { city: 'muzaffarpur', state: 'bihar' },
    { city: 'ahmednagar', state: 'maharashtra' },
    { city: 'mathura', state: 'uttar-pradesh' },
    { city: 'kollam', state: 'kerala' },
    { city: 'avadi', state: 'tamil-nadu' },
    { city: 'kadapa', state: 'andhra-pradesh' },
    { city: 'kamarhati', state: 'west-bengal' },
    { city: 'bilaspur', state: 'chhattisgarh' },
    { city: 'shahjahanpur', state: 'uttar-pradesh' },
    { city: 'satara', state: 'maharashtra' },
    { city: 'bijapur', state: 'karnataka' },
    { city: 'rampur', state: 'uttar-pradesh' },
    { city: 'shimoga', state: 'karnataka' },
    { city: 'chandrapur', state: 'maharashtra' },
    { city: 'junagadh', state: 'gujarat' },
    { city: 'thrissur', state: 'kerala' },
    { city: 'alwar', state: 'rajasthan' },
    { city: 'bardhaman', state: 'west-bengal' },
    { city: 'kulti', state: 'west-bengal' },
    { city: 'nizamabad', state: 'telangana' },
    { city: 'parbhani', state: 'maharashtra' },
    { city: 'tumkur', state: 'karnataka' },
    { city: 'khammam', state: 'telangana' },
    { city: 'uzhavarkarai', state: 'pondicherry' },
    { city: 'bihar-sharif', state: 'bihar' },
    { city: 'panipat', state: 'haryana' },
    { city: 'darbhanga', state: 'bihar' },
    { city: 'bally', state: 'west-bengal' },
    { city: 'aizawl', state: 'mizoram' },
    { city: 'dewas', state: 'madhya-pradesh' },
    { city: 'ichalkaranji', state: 'maharashtra' },
    { city: 'karnal', state: 'haryana' },
    { city: 'bathinda', state: 'punjab' },
    { city: 'jalna', state: 'maharashtra' },
    { city: 'eluru', state: 'andhra-pradesh' },
    { city: 'barasat', state: 'west-bengal' },
    { city: 'kirari-suleman-nagar', state: 'delhi' },
    { city: 'purnia', state: 'bihar' },
    { city: 'satna', state: 'madhya-pradesh' },
    { city: 'mau', state: 'uttar-pradesh' },
    { city: 'sonipat', state: 'haryana' },
    { city: 'farrukhabad', state: 'uttar-pradesh' },
    { city: 'sagar', state: 'madhya-pradesh' },
    { city: 'durg', state: 'chhattisgarh' },
    { city: 'imphal', state: 'manipur' },
    { city: 'ratlam', state: 'madhya-pradesh' },
    { city: 'hapur', state: 'uttar-pradesh' },
    { city: 'arah', state: 'bihar' },
    { city: 'anantapur', state: 'andhra-pradesh' },
    { city: 'karimnagar', state: 'telangana' },
    { city: 'etawah', state: 'uttar-pradesh' },
    { city: 'ambarnath', state: 'maharashtra' },
    { city: 'north-dumdum', state: 'west-bengal' },
    { city: 'bharatpur', state: 'rajasthan' },
    { city: 'begusarai', state: 'bihar' },
    { city: 'new-delhi', state: 'delhi' },
    { city: 'gandhidham', state: 'gujarat' },
    { city: 'baranagar', state: 'west-bengal' },
    { city: 'tirupati', state: 'andhra-pradesh' },
    { city: 'pondicherry', state: 'pondicherry' },
    { city: 'sikar', state: 'rajasthan' },
    { city: 'thoothukudi', state: 'tamil-nadu' },
    { city: 'rew', state: 'madhya-pradesh' },
    { city: 'mirzapur', state: 'uttar-pradesh' },
    { city: 'raichur', state: 'karnataka' },
    { city: 'pali', state: 'rajasthan' },
    { city: 'ramagundam', state: 'telangana' },
    { city: 'vizianagaram', state: 'andhra-pradesh' },
    { city: 'katihar', state: 'bihar' },
    { city: 'haridwar', state: 'uttarakhand' },
    { city: 'sriganganagar', state: 'rajasthan' },
    { city: 'karawal-nagar', state: 'delhi' },
    { city: 'nagercoil', state: 'tamil-nadu' },
    { city: 'mango', state: 'jharkhand' },
    { city: 'bulandshahr', state: 'uttar-pradesh' },
    { city: 'thanjavur', state: 'tamil-nadu' },
    { city: 'murwara', state: 'madhya-pradesh' },
    { city: 'uluberia', state: 'west-bengal' },
    { city: 'shillong', state: 'meghalaya' },
    { city: 'sambhal', state: 'uttar-pradesh' },
    { city: 'singrauli', state: 'madhya-pradesh' },
    { city: 'nadiad', state: 'gujarat' },
    { city: 'secunderabad', state: 'telangana' },
    { city: 'naihati', state: 'west-bengal' },
    { city: 'yamunanagar', state: 'haryana' },
    { city: 'bidhan-nagar', state: 'west-bengal' },
    { city: 'pallavaram', state: 'tamil-nadu' },
    { city: 'bidar', state: 'karnataka' },
    { city: 'munger', state: 'bihar' },
    { city: 'panchkula', state: 'haryana' },
    { city: 'burhanpur', state: 'madhya-pradesh' },
    { city: 'kharagpur', state: 'west-bengal' },
    { city: 'dindigul', state: 'tamil-nadu' },
    { city: 'gandhinagar', state: 'gujarat' },
    { city: 'hospet', state: 'karnataka' },
    { city: 'nangloi-jat', state: 'delhi' },
    { city: 'malda', state: 'west-bengal' },
    { city: 'ongole', state: 'andhra-pradesh' },
    { city: 'deoghar', state: 'jharkhand' },
    { city: 'chapra', state: 'bihar' },
    { city: 'haldia', state: 'west-bengal' },
    { city: 'khandwa', state: 'madhya-pradesh' },
    { city: 'nandyal', state: 'andhra-pradesh' },
    { city: 'morena', state: 'madhya-pradesh' },
    { city: 'amroha', state: 'uttar-pradesh' },
    { city: 'anand', state: 'gujarat' },
    { city: 'bhind', state: 'madhya-pradesh' },
    { city: 'bhalswa-jahangir-pur', state: 'delhi' },
    { city: 'madhyamgram', state: 'west-bengal' },
    { city: 'bhiwani', state: 'haryana' },
    { city: 'berhampore', state: 'west-bengal' },
    { city: 'ambala', state: 'haryana' },
    { city: 'morbi', state: 'gujarat' },
    { city: 'fatehpur', state: 'uttar-pradesh' },
    { city: 'raebareli', state: 'uttar-pradesh' },
    { city: 'khora', state: 'uttar-pradesh' },
    { city: 'chittoor', state: 'andhra-pradesh' },
    { city: 'bhusawal', state: 'maharashtra' },
    { city: 'orai', state: 'uttar-pradesh' },
    { city: 'bahraich', state: 'uttar-pradesh' },
    { city: 'phusro', state: 'jharkhand' },
    { city: 'vellore', state: 'tamil-nadu' },
    { city: 'mehsana', state: 'gujarat' },
    { city: 'raiganj', state: 'west-bengal' },
    { city: 'sirsa', state: 'haryana' },
    { city: 'danapur', state: 'bihar' },
    { city: 'serampore', state: 'west-bengal' },
    { city: 'sultan-pur-majra', state: 'delhi' },
    { city: 'guna', state: 'madhya-pradesh' },
    { city: 'jaunpur', state: 'uttar-pradesh' },
    { city: 'panvel', state: 'maharashtra' },
    { city: 'shivpuri', state: 'madhya-pradesh' },
    { city: 'surendranagar', state: 'gujarat' },
    { city: 'unnc', state: 'uttar-pradesh' },
    { city: 'hugli-chinsurah', state: 'west-bengal' },
    { city: 'kanchipuram', state: 'tamil-nadu' },
    { city: 'hosur', state: 'tamil-nadu' },
    { city: 'belagavi', state: 'karnataka' }
];

const CITY_TO_STATE = {};
INDIAN_LOCATIONS.forEach(loc => {
    CITY_TO_STATE[loc.city] = loc.state;
});

// Alias mapping
const CITY_ALIASES = {
    'vizag': 'visakhapatnam',
    'hubli': 'hubli-dharwad',
    'belgaum': 'belagavi',
    'trivandrum': 'thiruvananthapuram',
    'kochi': 'kochi', // just in case
    'bangalore': 'bangalore'
};

const DEFAULT_SERVICE = 'life-insurance';

function remediateLink(url) {
    if (!url) return url;

    // Fix resources/faq and resources/guides
    url = url.replace(/\/faqs\/([a-z0-9-]+)/g, '/resources/faq/$1');
    url = url.replace(/\/guides\/([a-z0-9-]+)/g, '/resources/guides/$1');
    url = url.replace(/\/lic-offices/g, '/services/life-insurance');

    // Handle /locations/city or /locations/state/city
    url = url.replace(/\/locations\/([a-z0-9-]+)(\/[a-z0-9-]+)?(\/[a-z0-9-]+)?/g, (match, p1, p2, p3) => {
        let state = p1;
        let city = p2 ? p2.substring(1) : null;
        let service = p3 ? p3.substring(1) : null;

        // Check if p1 is actually a city
        const cityKey = p1;
        const mappedCity = CITY_ALIASES[cityKey] || cityKey;
        const mappedState = CITY_TO_STATE[mappedCity];

        if (mappedState) {
            // p1 is a city!
            // Canonical: /locations/{mappedState}/{mappedCity}/{service || DEFAULT_SERVICE}
            const finalCity = mappedCity;
            const finalState = mappedState;
            const finalService = city ? city : (service || DEFAULT_SERVICE); 
            // Wait, if p2 exists, maybe p2 was the service? 
            // e.g. /locations/bangalore/health-insurance -> p1=bangalore, p2=/health-insurance
            // So city=health-insurance? No, that's wrong.
            
            // Re-evaluating:
            // Case A: /locations/bangalore -> p1=bangalore, p2=null, p3=null
            // Case B: /locations/bangalore/health-insurance -> p1=bangalore, p2=/health-insurance, p3=null
            
            if (!p2) {
                return `/locations/${finalState}/${finalCity}/${DEFAULT_SERVICE}`;
            } else {
                // p2 might be a service if p1 is a city
                const p2Content = p2.substring(1);
                // Is p2Content a city?
                const p2MappedState = CITY_TO_STATE[CITY_ALIASES[p2Content] || p2Content];
                if (p2MappedState) {
                    // /locations/karnataka/bangalore -> p1=karnataka, p2=/bangalore
                    return `/locations/${p1}/${p2Content}/${p3 ? p3.substring(1) : DEFAULT_SERVICE}`;
                } else {
                    // /locations/bangalore/health-insurance -> p1=bangalore, p2=/health-insurance
                    return `/locations/${finalState}/${finalCity}/${p2Content}`;
                }
            }
        }
        
        // If p1 is a state
        if (p2) {
            const cityContent = p2.substring(1);
            const mappedCity2 = CITY_ALIASES[cityContent] || cityContent;
            if (CITY_TO_STATE[mappedCity2]) {
                // Correct: /locations/state/city
                return `/locations/${p1}/${mappedCity2}/${p3 ? p3.substring(1) : DEFAULT_SERVICE}`;
            }
        }

        return match;
    });

    return url;
}

const blogsPath = path.join(__dirname, '../src/data/blogs.json');
let blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

blogs = blogs.map(blog => {
    // Process content (contains HTML links)
    if (blog.content) {
        blog.content = blog.content.replace(/href="([^"]+)"/g, (match, href) => {
            return `href="${remediateLink(href)}"`;
        });
        // Also handle absolute URLs if they point to the same domain
        blog.content = blog.content.replace(/https:\/\/insurancesupport\.online(\/[^\s"<>]+)/g, (match, path) => {
            return `https://insurancesupport.online${remediateLink(path)}`;
        });
    }
    
    if (blog.summary) {
        blog.summary = blog.summary.replace(/https:\/\/insurancesupport\.online(\/[^\s"<>]+)/g, (match, path) => {
            return `https://insurancesupport.online${remediateLink(path)}`;
        });
    }

    return blog;
});

fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2));
console.log('✅ Remediated links in blogs.json');
