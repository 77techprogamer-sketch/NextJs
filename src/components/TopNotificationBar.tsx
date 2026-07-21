"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TopNotificationBar: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const hasDismissed = sessionStorage.getItem('notification_bar_dismissed');
        if (hasDismissed) {
            setIsVisible(false);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem('notification_bar_dismissed', 'true');
    };

    const handleAction = () => {
        if (typeof window !== 'undefined' && (window as any).triggerGlobalForm) {
            (window as any).triggerGlobalForm({
                insuranceType: 'general_inquiry',
                formData: { source: 'top_notification_bar' }
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-accent text-primary relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_right,white,transparent)]" />
                    
                    <div className="container mx-auto px-4 py-2.5 sm:py-3 relative z-10">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left pr-8 sm:pr-12">
                            <div className="flex items-center gap-2 text-sm sm:text-base font-bold">
                                <Sparkles className="w-4 h-4 animate-pulse hidden sm:block" />
                                <span>{t('limited_time_offer', 'Limited Time Offer:')}</span>
                                <span className="font-medium text-primary/80 hidden sm:inline">
                                    {t('get_free_review_text', 'Get a free 15-minute expert policy review')}
                                </span>
                            </div>
                            
                            <button
                                onClick={handleAction}
                                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow"
                            >
                                {t('claim_offer', 'Claim Now')}
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                        
                        <button
                            onClick={handleDismiss}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 text-primary/60 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                            aria-label="Dismiss notification"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TopNotificationBar;
