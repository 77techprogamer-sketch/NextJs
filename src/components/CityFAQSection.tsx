import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQPage } from 'schema-dts';

interface CityFAQSectionProps {
    cityName: string;
    stateName: string;
    areas: string[];
}

export default function CityFAQSection({ cityName, stateName, areas }: CityFAQSectionProps) {
    const area1 = areas[0] || 'your locality';
    const area2 = areas[1] || 'the city suburbs';

    const faqs = [
        {
            question: `What insurance services do you provide in ${cityName}?`,
            answer: `We provide end-to-end insurance support across ${cityName}, including LIC policy revival, health insurance claim recovery, motor insurance renewals, and term plans. Instead of visiting a physical branch, our certified local advisors come directly to your doorstep.`
        },
        {
            question: `Can you help with rejected health insurance claims in ${stateName}?`,
            answer: `Absolutely. Dealing with rejected health and medical claims is one of our core specialties. If your claim was wrongfully denied by a hospital or insurer anywhere in ${stateName}, our experts will help appeal the decision and recover the funds you are entitled to.`
        },
        {
            question: `Do I need to visit an LIC office in ${cityName} to claim maturity?`,
            answer: `No, you don't. We act as your authorized representatives. Whether you live in ${area1} or ${area2}, we handle the entire process—including policy revival, nominee updates, missing bond retrieval, and maturity claim settlement—without you having to wait in any queues.`
        },
        {
            question: `How quickly can I get motor insurance renewed in ${cityName}?`,
            answer: `Motor insurance renewals for cars and two-wheelers in ${cityName} can be processed digitally within hours. We compare multiple quotes from top IRDAI-approved insurers to get you the best premium without any complex paperwork.`
        }
    ];

    const faqSchema: FAQPage = {
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
        <div className="mt-12 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Frequently Asked Questions in {cityName}
            </h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-slate-200">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
