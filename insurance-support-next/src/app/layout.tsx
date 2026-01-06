import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://insurance-support.vercel.app'),
    title: {
        default: 'Insurance Support - Your Trusted Partner',
        template: '%s | Insurance Support'
    },
    description: 'Get free insurance quotes from experienced advisors in Bangalore. Comprehensive coverage for life, health, motor, and more.',
    keywords: ['insurance', 'life insurance', 'health insurance', 'bangalore', 'insurance agent'],
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
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
