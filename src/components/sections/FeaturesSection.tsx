"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Briefcase, Users, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const FeaturesSection = () => {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-20 sm:py-32 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal animation="slide-left" delay={0.2}>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-2 backdrop-blur-sm animate-pulse">
                                <Star className="h-4 w-4 fill-accent" />
                                <span suppressHydrationWarning>{t("veteran_advantage")}</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                                <span suppressHydrationWarning>{t("strategic_protection_title_start")}</span> <span className="text-accent italic" suppressHydrationWarning>{t("strategic_protection_title_highlight")}</span> <span suppressHydrationWarning>{t("strategic_protection_title_end")}</span>
                            </h2>
                            <p className="text-xl text-primary-foreground/70 max-w-xl leading-relaxed" suppressHydrationWarning>
                                {t("strategic_experience_description")}
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="space-y-2 group">
                                    <div className="text-4xl sm:text-5xl font-black text-accent group-hover:scale-110 transition-transform duration-300 inline-block">15k+</div>
                                    <div className="text-xs text-primary-foreground/60 uppercase tracking-[0.2em] font-bold" suppressHydrationWarning>{t("portfolios_managed")}</div>
                                </div>
                                <div className="space-y-2 group">
                                    <div className="text-4xl sm:text-5xl font-black text-accent group-hover:scale-110 transition-transform duration-300 inline-block">98%</div>
                                    <div className="text-xs text-primary-foreground/60 uppercase tracking-[0.2em] font-bold" suppressHydrationWarning>{t("claims_settled_stat")}</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="pop-up" delay={0.4}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10 animate-pulse group-hover:bg-accent/30 transition-colors"></div>
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 flex flex-col justify-center gap-10 relative overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:translate-y-[-10px]">
                                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
                                <div className="flex gap-6 items-start">
                                    <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-500">
                                        <Briefcase className="h-7 w-7 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors" suppressHydrationWarning>{t("strategic_advisory")}</h3>
                                        <p className="text-primary-foreground/70 text-base leading-relaxed" suppressHydrationWarning>{t("strategic_advisory_desc")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-500">
                                        <Users className="h-7 w-7 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors" suppressHydrationWarning>{t("legacy_planning")}</h3>
                                        <p className="text-primary-foreground/70 text-base leading-relaxed" suppressHydrationWarning>{t("legacy_planning_desc")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-500">
                                        <ShieldCheck className="h-7 w-7 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors" suppressHydrationWarning>{t("unrivaled_claims_support")}</h3>
                                        <p className="text-primary-foreground/70 text-base leading-relaxed" suppressHydrationWarning>{t("unrivaled_claims_support_desc")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};


export default FeaturesSection;
