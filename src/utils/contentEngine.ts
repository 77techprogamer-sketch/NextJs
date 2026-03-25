import { CityData } from '@/data/cityData';
import { serviceLabels } from '@/data/services';

// A simple deterministic random generator based on a string seed (the city name)
// This ensures the same city always gets the same content variation on every build.
function mulberry32(a: number) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    }
    return hash;
}

// Spintax templates for descriptions based on service category. 
// Uses {} for variables.
const templates: Record<string, string[]> = {
    'health-insurance': [
        "Looking for reliable {serviceLabel} support in {cityName}? We coordinate directly with top local networks {hospitalsText}. Our experienced advisors provide fast, cashless claim assistance from {area1} to {area2}.",
        "Don't let medical emergencies in {cityName} overwhelm you. Our {serviceLabel} experts handle the paperwork {hospitalsText}, ensuring you get the benefits you deserve. Available for doorstep consultation near {landmarkText} and {area1}.",
        "Trust {cityName}'s leading {serviceLabel} advisors. We understand the nuances of {stateName} healthcare regulations and maintain strong relationships with local TPA desks {hospitalsText}. Serving {area1}, {area2}, and surrounding areas."
    ],
    'motor-insurance': [
        "Need instant {serviceLabel} renewal or claim support in {cityName}? Whether you're registered under {rtoText} or nearby, we handle the entire process. Doorstep surveys available from {area1} to {area2}.",
        "Accidents happen, but dealing with {serviceLabel} claims in {cityName} shouldn't be a headache. We assist with cashless garage networks and coordinate with {rtoText} authorities if needed, right from {area1}.",
        "{cityName}'s traffic can be unpredictable. Protect your vehicle with the best {serviceLabel}. Our agents simplify zero-depreciation claims and IDV calculations across {area1}, {area2}, and near {landmarkText}."
    ],
    'lic-agent': [
        "Searching for a trusted {serviceLabel} in {cityName}? From maturity claims to lapsed policy revivals, our 25+ years of experience guarantees seamless service. We meet you at your home in {area1} or {area2}.",
        "Secure your family's future with {cityName}'s top {serviceLabel}. We assist with everything from premium payments to death claim settlements, providing personalized support near {landmarkText} and {area1}.",
        "Don't let your policies lapse. Our certified {serviceLabel} professionals in {cityName} offer comprehensive portfolio reviews. Doorstep guidance available throughout {area1}, {area2}, and the wider {stateName} region."
    ],
    'default': [
        "Get expert {serviceLabel} guidance in {cityName}. Our certified professionals help you navigate {stateName} specific policies, ensuring maximum coverage and seamless claim settlement across {area1} and {area2}.",
        "{cityName}'s premier {serviceLabel} advisors are here to help. We simplify complex paperwork and provide doorstep assistance near {landmarkText}, covering {area1} and surrounding localities.",
        "Secure the best {serviceLabel} in {cityName} with our 98% claim success rate. We handle the heavy lifting from {area1} to {area2}, providing you with peace of mind and tailored advice."
    ]
};

export function generateUniqueContent(serviceSlug: string, city: CityData): string {
    const seed = hashString(city.slug + serviceSlug);
    const random = mulberry32(seed);
    
    // Determine which template pool to use
    let pool = templates['default'];
    if (serviceSlug.includes('health')) pool = templates['health-insurance'];
    else if (serviceSlug.includes('motor') || serviceSlug.includes('car') || serviceSlug.includes('bike')) pool = templates['motor-insurance'];
    else if (serviceSlug.includes('lic') || serviceSlug.includes('life') || serviceSlug.includes('term')) pool = templates['lic-agent'];

    // Pick a deterministic template
    const templateIndex = Math.floor(random() * pool.length);
    let text = pool[templateIndex];

    // Prepare variables
    const serviceLabel = serviceLabels[serviceSlug] || serviceSlug.replace(/-/g, ' ');
    const area1 = city.areas[0] || 'your locality';
    const area2 = city.areas[1] || city.areas[0] || 'nearby regions';
    
    // Process local anchors
    let hospitalsText = "";
    if (city.localAnchors?.hospitals && city.localAnchors.hospitals.length > 0) {
        hospitalsText = `like ${city.localAnchors.hospitals.join(' and ')}`;
    }

    let rtoText = "local RTO";
    if (city.localAnchors?.rtoZones && city.localAnchors.rtoZones.length > 0) {
        rtoText = city.localAnchors.rtoZones.join(', ');
    }

    let landmarkText = "major city landmarks";
    if (city.localAnchors?.landmarks && city.localAnchors.landmarks.length > 0) {
        landmarkText = city.localAnchors.landmarks[0];
    }

    // Inject 
    text = text.replace(/{cityName}/g, city.name);
    text = text.replace(/{stateName}/g, city.state);
    text = text.replace(/{serviceLabel}/g, serviceLabel);
    text = text.replace(/{area1}/g, area1);
    text = text.replace(/{area2}/g, area2);
    
    // Conditional injects - if empty, try to smooth the sentence
    if (hospitalsText) {
        text = text.replace(/ {hospitalsText}/g, ` ${hospitalsText}`);
    } else {
        text = text.replace(/ {hospitalsText}/g, "");
    }

    text = text.replace(/{rtoText}/g, rtoText);
    text = text.replace(/{landmarkText}/g, landmarkText);

    return text;
}
