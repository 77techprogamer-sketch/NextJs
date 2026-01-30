"use client";

import React, { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';
import { useSearchParams, useRouter } from 'next/navigation';
import { ShieldCheck, Users, Clock, Award } from 'lucide-react';

const GetStartedContent = () => {
    const searchParams = useSearchParams();
    // Convert hyphenated URL params (e.g., life-insurance) to underscore format (life_insurance) for FORM_CONFIGS
    const rawInterest = searchParams.get('interest') || 'life_insurance';
    const interest = rawInterest.replace(/-/g, '_');
    const router = useRouter();

    const handleSuccess = () => {
        // Redirect to a thank you page or show a success state
        // For now, we can redirect to home or show a toast which is handled in QuoteForm
        router.push('/');
    };

    return (
        <div className="container mx-auto px-4 py-12 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Side: Trust Indicators & Info */}
                <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            Get Your Free Quote
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            You&apos;re taking the first step towards a secure future. Fill out the form to get personalized insurance options tailored to your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-card border p-4 rounded-xl flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">15k+ Clients</h2>
                                <p className="text-sm text-muted-foreground">Trusted by families across Bangalore.</p>
                            </div>
                        </div>
                        <div className="bg-card border p-4 rounded-xl flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">98% Claims</h2>
                                <p className="text-sm text-muted-foreground">High settlement ratio for your peace of mind.</p>
                            </div>
                        </div>
                        <div className="bg-card border p-4 rounded-xl flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Fast Support</h2>
                                <p className="text-sm text-muted-foreground">24/7 dedicated support team.</p>
                            </div>
                        </div>
                        <div className="bg-card border p-4 rounded-xl flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Expert Advice</h2>
                                <p className="text-sm text-muted-foreground">Veteran-led financial guidance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                        <p className="text-sm md:text-base text-blue-800 dark:text-blue-200 italic">
                            &quot;Insurance Support helped me find the perfect health plan for my parents. The process was smooth and transparent!&quot;
                        </p>
                        <p className="mt-2 text-sm font-semibold text-blue-900 dark:text-blue-100">- Rajesh K., Electronic City</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="relative">
                    {/* Decorative blur effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl -z-10 rounded-full transform scale-90 translate-y-10"></div>

                    <QuoteForm
                        insuranceType={interest}
                        onClose={() => { }} // No close button needed for standalone page
                        onSuccess={handleSuccess}
                    />
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        By submitting this form, you agree to our <a href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</a> and <a href="/terms-of-service" className="underline hover:text-primary">Terms of Service</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

const GetStartedClient = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <GetStartedContent />
        </Suspense>
    );
};

export default GetStartedClient;
