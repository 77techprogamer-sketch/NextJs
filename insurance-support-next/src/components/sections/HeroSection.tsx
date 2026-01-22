"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SocialShareButtons from '@/components/SocialShareButtons';
import dynamic from 'next/dynamic';

const DateTimeDisplay = dynamic(() => import('@/components/DateTimeDisplay'), { ssr: false });

interface HeroSectionProps {
    city: string | null;
    onGetQuote: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ city, onGetQuote }) => {
    const { t } = useTranslation();
    const currentUrl = "https://insurance-support.vercel.app/";
    const shareTitle = t("hero_title");
    const dynamicOneLiner = t("secure_family_future") || "Comprehensive coverage for life, health, and vehicle tailored to your needs.";

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="hero" className="relative w-full h-auto pb-24 flex flex-col overflow-hidden bg-primary text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/50 via-primary to-primary"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

            <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center text-center space-y-4 pt-6">
                <React.Suspense fallback={<div className="absolute top-6 right-6 w-[180px] h-[38px] bg-white/10 rounded-full animate-pulse border border-white/10" />}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute top-6 right-6 z-50 pointer-events-none sm:pointer-events-auto"
                    >
                        <DateTimeDisplay className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/10 min-w-[180px] min-h-[38px] flex items-center justify-center pointer-events-auto" />
                    </motion.div>
                </React.Suspense>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 max-w-4xl mx-auto"
                >
                    <div className="min-h-[32px] flex items-center justify-center mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-accent">
                            <Star className="w-4 h-4 fill-accent" />
                            <span suppressHydrationWarning>{t("trusted_partner_banner", { city: city || 'Bangalore' })}</span>
                        </div>
                    </div>

                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] min-h-[1.1em] sm:min-h-[2.2em]">
                        <span suppressHydrationWarning>{t("hero_title_start", "Secure Your")}</span> <span suppressHydrationWarning className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent animate-shimmer bg-[length:200%_auto]">{t("hero_title_highlight", "Future")}</span>
                        <br className="hidden sm:block" /> <span suppressHydrationWarning>{t("hero_title_end", "With Expert Guidance")}</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed" suppressHydrationWarning>
                        {dynamicOneLiner || "Comprehensive coverage for life, health, and vehicle tailored to your needs."}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto pt-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: ["0px 0px 0px rgba(234, 179, 8, 0)", "0px 0px 20px rgba(234, 179, 8, 0.5)", "0px 0px 0px rgba(234, 179, 8, 0)"]
                        }}
                        transition={{
                            boxShadow: { duration: 2, repeat: Infinity }
                        }}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-primary text-lg w-full font-bold px-8 py-7 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all"
                            onClick={onGetQuote}
                        >
                            <span suppressHydrationWarning>{t("get_a_free_quote")}</span>
                        </Button>
                    </motion.div>
                    <SocialShareButtons url={currentUrl} title={shareTitle} />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 pt-8 animate-fade-up [animation-delay:400ms]">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-bold text-white">15k+</span>
                        <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("clients")}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-bold text-white">98%</span>
                        <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("claims_settled_stat")}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-bold text-white">24/7</span>
                        <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("support_stat_label")}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-bold text-white">50+</span>
                        <span className="text-sm text-gray-400 uppercase tracking-wider font-medium" suppressHydrationWarning>{t("awards")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
