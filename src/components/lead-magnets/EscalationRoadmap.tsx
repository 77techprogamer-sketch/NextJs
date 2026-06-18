"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ArrowRight, FileDown, ShieldCheck, Clock, ShieldAlert, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import QuoteForm from '@/components/QuoteForm';

const EscalationRoadmap: React.FC = () => {
    const { t } = useTranslation();
    const [showForm, setShowForm] = useState(false);

    const steps = [
        { 
            id: 'day1', 
            icon: Clock, 
            color: 'blue',
            title: t('lead_magnets.escalation_roadmap.steps.day1.title'), 
            desc: t('lead_magnets.escalation_roadmap.steps.day1.desc') 
        },
        { 
            id: 'day15', 
            icon: MessageSquare, 
            color: 'amber',
            title: t('lead_magnets.escalation_roadmap.steps.day15.title'), 
            desc: t('lead_magnets.escalation_roadmap.steps.day15.desc') 
        },
        { 
            id: 'day30', 
            icon: ShieldAlert, 
            color: 'red',
            title: t('lead_magnets.escalation_roadmap.steps.day30.title'), 
            desc: t('lead_magnets.escalation_roadmap.steps.day30.desc') 
        },
        { 
            id: 'day60', 
            icon: ShieldCheck, 
            color: 'green',
            title: t('lead_magnets.escalation_roadmap.steps.day60.title'), 
            desc: t('lead_magnets.escalation_roadmap.steps.day60.desc') 
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('lead_magnets.escalation_roadmap.title')}</h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t('lead_magnets.escalation_roadmap.description')}</p>
                </div>

                {!showForm ? (
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
                        
                        <div className="space-y-12 md:space-y-24 relative">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                const isEven = idx % 2 === 0;
                                return (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={cn(
                                            "flex flex-col md:flex-row items-center gap-8",
                                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        )}
                                    >
                                        <div className="flex-1 text-center md:text-right">
                                            {isEven ? (
                                                <div className="md:pr-12">
                                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                                    <p className="text-slate-600">{step.desc}</p>
                                                </div>
                                            ) : (
                                                <div className="md:pl-12 text-center md:text-left">
                                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                                    <p className="text-slate-600">{step.desc}</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center shrink-0">
                                            <Icon className={cn(
                                                "w-5 h-5",
                                                step.color === 'blue' && "text-blue-600",
                                                step.color === 'amber' && "text-amber-600",
                                                step.color === 'red' && "text-red-600",
                                                step.color === 'green' && "text-green-600"
                                            )} />
                                        </div>

                                        <div className="flex-1 hidden md:block" />
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-16 text-center">
                            <Button 
                                size="lg"
                                onClick={() => setShowForm(true)}
                                className="bg-slate-900 hover:bg-slate-800 text-white px-10 h-14 rounded-2xl shadow-xl group"
                            >
                                <FileDown className="mr-2 h-5 w-5" />
                                {t('lead_magnets.escalation_roadmap.cta')}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto"
                    >
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Enter Details to Download Roadmap</h4>
                            <QuoteForm insuranceType="roadmap_download" />
                            <Button 
                                variant="ghost" 
                                onClick={() => setShowForm(false)}
                                className="w-full mt-4 text-slate-400 hover:text-primary"
                            >
                                Back to Roadmap
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default EscalationRoadmap;
