import { Metadata } from 'next'
import { cityData } from '@/data/cityData'

export const dynamic = 'force-dynamic'

const BASE_url = 'https://insurancesupport.online'

export default async function sitemap() {
    const staticRoutes = [
        '',
        '/support',
        '/about',
        '/privacy-policy',
        '/terms-of-service',
        '/get-started',
        '/resources',
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        lastModified: new Date().toISOString(),
        priority: route === '' ? 1 : 0.8,
    }))

    const services = [
        'life-insurance',
        'health-insurance',
        'motor-insurance',
        'term-insurance',
        'sme-insurance',
        'travel-insurance',
        'pension-plans',
        'ulip-plans',
        'wedding-insurance',
        'cyber-insurance',
    ]

    const locations = Object.keys(cityData)

    const serviceRoutes = services.map((slug) => ({
        url: `${BASE_url}/services/${slug}`,
        lastModified: new Date().toISOString(),
        priority: 0.9,
    }))

    const locationRoutes = locations.map((city) => ({
        url: `${BASE_url}/locations/${city}`,
        lastModified: new Date().toISOString(),
        priority: 0.85,
    }))

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes]
}
