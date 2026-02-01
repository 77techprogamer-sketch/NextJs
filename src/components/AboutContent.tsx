"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Users, Award, History } from 'lucide-react';

const AboutContent = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/50 via-primary to-primary"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" suppressHydrationWarning>{t('about_hero_title')}</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed" suppressHydrationWarning>
                        {t('about_hero_subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                                <History className="w-4 h-4" />
                                <span suppressHydrationWarning>{t('established_badge')}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" suppressHydrationWarning>
                                {t('about_legacy_title')}
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" suppressHydrationWarning>
                                {t('about_legacy_text_1')}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" suppressHydrationWarning>
                                {t('about_legacy_text_2')}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15k+</div>
                                <div className="text-sm text-gray-500" suppressHydrationWarning>{t('happy_clients')}</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">98%</div>
                                <div className="text-sm text-gray-500" suppressHydrationWarning>{t('claims_settled_stat')}</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl text-center col-span-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1" suppressHydrationWarning>{t('years_stat')}</div>
                                <div className="text-sm text-gray-500" suppressHydrationWarning>{t('industry_experience')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white" suppressHydrationWarning>{t('our_mission_title')}</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed" suppressHydrationWarning>
                            {t('our_mission_text')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
