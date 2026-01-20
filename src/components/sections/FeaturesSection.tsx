"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Briefcase, Users, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-16 sm:py-24 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent/30"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-2">
                            <Star className="h-4 w-4 fill-accent" />
                            <span suppressHydrationWarning>{t("veteran_advantage")}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            <span suppressHydrationWarning>{t("strategic_protection_title_start")}</span> <span className="text-accent" suppressHydrationWarning>{t("strategic_protection_title_highlight")}</span> <span suppressHydrationWarning>{t("strategic_protection_title_end")}</span>
                        </h2>
                        <p className="text-lg text-primary-foreground/80 max-w-xl" suppressHydrationWarning>
                            {t("strategic_experience_description")}
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <div className="text-3xl sm:text-4xl font-bold text-accent">15k+</div>
                                <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold" suppressHydrationWarning>{t("portfolios_managed")}</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl sm:text-4xl font-bold text-accent">98%</div>
                                <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold" suppressHydrationWarning>{t("claims_settled_stat")}</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-accent/10 rounded-2xl border border-white/10 p-8 flex flex-col justify-center gap-8 relative overflow-hidden">
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                                    <Briefcase className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1" suppressHydrationWarning>{t("strategic_advisory")}</h3>
                                    <p className="text-primary-foreground/90 text-sm" suppressHydrationWarning>{t("strategic_advisory_desc")}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                                    <Users className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1" suppressHydrationWarning>{t("legacy_planning")}</h3>
                                    <p className="text-primary-foreground/90 text-sm" suppressHydrationWarning>{t("legacy_planning_desc")}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1" suppressHydrationWarning>{t("unrivaled_claims_support")}</h3>
                                    <p className="text-primary-foreground/90 text-sm" suppressHydrationWarning>{t("unrivaled_claims_support_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
