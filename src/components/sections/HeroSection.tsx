"use client";

import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import ShortLeadForm from '@/components/ShortLeadForm';
import { trackCTAClick } from '@/utils/trackCta';

interface HeroSectionProps {
    city: string | null;
    onGetQuote: () => void;
    title?: string;
    description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ city, onGetQuote, title: propTitle, description: propDescription }) => {
    const { t } = useTranslation();
    const shareTitle = propTitle || "India's #1 Claim Rejection Recovery Experts — 25 Years, IRDAI Certified.";
    const dynamicOneLiner = propDescription || "Has your claim been rejected? We've helped 15,000+ families get their money back. Get expert assistance in the next 48 hours.";

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
            <section id="hero" className="relative w-full h-auto pb-8 pt-4 flex flex-col overflow-hidden bg-primary text-white">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(30,58,138,0.8),_transparent),_radial-gradient(circle_at_80%_70%,_rgba(30,58,138,0.8),_transparent)]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center text-center space-y-4">

                    {/* Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-accent">
                            <Star className="w-4 h-4 fill-accent animate-pulse" />
                            <span suppressHydrationWarning>{t("expert_specialist_badge", { defaultValue: "Insurance Concierge & Expert Advocate" })}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md text-sm font-medium text-green-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span>{t("irdai_advisory")}</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                        <span suppressHydrationWarning>{shareTitle}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" suppressHydrationWarning>
                        {dynamicOneLiner || t("hero_fallback_description")}
                    </p>

                    {/* CTA + Advisor row */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-primary text-lg font-extrabold px-6 py-6 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105 active:scale-95"
                            onClick={handleVote}
                        >
                            <span className="flex items-center gap-2">
                                Request Case Assessment
                                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.div>
                            </span>
                        </Button>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 pr-4 rounded-full backdrop-blur-sm">
                            <div className="relative w-10 h-10 rounded-full border-2 border-accent overflow-hidden shrink-0">
                                <Image src="/assets/images/trust/advisor-hari.png" alt="Hari Kotian" width={40} height={40} className="object-cover" priority />
                            </div>
                            <div className="text-left">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <p className="text-[12px] font-bold text-white">{t("trust_signals.advisor_name")}</p>
                                </div>
                                <p className="text-[10px] text-gray-400 font-medium">{t("trust_signals.advisor_subtitle")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Lead Form */}
                    <div className="w-full max-w-md mx-auto">
                        <ShortLeadForm />
                    </div>

                    {/* Trust badges + Stats combined */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] font-bold tracking-widest uppercase opacity-80">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            <span>{t("trust_signals.licensed_badge")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-accent" />
                            <span>{t("trust_signals.expert_badge")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent font-extrabold text-sm">15k+</span>
                            <span>Clients</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent font-extrabold text-sm">98%</span>
                            <span>Claims Settled</span>
                        </div>
                    </div>

                    {/* Trending Links */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            { key: "trending_claim", label: "Claim Rejected?", href: "/claim-recovery" },
                            { key: "trending_health", label: "Health Insurance", href: "/services/health-insurance" },
                            { key: "trending_lic", label: "LIC Policy Help", href: "/services/lic-policy-support" },
                            { key: "trending_term", label: "Term Insurance", href: "/services/term-insurance" },
                            { key: "trending_review", label: "Free Policy Review", href: "/free-review" },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                            >
                                {t(`hero_links.${link.key}`, { city: city || 'Bangalore', defaultValue: link.label })}
                            </Link>
                        ))}
                    </div>

                    <p className="text-[10px] text-gray-500 italic">{t("trust_signals.privacy_promise")}</p>
                </div>
            </section>
        </LazyMotion>
    );
};

export default HeroSection;
