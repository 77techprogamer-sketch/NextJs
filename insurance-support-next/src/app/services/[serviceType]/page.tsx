import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceDetail {
    title: string
    description: string
    metaDescription: string
    image: string
    features: Array<{ title: string; description: string }>
}

const serviceDetails: Record<string, ServiceDetail> = {
    'life-insurance': {
        title: 'Life Insurance',
        description: 'Secure your family\'s financial future with comprehensive life insurance coverage. Protect your loved ones from financial uncertainties.',
        metaDescription: 'Get comprehensive life insurance coverage in Bangalore. Protect your family\'s financial future with expert advice and competitive rates.',
        image: '/life-insurance.png',
        features: [
            { title: 'Financial Security', description: 'Ensure your family\'s financial stability' },
            { title: 'Tax Benefits', description: 'Save on taxes under Section 80C' },
            { title: 'Wealth Creation', description: 'Build long-term wealth for your family' },
        ],
    },
    'health-insurance': {
        title: 'Health Insurance',
        description: 'Comprehensive health coverage for you and your family. Access to cashless hospitalization and quality healthcare.',
        metaDescription: 'Best health insurance plans in Bangalore. Cashless hospitalization, comprehensive coverage, and expert support for your medical needs.',
        image: '/health-insurance.png',
        features: [
            { title: 'Medical Expenses', description: 'Coverage for hospitalization and treatment' },
            { title: 'Cashless Hospitalization', description: 'Network hospitals across India' },
            { title: 'Pre/Post Hospitalization', description: 'Complete care coverage' },
        ],
    },
    'term-insurance': {
        title: 'Term Insurance',
        description: 'Pure protection at affordable premiums. High coverage for your family\'s security with minimal cost.',
        metaDescription: 'Affordable term insurance plans in Bangalore. High coverage, low premiums, and pure protection for your loved ones.',
        image: '/term-insurance.png',
        features: [
            { title: 'High Cover Low Premium', description: 'Maximum protection at minimum cost' },
            { title: 'Pure Protection', description: 'No investment component' },
            { title: 'Income Replacement', description: 'Replace your income for your family' },
        ],
    },
    'motor-insurance': {
        title: 'Motor Insurance',
        description: 'Comprehensive coverage for your vehicle. Protect against damages, theft, and third-party liabilities.',
        metaDescription: 'Motor insurance for cars and bikes in Bangalore. Comprehensive coverage, cashless claims, and instant policy issuance.',
        image: '/motor-insurance.png',
        features: [
            { title: 'Own Damage Cover', description: 'Protection for your vehicle' },
            { title: 'Third Party Liability', description: 'Legal requirement coverage' },
            { title: 'Personal Accident Cover', description: 'Coverage for driver and passengers' },
        ],
    },
    'sme-insurance': {
        title: 'SME Insurance',
        description: 'Comprehensive insurance solutions for small and medium enterprises. Protect your business from unforeseen risks.',
        metaDescription: 'SME insurance solutions in Bangalore. Protect your business with comprehensive coverage for property, liability, and business interruption.',
        image: '/sme-insurance.png',
        features: [
            { title: 'Business Interruption', description: 'Coverage for income loss' },
            { title: 'Property Damage', description: 'Protection for business assets' },
            { title: 'Liability Cover', description: 'Third-party liability protection' },
        ],
    },
    'travel-insurance': {
        title: 'Travel Insurance',
        description: 'Travel worry-free with comprehensive travel insurance. Medical emergencies, trip cancellations, and baggage protection.',
        metaDescription: 'Travel insurance for domestic and international trips. Medical emergencies, trip cancellation, and baggage loss coverage.',
        image: '/travel-insurance.png',
        features: [
            { title: 'Medical Emergencies', description: 'Coverage abroad' },
            { title: 'Trip Cancellation', description: 'Refund for cancellations' },
            { title: 'Baggage Loss', description: 'Protection for your belongings' },
        ],
    },
    'pension-plans': {
        title: 'Pension Plans',
        description: 'Plan your retirement with comprehensive pension solutions. Secure regular income for your golden years.',
        metaDescription: 'Pension and retirement plans in Bangalore. Secure your retirement with regular income and financial independence.',
        image: '/pension-plans.png',
        features: [
            { title: 'Retirement Income', description: 'Regular income after retirement' },
            { title: 'Annuity Options', description: 'Flexible payout options' },
            { title: 'Financial Independence', description: 'Live independently' },
        ],
    },
    'ulip-plans': {
        title: 'ULIP Plans',
        description: 'Unit Linked Insurance Plans combining investment and insurance. Build wealth while staying protected.',
        metaDescription: 'ULIP investment plans in Bangalore. Combine insurance protection with market-linked investment growth.',
        image: '/ulip-plans.png',
        features: [
            { title: 'Investment Growth', description: 'Market-linked returns' },
            { title: 'Life Cover', description: 'Insurance protection' },
            { title: 'Fund Switching', description: 'Flexible investment options' },
        ],
    },
    'wedding-insurance': {
        title: 'Wedding Insurance',
        description: 'Protect your special day from unforeseen circumstances. Coverage for cancellations, damages, and liabilities.',
        metaDescription: 'Wedding insurance coverage in Bangalore. Protect your special day from cancellations, damages, and unexpected events.',
        image: '/wedding-insurance.png',
        features: [
            { title: 'Cancellation Cover', description: 'Refund for cancellations' },
            { title: 'Damage to Property', description: 'Protection for venue and items' },
            { title: 'Public Liability', description: 'Third-party coverage' },
        ],
    },
    'cyber-insurance': {
        title: 'Cyber Insurance',
        description: 'Protect your business from cyber threats and data breaches. Comprehensive coverage for digital risks.',
        metaDescription: 'Cyber insurance for businesses in Bangalore. Protection against data breaches, cyber attacks, and digital risks.',
        image: '/cyber-insurance.png',
        features: [
            { title: 'Data Breach Costs', description: 'Recovery expenses coverage' },
            { title: 'Cyber Extortion', description: 'Protection from ransomware' },
            { title: 'Legal Expenses', description: 'Legal cost coverage' },
        ],
    },
}

// Generate static paths for all service pages at build time
export async function generateStaticParams() {
    return Object.keys(serviceDetails).map((serviceType) => ({
        serviceType,
    }))
}

// Generate metadata for each service page
export async function generateMetadata(
    { params }: { params: Promise<{ serviceType: string }> }
): Promise<Metadata> {
    const { serviceType } = await params
    const service = serviceDetails[serviceType]

    if (!service) {
        return {}
    }

    return {
        title: service.title,
        description: service.metaDescription,
        alternates: {
            canonical: `/services/${serviceType}`,
        },
        openGraph: {
            title: `${service.title} - Insurance Support`,
            description: service.metaDescription,
            url: `/services/${serviceType}`,
            images: [service.image],
        },
    }
}

export default async function ServicePage(
    { params }: { params: Promise<{ serviceType: string }> }
) {
    const { serviceType } = await params
    const service = serviceDetails[serviceType]

    if (!service) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Home className="h-4 w-4" />
                    Back to Home
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <Link href="/support">
                        <Button size="lg" className="w-full sm:w-auto">
                            Get a Free Quote
                        </Button>
                    </Link>
                </div>
                <div className="relative aspect-video w-full">
                    <Image
                        src={service.image}
                        alt={`${service.title} Infographic`}
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                        priority
                    />
                </div>
            </div>

            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.features.map((feature, index) => (
                        <Card key={index} className="text-center p-6">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}

// ISR - revalidate every 24 hours
export const revalidate = 86400
