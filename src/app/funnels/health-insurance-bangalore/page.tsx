import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, Shield, Heart, Hospital, MapPin, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/data/contact';
import HealthBangaloreClient from '@/components/HealthBangaloreClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: 'Best Health Insurance in Bangalore 2026 | Cashless Hospitals, Plans & Expert Advisor'
    },
    description: 'Compare the best health insurance plans in Bangalore with expert local guidance. Cashless claims at Manipal, Apollo, Fortis, Narayana Health. Family floater & senior citizen plans. Free doorstep consultation by IRDAI-certified advisor.',
    keywords: [
        'Best Health Insurance Bangalore',
        'Health Insurance Advisor Bangalore',
        'Cashless Health Insurance Bangalore Hospitals',
        'Family Health Insurance Plan Bangalore',
        'Health Insurance Claim Help Bangalore',
        'Star Health Insurance Bangalore',
        'HDFC ERGO Health Plan Bangalore',
        'Health Insurance for Senior Citizens Bangalore',
        'Mediclaim Policy Bangalore',
        'Health Insurance Premium Comparison Bangalore',
        'Cashless Hospital List Bangalore',
        'Corporate Health Insurance Bangalore',
        'Health Insurance Agent Near Me Bangalore',
        'Best Family Floater Plan Bangalore 2026'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/funnels/health-insurance-bangalore',
    },
    openGraph: {
        title: 'Best Health Insurance in Bangalore | Expert Advisor & Cashless Support',
        description: 'Compare health plans with local expert guidance. Cashless claims at 100+ Bangalore hospitals.',
        type: 'website',
        url: 'https://insurancesupport.online/funnels/health-insurance-bangalore',
        siteName: 'Insurance Support',
        locale: 'en_IN',
    }
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Insurance Support — Health Insurance Bangalore',
    description: 'Expert health insurance advisory and cashless claim support in Bangalore. Doorstep service across Indiranagar, Koramangala, Whitefield, HSR Layout, and all major areas.',
    url: 'https://insurancesupport.online/funnels/health-insurance-bangalore',
    telephone: contactConfig.phoneFull,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bahubali Nagar, Jalahalli',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560013',
        addressCountry: 'IN'
    },
    areaServed: {
        '@type': 'City',
        name: 'Bangalore',
        containedInPlace: {
            '@type': 'State',
            name: 'Karnataka'
        }
    },
    priceRange: 'Free Consultation',
    openingHours: 'Mo-Sa 09:00-20:00'
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Which is the best health insurance plan in Bangalore?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best plan depends on your specific needs. For families, Star Family Health Optima and HDFC ERGO Optima Secure are top choices with wide Bangalore hospital networks. For senior citizens, Star Health Senior Citizens Red Carpet offers specialized coverage. For IT professionals, Care Health has competitive corporate-adjacent plans. We recommend a free consultation to compare plans based on your family size, pre-existing conditions, and preferred hospitals.'
            }
        },
        {
            '@type': 'Question',
            name: 'How many cashless hospitals are available in Bangalore?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Major health insurers have 200-400+ cashless network hospitals in Bangalore. Top chains include Manipal Hospital (7 locations), Apollo Hospitals (3 locations), Fortis Hospital, Narayana Health, Columbia Asia, Aster CMI, and Sakra World Hospital. The exact number varies by insurer — Star Health has the largest network in Bangalore with 400+ hospitals.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the minimum health insurance coverage needed in Bangalore?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Given Bangalore\'s healthcare costs, we recommend a minimum of ₹10 lakhs coverage for an individual and ₹15-25 lakhs for a family floater. A single hospitalization at a private hospital like Manipal or Apollo can easily cost ₹3-8 lakhs. For IT professionals with families, ₹25-50 lakhs is recommended to supplement employer-provided group cover.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I get doorstep health insurance service in Bangalore?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Insurance Support provides free doorstep consultation and service across all Bangalore areas including Indiranagar, Koramangala, Whitefield, HSR Layout, Electronic City, Marathahalli, Hebbal, Malleshwaram, JP Nagar, and Jayanagar. We handle everything from plan comparison to claim filing at your home or office.'
            }
        }
    ]
};

