import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, Shield, ArrowRight, HelpCircle, AlertTriangle, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/data/contact';
import LICRevivalClient from '@/components/LICRevivalClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: 'LIC Policy Revival 2026 | Revive Lapsed LIC Policy — Process, Documents & Expert Help'
    },
    description: 'Revive your lapsed LIC policy with expert help. Complete guide to LIC special revival scheme 2026, documents required, Form 680, late fee calculation, and doorstep processing. Free eligibility check by IRDAI-certified advisor.',
    keywords: [
        'LIC Policy Revival Process',
        'Revive Lapsed LIC Policy',
        'LIC Special Revival Scheme 2026',
        'Lapsed Insurance Policy Revival India',
        'LIC Policy Revival Documents Required',
        'How to Revive Old LIC Policy',
        'LIC Revival Late Fee Calculator',
        'LIC Form 680 Revival',
        'LIC Policy Lapsed for 10 Years',
        'Revival of Lapsed Life Insurance Policy',
        'LIC Policy Revival After 5 Years',
        'LIC Policy Revival Online',
        'Lapsed Policy Recovery India',
        'LIC Policy Status Check',
        'LIC Revival Charges Calculator'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/funnels/lic-policy-revival',
    },
    openGraph: {
        title: 'LIC Policy Revival 2026 | Expert Help to Revive Your Lapsed Policy',
        description: 'Revive lapsed LIC policies with expert guidance. Free eligibility check, doorstep processing, and revival scheme advice.',
        type: 'website',
        url: 'https://insurancesupport.online/funnels/lic-policy-revival',
        siteName: 'Insurance Support',
        locale: 'en_IN',
    }
};

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Revive a Lapsed LIC Policy in India (2026)',
    description: 'Step-by-step process for reviving a lapsed LIC life insurance policy, including documents required, fees, and special revival schemes.',
    totalTime: 'P15D',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Check Policy Status',
            text: 'Verify your policy number and current status through the LIC portal or servicing branch. Determine whether the policy has a paid-up value or has completely lapsed.'
        },
        {
            '@type': 'HowToStep',
            name: 'Calculate Revival Amount',
            text: 'Calculate the total arrears (unpaid premiums + interest at 9.5% p.a. compounding). Check if a Special Revival Scheme is available that may reduce the cost.'
        },
        {
            '@type': 'HowToStep',
            name: 'Submit Health Declaration',
            text: 'Complete Form 680 (Declaration of Good Health). Policies with high sum assured or long lapse periods may require a medical examination.'
        },
        {
            '@type': 'HowToStep',
            name: 'Pay Revival Amount',
            text: 'Pay the calculated arrears at the servicing branch via cheque, demand draft, or online payment. Collect the revival confirmation receipt.'
        },
        {
            '@type': 'HowToStep',
            name: 'Policy Reinstated',
            text: 'The policy is restored to its original terms with all accumulated bonuses intact. Risk cover resumes immediately after revival.'
        }
    ]
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can I revive a LIC policy that has been lapsed for 10 years?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, but not through the normal revival process (which allows revival within 5 years). For policies lapsed beyond 5 years, LIC periodically announces Special Revival Schemes (SRS) that shift the commencement date of the policy to a recent date. Under SRS, you pay just one premium at your current age and the policy is revived. Our team monitors these schemes and notifies eligible policyholders immediately when a window opens.'
            }
        },
        {
            '@type': 'Question',
            name: 'How much does it cost to revive a lapsed LIC policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The revival cost consists of: (1) All unpaid premiums from the date of first default, (2) Interest on arrears at approximately 9.5% per annum compounded half-yearly. For a policy with ₹10,000 annual premium lapsed for 3 years, the typical revival cost would be approximately ₹33,000-35,000. Under Special Revival Schemes, you may only need to pay one premium calculated at your current age, which can be significantly cheaper.'
            }
        },
        {
            '@type': 'Question',
            name: 'What documents are required for LIC policy revival?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Required documents include: (1) Original policy bond, (2) Filled Form 680 - Declaration of Good Health, (3) Premium payment cheque or DD, (4) Aadhaar card copy, (5) PAN card copy, (6) Recent passport-size photograph. For policies with sum assured above ₹5 lakhs or lapsed for more than 2 years, a medical examination may be required at LIC\'s panel doctor.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is LIC Special Revival Scheme (SRS)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'LIC Special Revival Scheme is a limited-period window announced periodically by LIC where policyholders can revive very old lapsed policies (5-20+ years) by paying just one premium at their current age. The commencement date of the policy shifts to the revival date. This is often the most cost-effective way to recover value from old policies. LIC typically announces 1-2 SRS windows per year, usually around March and September.'
            }
        },
        {
            '@type': 'Question',
            name: 'Will I lose my bonuses if I revive my lapsed LIC policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Under normal revival (within 5 years), all previously declared bonuses are preserved. Under Special Revival Scheme, bonuses are recalculated from the new commencement date. However, even with SRS, the total value recovered (including future bonuses and risk cover) typically far exceeds the surrender value of the lapsed policy.'
            }
        }
    ]
};

