import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
            answer: `We provide end-to-end insurance support across ${cityName}, including LIC policy revival, health insurance claim recovery, motor insurance renewals, and term plans. Instead of visiting a physical branch, our certified local advisors come directly to your doorstep in ${area1} or ${area2}.`
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
        },
        {
            question: `Is term insurance available for IT professionals in ${cityName}?`,
            answer: `Yes, we specialize in high-value term insurance plans for IT and corporate professionals in ${cityName} (especially in areas like ${area1}). These plans offer high coverage at low premiums, often with extra benefits for low-risk lifestyles and corporate health history.`
        },
        {
            question: `What are the best health insurance plans for senior citizens in ${cityName}?`,
            answer: `For seniors in ${cityName}, we recommend plans with shorter waiting periods for pre-existing diseases and no co-payment clauses. Many hospitals in ${cityName} offer cashless facilities for these specific plans, which we can help you identify.`
        },
        {
            question: `How do I file an LIC death claim from ${cityName} without visiting the branch?`,
            answer: `Our doorstep service in ${cityName} handles the entire death claim process. We collect all necessary documents from your home in ${area1} or ${area2}, coordinate with the servicing LIC branch, and ensure the payout reaches the nominee's bank account directly.`
        },
        {
            question: `LIC policy surrender vs. revival: which is better for a lapsed policy in ${cityName}?`,
            answer: `Reviving a lapsed LIC policy is usually better than surrendering it, as you retain the full life cover and insurance benefits. We can help you calculate the exact revival amount and interest at your home in ${cityName}.`
        },
        {
            question: `How can I find network hospitals for cashless insurance near ${cityName}?`,
            answer: `Most major hospitals in ${cityName} have tie-ups with top insurers. We provide a localized list of network hospitals and help you understand the cashless pre-authorization process so you don't have to pay out-of-pocket during emergencies.`
        },
        {
            question: `Can NRIs buy Indian insurance for family members in ${cityName}?`,
            answer: `Yes, NRIs can easily purchase health or life insurance for their parents or spouse residing in ${cityName}. We help with the remote documentation, foreign remittance verification, and localized health check-ups if required for the plan.`
        }
    ];

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
