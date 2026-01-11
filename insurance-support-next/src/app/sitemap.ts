import { Metadata } from 'next'

const BASE_url = 'https://insurance-support.vercel.app'

export default async function sitemap() {
    const staticRoutes = [
        '',
        '/support',
        '/about',
        '/privacy-policy',
        '/terms-of-service',
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

    const serviceRoutes = services.map((slug) => ({
        url: `${BASE_url}/services/${slug}`,
        lastModified: new Date().toISOString(),
        priority: 0.9,
    }))

    return [...staticRoutes, ...serviceRoutes]
}
