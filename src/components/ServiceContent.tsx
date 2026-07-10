"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, Building, TrendingUp, CheckCircle2, MessageSquare } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { AutoLinker } from "@/components/AutoLinker";
import { contactConfig } from "@/data/contact";
import dynamic from 'next/dynamic';
import { serviceHighlights, serviceLabels } from '@/data/services';
import { faqData } from '@/data/faqData';

const ToolIslands = dynamic(() => import('@/components/sections/ToolIslands'), { ssr: false });

// Map strings to Icon components
const iconMap: Record<string, React.ElementType> = {
    Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, Building, TrendingUp
};

// Map service slugs to FAQ categories
const faqCategoryMap: Record<string, string> = {
    'life-insurance': 'Life',
    'health-insurance': 'Health',
    'motor-insurance': 'Motor',
    'term-insurance': 'Term',
    'lic-agent': 'Life',
    'pension-plans': 'Life',
    'ulip-plans': 'Life',
    'home-insurance': 'General',
    'business-insurance': 'General',
    'investment-plans': 'Life',
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

    const flatKeyPrefix = serviceType.replace(/-/g, '_');
    const title = initialTitle || t(flatKeyPrefix) || serviceLabels[serviceType] || serviceType;
    const description = initialDescription || t(`${flatKeyPrefix}_long_description`) || "";
    
    // Use canonical highlights as features
    const features = serviceHighlights[serviceType] || [];
    
    // Fetch FAQs dynamically from faqData
    const faqCategory = faqCategoryMap[serviceType] || 'General';
    const localizedFaqs = faqData
        .filter(item => item.category === faqCategory)
        .map(item => ({
            question: t(item.questionKey) !== item.questionKey ? t(item.questionKey) : item.questionKey,
            answer: t(item.answerKey) !== item.answerKey ? t(item.answerKey) : item.answerKey
        }))
        .slice(0, 5); // Limit to 5 relevant FAQs

    // Currently missing from translation.json - handle gracefully
    const claimProcess: string[] = [];
    const whoShouldBuy: string[] = [];
    const relatedGuides: Array<{ label: string; href: string }> = [];

    const content = t(`${flatKeyPrefix}_content`) !== `${flatKeyPrefix}_content` ? t(`${flatKeyPrefix}_content`) : "";

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
                        <h1 className="text-4xl font-bold">
                            {t('advisor_in_india_expert_plans', { 
                                service: title, 
                                defaultValue: `${title} Advisor in India | Expert Plans & Claim Support` 
                            })}
                        </h1>
                    </div>
                    {description && (
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            <AutoLinker text={description} />
                        </p>
                    )}
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
                        {content && (
                            <section className="bg-card border rounded-lg p-6 shadow-sm">
                                <h2 className="text-2xl font-semibold mb-4">{t('about')} {title}</h2>
                                <div className="text-muted-foreground leading-loose prose dark:prose-invert max-w-none">
                                    <MarkdownRenderer>{content}</MarkdownRenderer>
                                </div>
                                <p className="text-muted-foreground leading-loose mt-4">
                                    {t('service_footer_note')}
                                </p>
                            </section>
                        )}

                        {features.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-semibold mb-6">{t('key_features', 'Key Features')}</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span className="font-medium text-sm md:text-base"><AutoLinker text={feature} /></span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Advisor Promise / Sales Script Quotes */}
                        <div className="my-12 py-8 px-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 opacity-10">
                                <Shield className="w-48 h-48" />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-primary font-bold uppercase tracking-widest text-xs">{t('veteran_advantage')}</h3>
                                <div className="space-y-4">
                                    <p className="text-2xl md:text-3xl font-bold leading-tight italic">
                                        "{t('legacy_building_quote')}"
                                    </p>
                                    <p className="text-lg text-slate-300 font-medium border-l-4 border-primary pl-4">
                                        {t('guaranteed_asset_quote')}
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <a 
                                        href={contactConfig.getWhatsappUrl(`Hi Hari, I'm interested in ${title}. I saw your note about building a legacy and would like to discuss my options.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        {t('whatsapp_fast_track_consultation', 'WhatsApp Fast-Track Consultation')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Claim Process Section */}
                        {claimProcess.length > 0 && (
                            <section className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                                    {t('how_to_file_claim_step_by_step', { 
                                        service: title, 
                                        defaultValue: `How to File a ${title} Claim — Step by Step` 
                                    })}
                                </h2>
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
                                <h2 className="text-2xl font-semibold mb-4">
                                    {t('who_should_buy', { 
                                        service: title, 
                                        defaultValue: `Who Should Buy ${title}?` 
                                    })}
                                </h2>
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
                        {localizedFaqs.length > 0 && (
                            <section className="mt-8">
                                <h2 className="text-2xl font-semibold mb-6">{t('frequently_asked_questions')}</h2>
                                <div className="space-y-4">
                                    {localizedFaqs.map((faq, idx) => (
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
                                <h2 className="text-xl font-semibold mb-4">{t('related_insurance_guides', 'Related Insurance Guides')}</h2>
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
                            <div className="bg-gradient-to-r from-primary to-accent/90 text-white text-center py-4 px-4 rounded-t-2xl font-extrabold shadow-lg relative z-10 translate-y-3">
                                {t('compare_and_buy', { 
                                    service: title, 
                                    defaultValue: `Compare & Buy ${title}` 
                                })}
                            </div>
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
