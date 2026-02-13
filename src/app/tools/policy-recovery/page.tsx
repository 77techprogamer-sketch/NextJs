"use client";

import React from 'react';
import LostPolicyFinder from '@/components/LostPolicyFinder';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FileSearch, Clock, Umbrella, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function PolicyRecoveryPage() {
    const { t } = useTranslation();

    const handleHandoff = (data: any) => {
        // This will eventually trigger the global quote form handler
        if (typeof window !== 'undefined' && (window as any).triggerLeadMagnetHandoff) {
            (window as any).triggerLeadMagnetHandoff(data);
        }
    };

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
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6"
                        >
                            <FileSearch className="w-4 h-4" />
                            {t('specialized_recovery_service')}
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            {t('policy_recovery_page_title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('policy_recovery_page_description')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="max-w-2xl mx-auto w-full">
                    <ScrollReveal animation="fade-up" delay={0.2}>
                        <LostPolicyFinder onAction={handleHandoff} />
                    </ScrollReveal>
                </div>

                {/* Benefits Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <ScrollReveal animation="fade-up" delay={0.4}>
                        <div className="glass-card p-8 rounded-3xl space-y-4 border-blue-500/10 hover:border-blue-500/30 transition-colors">
                            <Umbrella className="w-10 h-10 text-blue-500" />
                            <h3 className="font-bold text-xl text-slate-800 dark:text-white">{t('recovery_benefit_all_insurers')}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{t('recovery_benefit_all_insurers_desc')}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={0.5}>
                        <div className="glass-card p-8 rounded-3xl space-y-4 border-blue-500/10 hover:border-blue-500/30 transition-colors">
                            <Clock className="w-10 h-10 text-blue-500" />
                            <h3 className="font-bold text-xl text-slate-800 dark:text-white">{t('recovery_benefit_time_saving')}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{t('recovery_benefit_time_saving_desc')}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={0.6}>
                        <div className="glass-card p-8 rounded-3xl space-y-4 border-blue-500/10 hover:border-blue-500/30 transition-colors">
                            <FileSearch className="w-10 h-10 text-blue-500" />
                            <h3 className="font-bold text-xl text-slate-800 dark:text-white">{t('recovery_benefit_legal_help')}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{t('recovery_benefit_legal_help_desc')}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
