import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import GeoBlocker from '@/components/GeoBlocker'
import SmartLanguageSelector from '@/components/SmartLanguageSelector'
import Analytics from '@/components/Analytics'
import { Toaster } from '@/components/ui/sonner'
import I18nProvider from '@/components/I18nProvider'
import DisableRightClick from '@/components/DisableRightClick'

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
        'best insurance advisor bangalore'
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://insurance-support.vercel.app',
        siteName: 'Insurance Support',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
                <DisableRightClick />
                <I18nProvider>
                    <div className="flex flex-col min-h-screen">
                        <Analytics />
                        <SmartLanguageSelector />
                        <GeoBlocker />
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
