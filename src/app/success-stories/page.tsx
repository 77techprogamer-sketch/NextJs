import React from 'react';
import { Metadata } from 'next';
import { SuccessStories } from '@/components/SuccessStories';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Insurance Claim Success Stories | Proof of Expert Recovery',
    description: 'Read how we recovered ₹50L+ in rejected insurance claims. Real case studies on LIC policy revival, health claim appeals, and motor insurance settlements.',
    keywords: [
        'Insurance Claim Success Stories',
        'Rejected Claim Recovery India',
        'LIC Policy Revival Results',
        'Health Insurance Appeal Success',
        'Insurance Support Expertise',
        'Real Case Studies Claim Settlement'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/success-stories',
    }
};

export default function SuccessStoriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Real Results. <br />
                            <span className="text-primary italic">Real Financial Recovery.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Numbers don&apos;t lie. Our 25+ years of experience has helped thousands of families recover what was rightfully theirs. Explore our documented case studies below.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8">
                                <Phone className="mr-2 h-5 w-5" />
                                Get Free Advice: +91 99866 34506
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <SuccessStories />

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Is your claim stuck or rejected?</h2>
                                <p className="text-blue-100 text-lg leading-relaxed mb-0">
                                    Don&apos;t wait for the insurer to change their mind. Get a professional claim recovery specialist to review your case for free.
                                </p>
                            </div>
                            <Link href="/contact" className="shrink-0">
                                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-xl h-16 px-10 font-bold rounded-2xl shadow-2xl">
                                    Start Recovery Process <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
