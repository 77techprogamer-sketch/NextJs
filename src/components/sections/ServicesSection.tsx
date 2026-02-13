"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '@/components/ServiceCard';
import { slugify } from '@/utils/slugify';
import { Heart, Shield, FileText, Car, Building, Plane, Wallet, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react';


import { ScrollReveal } from '@/components/ui/ScrollReveal';

const ServicesSection = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-20 sm:py-32 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <ScrollReveal animation="fade-up" width="100%">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                        {t("services_offered")}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed" suppressHydrationWarning>
                        {t("services_description")}
                    </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    <ServiceCard
                        title={t("life_insurance")}
                        icon={Heart}
                        href={`/services/${slugify('life_insurance')}`}
                        delay={0.1}
                        badge={t("most_popular")}
                        description={t("life_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("health_insurance")}
                        icon={Shield}
                        href={`/services/${slugify('health_insurance')}`}
                        delay={0.2}
                        badge={t("instant_quote")}
                        description={t("health_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("term_insurance")}
                        icon={FileText}
                        href={`/services/${slugify('term_insurance')}`}
                        delay={0.3}
                        description={t("term_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("motor_insurance")}
                        icon={Car}
                        href={`/services/${slugify('motor_insurance')}`}
                        delay={0.1}
                        badge={t("paperless")}
                        description={t("motor_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("sme_insurance")}
                        icon={Building}
                        href={`/services/${slugify('sme_insurance')}`}
                        delay={0.2}
                        description={t("sme_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("travel_insurance")}
                        icon={Plane}
                        href={`/services/${slugify('travel_insurance')}`}
                        delay={0.3}
                        description={t("travel_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("pension_plans")}
                        icon={Wallet}
                        href={`/services/${slugify('pension_plans')}`}
                        delay={0.1}
                        description={t("pension_plans_benefit")}
                    />
                    <ServiceCard
                        title={t("ulip_plans")}
                        icon={TrendingUp}
                        href={`/services/${slugify('ulip_plans')}`}
                        delay={0.2}
                        description={t("ulip_plans_benefit")}
                    />
                    <ServiceCard
                        title={t("wedding_insurance")}
                        icon={HeartHandshake}
                        href={`/services/${slugify('wedding_insurance')}`}
                        delay={0.3}
                        description={t("wedding_insurance_benefit")}
                    />
                    <ServiceCard
                        title={t("cyber_insurance")}
                        icon={ShieldCheck}
                        href={`/services/${slugify('cyber_insurance')}`}
                        delay={0.1}
                        badge={t("expert_support")}
                        description={t("cyber_insurance_benefit")}
                    />
                </div>
            </div>
        </section>
    );
};


export default ServicesSection;
