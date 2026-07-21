import { getStaticTranslation, getLocalizedName } from '@/lib/i18n-server'
import { serviceLabels, services } from '@/data/services'
import { INDIAN_LOCATIONS, PRIORITY_LOCATIONS } from '@/data/indianCities'
import { cityData } from '@/data/cityData'
import { CITY_CONTENT_OVERRIDES } from '@/data/cityContentOverrides'
import Link from 'next/link'
import { ArrowRight, Shield, ChevronRight, Briefcase, Heart, Stethoscope, Car, MapPin, CheckCircle2, Award, Landmark, Target } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import React from 'react'
import { DynamicLocalBusinessJsonLd } from '@/components/ServerJsonLd'
import { contactConfig } from '@/data/contact'



interface Props {
    params: { state: string, city: string }
}

export async function generateStaticParams() {
    return INDIAN_LOCATIONS.map(loc => ({
        state: loc.state,
        city: loc.city
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { t, lang } = getStaticTranslation();
    const location = INDIAN_LOCATIONS.find(l => l.city === params.city && l.state === params.state);

    if (!location) return { title: 'Not Found' };

    const localizedCity = await getLocalizedName(params.city, lang);
    const localizedState = await getLocalizedName(params.state, lang);

    const title = t('city_meta_title', 'Insurance Advisor & Support in {{city}}, {{state}}').replace('{{city}}', localizedCity).replace('{{state}}', localizedState);
    const description = t('city_meta_desc', 'Connect with specialized insurance advisors in {{city}}. Support for LIC life insurance, health claims, and policy servicing for all residents of {{city}}, {{state}}.').replace(/{{city}}/g, localizedCity).replace(/{{state}}/g, localizedState);

    const route = `/locations/${params.state}/${params.city}`;
    const override = CITY_CONTENT_OVERRIDES[params.city];

    return {
        title,
        description,
        robots: {
            index: !!override,
        },
        alternates: {
            canonical: `https://insurancesupport.online${route}`,
            languages: {
                en: `https://insurancesupport.online${route}`,
                hi: `https://insurancesupport.online/hi${route}`,
            }
        },
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://insurancesupport.online${route}`,
        }
    }
}

export default async function CityHubPage({ params }: Props) {
    const { t, lang } = getStaticTranslation();
    const location = INDIAN_LOCATIONS.find(l => l.city === params.city && l.state === params.state);
    const specificCityData = cityData[params.city];
    const override = CITY_CONTENT_OVERRIDES[params.city];

    if (!location) {
        return notFound()
    }

    const localizedCity = await getLocalizedName(params.city, lang);
    const localizedState = await getLocalizedName(params.state, lang);

    const serviceIcons: Record<string, any> = {
        'life-insurance': Heart,
        'health-insurance': Stethoscope,
        'motor-insurance': Car,
        'term-insurance': Shield,
        'lic-agent': Briefcase
    }

    return (
        <React.Fragment>
            <DynamicLocalBusinessJsonLd 
                city={localizedCity} 
                state={localizedState} 
                serviceName="Insurance Support & Advisory" 
            />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://insurancesupport.online' },
                        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://insurancesupport.online/locations' },
                        { '@type': 'ListItem', position: 3, name: localizedState, item: `https://insurancesupport.online/locations/${params.state}` },
                        { '@type': 'ListItem', position: 4, name: localizedCity, item: `https://insurancesupport.online/locations/${params.state}/${params.city}` },
                    ]
                }) }}
            />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
                    <Link href="/" className="hover:text-primary transition-colors">{t('location_page.breadcrumb_home', 'Home')}</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link href="/locations" className="hover:text-primary transition-colors">{t('locations', 'Locations')}</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link href={`/locations/${params.state}`} className="hover:text-primary transition-colors capitalize">{localizedState}</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="font-bold text-foreground capitalize">{localizedCity}</span>
                </nav>

                <header className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                            Local Insurance Hub
                        </span>
                        {specificCityData?.licOffice && (
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                                LIC Hub
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight capitalize leading-tight">
                        Insurance Support in <span className="text-primary">{localizedCity}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
                        {specificCityData?.description || t('city_hub_default_desc', 'Expert insurance advisory and claim support for all residents of {{city}}. We specialize in LIC policy management, health insurance recovery, and personalized doorstep service.').replace('{{city}}', localizedCity)}
                    </p>
                </header>

                {/* City Specific Highlights (from Tier 1 overrides) */}
                {override && (
                    <div className="mb-16 p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 shadow-sm">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-100">
                                    <Landmark className="w-6 h-6 text-primary" />
                                    Why Residents Trust Us in {localizedCity}
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {override.facts.map((fact, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <p className="text-slate-700 dark:text-slate-300 font-medium">{fact}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-blue-100 dark:border-blue-800">
                                    <p className="text-sm italic text-slate-600 dark:text-slate-400">
                                        ðŸ’¡ <strong>Local Insight:</strong> {override.localContext}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 bg-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform">
                                    <Award className="w-32 h-32" />
                                </div>
                                <h3 className="text-lg font-bold mb-4 relative z-10">Doorstep Document Collection</h3>
                                <p className="text-sm text-slate-400 mb-6 relative z-10 leading-relaxed">
                                    Skip the traffic and branch visits. Our certified advisors collect documents directly from your home in {localizedCity}.
                                </p>
                                <Link href="/contact" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl text-center block transition-colors relative z-10">
                                    Request Home Visit
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* IT & Senior Focus if available */}
                {specificCityData?.hubContent && (
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {specificCityData.hubContent.itProfessionalFocus && (
                            <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
                                    <Briefcase className="w-5 h-5 text-indigo-600" />
                                    For IT Professionals
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {specificCityData.hubContent.itProfessionalFocus}
                                </p>
                            </div>
                        )}
                        {specificCityData.hubContent.seniorCitizenFocus && (
                            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
                                    <Heart className="w-5 h-5 text-emerald-600" />
                                    Senior Citizen Priority
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {specificCityData.hubContent.seniorCitizenFocus}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                <h2 className="text-3xl font-bold mb-10">{t('explore_services', 'Explore Local Services')}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service) => {
                        const Icon = serviceIcons[service] || Shield;
                        return (
                            <Link
                                key={service}
                                href={`/locations/${params.state}/${params.city}/${service}`}
                                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group hover:shadow-xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {t(`service_${service.replace(/-/g, '_')}`, serviceLabels[service])}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        Specialized support and local advisor assistance for {serviceLabels[service]} in {localizedCity}.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    Explore Local Services <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* Areas Served - Crucial for local SEO */}
                {specificCityData?.areas && specificCityData.areas.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                            <MapPin className="h-7 w-7 text-primary" />
                            Neighborhoods We Serve in {localizedCity}
                        </h2>
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                            <div className="flex flex-wrap gap-3">
                                {specificCityData.areas.map((area) => (
                                    <div key={area} className="px-5 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-semibold border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-colors cursor-default">
                                        {area}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm text-muted-foreground text-center italic">
                                Don't see your area? We provide doorstep service throughout the entire {localizedCity} metropolitan region.
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-20 p-10 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -ml-32 -mb-32" />
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Advisor Support at Your Fingertips</h2>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                Our {localizedCity} team specializes in complex claim recoveries and legacy LIC policy updates. Get a free consultation today and secure your family's future.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-1"
                                >
                                    Request Doorstep Visit
                                </Link>
                                <a
                                    href={`tel:${contactConfig.phone}`}
                                    className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
                                >
                                    Call Advisor
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Independent Advocacy</p>
                                            <p className="text-sm text-slate-500">We work for you, not the insurer.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Zero Hassle Claims</p>
                                            <p className="text-sm text-slate-500">End-to-end documentation support.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">IRDAI Certified</p>
                                            <p className="text-sm text-slate-500">Expert guidance you can trust.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

