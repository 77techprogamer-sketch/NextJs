"use client";

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import LeadMagnetQuiz from '@/components/LeadMagnetQuiz';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Zap, Handshake } from 'lucide-react';

const LeadMagnetSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Content Left */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <ScrollReveal animation="fade-up">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
                                <Zap className="w-3 h-3 fill-primary" />
                                {t('free_interactive_tool')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
                                {t('quiz_section_title')}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed">
                                {t('quiz_section_description')}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={0.2}>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                                <div className="space-y-2">
                                    <ShieldCheck className="w-8 h-8 text-primary mx-auto lg:mx-0" />
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{t('privacy_guaranteed')}</h4>
                                    <p className="text-xs text-slate-500">{t('no_details_needed_yet')}</p>
                                </div>
                                <div className="space-y-2">
                                    <Zap className="w-8 h-8 text-accent mx-auto lg:mx-0" />
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{t('instant_score')}</h4>
                                    <p className="text-xs text-slate-500">{t('real_time_results')}</p>
                                </div>
                                <div className="space-y-2">
                                    <Handshake className="w-8 h-8 text-primary mx-auto lg:mx-0" />
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{t('personalized_gap_analysis')}</h4>
                                    <p className="text-xs text-slate-500">{t('vulnerability_check')}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Quiz Right */}
                    <div className="flex-1 w-full max-w-xl">
                        <ScrollReveal animation="fade-up" delay={0.4}>
                            <LeadMagnetQuiz
                                onComplete={(data) => {
                                    console.log('Lead Magnet Result:', data);
                                }}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnetSection;
