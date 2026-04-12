"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Hospital, Star, MessageCircle } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import ShortLeadForm from '@/components/ShortLeadForm';

const bangaloreHospitals = [
    "Manipal Hospital", "Apollo Hospitals", "Fortis Hospital", "Narayana Health", "Columbia Asia"
];

const HealthBangaloreClient = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Localized Hero with Lead Form */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        <div className="lg:max-w-2xl text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold mb-6"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>Expert Advisor in Bangalore</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                                {t("health_bangalore.hero_h1") || "Best Health Insurance in Bangalore"}
                            </h1>

                            <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                                {t("health_bangalore.hero_p") || "Compare plans with local expert guidance. We ensure your family is covered at Bangalore's top hospitals like Manipal, Apollo, and Fortis."}
                            </p>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-4">Cashless Support At:</p>
                                <div className="flex flex-wrap gap-4">
                                    {bangaloreHospitals.map(h => (
                                        <div key={h} className="flex items-center gap-2 text-sm text-white/70">
                                            <Hospital className="w-4 h-4 text-accent" />
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:max-w-md">
                            <ShortLeadForm />
                            <div className="mt-6">
                                <a href={contactConfig.whatsappUrl} className="w-full">
                                    <Button variant="outline" className="w-full h-14 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all font-bold group">
                                        <MessageCircle className="w-6 h-6 mr-3 group-hover:fill-white" />
                                        Chat with Expert Now
                                    </Button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Local Context Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
                            Why Consult a Local Bangalore Expert?
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Star className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">Network hospital insights</h4>
                                    <p className="text-slate-600 dark:text-slate-400">We know which hospitals in Indiranagar, Koramangala, and Hebbal have the best TPA desks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">Doorstep Claims Help</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Local presence means we can assist your family physically during emergencies if needed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
                                Bangalore Service Map
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-3xl shadow-xl">
                            <p className="text-3xl font-black">25+</p>
                            <p className="text-xs font-bold uppercase">Years in Bangalore</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HealthBangaloreClient;
