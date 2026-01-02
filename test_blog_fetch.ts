import { fetchBlogPosts } from './src/utils/blogFetcher';

// Test different service types
const testServices = ['health_insurance', 'motor_insurance', 'life_insurance', 'cyber_insurance'];

async function testBlogFetching() {
    console.log('=== Testing Blog Post Fetching ===\n');

    for (const service of testServices) {
        console.log(`\n--- Testing: ${service} ---`);
        const result = await fetchBlogPosts(service);

        if (result) {
            console.log(`Title: ${result.title}`);
            console.log(`URL: ${result.url}`);
            console.log(`Summary (first 100 chars): ${result.summary.substring(0, 100)}...`);
            if (result.debug) {
                console.log(`Debug info:`, JSON.stringify(result.debug, null, 2));
            }
        } else {
            console.log('No result returned');
        }
    }
}

testBlogFetching().catch(console.error);
