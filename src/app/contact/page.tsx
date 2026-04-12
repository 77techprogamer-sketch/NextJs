import React from 'react';
import { Metadata } from 'next';
import SupportClient from '@/components/SupportClient';
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: {
        absolute: 'Contact Insurance Advisor India | Call, WhatsApp & Free Consultation — Insurance Support'
    },
    description: 'Contact our IRDAI-certified insurance advisors for free expert help with claims, policy revival, health insurance disputes, and new policy quotes. Call +91 99866 34506 or WhatsApp us. Response within 2 hours.',
    keywords: [
        'Contact Insurance Advisor India',
        'Insurance Helpline Number',
        'Insurance Claim Help Contact',
        'Call Insurance Agent Near Me',
        'Insurance Support WhatsApp Number',
        'Insurance Advisor Phone Number India',
        'Free Insurance Consultation India',
        'Insurance Customer Support Number',
        'LIC Agent Contact Number',
        'Health Insurance Advisor Contact',
        'Insurance Complaint Helpline',
        'Insurance Support Bangalore Contact'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/contact',
    },
    openGraph: {
        title: 'Contact Insurance Support | Free Expert Consultation',
        description: 'Reach our certified insurance advisors for claim recovery, policy help, and free quotes. Call +91 99866 34506.',
        type: 'website',
        url: 'https://insurancesupport.online/contact',
        siteName: 'Insurance Support',
        locale: 'en_IN',
    },
};

