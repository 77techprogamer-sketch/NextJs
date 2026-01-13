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

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <a
                href="tel:+919986634506"
                className="h-12 w-12 rounded-full bg-white text-primary shadow-lg border border-primary/10 flex items-center justify-center hover:scale-110 transition-transform md:hidden"
                aria-label="Call Us"
            >
                <Phone className="h-5 w-5 fill-current" />
            </a>
            <Button
                size="lg"
                onClick={onGetQuote}
                className="rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-6 group"
            >
                <span className="mr-2">{t("get_a_free_quote", "Get a Quote")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </div>
    );
};

export default FloatingCTA;
