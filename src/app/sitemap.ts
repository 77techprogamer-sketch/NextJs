import { MetadataRoute } from 'next'
import { INDIAN_LOCATIONS, PRIORITY_LOCATIONS } from '@/data/indianCities'
import { serviceLabels } from '@/data/services'
import { faqData } from '@/data/faqData'
import blogsData from '@/data/blogs.json'
import fs from 'fs'
import path from 'path'
import { competitors } from '@/data/competitors'

const BASE_URL = 'https://insurancesupport.online'

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
    const staticRoutes: MetadataRoute.Sitemap = [
        { route: '', priority: 1.0, changeFrequency: 'weekly' },
        { route: '/locations', priority: 0.9, changeFrequency: 'weekly' },
        { route: '/services', priority: 0.9, changeFrequency: 'weekly' },
        { route: '/services/lic-policy-support', priority: 0.95, changeFrequency: 'weekly' },
        { route: '/support', priority: 0.8, changeFrequency: 'monthly' },
        { route: '/about', priority: 0.8, changeFrequency: 'monthly' },
        { route: '/about-hari-kotian', priority: 0.8, changeFrequency: 'monthly' },
        { route: '/contact', priority: 0.8, changeFrequency: 'monthly' },
        { route: '/get-started', priority: 0.8, changeFrequency: 'monthly' },
        { route: '/resources', priority: 0.8, changeFrequency: 'weekly' },
        { route: '/loans', priority: 0.8, changeFrequency: 'monthly' },
        { route: '/claim-recovery', priority: 0.95, changeFrequency: 'weekly' },
        { route: '/free-review', priority: 0.9, changeFrequency: 'weekly' },
        { route: '/compare-insurance', priority: 0.85, changeFrequency: 'weekly' },
        { route: '/success-stories', priority: 0.7, changeFrequency: 'monthly' },
        { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
        { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
        { route: '/return-policy', priority: 0.3, changeFrequency: 'yearly' },
    ].map(({ route, priority, changeFrequency }) => ({
        url: `${BASE_URL}${route}`,
        changeFrequency: changeFrequency as 'weekly' | 'monthly' | 'yearly',
        priority,
        alternates: getAlternates(route),
    }))

    // 2. Primary Service Hubs
    const serviceHubs = Object.keys(serviceLabels).map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: getAlternates(`/services/${slug}`),
    }))

    // 3. State Hub Routes (The New Hierarchy)
    const uniqueStates = Array.from(new Set(PRIORITY_LOCATIONS.map(loc => loc.state)))
    const stateHubRoutes = uniqueStates.map(state => ({
        url: `${BASE_URL}/locations/${state}`,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
        alternates: getAlternates(`/locations/${state}`),
    }))

    // 4. City Base Pages (Priority Cities)
    const matrixRoutes: MetadataRoute.Sitemap = []
    PRIORITY_LOCATIONS.forEach(loc => {
        // Add city base page
        const cityBaseRoute = `/locations/${loc.state}/${loc.city}`;
        matrixRoutes.push({
            url: `${BASE_URL}${cityBaseRoute}`,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
            alternates: getAlternates(cityBaseRoute),
        })
    })

    // 4.5 Top 10 City Guides
    const TOP_10_CITIES = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad', 'jaipur', 'lucknow']
    const cityGuideRoutes = TOP_10_CITIES.map(city => ({
        url: `${BASE_URL}/guides/${city}-insurance`,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
        alternates: getAlternates(`/guides/${city}-insurance`),
    }))

    // 5. Migrated Blog Posts (30+ High Quality Articles)
    const blogRoutes = blogsData.map(blog => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.date || new Date().toISOString(), // Use actual publish/update date
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: getAlternates(`/blog/${blog.slug}`),
    }))

    // 6. FAQ & Resource Discovery
    const faqRoutes = faqData.map((faq) => ({
        url: `${BASE_URL}/resources/faq/${faq.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
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
            
            guideRoutes = guideFolders.map(folder => {
                let lastModified = new Date().toISOString()
                try {
                    // Try to get actual file modification time for accurate lastModified
                    const stats = fs.statSync(path.join(guidesDirectory, folder))
                    lastModified = stats.mtime.toISOString()
                } catch (e) {
                    // Fallback to now if stat fails
                }

                return {
                    url: `${BASE_URL}/resources/guides/${folder}`,
                    lastModified,
                    changeFrequency: 'monthly' as const,
                    priority: 0.8,
                    alternates: getAlternates(`/resources/guides/${folder}`),
                }
            })
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
        '/resources/claim-recovery-guide',
        '/claim-recovery',
        '/free-review',
        '/compare-insurance'
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: getAlternates(route),
    }))

    const competitorRoutes = competitors.map(competitor => ({
        url: `${BASE_URL}/alternatives/${competitor.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: getAlternates(`/alternatives/${competitor.slug}`),
    }))

    // 8. Calculator Tools (from calculatorsConfig)
    const { calculatorsConfig } = await import('@/data/calculatorsConfig')
    const calculatorRoutes = calculatorsConfig.map(calc => ({
        url: `${BASE_URL}/tools/${calc.category}/${calc.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
        alternates: getAlternates(`/tools/${calc.category}/${calc.slug}`),
    }))

    return [
        ...staticRoutes, 
        ...serviceHubs, 
        ...stateHubRoutes, 
        ...matrixRoutes, 
        ...cityGuideRoutes,
        ...blogRoutes, 
        ...faqRoutes, 
        ...guideRoutes,
        ...otherResourceSubPages,
        ...competitorRoutes,
        ...calculatorRoutes
    ]
}
