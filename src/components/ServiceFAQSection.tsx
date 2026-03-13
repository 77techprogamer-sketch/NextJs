'use client';

import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceFAQSectionProps {
    cityName: string;
    stateName: string;
    areas: string[];
    serviceLabel: string;
    serviceSlug: string;
}

export default function ServiceFAQSection({
    cityName,
    stateName,
    areas,
    serviceLabel,
    serviceSlug,
}: ServiceFAQSectionProps) {
    const area1 = areas[0] || 'your locality';
    const area2 = areas[1] || 'nearby areas';

    // Service-specific FAQs with fallback to generic ones
    const serviceSpecificFaqs: Record<string, { question: string; answer: string }[]> = {
        'life-insurance': [
            {
                question: `What is the best life insurance plan in ${cityName}?`,
                answer: `The best life insurance plan depends on your age, income, and family needs. In ${cityName}, we recommend term insurance for maximum coverage at low premiums. Our advisors in ${area1} and ${area2} help you compare IRDAI-approved plans from LIC, HDFC Life, SBI Life, and more — completely free of charge.`
            },
            {
                question: `How do I claim life insurance in ${cityName}?`,
                answer: `To claim life insurance in ${cityName}, the nominee must submit the death certificate, original policy bond, and ID proof to the insurer. Our advisors provide doorstep assistance throughout ${stateName}, handling all paperwork and follow-ups to ensure a smooth claim settlement.`
            },
            {
                question: `Can I get life insurance without visiting a branch in ${cityName}?`,
                answer: `Yes. Our certified advisors in ${cityName} provide fully doorstep life insurance services — from policy selection and medical coordination to document submission. You never need to visit a branch or an LIC office.`
            },
            {
                question: `What is the claim settlement ratio for life insurance advisors in ${cityName}?`,
                answer: `Insurance Support has a 98% claim settlement ratio for life insurance policies in ${cityName} and across ${stateName}. Our 25+ years of experience means we know how to navigate insurer requirements and maximize your payout.`
            },
        ],
        'health-insurance': [
            {
                question: `What is the best health insurance plan in ${cityName}?`,
                answer: `The best health insurance in ${cityName} depends on your family size, existing conditions, and preferred hospitals. We compare plans from Star Health, Niva Bupa, HDFC ERGO, and others. Our advisors in ${area1} help you find a plan with the widest cashless hospital network in ${cityName}.`
            },
            {
                question: `How do I file a health insurance claim in ${cityName}?`,
                answer: `For cashless claims in ${cityName}, contact our advisor before hospitalization. For reimbursement claims, collect all bills and hospital discharge summaries. Our team in ${cityName} handles the entire submission and follow-up process so you can focus on recovery.`
            },
            {
                question: `Can you help with a rejected health insurance claim in ${stateName}?`,
                answer: `Absolutely. Wrongfully rejected or reduced health insurance claims are our specialty in ${stateName}. We raise grievances directly with the insurer, IRDAI Bima Bharosa, or the Insurance Ombudsman to recover what you are owed.`
            },
            {
                question: `Do I need to visit a hospital or office for health insurance in ${cityName}?`,
                answer: `No. Our advisors in ${cityName} provide fully online and doorstep health insurance services. From policy purchase to claim recovery, we handle everything remotely or at your home in areas like ${area1} and ${area2}.`
            },
        ],
        'motor-insurance': [
            {
                question: `How do I renew motor insurance in ${cityName}?`,
                answer: `Motor insurance renewal in ${cityName} takes less than 10 minutes online. Our advisors compare quotes from top IRDAI-approved insurers to get you the best premium for your car or two-wheeler. We handle the entire process digitally — no branch visit required.`
            },
            {
                question: `What should I do after a car accident in ${cityName}?`,
                answer: `After an accident in ${cityName}, take photos of the damage, file an FIR if required, and call us immediately. Our motor insurance claim team in ${stateName} will guide you step-by-step — from surveyor coordination to claim disbursement.`
            },
            {
                question: `Is third-party motor insurance mandatory in ${cityName}?`,
                answer: `Yes, third-party motor insurance is mandatory across all of India, including ${cityName}, under the Motor Vehicles Act. Driving without it can result in heavy fines. We can renew or issue your third-party policy instantly.`
            },
            {
                question: `Can I get zero-depreciation motor insurance in ${cityName}?`,
                answer: `Yes. Zero-depreciation (zero-dep) add-on cover is available for most vehicles in ${cityName}. Our advisors help you assess if it is worth it based on your vehicle's age and usage, and find the best premium available.`
            },
        ],
        'lic-policy-revival': [
            {
                question: `How do I revive a lapsed LIC policy in ${cityName}?`,
                answer: `A lapsed LIC policy in ${cityName} can be revived within 5 years of the first unpaid premium. You need to pay all pending premiums plus interest. Our advisors in ${area1} handle the entire revival process — from checking eligibility to submitting the DGH form at the LIC branch.`
            },
            {
                question: `What documents are needed for LIC policy revival in ${cityName}?`,
                answer: `For LIC policy revival in ${cityName}, you typically need the original policy bond, ID proof, recent passport photo, and a health declaration form. If the lapse is over 3 years, a medical examination may also be required. Our advisors assist with all documentation.`
            },
            {
                question: `Can a very old lapsed LIC policy be revived in ${stateName}?`,
                answer: `LIC allows revival within 5 years of the lapse date. Beyond that, the policy is usually foreclosed, but the surrender value may still be payable. Our advisors in ${stateName} will review your policy and advise on the best course of action.`
            },
            {
                question: `Do I need to visit the LIC office for policy revival in ${cityName}?`,
                answer: `Not necessarily. Our authorized advisors in ${cityName} represent you at the LIC branch and handle all paperwork on your behalf. You stay home in ${area1} or ${area2} and we manage the entire revival process.`
            },
        ],
    };

    const defaultFaqs = [
        {
            question: `What ${serviceLabel} services do you provide in ${cityName}?`,
            answer: `We provide full-service ${serviceLabel} support in ${cityName}, including new policy purchase, renewals, claim assistance, and lapsed policy revival. Our certified advisors serve ${area1}, ${area2}, and all surrounding localities in ${cityName}.`
        },
        {
            question: `Do I need to visit an office for ${serviceLabel} in ${cityName}?`,
            answer: `No. Our advisors provide complete doorstep ${serviceLabel} services in ${cityName}. Whether you are in ${area1} or ${area2}, we come to you — from consultation and documentation to claim settlement.`
        },
        {
            question: `How long does ${serviceLabel} claim processing take in ${cityName}?`,
            answer: `${serviceLabel} claims in ${cityName} typically take 7–15 working days, depending on the insurer and documentation completeness. Our team actively follows up on your behalf to ensure the fastest possible settlement.`
        },
        {
            question: `Is Insurance Support trusted for ${serviceLabel} in ${stateName}?`,
            answer: `Yes. Insurance Support has 25+ years of experience and a 98% claim settlement ratio for ${serviceLabel} across ${stateName}. We are trusted by 5,000+ families in ${cityName} and surrounding areas.`
        },
    ];

    const faqs = serviceSpecificFaqs[serviceSlug] ?? defaultFaqs;

    return (
        <div className="mt-12 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Frequently Asked Questions – {serviceLabel} in {cityName}
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
