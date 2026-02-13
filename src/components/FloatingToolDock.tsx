"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, FileSearch, X, Menu, Calculator, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FloatingToolDock = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const tools = [
        {
            title: t('get_insurance_iq'),
            icon: <Target className="w-5 h-5" />,
            link: '/tools/risk-scorecard',
            color: 'bg-primary'
        },
        {
            title: t('recover_lost_policy'),
            icon: <FileSearch className="w-5 h-5" />,
            link: '/tools/policy-recovery',
            color: 'bg-accent text-primary'
        }
    ];

    return (
        <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col gap-3 items-start mb-2">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
                                transition={{ delay: (tools.length - index) * 0.1 }}
                            >
                                <Link
                                    href={tool.link}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm whitespace-nowrap border-2 border-white/20 backdrop-blur-md transition-transform hover:scale-105 active:scale-95",
                                        tool.color === 'bg-primary' ? 'bg-primary/95 text-white' : 'bg-accent/95 text-primary'
                                    )}
                                >
                                    <div className="p-1.5 bg-white/20 rounded-lg">
                                        {tool.icon}
                                    </div>
                                    {tool.title}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -180 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary),0.3)] border-4 border-white dark:border-slate-900 transition-all duration-300",
                            isOpen ? "bg-slate-800 text-white -rotate-90" : "bg-primary text-white"
                        )}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Calculator className="w-8 h-8" />}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingToolDock;
