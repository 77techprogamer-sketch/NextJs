import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/_next/static/',
                    '/images/',
                    '/api/location',
                ],
                disallow: [
                    '/api/*',
                    '/private/',
                    '/engagement/',
                    '/blocked/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/engagement/',
                    '/blocked/',
                ],
            },
            {
                // Allow Google-Extended for AI Overviews (featured answers in search)
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'IndexNow',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: [
                    '/',
                    '/api/location',
                ],
                disallow: [
                    '/engagement/',
                    '/blocked/',
                ],
            },
            {
                // Allow Applebot for Apple Intelligence search features
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
        ],
        sitemap: [
            'https://insurancesupport.online/sitemap.xml',
        ],
    }
}
