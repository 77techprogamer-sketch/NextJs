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
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurancesupport.online'),
    title: {
        default: 'Insurance Support | Expert Policy & Claims Help India',
        template: '%s | Insurance Support India'
    },
    description: 'Free insurance quotes & expert claims assistance across India. We prioritize your needs over sales. Life, Health, Motor, & Term Insurance solutions.',
    keywords: [
        'Insurance Support India',
        'Insurance Claims Help India',
        'Life Insurance Advisor India',
        'Health Insurance Agent India',
        'Policy Renewal Services',
        'Claim Settlement Assistance',
        'Term Insurance Quotes Online',
        'Motor Insurance Renewal India',
        'investment planning',
        'retirement planning'
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
        title: 'Insurance Support | Trusted Insurance Advisors in India',
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
    alternates: {
        canonical: './',
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
                        <JsonLd />
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
