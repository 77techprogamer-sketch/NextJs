import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Shield, FileText, Car, Building, Plane, Wallet, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Your trusted partner for comprehensive insurance solutions.',
  alternates: {
    canonical: '/',
  },
}

// Revalidate every hour (ISR)
export const revalidate = 3600

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section hero-morning-bg relative w-full">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white w-full h-full flex flex-col justify-between items-center text-center p-4 pt-16 pb-8 min-h-[60vh]">
          <div className="space-y-4 mt-8 mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-2">
              Your Trusted Insurance Partner
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Get free quotes for life, health, motor, and travel insurance from experienced advisors
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-full mt-4 mb-4">
            <Link href="/support">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg w-full sm:w-auto font-semibold px-8 py-6"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              title="Life Insurance"
              icon={Heart}
              href="/services/life-insurance"
            />
            <ServiceCard
              title="Health Insurance"
              icon={Shield}
              href="/services/health-insurance"
            />
            <ServiceCard
              title="Term Insurance"
              icon={FileText}
              href="/services/term-insurance"
            />
            <ServiceCard
              title="Motor Insurance"
              icon={Car}
              href="/services/motor-insurance"
            />
            <ServiceCard
              title="SME Insurance"
              icon={Building}
              href="/services/sme-insurance"
            />
            <ServiceCard
              title="Travel Insurance"
              icon={Plane}
              href="/services/travel-insurance"
            />
            <ServiceCard
              title="Pension Plans"
              icon={Wallet}
              href="/services/pension-plans"
            />
            <ServiceCard
              title="ULIP Plans"
              icon={TrendingUp}
              href="/services/ulip-plans"
            />
            <ServiceCard
              title="Wedding Insurance"
              icon={HeartHandshake}
              href="/services/wedding-insurance"
            />
            <ServiceCard
              title="Cyber Insurance"
              icon={ShieldCheck}
              href="/services/cyber-insurance"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg">
              <Shield className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2 text-lg sm:text-xl">Expert Guidance</CardTitle>
              <CardDescription className="text-center">
                Professional advisors with 15+ years of experience
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg">
              <Heart className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2 text-lg sm:text-xl">Comprehensive Coverage</CardTitle>
              <CardDescription className="text-center">
                Wide range of insurance products for all your needs
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg">
              <ShieldCheck className="text-primary h-12 w-12 mb-4" />
              <CardTitle className="mb-2 text-lg sm:text-xl">Claims Support</CardTitle>
              <CardDescription className="text-center">
                Expert assistance throughout the claims process
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
