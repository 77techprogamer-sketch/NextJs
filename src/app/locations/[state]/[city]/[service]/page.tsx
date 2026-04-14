import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { serviceLabels, serviceDescriptions } from '@/data/services'
import { contactConfig } from '@/data/contact'
import { DynamicLocalBusinessJsonLd } from '@/components/ServerJsonLd'
import Link from 'next/link'
import React from 'react'
import { ChevronRight, ArrowRight, MapPin, Grid, ShieldCheck, Clock, Award, Landmark, Target } from 'lucide-react'
import ServiceCityFAQSection from '@/components/ServiceCityFAQSection'
import { CITY_CONTENT_OVERRIDES } from '@/data/cityContentOverrides'
import StickyLeadButtons from '@/components/StickyLeadButtons'
import ShortLeadForm from '@/components/ShortLeadForm'

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
                            {CITY_CONTENT_OVERRIDES[params.city]?.summary || serviceDescription} Trusted by thousands of families in {location.name} for reliable insurance guidance and claim recovery. Our IRDAI-certified advisors provide personalized doorstep service across all major residential and commercial areas in the city.
                        </p>
                    </header>

                    {/* Trust Banner / Partner Strip */}
                    <div className="mb-12 py-6 border-y border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">User</div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <span className="font-bold text-slate-900 dark:text-white block">15,000+ Families Protected</span>
                                <span className="text-muted-foreground">in India last 25 years</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                             <span className="font-black text-xl tracking-tighter italic">LIC</span>
                             <span className="font-black text-xl tracking-tighter italic">HDFC Life</span>
                             <span className="font-black text-xl tracking-tighter italic">ICICI Pru</span>
                        </div>
                    </div>

                    {/* Tier 1 Specific Highlights */}
                    {CITY_CONTENT_OVERRIDES[params.city] && (
                        <div className="mb-12 p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-800 dark:text-blue-300">
                                <Landmark className="w-5 h-5" />
                                Why we are #1 for {serviceLabel} in {location.name}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {CITY_CONTENT_OVERRIDES[params.city].facts.map((fact, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Target className="w-3 h-3" />
                                        </div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{fact}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm italic text-slate-500 dark:text-slate-400 border-t border-blue-100 dark:border-blue-800 pt-4">
                                💡 <strong>Local Insight:</strong> {CITY_CONTENT_OVERRIDES[params.city].localContext}
                            </p>
                        </div>
                    )}

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

                    <div className="grid gap-8 lg:grid-cols-5 mb-16 items-start">
                        <div className="lg:col-span-2 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                                <Award className="w-24 h-24" />
                           </div>
                           <h2 className="text-2xl font-bold mb-4 relative z-10">Get Expert {serviceLabel} Assistance Now</h2>
                           <p className="text-slate-400 mb-8 relative z-10">Our regional coordinator for {location.name} will call you within 15 minutes for a free consultation.</p>
                           
                           <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-accent" />
                                    <span className="text-sm font-medium">100% Secure & Private</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-accent" />
                                    <span className="text-sm font-medium">Fast-track Claim Support</span>
                                </div>
                           </div>

                           <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">Direct Hotline</p>
                                <a href={`tel:${contactConfig.phone}`} className="text-2xl font-black text-white hover:text-accent transition-colors">
                                    {contactConfig.phone}
                                </a>
                           </div>
                        </div>

                        <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-1 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                           <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <span className="text-sm font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Live in {location.name}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Digital Lead Portal</span>
                           </div>
                           <div className="p-6">
                                <ShortLeadForm 
                                    source="programmatic_city_page" 
                                    city={location.name} 
                                    service={params.service} 
                                />
                           </div>
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
                            {/* Hub-and-Spoke Branding (Phase 7) */}
                            {!['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune'].includes(location.city) && (
                                <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                                        <Award className="w-4 h-4" />
                                        Regional Headquarters
                                    </h4>
                                    <p className="text-xs text-muted-foreground mb-4">Our {location.state.replace(/-/g, ' ')} operations are overseen by our lead office. Get priority support for complex cases.</p>
                                    <Link 
                                        href={`/locations/${location.state}`}
                                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                                    >
                                        Visit State Hub <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            )}
                            
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
            <StickyLeadButtons />
        </React.Fragment>
    )
}
