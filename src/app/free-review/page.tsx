import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Search, FileCheck, TrendingUp, Clock, Users, Star } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import ShortLeadForm from '@/components/ShortLeadForm';

export const metadata: Metadata = {
    title: 'Free Insurance Policy Review | Expert Analysis — Insurance Support',
    description: 'Get a free expert review of your insurance policy. We identify coverage gaps, hidden exclusions, premium overcharges, and claim risks. 15,000+ policies reviewed.',
    keywords: [
        'Free Insurance Review',
        'Policy Review India',
        'Insurance Policy Analysis',
        'Coverage Gap Analysis',
        'Insurance Expert Consultation',
        'Policy Health Check',
        'Insurance Advisor Free Review'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/free-review',
    }
};

const WHAT_WE_CHECK = [
    { icon: Search, title: 'Coverage Gaps', desc: 'We identify what your policy doesn\'t cover — the exclusions that catch most people at claim time.' },
    { icon: FileCheck, title: 'Policy Terms Audit', desc: 'We review waiting periods, sub-limits, co-pay clauses, and room rent caps that reduce your effective coverage.' },
    { icon: TrendingUp, title: 'Premium Optimization', desc: 'We check if you\'re overpaying for duplicate coverage, unnecessary riders, or outdated plans.' },
    { icon: ShieldCheck, title: 'Claim Readiness', desc: 'We verify your policy is claim-ready — all disclosures documented, premiums current, and nominee details correct.' },
];

const REVIEW_PROCESS = [
    { step: '1', title: 'Share Your Policy', desc: 'Upload or share your policy document(s). We accept LIC, health, motor, and all insurance types.' },
    { step: '2', title: 'Expert Analysis', desc: 'Our advisor reviews your policy against 25+ years of claim experience. We know exactly where policies fail.' },
    { step: '3', title: 'Detailed Report', desc: 'You get a clear, jargon-free report covering coverage gaps, risks, and actionable recommendations.' },
    { step: '4', title: 'Action Plan', desc: 'We tell you exactly what to do — which policies to keep, which to replace, and how to fix gaps.' },
];

export default function FreeReviewPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary via-primary/90 to-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
                            <Star className="w-4 h-4 fill-accent" />
                            Free Expert Policy Review
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Is Your Insurance
                            <br />
                            <span className="text-accent">Actually Protecting You?</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Most policyholders discover coverage gaps only at claim time — when it's too late. Get a free expert review of your policy. We've reviewed 15,000+ policies and know exactly where they fail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary text-lg h-14 px-8 font-bold" asChild>
                                <a href={`tel:${contactConfig.phoneFull}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call: {contactConfig.phoneDisplay}
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8" asChild>
                                <Link href="/contact">
                                    Upload Policy
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { value: '15,000+', label: 'Policies Reviewed', icon: FileCheck },
                            { value: 'Crores+', label: 'Claims Recovered', icon: TrendingUp },
                            { value: '25+', label: 'Years Experience', icon: Clock },
                            { value: '4.2/5', label: 'Client Rating', icon: Star },
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

            {/* What We Check */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Check in Your Policy</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We don't just read your policy — we stress-test it against real claim scenarios.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {WHAT_WE_CHECK.map((item, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                    </div>
                    <div className="space-y-8">
                        {REVIEW_PROCESS.map((item, i) => (
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

            {/* Common Issues Found */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Issues We Find</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            'Room rent caps that limit hospital choices at claim time',
                            'Missing pre-existing condition disclosures that void claims',
                            'Outdated nominee details causing legal disputes',
                            'Duplicate coverage across multiple policies wasting premium',
                            'Waiting period miscalculations leading to rejected claims',
                            'Sub-limits on specific treatments not disclosed at sale',
                            'Lapsed policies that could still be revived',
                            'Missing riders that should have been added'
                        ].map((issue, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700">{issue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Capture Form */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request Your Free Review</h2>
                        <p className="text-slate-600 text-lg">
                            Fill in your details and our expert will call you within 1 hour.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <ShortLeadForm source="free_review_page" service="policy_review" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Free Policy Review Today</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Don't wait for a claim rejection to discover your policy has gaps. One call could save you lakhs.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary text-xl h-16 px-10 font-bold rounded-2xl shadow-2xl" asChild>
                        <a href={`tel:${contactConfig.phoneFull}`}>
                            <Phone className="mr-2 h-6 w-6" />
                            Call Now: {contactConfig.phoneDisplay}
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
