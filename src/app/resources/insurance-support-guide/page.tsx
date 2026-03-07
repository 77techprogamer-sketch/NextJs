import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Phone, MessageSquare, ArrowRight, HelpCircle, Search, FileText, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'What is Insurance Support? | Complete Guide to Claim Recovery & Policy Help',
    description: 'Learn how professional insurance support can help you recover rejected claims, find lost policies, and manage your insurance portfolio effectively in India.',
    keywords: [
        'What is Insurance Support',
        'Insurance Support Services India',
        'Claim Recovery Help',
        'Rejected Claim Assistance',
        'Insurance Policy Management Support',
        'Insurance Advisor India',
        'LIC Support Services'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/insurance-support-guide'
    }
};

export default function InsuranceSupportGuide() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        What is <span className="text-primary italic">Insurance Support?</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        A comprehensive guide to understanding how professional advisory services protect your interests,
                        recover your wealth, and simplify the complex world of insurance in India.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="h-12 px-8">Get Expert Support Now</Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10">Read the Guide</Button>
                    </div>
                </div>
            </section>

            {/* Core Definition */}
            <section className="py-20 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-widest text-sm">
                            <Shield className="h-5 w-5" />
                            <span>The Definition</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            Insurance Support: More Than Just Buying a Policy
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-600">
                            <p>
                                In its simplest form, <strong>Insurance Support</strong> is a professional service that bridges the gap between the complex legal jargon of insurance companies and the real-world needs of policyholders.
                                While most people interact with insurance only during the "purchase" phase, true insurance support focuses on the most critical phase: <strong>the Claim and Service phase.</strong>
                            </p>
                            <p>
                                At Insurance Support, we view our role as <em>active advocates</em>. We don't just sell you a piece of paper; we stand by you when that paper needs to be converted into financial security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars of Support */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Four Pillars of Expert Insurance Support</h2>
                        <p className="text-slate-600">Our services are built to cover every aspect of your insurance lifecycle.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <HelpCircle className="h-8 w-8 text-blue-500" />,
                                title: "Strategic Advisory",
                                desc: "Analyzing your specific life goals and risk profile to identify the gaps in your current protection plan."
                            },
                            {
                                icon: <Search className="h-8 w-8 text-green-500" />,
                                title: "Wealth Discovery",
                                desc: "Tracing lost policy bonds, forgotten maturity proceeds, and hidden investment values across all insurers."
                            },
                            {
                                icon: <Scale className="h-8 w-8 text-amber-500" />,
                                title: "Claim Advocacy",
                                desc: "Directly coordinating with insurers to resolve rejected claims, death claim disputes, and document errors."
                            },
                            {
                                icon: <FileText className="h-8 w-8 text-purple-500" />,
                                title: "Policy Audit",
                                desc: "Reviewing your existing portfolio to ensure premiums are optimized and coverage limits are sufficient."
                            }
                        ].map((pillar, idx) => (
                            <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all">
                                <CardHeader>
                                    <div className="mb-4">{pillar.icon}</div>
                                    <CardTitle>{pillar.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why You Need Support */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-8 leading-tight">
                                Why is Professional Insurance Support Necessary in India?
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Complexity of Paperwork",
                                        text: "Insurance claims in India often require dozens of documents. One missing signature can delay your money by months."
                                    },
                                    {
                                        title: "High Rejection Rates",
                                        text: "Technicalities in the proposal form, often filled by agents without your knowledge, are the leading cause of claim rejections."
                                    },
                                    {
                                        title: "Lack of Personal Point of Contact",
                                        text: "Large insurers rely on bots and call centers. When you're in crisis, you need a human expert on the ground."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                                            <p className="text-slate-600 text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10">
                                <Shield className="h-64 w-64" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Our Impact in Numbers</h3>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                                    <div className="text-sm text-slate-400">Claim Settlement Ratio Managed</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
                                    <div className="text-sm text-slate-400">Wealth Recovered for Families</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                                    <div className="text-sm text-slate-400">Active Portfolios Supported</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">25+ Yrs</div>
                                    <div className="text-sm text-slate-400">Industry Veteran Experience</div>
                                </div>
                            </div>
                            <Button className="w-full h-12 text-lg">Talk to an Expert Advisor</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary/5 border-t border-primary/10">
                <div className="container px-4 mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 italic">Don't Navigate This Alone.</h2>
                    <p className="text-xl text-slate-700 mb-10 leading-relaxed">
                        Whether you're looking for a new policy Quote, need help with a rejected LIC claim,
                        or simply want an expert to review your family's protection plan—we are here to support you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all gap-2">
                            <MessageSquare className="h-5 w-5" />
                            Get a Free Consultation
                        </Link>
                        <a href="tel:+919986634506" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all gap-2">
                            <Phone className="h-5 w-5" />
                            Call +91 99866 34506
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
