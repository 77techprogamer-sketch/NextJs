import { MetadataRoute } from 'next'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { serviceLabels } from '@/data/services'
import { faqData } from '@/data/faqData'
import blogsData from '@/data/blogs.json'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://insurancesupport.online'

// Sequential dates for freshness signals
const now = new Date()
const todayISO = now.toISOString()
const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000).toISOString()
const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        lastModified: route === '' ? todayISO : fourteenDaysAgo,
        changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
        priority: route === '' || route === '/locations' || route === '/services' ? 1.0 : 0.8,
    }))

    // 2. Primary Service Hubs
    const serviceHubs = Object.keys(serviceLabels).map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: fourteenDaysAgo,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // 3. State Hub Routes (The New Hierarchy)
    const uniqueStates = Array.from(new Set(INDIAN_LOCATIONS.map(loc => loc.state)))
    const stateHubRoutes = uniqueStates.map(state => ({
        url: `${BASE_URL}/locations/${state}`,
        lastModified: sevenDaysAgo,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // 4. Programmatic Service Matrix (1,400+ Pages)
    const matrixRoutes: MetadataRoute.Sitemap = []
    INDIAN_LOCATIONS.forEach(loc => {
        Object.keys(serviceLabels).forEach(service => {
            matrixRoutes.push({
                url: `${BASE_URL}/locations/${loc.state}/${loc.city}/${service}`,
                lastModified: thirtyDaysAgo,
                changeFrequency: 'monthly' as const,
                priority: 0.8,
            })
        })
    })

    // 5. Migrated Blog Posts (30+ High Quality Articles)
    const blogRoutes = blogsData.map(blog => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.date || sevenDaysAgo,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }))

    // 6. FAQ & Resource Discovery
    const faqRoutes = faqData.map((faq) => ({
        url: `${BASE_URL}/resources/faq/${faq.slug}`,
        lastModified: sevenDaysAgo,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
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
                lastModified: sevenDaysAgo,
                changeFrequency: 'weekly' as const,
                priority: 0.9,
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
        '/resources/general-insurance-claim-process'
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: fourteenDaysAgo,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
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
