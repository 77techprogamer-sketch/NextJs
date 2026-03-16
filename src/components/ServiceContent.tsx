"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, CheckCircle2 } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { AutoLinker } from "@/components/AutoLinker";
import dynamic from 'next/dynamic';

const ToolIslands = dynamic(() => import('@/components/sections/ToolIslands'), { ssr: false });

// Map strings to Icon components
const iconMap: Record<string, React.ElementType> = {
    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock
};

interface ServiceContentProps {
    serviceType: string;
    iconName: string;
    imagePath: string;
    title?: string;
    description?: string;
}

export default function ServiceContent({ serviceType, iconName, imagePath, title: initialTitle, description: initialDescription }: ServiceContentProps) {
    const { t } = useTranslation();
    const Icon = iconMap[iconName] || Shield;

    // Helper to get array from translation, fallback to empty array
    const getList = (key: string) => {
        const items = t(key, { returnObjects: true });
        return Array.isArray(items) ? items : [];
    };

    const title = initialTitle || t(`services_data.${serviceType}.title`);
    const description = initialDescription || t(`services_data.${serviceType}.description`);
    const content = t(`services_data.${serviceType}.content`);
    const features = getList(`services_data.${serviceType}.features`);
    const faqs = getList(`services_data.${serviceType}.faqs`) as Array<{ question: string, answer: string }>;
    const claimProcess = getList(`services_data.${serviceType}.claim_process`) as string[];
    const whoShouldBuy = getList(`services_data.${serviceType}.who_should_buy`) as string[];
    const relatedGuides = getList(`services_data.${serviceType}.related_guides`) as Array<{ label: string; href: string }>;


    return (
        <div className="container px-4 py-12 mx-auto">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                        ← {t('return_to_home')}
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Icon className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold">{title} Advisor in India | Expert Plans &amp; Claim Support</h1>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        <AutoLinker text={description} />
                    </p>
                </div>

                <div className="mb-12">
                    <Image
                        src={imagePath}
                        alt={`${title} advisor and claim support India`}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-xl shadow-lg bg-muted"
                        priority
                        sizes="(max-width: 896px) 100vw, 896px"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-card border rounded-lg p-6 shadow-sm">
                            <h2 className="text-2xl font-semibold mb-4">{t('about')} {title}</h2>
                            <div className="text-muted-foreground leading-loose prose dark:prose-invert max-w-none">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                            <p className="text-muted-foreground leading-loose mt-4">
                                {t('service_footer_note')}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-6">{t('key_benefits')}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        <span className="font-medium"><AutoLinker text={feature} /></span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Claim Process Section */}
                        {claimProcess.length > 0 && (
                            <section className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100">How to File a {title} Claim — Step by Step</h2>
                                <ol className="space-y-3">
                                    {claimProcess.map((step: string, idx: number) => (
                                        <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{idx + 1}</span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        {/* Who Should Buy Section */}
                        {whoShouldBuy.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Who Should Buy {title}?</h2>
                                <ul className="space-y-3">
                                    {whoShouldBuy.map((persona: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border">
                                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300">{persona}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* FAQs Section */}
                        {faqs.length > 0 && (
                            <section className="mt-8">
                                <h2 className="text-2xl font-semibold mb-6">{t('frequently_asked_questions')}</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="border rounded-lg p-4">
                                            <h3 className="font-semibold mb-2">{faq.question}</h3>
                                            <p className="text-muted-foreground"><AutoLinker text={faq.answer} /></p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Related Guides Internal Links */}
                        {relatedGuides.length > 0 && (
                            <section className="mt-8">
                                <h2 className="text-xl font-semibold mb-4">Related Insurance Guides</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {relatedGuides.map((guide, idx) => (
                                        <Link
                                            key={idx}
                                            href={guide.href}
                                            className="block p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group"
                                        >
                                            <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors text-sm">{guide.label} →</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="sticky top-24">
                            <QuoteForm
                                insuranceType={serviceType}
                            />
                        </div>
                    </div>
                </div>

                {/* Interactive Tools Section */}
                <div className="mt-16">
                    <ToolIslands />
                </div>
            </div>
        </div>
    )
}
