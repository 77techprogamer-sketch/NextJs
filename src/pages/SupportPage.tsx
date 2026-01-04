"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageSquare, MapPin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SupportPage = () => {
    const { t } = useTranslation();

    const faqCategories = [
        {
            title: t("life_insurance"),
            items: [
                { q: t("faq_life_q1"), a: t("faq_life_a1") },
                { q: t("faq_life_q2"), a: t("faq_life_a2") },
            ]
        },
        {
            title: t("health_insurance"),
            items: [
                { q: t("faq_health_q1"), a: t("faq_health_a1") },
                { q: t("faq_health_q2"), a: t("faq_health_a2") },
            ]
        },
        {
            title: t("term_insurance"),
            items: [
                { q: t("faq_term_q1"), a: t("faq_term_a1") },
                { q: t("faq_term_q2"), a: t("faq_term_a2") },
            ]
        },
        {
            title: t("motor_insurance"),
            items: [
                { q: t("faq_motor_q1"), a: t("faq_motor_a1") },
                { q: t("faq_motor_q2"), a: t("faq_motor_a2") },
            ]
        },
        {
            title: t("travel_insurance"),
            items: [
                { q: t("faq_travel_q1"), a: t("faq_travel_a1") },
                { q: t("faq_travel_q2"), a: t("faq_travel_a2") },
            ]
        },
        {
            title: t("sme_insurance"),
            items: [
                { q: t("faq_sme_q1"), a: t("faq_sme_a1") },
                { q: t("faq_sme_q2"), a: t("faq_sme_a2") },
            ]
        },
        {
            title: t("pension_plans"),
            items: [
                { q: t("faq_pension_q1"), a: t("faq_pension_a1") },
                { q: t("faq_pension_q2"), a: t("faq_pension_a2") },
            ]
        },
        {
            title: t("ulip_plans"),
            items: [
                { q: t("faq_ulip_q1"), a: t("faq_ulip_a1") },
                { q: t("faq_ulip_q2"), a: t("faq_ulip_a2") },
            ]
        },
        {
            title: t("wedding_insurance"),
            items: [
                { q: t("faq_wedding_q1"), a: t("faq_wedding_a1") },
                { q: t("faq_wedding_q2"), a: t("faq_wedding_a2") },
            ]
        },
        {
            title: t("cyber_insurance"),
            items: [
                { q: t("faq_cyber_q1"), a: t("faq_cyber_a1") },
                { q: t("faq_cyber_q2"), a: t("faq_cyber_a2") },
            ]
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Helmet>
                <title>{t("support_page_title")}</title>
                <meta name="description" content={t("support_meta_description")} />
                <link rel="canonical" href="https://insurance-support.vercel.app/support" />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-16 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        {t("insurance_support")} & Customer Care
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
                        {t("customer_support_description")}
                    </p>
                    <div className="mt-8">
                        <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                            {t("india_support_tag")}
                        </span>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <Phone className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t("call_us")}</h3>
                                <p className="text-muted-foreground mb-4">+91-9986634506</p>
                                <Button asChild variant="outline" className="w-full">
                                    <a href="tel:+919986634506">{t("call_now")}</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <MessageSquare className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t("whatsapp_us")}</h3>
                                <p className="text-muted-foreground mb-4">+91-9986634506</p>
                                <Button asChild className="w-full">
                                    <a href="https://wa.me/919986634506" target="_blank" rel="noopener noreferrer">{t("chat_now")}</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <Mail className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t("email_support")}</h3>
                                <p className="text-muted-foreground mb-4">support@insurance-support.com</p>
                                <Button asChild variant="outline" className="w-full">
                                    <a href="mailto:support@insurance-support.com">{t("send_email")}</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <MapPin className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t("our_location")}</h3>
                                <p className="text-muted-foreground mb-4">{t("bangalore_office")}</p>
                                <Button asChild variant="ghost" className="w-full">
                                    <a href="https://maps.app.goo.gl/b1wFEf9wBJ25L4ao9" target="_blank" rel="noopener noreferrer">{t("view_map")}</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("frequently_asked_questions")}</h2>

                    <div className="space-y-12">
                        {faqCategories.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-4">
                                <h3 className="text-xl font-bold border-b pb-2 text-primary">{category.title}</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    {category.items.map((item, index) => (
                                        <AccordionItem key={index} value={`item-${catIndex}-${index}`}>
                                            <AccordionTrigger className="text-left font-semibold">
                                                {item.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Trust Footer */}
            <section className="py-12 bg-primary/5 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-sm font-medium text-muted-foreground">
                        {t("india_support_tag")} | Bangalore | Delhi | Mumbai | Hyderabad | Chennai
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/60">
                        © {new Date().getFullYear()} {t("insurance_support")} - Your Trusted Partner in India.
                    </p>
                </div>
            </section>
        </div>
    );
};


export default SupportPage;
