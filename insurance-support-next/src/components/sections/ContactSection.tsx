"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { CardTitle, CardDescription } from '@/components/ui/card';

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                    {t("get_in_touch")}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto" suppressHydrationWarning>
                    {t("contact_description")}
                </p>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-2xl mx-auto">
                    <a href="tel:+919986634506" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                        <Phone className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>{t("call_us")}</h3>
                        <CardDescription className="text-center text-sm sm:text-base">+91-9986634506</CardDescription>
                    </a>
                    <a href="https://wa.me/919986634506" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                        <MessageSquare className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>{t("whatsapp_us")}</h3>
                        <CardDescription className="text-center text-sm sm:text-base">+91-9986634506</CardDescription>
                    </a>
                    <a href="https://maps.app.goo.gl/b1wFEf9wBJ25L4ao9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                        <MapPin className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>{t("visit_us")}</h3>
                        <CardDescription className="text-center text-sm sm:text-base" suppressHydrationWarning>{t("bangalore_office")}</CardDescription>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
