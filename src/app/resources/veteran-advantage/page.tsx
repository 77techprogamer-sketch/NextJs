import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, AlertTriangle, Award, Users, TrendingUp, Phone, MessageSquare, Scale, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from '@/components/QuoteForm';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'The Veteran Advantage — Why 25+ Years of Insurance Experience Matters | Insurance Support',
    description: 'Discover why 25+ years of IRDAI-certified experience makes the difference between a rejected claim and a successful recovery. Learn how veteran expertise protects your financial future.',
    keywords: [
        'experienced insurance advisor India',
        'IRDAI certified advisor benefits',
        'veteran insurance expert',
        'insurance claim specialist experience',
        'why choose experienced insurance advisor',
        'insurance advisor vs online portal'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/veteran-advantage'
    }
};

export default function VeteranAdvantagePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <Award className="h-4 w-4" />
                            Why Experience Matters
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            The <span className="text-primary italic">Veteran</span> Advantage
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl">
                            Over two decades of battling insurance technicalities, winning rejected claims, and securing families. In the insurance industry, experience is not a luxury — it is the difference between a Rs. 0 payout and the full settlement your family deserves.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: '25+', label: 'Years of Active Practice' },
                                { value: '15,000+', label: 'Clients Served' },
                                { value: '₹50Cr+', label: 'Claims Managed' },
                                { value: '98%', label: 'Settlement Ratio' },
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

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="flex-1 max-w-4xl">
                        {/* Section 1 */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                25+ Years of Trust & Knowledge
                            </h2>
                            <div className="prose prose-slate prose-lg max-w-none">
                                <p>
                                    Insurance Support is built on the foundation of deep, battle-tested knowledge. Our senior advisors have seen every type of policy variation, exclusion clause, and TPA delay tactic since the late 90s. We&apos;ve witnessed the evolution from physical proposal forms to digital underwriting — and we understand both systems intimately.
                                </p>
                                <p>
                                    When you work with us, you aren&apos;t just buying a policy from a portal; you are gaining a lifelong advocate who knows how to navigate the complex corporate structures of LIC, Star Health, HDFC ERGO, Care Health, ICICI Prudential, and more. We have direct working relationships with Branch Managers, Development Officers, and Claims Processing Units across Karnataka, Maharashtra, Tamil Nadu, and Telangana.
                                </p>
                                <p>
                                    Consider this real-world scenario: a family in Bangalore approached us after their father&apos;s LIC death claim was rejected citing &quot;non-disclosure of diabetes.&quot; The policy was just 2.5 years old. Most agents would have walked away. Our team reviewed the original proposal form, found that the agent (not our client) had filled it incorrectly, drafted a detailed medical representation proving the non-materiality of the condition, and successfully reversed the rejection through the Ombudsman within 4 months. The family received ₹25 lakhs.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Inside Knowledge of Underwriting & Claims
                            </h2>
                            <div className="prose prose-slate prose-lg max-w-none mb-8">
                                <p>
                                    Because we know how underwriters think, we structure your applications to minimize the risk of future claim rejections. We know exactly which medical documents to submit and how to declare pre-existing conditions safely — without triggering unnecessary exclusions or premium loading.
                                </p>
                                <p>
                                    Most policyholders don&apos;t realize that the way a proposal form is filled determines whether a claim gets paid 20 years later. A careless tick-mark, an ambiguous diagnosis description, or a missing lifestyle habit disclosure can all become ammunition for an insurer to reject a genuine claim. Our expertise ensures your application is airtight from day one.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Pre-Existing Condition Strategy', desc: 'We help you declare conditions transparently while structuring the disclosure to minimize premium loading and exclusion risk.' },
                                    { title: 'Proposal Form Accuracy', desc: 'Every field is filled with precision. We review each answer to ensure it matches hospital records and won\'t contradict future claims.' },
                                    { title: 'Underwriter Rapport', desc: 'We know the underwriting standards of major insurers and present applications in the format they prefer — reducing processing time.' },
                                    { title: 'Sum Assured Optimization', desc: 'We calculate the right coverage amount based on your actual income, liabilities, and family structure — not a generic formula.' },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                The Ombudsman & Escalation Ecosystem
                            </h2>
                            <div className="prose prose-slate prose-lg max-w-none mb-8">
                                <p>
                                    A typical agent stops answering calls when a claim is rejected. A veteran advisor steps in. We draft legal-grade medical representations and fight cases at the grievance and Ombudsman levels — a process that requires specialized knowledge of insurance jurisprudence that most agents simply don&apos;t possess.
                                </p>
                                <p>
                                    Over the years, we have represented hundreds of policyholders before Insurance Ombudsman offices in Bangalore, Chennai, Mumbai, and Hyderabad. We understand the documentation standards these quasi-judicial bodies expect: the &apos;Annexure VI-A&apos; format, the supporting medical evidence structure, and the legal arguments that consistently persuade Ombudsman panels to rule in the policyholder&apos;s favor.
                                </p>
                                <p>
                                    For cases that go beyond the Ombudsman, we also coordinate with consumer court advocates to prepare NCDRC (National Consumer Disputes Redressal Commission) filings, ensuring every regulatory avenue is explored before exhaustion.
                                </p>
                            </div>
                        </section>

                        {/* The Cost of Inexperience */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                The Cost of Inexperience: Common Mistakes
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Choosing an inexperienced agent or relying solely on an online portal can cost you lakhs in the long run. Here are real issues we regularly fix for clients who came to us after bad experiences:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { mistake: 'Under-Insurance', desc: 'A ₹10 lakh term policy for a family with a ₹50 lakh home loan and ₹15 lakh annual expenses. The family would face a ₹55 lakh shortfall if the worst happened.' },
                                    { mistake: 'Wrong Policy Type', desc: 'A 28-year-old breadwinner sold an endowment plan (₹5 lakh cover) instead of a term plan (₹1 crore cover for the same premium). A tragic misallocation.' },
                                    { mistake: 'Proposal Form Errors', desc: 'An agent who ticked "No" for existing health conditions when the client clearly had managed hypertension. The claim was rejected 3 years later.' },
                                    { mistake: 'No Claim Follow-Through', desc: 'A health claim submitted without pre-hospitalization bills. The insurer deducted 40% of the eligible amount — money that could have been recovered with proper documentation.' },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 bg-red-50 rounded-xl border border-red-100 flex gap-4">
                                        <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-red-900 mb-1">{item.mistake}</h4>
                                            <p className="text-sm text-red-800 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Experienced Advisor vs. Online Portal
                            </h2>
                            <div className="overflow-x-auto border rounded-xl">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b">
                                        <tr>
                                            <th className="p-4 font-bold border-r">Aspect</th>
                                            <th className="p-4 font-bold text-primary">Veteran Advisor</th>
                                            <th className="p-4 font-bold text-slate-500">Online Portal / New Agent</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr><td className="p-4 border-r font-medium">Needs Analysis</td><td className="p-4 text-green-700 font-medium">Face-to-face gap assessment</td><td className="p-4 text-slate-500">Algorithm-based suggestion</td></tr>
                                        <tr><td className="p-4 border-r font-medium">Proposal Accuracy</td><td className="p-4 text-green-700 font-medium">Manual review of every field</td><td className="p-4 text-slate-500">Self-filled, no verification</td></tr>
                                        <tr><td className="p-4 border-r font-medium">Claim Support</td><td className="p-4 text-green-700 font-medium">End-to-end document handling</td><td className="p-4 text-slate-500">DIY via call center</td></tr>
                                        <tr><td className="p-4 border-r font-medium">Rejection Escalation</td><td className="p-4 text-green-700 font-medium">GRO → IRDAI → Ombudsman</td><td className="p-4 text-slate-500">Not available</td></tr>
                                        <tr><td className="p-4 border-r font-medium">Post-Sale Service</td><td className="p-4 text-green-700 font-medium">Lifetime advisory, renewals, claims</td><td className="p-4 text-slate-500">Limited to policy period</td></tr>
                                        <tr><td className="p-4 border-r font-medium">Lost Document Recovery</td><td className="p-4 text-green-700 font-medium">Branch liaison + legal drafting</td><td className="p-4 text-slate-500">Not supported</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Experience the Advantage Yourself</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">Whether you need a policy audit, a rejected claim recovered, or simply a trustworthy advisor for your family&apos;s future — our 25+ years of hands-on expertise is at your service.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90" asChild>
                                    <Link href="/contact">
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Book Free Consultation
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Free Expert Consultation</h3>
                                <p className="text-sm text-slate-500 mb-6">Share your insurance concern and an experienced advisor will call you within 2 hours.</p>
                                <QuoteForm insuranceType="expert_consultation" />
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5" />
                                    IRDAI Compliant
                                </h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    All our services are fully compliant with the Insurance Regulatory and Development Authority of India (IRDAI) guidelines. Your data and policies are handled with the highest standards of professional confidentiality.
                                </p>
                            </div>

                            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <History className="h-5 w-5" />
                                    Our Track Record
                                </h4>
                                <p className="text-green-800 text-sm leading-relaxed">
                                    From recovering a ₹38 lakh death claim rejected on grounds of &quot;non-disclosure&quot; to reviving a 12-year lapsed policy worth ₹8 lakhs — our results speak volumes. 
                                    <Link href="/success-stories" className="font-bold border-b border-green-600 ml-1 hover:text-green-600 transition-colors">Read case studies →</Link>
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
