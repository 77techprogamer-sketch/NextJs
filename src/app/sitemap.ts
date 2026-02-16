import { Metadata, MetadataRoute } from 'next'
import { cityData } from '@/data/cityData'
import { services } from '@/data/services'



const BASE_url = 'https://insurancesupport.online'

export default async function sitemap() {
    const staticRoutes = [
        '',
        '/support',
        '/about',
        '/loans',
        '/engagement',
        '/privacy-policy',
        '/terms-of-service',
        '/return-policy',
        '/get-started',
        '/resources',
        '/contact',
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: ['/privacy-policy', '/terms-of-service'].includes(route) ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))



    const locations = Object.keys(cityData)

    const serviceRoutes = services.map((slug: string) => ({
        url: `${BASE_url}/services/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    const locationRoutes = locations.map((city) => ({
        url: `${BASE_url}/locations/${city}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
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
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const matrixRoutes: MetadataRoute.Sitemap = []
    locations.forEach(city => {
        services.forEach(service => {
            matrixRoutes.push({
                url: `${BASE_url}/locations/${city}/${service}`,
                lastModified: new Date().toISOString(),
                changeFrequency: 'weekly',
                priority: 0.8,
            })
        })
    })

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...resourceSubPages, ...matrixRoutes]
}
