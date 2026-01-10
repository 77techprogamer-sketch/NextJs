"use client";

import React from 'react';
import MasterUserForm from '@/components/MasterUserForm';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MasterFormPage = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
            <div className="text-center mb-10 space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    {t("get_comprehensive_coverage")}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t("master_form_description", { defaultValue: "Tell us a bit about yourself and select all the insurance types you're interested in. We'll generate personalized quotes for everything at once." })}
                </p>
            </div>

            <MasterUserForm />
        </div>
    );
};

export default MasterFormPage;
