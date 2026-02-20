import { Metadata, MetadataRoute } from 'next'
import { cityData } from '@/data/cityData'
import { services } from '@/data/services'
import { faqData } from '@/data/faqData'



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
        '/locations',
        '/services',
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        changeFrequency: 'daily',
        priority: route === '' || route === '/locations' || route === '/services' ? 1 : 0.8,
    }))



    const locations = Object.keys(cityData)

    const serviceRoutes = services.map((slug: string) => ({
        url: `${BASE_url}/services/${slug}`,
        changeFrequency: 'daily',
        priority: 0.9,
    }))

    const locationRoutes = locations.map((city) => ({
        url: `${BASE_url}/locations/${city}`,
        changeFrequency: 'daily',
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
        changeFrequency: 'daily',
        priority: 0.7,
    }))

    // Generate FAQ Routes
    const faqRoutes = faqData.map((faq) => ({
        url: `${BASE_url}/resources/faq/${faq.slug}`,
        changeFrequency: 'daily',
        priority: 0.75, // Higher priority than general resources
    }))

    const matrixRoutes: MetadataRoute.Sitemap = []
    locations.forEach(city => {
        services.forEach(service => {
            matrixRoutes.push({
                url: `${BASE_url}/locations/${city}/${service}`,
                changeFrequency: 'daily',
                priority: 0.8,
            })
        })
    })

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...resourceSubPages, ...matrixRoutes, ...faqRoutes]
}