export default function LICRevivalPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />

            {/* Client-Side Interactive Sections (Hero, Process Steps, Quote) */}
            <LICRevivalClient />

            {/* Server-Rendered: Complete Revival Guide */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Complete Guide to LIC Policy Revival in India (2026)</h2>
                    <div className="prose prose-slate prose-lg max-w-none mb-10">
                        <p>
                            A <strong>lapsed LIC policy</strong> doesn&apos;t mean your money is lost. Millions of Indian families have LIC endowment and money-back policies that lapsed due to financial difficulties, job changes, or simple forgetfulness. The good news is that most of these policies can be revived — even if they&apos;ve been lapsed for 10-15 years — through LIC&apos;s various revival options.
                        </p>
                        <p>
                            Our team has successfully revived thousands of policies for clients across India, recovering an estimated <strong>₹50 crores+</strong> in policy value that was otherwise frozen. Whether your policy lapsed 2 years ago or 12 years ago, there is likely a revival path available.
                        </p>
                    </div>
                </div>
            </section>

            {/* Revival Types */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Types of LIC Policy Revival</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Ordinary Revival',
                                timeline: 'Within 5 years of first unpaid premium',
                                desc: 'Pay all arrears + interest (9.5% p.a. compounded). Submit Form 680 (Declaration of Good Health). All previous bonuses are preserved. This is the most straightforward and beneficial revival method.',
                                color: 'green'
                            },
                            {
                                title: 'Special Revival Scheme (SRS)',
                                timeline: 'Beyond 5 years — during LIC-announced windows',
                                desc: 'Pay just one premium calculated at your current age. Commencement date shifts to revival date. Bonuses recalculated. Best for very old lapsed policies (5-20+ years). LIC announces 1-2 windows per year.',
                                color: 'blue'
                            },
                            {
                                title: 'Installment Revival',
                                timeline: 'Within 5 years, large arrears',
                                desc: 'If the total arrears are substantial, LIC may allow payment in installments. You pay a portion upfront and the remaining in 2-3 installments over 6 months. Policy is revived once the first installment is paid.',
                                color: 'amber'
                            },
                            {
                                title: 'Loan-cum-Revival',
                                timeline: 'When policy has sufficient surrender value',
                                desc: 'A loan is taken against the policy\'s existing surrender value to cover part of the revival arrears. The remaining amount is paid out-of-pocket. This reduces the immediate cash outflow for revival.',
                                color: 'purple'
                            },
                        ].map((type, i) => (
                            <div key={i} className={`p-6 bg-white rounded-2xl border border-${type.color}-100 shadow-sm`}>
                                <div className={`text-xs font-bold text-${type.color}-700 bg-${type.color}-50 px-3 py-1 rounded-full inline-block mb-3`}>{type.timeline}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Documents Required for LIC Policy Revival</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Keep these documents ready for the revival process. Our team collects them from your doorstep — you don&apos;t need to visit any LIC branch.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { doc: 'Original Policy Bond', note: 'The physical policy document issued by LIC', required: true },
                            { doc: 'Form 680 — Health Declaration', note: 'Self-declaration of good health (we help fill it)', required: true },
                            { doc: 'Premium Payment (Cheque/DD)', note: 'Arrears amount as calculated by the branch', required: true },
                            { doc: 'Aadhaar Card Copy', note: 'For identity verification and KYC compliance', required: true },
                            { doc: 'PAN Card Copy', note: 'Required for TDS compliance on maturity proceeds', required: true },
                            { doc: 'Passport-Size Photo', note: 'Recent color photograph of the policyholder', required: true },
                            { doc: 'Medical Examination Report', note: 'Only for sum assured > ₹5 lakhs or lapse > 2 years', required: false },
                            { doc: 'Cancelled Cheque', note: 'For NEFT mandate to receive future payments', required: false },
                            { doc: 'Premium Payment History', note: 'Bank statements showing previous premium payments', required: false },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-start gap-2 mb-1">
                                    <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <h4 className="font-bold text-slate-900 text-sm">{item.doc}</h4>
                                </div>
                                <p className="text-xs text-slate-500 pl-6">{item.note}</p>
                                <span className={`text-[10px] font-bold mt-2 inline-block pl-6 ${item.required ? 'text-red-600' : 'text-slate-400'}`}>
                                    {item.required ? 'MANDATORY' : 'IF APPLICABLE'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Mistakes to Avoid During Revival</h2>
                    <div className="space-y-4">
                        {[
                            { mistake: 'Surrendering instead of reviving', detail: 'Many families surrender their lapsed policy for a fraction of its value. The surrender value is typically 30-40% of the total premiums paid. Revival preserves 100% of your investment plus accumulated bonuses.' },
                            { mistake: 'Missing Special Revival Scheme windows', detail: 'LIC announces SRS campaigns 1-2 times per year. These windows are typically open for 60-90 days. Missing them means waiting 6-12 months for the next opportunity. We track and notify all eligible policyholders.' },
                            { mistake: 'Incorrect health declaration on Form 680', detail: 'If you have developed health conditions since the policy lapsed, you must declare them honestly. Non-disclosure becomes grounds for future claim rejection. We help you structure the declaration accurately.' },
                            { mistake: 'Paying at the wrong branch', detail: 'Revival payments must be made at the servicing branch (the branch where your policy is assigned). Payments at other branches cause processing delays. We verify the correct branch before submission.' },
                        ].map((item, i) => (
                            <div key={i} className="p-5 bg-white rounded-xl border border-amber-100 flex gap-4">
                                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.mistake}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About LIC Revival</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Can I revive a LIC policy lapsed for 10+ years?', a: 'Yes, but only through LIC\'s Special Revival Scheme (SRS), which is announced periodically. Under SRS, you pay one premium at your current age and the commencement date shifts to the revival date. We monitor and notify eligible policyholders when windows open.' },
                            { q: 'How much does it cost to revive a lapsed LIC policy?', a: 'Under normal revival: all unpaid premiums + 9.5% compound interest. For example, a ₹10,000 annual premium lapsed 3 years costs roughly ₹33,000-35,000. Under SRS, you pay just one premium at current age — often significantly cheaper.' },
                            { q: 'What is LIC Form 680?', a: 'Form 680 is the Declaration of Good Health that LIC requires during revival. It asks about your current health conditions, lifestyle habits, and recent medical history. For policies with high sum assured or long lapse periods, LIC may require a physical medical exam instead.' },
                            { q: 'Will I lose my bonuses after revival?', a: 'Under normal revival (within 5 years), all previously declared bonuses are preserved. Under SRS, bonuses are recalculated from the new commencement date. However, the total recovered value still typically exceeds the surrender value significantly.' },
                            { q: 'How long does the LIC revival process take?', a: 'With our doorstep service: 5-10 working days from document submission to policy reinstatement. Without our support, the branch process can take 15-30 days due to queues, paperwork errors, and medical exam scheduling.' },
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
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
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Don&apos;t Let Your LIC Investment Go to Waste</h2>
                                <p className="text-blue-100 text-lg leading-relaxed">
                                    Your lapsed policy still holds value — accumulated bonuses, accrued benefits, and the promise of future returns. Get a free eligibility check and revival cost estimate from our expert team. We&apos;ve revived policies lapsed for 5, 10, even 15+ years.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg h-14 px-8 font-bold" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Free Revival Check: +91 99866 34506
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/resources/guides/lapsed-policy-revival">
                                        Read Full Revival Guide <ArrowRight className="ml-2 h-5 w-5" />
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
