import type { Metadata } from 'next'
import React from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const ChatbotWidget = dynamic(() => import('@/components/ChatbotWidget'), { ssr: false });
import Analytics from '@/components/Analytics'
import dynamic from 'next/dynamic'

const SmartLanguageSelector = dynamic(() => import('@/components/SmartLanguageSelector'), { ssr: false });
const QuickDialSidebar = dynamic(() => import('@/components/QuickDialSidebar'), { ssr: false });
import { Toaster } from '@/components/ui/sonner'
import I18nProvider from '@/components/I18nProvider'
import { GlobalJsonLd } from '@/components/ServerJsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurancesupport.online'),
    title: {
        default: 'Insurance Support Bangalore | Expert Advisors (25+ Years Exp)',
        template: '%s | Insurance Support Bangalore'
    },
    alternates: {
        canonical: './',
    },
    description: 'Claim Rejected? Policy Lost? Get expert help from industry veterans (25+ years experience) in Bangalore. Free consultation for LIC, Health, and Motor insurance.',
    keywords: [
        'Insurance Support',
        'LIC Insurance Support',
        'LIC Policy Surrender Help',
        'Lost Policy Bond Support',
        'Insurance Claim Settlement India',
        'LIC Agent Kotian',
        'Insurance Agent Near Me',
        'Policy Renewal Services',
        'Health Insurance Portability',
        'Motor Insurance Renewal',
        'Term Insurance Quotes',
        'Investment Planning',
        'Retirement Pension Plans'
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
        url: 'https://insurancesupport.online',
        title: 'Insurance Support Online | Trusted Insurance Advisors in India',
        description: 'Get free quotes and expert help for Life, Health, and Motor insurance. Local support across all major Indian cities.',
        siteName: 'Insurance Support',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Insurance Support Team',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Insurance Support - Your Trusted Partner in India',
        description: 'Expert insurance advice and claims support across India.',
        images: ['/og-image.png'],
        creator: '@insurancesupport',
    },
    verification: {
        google: 'UvNqMHYqn8D-knp1S1Fg7xjO73SQ0U_LW3i5osu6Pac',
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
                <link rel="preload" href="/grid.svg" as="image" />
                <link rel="preconnect" href="https://idzvdeemgxhwlkyphnel.supabase.co" />
            </head>
            <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>
                <I18nProvider>
                    <div className="flex flex-col min-h-screen">
                        <GlobalJsonLd />
                        <Analytics />
                        <SmartLanguageSelector />
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                        <QuickDialSidebar />
                        <React.Suspense fallback={null}>
                            <ChatbotWidget />
                        </React.Suspense>
                        <Toaster />
                    </div>
                </I18nProvider>
            </body>
        </html>
    )
}

