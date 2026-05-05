import { MetadataRoute } from 'next'
import { INDIAN_LOCATIONS, PRIORITY_LOCATIONS } from '@/data/indianCities'
import { serviceLabels } from '@/data/services'
import { faqData } from '@/data/faqData'
import blogsData from '@/data/blogs.json'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://insurancesupport.online'

const now = new Date()
const todayISO = now.toISOString()
// Freshness signals for core and programmatic pages
const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const getAlternates = (route: string) => {
        return {
            languages: {
                en: `${BASE_URL}${route}`,
                hi: `${BASE_URL}/hi${route}`,
            },
        };
    };

    // 1. Core Static Routes (High Authority)
    const staticRoutes = [
        '',
        '/support',
        '/about',
        '/privacy-policy',
        '/terms-of-service',
        '/return-policy',
        '/get-started',
        '/resources',
        '/contact',
        '/locations',
        '/services',
        '/loans',
        '/success-stories',
        '/about-hari-kotian'
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: route === '' || route === '/locations' || route === '/services' ? 1.0 : 0.9,
        alternates: getAlternates(route),
    }))

    // 2. Primary Service Hubs
    const serviceHubs = Object.keys(serviceLabels).map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: 0.95,
        alternates: getAlternates(`/services/${slug}`),
    }))

    // 3. State Hub Routes (The New Hierarchy)
    const uniqueStates = Array.from(new Set(INDIAN_LOCATIONS.map(loc => loc.state)))
    const stateHubRoutes = uniqueStates.map(state => ({
        url: `${BASE_URL}/locations/${state}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: 0.9,
        alternates: getAlternates(`/locations/${state}`),
    }))

    // 4. Programmatic Service Matrix (Filtered to Priority Cities)
    const matrixRoutes: MetadataRoute.Sitemap = []
    PRIORITY_LOCATIONS.forEach(loc => {
        // Add city base page
        const cityBaseRoute = `/locations/${loc.state}/${loc.city}`;
        matrixRoutes.push({
            url: `${BASE_URL}${cityBaseRoute}`,
            lastModified: todayISO,
            changeFrequency: 'daily' as const,
            priority: 0.85,
            alternates: getAlternates(cityBaseRoute),
        })

        // Add service-specific pages
        Object.keys(serviceLabels).forEach(service => {
            const route = `/locations/${loc.state}/${loc.city}/${service}`;
            matrixRoutes.push({
                url: `${BASE_URL}${route}`,
                lastModified: todayISO,
                changeFrequency: 'daily' as const,
                priority: 0.8,
                alternates: getAlternates(route),
            })
        })
    })

    // 5. Migrated Blog Posts (30+ High Quality Articles)
    const blogRoutes = blogsData.map(blog => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: todayISO, // Always signal daily freshness for blogs
        changeFrequency: 'daily' as const,
        priority: 0.85,
        alternates: getAlternates(`/blog/${blog.slug}`),
    }))

    // 6. FAQ & Resource Discovery
    const faqRoutes = faqData.map((faq) => ({
        url: `${BASE_URL}/resources/faq/${faq.slug}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: 0.75,
        alternates: getAlternates(`/resources/faq/${faq.slug}`),
    }))

    // 7. Dynamic Expert Guides (Filesystem discovery)
    const guidesDirectory = path.join(process.cwd(), 'src/app/resources/guides')
    let guideRoutes: MetadataRoute.Sitemap = []
    try {
        if (fs.existsSync(guidesDirectory)) {
            const guideFolders = fs.readdirSync(guidesDirectory, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name)
            
            guideRoutes = guideFolders.map(folder => ({
                url: `${BASE_URL}/resources/guides/${folder}`,
                lastModified: todayISO,
                changeFrequency: 'daily' as const,
                priority: 0.9,
                alternates: getAlternates(`/resources/guides/${folder}`),
            }))
        }
    } catch (err) {
        console.error('Sitemap Guide discovery error:', err)
    }

    const otherResourceSubPages = [
        '/resources/how-it-works',
        '/resources/veteran-advantage',
        '/resources/bangalore-insurance-support',
        '/tools/policy-recovery',
        '/tools/risk-scorecard',
        '/tools/human-life-value-calculator',
        '/tools/term-insurance-calculator',
        '/resources/download-policy-copy',
        '/resources/general-insurance-claim-process',
        '/resources/claim-recovery-guide'
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: 0.8,
        alternates: getAlternates(route),
    }))

    return [
        ...staticRoutes, 
        ...serviceHubs, 
        ...stateHubRoutes, 
        ...matrixRoutes, 
        ...blogRoutes, 
        ...faqRoutes, 
        ...guideRoutes,
        ...otherResourceSubPages
    ]
}
