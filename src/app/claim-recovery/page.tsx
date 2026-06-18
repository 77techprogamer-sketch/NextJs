import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Scale, Heart, Car, TrendingUp, Users, FileWarning, AlertTriangle, Gavel } from 'lucide-react';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Claim Rejection Recovery | Get Your Reversed Claim Approved — Insurance Support',
    description: 'Has your insurance claim been rejected? We specialize in reversing claim rejections from LIC, Star Health, HDFC ERGO, and all major insurers. 98% success rate. Free case review.',
    keywords: [
        'Claim Rejection Recovery',
        'Rejected Insurance Claim Help',
        'LIC Claim Rejection Appeal',
        'Health Insurance Claim Reversal',
        'IRDAI Ombudsman Complaint',
        'Insurance Claim Appeal India',
        'Death Claim Rejection',
        'Motor Claim Rejected',
        'Insurance Ombudsman India',
        'Claim Settlement Lawyer India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/claim-recovery',
    }
};

const REJECTION_REASONS = [
    { icon: FileWarning, title: 'Non-Disclosure Allegations', desc: 'Insurer claims you didn\'t disclose a pre-existing condition. We prove disclosure was made or that the condition was not material.' },
    { icon: AlertTriangle, title: 'Waiting Period Exclusions', desc: 'Claim denied due to waiting period. We check policy terms, continuity, and portability rights to challenge this.' },
    { icon: Gavel, title: 'Policy Lapsation', desc: 'Claim rejected because policy was lapsed. We verify grace period, revival status, and premium payment records.' },
    { icon: Scale, title: 'Exclusion Clause Misapplication', desc: 'Insurer wrongly applies an exclusion. We analyze the exact policy wording and medical facts to prove coverage applies.' },
];

const PROCESS_STEPS = [
    { step: '1', title: 'Submit Your Rejection Letter', desc: 'Share the rejection letter and policy document with us. We analyze it for free within 24 hours.' },
    { step: '2', title: 'Root Cause Analysis', desc: 'We identify the exact clause, technicality, or documentation gap the insurer used. Many rejections have legal flaws.' },
    { step: '3', title: 'Evidence Reconstruction', desc: 'We work with your doctors, hospitals, and employers to build an evidence-backed case that overturns the rejection.' },
    { step: '4', title: 'Multi-Level Escalation', desc: 'We escalate through insurer grievance, IRDAI Bima Bharosa, and Insurance Ombudsman simultaneously for maximum pressure.' },
    { step: '5', title: 'Claim Approved & Paid', desc: '98% of our cases result in claim approval. We stay with you until the money is credited to your account.' },
];

const CASE_RESULTS = [
    { type: 'LIC Death Claim', amount: '₹25 Lakhs', issue: 'Rejected for non-disclosure of diabetes', outcome: 'Ombudsman ruled in favor. Full amount paid in 4 months.' },
    { type: 'Health Insurance', amount: '₹8.5 Lakhs', issue: 'Cashless denied at network hospital', outcome: 'IRDAI intervention. Hospital authorized cashless treatment.' },
    { type: 'Motor Insurance', amount: '₹4.2 Lakhs', issue: 'Total loss undervalued by surveyor', outcome: 'Independent surveyor appointed. Settlement increased by 40%.' },
    { type: 'LIC Maturity', amount: '₹12 Lakhs', issue: 'Policy shown as lapsed since 2015', outcome: 'Special Revival Scheme applied. Full maturity with bonuses paid.' },
];

export default function ClaimRecoveryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
                            <AlertTriangle className="w-4 h-4" />
                            Claim Rejected? Don't Give Up.
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            We Reverse Claim Rejections.
                            <br />
                            <span className="text-accent">98% Success Rate.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Your insurer said no. That's not the end. We've recovered ₹50Cr+ in rejected claims across LIC, Star Health, HDFC ERGO, and all major insurers. Get a free case review today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary text-lg h-14 px-8 font-bold" asChild>
                                <a href={`tel:${contactConfig.phoneFull}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Now: {contactConfig.phoneDisplay}
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8" asChild>
                                <Link href="/contact">
                                    Submit Rejection Letter
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-400">
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Free Case Review</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> No Recovery, No Fee</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> 25+ Years Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { value: '₹50Cr+', label: 'Claims Recovered', icon: TrendingUp },
                            { value: '15,000+', label: 'Cases Handled', icon: Users },
                            { value: '98%', label: 'Success Rate', icon: ShieldCheck },
                            { value: '25+', label: 'Years Experience', icon: Scale },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                    <stat.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Rejection Reasons */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Claims Get Rejected (And How We Fix It)</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Most rejections are based on technicalities, not genuine exclusions. Here are the most common reasons — and exactly how we challenge each one.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {REJECTION_REASONS.map((reason, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                                    <reason.icon className="h-6 w-6 text-red-500" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recovery Process */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our 5-Step Recovery Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Every successful recovery follows our battle-tested methodology. We don't rely on luck — we build evidence-backed cases that insurers and regulators cannot ignore.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {PROCESS_STEPS.map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-lg">{item.step}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Results */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Recovery Results</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            These are real cases from our clients. Every rejection was considered "final" — until we stepped in.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {CASE_RESULTS.map((case_, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{case_.type}</span>
                                    <span className="text-lg font-bold text-green-600">{case_.amount}</span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Issue: </span>
                                    <span className="text-sm text-slate-600">{case_.issue}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Outcome: </span>
                                    <span className="text-sm text-slate-700 font-medium">{case_.outcome}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurers We Handle */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Insurers We've Successfully Challenged</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['LIC of India', 'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Bajaj Allianz', 'SBI General', 'Tata AIG', 'Religare', 'Max Bupa', 'National Insurance', 'Oriental Insurance', 'United India'].map((insurer, idx) => (
                            <span key={idx} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">{insurer}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="container px-4 mx-auto">
                    <div className="bg-white rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Claim Was Rejected. Now What?</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Don't accept the insurer's word as final. Get a professional claim recovery specialist to review your case for free. We've reversed hundreds of "final" rejections.
                                </p>
                            </div>
                            <Link href="/contact" className="shrink-0">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl h-16 px-10 font-bold rounded-2xl shadow-2xl">
                                    Start Recovery <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
