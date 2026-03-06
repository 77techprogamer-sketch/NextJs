"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppWidget = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show widget after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1500);
        const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const whatsappUrl = "https://wa.me/918197711411?text=Hi%20Insurance%20Support,%20I%20have%20a%20question%20about%20my%20policy.";

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-3 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <div className="flex flex-col items-start gap-3 pointer-events-auto">
                        {/* Tooltip */}
                        <AnimatePresence>
                            {showTooltip && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.8 }}
                                    className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-3 pr-8 rounded-2xl rounded-bl-none shadow_xl max-w-[200px]"
                                >
                                    <button
                                        onClick={() => setShowTooltip(false)}
                                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">
                                        {t("whatsapp_widget_hook") || "Need help with a rejected claim? Chat with us!"}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Button */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative group"
                        >
                            {/* Pulsing ring */}
                            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />

                            <div className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all">
                                <MessageCircle className="w-8 h-8 fill-current" />
                            </div>

                            {/* Online Badge */}
                            <div className="absolute top-0 right-0 w-4 h-4 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border-2 border-[#25D366]">
                                <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                            </div>
                        </motion.a>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WhatsAppWidget;
