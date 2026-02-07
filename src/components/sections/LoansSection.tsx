"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '@/components/ServiceCard';
import { Home, Banknote, Briefcase, Building2, Car, GraduationCap } from 'lucide-react';

interface LoansSectionProps {
    onGetQuote: (type: string) => void;
}

const LoansSection: React.FC<LoansSectionProps> = ({ onGetQuote }) => {
    const { t } = useTranslation();

    const handleLoanClick = (type: string) => {
        // We pass 'loan_inquiry' as the base configuration key, but the title will be dynamic based on the type passed in the modal if we set it up that way.
        // However, QuoteForm uses the type to look up config.
        // Since all loans share the same config 'loan_inquiry', we can either:
        // 1. Duplicate config for each loan type.
        // 2. Map all loan types to 'loan_inquiry' inside QuoteForm (or forms.ts).
        // For now, let's pass specific types like 'home_loan' and ensure forms.ts handles them or falls back.
        // I added 'loan_inquiry' to forms.ts. I need to make sure 'home_loan' falls back to 'loan_inquiry'.
        // QuoteForm logic: const config = FORM_CONFIGS[configKey] || FORM_CONFIGS[insuranceType] || DEFAULT_FORM_CONFIG;
        // So I should alias them in forms.ts OR just pass 'loan_inquiry' and maybe a subtype context?
        // Actually, let's just use 'loan_inquiry' config for all, but pass the specific type so the title is correct.
        // But if I pass 'home_loan', QuoteForm will look for 'home_loan' config.
        // I should update QuoteForm to map loan types to loan_inquiry config OR just add aliases in forms.ts.
        // Adding aliases in forms.ts is cleaner.
        onGetQuote(type);
    };

    return (
        <section id="loans" className="py-12 sm:py-16 bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                    {t("loans_offered")}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto" suppressHydrationWarning>
                    {t("loans_description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <ServiceCard
                        title={t("home_loan")}
                        icon={Home}
                        href="#"
                        onClick={() => handleLoanClick('home_loan')}
                        delay={0.1}
                    />
                    <ServiceCard
                        title={t("personal_loan")}
                        icon={Banknote}
                        href="#"
                        onClick={() => handleLoanClick('personal_loan')}
                        delay={0.2}
                    />
                    <ServiceCard
                        title={t("business_loan")}
                        icon={Briefcase}
                        href="#"
                        onClick={() => handleLoanClick('business_loan')}
                        delay={0.3}
                    />
                    <ServiceCard
                        title={t("mortgage_loan")}
                        icon={Building2}
                        href="#"
                        onClick={() => handleLoanClick('mortgage_loan')}
                        delay={0.1}
                    />
                    <ServiceCard
                        title={t("vehicle_loan")}
                        icon={Car}
                        href="#"
                        onClick={() => handleLoanClick('vehicle_loan')}
                        delay={0.2}
                    />
                    <ServiceCard
                        title={t("education_loan")}
                        icon={GraduationCap}
                        href="#"
                        onClick={() => handleLoanClick('education_loan')}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default LoansSection;