const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
        '@type': 'InsuranceAgency',
        '@id': 'https://insurancesupport.online/#organization',
        name: 'Insurance Support',
        url: 'https://insurancesupport.online',
        telephone: contactConfig.phoneFull,
        email: contactConfig.email,
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: contactConfig.phoneFull,
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi', 'Kannada'],
                hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    opens: '09:00',
                    closes: '20:00'
                }
            }
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bahubali Nagar, Jalahalli',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560013',
            addressCountry: 'IN'
        }
    }
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How quickly will I get a response after contacting Insurance Support?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We respond to all inquiries within 2 hours during business hours (Mon–Sat, 9 AM – 8 PM IST). For urgent claim-related emergencies like hospitalization, we provide immediate phone support.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is the initial consultation really free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, absolutely. Your first consultation — whether by phone, WhatsApp, video call, or in-person — is completely free with zero obligation. We assess your situation, explain your options, and only proceed if you choose to.'
            }
        },
        {
            '@type': 'Question',
            name: 'What information should I have ready before calling?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For the most productive consultation, keep the following handy: your policy number, any rejection or delay letters from the insurer, medical records (for health claims), and your Aadhaar/PAN for KYC. If you don\'t have these, don\'t worry — we can help locate lost documents too.'
            }
        },
        {
            '@type': 'Question',
            name: 'Do you provide support across India or only in Bangalore?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'While our physical office is in Bangalore, we provide full remote support across India via phone, WhatsApp, and video calls. We have successfully handled claim recoveries and policy services for clients in Mumbai, Delhi, Hyderabad, Chennai, Pune, Kolkata, and 25+ other cities.'
            }
        }
    ]
};

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <Phone className="h-4 w-4" />
                            Available Mon–Sat, 9 AM – 8 PM IST
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Contact Our <span className="text-primary italic">Insurance Experts</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                            Get free, no-obligation advice from IRDAI-certified insurance advisors with 25+ years of experience. Whether you need help with a rejected claim, a lapsed LIC policy, health insurance dispute, or want to buy a new policy — we respond within 2 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <a href={`tel:${contactConfig.phoneFull}`} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                <Phone className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                            <p className="text-primary font-bold text-lg">+91 99866 34506</p>
                            <p className="text-xs text-slate-500 mt-1">Tap to call directly</p>
                        </a>
                        <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-green-500/20 transition-all text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                            <p className="text-green-600 font-bold text-lg">Chat Now</p>
                            <p className="text-xs text-slate-500 mt-1">Instant messaging support</p>
                        </a>
                        <a href={`mailto:${contactConfig.email}`} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-500/20 transition-all text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                            <p className="text-blue-600 font-bold text-sm">{contactConfig.email}</p>
                            <p className="text-xs text-slate-500 mt-1">For detailed inquiries</p>
                        </a>
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Office</h3>
                            <p className="text-slate-600 text-sm">Bahubali Nagar, Jalahalli</p>
                            <p className="text-xs text-slate-500 mt-1">Bengaluru, KA 560013</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Help With */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What Can We Help You With?</h2>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-3xl">
                        Our advisors handle the full spectrum of insurance needs. Contact us for any of the following — your first consultation is always free.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            'Rejected health insurance claim appeal',
                            'LIC death claim denial or delay',
                            'Lapsed policy revival (5–15+ years old)',
                            'Lost policy bond recovery & duplicate issuance',
                            'New life, health, or term insurance quotes',
                            'Motor insurance claim dispute resolution',
                            'LIC maturity settlement & TDS queries',
                            'IRDAI complaint & Ombudsman filing',
                            'Corporate group health insurance claims',
                            'Policy loan against LIC or life insurance',
                            'Cashless hospitalization assistance',
                            'Annual policy portfolio health check-up'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What to Expect + Interactive Form */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Happens After You Contact Us?</h2>
                            <div className="space-y-6">
                                {[
                                    { step: '1', title: 'We Respond Within 2 Hours', desc: 'A qualified insurance advisor — not a call center — calls you back to understand your situation in detail.' },
                                    { step: '2', title: 'Free Case Assessment', desc: 'We review your policy documents, rejection letters, or coverage needs and provide a clear action plan with realistic timelines.' },
                                    { step: '3', title: 'You Decide, No Pressure', desc: 'Our consultation is 100% free with zero obligation. If you choose to proceed, we handle all paperwork and branch visits on your behalf.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    <strong>Monday – Saturday:</strong> 9:00 AM – 8:00 PM IST<br />
                                    <strong>Sunday:</strong> Emergency claim support only<br />
                                    <strong>Languages:</strong> English, Hindi, Kannada, Tulu
                                </p>
                            </div>
                        </div>

                        {/* Interactive Form Section */}
                        <div className="lg:w-[480px]">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us Your Query</h3>
                                <p className="text-slate-500 text-sm mb-6">Fill this form and an expert advisor will contact you within 2 hours.</p>
                                <SupportClient />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Areas We Serve Across India</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        While our office is in Bengaluru, we provide full insurance advisory and claim recovery support across all major cities in India through phone, WhatsApp, and video consultations. Our doorstep service is available across Bangalore Urban.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { region: 'Karnataka', cities: 'Bangalore, Mysore, Mangalore, Hubli' },
                            { region: 'Maharashtra', cities: 'Mumbai, Pune, Nagpur, Thane' },
                            { region: 'Tamil Nadu', cities: 'Chennai, Coimbatore, Madurai' },
                            { region: 'Telangana & AP', cities: 'Hyderabad, Vizag, Vijayawada' },
                            { region: 'Delhi NCR', cities: 'Delhi, Noida, Gurgaon, Faridabad' },
                            { region: 'West Bengal', cities: 'Kolkata, Howrah, Siliguri' },
                            { region: 'Gujarat', cities: 'Ahmedabad, Surat, Vadodara' },
                            { region: 'Kerala', cities: 'Kochi, Thiruvananthapuram, Kozhikode' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.region}</h4>
                                <p className="text-xs text-slate-500">{item.cities}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/locations" className="text-primary text-sm font-bold hover:underline">
                            View All Locations We Serve →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About Contacting Us</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How quickly will I get a response?', a: 'We respond to all inquiries within 2 hours during business hours (Mon–Sat, 9 AM – 8 PM IST). For urgent claim emergencies like hospitalization, we provide immediate phone support.' },
                            { q: 'Is the initial consultation really free?', a: 'Yes, absolutely. Your first consultation — whether by phone, WhatsApp, video call, or in-person — is completely free with zero obligation. We assess your situation, explain options, and only proceed if you choose to.' },
                            { q: 'What information should I have ready before calling?', a: 'For the best consultation, keep handy: your policy number, rejection/delay letters from the insurer, medical records (for health claims), and Aadhaar/PAN for KYC. Don\'t worry if you\'re missing documents — we help locate lost paperwork too.' },
                            { q: 'Do you provide support across India or only Bangalore?', a: 'While our physical office is in Bangalore, we provide full remote support across India via phone, WhatsApp, and video calls. We\'ve handled claim recoveries for clients in Mumbai, Delhi, Hyderabad, Chennai, Pune, Kolkata, and 25+ other cities.' },
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Don&apos;t Let Your Claim Slip Away</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Every day you wait, the insurance company gets further from settling your claim. Talk to an expert today — the consultation is free, and we&apos;ve recovered ₹50Cr+ for families just like yours.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call Now: +91 99866 34506
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        WhatsApp Us
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
