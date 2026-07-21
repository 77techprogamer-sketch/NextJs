import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    ShieldCheck, Phone, MapPin, Star, CheckCircle2,
    ClipboardList, RefreshCw, FileSearch, ArrowRight, BadgeCheck
} from 'lucide-react';
import { contactConfig } from '@/data/contact';
import QuoteForm from '@/components/QuoteForm';

// â”€â”€â”€ SEO Metadata â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const metadata: Metadata = {
    title: 'LIC Policy Support in Jalahalli & North Bangalore | Hari Kotian',
    description: 'Expert LIC policy support for Jalahalli, Bahubali Nagar, Yeshwanthpur & North Bangalore. Get help with lapsed policies, death claims, maturity settlements & revival. IRDAI-certified advisor with 25+ years. Rated 4.2â˜… on Justdial.',
    keywords: [
        'LIC agent Jalahalli', 'LIC policy support North Bangalore', 'LIC claim help Bahubali Nagar',
        'LIC revival Yeshwanthpur', 'lapsed LIC policy Bangalore', 'LIC maturity claim Bangalore',
        'IRDAI certified LIC advisor Bangalore', 'LIC policy support near me',
        'death claim LIC Bangalore', 'LIC agent 4 star Justdial Bangalore'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/services/lic-policy-support',
    },
    openGraph: {
        title: 'LIC Policy Support â€” Jalahalli & North Bangalore Expert',
        description: 'Struggling with a lapsed, stuck, or rejected LIC policy? Get doorstep expert help in Jalahalli, Bahubali Nagar, Yeshwanthpur & all North Bangalore areas.',
        url: 'https://insurancesupport.online/services/lic-policy-support',
        type: 'website',
    }
};

// â”€â”€â”€ JSON-LD Schema â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const licSupportSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'LocalBusiness',
            '@id': 'https://insurancesupport.online/#organization',
            name: 'Insurance Support â€” LIC Policy Expert',
            description: 'Expert LIC policy support, claim recovery, and revival services for North Bangalore (Jalahalli, Bahubali Nagar, Yeshwanthpur). IRDAI-certified advisor, 25+ years experience, 4.2â˜… rated on Justdial.',
            url: 'https://insurancesupport.online/services/lic-policy-support',
            telephone: contactConfig.phoneFull,
            email: contactConfig.email,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jalahalli',
                addressLocality: 'Bangalore',
                addressRegion: 'Karnataka',
                postalCode: '560013',
                addressCountry: 'IN'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 13.0599,
                longitude: 77.5472
            },
            areaServed: [
                'Jalahalli', 'Bahubali Nagar', 'Yeshwanthpur', 'Mahalakshmi Layout',
                'Rajajinagar', 'Mathikere', 'Hesaraghatta Road', 'Bangalore North'
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'LIC Policy Support Services',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LIC Death Claim Settlement' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lapsed LIC Policy Revival' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LIC Maturity Claim Processing' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LIC Policy Bond Recovery' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LIC Nominee Update Assistance' } },
                ]
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.2',
                reviewCount: '80',
                bestRating: '5',
                ratingCount: '80'
            }
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://insurancesupport.online' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://insurancesupport.online/services' },
                { '@type': 'ListItem', position: 3, name: 'LIC Policy Support', item: 'https://insurancesupport.online/services/lic-policy-support' },
            ]
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Can you help revive my lapsed LIC policy in Bangalore?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Yes. I offer doorstep assistance for lapsed LIC policy revival in Jalahalli, Bahubali Nagar, Yeshwanthpur, and all of North Bangalore. Revival involves paying overdue premiums plus interest; I guide you through LIC\'s special revival schemes to minimize cost.' }
                },
                {
                    '@type': 'Question',
                    name: 'How do I file a death claim for LIC in Bangalore?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Death claims require specific forms (3783, 3784) and documents including the death certificate, policy bond, and claimant statement. As an IRDAI-certified agent serving North Bangalore, I handle the entire documentation and follow-up with LIC on your behalf.' }
                },
                {
                    '@type': 'Question',
                    name: 'Do you visit clients at home in Jalahalli and Bahubali Nagar?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Yes. I offer personal home visits for documentation, policy review, and claim filing for clients in Jalahalli, Bahubali Nagar, Mahalakshmi Layout, Mathikere, and surrounding areas.' }
                },
                {
                    '@type': 'Question',
                    name: 'What makes you different from PolicyBazaar or Acko?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Online aggregators sell policies but disappear when a claim is rejected. As your local IRDAI-certified advisor with 25+ years of experience, I personally represent you at the LIC branch, handle disputes, and escalate to the Insurance Ombudsman if needed â€” a service no online portal provides.' }
                }
            ]
        }
    ]
};

