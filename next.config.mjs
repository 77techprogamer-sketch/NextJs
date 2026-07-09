/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    compress: true,
        output: 'export',
    trailingSlash: false,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                    {
                        key: 'Content-Security-Policy',
                        // eslint-disable-next-line max-len
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://*.clarity.ms https://www.googletagmanager.com https://static.cloudflareinsights.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.clarity.ms https://c.bing.com https://idzvdeemgxhwlkyphnel.supabase.co https://i.pravatar.cc https://*.pravatar.cc https://www.googletagmanager.com; font-src 'self' data:; frame-src 'self' https://udify.app; connect-src 'self' https://*.clarity.ms https://c.bing.com https://idzvdeemgxhwlkyphnel.supabase.co wss://idzvdeemgxhwlkyphnel.supabase.co https://api.ipify.org https://www.google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://*.cloudflareinsights.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(self "https://udify.app"), geolocation=(), browsing-topics=()'
                    }
                ]
            }
        ]
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'idzvdeemgxhwlkyphnel.supabase.co',
                port: '',
                pathname: '/**',
            }
        ],
    },
    experimental: {
        optimizeCss: true, // Requires 'critters' package
        optimizePackageImports: ['lucide-react', 'date-fns', 'lodash']
    },
    async redirects() {
        return [
            // City-specific landing page redirects
            {
                source: '/bangalore',
                destination: '/locations/karnataka/bangalore',
                permanent: true,
            },
            {
                source: '/mumbai',
                destination: '/locations/maharashtra/mumbai',
                permanent: true,
            },
            {
                source: '/locations/:state/:city/:service',
                destination: '/locations/:state/:city',
                permanent: true,
            },
            {
                source: '/locations/:state/bangalore-indiranagar/:service',
                destination: '/locations/:state/bangalore',
                permanent: true,
            },
            {
                source: '/locations/:state/bangalore-koramangala/:service',
                destination: '/locations/:state/bangalore',
                permanent: true,
            },
            {
                source: '/locations/:state/bangalore-jayanagar/:service',
                destination: '/locations/:state/bangalore',
                permanent: true,
            },
            {
                source: '/locations/:state/bangalore-whitefield/:service',
                destination: '/locations/:state/bangalore',
                permanent: true,
            },
            {
                source: '/locations/:state/chennai-adyar/:service',
                destination: '/locations/:state/chennai',
                permanent: true,
            },
            // Legacy Guide Redirects - Consolidated
            {
                source: '/resources/guides/maturity-claim-guide',
                destination: '/resources/guides/lic-revival-maturity-masterclass',
                permanent: true,
            },
            {
                source: '/resources/guides/lic-maturity-claim-forms',
                destination: '/resources/guides/lic-revival-maturity-masterclass',
                permanent: true,
            },
            {
                source: '/resources/guides/neft-mandate-troubleshooting',
                destination: '/resources/guides/lic-revival-maturity-masterclass',
                permanent: true,
            },
            {
                source: '/resources/guides/lost-lic-policy-help',
                destination: '/resources/guides/lic-revival-maturity-masterclass',
                permanent: true,
            },
            {
                source: '/resources/guides/health-insurance-rejection-reasons-guide',
                destination: '/resources/guides/claim-rejection-appeal',
                permanent: true,
            },
            {
                source: '/resources/guides/health-claim-recovery',
                destination: '/resources/guides/claim-rejection-appeal',
                permanent: true,
            },
            {
                source: '/resources/guides/claim-process',
                destination: '/resources/guides/claim-rejection-appeal',
                permanent: true,
            },
            {
                source: '/resources/guides/general-insurance-claim',
                destination: '/resources/guides/general-insurance-claim-process',
                permanent: true,
            },
            {
                source: '/resources/general-insurance-claim-process',
                destination: '/resources/guides/general-insurance-claim-process',
                permanent: true,
            },
            {
                source: '/resources/claim-recovery-guide',
                destination: '/resources/guides/claim-recovery-guide',
                permanent: true,
            },
            {
                source: '/resources/guides/lic-policy-revival',
                destination: '/resources/guides/lapsed-policy-revival',
                permanent: true,
            },
            {
                source: '/resources/national-insurance-claim-process',
                destination: '/resources/guides/general-insurance-claim-process',
                permanent: true,
            },
            // Fallback for any other /guides/* to /resources/guides/*
            {
                source: '/guides/:path*',
                destination: '/resources/guides/:path*',
                permanent: true,
            }
        ];
    },
};

export default nextConfig;
