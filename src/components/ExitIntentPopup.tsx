"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const ExitIntentPopup: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        // Prevent triggering multiple times or if they have already closed it
        const hasClosed = localStorage.getItem('exit_intent_closed');
        if (hasClosed) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        };

        // For mobile: trigger on fast scroll up or after 45 seconds of inactivity
        let lastScrollY = window.scrollY;
        let lastScrollTime = Date.now();
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const currentTime = Date.now();
            
            if (currentScrollY < lastScrollY) {
                const distance = lastScrollY - currentScrollY;
                const timeDiff = currentTime - lastScrollTime;
                const speed = distance / timeDiff;
                
                // If scrolling up fast, and we haven't triggered yet, trigger it
                if (speed > 2 && !hasTriggered) {
                    setIsVisible(true);
                    setHasTriggered(true);
                }
            }
            
            lastScrollY = currentScrollY;
            lastScrollTime = currentTime;
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasTriggered]);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('exit_intent_closed', 'true');
    };

    const handleAction = () => {
        handleClose();
        if (typeof window !== 'undefined' && (window as any).triggerGlobalForm) {
            (window as any).triggerGlobalForm({
                insuranceType: 'general_inquiry',
                formData: { source: 'exit_intent' }
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10 bg-white/50 dark:bg-black/50 rounded-full backdrop-blur-sm"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="bg-primary p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                            
                            <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 border border-white/20">
                                <FileText className="w-8 h-8 text-accent" />
                            </div>
                            
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">
                                {t('wait_before_you_go', 'Wait! Before you leave...')}
                            </h2>
                            <p className="text-gray-200 text-sm sm:text-base relative z-10">
                                {t('free_consultation_offer', 'Get a free, no-obligation policy review or claim consultation with our IRDAI certified experts.')}
                            </p>
                        </div>

                        <div className="p-8 text-center bg-gray-50 dark:bg-gray-900">
                            <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                                {t('join_thousands', 'Join thousands of families who successfully recovered their rejected claims.')}
                            </p>
                            
                            <div className="flex flex-col gap-3">
                                <Button
                                    onClick={handleAction}
                                    size="lg"
                                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all group"
                                >
                                    {t('get_free_consultation', 'Get My Free Consultation')}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <button
                                    onClick={handleClose}
                                    className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-2 underline underline-offset-2"
                                >
                                    {t('no_thanks', 'No thanks, I\'ll figure it out myself')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
