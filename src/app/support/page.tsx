import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, FileText, ShieldCheck, RefreshCw, Search, AlertTriangle, CheckCircle2, Clock, ArrowRight, HelpCircle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from '@/components/QuoteForm';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Support Center — Claim Recovery, Document Help & Policy Services | Insurance Support'
    },
    description: 'Get expert help for stuck insurance claims, rejected health insurance appeals, LIC policy revival, lost document recovery, and Ombudsman complaint filing. Free case assessment by certified advisors with 25+ years of experience.',
    keywords: [
        'Insurance Claim Support Center',
        'Policy Renewal Help India',
        'Insurance Complaint Resolution',
        'Stuck Insurance Claim Help India',
        'Insurance Document Support',
        'Rejected Claim Appeal Help',
        'LIC Policy Revival Support',
        'Insurance Ombudsman Filing Help',
        'Lost Policy Bond Recovery',
        'Health Insurance TPA Support',
        'Insurance Claim Follow Up',
        'Insurance Grievance Redressal Help'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/support',
    },
    openGraph: {
        title: 'Insurance Support Center | Expert Claim Recovery & Policy Help',
        description: 'Free case assessment for stuck claims, rejected appeals, lapsed policies, and lost documents. 25+ years of experience.',
        type: 'website',
        url: 'https://insurancesupport.online/support',
        siteName: 'Insurance Support',
        locale: 'en_IN',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What should I do if my insurance claim has been stuck for months?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If your claim hasn\'t been resolved within 30 days, it\'s likely stuck in the insurer\'s internal process. Contact us with your claim reference number and we\'ll escalate it through the Grievance Redressal Officer (GRO), IRDAI Bima Bharosa, or the Insurance Ombudsman depending on the severity and duration of the delay.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can you help with a claim that was rejected years ago?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Insurance Ombudsman accepts complaints within one year of the insurer\'s final response. However, IRDAI has no time limit for regulatory complaints. For very old cases (2+ years), consumer court remedies are also available. We assess every case individually to determine the best recovery route.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I file a complaint against my insurance company?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The process involves three levels: (1) Internal Grievance to the insurer\'s GRO — 15-day response window, (2) IRDAI Bima Bharosa portal at igms.irda.gov.in, and (3) Insurance Ombudsman — a zero-cost, semi-judicial body. We handle the entire complaint filing and documentation process on your behalf.'
            }
        },
        {
            '@type': 'Question',
            name: 'What documents do I need for claim support?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The required documents vary by case: For health claims — policy copy, rejection letter, discharge summary, medical bills, and payment receipts. For death claims — death certificate, policy bond, nominee ID, post-mortem report (if applicable). For revival — policy number, premium payment history, and health declaration form. Don\'t worry if you\'re missing documents — we help locate and collect them.'
            }
        }
    ]
};

