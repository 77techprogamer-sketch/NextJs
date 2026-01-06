import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://insurance-support.vercel.app'),
  title: {
    default: 'Insurance Support - Free Quotes for Life, Health, Motor & Travel Insurance in India',
    template: '%s | Insurance Support'
  },
  description: 'Get free insurance quotes from experienced advisors in Bangalore. Comprehensive coverage for life, health, term, motor, SME, travel, pension, ULIP, wedding & cyber insurance. Expert claims support with 15+ years experience.',
  keywords: ['insurance quotes India', 'life insurance Bangalore', 'health insurance', 'term insurance', 'motor insurance', 'SME insurance', 'travel insurance', 'pension plans', 'ULIP plans', 'wedding insurance', 'cyber insurance', 'insurance advisor', 'free insurance quotes'],
  authors: [{ name: 'Insurance Support' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://insurance-support.vercel.app',
    siteName: 'Insurance Support',
    title: 'Insurance Support - Free Insurance Quotes | Life, Health, Motor & More',
    description: 'Get free insurance quotes from experienced advisors in Bangalore. 15+ years expertise in life, health, term, motor, SME, travel insurance and more.',
    images: [{ url: '/favicon.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Support - Free Insurance Quotes | Life, Health, Motor & More',
    description: 'Get free insurance quotes from experienced advisors in Bangalore. 15+ years expertise in life, health, term, motor, SME, travel insurance and more.',
    images: ['/favicon.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="5pXuq__DK81bgDqvzYCtYvkeB7ZH868fdh6oUrDxClI" />
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="57410B2E4EDBA3E2C4D5BC42E546F3A0" />
        <meta name="msvalidate.01" content="CD350811C75C9CDF1CD01277B79BA2D1" />
        {/* Yandex Webmaster Tools Verification */}
        <meta name="yandex-verification" content="fbed68329c17dcd9" />

        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InsuranceAgency',
              name: 'Insurance Support',
              url: 'https://insurance-support.vercel.app/',
              logo: 'https://insurance-support.vercel.app/favicon.svg',
              description: 'Professional insurance advisory services in Bangalore with 15+ years of experience. Offering comprehensive coverage for life, health, motor, SME, travel, and more.',
              telephone: '+91-9986634506',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9986634506',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi', 'kn', 'ta', 'te'],
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangalore',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.9716',
                longitude: '77.5946',
              },
              priceRange: 'Free Consultation',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
