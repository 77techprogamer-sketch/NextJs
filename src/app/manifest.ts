import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Insurance Support',
        short_name: 'Insurance Support',
        description: 'Your Trusted Partner for Insurance in India',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico?v=1',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/brand-favicon.svg?v=1',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
