"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { contactConfig } from "@/data/contact";

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

            <Button
                size="lg"
                onClick={onGetQuote}
                className="rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-7 group relative overflow-hidden"
            >
                <span className="mr-2 relative z-10">{t("buy_insurance_cta", "Buy Policy / Get Quote")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                {/* Subtle pulse background */}
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 rounded-full"></span>
            </Button>
        </div>
    );
};

export default FloatingCTA;
