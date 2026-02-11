"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, CheckCircle2 } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { AutoLinker } from "@/components/AutoLinker";

// Map strings to Icon components
const iconMap: Record<string, React.ElementType> = {
    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock
};

interface ServiceContentProps {
    serviceType: string;
    iconName: string;
    imagePath: string;
}

export default function ServiceContent({ serviceType, iconName, imagePath }: ServiceContentProps) {
    const { t } = useTranslation();
    const Icon = iconMap[iconName] || Shield;

    // Helper to get array from translation, fallback to empty array
    const getList = (key: string) => {
        const items = t(key, { returnObjects: true });
        return Array.isArray(items) ? items : [];
    };

    const title = t(`services_data.${serviceType}.title`);
    const description = t(`services_data.${serviceType}.description`);
    const content = t(`services_data.${serviceType}.content`);
    const features = getList(`services_data.${serviceType}.features`);
    const faqs = getList(`services_data.${serviceType}.faqs`) as Array<{ question: string, answer: string }>;


    return (
        <div className="container px-4 py-12 mx-auto">
            <ServiceJsonLd
                title={`${title} Service`}
                description={description}
                url={`https://insurancesupport.online/services/${serviceType}`}
                image={`https://insurancesupport.online${imagePath}`}
                faqs={faqs}
            />
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                        ← {t('return_to_home')}
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Icon className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold">{title}</h1>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        <AutoLinker text={description} />
                    </p>
                </div>

                <div className="mb-12">
                    <Image
                        src={imagePath}
                        alt={title}
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
                        {/* FAQs Section - Added for completeness */}
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
                    </div>

                    <div className="space-y-6">
                        <div className="sticky top-24">
                            <QuoteForm
                                insuranceType={serviceType}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