export default function HealthBangalorePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />

            {/* Client-Side Interactive Sections (Hero + Lead Form + Local Context) */}
            <HealthBangaloreClient />

            {/* Server-Rendered Content: Why Bangalore Needs Expert Health Insurance Advisory */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Bangalore Families Need Expert Health Insurance Guidance</h2>
                    <div className="prose prose-slate prose-lg max-w-none mb-10">
                        <p>
                            Bangalore is home to India&apos;s most advanced private healthcare ecosystem — with world-class hospitals like <strong>Manipal Hospital, Apollo Hospitals, Narayana Health, Fortis, Columbia Asia, and Aster CMI</strong>. While this means excellent medical care, it also means significantly higher treatment costs compared to other Indian cities.
                        </p>
                        <p>
                            A single hospitalization for cardiac surgery at Narayana Health can cost ₹5-12 lakhs. A knee replacement at Manipal Hospital averages ₹3.5-6 lakhs. Without the right health insurance plan with adequate coverage and cashless access at your preferred hospital, these expenses can devastate a family&apos;s savings.
                        </p>
                        <p>
                            Our <strong>Bangalore-based advisors</strong> know the local healthcare landscape from the inside. We understand which insurers have the best TPA desk relationships at specific Bangalore hospitals, which plans avoid sub-limits on room rent (a common trap), and how to ensure your cashless claim gets approved without delays.
                        </p>
                    </div>
                </div>
            </section>

            {/* Top Plans Comparison */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Health Insurance Plans for Bangalore Residents (2026)</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Based on our 25+ years of experience, these plans offer the best combination of hospital network coverage, claim settlement ratio, and value for Bangalore families.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Star Family Health Optima', cover: '₹5L – ₹1Cr', best: 'Best for Families', highlights: ['400+ Bangalore hospitals', 'Automatic restoration', 'No room rent sublimit'] },
                            { name: 'HDFC ERGO Optima Secure', cover: '₹3L – ₹50L', best: 'Best Value for IT Professionals', highlights: ['Cashless at all major chains', '100% no claim bonus', 'Maternity cover option'] },
                            { name: 'Care Health Platinum', cover: '₹5L – ₹6Cr', best: 'Best Comprehensive Cover', highlights: ['Unlimited restore benefit', 'AYUSH treatment cover', 'Global cover option'] },
                            { name: 'Niva Bupa ReAssure 2.0', cover: '₹5L – ₹3Cr', best: 'Best for Senior Citizens', highlights: ['No medical test up to 55', 'Consumables covered', 'Air ambulance cover'] },
                            { name: 'Star Senior Citizens', cover: '₹1L – ₹25L', best: 'Most Affordable for Seniors', highlights: ['Entry age up to 75', 'Pre-existing cover from day 1', 'Domiciliary treatment'] },
                            { name: 'ICICI Lombard iHealth', cover: '₹2.5L – ₹1Cr', best: 'Best for Young Professionals', highlights: ['Cashless Everywhere feature', 'Wellness discount program', 'Mental health cover'] },
                        ].map((plan, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all">
                                <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">{plan.best}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                                <p className="text-sm text-slate-500 mb-4">Cover: {plan.cover}</p>
                                <ul className="space-y-2">
                                    {plan.highlights.map((h, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 mt-6 text-center">
                        Premiums and benefits vary by age and coverage. <Link href="/contact" className="text-primary font-bold hover:underline">Get a personalized quote →</Link>
                    </p>
                </div>
            </section>

            {/* Cashless Hospital Network */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Cashless Hospital Network in Bangalore</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Our partnership with all major insurers gives you access to 400+ cashless network hospitals across Bangalore. Here are some of the top hospital chains where we provide claim support.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Manipal Hospital', locations: '7 locations in Bangalore', areas: 'Whitefield, Old Airport Road, Sarjapur Road, Yeshwanthpur' },
                            { name: 'Apollo Hospitals', locations: '3 locations', areas: 'Bannerghatta Road, Seshadripuram, Jayanagar' },
                            { name: 'Fortis Hospital', locations: '2 locations', areas: 'Bannerghatta Road, Rajajinagar' },
                            { name: 'Narayana Health', locations: '3 locations', areas: 'Bommasandra, HSR Layout, Whitefield' },
                            { name: 'Columbia Asia', locations: '4 locations', areas: 'Yeshwanthpur, Whitefield, Hebbal, Sarjapur Road' },
                            { name: 'Aster CMI Hospital', locations: 'Hebbal', areas: 'Multi-specialty, 500+ beds' },
                            { name: 'Sakra World Hospital', locations: 'Bellandur', areas: 'Japanese joint venture, advanced diagnostics' },
                            { name: 'BGS Gleneagles', locations: 'Kengeri', areas: 'Multi-specialty, organ transplant center' },
                        ].map((hospital, i) => (
                            <div key={i} className="p-4 bg-white rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Hospital className="h-4 w-4 text-primary" />
                                    <h4 className="font-bold text-slate-900 text-sm">{hospital.name}</h4>
                                </div>
                                <p className="text-xs text-slate-500">{hospital.locations}</p>
                                <p className="text-xs text-slate-400">{hospital.areas}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas We Cover */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Doorstep Health Insurance Service Across Bangalore</h2>
                    <p className="text-slate-600 text-sm mb-6">Our local advisors provide free doorstep consultation for health insurance in all major Bangalore neighborhoods:</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'Electronic City',
                            'Marathahalli', 'Hebbal', 'Malleshwaram', 'Jayanagar', 'JP Nagar',
                            'Bannerghatta Road', 'Sarjapur Road', 'Yelahanka', 'Rajajinagar',
                            'BTM Layout', 'Basavanagudi', 'Sadashivanagar', 'RT Nagar', 'Bellandur', 'Kadugodi'
                        ].map((area, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">{area}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Health Insurance FAQs — Bangalore Specific</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Which is the best health insurance plan in Bangalore?', a: 'It depends on your needs. Star Family Health Optima is best for families, HDFC ERGO Optima Secure for IT professionals, and Star Senior Citizens Red Carpet for elderly parents. We recommend a free consultation to compare plans based on your family size and preferred hospitals.' },
                            { q: 'How many cashless hospitals are available in Bangalore?', a: 'Major insurers have 200-400+ cashless hospitals in Bangalore. Star Health leads with 400+ network hospitals. Manipal Hospital (7 locations), Apollo (3 locations), and Fortis (2 locations) are covered by all major insurers.' },
                            { q: 'What minimum health coverage is recommended in Bangalore?', a: 'We recommend ₹10 lakhs minimum for individuals and ₹15-25 lakhs for family floaters. A single hospitalization at Manipal or Apollo can cost ₹3-8 lakhs. IT professionals should get ₹25-50 lakhs to supplement employer group cover.' },
                            { q: 'Can I get doorstep health insurance service in Bangalore?', a: 'Yes — our local advisors provide free doorstep service across all Bangalore areas including Indiranagar, Koramangala, Whitefield, HSR Layout, Electronic City, and more. We handle plan comparison, proposal filling, and claim support at your home or office.' },
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Get the Right Health Insurance for Your Bangalore Family</h2>
                                <p className="text-blue-100 text-lg leading-relaxed">
                                    Don&apos;t guess which plan is right. Our local advisors compare all top plans, check your preferred hospital&apos;s cashless availability, and ensure your family is fully protected — all for free.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg h-14 px-8 font-bold" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">
                                        Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
