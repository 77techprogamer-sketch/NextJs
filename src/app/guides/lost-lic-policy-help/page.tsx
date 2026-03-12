"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, Info, CheckCircle2, AlertTriangle, MessageCircle, ArrowRight } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import ShortLeadForm from '@/components/ShortLeadForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LostPolicyGuide = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Header />

            {/* Article Header */}
            <section className="pt-32 pb-12 border-b border-slate-100 dark:border-white/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6"
                        >
                            <Info className="w-4 h-4" />
                            <span>Expert Guide</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                            How to Find Your Lost LIC Policy Number: A Step-by-Step Guide
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            Losing your LIC policy document or forgetting the policy number is common. Whether it&apos;s an old policy from your parents or one you misplaced during shifting, here is how you can recover it without paying agent fees.
                        </p>

                        <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-white/5">
                            <div className="w-12 h-12 rounded-full bg-slate-200" />
                            <div className="text-sm">
                                <p className="font-bold text-slate-900 dark:text-white">Written by Hari Kotian</p>
                                <p className="text-slate-500">25+ Years Insurance Expert • Updated March 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:max-w-3xl prose prose-slate dark:prose-invert">
                        <h2 className="text-2xl font-bold mb-6">1. Check Your Bank Statements</h2>
                        <p>The easiest way to find your LIC policy number is to check the bank statement from which you paid the initial or recurring premiums. Look for entries like <strong>&quot;LIC-PREM&quot;</strong> or <strong>&quot;LIFE INS CORP&quot;</strong>. The narration often contains the 9-digit policy number.</p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500 my-8">
                            <p className="text-sm font-medium text-blue-800 dark:text-blue-300 m-0">
                                <strong>Pro Tip:</strong> Search for &quot;LIC&quot; in your bank&apos;s mobile app transaction history.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold mb-6">2. Visit the Branch Office</h2>
                        <p>If you remember the branch where you took the policy, you can visit it with your ID proof (Aadhar/PAN). The &quot;In-force Search&quot; or &quot;Lapsed Search&quot; facility allows officials to find your policy by name and date of birth.</p>

                        <div className="my-12 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-accent">Stuck with complex document requirements?</h3>
                                <p className="text-slate-300 mb-6">Recovering lost bonds often requires indemnity bonds and notarized affidavits. We can handle the entire paperwork for you.</p>
                                <a href={contactConfig.whatsappUrl} target="_blank">
                                    <Button className="bg-accent text-primary font-bold hover:bg-accent/90">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Get Expert Help on WhatsApp
                                    </Button>
                                </a>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        </div>

                        <h2 className="text-2xl font-bold mb-6">3. Use the LIC Customer Portal</h2>
                        <p>If you had registered on the LIC E-Services portal, all your policies are linked to your profile. Login with your User ID and DOB to view the list.</p>

                        <h2 className="text-2xl font-bold mb-6">4. Common Problems (And Solutions)</h2>
                        <ul className="space-y-4 list-none p-0">
                            <li className="flex gap-3">
                                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                <span><strong>Problem:</strong> Policy taken 20+ years ago and branch moved.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                <span><strong>Solution:</strong> Use your Aadhaar to search centrally at any LIC Divisional Office.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar CTA */}
                    <aside className="w-full lg:w-96 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-white/5">
                                <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Need Immediate Help?</h3>
                                <p className="text-sm text-slate-500 mb-6">Our experts help 100+ families every month recover lost insurance money.</p>
                                <ShortLeadForm />
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400">
                                <Search className="w-8 h-8 opacity-50" />
                                <p className="text-xs font-bold leading-tight">We&apos;ve helped recover ₹15 Cr+ in lost policy benefits last year.</p>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LostPolicyGuide;
