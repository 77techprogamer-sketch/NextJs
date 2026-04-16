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
const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), { ssr: false });
import DelayedLoader from '@/components/DelayedLoader';
const StickyMobileContactBar = dynamic(() => import('@/components/StickyMobileContactBar'), { ssr: false });
const IntenseDebateComments = dynamic(() => import('@/components/IntenseDebateComments'), { ssr: false });
const VisitorTracker = dynamic(() => import('@/components/VisitorTracker'), { ssr: false });
const LeadSyncManager = dynamic(() => import('@/components/LeadSyncManager').then(mod => mod.LeadSyncManager), { ssr: false });
const BroadcastListener = dynamic(() => import('@/components/BroadcastListener'), { ssr: false });
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurancesupport.online'),
    title: {
        default: 'Buy Insurance & Claim Support India | Expert Advice',
        template: '%s | Insurance Support'
    },
    applicationName: 'Insurance Support',
    description: 'Buy premium Life, Health, and Motor Insurance. Struggling with rejected claims or lost LIC policies? Get expert help to fight for your money. Free Consultation.',
    keywords: [
        'Buy Life Insurance Online',
        'Buy Health Insurance India',
        'Buy Term Insurance',
        'Buy Motor Insurance',
        'Insurance Support',
        'LIC Insurance Support',
        'Insurance Claim Recovery India',
        'LIC Policy Revival',
        'Death Claim Settlement',
        'Lost Policy Bond Support',
        'Insurance Claim Settlement India',
        'Insurance Advisor Kotian',
        'Insurance Advisor Near Me',
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
        'Policy Revival Services'
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
    verification: {
        google: 'fbed68329c17dcd9',
        yandex: '89297fa7e3252466',
        other: {
            'msvalidate.01': '71a80a3568ae5d1d945fda3ef57fe18e',
        }
    },
    icons: {
        icon: [
            { url: '/favicon.svg?v=3', type: 'image/svg+xml' }
        ],
        shortcut: '/favicon.svg?v=3',
        apple: [
            { url: '/favicon.svg?v=3', type: 'image/svg+xml' },
        ],
    },
    appleWebApp: {
        title: 'Insurance Support',
        capable: true,
        statusBarStyle: 'default',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://insurancesupport.online',
        title: 'Buy Top Insurance & Expert Claim Support',
        description: 'Get free quotes and buy premium Life, Health, and Motor insurance. Facing claim issues? We help you recover your money.',
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
        title: 'Buy Insurance & Claim Support - Expert Advice',
        description: 'Expert advice to buy the right policy and claims support across India. Don\'t let your claim be rejected.',
        images: ['/og-image.png'],
        creator: '@insurancesupport',
    },
    alternates: {
        canonical: 'https://insurancesupport.online',
    },
    other: {
        'content-language': 'en-IN',
        'geo.region': 'IN-KA',
        'geo.placename': 'Bangalore',
        'geo.position': '13.0159;77.5522',
        'ICBM': '13.0159, 77.5522',
    },
}

import Script from 'next/script';
const GTM_ID = 'GTM-P8DZ6MRQ';


const FloatingToolDock = dynamic(() => import('@/components/FloatingToolDock'), { ssr: false });
const GlobalForms = dynamic(() => import('@/components/GlobalForms'), { ssr: false });

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Google Tag Manager anchor */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${GTM_ID}');`,
                    }}
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#1e3a8a" />
                <link rel="preload" href="/grid.svg" as="image" />
                <link rel="preconnect" href="https://idzvdeemgxhwlkyphnel.supabase.co" />

            </head>
            <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased relative`} suppressHydrationWarning>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* Background Decoration */}
                <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30 dark:opacity-20 overflow-hidden">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
                    <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]"></div>
                </div>

                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <I18nProvider>
                        <div className="relative flex flex-col min-h-screen">

                            <GlobalJsonLd />
                            <Analytics />
                            <SmartLanguageSelector />
                            <Header />
                            <main className="flex-1">
                                <PageTransitionProvider>
                                    {children}
                                    <IntenseDebateComments />
                                </PageTransitionProvider>
                            </main>
                            <DynamicKeywordLinks />

                            <Footer />
                            <div className="min-h-[1px]"> {/* Stability placeholder */}
                                <DelayedLoader>
                                    <VisitorTracker />
                                    <QuickDialSidebar />
                                    <React.Suspense fallback={<div className="h-0" />}>
                                        <ChatbotWidget />
                                    </React.Suspense>
                                    <FloatingToolDock />
                                    <GlobalForms />
                                    <WhatsAppWidget />
                                    <StickyMobileContactBar />
                                    <LeadSyncManager />
                                    <BroadcastListener />
                                </DelayedLoader>
                            </div>
                            <SpeedInsights />
                            <Toaster />
                        </div>
                    </I18nProvider>
                </ThemeProvider>
            </body>

        </html>
    )
}

