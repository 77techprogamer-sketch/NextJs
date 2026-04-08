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
        ],
        sitemap: [
            'https://insurancesupport.online/sitemap.xml',
        ],
    }
}
