"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';
import { AutoLinker } from '@/components/AutoLinker';

import { faqData } from '@/data/faqData';
import Link from 'next/link';

interface FAQSectionProps {
    items?: any[]; // Keep flexible if passed from props
}

const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
    const { t } = useTranslation();

    // specific subset for homepage if needed, or just take first 6
    const displayFaqs = items || faqData.slice(0, 6);

    return (
        <section className="py-12 sm:py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                        <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t("frequently_asked_questions")}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t("find_answers_to_common_questions")}
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                    <Accordion type="single" collapsible className="w-full">
                        {displayFaqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-200 dark:border-b-gray-800">
                                <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t(faq.questionKey)}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 dark:text-gray-400 space-y-3">
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <AutoLinker text={t(faq.answerKey)} />
                                    </div>
                                    {faq.slug && (
                                        <div className="pt-2">
                                            <Link
                                                href={`/resources/faq/${faq.slug}`}
                                                className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                                            >
                                                {t("read_detailed_answer", "Read detailed answer")} &rarr;
                                            </Link>
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