// â”€â”€â”€ Services Offered â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const licServices = [
    {
        icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
        title: 'Lapsed Policy Revival',
        desc: 'Revive your lapsed LIC policy under special revival schemes. I calculate exact costs and complete all paperwork â€” fast-tracked through North Bangalore LIC branches.'
    },
    {
        icon: <FileSearch className="w-6 h-6 text-blue-600" />,
        title: 'Death Claim Settlement',
        desc: 'End-to-end support for death claim filing â€” from collecting documents to personally tracking your case through the LIC branch until settlement.'
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
        title: 'Maturity Claim Processing',
        desc: 'Your policy matured but money hasn\'t arrived? I handle NEFT mandate setup, form submission, and follow-up until the amount is credited.'
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
        title: 'Policy Bond Recovery',
        desc: 'Lost your original LIC policy document? I guide you through the indemnity bond process and duplicate policy issuance.'
    },
    {
        icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
        title: 'Nominee Updates & Corrections',
        desc: 'Updating nominees or correcting errors in your LIC policy â€” name, date of birth, address â€” processed quickly with minimal hassle.'
    },
    {
        icon: <Phone className="w-6 h-6 text-blue-600" />,
        title: 'Rejected Claim Recovery',
        desc: 'LIC rejected your claim? I review the rejection reason, gather the right documentation, and escalate to the Insurance Ombudsman if necessary.'
    }
];

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function LicPolicySupportPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(licSupportSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-white">LIC Policy Support</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1">
                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white backdrop-blur-sm">
                                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> IRDAI Certified
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full text-xs font-bold text-orange-300 backdrop-blur-sm">
                                    <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" /> 4.2 on Justdial
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white backdrop-blur-sm">
                                    <MapPin className="w-3.5 h-3.5 text-blue-400" /> Serving North Bangalore
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                LIC Policy Support in{' '}
                                <span className="text-blue-400">Jalahalli &amp; North Bangalore</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                Stuck with a lapsed policy, delayed maturity claim, or rejected death claim?
                                Get <strong className="text-white">personal, doorstep assistance</strong> from an
                                IRDAI-certified LIC expert with 25+ years of experience â€” serving Jalahalli,
                                Bahubali Nagar, Yeshwanthpur, and all of North Bangalore.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={contactConfig.getDialUrl()}>
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow-lg shadow-blue-500/30">
                                        <Phone className="w-5 h-5 mr-2 fill-current" />
                                        Call Hari Now
                                    </Button>
                                </a>
                                <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-white/30 text-white hover:bg-white/10 rounded-full">
                                        WhatsApp Support
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Sidebar Form */}
                        <div className="w-full lg:w-[360px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                            <h3 className="text-lg font-bold text-white mb-1">Get Free Expert Advice</h3>
                            <p className="text-slate-400 text-sm mb-5">Tell us your issue â€” we'll respond within 2 hours.</p>
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <QuoteForm insuranceType="lic_policy_support" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Justdial Authority Strip */}
            <div className="bg-orange-50 border-y border-orange-100 py-4 px-4">
                <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-1.5">
                        {[1,2,3,4].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
                        <Star className="w-5 h-5 text-orange-300" />
                    </div>
                    <p className="text-slate-700 font-medium text-sm">
                        <strong className="text-orange-700">Rated 4.2â˜… on Justdial</strong> â€” independently reviewed by local clients in Bangalore as a top-rated LIC advisor.
                    </p>
                    <span className="hidden sm:block text-slate-300">|</span>
                    <p className="text-slate-500 text-sm">25+ years Â· 15,000+ clients served Â· IRDAI licensed</p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">LIC Services in North Bangalore</h2>
                    <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
                        Every service includes personal follow-up at your local LIC branch (Jalahalli, Rajajinagar, or Yeshwanthpur), with no hidden fees.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {licServices.map((service, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                                <div className="mb-4 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Expert vs Portal */}
            <section className="py-16 px-4 bg-white border-y border-slate-100">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Why Not Just Use PolicyBazaar?</h2>
                    <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
                        Online portals sell policies. When it's time to claim, you're on your own. Here's the real difference.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <h3 className="font-bold text-red-800 mb-4 text-lg">Online Portals (PolicyBazaar, Acko, Digit)</h3>
                            <ul className="space-y-3">
                                {[
                                    'Algorithm-based, no human follow-up',
                                    'No local branch liaison when claims are stuck',
                                    'Customer care reads from a script',
                                    'Cannot represent you at LIC / Insurance Ombudsman',
                                    'Disappear after policy purchase'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
                                        <span className="text-red-400 font-bold mt-0.5">âœ•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-green-800 mb-4 text-lg">Hari Kotian â€” Your Local LIC Expert</h3>
                            <ul className="space-y-3">
                                {[
                                    'Personal home visits in Jalahalli, Bahubali Nagar & North Bangalore',
                                    'Direct branch liaison at LIC Jalahalli / Rajajinagar DO',
                                    '25+ years of experience navigating LIC\'s internal processes',
                                    'Can escalate to Insurance Ombudsman on your behalf',
                                    '4.2â˜… rated on Justdial â€” independently verified'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas Served */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-slate-900 rounded-3xl p-10 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-blue-400" />
                            <h2 className="text-2xl font-bold">Doorstep Service in North Bangalore</h2>
                        </div>
                        <p className="text-slate-400 mb-8 max-w-2xl">
                            We personally visit clients for policy documentation, claims filing, and LIC branch follow-up. No need to navigate LIC offices alone.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {[
                                'Jalahalli', 'Bahubali Nagar', 'Yeshwanthpur', 'Mahalakshmi Layout',
                                'Rajajinagar', 'Mathikere', 'BEL Circle', 'Hesaraghatta Road',
                                'Peenya', 'Nagasandra', 'Dasarahalli', 'Laggere'
                            ].map(area => (
                                <span key={area} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-sm text-slate-200 font-medium">
                                    {area}
                                </span>
                            ))}
                        </div>
                        <a href={contactConfig.getDialUrl()}>
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full h-12 px-8">
                                <Phone className="w-4 h-4 mr-2 fill-current" /> Book a Home Visit
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Can you help revive my lapsed LIC policy in Bangalore?',
                                a: 'Yes. I offer doorstep assistance for lapsed LIC policy revival in Jalahalli, Bahubali Nagar, Yeshwanthpur, and all of North Bangalore. Revival involves paying overdue premiums plus interest; I guide you through LIC\'s special revival schemes to minimize cost.'
                            },
                            {
                                q: 'How do I file a death claim for LIC?',
                                a: 'Death claims require specific forms (3783, 3784) along with the death certificate, policy bond, and claimant statement. As an IRDAI-certified agent, I handle the entire documentation and personally follow up at your LIC branch until settlement is done.'
                            },
                            {
                                q: 'Do you visit clients at home in Jalahalli and Bahubali Nagar?',
                                a: 'Yes. I offer personal home visits for documentation, policy review, and claim filing for clients in Jalahalli, Bahubali Nagar, Mahalakshmi Layout, Mathikere, and surrounding North Bangalore areas.'
                            },
                            {
                                q: 'What makes you different from PolicyBazaar or Acko?',
                                a: 'Online aggregators sell policies but are absent when claims get rejected. As your local IRDAI-certified advisor with 25+ years of experience, I personally represent you at the LIC branch, handle disputes, and escalate to the Insurance Ombudsman if needed â€” a service no online portal provides.'
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                                    <span className="text-primary font-black">Q.</span> {faq.q}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="py-12 px-4 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto max-w-5xl">
                    <h3 className="font-bold text-slate-700 uppercase tracking-widest text-xs mb-6 text-center">Related Expert Guides</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Lapsed Policy Revival Guide', href: '/resources/guides/lapsed-policy-revival' },
                            { title: 'Death Claim Settlement Process', href: '/resources/guides/death-claim-settlement' },
                            { title: 'LIC Maturity Claim & NEFT Setup', href: '/resources/guides/lic-revival-maturity-masterclass' },
                        ].map(guide => (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="group p-5 bg-white border border-slate-100 rounded-2xl hover:border-primary/40 hover:shadow-sm transition-all flex items-center justify-between"
                            >
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{guide.title}</span>
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
