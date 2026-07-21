"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, Target, FileSearch, ArrowRight, Activity } from 'lucide-react';
import Link from 'next/link';

const tools = [
    {
        title: "HLV Calculator",
        description: "Calculate your Human Life Value based on income, expenses, and liabilities.",
        icon: <Calculator className="w-6 h-6 text-primary" />,
        link: '/tools/human-life-value-calculator',
        badge: "Financial Planning"
    },
    {
        title: "Risk Scorecard",
        description: "Assess your insurance awareness and readiness.",
        icon: <Target className="w-6 h-6 text-primary" />,
        link: '/tools/risk-scorecard',
        badge: "Assessment"
    },
    {
        title: "Policy Recovery",
        description: "Get help recovering lost or unclaimed insurance policies.",
        icon: <FileSearch className="w-6 h-6 text-accent" />,
        link: '/tools/policy-recovery',
        badge: "Expert Service"
    },
    {
        title: "Term Calculator",
        description: "Estimate your term insurance premium requirements.",
        icon: <Activity className="w-6 h-6 text-blue-500" />,
        link: '/tools/term-calculator',
        badge: "Quick Quote"
    }
];

export default function CollapsibleToolsFooter() {
    return (
        <section className="w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="tools-section" className="border-none">
                        <AccordionTrigger className="text-xl font-bold py-6 hover:no-underline text-slate-800 dark:text-slate-200 hover:text-primary transition-colors">
                            <div className="flex items-center gap-3">
                                <Target className="w-6 h-6" />
                                Interactive Insurance Tools
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 pt-2">
                                {tools.map((tool, index) => (
                                    <Link href={tool.link} key={index} className="group block h-full">
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between group-hover:border-primary/50 relative overflow-hidden">
                                            <div>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
                                                        {tool.icon}
                                                    </div>
                                                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-full">
                                                        {tool.badge}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{tool.title}</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{tool.description}</p>
                                            </div>
                                            <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform w-max">
                                                Try Tool <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
