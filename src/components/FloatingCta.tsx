"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { contactConfig } from "@/data/contact";

export default function FloatingCta() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col gap-3"
                    >
                        {/* Call Button */}
                        <a
                            href={contactConfig.getDialUrl()}
                            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-bold text-sm whitespace-nowrap">{t("call_now")}</span>
                        </a>
                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent("Hi Hari Kotian, I need help with my insurance.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-bold text-sm whitespace-nowrap">WhatsApp</span>
                        </a>
                        {/* Review Button */}
                        <a
                            href="/review"
                            className="flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-slate-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="font-bold text-sm whitespace-nowrap">{t("leave_review")}</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ${
                    isOpen ? "bg-slate-700 hover:bg-slate-800 rotate-0" : "bg-primary hover:bg-primary/90"
                }`}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Phone className="w-6 h-6 text-white" />
                )}
            </button>
        </div>
    );
}
