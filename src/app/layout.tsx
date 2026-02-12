import type { Metadata } from 'next'
import React from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import PageTransitionProvider from '@/components/PageTransitionProvider';
const ChatbotWidget = dynamic(() => import('@/components/ChatbotWidget'), { ssr: false });
import Analytics from '@/components/Analytics'

const SmartLanguageSelector = dynamic(() => import('@/components/SmartLanguageSelector'), { ssr: false });
const QuickDialSidebar = dynamic(() => import('@/components/QuickDialSidebar'), { ssr: false });
import { Toaster } from '@/components/ui/sonner'
import I18nProvider from '@/components/I18nProvider'
import { GlobalJsonLd } from '@/components/ServerJsonLd'
import DynamicKeywordLinks from '@/components/DynamicKeywordLinks'
const ShareNudge = dynamic(() => import('@/components/ShareNudge'), { ssr: false });
const ActivityTicker = dynamic(() => import('@/components/ActivityTicker'), { ssr: false });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurancesupport.online'),
    title: {
        default: 'Insurance Support | Expert Claim Recovery Services',
        template: '%s | Insurance Support'
    },
    alternates: {
        canonical: 'https://insurancesupport.online',
    },
    description: 'Struggling with rejected claims or lost LIC policies? Get 25+ years of expert help. We fight for your money. Free Consultation. Call Now! Serving All India.',
    keywords: [
        'Insurance Support',
        'LIC Insurance Support',
        'Insurance Claim Recovery India',
        'LIC Policy Revival',
        'Death Claim Settlement',
        'Lost Policy Bond Support',
        'Insurance Claim Settlement India',
        'LIC Agent Kotian',
        'Insurance Agent Near Me',
        'Policy Renewal Services',
        'Health Insurance Portability',
        'Motor Insurance Renewal',
        'Term Insurance Quotes',
        'Investment Planning',
        'Retirement Pension Plans',
        'Family Financial Planning',
        'Best Insurance Service Provider',
        'Online Insurance Consultation',
        'Insurance Claim Settlement Help',
        'Policy Revival Services',
        'insurance',
        'health insurance',
        'life insurance',
        'term insurance',
        'bike insurance',
        'car insurance',
        'two wheeler insurance',
        'medical insurance',
        'travel insurance',
        'best insurance policy',
        'best health insurance',
        'family health insurance',
        'senior citizen health insurance',
        'maternity insurance',
        'critical illness insurance',
        'personal accident insurance',
        'fire insurance',
        'marine insurance',
        'property insurance',
        'home insurance',
        'corporate insurance',
        'group health insurance',
        'workmen compensation',
        'sme insurance',
        'commercial insurance',
        'transit insurance',
        'theft insurance',
        'burglary insurance',
        'shop insurance',
        'office insurance',
        'factory insurance',
        'godigit',
        'acko',
        'star health',
        'hdfc ergo',
        'icici lombard',
        'bajaj allianz',
        'tata aig',
        'max life',
        'sbi life',
        'lic',
        'kotak life',
        'new india assurance',
        'oriental insurance',
        'united india insurance',
        'national insurance',
        'reliance general insurance',
        'navi insurance',
        'care health insurance',
        'niva bupa',
        'aditya birla health',
        'manipal cigna',
        'future generali',
        'cholamandalam',
        'royal sundaram',
        'liberty general',
        'shriram general',
        'car insurance calculator',
        'health insurance pre auth form',
        'maternity insurance policy',
        'best term life insurance',
        'two wheeler insurance renewal',
        'insurance policy',
        'online insurance',
        'policybazaar',
        'insurance dekho',
        'ditto insurance',
        'coverfox',
        'tata aig insurance',
        'bharti axa life insurance',
        'canara hsbc life insurance',
        'hero insurance broking',
        'aditya birla sun life insurance',
        'maruti insurance',
        'zuno general insurance',
        'postal life insurance'
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
        icon: [
            { url: '/favicon.ico?v=1' },
            { url: '/brand-favicon.svg?v=1', type: 'image/svg+xml' },
        ],
        shortcut: '/favicon.ico?v=1',
        apple: [
            { url: '/brand-favicon.svg?v=1', type: 'image/svg+xml' },
        ],
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://insurancesupport.online',
        title: 'Insurance Support India | Trusted Insurance Advisors',
        description: 'Get free quotes and expert help for Life, Health, and Motor insurance claims. We are your partner in securing your familys future.',
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
        title: 'Insurance Support - Expert Claims Help',
        description: 'Expert insurance advice and claims support across India. Don\'t let your claim be rejected.',
        images: ['/og-image.png'],
        creator: '@insurancesupport',
    },
    verification: {
        google: 'UvNqMHYqn8D-knp1S1Fg7xjO73SQ0U_LW3i5osu6Pac',
        yandex: '89297fa7e3252466',
    },
    other: {
        'content-language': 'en',
        'language': 'English',
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
            <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased relative`} suppressHydrationWarning>
                {/* Background Decoration */}
                <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30 dark:opacity-20 overflow-hidden">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
                    <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]"></div>
                </div>

                <I18nProvider>
                    <div className="flex flex-col min-h-screen overflow-x-hidden">
                        <GlobalJsonLd />
                        <Analytics />
                        <SmartLanguageSelector />
                        <Header />
                        <main className="flex-1">
                            <PageTransitionProvider>
                                {children}
                            </PageTransitionProvider>
                        </main>
                        <DynamicKeywordLinks />

                        <Footer />
                        <QuickDialSidebar />
                        <React.Suspense fallback={null}>
                            <ChatbotWidget />
                        </React.Suspense>
                        <ShareNudge />
                        <ActivityTicker />
                        <Toaster />
                    </div>
                </I18nProvider>
            </body>

        </html>
    )
}

