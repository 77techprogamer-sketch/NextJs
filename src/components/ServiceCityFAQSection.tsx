import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from '@/data/faqData';
// We'll import translations directly for simplicity in the server component context
import enTranslations from '../../public/locales/en/translation.json';

interface Props {
    cityName: string;
    stateName: string;
    serviceLabel: string;
    serviceCategory: string; // 'Life', 'Health', etc.
}

export default function ServiceCityFAQSection({ cityName, stateName, serviceLabel, serviceCategory }: Props) {
    // Filter FAQs by category and pick up to 5
    const categoryFaqs = faqData
        .filter(item => item.category === serviceCategory || item.category === 'General')
        .slice(0, 6);

    const faqs = categoryFaqs.map(item => {
        // Get translations from the JSON
        const question = (enTranslations as any)[item.questionKey] || 'Insurance Question?';
        const answer = (enTranslations as any)[item.answerKey] || 'Contact us for details.';

        // Personalize the question with the city name for local SEO
        const localQuestion = question.includes('?') 
            ? question.replace('?', ` in ${cityName}?`)
            : `${question} in ${cityName}`;

        // Personalize the answer with city/state context
        const localAnswer = `${answer} Our experts in ${cityName}, ${stateName.replace(/-/g, ' ')} provide doorstep assistance for these cases.`;

        return { question: localQuestion, answer: localAnswer };
    });

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };

    return (
        <div className="mt-16 bg-slate-50 dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
                {serviceLabel} FAQs for {cityName} Residents
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-none bg-white dark:bg-slate-900 rounded-xl px-4 shadow-sm">
                        <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-slate-200 hover:no-underline py-4">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400 pb-4 leading-relaxed">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
