"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface FloatingCTAProps {
    onGetQuote: () => void;
}

const FloatingCTA = ({ onGetQuote }: FloatingCTAProps) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(110); // Above ChatbotWidget (64px height + 24px gap + buffer)

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Visibility logic
                    if (window.scrollY > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }

                    // Footer collision logic
                    const footer = document.querySelector('footer');
                    if (footer) {
                        const footerRect = footer.getBoundingClientRect();
                        const windowHeight = window.innerHeight;

                        // If footer is visible in the viewport
                        if (footerRect.top < windowHeight) {
                            // Calculate how much of the footer is visible
                            const visibleFooterHeight = windowHeight - footerRect.top;
                            // Set offset to be visible footer height + default spacing
                            setBottomOffset(visibleFooterHeight + 110);
                        } else {
                            // Reset to default if footer is not visible
                            setBottomOffset(110);
                        }
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed right-6 z-50 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-[bottom] ease-out"
            style={{ bottom: `${bottomOffset}px` }}
        >
            {/* WhatsApp Pulse Button */}
            <a
                href="https://wa.me/919986634506"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative group"
                aria-label="Chat on WhatsApp"
            >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 z-[-1]"></span>
            </a>

            <Button
                size="lg"
                onClick={onGetQuote}
                className="rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-7 group relative overflow-hidden"
            >
                <span className="mr-2 relative z-10">{t("get_a_free_quote", "Get a Quote")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                {/* Subtle pulse background */}
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 rounded-full"></span>
            </Button>
        </div>
    );
};

export default FloatingCTA;
