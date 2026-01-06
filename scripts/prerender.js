import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync, mkdirSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '../dist');

// Routes to prerender
const routes = [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/support',
    '/services/life-insurance',
    '/services/health-insurance',
    '/services/term-insurance',
    '/services/motor-insurance',
    '/services/sme-insurance',
    '/services/travel-insurance',
    '/services/pension-plans',
    '/services/ulip-plans',
    '/services/wedding-insurance',
    '/services/cyber-insurance',
];

async function prerender() {
    console.log('🚀 Starting prerendering process...');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        for (const route of routes) {
            console.log(`📄 Prerendering: ${route}`);

            const page = await browser.newPage();

            // Set viewport for consistent rendering
            await page.setViewport({ width: 1920, height: 1080 });

            // Navigate to the local build
            const url = `file://${distPath}/index.html`;
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

            // Execute client-side routing
            if (route !== '/') {
                await page.evaluate((path) => {
                    window.history.pushState({}, '', path);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                }, route);

                // Wait for page to render
                await page.waitForTimeout(2000);
            }

            // Get the fully rendered HTML
            const html = await page.content();

            // Determine output path
            let outputPath;
            if (route === '/') {
                outputPath = join(distPath, 'index.html');
            } else {
                const routePath = route.replace(/^\//, '').replace(/\//g, '/');
                outputPath = join(distPath, routePath, 'index.html');

                // Create directory if it doesn't exist
                const dirPath = dirname(outputPath);
                if (!existsSync(dirPath)) {
                    mkdirSync(dirPath, { recursive: true });
                }
            }

            // Write the prerendered HTML
            writeFileSync(outputPath, html);
            console.log(`✅ Saved: ${outputPath}`);

            await page.close();
        }

        console.log('✨ Prerendering complete!');
    } catch (error) {
        console.error('❌ Prerendering failed:', error);
        throw error;
    } finally {
        await browser.close();
    }
}

prerender().catch(error => {
    console.error(error);
    process.exit(1);
});
