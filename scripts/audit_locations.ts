import { INDIAN_LOCATIONS } from '../src/data/indianCities';
import { CITY_CONTENT_OVERRIDES } from '../src/data/cityContentOverrides';

/**
 * Audit Location Pages
 * 
 * This script identifies "High Value" vs "Low Value" location pages.
 * High Value: Cities with custom content overrides or Tier 1/2 status.
 * Low Value: Programmatic pages with zero unique content.
 */

const TIER_1_CITIES = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'ahmedabad', 'chennai', 'kolkata', 'surat', 'pune', 'jaipur'];
const TIER_2_CITIES = ['lucknow', 'kanpur', 'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'pimpri-chinchwad', 'patna', 'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'kalyan-dombivli', 'vasai-virar', 'varanasi', 'srinagar', 'aurangabad', 'dhanbad', 'amritsar', 'navi-mumbai', 'allahabad', 'howrah', 'ranchi', 'gwalior', 'jabalpur', 'coimbatore', 'vijayawada', 'jodhpur', 'madurai', 'raipur', 'kota', 'chandigarh', 'guwahati', 'solapur', 'hubli-dharwad', 'bareilly', 'mysore'];

function audit() {
    console.log('--- LOCATION PAGE AUDIT ---');
    
    const highValue = [];
    const lowValue = [];

    INDIAN_LOCATIONS.forEach(loc => {
        const hasOverride = !!CITY_CONTENT_OVERRIDES[loc.city];
        const isTier1 = TIER_1_CITIES.includes(loc.city.toLowerCase());
        const isTier2 = TIER_2_CITIES.includes(loc.city.toLowerCase());

        if (hasOverride || isTier1 || isTier2) {
            highValue.push(loc.city);
        } else {
            lowValue.push(loc.city);
        }
    });

    console.log(`Total Locations: ${INDIAN_LOCATIONS.length}`);
    console.log(`High Value (Tier 1/2 or Custom): ${highValue.length}`);
    console.log(`Low Value (Thin Content Candidates): ${lowValue.length}`);
    
    console.log('\n--- RECOMMENDATION ---');
    console.log('For the 2,700+ programmatic pages, consider consolidating the "Low Value" cities');
    console.log('by redirecting them to their respective State Hubs (e.g. /locations/[state]).');
    console.log('This prevents "Doorway Page" penalties and concentrates SEO juice on pages with actual utility.');
}

audit();
