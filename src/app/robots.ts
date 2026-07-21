import { MetadataRoute } from 'next'

const BASE_URL = 'https://insurancesupport.online'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/about',
                    '/about-hari-kotian',
                    '/services',
                    '/services/*',
                    '/locations',
                    '/locations/*',
                    '/support',
                    '/contact',
                    '/get-started',
                    '/resources',
                    '/resources/*',
                    '/blog',
                    '/blog/*',
                    '/guides/*',
                    '/tools/*',
                    '/claim-recovery',
                    '/free-review',
                    '/compare-insurance',
                    '/alternatives/*',
                    '/loans',
                    '/success-stories',
                    '/privacy-policy',
                    '/terms-of-service',
                    '/return-policy',
                    '/_next/static/',
                    '/images/',
                    '/favicon.ico',
                    '/manifest.json',
                    '/sitemap.xml',
                ],
                disallow: [
                    '/api/*',
                    '/private/',
                    '/engagement/',
                    '/blocked/',
                    '/hidden-admin-access',
                    '/private-backup',
                    '/config-files',
                    '/_next/image',
                    '/_next/data/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/engagement/',
                    '/blocked/',
                    '/api/*',
                ],
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: [
                    '/engagement/',
                    '/blocked/',
                    '/api/*',
                ],
            },
            {
                userAgent: 'IndexNow',
                allow: '/',
            },
            {
                userAgent: 'Applebot',
                allow: '/',
            },
            {
                userAgent: 'facebot',
                allow: '/',
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },
        ],
        sitemap: [
            `${BASE_URL}/sitemap.xml`,
        ],
    }
}
