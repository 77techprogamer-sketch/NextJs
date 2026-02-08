"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, Headset, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Submit Inquiry",
        description: "Tell us about your insurance issue or loan requirement via our simple form.",
        icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
        color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        id: 2,
        title: "Expert Analysis",
        description: "Our experts review your case across LIC, Health, or Motor insurance records.",
        icon: <Search className="w-8 h-8 text-amber-500" />,
        color: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
        id: 3,
        title: "Consultation",
        description: "Receive a free advisory call within 24 hours to plan your recovery or application.",
        icon: <Headset className="w-8 h-8 text-purple-500" />,
        color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
        id: 4,
        title: "Resolution",
        description: "Successful claim settlement or policy revival with end-to-end support.",
        icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
        color: "bg-green-50 dark:bg-green-900/20"
    }
];

const ProcessTimeline = () => {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Insurance Support makes the complex simple. Follow our 4-step process to resolve your queries.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg relative`}>
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black dark:bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white dark:border-slate-950">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="#quote-form"
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                        >
                            Start Your Recovery Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
