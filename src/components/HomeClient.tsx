"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { useUserLocation } from '@/hooks/useUserLocation';
import '@/i18n'; // Ensure i18n is initialized

import HeroSection from '@/components/sections/HeroSection';

const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
    loading: () => <div className="min-h-[600px] animate-pulse bg-primary/10" />
});
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-white dark:bg-gray-800" />
});

// Lazy load modals/non-critical components
const VisitorCounter = dynamic(() => import('@/components/VisitorCounter'), { ssr: false });
const FloatingCTA = dynamic(() => import('@/components/FloatingCta'), { ssr: false });
const ToolIslands = dynamic(() => import('@/components/sections/ToolIslands'), { ssr: false });
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';


// interface HomeClientProps {} (Props no longer needed for title/desc)
interface HomeClientProps {
    initialTitle?: string;
    initialDescription?: string;
}

const HomeClient: React.FC<HomeClientProps> = ({ initialTitle, initialDescription }) => {
    const { t, i18n } = useTranslation();
    const { city } = useUserLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInsuranceType, setSelectedInsuranceType] = useState('');
    const [initialFormData, setInitialFormData] = useState<any>(null);
    const [showMoreMobile, setShowMoreMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Force i18n initialization if needed
        if (!i18n.isInitialized) {
            i18n.init();
        }
    }, [i18n]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#services') {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    // Dynamic Title Logic - Always use t() for reactivity, initialTitle is only for server-side SEO
    const displayTitle = city ? t('hero_title_local', { city }) : t('hero_title');
    const displayDescription = t('secure_family_future');

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedInsuranceType('');
        setInitialFormData(null);
    }, []);

    const handleGetQuote = useCallback((data?: any) => {
        // If it's a global trigger available
        if (typeof window !== 'undefined' && (window as any).triggerGlobalForm) {
            (window as any).triggerGlobalForm(data);
            return;
        }

        // Fallback for local state if needed (though GlobalForms should handle it)
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


    return (
        <div className="flex flex-col min-h-screen">
            {/* LocalBusinessSchema removed from here as it is now server-rendered in page.tsx */}
            <HeroSection
                city={city}
                onGetQuote={handleGetQuote}
                title={displayTitle}
                description={displayDescription}
            />

            <FeaturesSection />


            <BlogSection />

            {/* All sections always rendered for Googlebot mobile-first indexing.
                On mobile, extra sections are visually collapsed via CSS until user clicks "Show More". */}
            <div className={`${isMobile && !showMoreMobile ? 'max-h-0 overflow-hidden' : ''}`}>
                <ToolIslands />


            </div>

            {isMobile && !showMoreMobile && (
                <div className="flex justify-center py-8">
                    <button 
                        onClick={() => setShowMoreMobile(true)}
                        className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                    >
                        {t('show_more', 'Show More')}
                    </button>
                </div>
            )}


            <React.Suspense fallback={null}>
                <VisitorCounter />
            </React.Suspense>

            <React.Suspense fallback={null}>
                <FloatingCTA onGetQuote={handleGetQuote} />
            </React.Suspense>
        </div>
    );
};

export default HomeClient;
