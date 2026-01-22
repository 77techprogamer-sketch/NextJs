"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Shield, Heart } from 'lucide-react';

const WhyChooseUsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                    {t("why_choose_us")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CheckCircle className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>
                            {t("expert_guidance_title")}
                        </h3>
                        <CardDescription className="text-center text-sm sm:text-base" suppressHydrationWarning>
                            {t("expert_guidance_description")}
                        </CardDescription>
                    </Card>
                    <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Shield className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>
                            {t("comprehensive_coverage_title")}
                        </h3>
                        <CardDescription className="text-center text-sm sm:text-base" suppressHydrationWarning>
                            {t("comprehensive_coverage_description")}
                        </CardDescription>
                    </Card>
                    <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Heart className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>
                            {t("customer_satisfaction_title")}
                        </h3>
                        <CardDescription className="text-center text-sm sm:text-base" suppressHydrationWarning>
                            {t("customer_satisfaction_description")}
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
