import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone, UserCheck, Clock, Shield, ArrowRight } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { getCityData, cityData } from '@/data/cityData'
import { ServiceLinksForCity } from '@/components/KeywordLinkBlocks'
import CityFAQSection from '@/components/CityFAQSection'

interface Props {
    params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = getCityData(params.city)
    if (!city) return {}

    return {
        title: {
            absolute: `Top Insurance Advisor in ${city.name} | Expert Claim & Policy Support`
        },
        description: `Trusted Insurance Advisor in ${city.name} (25+ years experience, 98% success rate). We offer doorstep assistance for LIC revivals, health claims, and comprehensive policy planning. Book your free consultation.`,
        keywords: [
            `Insurance Support ${city.name}`,
            `Insurance Advisor in ${city.name}`,
            `LIC Policy Maturity ${city.name}`,
            `Death Claim Help ${city.name}`,
            `Policy Revival ${city.name}`,
            `Insurance Claim Recovery ${city.name}`,
            `LIC Advisor in ${city.name}`,
            `Health Insurance Claim ${city.name}`,
            `Motor Insurance Renewal ${city.name}`,
            `Best Insurance Advisor in ${city.name}`,
            ...city.areas.map(area => `Insurance Advisor in ${area}`),
            ...city.areas.map(area => `Policy Renewal ${area}`)
        ],
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.city}`,
        },
        openGraph: {
            title: `Insurance Advisor in ${city.name} – Doorstep Service | Insurance Support`,
            description: `Trusted by 5,000+ families in ${city.name}. Expert LIC & health insurance help with 98% claim success. Free doorstep consultation – book now!`,
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
        '@id': `https://insurancesupport.online/locations/${params.city}#local`,
        name: `Insurance Support ${city.name}`,
        description: `Certified insurance advisor providing LIC, health, motor, and life insurance support in ${city.name}, ${city.state}. Doorstep service for claims, policy revival, and renewals.`,
        url: `https://insurancesupport.online/locations/${params.city}`,
        telephone: '+919986634506',
        email: 'contact@insurancesupport.online',
        priceRange: '₹₹',
        image: 'https://insurancesupport.online/favicon.svg',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '312',
            bestRating: '5',
            worstRating: '1'
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: city.state,
            addressCountry: 'IN'
        },
        areaServed: [
            { '@type': 'City', name: city.name },
            ...city.areas.map((area: string) => ({ '@type': 'Place', name: area }))
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00'
        },
        parentOrganization: {
            '@id': 'https://insurancesupport.online/#organization'
        },
        employee: {
            '@id': 'https://insurancesupport.online/#advisor'
        }
    }

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://insurancesupport.online'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Locations',
                'item': 'https://insurancesupport.online/locations'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': city.name,
                'item': `https://insurancesupport.online/locations/${params.city}`
            }
        ]
    }

    return (
        <div className="container px-4 py-12 mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="flex flex-col md:flex-row gap-12">

                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                        ← Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        {params.city === 'bangalore' ? (
                            <>Health & LIC Insurance Advisor in <span className="text-primary">Bangalore</span> | Doorstep Claim Support</>
                        ) : (
                            <>Insurance Advisor in <span className="text-primary">{city.name}</span> | LIC &amp; Health Insurance Help</>
                        )}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Are you tired of calling customer care or visiting the office just to get a simple query resolved?
                        We bring the <strong>LIC & General Insurance office to your doorstep in {city.name}</strong>.
                    </p>

                    {city.description && (
                        <div className="prose dark:prose-invert mb-8 text-lg">
                            <p>{city.description}</p>
                        </div>
                    )}

                    <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                            <div>
                                <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                                    Looking for the LIC Office in {city.name}?
                                </h2>
                                {city.licOffice ? (
                                    <div className="mb-4">
                                        <p className="text-amber-900 font-semibold mb-1">{city.licOffice.name}</p>
                                        <p className="text-amber-800 text-sm">{city.licOffice.address}</p>
                                        {city.hubContent?.localBranchDetails && (
                                            <p className="text-amber-800 text-sm mt-2 pt-2 border-t border-amber-200/50 italic">
                                                {city.hubContent.localBranchDetails}
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-amber-800 dark:text-amber-200 mb-4">
                                        Primary LIC Divisional offices and satellite branches are located centrally in the city. 
                                    </p>
                                )}
                                <div className="p-3 bg-white/50 rounded-lg border border-amber-200/50">
                                    <p className="text-amber-800 text-sm leading-relaxed">
                                        <strong>Pro Tip:</strong> Skip the long queues at Jeevan Prakash or branch offices! Our authorized advisors provide full support for policy surrender, death claims, and renewals right at your home in {city.name}. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {city.hubContent && (
                        <div className="space-y-8 mb-12">
                            {city.hubContent.itProfessionalFocus && (
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-blue-600" />
                                        Insurance Support for IT Professionals
                                    </h3>
                                    <p className="text-blue-800/80 dark:text-blue-200/80 leading-relaxed mb-4">
                                        {city.hubContent.itProfessionalFocus}
                                    </p>
                                    {params.city === 'bangalore' && (
                                        <Link href="/locations/bangalore/health-insurance" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline">
                                            View Health Insurance Hub for Bangalore <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    )}
                                </div>
                            )}

                            {city.hubContent.seniorCitizenFocus && (
                                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                                    <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
                                        <UserCheck className="h-5 w-5 text-emerald-600" />
                                        Senior Citizen Health & Pension Priority
                                    </h3>
                                    <p className="text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed mb-4">
                                        {city.hubContent.seniorCitizenFocus}
                                    </p>
                                    {params.city === 'bangalore' && (
                                        <Link href="/locations/bangalore/lic-agent" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:underline">
                                            Connect with LIC Advisor in Bangalore <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    )}
                                </div>
                            )}

                            {/* Flagship Bangalore Solutions */}
                            {params.city === 'bangalore' && (
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Link href="/locations/bangalore/health-insurance" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl group hover:border-primary/50 transition-all">
                                        <div className="flex items-center justify-between mb-4">
                                            <Shield className="h-8 w-8 text-primary" />
                                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </div>
                                        <h4 className="text-white font-bold text-lg mb-2">Bangalore Health Hub</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed">Specialized support for IT top-ups and cashless coordination at Manipal/Apollo.</p>
                                    </Link>
                                    <Link href="/locations/bangalore/lic-agent" className="p-6 bg-blue-900 rounded-2xl border border-blue-800 shadow-xl group hover:border-primary/50 transition-all">
                                        <div className="flex items-center justify-between mb-4">
                                            <UserCheck className="h-8 w-8 text-primary" />
                                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </div>
                                        <h4 className="text-white font-bold text-lg mb-2">LIC Bangalore Flagship</h4>
                                        <p className="text-blue-200/60 text-xs leading-relaxed">Expert death claim support and policy revival at JC Road & Residency Road offices.</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

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

                    <ServiceLinksForCity
                        citySlug={params.city}
                        cityName={city.name}
                    />

                    {city.areas.length > 0 && (
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-slate-900">
                                <MapPin className="h-5 w-5 text-primary" />
                                Doorstep Service Across {city.name}
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Our qualified insurance advisors provide doorstep service across <strong>{city.areas.join(', ')}</strong>, and all surrounding localities in {city.name}. We handle the commute so you don&apos;t have to.
                            </p>
                        </div>
                    )}

                    {city.nearbyCities && city.nearbyCities.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Nearby Expert Advisors</h3>
                            <div className="flex flex-wrap gap-2">
                                {city.nearbyCities.map(slug => {
                                    const nearby = cityData[slug];
                                    return nearby ? (
                                        <Link 
                                            key={slug} 
                                            href={`/locations/${slug}`}
                                            className="text-xs px-3 py-1 bg-white border border-slate-200 rounded-full hover:border-primary/30 hover:text-primary transition-all"
                                        >
                                            {nearby.name} Advisor
                                        </Link>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    )}

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Expert Insurance Guides</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link href="/resources/guides/maturity-claim-guide" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group">
                                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">LIC Maturity Guide</h3>
                                <p className="text-xs text-muted-foreground mt-1">Learn the 2026 process for maturity claims.</p>
                            </Link>
                            <Link href="/resources/guides/lapsed-policy-revival" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group">
                                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Policy Revival Guide</h3>
                                <p className="text-xs text-muted-foreground mt-1">How to restore your old LIC policies.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto h-12 text-lg">
                            <Phone className="mr-2 h-4 w-4" />
                            Call +91 99866 34506
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-lg">
                            WhatsApp Us
                        </Button>
                    </div>

                    <CityFAQSection
                        cityName={city.name}
                        stateName={city.state}
                        areas={city.areas}
                    />

                    {city.hubContent?.localFaqs && (
                        <div className="mt-12 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900">Dedicated {city.name} Insurance FAQs</h2>
                            <div className="space-y-6">
                                {city.hubContent.localFaqs.map((faq, idx) => (
                                    <div key={idx} className="border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                                        <h4 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                                            <span className="text-primary">Q:</span>
                                            {faq.q}
                                        </h4>
                                        <p className="text-slate-600 pl-6 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

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
