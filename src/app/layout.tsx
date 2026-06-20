import type { Metadata } from 'next'
import React from 'react';
import { cookies, headers } from 'next/headers';
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
import HoneypotTrap from '@/components/HoneypotTrap'
const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), { ssr: false });
import DelayedLoader from '@/components/DelayedLoader';
const StickyMobileContactBar = dynamic(() => import('@/components/StickyMobileContactBar'), { ssr: false });
const QuestionForm = dynamic(() => import('@/components/QuestionForm'), { ssr: false });
const VisitorTracker = dynamic(() => import('@/components/VisitorTracker'), { ssr: false });
const LeadSyncManager = dynamic(() => import('@/components/LeadSyncManager').then(mod => mod.LeadSyncManager), { ssr: false });
const BroadcastListener = dynamic(() => import('@/components/BroadcastListener'), { ssr: false });
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'), { ssr: false });
import NewsletterSection from '@/components/sections/NewsletterSection';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurancesupport.online'),
    title: {
        default: 'LIC Advisor Bangalore | Insurance Support - 15,000+ Families Helped',
        template: '%s | Insurance Support'
    },
    applicationName: 'Insurance Support',
    description: 'Indias #1 LIC Claim Recovery Expert in Bangalore. 25+ years experience, IRDAI certified. Helped 15,000+ families get their rejected claims approved. Free consultation.',
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
            { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16 32x32 48x48 64x64' },
            { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
        ],
        shortcut: '/favicon.ico',
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180' },
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
        languages: {
            'en-IN': 'https://insurancesupport.online',
            'hi-IN': 'https://insurancesupport.online/hi',
        }
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
const GA4_ID = 'G-JP67H399V2';


const CollapsibleToolsFooter = dynamic(() => import('@/components/CollapsibleToolsFooter'), { ssr: false });
const GlobalForms = dynamic(() => import('@/components/GlobalForms'), { ssr: false });

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = cookies();
    const headersList = headers();
    
    // Consistent detection logic with getServerSideTranslation and client switchers
    let lang = headersList.get('x-next-locale') || 
               cookieStore.get('NEXT_LOCALE')?.value || 
               cookieStore.get('i18next')?.value ||
               cookieStore.get('i18nextLng')?.value || 
               'en';

    // If still fallback, try Accept-Language header
    if (lang === 'en' || !['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'].includes(lang)) {
        const acceptLang = headersList.get('accept-language');
        if (acceptLang) {
            const detected = acceptLang.split(',')[0].split('-')[0].toLowerCase();
            if (['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'].includes(detected)) {
                lang = detected;
            }
        }
    }

    return (
        <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
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
                {/* Google Analytics 4 */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                    strategy="afterInteractive"
                />
                <Script
                    id="ga4-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA4_ID}');
                        `,
                    }}
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#1e3a8a" />
                <link rel="preload" href="/grid.svg" as="image" />

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
                    <I18nProvider initialLang={lang}>
                        <div className="relative flex flex-col min-h-screen">

                            <GlobalJsonLd />
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "LocalBusiness",
                                        "name": "Insurance Support - Hari Kotian",
                                        "description": "LIC Policy Advisor and Claim Recovery Expert in Bangalore. 25+ years experience, IRDAI certified.",
                                        "url": "https://insurancesupport.online",
                                        "telephone": "+91-9986634506",
                                        "email": "contact@insurancesupport.online",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "streetAddress": "Bahubali Nagar, Jalahalli",
                                            "addressLocality": "Bengaluru",
                                            "addressRegion": "KA",
                                            "postalCode": "560013",
                                            "addressCountry": "IN"
                                        },
                                        "geo": {
                                            "@type": "GeoCoordinates",
                                            "latitude": 13.0159,
                                            "longitude": 77.5522
                                        },
                                        "openingHoursSpecification": {
                                            "@type": "OpeningHoursSpecification",
                                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                            "opens": "09:00",
                                            "closes": "21:00"
                                        },
                                        "sameAs": [
                                            "https://share.google/2Cbcq7l39kTWJl2Dm",
                                            "https://www.facebook.com/insurancesupport",
                                            "https://twitter.com/insurancesupport",
                                            "https://www.instagram.com/insurancesupport"
                                        ],
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.9",
                                            "reviewCount": "150"
                                        },
                                        "priceRange": "₹₹"
                                    })
                                }}
                            />
                            <HoneypotTrap />
                            <Analytics />
                            <SmartLanguageSelector />
                            <Header />
                            <main className="flex-1">
                                <PageTransitionProvider>
                                    {children}
                                    <QuestionForm />
                                </PageTransitionProvider>
                            </main>

                            <NewsletterSection />
                            <CollapsibleToolsFooter />
                            <Footer />
                            <div className="min-h-[1px]"> {/* Stability placeholder */}
                                <DelayedLoader>
                                    <VisitorTracker />
                                    <QuickDialSidebar />
                                    <React.Suspense fallback={<div className="h-0" />}>
                                        <ChatbotWidget />
                                    </React.Suspense>
                                    <GlobalForms />
                                    <WhatsAppWidget />
                                    <StickyMobileContactBar />
                                    <LeadSyncManager />
                                    <BroadcastListener />
                                    <ExitIntentPopup />
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