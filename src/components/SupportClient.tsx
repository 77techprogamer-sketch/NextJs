"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Shield, Heart, Car, Home, Plane,
    Wallet, TrendingUp, HeartHandshake, ShieldCheck,
    FileText, Building, Phone, HelpCircle,
    ArrowRight, MessageSquare, CheckCircle2, XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const ServiceModal = dynamic(() => import('@/components/ServiceModal'), { ssr: false });
import { AutoLinker } from '@/components/AutoLinker';
import { contactConfig } from '@/data/contact';

export default function SupportClient() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInsuranceType, setSelectedInsuranceType] = useState('general_inquiry');

    const handleOpenModal = (type: string) => {
        setSelectedInsuranceType(type);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const services = [
        { key: "life_insurance", icon: Heart },
        { key: "health_insurance", icon: Shield },
        { key: "term_insurance", icon: FileText },
        { key: "motor_insurance", icon: Car },
        { key: "sme_insurance", icon: Building },
        { key: "travel_insurance", icon: Plane },
        { key: "pension_plans", icon: Wallet },
        { key: "ulip_plans", icon: TrendingUp },
        { key: "wedding_insurance", icon: HeartHandshake },
        { key: "cyber_insurance", icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
            {/* Header Section */}
            <div className="bg-primary text-white py-12 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                        {t("support_page_title")}
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        <AutoLinker text={t("support_meta_description")} />
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 font-semibold"
                            onClick={() => handleOpenModal('general_inquiry')}
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            {t("start_general_inquiry")}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white/10"
                            asChild
                        >
                            <a href={`tel:${contactConfig.phoneFull}`}>
                                <Phone className="w-5 h-5 mr-2" />
                                {t("call_us")}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 -mt-10">
                {/* General Inquiry Card (Prominent) */}
                <Card className="mb-12 border-none shadow-2xl bg-white dark:bg-gray-800 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                    <div className="flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
                        <div className="bg-accent/10 p-6 rounded-full shrink-0">
                            <HelpCircle className="w-12 h-12 text-accent" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-2">{t("general_inquiry_title")}</h2>
                            <p className="text-muted-foreground text-lg">
                                <AutoLinker text={t("general_inquiry_description")} />
                            </p>
                        </div>
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-primary whitespace-nowrap"
                            onClick={() => handleOpenModal('general_inquiry')}
                        >
                            {t("contact_support")}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </Card>

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">{t("services_offered")}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t("services_description")}
                    </p>
                </div>

                {/* Service Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Card key={service.key} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <CardTitle>{t(service.key)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        <AutoLinker text={t(`${service.key}_long_description`, { defaultValue: t("services_description") })} />
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between hover:bg-primary/5 hover:text-primary group-hover:pl-6 transition-all"
                                        onClick={() => handleOpenModal(service.key)}
                                    >
                                        {t("get_support_now")}
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                {/* Practical Help Sections (SEO & Task Focused) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {/* Claim Checklist */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                            <FileText className="w-5 h-5" />
                            {t('claim_filing_checklist_title')}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-400">{t('claim_filing_step_1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-400">{t('claim_filing_step_2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-400">{t('claim_filing_step_3')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Policy Pitfalls */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-600">
                            <XCircle className="w-5 h-5" />
                            {t('common_pitfalls_title')}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-400">{t('pitfall_1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="div-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-400">{t('pitfall_2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="div-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-400">{t('pitfall_3')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Rich Snippet FAQ Section (People Also Ask) */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-4">{t('frequently_asked_questions')}</h3>
                        <p className="text-slate-500">{t('find_answers_to_common_questions')}</p>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                                    {t(`faq_paa_q${i}`)}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 italic">
                                    {t(`faq_paa_a${i}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center bg-card rounded-2xl p-8 md:p-12 shadow-sm border">
                    <h3 className="text-2xl font-bold mb-4">{t("need_immediate_assistance")}</h3>
                    <p className="text-muted-foreground mb-8">
                        {t("call_our_support_team")}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <a href={`tel:${contactConfig.phoneFull}`}>
                                <Phone className="w-4 h-4 mr-2" />
                                +91 99866 34506
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                insuranceType={selectedInsuranceType}
            />
        </div>
    );
}
