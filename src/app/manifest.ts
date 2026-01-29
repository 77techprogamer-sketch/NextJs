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
                src: '/brand-favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
