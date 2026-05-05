import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, FileText, Phone, ShieldCheck, Users, ArrowRight, MessageSquare } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'How It Works — Our 4-Phase Claim Recovery & Policy Support Process | Insurance Support',
    description: 'Understand our transparent, proven 4-phase process for buying insurance, recovering rejected claims, and reviving lapsed policies. Free consultation with 25+ years of expertise.',
    keywords: [
        'insurance claim process India',
        'how insurance support works',
        'claim recovery process steps',
        'insurance advisor consultation',
        'rejected claim help process',
        'policy revival steps India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/how-it-works'
    }
};

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Insurance Support Works — 4-Phase Process',
    description: 'Our proven 4-phase process for insurance advisory, claim recovery, and policy management in India.',
    totalTime: 'P30D',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Free Consultation & Assessment',
            text: 'We start with a complete review of your current situation through a doorstep or video call consultation, policy document review, and claim rejection letter analysis.'
        },
        {
            '@type': 'HowToStep',
            name: 'Strategy & Paperwork',
            text: 'We handle all the heavy lifting — gathering documents, communicating with hospitals, TPAs, and insurance companies, and drafting medical representations for appeals.'
        },
        {
            '@type': 'HowToStep',
            name: 'Escalation & Follow-up',
            text: 'If a claim is delayed or denied, we escalate it through the Grievance Redressal Officer, IRDAI Bima Bharosa, or the Insurance Ombudsman until resolution.'
        },
        {
            '@type': 'HowToStep',
            name: 'Success & Settlement',
            text: 'You receive your claim money directly in your bank account. For new policies, you receive your confirmed bond and our lifetime support promise.'
        }
    ]
};

