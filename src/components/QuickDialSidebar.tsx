"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Layers, Star, MessageSquare, Phone, Plus, BookOpen, ArrowLeftRight, X, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

const QuickDialSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<'left' | 'right'>('right');
    const router = useRouter();
    const pathname = usePathname();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const togglePosition = () => {
        setPosition(prev => prev === 'right' ? 'left' : 'right');
    };

    const scrollToSection = (id: string) => {
        // Handle external/page routes
        if (id.startsWith('/')) {
            router.push(id);
            setIsOpen(false);
            return;
        }

        // If not on home page, push to home with hash
        if (pathname !== "/") {
            router.push(`/#${id}`);
            setIsOpen(false);
            return;
        }

        // If on home page, smooth scroll
        const element = document.getElementById(id);
        if (element) {
            // Use requestAnimationFrame to prevent forced reflow by decoupling read/write
            requestAnimationFrame(() => {
                element.scrollIntoView({ behavior: "smooth" });
            });
            setIsOpen(false);
        }
    };

    const navItems = [
        { id: "hero", icon: Home, label: "Home" },
        { id: "services", icon: Layers, label: "Services" },
        { id: "/loans", icon: Banknote, label: "Loans" },
        { id: "features", icon: Star, label: "Features" },
        { id: "blog", icon: BookOpen, label: "Blog" },
        { id: "testimonials", icon: MessageSquare, label: "Reviews" },
        { id: "contact", icon: Phone, label: "Contact" },
    ];

    return (
        <div
            className={cn(
                "fixed top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 pointer-events-none transition-all duration-500",
                position === 'right' ? "right-6 items-end" : "left-6 items-start"
            )}
        >

            {/* Sidebar Navigation */}
            <div
                className={cn(
                    "flex flex-col gap-3 transition-all duration-300 pointer-events-auto",
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none",
                    // Slide direction depends on position
                    !isOpen && (position === 'right' ? "translate-x-10" : "-translate-x-10")
                )}
            >
                {/* Position Switcher */}
                <div className={cn("group relative flex items-center", position === 'right' ? "justify-end" : "justify-start")}>
                    <span className={cn(
                        "absolute bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md",
                        position === 'right' ? "right-12" : "left-12"
                    )}>
                        Switch Side
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full shadow-md h-8 w-8 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                        onClick={togglePosition}
                        aria-label="Switch sidebar position"
                    >
                        <ArrowLeftRight className="h-3 w-3 text-gray-600 dark:text-gray-300" />
                    </Button>
                </div>

                {navItems.map((item) => (
                    <div key={item.id} className={cn("group relative flex items-center", position === 'right' ? "justify-end" : "justify-start")}>
                        {/* Tooltip Label */}
                        <span className={cn(
                            "absolute bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md",
                            position === 'right' ? "right-12" : "left-12"
                        )}>
                            {item.label}
                        </span>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full shadow-lg h-10 w-10 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                            onClick={() => scrollToSection(item.id)}
                            aria-label={item.label}
                        >
                            <item.icon className="h-4 w-4 text-primary" />
                        </Button>
                    </div>
                ))}
            </div>

            {/* Main Toggle Dial */}
            <div className="relative pointer-events-auto group">
                {/* Floating "Menu" Label (Only when closed) */}
                {!isOpen && (
                    <div className={cn(
                        "absolute top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg pointer-events-none transition-all duration-300 backdrop-blur-sm border border-white/10",
                        position === 'right' ? "right-16 opacity-100" : "left-16 opacity-100"
                    )}>
                        MENU
                    </div>
                )}

                {/* Pulsing Highlight Rings (Only when closed) */}
                {!isOpen && (
                    <>
                        {/* Outer Ring */}
                        <div className="absolute inset-0 -m-1 rounded-full bg-accent/40 animate-ping opacity-20"></div>
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-accent/30 animate-pulse blur-md"></div>
                    </>
                )}

                <Button
                    size="lg"
                    className={cn(
                        "rounded-full h-14 w-14 shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-500 relative z-10 border-2 border-white/20",
                        isOpen
                            ? "bg-slate-800 hover:bg-slate-900 rotate-[135deg]"
                            : "bg-gradient-to-br from-yellow-400 via-accent to-yellow-600 hover:scale-110 hover:shadow-[0_0_40px_rgba(234,179,8,0.8)]"
                    )}
                    onClick={toggleSidebar}
                    aria-label="Quick Menu"
                >
                    <Plus className={cn("h-8 w-8 text-white transition-colors drop-shadow-md", !isOpen && "text-white")} />
                </Button>
            </div>
        </div>
    );
};

export default QuickDialSidebar;
