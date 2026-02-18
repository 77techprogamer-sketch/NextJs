import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/_next/',
                '/api/location',
                '/images/',
                '/locales/',
            ],
            disallow: ['/private/', '/api/'],
        },
        sitemap: 'https://insurancesupport.online/sitemap.xml',
    }
}
