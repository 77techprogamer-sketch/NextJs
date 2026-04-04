import React from 'react';
import { Metadata } from 'next';
import { SuccessStories } from '@/components/SuccessStories';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Scale, Heart, Car, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Insurance Claim Success Stories | Proof of Expert Recovery — ₹50Cr+ Recovered',
    description: 'Read how we recovered ₹50Cr+ in rejected insurance claims. Real case studies on LIC policy revival, health claim appeals, motor insurance settlements, and death claim recoveries across India.',
    keywords: [
        'Insurance Claim Success Stories',
        'Rejected Claim Recovery India',
        'LIC Policy Revival Results',
        'Health Insurance Appeal Success',
        'Insurance Support Expertise',
        'Real Case Studies Claim Settlement',
        'Insurance Recovery Specialist India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/success-stories',
    }
};

export default function SuccessStoriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Real Results. <br />
                            <span className="text-primary italic">Real Financial Recovery.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Numbers don&apos;t lie. Our 25+ years of experience has helped thousands of families recover what was rightfully theirs. Every case study below represents a real family that received their money — often after being told by others that their case was hopeless.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                <a href={`tel:${contactConfig.phoneFull}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    Get Free Advice: +91 99866 34506
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { value: '₹50Cr+', label: 'Total Claims Recovered', icon: TrendingUp },
                            { value: '15,000+', label: 'Families Served', icon: Users },
                            { value: '98%', label: 'Settlement Success Rate', icon: ShieldCheck },
                            { value: '25+', label: 'Years of Active Practice', icon: Scale },
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

            {/* Types of Cases */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Cases We Handle</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Our expertise spans the entire spectrum of insurance disputes and claim recovery. Here are the most common categories where we have delivered proven results.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Heart, title: 'Health Claim Rejections', desc: 'Claims rejected for alleged non-disclosure, pre-existing conditions, or waiting period violations. We appeal through GRO, IRDAI, and Ombudsman channels.' },
                            { icon: ShieldCheck, title: 'LIC Death Claims', desc: 'Death claims denied due to early death investigation, policy lapsation, or non-disclosure allegations. We represent nominees at the Ombudsman level.' },
                            { icon: Scale, title: 'Lapsed Policy Revival', desc: 'Policies lapsed for 5-15+ years recovered through Special Revival Schemes, paid-up conversions, and branch-level negotiations.' },
                            { icon: Briefcase, title: 'Maturity Settlements', desc: 'Delayed maturity payouts, lost policy bonds, name mismatches, and nominee disputes resolved through systematic documentation and branch liaison.' },
                            { icon: Car, title: 'Motor Claim Disputes', desc: 'Total loss claims, third-party disputes, and surveyor undervaluation cases escalated for fair settlement amounts.' },
                            { icon: TrendingUp, title: 'Corporate Group Claims', desc: 'SME and corporate group health insurance claim disputes, cashless denials at network hospitals, and bulk policy servicing issues.' },
                        ].map((cat, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <cat.icon className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{cat.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Approach Recovery */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Approach Claim Recovery</h2>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                        Every successful recovery follows our battle-tested methodology. We don&apos;t rely on luck or sympathy — we build a strong, evidence-backed case that insurance companies and regulatory bodies cannot ignore.
                    </p>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Root Cause Analysis', desc: 'We dissect the rejection letter word by word to identify the exact exclusion clause, policy section, or documentation gap cited by the insurer. Many rejections are based on technicalities, not genuine exclusions.' },
                            { step: '2', title: 'Evidence Reconstruction', desc: 'We work with your treating doctors, hospitals, and employers to reconstruct the medical and factual evidence. This includes obtaining Medical Necessity Certificates, corrected discharge summaries, and attending physician affidavits.' },
                            { step: '3', title: 'Legal-Grade Representation', desc: 'Our appeal documents are structured to the standards expected by the Insurance Ombudsman — the Annexure VI-A format with clear factual chronology, medical evidence, and legal precedent references.' },
                            { step: '4', title: 'Multi-Level Escalation', desc: 'We escalate simultaneously through the insurer\'s internal grievance, IRDAI Bima Bharosa, and the Insurance Ombudsman. This creates regulatory pressure from multiple angles and dramatically increases resolution speed.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-lg">{item.step}</div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Actual Success Stories Component */}
            <SuccessStories />

            {/* Testimonials */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { quote: 'After my father passed, LIC rejected our death claim citing non-disclosure. Insurance Support took over, filed at the Ombudsman, and we received the full ₹25 lakhs within 4 months.', name: 'Priya M.', location: 'Bangalore' },
                            { quote: 'My health claim was stuck for 6 months with no response from the TPA. Within 3 weeks of engaging Insurance Support, they escalated through IRDAI and the full amount was credited.', name: 'Rajesh K.', location: 'Hyderabad' },
                            { quote: 'I had a lapsed LIC policy from 2008 that I thought was worthless. They found a Special Revival Scheme window, revived it, and I received ₹8.5 lakhs in bonuses I didn\'t know existed.', name: 'Sunita B.', location: 'Mumbai' },
                        ].map((testimonial, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-primary text-4xl font-serif mb-4">&ldquo;</div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">{testimonial.quote}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                        <Users className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-slate-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Is your claim stuck or rejected?</h2>
                                <p className="text-blue-100 text-lg leading-relaxed mb-0">
                                    Don&apos;t wait for the insurer to change their mind. Get a professional claim recovery specialist to review your case for free. Our team has reversed hundreds of &quot;final&quot; rejections across LIC, Star Health, HDFC ERGO, and all major insurers.
                                </p>
                            </div>
                            <Link href="/contact" className="shrink-0">
                                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-xl h-16 px-10 font-bold rounded-2xl shadow-2xl">
                                    Start Recovery Process <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
