"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '@/components/ServiceCard';
import { slugify } from '@/utils/slugify';
import { Heart, Shield, FileText, Car, Building, Plane, Wallet, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react';

const ServicesSection = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                    {t("services_offered")}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto" suppressHydrationWarning>
                    {t("services_description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <ServiceCard title={t("life_insurance")} icon={Heart} href={`/services/${slugify('life_insurance')}`} />
                    <ServiceCard title={t("health_insurance")} icon={Shield} href={`/services/${slugify('health_insurance')}`} />
                    <ServiceCard title={t("term_insurance")} icon={FileText} href={`/services/${slugify('term_insurance')}`} />
                    <ServiceCard title={t("motor_insurance")} icon={Car} href={`/services/${slugify('motor_insurance')}`} />
                    <ServiceCard title={t("sme_insurance")} icon={Building} href={`/services/${slugify('sme_insurance')}`} />
                    <ServiceCard title={t("travel_insurance")} icon={Plane} href={`/services/${slugify('travel_insurance')}`} />
                    <ServiceCard title={t("pension_plans")} icon={Wallet} href={`/services/${slugify('pension_plans')}`} />
                    <ServiceCard title={t("ulip_plans")} icon={TrendingUp} href={`/services/${slugify('ulip_plans')}`} />
                    <ServiceCard title={t("wedding_insurance")} icon={HeartHandshake} href={`/services/${slugify('wedding_insurance')}`} />
                    <ServiceCard title={t("cyber_insurance")} icon={ShieldCheck} href={`/services/${slugify('cyber_insurance')}`} />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
