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
import FAQJsonLd from '@/components/FAQJsonLd';
import { faqData, FAQItem } from '@/data/faqData';

// Map blog categories to FAQ categories
const categoryToFaqMap: Record<string, string[]> = {
    'LIC': ['Life'],
    'LIC Policy': ['Life'],
    'Life Insurance': ['Life'],
    'Health Insurance': ['Health'],
    'Medical Insurance': ['Health'],
    'Motor Insurance': ['Motor'],
    'Car Insurance': ['Motor'],
    'Term Insurance': ['Term'],
    'Claims': ['General'],
    'Claim Rejection': ['General'],
    'Claim Settlement': ['General'],
    'Death Claim': ['Life'],
    'Policy Revival': ['Life'],
    'Policy Management': ['Life'],
    'Renewal': ['General', 'Motor', 'Health'],
    'Senior Citizens': ['Life'],
    'Family Planning': ['Health', 'Life'],
    'Tax': ['General', 'Life'],
    'Investment': ['Life'],
    'ULIP': ['Life'],
    'Critical Illness Insurance': ['Health', 'Term'],
    'Home Insurance': ['General'],
    'Travel Insurance': ['General'],
    'Loans': ['Life'],
    'No Claim Bonus': ['Motor'],
    'IRDAI': ['General'],
    'Consumer Rights': ['General'],
    'Legal': ['General'],
    'Insurance Claims': ['General'],
    'Insurance Tips': ['General'],
    'Insurance Guide': ['General'],
    'How-To': ['General'],
    'Guides': ['General'],
    'Support': ['General'],
    'Planning': ['Life', 'Health'],
    'Finance': ['Life', 'General'],
    'Money Saving': ['General', 'Motor'],
    'Insurance Comparison': ['General'],
    'Insurance Calculator': ['General'],
    'New Plans': ['Life', 'Health'],
    'Trends': ['Health', 'General'],
    '2026': ['General'],
    'India': ['General'],
    'Bangalore': ['Motor', 'General'],
    'Tier-2 Cities': ['General'],
    'ICICI Lombard': ['Health', 'Motor'],
};

interface BlogFAQProps {
    categories: string[];
    // t prop removed - uses useTranslation internally
}

export default function BlogFAQ({ categories }: { categories: string[] }) {
    const { t } = useTranslation();
    if (!categories || categories.length === 0) return null;

    // Find relevant FAQs based on blog categories
    const matchedFaqs: FAQItem[] = [];
    const seenSlugs = new Set<string>();

    for (const cat of categories) {
        const faqCats = categoryToFaqMap[cat];
        if (!faqCats) continue;

        for (const faq of faqData) {
            if (faqCats.includes(faq.category) && !seenSlugs.has(faq.slug)) {
                matchedFaqs.push(faq);
                seenSlugs.add(faq.slug);
            }
        }
    }

    // If no category matches, show a few general FAQs
    if (matchedFaqs.length === 0) {
        const generalFaqs = faqData.filter(f => f.category === 'General').slice(0, 4);
        matchedFaqs.push(...generalFaqs);
    }

    // Limit to 6 FAQs max
    const displayFaqs = matchedFaqs.slice(0, 6);

    if (displayFaqs.length === 0) return null;

    // Build JSON-LD data
    const jsonLdFaqs = displayFaqs.map(faq => ({
        question: t(faq.questionKey),
        answer: t(faq.answerKey),
    }));

    return (
        <>
            <FAQJsonLd faqs={jsonLdFaqs} />
            <section className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {t('frequently_asked_questions')}
                    </h2>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                    <Accordion type="single" collapsible className="w-full">
                        {displayFaqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.slug}
                                value={`faq-${index}`}
                                className="border-b-slate-200 dark:border-b-slate-700"
                            >
                                <AccordionTrigger className="text-left font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-4">
                                    {t(faq.questionKey)}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-3 pb-4">
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <AutoLinker text={t(faq.answerKey)} />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    );
}
