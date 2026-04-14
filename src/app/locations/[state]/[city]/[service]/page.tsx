import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { serviceLabels, serviceDescriptions } from '@/data/services'
import { contactConfig } from '@/data/contact'
import { DynamicLocalBusinessJsonLd } from '@/components/ServerJsonLd'
import Link from 'next/link'
import React from 'react'
import { ChevronRight, ArrowRight, MapPin, Grid, ShieldCheck, Clock, Award } from 'lucide-react'
import ServiceCityFAQSection from '@/components/ServiceCityFAQSection'

interface Props {
    params: { state: string; city: string; service: string }
}

const serviceCategoryMap: Record<string, string> = {
    'life-insurance': 'Life',
    'health-insurance': 'Health',
    'motor-insurance': 'Motor',
    'term-insurance': 'Term',
    'pension-plans': 'Life',
    'ulip-plans': 'Life',
    'sme-insurance': 'General',
    'travel-insurance': 'General',
    'wedding-insurance': 'General',
    'cyber-insurance': 'General',
};

export async function generateStaticParams() {
    const params: { state: string; city: string; service: string }[] = []

    INDIAN_LOCATIONS.forEach((loc) => {
        Object.keys(serviceLabels).forEach((service) => {
            params.push({ 
                state: loc.state, 
                city: loc.city, 
                service: service 
            })
        })
    })

    return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const location = INDIAN_LOCATIONS.find(l => l.city === params.city && l.state === params.state)
    const serviceLabel = serviceLabels[params.service]

    if (!location || !serviceLabel) return {}

    const title = `${serviceLabel} Expert in ${location.name}, ${location.state.replace(/-/g, ' ')} | Insurance Support`
    const description = `Looking for ${serviceLabel} in ${location.name}? Insurance Support provides expert assistance for claims, revivals, and new policies. Call ${contactConfig.phone} for doorstep support.`

    return {
        title,
        description,
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.state}/${params.city}/${params.service}`,
        },
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://insurancesupport.online/locations/${params.state}/${params.city}/${params.service}`,
        }
    }
}

export default async function ProgrammaticLocationPage({ params }: Props) {
    const location = INDIAN_LOCATIONS.find(l => l.city === params.city && l.state === params.state)
    const serviceLabel = serviceLabels[params.service]
    const serviceDescription = serviceDescriptions[params.service]

    if (!location || !serviceLabel) {
        return notFound()
    }

    const otherServices = Object.keys(serviceLabels).filter(s => s !== params.service)
    const otherCitiesInState = INDIAN_LOCATIONS
        .filter(l => l.state === params.state && l.city !== params.city)
        .slice(0, 12) 

    const serviceCategory = serviceCategoryMap[params.service] || 'General'

    return (
        <React.Fragment>
            <DynamicLocalBusinessJsonLd 
                city={location.name} 
                state={location.state} 
                serviceName={serviceLabel} 
            />
            
            <main className="container mx-auto px-4 py-8 md:py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Responsive Breadcrumbs */}
                    <nav className="mb-8 md:mb-10 text-xs md:text-sm text-muted-foreground flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar border-b border-transparent md:border-none">
                        <Link href="/" className="hover:text-primary transition-colors flex-shrink-0">Home</Link>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <Link href="/locations" className="hover:text-primary transition-colors flex-shrink-0">Locations</Link>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <Link href={`/locations/${location.state}`} className="hover:text-primary transition-colors capitalize flex-shrink-0">{location.state.replace(/-/g, ' ')}</Link>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="font-bold text-foreground flex-shrink-0">{location.name}</span>
                    </nav>

                    <header className="mb-12">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                            Best <span className="text-primary">{serviceLabel}</span> Support in {location.name}, {location.state.replace(/-/g, ' ')}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {serviceDescription} Trusted by thousands of families in {location.name} for reliable insurance guidance and claim recovery. Our IRDAI-certified advisors provide personalized doorstep service across all major residential and commercial areas in the city.
                        </p>
                    </header>

                    {/* Trust Signals Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <ShieldCheck className="w-6 h-6 text-green-500" />
                            <span className="text-sm font-semibold">IRDAI Certified</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <MapPin className="w-6 h-6 text-blue-500" />
                            <span className="text-sm font-semibold">Doorstep Service</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 col-span-2 md:col-span-1">
                            <Clock className="w-6 h-6 text-orange-500" />
                            <span className="text-sm font-semibold">25+ Yrs Experience</span>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 mb-16">
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl font-bold mb-4">Why Choose Us in {location.name}?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</div>
                                    <span>Expert help for rejected {serviceLabel} claims specifically for {location.name} residents.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</div>
                                    <span>Same-day doorstep document collection across {location.state.replace(/-/g, ' ')} regional offices.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</div>
                                    <span>Direct coordination with the local Insurance Ombudsman if required.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-500/20">
                            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                Expert Consultation
                            </h2>
                            <p className="mb-6 opacity-90">Talk to our lead advisor for {location.name} for personalized help with your {serviceLabel.toLowerCase()} queries.</p>
                            <a 
                                href={`tel:${contactConfig.phone}`} 
                                className="inline-block w-full text-center bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
                            >
                                Call {contactConfig.phone}
                            </a>
                        </div>
                    </div>

                    {/* Local SEO Content Section */}
                    <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h3 className="text-2xl font-bold">Local {serviceLabel} Support in {location.name}</h3>
                        <p>
                            Navigating insurance policies can be challenging, especially in a fast-paced city like {location.name}. Whether you are looking to revive a lapsed policy or struggling with a claim settlement, our local experts in {location.name} are here to help. We understand the specific nuances of the {location.state.replace(/-/g, ' ')} insurance market and provide tailored advice to ensure you get the maximum value from your investment.
                        </p>
                        <p>
                            Our service covers all major postal codes in {location.name}, ensuring that professional insurance support is just a phone call away. We specialize in handling complex cases that online portals often miss, offering a human-first approach to insurance management.
                        </p>
                    </section>

                    {/* Dynamic FAQ Injection (Significant E-E-A-T Signal) */}
                    <ServiceCityFAQSection 
                        cityName={location.name} 
                        stateName={location.state} 
                        serviceLabel={serviceLabel} 
                        serviceCategory={serviceCategory}
                    />

                    <div className="grid md:grid-cols-2 gap-12 mt-16 py-12 border-t border-slate-100 dark:border-slate-800">
                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Grid className="w-5 h-5 text-primary" />
                                Other Services in {location.name}
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {otherServices.map(s => (
                                    <li key={s}>
                                        <Link 
                                            href={`/locations/${location.state}/${location.city}/${s}`}
                                            className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-2 group text-sm"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {serviceLabels[s]} in {location.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                Nearby Cities in {location.state.replace(/-/g, ' ')}
                            </h3>
                            <ul className="grid grid-cols-2 gap-3">
                                {otherCitiesInState.map(loc => (
                                    <li key={loc.city}>
                                        <Link 
                                            href={`/locations/${loc.state}/${loc.city}/${params.service}`}
                                            className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-2 group text-sm"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {loc.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