export default function SupportPage() {
    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <ShieldCheck className="h-4 w-4" />
                            Expert-Led Support Center
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Insurance <span className="text-primary italic">Support Center</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                            Your claim is stuck, rejected, or delayed? A policy lapsed years ago? Documents lost or misplaced? Our dedicated support center handles the toughest insurance problems that call centers and portals can&apos;t solve. Backed by 25+ years of experience and ₹50Cr+ in successful recoveries.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: '2 Hrs', label: 'Avg Response Time' },
                                { value: '₹50Cr+', label: 'Claims Recovered' },
                                { value: '98%', label: 'Resolution Rate' },
                                { value: 'Free', label: 'Case Assessment' },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Categories */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Support Category</h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-3xl leading-relaxed">
                        Select the area where you need help. Each category is handled by specialized advisors who deal with these exact scenarios daily — not generic call center agents.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: AlertTriangle,
                                title: 'Claim Rejected or Denied',
                                desc: 'Your health, life, or motor insurance claim was rejected citing non-disclosure, waiting period, or policy exclusion. We analyze the rejection letter, identify appeal grounds, and represent you at the Ombudsman level.',
                                color: 'red',
                                link: '/resources/guides/claim-rejection-appeal'
                            },
                            {
                                icon: Clock,
                                title: 'Claim Stuck or Delayed',
                                desc: 'Your claim has been pending for weeks or months with no resolution. We escalate through the insurer\'s GRO, IRDAI Bima Bharosa portal, and Insurance Ombudsman to force a timeline.',
                                color: 'amber',
                                link: '/resources/how-it-works'
                            },
                            {
                                icon: RefreshCw,
                                title: 'Lapsed Policy Revival',
                                desc: 'Revive LIC or private life insurance policies lapsed for 2–15+ years. We identify Special Revival Scheme windows, handle Form 680, and manage the entire branch process.',
                                color: 'blue',
                                link: '/resources/guides/lapsed-policy-revival'
                            },
                            {
                                icon: Search,
                                title: 'Lost Documents & Policy Recovery',
                                desc: 'Lost your policy bond, maturity intimation, or premium receipts? We handle duplicate policy issuance, indemnity bond drafting, newspaper ad coordination, and branch submissions.',
                                color: 'purple',
                                link: '/resources/guides/lapsed-policy-revival'
                            },
                            {
                                icon: Scale,
                                title: 'IRDAI Complaint & Ombudsman Filing',
                                desc: 'Need to take your dispute to a higher authority? We prepare Annexure VI-A documentation for Ombudsman admission and file regulatory complaints on the IRDAI Bima Bharosa portal.',
                                color: 'teal',
                                link: '/resources/guides/irdai-complaint-portal-guide'
                            },
                            {
                                icon: FileText,
                                title: 'Policy Renewal & Premium Support',
                                desc: 'Missed your renewal deadline? Premium too high? Need to switch insurers without losing benefits? We handle renewals, port health insurance, and optimize your premium without reducing coverage.',
                                color: 'green',
                                link: '/services'
                            },
                        ].map((cat, i) => (
                            <Link key={i} href={cat.link} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all">
                                <div className={`w-12 h-12 bg-${cat.color}-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <cat.icon className={`h-6 w-6 text-${cat.color}-600`} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">{cat.desc}</p>
                                <span className="text-primary text-sm font-bold flex items-center gap-1">
                                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Get Help - Step Process */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Get Support — 3 Simple Steps</h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                We&apos;ve simplified the process so you can get expert help without the bureaucratic runaround. Here&apos;s what happens when you reach out to our support center.
                            </p>
                            <div className="space-y-8">
                                {[
                                    {
                                        step: '1',
                                        title: 'Describe Your Problem',
                                        desc: 'Call us, WhatsApp, or fill the support form with a brief description of your insurance issue. Include your policy number if available — but it\'s not mandatory at this stage.',
                                        detail: 'Response within 2 hours during business hours'
                                    },
                                    {
                                        step: '2',
                                        title: 'Free Expert Assessment',
                                        desc: 'A specialized advisor (not a bot) reviews your case, analyzes documents, and provides a clear diagnosis: what went wrong, what your options are, and realistic timelines for resolution.',
                                        detail: 'Case assessment delivered within 24 hours'
                                    },
                                    {
                                        step: '3',
                                        title: 'We Take Over From Here',
                                        desc: 'Once you approve the plan, we handle everything — document collection, branch visits, TPA coordination, grievance filing, and Ombudsman representation. You stay informed via regular status updates.',
                                        detail: 'Zero branch visits required from you'
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">{item.step}</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed mb-2">{item.desc}</p>
                                            <span className="text-xs text-primary font-bold bg-primary/5 px-3 py-1 rounded-full">{item.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Support Form */}
                        <div className="lg:w-[420px]">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Support Request</h3>
                                    <p className="text-sm text-slate-500 mb-6">Describe your issue and an expert advisor will call you within 2 hours.</p>
                                    <QuoteForm insuranceType="support_request" />
                                </div>
                                <div className="bg-slate-900 text-white rounded-2xl p-6">
                                    <h4 className="font-bold text-lg mb-3">Prefer to Talk?</h4>
                                    <p className="text-slate-400 text-sm mb-4">Skip the form and speak directly to an insurance expert.</p>
                                    <div className="space-y-3">
                                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-12" asChild>
                                            <a href={`tel:${contactConfig.phoneFull}`}>
                                                <Phone className="mr-2 h-5 w-5" />
                                                Call +91 99866 34506
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full h-12 text-white border-white/20 hover:bg-white/10" asChild>
                                            <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                                <MessageCircle className="mr-2 h-5 w-5" />
                                                WhatsApp Us
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Common Support Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'What should I do if my claim has been stuck for months?',
                                a: 'If your claim hasn\'t been resolved within 30 days, it\'s likely stuck in the insurer\'s process. Contact us with your claim reference number and we\'ll escalate through the Grievance Redressal Officer (GRO), IRDAI Bima Bharosa, or the Insurance Ombudsman depending on the severity.'
                            },
                            {
                                q: 'Can you help with a claim that was rejected years ago?',
                                a: 'Yes. The Insurance Ombudsman accepts complaints within one year of the insurer\'s final response. For very old cases (2+ years), consumer court remedies are available. We assess every case individually to determine the best recovery route.'
                            },
                            {
                                q: 'How do I file a complaint against my insurance company?',
                                a: 'The process involves three levels: (1) Internal Grievance to the insurer\'s GRO — 15-day response window, (2) IRDAI Bima Bharosa portal, and (3) Insurance Ombudsman — a zero-cost, semi-judicial body. We handle the entire process on your behalf.'
                            },
                            {
                                q: 'What documents do I need for claim support?',
                                a: 'Requirements vary by case: For health claims — policy copy, rejection letter, discharge summary, and bills. For death claims — death certificate, policy bond, and nominee ID. For revival — policy number and premium history. Don\'t worry if you\'re missing documents — we help locate them.'
                            },
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

            {/* Helpful Resources */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Helpful Resources</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Claim Rejection Appeal Guide', desc: 'Step-by-step process to reverse a rejected health or life insurance claim.', href: '/resources/guides/claim-rejection-appeal' },
                            { title: 'Lapsed Policy Revival Guide', desc: 'How to recover frozen value from LIC policies lapsed for 5–15+ years.', href: '/resources/guides/lapsed-policy-revival' },
                            { title: 'IRDAI Complaint Portal Guide', desc: 'Complete walkthrough of filing complaints on the IRDAI Bima Bharosa portal.', href: '/resources/guides/irdai-complaint-portal-guide' },
                            { title: 'Death Claim Settlement Guide', desc: 'Documents, process, and timelines for life insurance death claim settlement.', href: '/resources/guides/death-claim-settlement' },
                            { title: 'Cashless Hospitalization Guide', desc: 'How to avail cashless claims at network hospitals without delays.', href: '/resources/guides/cashless-hospitalization-guide' },
                            { title: 'Lost LIC Policy Recovery', desc: 'Recover lost policy bonds, get duplicates issued, and access frozen maturity funds.', href: '/resources/guides/lapsed-policy-revival' },
                        ].map((resource, i) => (
                            <Link key={i} href={resource.href} className="group p-5 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{resource.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{resource.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
