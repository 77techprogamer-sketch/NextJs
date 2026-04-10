"use client";

import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import { trackCTAClick } from '@/utils/trackCta';

export default function StickyMobileContactBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 50;
                    const isAtBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight - 100;

                    if (isAtBottom) {
                        setIsVisible(false);
                    } else if (isScrollingDown) {
                        setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                    
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div 
            className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <div className="flex h-16 w-full items-center">
                <a 
                    href={contactConfig.getDialUrl()}
                    onClick={() => trackCTAClick('Sticky Mobile: Call')}
                    className="flex-1 flex items-center justify-center gap-2 h-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] transition-colors"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    <span>Call LIC Advisor</span>
                </a>
                <a 
                    href={contactConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('Sticky Mobile: WhatsApp')}
                    className="flex items-center justify-center h-full aspect-square bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-6 h-6 fill-current" />
                </a>
            </div>
        </div>
    );
}
