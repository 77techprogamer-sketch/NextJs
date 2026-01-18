import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import Analytics from '@/components/Analytics'
import dynamic from 'next/dynamic'

const SmartLanguageSelector = dynamic(() => import('@/components/SmartLanguageSelector'), { ssr: false });
import { Toaster } from '@/components/ui/sonner'
import I18nProvider from '@/components/I18nProvider'
import DisableRightClick from '@/components/DisableRightClick'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurance-support.vercel.app'),
    title: {
        default: 'Insurance Support - Your Trusted Partner',
        template: '%s | Insurance Support'
    },
    description: 'Get free insurance quotes from experienced advisors in Bangalore. Comprehensive coverage for life, health, motor, and more.',
    keywords: [
        'Insurance Support',
        'Insurance Support Bangalore',
        'Insurance Support India',
        'Insurance Claims Support',
        'Policy Management',
        'Life Insurance Support',
        'Health Insurance Support',
        'Motor Insurance Support',
        'Travel Insurance Support',
        'SME Insurance Support',
        'Pension Planning',
        'Investment Planning',
        'insurance',
        'life insurance',
        'health insurance',
        'bangalore',
        'insurance agent',
        'best insurance advisor bangalore',
        'Claim Settlement Help',
        'Policy Renewal Services',
        'Rejected Claim Assistance',
        'Lost Policy Document Help',
        'Insurance Portability Services',
        'NRI Insurance Services',
        'Senior Citizen Health Insurance',
        'Term Life Insurance Quotes',
        'Car Insurance Renewal',
        'Death Claim Settlement',
        'Maturity Claim Assistance',
        'LIC Policy Service',
        'Star Health Insurance Support',
        'Tata AIA Life Insurance Support'
    ],
    authors: [{ name: 'Insurance Support' }],
    creator: 'Insurance Support',
    publisher: 'Insurance Support',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/brand-favicon.svg',
        shortcut: '/brand-favicon.svg',
        apple: '/brand-favicon.svg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://insurance-support.vercel.app',
        title: 'Insurance Support - Your Trusted Partner',
        description: 'Get free insurance quotes from experienced advisors in Bangalore. Comprehensive coverage for life, health, motor, and more.',
        siteName: 'Insurance Support',
        images: [
            {
                url: '/og-image.png', // Need to make sure this exists or use a default
                width: 1200,
                height: 630,
                alt: 'Insurance Support',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Insurance Support - Your Trusted Partner',
        description: 'Get free insurance quotes from experienced advisors in Bangalore.',
        images: ['/og-image.png'], // Fallback to OG image
        creator: '@insurancesupport', // Placeholder
    },
    verification: {
        google: 'UvNqMHYqn8D-knp1S1Fg7xjO73SQ0U_LW3i5osu6Pac',
        yandex: 'your-yandex-verification-code',
        other: {
            'msvalidate.01': 'your-bing-verification-code',
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://idzvdeemgxhwlkyphnel.supabase.co" />
                <link rel="preconnect" href="https://www.clarity.ms" />
                <link rel="preconnect" href="https://c.bing.com" />
            </head>
            <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>
                <DisableRightClick />
                <I18nProvider>
                    <div className="flex flex-col min-h-screen">
                        <JsonLd />
                        <Analytics />
                        <SmartLanguageSelector />
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                        <ChatbotWidget />
                        <Toaster />
                    </div>
                </I18nProvider>
            </body>
        </html>
    )
}
