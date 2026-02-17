import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/api/location'],
            disallow: ['/private/', '/api/'],
        },
        sitemap: 'https://insurancesupport.online/sitemap.xml',
    }
}
