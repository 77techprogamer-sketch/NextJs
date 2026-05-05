import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
    ShieldAlert, 
    CheckCircle2, 
    Scale, 
    FileWarning, 
    ArrowRight, 
    HelpCircle, 
    AlertTriangle, 
    FileText, 
    Stethoscope, 
    Zap,
    Briefcase,
    Globe,
    MessageSquare,
    Phone,
    Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactConfig } from '@/data/contact';
import { GuideHowToJsonLd, GuideArticleJsonLd } from '@/components/ServerJsonLd';

export const metadata: Metadata = {
    title: 'Ultimate Guide to Insurance Claim Recovery in India (2026)',
    description: 'A comprehensive, step-by-step master guide on recovering rejected life, health, and motor insurance claims. Learn about IRDAI rules, escalation paths, and expert strategies.',
    keywords: [
        'rejected insurance claim recovery',
        'IRDAI claim escalation',
        'insurance claim rejected what to do',
        'life insurance claim dispute india',
        'health insurance claim rejection reasons',
        'claim recovery specialist india'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/claim-recovery-guide'
    }
};

export default function ClaimRecoveryMasterGuide() {
    return (
        <div className="bg-white min-h-screen">
            <GuideHowToJsonLd />
            <GuideArticleJsonLd 
                title="Ultimate Guide to Insurance Claim Recovery in India"
                description="Expert strategies to recover rejected insurance claims using IRDAI guidelines and legal escalation."
                url="https://insurancesupport.online/resources/guides/claim-recovery-guide"
            />
            
            {/* High-Impact Hero */}
            <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                            <Zap className="w-4 h-4" />
                            <span>Updated for 2026 IRDAI Guidelines</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                            Rejected Claim? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Don&apos;t Give Up.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                            The definitive, step-by-step master guide to recovering rejected insurance claims in India. 
                            From technical errors to medical disputes, we show you how to fight back.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold">Start Your Recovery</Button>
                            </Link>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-white/20 text-white hover:bg-white/5">
                                Download PDF Checklist
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Table of Contents (Simplified) */}
            <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 py-4 hidden md:block">
                <div className="container px-4 mx-auto flex justify-center gap-8 text-sm font-bold text-slate-600">
                    <a href="#reasons" className="hover:text-primary">1. Why Rejections Happen</a>
                    <a href="#process" className="hover:text-primary">2. The 5-Step Process</a>
                    <a href="#irdai" className="hover:text-primary">3. IRDAI Escalation</a>
                    <a href="#legal" className="hover:text-primary">4. Legal Rights</a>
                    <a href="#expert" className="hover:text-primary">5. Get Help</a>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Section 1: The Reality of Rejections */}
                        <article id="reasons" className="prose prose-lg max-w-none mb-24">
                            <h2 className="text-4xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 text-2xl">01</span>
                                Common Reasons for Claim Rejection
                            </h2>
                            <p>
                                Insurance companies in India are regulated by IRDAI, but they are also commercial entities. 
                                Claims are often rejected due to technicalities that policyholders aren&apos;t even aware of. 
                                Understanding <em>why</em> your claim was rejected is the first step toward recovery.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose">
                                <Card className="border-l-4 border-l-red-500 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <FileWarning className="text-red-500" />
                                            Non-Disclosure
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-slate-600">
                                        The #1 reason. Any pre-existing disease (PED) or lifestyle habit (smoking/drinking) 
                                        not mentioned in the proposal form gives the insurer a legal right to reject.
                                    </CardContent>
                                </Card>
                                <Card className="border-l-4 border-l-amber-500 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Stethoscope className="text-amber-500" />
                                            Medical Technicalities
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-slate-600">
                                        Disputes over &quot;Active Management&quot; in hospitals, waiting periods, 
                                        or treatments deemed &quot;not medically necessary.&quot;
                                    </CardContent>
                                </Card>
                                <Card className="border-l-4 border-l-blue-500 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Briefcase className="text-blue-500" />
                                            Documentation Gaps
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-slate-600">
                                        Missing original bonds, delayed notification (notification must usually be within 24-48 hours), 
                                        or incorrect nominee details.
                                    </CardContent>
                                </Card>
                                <Card className="border-l-4 border-l-purple-500 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <ShieldAlert className="text-purple-500" />
                                            Policy Lapse
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-slate-600">
                                        Claims occurring during the grace period or after the policy has lapsed 
                                        due to non-payment of premiums.
                                    </CardContent>
                                </Card>
                            </div>
                        </article>

                        {/* Section 2: The Recovery Process */}
                        <article id="process" className="mb-24">
                            <h2 className="text-4xl font-black text-slate-900 mb-12 flex items-center gap-4">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 text-2xl">02</span>
                                The 5-Step Claim Recovery Framework
                            </h2>
                            <div className="space-y-12">
                                {[
                                    {
                                        step: "Step 1: The Audit",
                                        title: "Review the Rejection Letter",
                                        desc: "Do not panic. Every rejection must be accompanied by a formal letter citing the specific policy clause. We analyze this clause against your original proposal form.",
                                        icon: <Search className="w-6 h-6" />
                                    },
                                    {
                                        step: "Step 2: Evidence Gathering",
                                        title: "Countering the Insurer's Claim",
                                        desc: "If the rejection is for 'Non-Disclosure', we gather medical records proving the condition wasn't known. If it's technical, we gather IRDAI circulars that override the insurer's stance.",
                                        icon: <FileText className="w-6 h-6" />
                                    },
                                    {
                                        step: "Step 3: Internal Grievance",
                                        title: "Escalation to the Insurer's GRO",
                                        desc: "Every insurance company has a Grievance Redressal Officer (GRO). We file a formal, legal representation to this office before moving to external bodies.",
                                        icon: <MessageSquare className="w-6 h-6" />
                                    },
                                    {
                                        step: "Step 4: IRDAI Bima Bharosa",
                                        title: "The Regulator's Intervention",
                                        desc: "We register your complaint on the IGMS (Integrated Grievance Management System). This puts the insurer on a clock; they must respond within 15 days.",
                                        icon: <Globe className="w-6 h-6" />
                                    },
                                    {
                                        step: "Step 5: The Ombudsman",
                                        title: "Quasi-Judicial Resolution",
                                        desc: "If all else fails, we move to the Insurance Ombudsman. This is a free service for policyholders. Their decision is binding on the insurance company.",
                                        icon: <Scale className="w-6 h-6" />
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                            {item.icon}
                                        </div>
                                        <div className="pt-2">
                                            <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">{item.step}</span>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>

                        {/* Section 3: IRDAI Rules You Should Know */}
                        <div id="irdai" className="mb-24 p-12 bg-primary/5 rounded-[40px] border border-primary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Zap className="w-64 h-64" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 relative z-10">Crucial IRDAI Rules for 2026</h2>
                            <div className="space-y-6 relative z-10">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Section 45: The 3-Year Rule</h4>
                                    <p className="text-sm text-slate-600">No life insurance policy can be called in question on any ground whatsoever after the expiry of 3 years from the date of issuance of the policy.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Turnaround Time (TAT)</h4>
                                    <p className="text-sm text-slate-600">Insurers must settle or reject a claim within 30 days of receiving all documents. If further investigation is needed, it must be completed within 90 days.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Interest on Delayed Claims</h4>
                                    <p className="text-sm text-slate-600">If an insurer delays payment beyond the TAT, they are liable to pay interest at a rate of 2% above the bank rate.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Success Story Highlight */}
                        <article className="mb-24">
                            <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                                <h2 className="text-3xl font-black mb-8">Real Case Study: The Power of Persistence</h2>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <AlertTriangle className="text-amber-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold">The Rejection</h4>
                                                <p className="text-sm text-slate-400">A ₹50 Lakh death claim was rejected by a private insurer citing &quot;Non-Disclosure of Diabetes&quot; for a 12-year-old policy.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Scale className="text-blue-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold">Our Action</h4>
                                                <p className="text-sm text-slate-400">Invoked Section 45 of the Insurance Act. Proved that diabetes was diagnosed 5 years after the policy started, not before.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold">The Result</h4>
                                                <p className="text-sm text-slate-400">Full claim of ₹50 Lakh + ₹3.5 Lakh interest settled in 45 days. Nominee secured.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-center p-8 border-2 border-primary/30 rounded-full w-48 h-48 flex flex-col justify-center bg-primary/10">
                                            <span className="text-4xl font-black text-primary">₹53.5L</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Recovered</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Final CTA */}
                        <section id="expert" className="text-center bg-slate-50 py-16 px-8 rounded-[40px] border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Stop Guessing. Start Fighting.</h2>
                            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Our experts have a 98% success rate in resolving complex claim disputes. 
                                We operate on a transparency model—we only take cases where we can genuinely help.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all gap-2 text-lg">
                                    <MessageSquare className="h-6 w-6" />
                                    Get a Free Claim Audit
                                </Link>
                                <a href={`tel:${contactConfig.phoneFull}`} className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all gap-2 text-lg">
                                    <Phone className="h-6 w-6" />
                                    Call +91 99866 34506
                                </a>
                            </div>
                            <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                *No upfront fees for consultation. Certified IRDAI Experts only.
                            </p>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}
