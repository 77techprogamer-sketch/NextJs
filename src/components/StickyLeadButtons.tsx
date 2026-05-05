"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyLeadButtons() {
    const [whatsappUrl, setWhatsappUrl] = React.useState(`https://wa.me/${contactConfig.phone.replace(/\+/g, '')}?text=Hi, I need assistance with insurance.`);

    React.useEffect(() => {
        if (typeof window === 'undefined') return;

        const path = window.location.pathname;
        let message = "Hi, I need help with insurance.";

        if (path.includes('locations')) {
            const parts = path.split('/').filter(Boolean);
            const locationsIndex = parts.indexOf('locations');
            const cityPart = parts[locationsIndex + 2]?.replace(/-/g, ' ');
            const servicePart = parts[locationsIndex + 3]?.replace(/-/g, ' ');
            message = `Hi, I am looking for ${servicePart || 'insurance'} support in ${cityPart || 'my city'}.`;
        }

        const encodedMessage = encodeURIComponent(message);
        setWhatsappUrl(`https://wa.me/${contactConfig.phone.replace(/\+/g, '')}?text=${encodedMessage}`);
    }, []);

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex gap-3"
            >
                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </a>
                <a 
                    href={`tel:${contactConfig.phone}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                >
                    <Phone className="w-5 h-5 shadow-sm" />
                    Call Now
                </a>
            </motion.div>
        </AnimatePresence>
    );
}