export default function HowItWorksPage() {
    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            How It <span className="text-primary italic">Works</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
                            Our simple, transparent process guarantees you never fight the insurance system alone. Whether you need a new policy, want to recover a rejected claim, or revive an old investment — we follow a proven 4-phase methodology refined over 25 years and 15,000+ successful cases.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: '98%', label: 'Claim Settlement Ratio' },
                                { value: '₹50Cr+', label: 'Recovered for Families' },
                                { value: '15,000+', label: 'Clients Served' },
                                { value: '25+ Yrs', label: 'Industry Experience' },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center md:text-left">
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4-Phase Process */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="space-y-16">
                        {/* Phase 1 */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-16 shrink-0">
                                <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 1: Free Consultation & Assessment</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Every engagement starts with a thorough, no-obligation assessment. We sit down with you — either at your doorstep, office, or via a secure video call — to understand your specific situation. Whether you are exploring a new policy, confused by a rejection letter, or wondering if your old LIC investment can be salvaged, this phase gives us the complete picture.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        'Doorstep or Video Call consultation at your convenience',
                                        'Comprehensive review of all existing policy documents',
                                        'Claim rejection letter analysis and clause identification',
                                        'Family risk profiling and coverage gap assessment',
                                        'Preliminary feasibility report within 24 hours'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Clock className="h-4 w-4" />
                                    <span>Typical duration: 30–60 minutes | Cost: ₹0 (Always Free)</span>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-16 shrink-0">
                                <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 2: Strategy & Paperwork</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    This is where our 25 years of experience shows. We take over the entire operational burden — gathering the correct documents, communicating directly with hospitals, TPAs (Third Party Administrators), and insurance companies on your behalf. For claim appeals, we draft legally sound medical representations that address the exact clauses cited in the rejection.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        'Document collection from your home — no branch visits for you',
                                        'Direct coordination with hospital billing and TPA desks',
                                        'Drafting of medical necessity certificates and appeal letters',
                                        'Form filling (3783, 3825, 680, etc.) with error-free accuracy',
                                        'Cross-verification of policy terms against IRDAI guidelines'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Clock className="h-4 w-4" />
                                    <span>Typical duration: 3–7 working days depending on complexity</span>
                                </div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-16 shrink-0">
                                <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 3: Escalation & Follow-up</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    If a claim is delayed beyond the stipulated timeframe or outright denied, we activate our three-tier escalation protocol. Unlike a call center that reads a script, our advisors understand the internal decision-making hierarchy of each major insurer — from the Claims Manager to the Zonal Head — and know exactly which level of escalation will produce results fastest.
                                </p>
                                <div className="space-y-4 mb-6">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">Tier 1: Internal Grievance (GRO)</h4>
                                        <p className="text-sm text-slate-600">Formal complaint to the insurer&apos;s Grievance Redressal Officer. Legally mandated 15-day response window.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">Tier 2: IRDAI Bima Bharosa</h4>
                                        <p className="text-sm text-slate-600">Regulatory escalation through the IRDAI portal, putting direct pressure on the insurer to resolve the dispute.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">Tier 3: Insurance Ombudsman</h4>
                                        <p className="text-sm text-slate-600">Semi-judicial, zero-cost hearing. We prepare all documentation including the critical &apos;Annexure VI-A&apos; submission.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Clock className="h-4 w-4" />
                                    <span>Resolution timeline: 15 days (Tier 1) to 6 months (Ombudsman)</span>
                                </div>
                            </div>
                        </div>

                        {/* Phase 4 */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-16 shrink-0">
                                <div className="h-14 w-14 rounded-2xl bg-green-600 text-white flex items-center justify-center font-bold text-xl">4</div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 4: Success & Settlement</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    The finish line. Your claim money is credited directly to your bank account via NEFT/RTGS — you never have to visit a branch. For new policy purchases, you receive your confirmed policy bond along with our lifetime support commitment. We don&apos;t disappear after the sale; we stay on as your dedicated insurance advisor for all future needs including renewals, additional coverage, and any future claim events.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        'Direct bank credit — no intermediary cheques',
                                        'Complete settlement receipt and documentation',
                                        'Lifetime advisory support for renewals and services',
                                        'Annual policy health check-up (for active clients)'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Need */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What You&apos;ll Need to Get Started</h2>
                    <p className="text-slate-600 mb-10 max-w-2xl">
                        To make the initial consultation as productive as possible, keep these handy. Don&apos;t worry if you&apos;re missing something — we help locate lost documents too.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Policy Bond or Number', desc: 'The original policy document or at least the 9–10 digit policy number for any LIC or private insurer policy.' },
                            { title: 'Rejection / Delay Letter', desc: 'If your claim was rejected or delayed, the official communication from the insurer citing the reason and clause.' },
                            { title: 'Medical Records', desc: 'Hospitalization discharge summaries, diagnostic reports, and treating doctor prescriptions relevant to the claim.' },
                            { title: 'ID & KYC Documents', desc: 'Aadhaar card, PAN card, and a cancelled cheque of the bank account where you want the settlement credited.' },
                            { title: 'Premium Payment Proof', desc: 'Bank statements or receipts showing premium payment history — helpful for lapsed policy revival assessments.' },
                            { title: 'Death Certificate (if applicable)', desc: 'For death claim cases, the original death certificate issued by the local municipal body (5 copies recommended).' },
                        ].map((doc, i) => (
                            <div key={i} className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <FileText className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold text-slate-900">{doc.title}</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Common Questions About Our Process</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="faq-1">
                            <AccordionTrigger className="text-left font-semibold">Is the initial consultation really free?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                Yes, always. The first consultation — whether in person or via video call — is completely free with no obligation. We assess your case, explain your options, and provide a preliminary feasibility report. You decide whether to proceed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                            <AccordionTrigger className="text-left font-semibold">How long does the entire process take from start to settlement?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                It depends on the case type. Simple maturity claims or policy revivals typically resolve in 10–15 working days. Rejected claim appeals through the internal grievance channel take 15–30 days. Ombudsman escalations can take 4–6 months. We keep you informed at every stage with regular status updates.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                            <AccordionTrigger className="text-left font-semibold">Do I need to visit any insurance office or branch?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                <p>No. That is one of our core value propositions. We handle all branch visits, document submissions, and liaison work on your behalf. You stay at home or at your office while we manage the entire process end to end.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-4">
                            <AccordionTrigger className="text-left font-semibold">What types of insurance cases do you handle?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                We handle the full spectrum: LIC maturity claims, death claim settlements, health insurance rejections, motor insurance disputes, lapsed policy revivals, new policy advisory, and corporate/SME group insurance. Our expertise spans both public-sector (LIC, NIC) and private insurers (Star Health, HDFC ERGO, ICICI Prudential, and more).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-5">
                            <AccordionTrigger className="text-left font-semibold">What if my case seems hopeless — can you still help?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                Many of our most successful recoveries were cases that clients believed were lost causes. A claim rejected 2 years ago, a policy lapsed for 10+ years, or a death claim denied for alleged non-disclosure — we have reversed all of these through proper documentation, regulatory escalation, and deep knowledge of IRDAI guidelines. Let us assess it before you give up.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary/5 border-t border-primary/10">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to Get Started?</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Your first step is a free consultation. No paperwork needed upfront — just tell us your situation and we&apos;ll guide you from there.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all gap-2">
                            <MessageSquare className="h-5 w-5" />
                            Book Free Consultation
                        </Link>
                        <a href={`tel:${contactConfig.phoneFull}`} className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all gap-2">
                            <Phone className="h-5 w-5" />
                            Call +91 99866 34506
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
