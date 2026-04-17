import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from '@/data/faqData';
import { getServerSideTranslation } from '@/lib/i18n-server';

interface Props {
    cityName: string;
    stateName: string;
    serviceLabel: string;
    serviceCategory: string; // 'Life', 'Health', etc.
}

export default async function ServiceCityFAQSection({ cityName, stateName, serviceLabel, serviceCategory }: Props) {
    const { t } = await getServerSideTranslation();

    // Filter FAQs by category and pick up to 6
    const categoryFaqs = faqData
        .filter(item => item.category === serviceCategory || item.category === 'General')
        .slice(0, 6);

    const faqs = categoryFaqs.map(item => {
        // Get translations from the dictionary
        const question = t(item.questionKey, 'Insurance Question?');
        const answer = t(item.answerKey, 'Contact us for details.');

        // Personalize the question with the city name for local SEO
        const localQuestion = question.includes('?') 
            ? question.replace('?', ` ${t('in_city', 'in')} ${cityName}?`)
            : `${question} ${t('in_city', 'in')} ${cityName}`;

        // Personalize the answer with city/state context
        const localAnswer = `${answer} ${t('location_page.faq_local_answer_suffix', { city: cityName, state: stateName })}`;

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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
                {t('location_page.faq_title', { service: serviceLabel, city: cityName })}
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
