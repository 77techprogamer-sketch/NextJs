"use client";

import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BadgeIndianRupee, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { trackCTAClick } from '@/utils/trackCta';

interface LoansHeroSectionProps {
    onGetQuote: () => void;
    customTitle?: string;
    customDescription?: string;
}

const LoansHeroSection: React.FC<LoansHeroSectionProps> = ({ onGetQuote, customTitle, customDescription }) => {
    const { t } = useTranslation();

    const handleApplyNow = () => {
        trackCTAClick('Loans Hero: Apply Now');
        onGetQuote();
    };

    const handleLearnMore = () => {
        trackCTAClick('Loans Hero: Learn More');
        const loansSection = document.getElementById('loans');
        if (loansSection) {
            loansSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <section id="loans-hero" className="relative w-full h-auto pb-32 pt-12 flex flex-col overflow-hidden bg-primary text-white">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(30,58,138,0.8),_transparent),_radial-gradient(circle_at_80%_70%,_rgba(30,58,138,0.8),_transparent)]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20"></div>

                <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center text-center space-y-6">

                    {/* Badges */}
                    <div className="min-h-[32px] flex flex-wrap items-center justify-center gap-4 mb-4">
                        <ScrollReveal animation="fade-up" delay={0.2} width="fit-content" enableAnimation={false}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-accent hover:scale-105 transition-transform duration-300">
                                <BadgeIndianRupee className="w-4 h-4 fill-accent animate-pulse" />
                                <span>Lowest Interest Rates Guaranteed</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={0.3} width="fit-content" enableAnimation={false}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md text-sm font-medium text-green-400 hover:scale-105 transition-transform duration-300">
                                <Clock className="w-4 h-4" />
                                <span>Quick Approvals in 24–48 hrs</span>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Title */}
                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            {customTitle || t("loans_hero_title")}
                        </h1>
                        <ScrollReveal animation="fade-up" delay={0.6} width="100%" enableAnimation={false}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                {customDescription || t("loans_hero_description")}
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <ScrollReveal animation="elastic" delay={0.8}>
                            <MagneticButton>
                                <Button
                                    size="lg"
                                    className="bg-accent hover:bg-accent/90 text-primary text-xl font-extrabold px-8 py-8 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105 active:scale-95"
                                    onClick={handleApplyNow}
                                >
                                    <span className="flex items-center gap-2">
                                        Apply for a Loan
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
                                    className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-xl font-bold px-8 py-8 rounded-full transition-all transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                                    onClick={handleLearnMore}
                                >
                                    <span className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Check Eligibility
                                    </span>
                                </Button>
                            </MagneticButton>
                        </ScrollReveal>
                    </div>

                    {/* Trust Badges */}
                    <ScrollReveal animation="fade-in" delay={1.1}>
                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-[12px] font-bold text-white">Loan Experts Available Now</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                                    <ShieldCheck className="w-4 h-4 text-accent" />
                                    <span className="text-white">100% Secure Process</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Trending Loan Links */}
                    <ScrollReveal animation="fade-in" delay={1.2}>
                        <div className="pt-4 mt-4 flex flex-wrap justify-center gap-3">
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] w-full mb-1">Popular Loan Types:</span>
                            {[
                                { label: "Home Loan", href: "#loans" },
                                { label: "Personal Loan", href: "#loans" },
                                { label: "Business Loan", href: "#loans" },
                                { label: "Vehicle Loan", href: "#loans" },
                                { label: "Education Loan", href: "#loans" },
                            ].map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    onClick={handleLearnMore}
                                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 pt-8">
                        <ScrollReveal animation="pop-up" delay={1.2}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">5000+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Loans Disbursed</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="pop-up" delay={1.3}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">8.5%</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Starting Interest Rate</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="pop-up" delay={1.4}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">24hrs</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Avg. Approval Time</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="pop-up" delay={1.5}>
                            <div className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">20+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Lending Partners</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
};

export default LoansHeroSection;
