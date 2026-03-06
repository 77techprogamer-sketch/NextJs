"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldAlert, FileSearch, Calculator, CheckCircle2, MessageCircle } from 'lucide-react';
import ShortLeadForm from '@/components/ShortLeadForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LICRevivalPage = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <FileSearch className="w-6 h-6 text-accent" />,
            title: t("lic_revival.step1"),
            desc: "Find lost policy numbers and current status."
        },
        {
            icon: <Calculator className="w-6 h-6 text-accent" />,
            title: t("lic_revival.step2"),
            desc: "Calculate late fees and health requirements."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-accent" />,
            title: t("lic_revival.step3"),
            desc: "Hassle-free submission with LIC officials."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Header />

            {/* Targeted Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        <div className="lg:max-w-2xl text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold mb-6"
                            >
                                <ShieldAlert className="w-4 h-4" />
                                <span>{t("lic_revival.title")}</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                                {t("lic_revival.hero_h1")}
                            </h1>

                            <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                                {t("lic_revival.hero_p")}
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200" />
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-[10px] font-bold text-primary">
                                        +5k
                                    </div>
                                </div>
                                <p className="text-sm text-white/60 font-medium">
                                    Helping people revive policies since 1998
                                </p>
                            </div>
                        </div>

                        {/* Quick Capture Box */}
                        <div className="w-full lg:max-w-md">
                            <ShortLeadForm />
                            <div className="mt-6 flex items-center justify-center gap-4">
                                <a
                                    href="https://wa.me/918197711411?text=Help%20me%20revive%20my%20LIC%20policy"
                                    className="w-full"
                                >
                                    <Button variant="outline" className="w-full h-12 rounded-xl border-green-500/30 bg-green-500/5 text-green-500 hover:bg-green-500 hover:text-white transition-all font-bold">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                        {t("lic_revival.process_title")}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Recovering a lapsed policy can be complex. We simplify it for you in three clear steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{f.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-20 bg-slate-100 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-accent text-6xl font-serif leading-none italic opacity-50 block mb-6">"</span>
                        <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
                            Managing insurance isn't just about math; it's about protecting family legacies. A lapsed policy is a broken promise—we help you fix it.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Hari Kotian</p>
                                <p className="text-sm text-slate-500">Expert Insurance Advisor (25+ Yrs)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LICRevivalPage;
