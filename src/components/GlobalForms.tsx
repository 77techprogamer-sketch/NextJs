"use client";

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

const ServiceModal = dynamic(() => import('@/components/ServiceModal'), { ssr: false });

const GlobalForms = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInsuranceType, setSelectedInsuranceType] = useState('general_inquiry');
    const [initialFormData, setInitialFormData] = useState<any>(null);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedInsuranceType('general_inquiry');
        setInitialFormData(null);
    }, []);

    const handleOpenForm = useCallback((data?: any) => {
        if (data && data.insuranceType) {
            setSelectedInsuranceType(data.insuranceType);
            if (data.formData) {
                setInitialFormData(data.formData);
            }
        } else {
            setSelectedInsuranceType('general_inquiry');
        }
        setIsModalOpen(true);
    }, []);

    useEffect(() => {
        // Global handler for Lead Magnet Result & other tool handoffs
        (window as any).triggerLeadMagnetHandoff = (data: { score: number; riskLevel: string }) => {
            handleOpenForm({
                insuranceType: 'general_inquiry',
                formData: {
                    source: 'lead_magnet_quiz',
                    quiz_score: data?.score,
                    quiz_risk: data?.riskLevel
                }
            });
        };

        // Also handle direct tool actions if they want to trigger the global modal
        (window as any).triggerGlobalForm = handleOpenForm;

        return () => {
            delete (window as any).triggerLeadMagnetHandoff;
            delete (window as any).triggerGlobalForm;
        };
    }, [handleOpenForm]);

    // Handle hash-based triggers (e.g., from external links)
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#get-quote') {
                handleOpenForm({ insuranceType: 'general_inquiry' });
                // Clear hash to prevent re-triggering on reload
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [handleOpenForm]);

    return (
        <ServiceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            insuranceType={selectedInsuranceType}
            initialData={initialFormData}
        />
    );
};

export default GlobalForms;
