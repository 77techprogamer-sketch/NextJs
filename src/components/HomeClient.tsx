"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { useUserLocation } from '@/hooks/useUserLocation';
import '@/i18n'; // Ensure i18n is initialized

import HeroSection from '@/components/sections/HeroSection';

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
    loading: () => <div className="min-h-[800px] animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
    loading: () => <div className="min-h-[600px] animate-pulse bg-primary/10" />
});
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-white dark:bg-gray-800" />
});
const WhyChooseUsSection = dynamic(() => import('@/components/sections/WhyChooseUsSection'), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 dark:bg-gray-900" />
});
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
    loading: () => <div className="min-h-[700px] animate-pulse bg-gray-100 dark:bg-gray-900" />
});
const ServiceAreasSection = dynamic(() => import('@/components/sections/ServiceAreasSection'), {
    loading: () => <div className="min-h-[300px] animate-pulse bg-slate-50 dark:bg-slate-900" />
});
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-white dark:bg-gray-900" />
});
const LoansSection = dynamic(() => import('@/components/sections/LoansSection'), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-slate-50 dark:bg-slate-900" />
});
const ProcessTimeline = dynamic(() => import('@/components/sections/ProcessTimeline'), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-white dark:bg-slate-950" />
});
const SupportScopeSection = dynamic(() => import('@/components/sections/SupportScopeSection'), {
    loading: () => <div className="min-h-[300px] animate-pulse bg-slate-50 dark:bg-slate-900" />
});

// Lazy load modals/non-critical components
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const VisitorCounter = dynamic(() => import('@/components/VisitorCounter'), { ssr: false });
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { ssr: false });
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

    // Dynamic Title Logic
    let displayTitle = initialTitle || t('hero_title');
    const displayDescription = initialDescription || t('secure_family_future');

    // Check if we should override with local title
    if (city) {
        displayTitle = t('hero_title_local', { city });
    }

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

            <SupportScopeSection />

            <ServicesSection />

            <FeaturesSection />

            <ProcessTimeline onAction={() => handleGetQuote({ insuranceType: 'policy_recovery' })} />

            <BlogSection />

            <ServiceAreasSection />

            <FAQSection />

            <ContactSection />

            {/* All sections always rendered for Googlebot mobile-first indexing.
                On mobile, extra sections are visually collapsed via CSS until user clicks "Show More". */}
            <div className={`${isMobile && !showMoreMobile ? 'max-h-0 overflow-hidden' : ''}`}>
                <ToolIslands />

                <LoansSection onGetQuote={handleGetQuote} />

                <WhyChooseUsSection />

                {/* Customer Testimonials Section */}
                <React.Suspense fallback={
                    <section className="py-12 sm:py-16 bg-white dark:bg-gray-800">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12 sm:mb-16 space-y-4">
                                <Skeleton className="h-8 w-64 mx-auto" />
                                <Skeleton className="h-1 w-24 mx-auto rounded-full" />
                                <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {[...Array(6)].map((_, i) => (
                                    <Card key={i} className="h-64 bg-slate-50 dark:bg-gray-900 border-none shadow-lg">
                                        <CardContent className="p-6 space-y-4">
                                            <Skeleton className="h-4 w-24 mb-4" />
                                            <Skeleton className="h-20 w-full" />
                                            <div className="pt-4 border-t border-slate-200 dark:border-gray-700">
                                                <Skeleton className="h-4 w-32 mb-2" />
                                                <Skeleton className="h-3 w-20" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                }>
                    <div id="testimonials">
                        <Testimonials />
                    </div>
                </React.Suspense>
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
