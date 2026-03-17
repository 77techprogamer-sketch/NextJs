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
import Link from 'next/link';
import Image from 'next/image';
import ShortLeadForm from '@/components/ShortLeadForm';
import { trackCTAClick } from '@/utils/trackCta';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '@/data/contact';

interface HeroSectionProps {
    city: string | null;
    onGetQuote: () => void;
    title?: string;
    description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ city, onGetQuote, title: propTitle, description: propDescription }) => {
    const { t } = useTranslation();
    const currentUrl = "https://insurancesupport.online/";
    const shareTitle = propTitle || "Protect Your Future & Recover Your Claims";
    const dynamicOneLiner = propDescription || "Buy premium Life, Health & Motor insurance, or get 25+ years of expert help recovering rejected claims and lost policies.";

    const handleVote = async () => {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            scalar: 1.2
        });
        trackCTAClick('Hero: Buy New Policy');
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
                        <div className="min-h-[32px] flex flex-wrap items-center justify-center gap-4 mb-4">
                            <ScrollReveal animation="fade-up" delay={0.2} width="fit-content" enableAnimation={false}>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-accent hover:scale-105 transition-transform duration-300">
                                    <Star className="w-4 h-4 fill-accent animate-pulse" />
                                    <span suppressHydrationWarning>{t("trusted_partner_banner", { city: city || 'Bangalore' })}</span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={0.3} width="fit-content" enableAnimation={false}>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md text-sm font-medium text-green-400 hover:scale-105 transition-transform duration-300">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>{t("irdai_advisory")}</span>
                                </div>
                            </ScrollReveal>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] min-h-[1.1em] sm:min-h-[1.1em] md:min-h-[1.1em]">
                            <span suppressHydrationWarning>{shareTitle}</span>
                        </h1>

                        <ScrollReveal animation="fade-up" delay={0.6} width="100%" enableAnimation={false}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed" suppressHydrationWarning>
                                {dynamicOneLiner || t("hero_fallback_description")}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 pt-8">
                        {/* Left Side: Copy */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:max-w-xl">
                            <div className="space-y-4">
                                <ScrollReveal animation="fade-up" delay={0.6} width="100%" enableAnimation={false}>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed" suppressHydrationWarning>
                                        {dynamicOneLiner || t("hero_fallback_description")}
                                    </p>
                                </ScrollReveal>
                            </div>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <ScrollReveal animation="elastic" delay={0.8}>
                                    <MagneticButton>
                                        <Button
                                            size="lg"
                                            className="bg-accent hover:bg-accent/90 text-primary text-xl font-extrabold px-8 py-8 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105 active:scale-95"
                                            onClick={handleVote}
                                        >
                                            <span suppressHydrationWarning className="flex items-center gap-2">
                                                Buy New Policy
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

                                <ScrollReveal animation="elastic" delay={0.9}>
                                    <MagneticButton>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="bg-white/10 lg:bg-transparent border-white/30 text-white hover:bg-white hover:text-primary text-xl font-bold px-8 py-8 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                                            onClick={() => {
                                                trackCTAClick('Hero: Get Claim Support');
                                                const servicesSection = document.getElementById('services');
                                                if (servicesSection) {
                                                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            <span suppressHydrationWarning className="flex items-center gap-2">
                                                <ShieldCheck className="w-5 h-5" />
                                                Get Claim Support
                                            </span>
                                        </Button>
                                    </MagneticButton>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal animation="fade-in" delay={1.1}>
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 pr-4 rounded-full backdrop-blur-sm hover:border-accent/40 transition-colors group">
                                        <div className="relative w-10 h-10 rounded-full border-2 border-accent overflow-hidden shrink-0">
                                            <Image
                                                src="/assets/images/trust/advisor-hari.png"
                                                alt="Hari Kotian"
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                        <div className="text-left">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <p className="text-[12px] font-bold text-white group-hover:text-accent transition-colors">{t("trust_signals.advisor_name")}</p>
                                            </div>
                                            <p className="text-[10px] text-gray-400 font-medium">{t("trust_signals.advisor_subtitle")}</p>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                                            <ShieldCheck className="w-4 h-4 text-accent" />
                                            <span className="text-white">{t("approx_30_seconds")}</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Side: Quick Lead Form */}
                        <div className="w-full lg:w-auto flex-shrink-0">
                            <ScrollReveal animation="slide-left" delay={0.7}>
                                <ShortLeadForm />
                            </ScrollReveal>
                        </div>
                    </div>

                    <ScrollReveal animation="fade-in" delay={1.2}>
                        <div className="pt-4 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">{t("trust_signals.licensed_badge")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-accent" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">{t("trust_signals.expert_badge")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest uppercase">{t("trust_signals.secure_badge")}</span>
                            </div>
                        </div>
                        
                        {/* Flagship Trending Links */}
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] w-full mb-1">Trending in Bangalore:</span>
                            {[
                                { label: "Health Insurance Advisor in Bangalore", href: "/locations/bangalore/health-insurance" },
                                { label: "LIC Agent in Bangalore", href: "/locations/bangalore/lic-agent" },
                                { label: "Buy Term Insurance", href: "/services/term-insurance" },
                                { label: "Policy Revival Help", href: "/resources/guides/lapsed-policy-revival" },
                                { label: "Death Claim Expert", href: "/resources/guides/death-claim-settlement" }
                            ].map((link, i) => (
                                <Link 
                                    key={i} 
                                    href={link.href}
                                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        
                        <p className="text-[10px] text-gray-500 mt-4 italic">{t("trust_signals.privacy_promise")}</p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-in" delay={1.5}>
                        <SocialShareButtons url={currentUrl} title={shareTitle} />
                    </ScrollReveal>

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
