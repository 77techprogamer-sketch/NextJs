import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Insurance Support',
    description: 'Find answers to common questions about life insurance, health policies, claim rejections, and policy revival.',
};

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                Detailed answers and deep dives into common insurance queries.
            </p>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Health Insurance & Claims</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left font-semibold">What can I do if my insurance claim was rejected?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p className="mb-4">If your claim is rejected, do not panic. The first step is to carefully read the rejection letter to understand the exact clause the TPA has cited (e.g., non-disclosure, waiting period, non-medical expenses).</p>
                                <p>We recommend you contact an expert advisor immediately to draft an appeal pointing out medical facts. You can also escalate to the Insurance Ombudsman.</p>
                                <div className="mt-4">
                                    <Link href="/resources/guides/maturity-claim-guide" className="text-primary font-medium hover:underline">Read our full guide on Claim Recovery &rarr;</Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left font-semibold">What is the waiting period in health insurance?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Health insurance plans typically have an initial waiting period of 30 days for all illnesses (except accidents). 
                                There is also a 2 to 4 year waiting period for pre-existing conditions, and specific ailments (like cataracts or hernias) usually have a 24-month waiting period.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Life Insurance & LIC</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="lic-1">
                            <AccordionTrigger className="text-left font-semibold">How do I revive a lapsed LIC policy?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p className="mb-4">A lapsed policy can generally be revived within 5 years from the date of the first unpaid premium. You will need to pay the accumulated arrears along with a penalty interest, and you may need to submit a declaration of good health (Form 680).</p>
                                <div className="mt-4">
                                    <Link href="/resources/guides/lapsed-policy-revival" className="text-primary font-medium hover:underline">Read our complete Policy Revival guide &rarr;</Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="lic-2">
                            <AccordionTrigger className="text-left font-semibold">What happens if I lose my LIC policy bond?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p className="mb-4">To get a duplicate bond, you must place an advertisement in a local English and regional newspaper, submit an indemnity bond, and pay the duplicate policy charges to the servicing LIC branch.</p>
                                <div className="mt-4">
                                    <Link href="/guides/lost-lic-policy-help" className="text-primary font-medium hover:underline">See our Lost Policy Support steps &rarr;</Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </div>
    );
}
