"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Clock, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const WhyChooseUsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                    {t("why_choose_us")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Expert Guidance */}
                    <SpotlightCard className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>{t("expert_guidance")}</h3>
                        <p className="text-gray-600 dark:text-gray-300" suppressHydrationWarning>
                            {t("expert_guidance_desc")}
                        </p>
                    </SpotlightCard>

                    {/* 24/7 Support */}
                    <SpotlightCard className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                            <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>{t("24_7_support")}</h3>
                        <p className="text-gray-600 dark:text-gray-300" suppressHydrationWarning>
                            {t("support_desc")}
                        </p>
                    </SpotlightCard>

                    {/* Claims Assistance */}
                    <SpotlightCard className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>{t("claims_assistance")}</h3>
                        <p className="text-gray-600 dark:text-gray-300" suppressHydrationWarning>
                            {t("claims_desc")}
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
