import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Star, Users, TrendingUp, FileText, Heart, Car, Shield, Plane, Wallet } from 'lucide-react';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Compare Insurance Plans India | Expert Review & Recommendations — Insurance Support',
    description: 'Compare LIC, Star Health, HDFC ERGO, ICICI Lombard insurance plans side-by-side. Get expert recommendations based on 25+ years of claim experience. Free comparison tool.',
    keywords: [
        'Compare Insurance Plans',
        'Insurance Comparison India',
        'LIC vs Private Insurance',
        'Health Insurance Comparison',
        'Term Insurance Comparison',
        'Motor Insurance Comparison',
        'Best Insurance Plans 2026',
        'Insurance Plan Review'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/compare-insurance',
    }
};

const INSURANCE_TYPES = [
    { id: 'life', icon: Heart, label: 'Life Insurance', href: '/services/life-insurance' },
    { id: 'health', icon: Shield, label: 'Health Insurance', href: '/services/health-insurance' },
    { id: 'term', icon: FileText, label: 'Term Insurance', href: '/services/term-insurance' },
    { id: 'motor', icon: Car, label: 'Motor Insurance', href: '/services/motor-insurance' },
];

const WHY_COMPARE_WITH_US = [
    { icon: ShieldCheck, title: 'Real Claim Experience', desc: 'We\'ve handled 15,000+ claims. We know which policies actually pay and which have hidden traps.' },
    { icon: TrendingUp, title: 'Premium Optimization', desc: 'We compare not just features but actual value. No overpaying for redundant coverage.' },
    { icon: Users, title: 'Personalized Match', desc: 'We analyze your age, health, family size, and financial goals to recommend the right plan.' },
    { icon: Star, title: 'No Bias, No Commission', desc: 'We work for you, not insurers. Our advice is based on your needs, not commissions.' },
];

const POPULAR_COMPARISONS = [
    { from: 'LIC Term Plans', to: 'Private Term Insurers', result: 'Higher sum assured at lower premium, but slower claim process', href: '/alternatives/policybazaar' },
    { from: 'LIC Health Plans', to: 'Star Health/ICICI', result: 'Better network hospitals vs faster claim settlement', href: '/services/health-insurance' },
    { from: 'LIC Life Insurance', to: 'ULIP Plans', result: 'Guaranteed returns vs market-linked growth with partial withdrawal', href: '/services/ulip-plans' },
];

export default function CompareInsurancePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
                            <FileText className="w-4 h-4" />
                            Expert Insurance Comparison
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Compare Insurance Plans.<br />
                            <span className="text-accent">Get Unbiased Advice.</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Don't rely on sales portals. Get expert comparison based on 25+ years of claim experience. We tell you what policies actually pay when you need them.
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
                                    Get Free Comparison
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
                            { value: '15,000+', label: 'Policies Compared', icon: FileText },
                            { value: '25+', label: 'Years Experience', icon: Star },
                            { value: '4.2/5', label: 'Client Rating', icon: Star },
                            { value: 'Crores+', label: 'Claims Recovered', icon: TrendingUp },
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

            {/* Insurance Types */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Do You Want to Compare?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Select insurance type for personalized comparison with real claim insights.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {INSURANCE_TYPES.map((type, idx) => (
                            <Link key={idx} href={type.href} className="group">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <type.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{type.label}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Compare With Us */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Compare Insurance With Us?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Sales portals compare features. We compare real-world performance, claim track record, and hidden risks.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {WHY_COMPARE_WITH_US.map((reason, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <reason.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Comparisons */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Popular Comparisons We Do</h2>
                    <div className="space-y-4">
                        {POPULAR_COMPARISONS.map((cmp, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <div className="text-sm font-bold text-slate-500 mb-1">vs</div>
                                    <div className="font-bold text-slate-900">{cmp.from}</div>
                                    <div className="text-slate-600 text-sm">{cmp.to}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-slate-700">{cmp.result}</p>
                                </div>
                                <Link href={cmp.href}>
                                    <Button variant="outline" size="sm" className="shrink-0">
                                        Compare <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Analyze */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What We Analyze in Every Comparison</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            'Premium cost vs sum assured ratio',
                            'Claim settlement ratio & timeline',
                            'Waiting periods & exclusions',
                            'Room rent & co-payment clauses',
                            'Network hospital coverage in your city',
                            'Pre-existing condition loading',
                            'Renewal premium trends',
                            'Policy term flexibility',
                            'Portability & migration options',
                            'Nominee change ease',
                            'Loan against policy terms',
                            'Surrender value calculation'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Free Insurance Comparison</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        One call to understand which policy truly fits your needs. No pushy sales, just expert advice.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary text-xl h-16 px-10 font-bold rounded-2xl shadow-2xl" asChild>
                        <a href={`tel:${contactConfig.phoneFull}`}>
                            <Phone className="mr-2 h-6 w-6" />
                            Call: {contactConfig.phoneDisplay}
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
