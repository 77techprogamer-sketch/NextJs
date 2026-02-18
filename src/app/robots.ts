import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/_next/static/',
                '/images/',
                '/api/location',
            ],
            disallow: [
                '/api/',
                '/private/',
            ],
        },
        sitemap: 'https://insurancesupport.online/sitemap.xml',
    }
}
