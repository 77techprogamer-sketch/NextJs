/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://*.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.clarity.ms https://c.bing.com; font-src 'self' data:; frame-src 'self' https://udify.app; connect-src 'self' https://*.clarity.ms https://c.bing.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';"
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(self "https://udify.app"), geolocation=(), browsing-topics=()'
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
