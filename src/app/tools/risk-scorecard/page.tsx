"use client";

import React from 'react';
import LeadMagnetQuiz from '@/components/LeadMagnetQuiz';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Zap, BarChart3, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function RiskScorecardPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <ScrollReveal animation="fade-up">
                        <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
                            <ChevronLeft className="w-4 h-4" />
                            {t('back_to_home')}
                        </Link>
                        <br />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-6"
                        >
                            <Zap className="w-4 h-4 fill-primary" />
                            {t('free_risk_assessment')}
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            {t('risk_scorecard_page_title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('risk_scorecard_page_description')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Quiz Column */}
                    <div className="lg:col-span-12 max-w-2xl mx-auto w-full">
                        <ScrollReveal animation="fade-up" delay={0.2}>
                            <LeadMagnetQuiz
                                onComplete={(data) => {
                                    console.log('Quiz Completed:', data);
                                }}
                            />
                        </ScrollReveal>
                    </div>

                    {/* Features/Info Column - Simplified for now or can be added later if needed */}
                </div>

                {/* Trust Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <ScrollReveal animation="fade-up" delay={0.4}>
                        <div className="glass-card p-8 rounded-3xl text-center space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{t('privacy_first')}</h3>
                            <p className="text-sm text-slate-500">{t('privacy_first_desc')}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={0.5}>
                        <div className="glass-card p-8 rounded-3xl text-center space-y-4 text-accent border-accent/20">
                            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                                <Zap className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('instant_analysis')}</h3>
                            <p className="text-sm text-slate-500">{t('instant_analysis_desc')}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={0.6}>
                        <div className="glass-card p-8 rounded-3xl text-center space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                <BarChart3 className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{t('data_driven')}</h3>
                            <p className="text-sm text-slate-500">{t('data_driven_desc')}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
