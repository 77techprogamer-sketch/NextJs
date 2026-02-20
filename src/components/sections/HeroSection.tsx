"use client";

import React from 'react';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Star, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SocialShareButtons from '@/components/SocialShareButtons';
import dynamic from 'next/dynamic';

interface HeroSectionProps {
    city: string | null;
    onGetQuote: () => void;
    title?: string;
    description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ city, onGetQuote, title: propTitle, description: propDescription }) => {
    const { t } = useTranslation();
    const currentUrl = "https://insurance-support.vercel.app/";
    const shareTitle = propTitle || t("hero_title");
    const dynamicOneLiner = propDescription || t("secure_family_future") || "Comprehensive coverage for life, health, and vehicle tailored to your needs.";

    const handleVote = async () => {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            scalar: 1.2
        });
        onGetQuote();
    };

    return (
        <LazyMotion features={domAnimation}>
            <section id="hero" className="relative w-full h-auto pb-32 pt-12 flex flex-col overflow-hidden bg-primary text-white">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(30,58,138,0.8),_transparent),_radial-gradient(circle_at_80%_70%,_rgba(30,58,138,0.8),_transparent)]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20"></div>

                <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center text-center space-y-6">


                    <div className="space-y-4 max-w-4xl mx-auto flex flex-col items-center">
                        <div className="min-h-[32px] flex items-center justify-center mb-4">
                            <ScrollReveal animation="fade-up" delay={0.2} width="100%" enableAnimation={false}>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-accent hover:scale-105 transition-transform duration-300">
                                    <Star className="w-4 h-4 fill-accent animate-pulse" />
                                    <span suppressHydrationWarning>{t("trusted_partner_banner", { city: city || 'Bangalore' })}</span>
                                </div>
                            </ScrollReveal>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] min-h-[1.1em] sm:min-h-[1.1em] md:min-h-[1.1em]">
                            <span suppressHydrationWarning>{shareTitle}</span>
                        </h1>

                        <ScrollReveal animation="fade-up" delay={0.6} width="100%" enableAnimation={false}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed" suppressHydrationWarning>
                                {dynamicOneLiner || "Comprehensive coverage for life, health, and vehicle tailored to your needs."}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md mx-auto pt-8">
                        <div className="space-y-4 w-full flex flex-col items-center">
                            <ScrollReveal animation="elastic" delay={0.8}>
                                <MagneticButton className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        className="bg-accent hover:bg-accent/90 text-primary text-xl w-full font-extrabold px-10 py-8 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105 active:scale-95"
                                        onClick={handleVote}
                                    >
                                        <span suppressHydrationWarning className="flex items-center gap-3">
                                            {t("get_a_free_quote")}
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                →
                                            </motion.div>
                                        </span>
                                    </Button>
                                </MagneticButton>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-in" delay={1.1}>
                                <div className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                                        <span className="text-accent">{t("verified_advisor_active")}</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                                        <ShieldCheck className="w-4 h-4 text-accent" />
                                        <span className="text-white">{t("approx_30_seconds")}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal animation="fade-in" delay={1.0}>
                            <SocialShareButtons url={currentUrl} title={shareTitle} />
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 pt-8 animate-fade-up [animation-delay:800ms]">
                        <ScrollReveal animation="pop-up" delay={1.2}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">15k+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("clients")}</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="pop-up" delay={1.3}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">98%</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("claims_settled_stat")}</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="pop-up" delay={1.4}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">24/7</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("support_stat_label")}</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="pop-up" delay={1.5}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">50+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("awards")}</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section >
        </LazyMotion >
    );
};

export default HeroSection;
