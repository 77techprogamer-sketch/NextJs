"use client";

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, FileSearch, ArrowRight, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ToolIslands = () => {
    const { t } = useTranslation();

    const islands = [
        {
            title: t('island_risk_title'),
            description: t('island_risk_desc'),
            icon: <Target className="w-8 h-8 text-primary" />,
            link: '/tools/risk-scorecard',
            badge: t('most_popular_tool'),
            color: 'from-primary/10 to-blue-500/5',
            borderColor: 'border-primary/20',
            iconBg: 'bg-primary/10'
        },
        {
            title: t('island_recovery_title'),
            description: t('island_recovery_desc'),
            icon: <FileSearch className="w-8 h-8 text-accent" />,
            link: '/tools/policy-recovery',
            badge: t('expert_service'),
            color: 'from-accent/10 to-yellow-500/5',
            borderColor: 'border-accent/20',
            iconBg: 'bg-accent/10'
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <ScrollReveal animation="fade-up">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                            {t('interactive_tools_title')}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">
                            {t('interactive_tools_desc')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {islands.map((island, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={index * 0.2}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link href={island.link} className="block group">
                                    <div className={`relative p-8 rounded-[2rem] border-2 ${island.borderColor} bg-gradient-to-br ${island.color} backdrop-blur-xl h-full flex flex-col justify-between overflow-hidden`}>
                                        {/* Background Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-500" />

                                        <div className="space-y-6 relative z-10">
                                            <div className="flex justify-between items-start">
                                                <div className={`p-4 rounded-2xl ${island.iconBg}`}>
                                                    {island.icon}
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full bg-white/50 dark:bg-slate-900/50 border border-white/20">
                                                    {island.badge}
                                                </span>
                                            </div>

                                            <div className="space-y-3">
                                                <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                                    {island.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                    {island.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center justify-between relative z-10">
                                            <span className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                                                {t('open_tool')}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                            </span>

                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[8px] font-bold overflow-hidden">
                                                        <Image src={`https://i.pravatar.cc/100?u=${island.title}${i}`} alt="user" width={28} height={28} className="w-full h-full object-cover grayscale" />
                                                    </div>
                                                ))}
                                                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-[8px] font-bold text-white">
                                                    +5k
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolIslands;
