import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Dynamically load sections to improve performance
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'));
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const WhyChooseUsSection = dynamic(() => import('@/components/sections/WhyChooseUsSection'));

// Helper to format city name
const formatCity = (str: string) => {
    if (!str) return '';
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Valid cities list for static generation (optional but good for SEO)
const TARGET_CITIES = ['vellore', 'bangalore', 'chennai', 'hosur', 'kanchipuram', 'mysore', 'coimbatore', 'salem', 'tirupati'];

export async function generateStaticParams() {
    return TARGET_CITIES.map((city) => ({
        city: city,
    }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const cityName = formatCity(params.city);

    return {
        title: `Insurance Advisor ${cityName} | Expert Health & Life Insurance Support`,
        description: `Looking for an Insurance Advisor in ${cityName}? Get expert help for LIC, Health, and Motor insurance claims and renewals in ${cityName}. Local support available.`,
        keywords: [
            `Insurance Advisor ${cityName}`,
            `Health Insurance Agent ${cityName}`,
            `LIC Agent ${cityName}`,
            `Insurance Claims Help ${cityName}`,
            `Motor Insurance Renewal ${cityName}`,
            `Life Insurance Consultant ${cityName}`
        ],
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.city}`
        },
        openGraph: {
            title: `Insurance Advisor ${cityName} | Verified Local Experts`,
            description: `Trusted insurance support in ${cityName}. Claims, Renewals, and New Policies.`,
            url: `https://insurancesupport.online/locations/${params.city}`,
            images: ['/og-image.png'],
            locale: 'en_IN',
            type: 'website',
        }
    };
}

export default function CityPage({ params }: { params: { city: string } }) {
    const cityName = formatCity(params.city);

    // basic validation or 404 if needed, though for SEO we might want to be permissive
    // or restricted to our target list. For now, we'll allow any valid slug format but you could restrict it.

    return (
        <main className="flex flex-col min-h-screen">
            <LocalBusinessSchema city={params.city} />

            {/* Reusing HeroSection but we might need to ensure it accepts the city prop properly */}
            {/* HeroSection caused build errors, so we use a custom one */}
            {/* <HeroSection city={cityName} onGetQuote={() => { }} /> */}

            {/* Custom SEO Content Block for the City */}
            <section className="py-12 bg-slate-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Expert Insurance Support in <span className="text-primary">{cityName}</span>
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        Residents of <strong>{cityName}</strong> can now access premier insurance consulting services right at their doorstep.
                        Whether you need assistance with <strong>claim settlements</strong>, <strong>policy renewals</strong>, or finding the
                        perfect <strong>health and life insurance plans</strong>, our dedicated team in {cityName} is here to help.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="#contact">Contact {cityName} Team</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <ServicesSection />

            <section className="py-12 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Why {cityName} Chooses Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-xl">
                            <h3 className="font-bold text-xl mb-3">Local Expertise</h3>
                            <p className="text-gray-600 dark:text-gray-400">Deep understanding of {cityName}&apos;s healthcare network and local insurance requirements.</p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-xl">
                            <h3 className="font-bold text-xl mb-3">Doorstep Assistance</h3>
                            <p className="text-gray-600 dark:text-gray-400">Available for in-person consultations in {cityName} for complex claim discussions.</p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-xl">
                            <h3 className="font-bold text-xl mb-3">Fast Claim Support</h3>
                            <p className="text-gray-600 dark:text-gray-400">Direct coordination with hospitals and garages in {cityName} for cashless approvals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturesSection />

            <WhyChooseUsSection />

            <BlogSection />

            <ContactSection />
        </main>
    );
}
