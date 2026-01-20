"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Layers, Star, MessageSquare, Phone, Plus, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const QuickDialSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    const navItems = [
        { id: "hero", icon: Home, label: "Home" },
        { id: "services", icon: Layers, label: "Services" },
        { id: "features", icon: Star, label: "Features" },
        { id: "blog", icon: BookOpen, label: "Blog" },
        { id: "testimonials", icon: MessageSquare, label: "Reviews" },
        { id: "contact", icon: Phone, label: "Contact" },
    ];

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end gap-4 pointer-events-none">

            {/* Sidebar Navigation */}
            <div
                className={cn(
                    "flex flex-col gap-2 transition-all duration-300 pointer-events-auto",
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
                )}
            >
                {navItems.map((item) => (
                    <div key={item.id} className="group relative flex items-center justify-end">
                        {/* Tooltip Label */}
                        <span className="absolute right-12 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {item.label}
                        </span>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full shadow-lg h-10 w-10 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                            onClick={() => scrollToSection(item.id)}
                        >
                            <item.icon className="h-4 w-4 text-primary" />
                        </Button>
                    </div>
                ))}
            </div>

            {/* Main Toggle Dial */}
            <Button
                size="lg"
                className={cn(
                    "rounded-full h-14 w-14 shadow-xl pointer-events-auto transition-transform duration-500",
                    isOpen ? "rotate-[135deg] bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
                )}
                onClick={toggleSidebar}
            >
                <Plus className="h-8 w-8 text-white" />
            </Button>
        </div>
    );
};

export default QuickDialSidebar;
