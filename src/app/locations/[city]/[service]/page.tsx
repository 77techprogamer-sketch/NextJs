import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone, UserCheck, Clock, Shield, ArrowRight } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { getCityData, cityData } from '@/data/cityData'
import { services, serviceLabels } from '@/data/services'

interface Props {
    params: { city: string; service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = getCityData(params.city)
    const serviceLabel = serviceLabels[params.service]

    if (!city || !serviceLabel) return {}

    return {
        title: {
            absolute: `Best ${serviceLabel} Advisor in ${city.name} | 98% Claim Settlement`
        },
        description: `Compare the best ${serviceLabel} plans in ${city.name}. Expert guidance and doorstep claim support with 25+ years experience. Get a free quote in 30 seconds!`,
        keywords: [
            `${serviceLabel} ${city.name}`,
            `Best ${serviceLabel} Advisor in ${city.name}`,
            `${serviceLabel} renewal ${city.name}`,
            `${serviceLabel} claims ${city.name}`,
            `buy ${serviceLabel} in ${city.name}`,
            `${serviceLabel} policy advisor ${city.name}`,
            `insurance advisor for ${serviceLabel} in ${city.name}`,
            `IRDAI certified ${serviceLabel} advisor ${city.name}`,
            `top rated ${serviceLabel} company ${city.name}`,
            `${serviceLabel} consultant near me ${city.name}`,
            ...city.areas.map(area => `${serviceLabel} near ${area}`),
            ...city.areas.map(area => `buy ${serviceLabel} in ${area}`),
            ...city.areas.map(area => `${serviceLabel} advisor ${area}`)
        ],
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.city}/${params.service}`,
        },
        openGraph: {
            title: `Expert ${serviceLabel} in ${city.name} | Verified Support`,
            description: `Get the best ${serviceLabel} plans in ${city.name} with doorstep service and 98% claim settlement assurance.`,
            type: 'website',
        }
    }
}

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = []

    Object.keys(cityData).forEach((city) => {
        services.forEach((service) => {
            params.push({ city, service })
        })
    })

    return params
}

export default function ServiceLocationPage({ params }: Props) {
    const city = getCityData(params.city)
    const serviceLabel = serviceLabels[params.service]
    const serviceSlug = params.service

    if (!city || !serviceLabel) {
        return notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: `Insurance Support - ${serviceLabel} in ${city.name}`,
        description: `Expert ${serviceLabel} services in ${city.name}. 25+ years of trust and 98% claim settlement ratio.`,
        url: `https://insurancesupport.online/locations/${params.city}/${params.service}`,
        telephone: "+919986634506",
        address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: city.state,
            addressCountry: "IN"
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates?.[0],
            longitude: city.coordinates?.[1]
        },
        areaServed: {
            '@type': 'City',
            name: city.name
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${serviceLabel} Services`,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${serviceLabel} Consultation`
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${serviceLabel} Renewal`
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${serviceLabel} Claim Assistance`
                    }
                }
            ]
        }
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': `Who is the best ${serviceLabel} advisor in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Insurance Support is a top-rated agency in ${city.name} with 25+ years of experience, offering 98% claim settlement assurance and doorstep service for all ${serviceLabel} needs.`
                }
            },
            {
                '@type': 'Question',
                'name': `How can I renew my ${serviceLabel} in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `You can renew your ${serviceLabel} instantly through Insurance Support. We provide expert guidance to ensure you get the maximum benefits and IDV for your policy in ${city.name}.`
                }
            },
            {
                '@type': 'Question',
                'name': `Does Insurance Support provide doorstep service in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, our expert advisors provide doorstep service across ${city.name}, including ${city.areas.slice(0, 3).join(', ')} and surrounding regions.`
                }
            }
        ]
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
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': serviceLabel,
                'item': `https://insurancesupport.online/locations/${params.city}/${params.service}`
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="flex flex-col md:flex-row gap-12">

                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span>/</span>
                        <Link href={`/locations/${params.city}`} className="hover:text-primary">{city.name}</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">{serviceLabel}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        Best <span className="text-primary">{serviceLabel}</span> in {city.name}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Secure your future with the most reliable <strong>{serviceLabel} plans in {city.name}</strong>.
                        Whether you are in {city.areas[0]} or {city.areas[1] || 'nearby'}, our expert advisors provide personalized support at your doorstep.
                    </p>

                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-10">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6 text-primary" />
                            Why Choose Insurance Support in {city.name}?
                        </h2>
                        {city.description && (
                            <p className="text-slate-700 mb-6 italic border-l-4 border-primary/20 pl-4 py-1">
                                &quot;{city.description}&quot;
                            </p>
                        )}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    {city.name} Specialists
                                </h3>
                                <p className="text-muted-foreground text-sm">We&apos;ve helped thousands of residents in {city.name} with {serviceLabel} since 2001.</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    Claim Settlement
                                </h3>
                                <p className="text-muted-foreground text-sm">Dedicated support to ensure your {serviceLabel} claims are processed smoothly in {city.state}.</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    Best Quotes
                                </h3>
                                <p className="text-muted-foreground text-sm">Compare plans from top insurers to get the best value for {serviceLabel}.</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    Doorstep Service
                                </h3>
                                <p className="text-muted-foreground text-sm">Our advisors visit {city.areas.slice(0, 3).join(', ')} and other areas for your convenience.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Our {serviceLabel} Support Services in {city.name}</h2>
                    <ul className="space-y-4 mb-10">
                        {[
                            `New ${serviceLabel} Policy Issuance in ${city.name}`,
                            `Renewal of Existing ${serviceLabel} Policies`,
                            `Lapsed Policy Revival Support`,
                            `Claim Intimation & Settlement Assistance`,
                            `Portability for ${city.name} Residents`,
                            `Local Nominee & Address Updates`
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Internal Linking for SEO */}
                    <div className="grid sm:grid-cols-2 gap-8 mb-12 py-8 border-y border-slate-100">
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs text-primary">Other Services in {city.name}</h4>
                            <ul className="space-y-2 text-sm">
                                {services.filter(s => s !== serviceSlug).slice(0, 5).map(s => (
                                    <li key={s}>
                                        <Link href={`/locations/${params.city}/${s}`} className="text-slate-600 hover:text-primary hover:underline">
                                            {serviceLabels[s]} Advisor in {city.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs text-primary">{serviceLabel} in Nearby Cities</h4>
                            <ul className="space-y-2 text-sm">
                                {Object.keys(cityData).filter(c => c !== params.city).slice(0, 5).map(c => (
                                    <li key={c}>
                                        <Link href={`/locations/${c}/${serviceSlug}`} className="text-slate-600 hover:text-primary hover:underline">
                                            {serviceLabel} Advisor in {cityData[c].name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl mb-12 shadow-2xl shadow-slate-200">
                        <h3 className="text-2xl font-bold mb-4">Serving Every Corner of {city.name}</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            From {city.areas[0]} to {city.areas[city.areas.length - 1]}, our dedicated team ensures you don&apos;t have to travel for your insurance needs.
                            We cover {city.areas.join(', ')} and surrounding regions with localized support for {serviceLabel}.
                        </p>
                        <div className="flex flex-wrap gap-2 text-slate-200">
                            {city.areas.map(area => (
                                <span key={area} className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/5">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button size="lg" className="w-full sm:w-auto h-12 text-lg shadow-lg shadow-primary/20">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Advisor in {city.name}
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-lg">
                            WhatsApp Support
                        </Button>
                    </div>
                </div>

                {/* Sidebar / Form */}
                <div className="w-full md:w-[400px]">
                    <div className="sticky top-24">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-slate-100 border border-slate-100">
                            <h3 className="text-2xl font-bold mb-2">Request {serviceLabel} Quote</h3>
                            <p className="text-sm text-muted-foreground mb-8 italic">Verified support for {city.name} residents.</p>
                            <QuoteForm insuranceType={serviceSlug.replace(/-/g, '_')} />
                        </div>

                        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                Service Hours
                            </h4>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li className="flex justify-between"><span>Mon - Sat:</span> <span>9:30 AM - 6:30 PM</span></li>
                                <li className="flex justify-between"><span>Sundays:</span> <span>On Appointment</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
