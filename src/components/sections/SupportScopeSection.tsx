"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, XCircle, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SupportScopeSection: React.FC = () => {
    const { t } = useTranslation();

    const helpItems = [
        'help_item_claims',
        'help_item_policy',
        'help_item_legal'
    ];

    const dontItems = [
        'dont_item_underwrite',
        'dont_item_payout'
    ];

    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {t('support_clarification_title')}
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                        {t('support_clarification_desc')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* What we help with */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                {t('what_we_help_with')}
                            </h3>
                            <ul className="space-y-4">
                                {helpItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                                        <span>{t(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What we don't do */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <XCircle className="w-5 h-5 text-red-500" />
                                {t('what_we_dont_do')}
                            </h3>
                            <ul className="space-y-4">
                                {dontItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                        <span>{t(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Deep Local Solutions (Trending Cities)</h4>
                        <div className="flex flex-wrap gap-y-4 gap-x-6">
                            <Link href="/locations/bangalore/health-insurance" className="flex items-center gap-2 group">
                                <span className="text-sm font-bold text-primary group-hover:underline">Bangalore Health Hub</span>
                                <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/locations/mumbai" className="flex items-center gap-2 group">
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:underline">Mumbai Advisor</span>
                                <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/locations/delhi" className="flex items-center gap-2 group">
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:underline">Delhi Claim Support</span>
                                <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/locations/chennai" className="flex items-center gap-2 group">
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:underline">Chennai LIC Agent</span>
                                <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/locations/hyderabad" className="flex items-center gap-2 group">
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:underline">Hyderabad Expert</span>
                                <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportScopeSection;
