"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import '@/i18n'; // Ensure i18n is initialized
import HeroSection from '@/components/sections/HeroSection';

const LoansSection = dynamic(() => import('@/components/sections/LoansSection'), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-slate-50 dark:bg-slate-900" />
});
const WhyChooseUsSection = dynamic(() => import('@/components/sections/WhyChooseUsSection'), {
    loading: () => <div className="min-h-[300px] animate-pulse bg-gray-50 dark:bg-gray-900" />
});
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-white dark:bg-gray-900" />
});
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 dark:bg-gray-900" />
});

// Lazy load modals/non-critical components
const ServiceModal = dynamic(() => import('@/components/ServiceModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { ssr: false });

const LoansPageClient: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInsuranceType, setSelectedInsuranceType] = useState('');

    useEffect(() => {
        // Force i18n initialization if needed
        if (!i18n.isInitialized) {
            i18n.init();
        }
    }, [i18n]);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedInsuranceType('');
    }, []);

    const handleGetQuote = useCallback((type: string = 'loan_inquiry') => {
        // If coming from Hero button (no type), default to loan_inquiry
        // If coming from LoansSection cards, type will be specific (e.g., home_loan)
        // QuoteForm handles mapping specific loan types to loan config via aliases in forms.ts
        setSelectedInsuranceType(type);
        setIsModalOpen(true);
    }, []);

    const handleVote = useCallback(() => {
        handleGetQuote('loan_inquiry');
    }, [handleGetQuote]);

    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                city={null}
                onGetQuote={handleVote}
                title={t("loans_hero_title")}
                description={t("loans_hero_description")}
            />

            <LoansSection onGetQuote={handleGetQuote} />

            <WhyChooseUsSection />

            <FAQSection items={[
                { q: "faq_loan_q1", a: "faq_loan_a1" },
                { q: "faq_loan_q2", a: "faq_loan_a2" },
                { q: "faq_loan_q3", a: "faq_loan_a3" },
                { q: "faq_loan_q4", a: "faq_loan_a4" },
            ]} />

            <ContactSection />

            <React.Suspense fallback={null}>
                <ServiceModal isOpen={isModalOpen} onClose={handleCloseModal} insuranceType={selectedInsuranceType} />
            </React.Suspense>

            <React.Suspense fallback={null}>
                <FloatingCTA onGetQuote={() => handleGetQuote('loan_inquiry')} />
            </React.Suspense>
        </div>
    );
};

export default LoansPageClient;
