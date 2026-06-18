import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { contactConfig } from '@/data/contact'
import { DynamicLocalBusinessJsonLd } from '@/components/ServerJsonLd'
import Link from 'next/link'
import React from 'react'
import { ChevronRight, ShieldCheck, Clock, Award, Phone } from 'lucide-react'
import ShortLeadForm from '@/components/ShortLeadForm'
import { getServerSideTranslation, getLocalizedName } from '@/lib/i18n-server'

// Top 10 cities for SEO Guides
const TOP_10_CITIES = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad', 'jaipur', 'lucknow']

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    return TOP_10_CITIES.map(city => ({
        slug: `${city}-insurance`
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { t, lang } = await getServerSideTranslation();
    const citySlug = params.slug.replace('-insurance', '');
    const location = INDIAN_LOCATIONS.find(l => l.city === citySlug);

    if (!location || !TOP_10_CITIES.includes(citySlug)) return {}

    const localizedCity = await getLocalizedName(location.city, lang);

    const title = `Insurance Support Guide for ${localizedCity} - Claim Management & Local Experts`;
    const description = `Comprehensive guide to managing insurance claims in ${localizedCity}. Get expert support for life, health, and term insurance from certified local advisors.`;

    const route = `/guides/${params.slug}`;

    return {
        title,
        description,
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

export default async function CityGuidePage({ params }: Props) {
    const { t, lang } = await getServerSideTranslation();
    const citySlug = params.slug.replace('-insurance', '');
    const location = INDIAN_LOCATIONS.find(l => l.city === citySlug);

    if (!location || !TOP_10_CITIES.includes(citySlug)) {
        return notFound()
    }

    const localizedCity = await getLocalizedName(location.city, lang);
    const localizedState = await getLocalizedName(location.state, lang);

    return (
        <>
            <DynamicLocalBusinessJsonLd 
                city={localizedCity} 
                state={localizedState} 
                serviceName="Insurance Advisory Guide" 
            />
            
            <main className="container mx-auto px-4 py-8 md:py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <span className="font-bold text-foreground capitalize">{localizedCity} Insurance Guide</span>
                    </nav>

                    <header className="mb-12">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                            How to Manage Insurance Claims in {localizedCity}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            A comprehensive guide to resolving delayed, rejected, or lost insurance policies specifically tailored for residents of {localizedCity}.
                        </p>
                    </header>

                    {/* Trust Banner */}
                    <div className="mb-12 py-6 border-y border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-10 h-10 text-green-500" />
                            <div className="text-sm">
                                <span className="font-bold text-slate-900 dark:text-white block">IRDAI Certified Support</span>
                                <span className="text-muted-foreground">Expert local guidance you can trust.</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Clock className="w-10 h-10 text-blue-500" />
                            <div className="text-sm">
                                <span className="font-bold text-slate-900 dark:text-white block">Fast Track Approvals</span>
                                <span className="text-muted-foreground">Expedite your claim recovery.</span>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h2>The Unique Insurance Landscape of {localizedCity}</h2>
                        <p>
                            Navigating insurance claims in a major metropolitan hub like {localizedCity} presents unique challenges. 
                            High claim volumes at local branch offices often lead to significant administrative delays, particularly 
                            for legacy life insurance policies (like LIC) or complex health insurance reimbursements.
                        </p>
                        
                        <h3>Common Issues Faced by Residents</h3>
                        <ul>
                            <li><strong>Administrative Delays:</strong> Local branches facing high footfalls.</li>
                            <li><strong>Health Claim Rejections:</strong> Minor discrepancies in cashless claim filings at network hospitals.</li>
                            <li><strong>Lost Policy Documents:</strong> A common issue for older life insurance policies purchased decades ago.</li>
                            <li><strong>Nominee Disputes:</strong> Outdated nominee details causing friction during claim settlement.</li>
                        </ul>

                        <div className="my-10 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                            <h4 className="flex items-center gap-2 text-blue-800 dark:text-blue-300 m-0 pb-4">
                                <Award className="w-6 h-6" />
                                Expert Local Tip for {localizedCity}
                            </h4>
                            <p className="m-0 text-slate-700 dark:text-slate-300">
                                Always ensure that your bank mandate (NEFT form) matches the exact spelling on your policy bond. 
                                In {localizedCity}, mismatched KYC details are the number one cause of delayed maturity and death claims.
                            </p>
                        </div>

                        <h2>How We Can Help</h2>
                        <p>
                            Our team of IRDAI-certified consultants specializes in cutting through the red tape. 
                            We provide doorstep document collection in {localizedCity} and end-to-end liaison with the insurance companies.
                        </p>
                        <ul>
                            <li>Doorstep submission and verification of KYC.</li>
                            <li>Legal and technical support for drafting appeal letters against rejected claims.</li>
                            <li>Revival of lapsed policies and updating nominee/address details.</li>
                        </ul>
                    </section>

                    {/* Contact & Lead Form Section */}
                    <div className="grid gap-8 lg:grid-cols-5 items-start bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-4 md:p-8 border border-slate-100 dark:border-slate-800">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                            <p className="text-muted-foreground mb-6">
                                Speak directly to an insurance expert in {localizedCity}. We offer a free 15-minute consultation to evaluate your case.
                            </p>
                            <a href={`tel:${contactConfig.phone}`} className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                                <Phone className="w-5 h-5" />
                                Call {contactConfig.phone}
                            </a>
                        </div>
                        <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h4 className="font-bold text-lg mb-4">Request a Callback</h4>
                            <ShortLeadForm 
                                source="city_guide_page" 
                                city={localizedCity} 
                                service="general-inquiry" 
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
