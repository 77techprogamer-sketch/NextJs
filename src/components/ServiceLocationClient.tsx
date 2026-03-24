"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MapPin, Phone, UserCheck, Clock, Shield, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { contactConfig } from '@/data/contact';
import { useTranslation, Trans } from 'react-i18next';
import { services, serviceLabels } from '@/data/services';
import ServiceFAQSection from '@/components/ServiceFAQSection';
import AuthorBio from '@/components/AuthorBio';
import { cityData as allCityData } from '@/data/cityData';
import { successStories } from '@/data/successStoriesData';

interface ServiceLocationClientProps {
    city: any;
    serviceSlug: string;
    serviceLabel: string;
}

export default function ServiceLocationClient({ city, serviceSlug, serviceLabel }: ServiceLocationClientProps) {
    const { t } = useTranslation();
    const [allowedCities, setAllowedCities] = React.useState<string[] | null>(null);

    React.useEffect(() => {
        if (typeof document !== 'undefined') {
            const match = document.cookie.match(new RegExp('(^| )user-allowed-cities=([^;]+)'));
            if (match) {
                const val = match[2];
                if (val === 'NONE') setAllowedCities([]);
                else setAllowedCities(val.split(','));
            }
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary">{t('location_page.breadcrumb_home')}</Link>
                    <span>/</span>
                    <Link href={`/locations/${city.slug}`} className="hover:text-primary">{city.name}</Link>
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
                    {t(`service_seo_content.${serviceSlug}.description`, {
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
                    {city.hubContent && (
                        <div className="mb-6 space-y-4">
                            {serviceSlug.includes('health') && city.hubContent.itProfessionalFocus && (
                                <p className="text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 text-sm leading-relaxed">
                                    <strong>Focus:</strong> {city.hubContent.itProfessionalFocus}
                                </p>
                            )}
                            {(serviceSlug.includes('lic') || serviceSlug.includes('life')) && city.hubContent.seniorCitizenFocus && (
                                <p className="text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 text-sm leading-relaxed">
                                    <strong>Senior Priority:</strong> {city.hubContent.seniorCitizenFocus}
                                </p>
                            )}
                            {city.hubContent.localBranchDetails && (
                                <p className="text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 text-sm leading-relaxed">
                                    <strong>Branch Liaison:</strong> {city.hubContent.localBranchDetails}
                                </p>
                            )}
                        </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                {t('location_page.specialist_title', { service: serviceLabel })}
                            </h3>
                            <ul className="space-y-2">
                                {(t(`service_seo_content.${serviceSlug}.highlights`, { returnObjects: true }) as string[] || [])?.map((highlight: string, idx: number) => (
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
                                    <Link href={`/locations/${city.slug}/${s}`} className="text-slate-600 hover:text-primary hover:underline">
                                        {t('location_page.other_service_advisor', { service: serviceLabels[s], city: city.name })}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs text-primary">{t('location_page.service_in_nearby_cities', { service: serviceLabel })}</h4>
                        <ul className="space-y-2 text-sm">
                            {city.nearbyCities && city.nearbyCities.length > 0 ? (
                                city.nearbyCities
                                    .filter((slug: string) => allowedCities === null || allowedCities.includes(slug))
                                    .map((slug: string) => {
                                        const nearby = allCityData[slug];
                                        return nearby ? (
                                            <li key={slug}>
                                                <Link href={`/locations/${slug}/${serviceSlug}`} className="text-slate-600 hover:text-primary hover:underline">
                                                    {t('location_page.nearby_service_advisor', { service: serviceLabel, city: nearby.name })}
                                                </Link>
                                            </li>
                                        ) : null;
                                    })
                            ) : (
                                <li className="text-slate-400 italic">Explore our local advisors for expert support in your area.</li>
                            )}
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
                        {city.areas.map((area: string) => (
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
                        <Link href="/resources/guides/death-claim-settlement" className="group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                            <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{t('location_page.rejected_case_recovery')}</h4>
                            <p className="text-sm text-muted-foreground">{t('location_page.rejected_case_recovery_desc', { city: city.name })}</p>
                        </Link>
                        <Link href="/guides/lost-lic-policy-help" className="group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                            <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{t('location_page.duplicate_policy_guide')}</h4>
                            <p className="text-sm text-muted-foreground">{t('location_page.duplicate_policy_guide_desc', { city: city.name })}</p>
                        </Link>
                    </div>
                </div>

                {/* Extended Content Sections (SEO 1500+ words guides) */}
                {city.longContent && (
                    <div className="mb-12 space-y-10">
                        {city.longContent.map((section: any, idx: number) => (
                            <section key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                                    {section.title}
                                </h2>
                                <div className="space-y-4">
                                    {section.paragraphs.map((para: string, pIdx: number) => (
                                        <p key={pIdx} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                <div className="mb-12">
                    <AuthorBio />
                </div>

                <ServiceFAQSection
                    cityName={city.name}
                    stateName={city.state}
                    areas={city.areas}
                    serviceLabel={serviceLabel}
                    serviceSlug={serviceSlug}
                />

                {/* Localized Success Story for Proof of Expertise */}
                {(() => {
                    const story = successStories.find(s => 
                        s.category.toLowerCase().includes(serviceLabel.toLowerCase()) || 
                        serviceLabel.toLowerCase().includes(s.category.toLowerCase().replace(' insurance', ''))
                    ) || successStories[0]; // Fallback to first if no match

                    return (
                        <div className="mb-12 bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Shield className="h-24 w-24" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                                    Real Case Study: {story.location}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{story.title}</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-sm uppercase text-slate-500 mb-2">The Challenge</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{story.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase text-slate-500 mb-2">Our Solution</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{story.solution}</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <p className="font-bold text-green-700">Outcome: {story.outcome}</p>
                                </div>
                            </div>
                        </div>
                    );
                })()}

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
    );
}

