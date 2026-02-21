import { MetadataRoute } from 'next'
import { cityData } from '@/data/cityData'
import { services } from '@/data/services'
import { faqData } from '@/data/faqData'

const BASE_url = 'https://insurancesupport.online'
const LAST_MOD = new Date().toISOString()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        lastModified: LAST_MOD,
        changeFrequency: 'daily' as const,
        priority: route === '' || route === '/locations' || route === '/services' ? 1 : 0.8,
    }))

    const locations = Object.keys(cityData)

    const serviceRoutes = services.map((slug: string) => ({
        url: `${BASE_url}/services/${slug}`,
        lastModified: LAST_MOD,
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }))

    const locationRoutes = locations.map((city) => ({
        url: `${BASE_url}/locations/${city}`,
        lastModified: LAST_MOD,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }))

    const resourceSubPages = [
        '/resources/bangalore-insurance-support',
        '/tools/policy-recovery',
        '/tools/risk-scorecard',
        '/tools/human-life-value-calculator',
        '/resources/download-policy-copy',
        '/resources/national-insurance-claim-process',
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        lastModified: LAST_MOD,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const faqRoutes = faqData.map((faq) => ({
        url: `${BASE_url}/resources/faq/${faq.slug}`,
        lastModified: LAST_MOD,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }))

    const matrixRoutes: MetadataRoute.Sitemap = []
    locations.forEach(city => {
        services.forEach(service => {
            matrixRoutes.push({
                url: `${BASE_url}/locations/${city}/${service}`,
                lastModified: LAST_MOD,
                changeFrequency: 'monthly' as const,
                priority: 0.8,
            })
        })
    })

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...resourceSubPages, ...matrixRoutes, ...faqRoutes]
}
