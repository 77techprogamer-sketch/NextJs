"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-12 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">{t("terms_of_service")}</h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-4">
                {t("terms_of_service_intro")}
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("acceptance_of_terms")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("acceptance_of_terms_description")}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("use_of_services")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("use_of_services_description")}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("accuracy_of_data")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("accuracy_of_data_description")}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("market_linked_risks")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("market_linked_risks_description")}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("limitation_of_liability")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("limitation_of_liability_description")}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("intellectual_property")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("intellectual_property_description")}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{t("governing_law")}</h2>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {t("governing_law_description")}
                </div>
            </section>

            <footer className="mt-12 pt-8 border-t border-muted">
                <p className="text-muted-foreground italic">
                    {t("terms_of_service_reservation")}
                </p>
            </footer>
        </div>
    );
};

export default TermsOfService;
