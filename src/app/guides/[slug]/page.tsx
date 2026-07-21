import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { contactConfig } from '@/data/contact'
import { DynamicLocalBusinessJsonLd } from '@/components/ServerJsonLd'
import { CITY_CONTENT_OVERRIDES } from '@/data/cityContentOverrides'
import Link from 'next/link'
import React from 'react'
import { ChevronRight, ShieldCheck, Clock, Award, Phone, Hospital, Car, Heart, AlertTriangle, CheckCircle, MapPin, Building2, FileText, Users } from 'lucide-react'
import ShortLeadForm from '@/components/ShortLeadForm'
import { getStaticTranslation, getLocalizedName } from '@/lib/static-i18n'

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
    const { t, lang } = getStaticTranslation();
    const citySlug = params.slug.replace('-insurance', '');
    const location = INDIAN_LOCATIONS.find(l => l.city === citySlug);

    if (!location || !TOP_10_CITIES.includes(citySlug)) return {}

    const localizedCity = await getLocalizedName(location.city, lang);

    const title = `Insurance Guide for ${localizedCity} - Life, Health & Motor Insurance Support`;

    const description = `Comprehensive insurance guide for ${localizedCity}. Get expert support for life, health, and motor insurance claims. Find local branches, network hospitals, claim settlement statistics, and common insurance issues.`;

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
    const { t, lang } = getStaticTranslation();
    const citySlug = params.slug.replace('-insurance', '');
    const location = INDIAN_LOCATIONS.find(l => l.city === citySlug);

    if (!location || !TOP_10_CITIES.includes(citySlug)) {
        return notFound()
    }

    const localizedCity = await getLocalizedName(location.city, lang);
    const localizedState = await getLocalizedName(location.state, lang);
    const cityOverride = CITY_CONTENT_OVERRIDES[citySlug];

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
                        <Link href={`/locations/${location.state}/${location.city}`} className="hover:text-primary transition-colors">{localizedCity}</Link>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <span className="font-bold text-foreground capitalize">Insurance Guide</span>
                    </nav>

                    <header className="mb-12">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                            Insurance Guide for {localizedCity} &ndash; Life, Health &amp; Motor
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {cityOverride?.summary || `Comprehensive insurance support guide for ${localizedCity}. Get expert help for life, health, and motor insurance claims from certified advisors.`}
                        </p>
                    </header>

                    {/* Quick Stats */}
                    {cityOverride?.facts && (
                        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cityOverride.facts.slice(0, 4).map((fact: string, i: number) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">{fact}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Table of Contents */}
                    <div className="mb-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5" /> In This Guide
                        </h2>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><a href="#local-landscape" className="hover:text-primary">Insurance Landscape in {localizedCity}</a></li>
                            <li><a href="#life-insurance" className="hover:text-primary">Life Insurance &amp; LIC Policy Support</a></li>
                            {cityOverride?.lic_branches && <li><a href="#lic-branches" className="hover:text-primary">LIC Branches in {localizedCity}</a></li>}
                            <li><a href="#health-insurance" className="hover:text-primary">Health Insurance &amp; Cashless Claims</a></li>
                            {cityOverride?.major_hospitals && <li><a href="#hospitals" className="hover:text-primary">Major Network Hospitals</a></li>}
                            <li><a href="#motor-insurance" className="hover:text-primary">Motor Insurance &amp; Accident Claims</a></li>
                            <li><a href="#claim-stats" className="hover:text-primary">Claim Settlement Statistics</a></li>
                            <li><a href="#common-issues" className="hover:text-primary">Common Insurance Issues &amp; Solutions</a></li>
                            {cityOverride?.local_insights && <li><a href="#local-insights" className="hover:text-primary">Local Insurance Tips for {localizedCity}</a></li>}
                            <li><a href="#how-we-help" className="hover:text-primary">How We Can Help</a></li>
                        </ol>
                    </div>

                    {/* Section 1: Local Insurance Landscape */}
                    <section id="local-landscape" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h2 className="flex items-center gap-3">
                            <MapPin className="w-7 h-7 text-blue-500" />
                            Insurance Landscape in {localizedCity}, {localizedState}
                        </h2>
                        <p>
                            {cityOverride?.localContext || `${localizedCity} is one of India's major metropolitan hubs with a complex insurance landscape. The city has high insurance penetration across life, health, and motor segments, but residents often face challenges with claim settlement, policy servicing, and navigating the IRDAI regulatory framework.`}
                        </p>
                        
                        <p>
                            As the capital of {localizedState}, {localizedCity} serves as a regional insurance hub 
                            with multiple insurance company headquarters, LIC divisional offices, and TPAs operating 
                            in the city. The insurance density is among the highest in {localizedState}, with residents 
                            holding an average of 2.3 insurance policies per household.
                        </p>

                        {cityOverride?.lic_divisional_offices && (
                            <div className="my-6 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-800">
                                <h4 className="flex items-center gap-2 text-amber-800 dark:text-amber-300 m-0 pb-3">
                                    <Building2 className="w-5 h-5" />
                                    Insurance Infrastructure in {localizedCity}
                                </h4>
                                <ul className="m-0 space-y-2 text-slate-700 dark:text-slate-300">
                                    <li><strong>LIC Divisional Offices:</strong> {cityOverride.lic_divisional_offices || 'Multiple'}</li>
                                    <li><strong>LIC Zone:</strong> {cityOverride.lic_zone || 'Regional'}</li>
                                    <li><strong>Cashless Network Hospitals:</strong> {cityOverride.cashless_hospitals_count || '200+'}</li>
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Section 2: Life Insurance */}
                    <section id="life-insurance" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h2 className="flex items-center gap-3">
                            <Heart className="w-7 h-7 text-red-500" />
                            Life Insurance &amp; LIC Policy Support in {localizedCity}
                        </h2>
                        
                        <p>
                            {cityOverride?.life_insurance_notes || `Life insurance penetration in ${localizedCity} is above the national average. 
                            Residents typically hold a mix of traditional endowment plans, term insurance, and pension policies. 
                            The high cost of living in ${localizedCity} necessitates adequate life cover — financial experts 
                            recommend a minimum cover of 10-15 times the annual income.`}
                        </p>

                        <h3>Key Life Insurance Services We Provide</h3>
                        <ul>
                            <li><strong>Death Claim Support:</strong> End-to-end assistance for family death claims including document preparation, FNOL (First Notice of Loss) filing, and follow-up with insurers.</li>
                            <li><strong>Maturity Claim Assistance:</strong> Help with survival benefit and maturity claim processing, including KYC updates and bank mandate corrections.</li>
                            <li><strong>Lapsed Policy Revival:</strong> Expert guidance on reviving lapsed policies under the IRDAI revival framework, including calculation of arrears and interest.</li>
                            <li><strong>Lost Policy Bond Retrieval:</strong> Coordination with LIC for duplicate policy bond issuance when original bonds are lost or damaged.</li>
                            <li><strong>Nominee Update Support:</strong> Assistance with updating nominee details, assignment, and transmission of policy benefits.</li>
                        </ul>

                        <div className="my-6 p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-800">
                            <h4 className="flex items-center gap-2 text-red-800 dark:text-red-300 m-0 pb-3">
                                <AlertTriangle className="w-5 h-5" />
                                Critical Life Insurance Tip for {localizedCity}
                            </h4>
                            <p className="m-0 text-slate-700 dark:text-slate-300">
                                Life insurance death claims in {localizedCity} face an average delay of 18-30 days when 
                                documentation is incomplete. Always ensure your nominee&rsquo;s KYC (Aadhaar, PAN, bank details) 
                                is updated with the insurer. Delays in death claim settlement occur in 40% of cases due to 
                                mismatched bank details — a simple NEFT form correction can prevent months of delay.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: LIC Branches */}
                    {cityOverride?.lic_branches && (
                        <section id="lic-branches" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                            <h2 className="flex items-center gap-3">
                                <Building2 className="w-7 h-7 text-orange-500" />
                                Major Insurance Branch Offices in {localizedCity}
                            </h2>
                            <p>
                                {localizedCity} has {cityOverride.lic_divisional_offices || 'multiple'} divisional offices 
                                and branches that handle the city&rsquo;s insurance operations. Here are the key branch locations:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose mb-6">
                                {cityOverride.lic_branches.map((branch: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <Building2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
                                        <span className="text-sm text-slate-700 dark:text-slate-300">{branch}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section 4: Health Insurance */}
                    <section id="health-insurance" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h2 className="flex items-center gap-3">
                            <Hospital className="w-7 h-7 text-green-500" />
                            Health Insurance in {localizedCity}
                        </h2>
                        
                        <p>
                            {cityOverride?.health_insurance_notes || `Health insurance in ${localizedCity} is essential given the rising 
                            medical costs. The city has a robust network of cashless hospitals and TPAs. 
                            Common health insurance products include individual health plans, family floaters, 
                            super top-up plans, and critical illness covers.`}
                        </p>

                        <h3>Common Health Insurance Issues in {localizedCity}</h3>
                        <ul>
                            <li><strong>Cashless Claim Rejections:</strong> Often due to pre-authorization delays, non-disclosure of pre-existing conditions, or room rent cap violations.</li>
                            <li><strong>Reimbursement Delays:</strong> Claims submitted for non-network hospital treatments take 21-40 days to process.</li>
                            <li><strong>Pre-existing Condition Disputes:</strong> Insurers may reject claims for conditions not disclosed at the time of policy purchase.</li>
                            <li><strong>Room Rent Caps:</strong> Many policies have room rent limits (e.g., 1% of sum insured). Exceeding this leads to proportionate deduction across all claim components.</li>
                            <li><strong>Waiting Period Issues:</strong> Most policies have a 30-day initial waiting period, 2-year waiting for specific diseases, and 4-year waiting for pre-existing conditions.</li>
                        </ul>

                        <div className="my-6 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800">
                            <h4 className="flex items-center gap-2 text-green-800 dark:text-green-300 m-0 pb-3">
                                <Award className="w-5 h-5" />
                                Health Insurance Tip for {localizedCity}
                            </h4>
                            <p className="m-0 text-slate-700 dark:text-slate-300">
                                Port your corporate health insurance to a retail plan within 30 days of leaving your job 
                                to maintain continuity of coverage and waiting period benefits. In {localizedCity}, 
                                medical inflation is running at 12-15% annually &ndash; a sum insured of Rs 10 lakh today 
                                may be inadequate in just 5 years. Consider a super top-up plan for cost-effective enhancement.
                            </p>
                        </div>
                    </section>

                    {/* Section 5: Major Hospitals */}
                    {cityOverride?.major_hospitals && (
                        <section id="hospitals" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                            <h2 className="flex items-center gap-3">
                                <Hospital className="w-7 h-7 text-teal-500" />
                                Major Network Hospitals in {localizedCity}
                            </h2>
                            <p>
                                {localizedCity} has {cityOverride.cashless_hospitals_count || '200+'} cashless network hospitals. 
                                Here are some of the major hospitals where cashless treatment is available:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose mb-6">
                                {cityOverride.major_hospitals.map((hospital: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-900/10 rounded-lg border border-teal-100 dark:border-teal-800">
                                        <Hospital className="w-4 h-4 text-teal-600 flex-shrink-0 mt-1" />
                                        <span className="text-sm text-slate-700 dark:text-slate-300">{hospital}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section 6: Motor Insurance */}
                    <section id="motor-insurance" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h2 className="flex items-center gap-3">
                            <Car className="w-7 h-7 text-purple-500" />
                            Motor Insurance in {localizedCity}
                        </h2>
                        
                        <p>
                            {cityOverride?.motor_insurance_notes || `Motor insurance is mandatory in ${localizedCity} as per the Motor Vehicles Act, 1988. 
                            The city sees a high volume of vehicle registrations and road accidents. 
                            Third-party insurance is the minimum legal requirement, but comprehensive coverage 
                            is strongly recommended for adequate protection.`}
                        </p>

                        <h3>Key Motor Insurance Add-ons Recommended for {localizedCity}</h3>
                        <ul>
                            <li><strong>Zero Depreciation Cover:</strong> Ensures full claim amount without depreciation deduction on vehicle parts. Essential for new vehicles.</li>
                            <li><strong>Engine Protect:</strong> Covers engine damage from waterlogging or hydrostatic lock. Critical for {localizedCity}&rsquo;s monsoon season.</li>
                            <li><strong>Return to Invoice (RTI):</strong> In case of total loss or theft, you receive the full invoice value of the vehicle.</li>
                            <li><strong>24x7 Roadside Assistance:</strong> Towing, battery jump-start, flat tire assistance, and emergency fuel delivery.</li>
                            <li><strong>Personal Accident Cover:</strong> Mandatory Rs 15 lakh cover for the owner-driver under comprehensive policies.</li>
                            <li><strong>NCB Protection:</strong> Retain your No Claim Bonus (up to 50%) even after making a claim.</li>
                        </ul>

                        <div className="my-6 p-6 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-800">
                            <h4 className="flex items-center gap-2 text-purple-800 dark:text-purple-300 m-0 pb-3">
                                <AlertTriangle className="w-5 h-5" />
                                Motor Insurance Tip for {localizedCity}
                            </h4>
                            <p className="m-0 text-slate-700 dark:text-slate-300">
                                Always file an FIR for accidents involving third-party injury or death. Without an FIR, 
                                your third-party claim may be rejected. In {localizedCity}, the Motor Accident Claims 
                                Tribunal (MACT) processes third-party claims. Keep a copy of your insurance policy, 
                                RC, and driving license in the vehicle at all times.
                            </p>
                        </div>
                    </section>

                    {/* Section 7: Claim Settlement Stats */}
                    {cityOverride?.claim_settlement_stats && (
                        <section id="claim-stats" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                            <h2 className="flex items-center gap-3">
                                <ShieldCheck className="w-7 h-7 text-indigo-500" />
                                Claim Settlement Statistics for {localizedCity}
                            </h2>
                            <p>
                                Understanding claim settlement timelines and ratios helps set realistic expectations. 
                                Here are the key statistics for insurance claims in {localizedCity}:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-probe mb-6">
                                {Object.entries(cityOverride.claim_settlement_stats).map(([key, value]) => (
                                    <div key={key} className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                        <div className="text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-1">
                                            {key.replace(/_/g, ' ')}
                                        </div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section 8: Common Issues */}
                    {cityOverride?.common_issues && (
                        <section id="common-issues" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                            <h2 className="flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-yellow-500" />
                                Common Insurance Issues in {localizedCity} &amp; How to Resolve Them
                            </h2>
                            <p>
                                Based on our experience serving clients in {localizedCity}, these are the most frequently 
                                encountered insurance issues and their solutions:
                            </p>
                            <div className="space-y-4 not-probe">
                                {cityOverride.common_issues.map((issue: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-100 dark:border-yellow-800">
                                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{i + 1}</span>
                                        </div>
                                        <div>
                                            <p className="m-0 text-slate-700 dark:text-slate-300">{issue}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section 9: Local Insights */}
                    {cityOverride?.local_insights && (
                        <section id="local-insights" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                            <h2 className="flex items-center gap-3">
                                <Award className="w-7 h-7 text-cyan-500" />
                                Local Insurance Tips for {localizedCity} Residents
                            </h2>
                            <div className="space-y-4 not-probe">
                                {cityOverride.local_insights.map((insight: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-cyan-50 dark:bg-cyan-900/10 rounded-xl border border-cyan-100 dark:border-cyan-800">
                                        <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                                        <p className="m-0 text-slate-700 dark:text-slate-300">{insight}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section 10: Neighborhoods */}
                    {cityOverride?.neighborhoods && (
                        <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                            <h2 className="flex items-center gap-3">
                                <MapPin className="w-7 h-7 text-emerald-500" />
                                Areas We Serve in {localizedCity}
                            </h2>
                            <p>We provide doorstep insurance advisory services across all major neighborhoods in {localizedCity}:</p>
                            <div className="flex flex-wrap gap-2 not-probe">
                                {cityOverride.neighborhoods.map((n: string, i: number) => (
                                    <span key={i} className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-300 rounded-full text-sm border border-emerald-100 dark:border-emerald-800">
                                        {n}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section 11: How We Help */}
                    <section id="how-we-help" className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <h2 className="flex items-center gap-3">
                            <Users className="w-7 h-7 text-blue-500" />
                            How Our {localizedCity} Insurance Support Team Can Help
                        </h2>
                        <p>
                            Our IRDAI-certified insurance advisors in {localizedCity} provide end-to-end support 
                            for all types of insurance claims and policy servicing. We work independently of 
                            insurance companies, representing only your interests.
                        </p>
                        
                        <h3>Our Services in {localizedCity}</h3>
                        <ul>
                            <li><strong>Free 15-Minute Consultation:</strong> Evaluate your insurance portfolio and identify gaps or issues.</li>
                            <li><strong>Doorstep Document Collection:</strong> We collect all required documents from your home or office in {localizedCity}.</li>
                            <li><strong>Claim Filing &amp; Follow-up:</strong> End-to-end claim management including FNOL, document submission, and follow-up with insurers.</li>
                            <li><strong>Rejected Claim Appeals:</strong> Drafting and filing appeals against claim rejections with proper legal and medical justification.</li>
                            <li><strong>Policy Revival:</strong> Reviving lapsed policies with optimal premium calculations and back-dated interest.</li>
                            <li><strong>KYC &amp; Nominee Updates:</strong> Updating bank mandates, nominee details, address, and contact information across all policies.</li>
                            <li><strong>IRDAI Grievance Filing:</strong> Escalating unresolved complaints to the IRDAI Integrated Grievance Management System (IGMS).</li>
                        </ul>

                        <div className="my-8 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                            <h4 className="flex items-center gap-2 text-blue-800 dark:text-blue-300 m-0 pb-4">
                                <Award className="w-6 h-6" />
                                Why Choose Independent Insurance Support in {localizedCity}?
                            </h4>
                            <ul className="m-0 space-y-2 text-slate-700 dark:text-slate-300">
                                <li>We work for you, not the insurance company &ndash; zero conflict of interest</li>
                                <li>25+ years of combined experience in the Indian insurance industry</li>
                                <li>Deep knowledge of {localizedCity}&rsquo;s local insurance ecosystem, branches, and claim processes</li>
                                <li>Doorstep service across all {localizedCity} neighborhoods</li>
                                <li>No upfront fees &ndash; we charge only when we deliver results</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact & Lead Form Section */}
                    <div className="grid gap-8 lg:grid-cols-5 items-start bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-4 md:p-8 border border-slate-100 dark:border-slate-800">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Need Insurance Help in {localizedCity}?</h3>
                            <p className="text-muted-foreground mb-6">
                                Speak directly to an insurance expert serving {localizedCity}. We offer a free 15-minute consultation to evaluate your case.
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
