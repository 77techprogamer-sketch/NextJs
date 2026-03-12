"use client";
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone, UserCheck, Clock, Shield, ArrowRight } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { contactConfig } from '@/data/contact'
import { getCityData, cityData } from '@/data/cityData'
import { services, serviceLabels } from '@/data/services'
import { useTranslation, Trans } from 'react-i18next'

interface Props {
    params: { city: string; service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = getCityData(params.city)
    const serviceLabel = serviceLabels[params.service]

    if (!city || !serviceLabel) return {}

    const isLicRelated = params.service.includes('lic') || params.service.includes('life');
    const title = isLicRelated
        ? `Verified ${serviceLabel} Advisor in ${city.name} | Doorstep Service`
        : `${serviceLabel} Support ${city.name} | 98% Claim Settlement`;

    return {
        title: {
            absolute: title
        },
        description: `Struggling with ${serviceLabel} in ${city.name}? Get expert guidance and doorstep support from verified advisors with 25+ years experience. 98% claim settlement assurance. Free consultation!`,
        keywords: [
            `${serviceLabel} ${city.name}`,
            `Verified ${serviceLabel} Advisor in ${city.name}`,
            `${serviceLabel} claim assistance ${city.name}`,
            `${serviceLabel} doorstep service ${city.name}`,
            `top rated ${serviceLabel} company ${city.name}`,
            `${serviceLabel} consultant near me ${city.name}`,
            ...city.areas.slice(0, 5).map(area => `${serviceLabel} near ${area}`),
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
    const { t } = useTranslation();
    const city = getCityData(params.city)
    const serviceLabel = serviceLabels[params.service]
    const serviceSlug = params.service

    if (!city || !serviceLabel) {
        return notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: `${serviceLabel} - Insurance Support in ${city.name}`,
        description: `Expert ${serviceLabel} services in ${city.name}. 25+ years of trust and 98% claim settlement ratio by Insurance Support.`,
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
                        <Link href="/" className="hover:text-primary">{t('location_page.breadcrumb_home')}</Link>
                        <span>/</span>
                        <Link href={`/locations/${params.city}`} className="hover:text-primary">{city.name}</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">{serviceLabel}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        <Trans
                            i18nKey="location_page.best_support_in"
                            values={{ service: serviceLabel, city: city.name }}
                            components={[<span key="service" className="text-primary" />]}
                        >
                            Best <span className="text-primary">{serviceLabel} Support</span> in {city.name}
                        </Trans>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {t(`service_seo_content.${params.service}.description`, {
                            defaultValue: t('location_page.secure_future_fallback', { service: serviceLabel, city: city.name })
                        })}
                        {t('location_page.doorstep_service_note', {
                            area1: city.areas[0],
                            area2: city.areas[1] || 'nearby',
                            defaultValue: ` Whether you are in ${city.areas[0]} or ${city.areas[1] || 'nearby'}, our expert advisors provide personalized support at your doorstep.`
                        })}
                    </p>

                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-10">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6 text-primary" />
                            {t('location_page.why_choose_title', { service: serviceLabel, city: city.name })}
                        </h2>
                        {city.description && (
                            <p className="text-slate-700 mb-6 italic border-l-4 border-primary/20 pl-4 py-1">
                                &quot;{city.description}&quot;
                            </p>
                        )}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    {t('location_page.specialist_title', { service: serviceLabel })}
                                </h3>
                                <ul className="space-y-2">
                                    {(t(`service_seo_content.${params.service}.highlights`, { returnObjects: true }) as string[] || [])?.map((highlight, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    {t('location_page.regional_presence_title')}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    <Trans
                                        i18nKey="location_page.regional_presence_desc"
                                        values={{ area1: city.areas[0], area2: city.areas[1], city: city.name, state: city.state }}
                                        components={[<strong key="a1" />, <strong key="a2" />]}
                                    >
                                        Direct doorstep service available in <strong>{city.areas[0]}</strong>, <strong>{city.areas[1]}</strong>, and throughout the {city.name} metropolitan region. Our advisors understand the local {city.state} insurance climate.
                                    </Trans>
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                                    <Clock className="h-5 w-5 text-primary" />
                                    {t('location_page.fast_processing_title')}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {t('location_page.fast_processing_desc', { service: serviceLabel, city: city.name })}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                                    <Shield className="h-5 w-5 text-primary" />
                                    {t('location_page.trusted_families_title')}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {t('location_page.trusted_families_desc', { state: city.state, city: city.name })}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 mb-10">
                        <h3 className="text-lg font-bold mb-3">{t('location_page.local_advisory_hub_title', { city: city.name })}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            <Trans
                                i18nKey="location_page.local_advisory_hub_desc"
                                values={{ service: serviceLabel, city: city.name, state: city.state, areas: city.areas.slice(-3).join(', ') }}
                                components={[<strong key="a1" />]}
                            >
                                Looking for a reliable <strong>{serviceLabel} agent in {city.name}</strong>?
                                Our team specializes in {city.state}-specific insurance regulations and has a deep understanding of the local landscape,
                                ensuring you get the best possible claim support in areas like {city.areas.slice(-3).join(', ')}.
                            </Trans>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">{t('location_page.support_services_title', { service: serviceLabel, city: city.name })}</h2>
                    <ul className="space-y-4 mb-10">
                        {[
                            t('location_page.service_list.new_policy', { service: serviceLabel, city: city.name }),
                            t('location_page.service_list.renewal', { service: serviceLabel, city: city.name }),
                            t('location_page.service_list.lapsed_revival'),
                            t('location_page.service_list.claim_assistance'),
                            t('location_page.service_list.portability', { city: city.name }),
                            t('location_page.service_list.nominee_updates')
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
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs text-primary">{t('location_page.other_services_in_city', { city: city.name })}</h4>
                            <ul className="space-y-2 text-sm">
                                {services.filter(s => s !== serviceSlug).slice(0, 5).map(s => (
                                    <li key={s}>
                                        <Link href={`/locations/${params.city}/${s}`} className="text-slate-600 hover:text-primary hover:underline">
                                            {t('location_page.other_service_advisor', { service: serviceLabels[s], city: city.name })}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs text-primary">{t('location_page.service_in_nearby_cities', { service: serviceLabel })}</h4>
                            <ul className="space-y-2 text-sm">
                                {Object.keys(cityData).filter(c => c !== params.city).slice(0, 5).map(c => (
                                    <li key={c}>
                                        <Link href={`/locations/${c}/${serviceSlug}`} className="text-slate-600 hover:text-primary hover:underline">
                                            {t('location_page.nearby_service_advisor', { service: serviceLabel, city: cityData[c].name })}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl mb-12 shadow-2xl shadow-slate-200">
                        <h3 className="text-2xl font-bold mb-4">{t('location_page.serving_every_corner', { city: city.name })}</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {t('location_page.serving_every_corner_desc', {
                                area1: city.areas[0],
                                areaLast: city.areas[city.areas.length - 1],
                                areas: city.areas.slice(0, 5).join(', '),
                                service: serviceLabel,
                                city: city.name
                            })}
                        </p>
                        <div className="flex flex-wrap gap-2 text-slate-200">
                            {city.areas.map(area => (
                                <span key={area} className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/5">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Related Guides for Engagement */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{t('location_page.helpful_guides', { service: serviceLabel })}</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link href="/guides/claim-recovery-process" className="group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{t('location_page.rejected_case_recovery')}</h4>
                                <p className="text-sm text-muted-foreground">{t('location_page.rejected_case_recovery_desc', { city: city.name })}</p>
                            </Link>
                            <Link href="/guides/lost-lic-policy-help" className="group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{t('location_page.duplicate_policy_guide')}</h4>
                                <p className="text-sm text-muted-foreground">{t('location_page.duplicate_policy_guide_desc', { city: city.name })}</p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a href={contactConfig.getDialUrl()} className="w-full sm:w-auto">
                            <Button size="lg" className="w-full h-12 text-lg shadow-lg shadow-primary/20">
                                <Phone className="mr-2 h-4 w-4" />
                                {t('location_page.call_advisor_in_city', { city: city.name })}
                            </Button>
                        </a>
                        <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full h-12 text-lg">
                                {t('location_page.whatsapp_support')}
                            </Button>
                        </a>
                    </div>

                    {/* Nearby Support Centers for Crawl Depth */}
                    <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{t('location_page.nearby_centers')}</h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {Object.values(cityData)
                                .filter(c => c.state === city.state && c.name !== city.name)
                                .slice(0, 6)
                                .map(nearbyCity => (
                                    <Link
                                        key={nearbyCity.name}
                                        href={`/locations/${nearbyCity.name.toLowerCase().replace(/\s+/g, '-')}/${params.service}`}
                                        className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        <MapPin className="h-3 w-3" />
                                        {nearbyCity.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Sidebar / Form */}
                <div className="w-full md:w-[400px]">
                    <div className="sticky top-24">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-slate-100 border border-slate-100">
                            <h3 className="text-2xl font-bold mb-2">{t('location_page.request_quote_title', { service: serviceLabel })}</h3>
                            <p className="text-sm text-muted-foreground mb-8 italic">{t('location_page.request_quote_subtitle', { city: city.name })}</p>
                            <QuoteForm insuranceType={serviceSlug.replace(/-/g, '_')} />
                        </div>

                        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                {t('location_page.service_hours')}
                            </h4>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li className="flex justify-between"><span>{t('location_page.mon_sat')}</span> <span>9:30 AM - 6:30 PM</span></li>
                                <li className="flex justify-between"><span>{t('location_page.sundays')}</span> <span>{t('location_page.on_appointment')}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
