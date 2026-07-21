"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeadMagnetCTAProps {
    title: string;
    subtitle?: string;
    description: string;
    ctaText: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
    scrollTargetId?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

const LeadMagnetCTA: React.FC<LeadMagnetCTAProps> = ({
    title,
    subtitle,
    description,
    ctaText,
    icon,
    href,
    onClick,
    scrollTargetId,
    variant = 'primary',
    className
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (scrollTargetId) {
            const el = document.getElementById(scrollTargetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else if (href) window.location.href = href;
        } else if (href) {
            window.location.href = href;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "relative p-8 rounded-3xl border shadow-xl overflow-hidden group",
                variant === 'primary' ? "bg-slate-900 text-white border-slate-800" : "bg-white text-slate-900 border-slate-100",
                className
            )}
        >
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex-1 text-center md:text-left">
                    {subtitle && (
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                            {subtitle}
                        </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                        {title}
                    </h3>
                    <p className={cn(
                        "text-lg mb-6 max-w-2xl leading-relaxed",
                        variant === 'primary' ? "text-slate-400" : "text-slate-600"
                    )}>
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Button
                            size="lg"
                            onClick={handleClick}
                            className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-xl shadow-lg shadow-primary/20 group/btn"
                        >
                            {ctaText}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                <div className="shrink-0">
                    <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner",
                        variant === 'primary' ? "bg-slate-800" : "bg-slate-50"
                    )}>
                        {icon}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LeadMagnetCTA;
