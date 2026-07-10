import type { Metadata } from 'next'
import React from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransitionProvider from '@/components/PageTransitionProvider';
import Analytics from '@/components/Analytics'
export const runtime = 'edge';
import { Toaster } from '@/components/ui/sonner'
import I18nProvider from '@/components/I18nProvider'
import { GlobalJsonLd } from '@/components/ServerJsonLd'
import HoneypotTrap from '@/components/HoneypotTrap'
import DelayedLoader from '@/components/DelayedLoader';
import FloatingCta from "@/components/FloatingCta"
import ClientOnlyWidgets from '@/components/ClientOnlyWidgets'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurancesupport.online'),
    title: {
        default: 'LIC Advisor Bangalore | Insurance Support - Trusted by Families Across India',
        template: '%s | Insurance Support'
    },
    applicationName: 'Insurance Support',
    description: 'Indias #1 LIC Claim Recovery Expert in Bangalore. 25+ years experience, IRDAI certified. Helping families get their rejected claims approved. Free consultation.',
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
                url: 'https://insurancesupport.online/og-image.png',
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
        images: ['https://insurancesupport.online/og-image.png'],
        creator: '@insurancesupport',
    },
    alternates: {
        languages: {
            'en': 'https://insurancesupport.online',
            'hi': 'https://insurancesupport.online/hi',
            'x-default': 'https://insurancesupport.online',
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

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // STATIC: Use 'en' default for static generation
    // Language switching handled client-side by I18nProvider/SmartLanguageSelector
    const lang = 'en';

    return (
        <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="alternate" hreflang="en" href="https://insurancesupport.online" />
                <link rel="alternate" hreflang="hi" href="https://insurancesupport.online/hi" />
                <link rel="alternate" hreflang="x-default" href="https://insurancesupport.online" />
                <meta property="og:image" content="https://insurancesupport.online/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Insurance Support - LIC Advisor Bangalore" />
                <meta name="twitter:image" content="https://insurancesupport.online/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
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
                                            "https://share.google/2Cbcq7l39kTWJl2Dm"
                                        ],
                                        "priceRange": "₹₹",
                                        "irdaiRegistrationNumber": "0149161D"
                                    })
                                }}
                            />
                            <HoneypotTrap />
                            <Analytics />
                            <Header />
                            <main className="flex-1">
                                <PageTransitionProvider>
                                    {children}
                                </PageTransitionProvider>
                            </main>

                            <Footer />
                            <DelayedLoader>
                                <ClientOnlyWidgets />
                            </DelayedLoader>
                            <FloatingCta />
                            <Toaster />
                        </div>
                    </I18nProvider>
                </ThemeProvider>
            </body>

        </html>
    )
}
// build trigger 1783664010
