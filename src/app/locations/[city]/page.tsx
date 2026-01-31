import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone, UserCheck, Clock } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { getCityData, cityData } from '@/data/cityData'

interface Props {
    params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = getCityData(params.city)
    if (!city) return {}

    return {
        title: {
            absolute: `LIC Agent in ${city.name} - Insurance Support`
        },
        description: `Looking for an LIC Agent in ${city.name}? We provide doorstep service for policy surrender, maturity claims, and new insurance quotes in ${city.name}.`,
        keywords: [
            `LIC Agent ${city.name}`,
            `Insurance Agent ${city.name}`,
            `LIC Policy Surrender ${city.name}`,
            `National Insurance Renewal ${city.name}`,
            `Health Insurance Agent ${city.name}`,
            `Motor Insurance Renewal ${city.name}`,
            `Best Insurance Advisor in ${city.name}`,
            `Policy Claim Help ${city.name}`,
            `Doorstep Insurance Service ${city.name}`,
            ...city.areas.map(area => `LIC Agent in ${area}`),
            ...city.areas.map(area => `Insurance Agent in ${area}`),
            ...city.areas.map(area => `Policy Renewal ${area}`)
        ],
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.city}`,
        },
        openGraph: {
            title: `Insurance Support ${city.name} | Trusted Advisors`,
            description: `Skip the queues. Get expert help for LIC and National Insurance policies right at your doorstep in ${city.name}.`,
            type: 'website',
        }
    }
}

export async function generateStaticParams() {
    return Object.keys(cityData).map((slug) => ({
        city: slug,
    }))
}

export default function LocationPage({ params }: Props) {
    const city = getCityData(params.city)

    if (!city) {
        return notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: `Insurance Support ${city.name}`,
        description: `Authorized support and advisory for National Insurance Company products in ${city.name}.`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: city.state,
            addressCountry: 'IN'
        },
        areaServed: {
            '@type': 'City',
            name: city.name
        },
        telephone: '+919986634506'
    }

    return (
        <div className="container px-4 py-12 mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex flex-col md:flex-row gap-12">

                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                        ← Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        LIC & National Insurance Support in <span className="text-primary">{city.name}</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Are you tired of calling customer care or visiting the office just to get a simple query resolved?
                        We bring the <strong>LIC & National Insurance office to your doorstep in {city.name}</strong>.
                    </p>

                    <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2 mb-2">
                            <MapPin className="h-5 w-5" />
                            Looking for the LIC Office in {city.name}?
                        </h3>
                        <p className="text-amber-800 dark:text-amber-200">
                            <strong>Skip the long queues!</strong> You don&apos;t need to visit the branch. Our authorized agents provide full support for policy surrender, claims, and renewals right at your home in {city.name}.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <UserCheck className="h-5 w-5 text-green-600" />
                                    Personalized Service
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">No more talking to bots. Get a dedicated insurance advisor who understands your family&apos;s needs.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    No More Queues
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">We handle all the paperwork for renewals and claims so you don&apos;t have to waste your day.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Services We Offer in {city.name}</h2>
                    <ul className="space-y-4 mb-10">
                        {[
                            'Doorstep Policy Renewal (Cheque/Online)',
                            'Assistance with Lapsed Policies',
                            'Cashless Claim Settlement Assistance',
                            'Motor Insurance Inspection Scheduling',
                            'Family Floater Health Plans',
                            'Tax-Saving Life Insurance (80C)'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {city.areas.length > 0 && (
                        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 mb-10">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                Areas We Serve in {city.name}
                            </h3>
                            <p className="text-muted-foreground">
                                We cover {city.areas.join(', ')}, and all major areas in {city.name}.
                            </p>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto h-12 text-lg">
                            <Phone className="mr-2 h-4 w-4" />
                            Call +91 99866 34506
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-lg">
                            WhatsApp Us
                        </Button>
                    </div>

                </div>

                {/* Sidebar / Form */}
                <div className="w-full md:w-[400px]">
                    <div className="sticky top-24">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                            <h3 className="text-xl font-bold mb-2">Get a Call Back</h3>
                            <p className="text-sm text-muted-foreground mb-6">Expert advice within 2 hours.</p>
                            <QuoteForm insuranceType="general_inquiry" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
