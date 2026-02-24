import React from 'react';
import { Metadata } from 'next';
import InvestmentReturnsCalculator from '@/components/tools/InvestmentReturnsCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, ShieldCheck, PieChart, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Wealth Discovery Tool | Estimate Your Investment Returns',
    description: 'Calculate your projected wealth and maturity benefits based on your age and investment. Use our expert-designed tool for smart financial planning.',
    keywords: ['investment returns calculator', 'maturity benefit estimation', 'wealth growth tool', 'insurance returns india', 'financial planning tool'],
    openGraph: {
        title: 'Wealth Discovery Tool | Build Your Future',
        description: 'Plan your long-term wealth with our interactive returns calculator.',
        images: ['/og-image.png'],
    }
};

export default function InvestmentReturnsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                            <TrendingUp className="w-4 h-4" />
                            <span>AI-Powered Wealth Estimation</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Discover Your <span className="text-primary">Wealth Potential</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium">
                            Visualize your financial future. Our expert modeling tool estimates your long-term maturity benefits based on industry-standard growth patterns.
                        </p>
                    </div>

                    <InvestmentReturnsCalculator />
                </div>
            </div>

            {/* Information Section */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Safe & Secured</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                Standard endowment and money-back frameworks provide 100% capital protection while ensuring steady growth over the decades.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <PieChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Tax-Free Benefits</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                Enjoy triple tax benefits: Exemption on investment (80C), Tax-free growth, and Tax-free Maturity proceeds (10-10D).
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Info className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Expert Guidance</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                Our modeling uses realistic bonus rates (₹40-46/₹1000) and accounts for age-based mortality charges for precision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <Card className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-2xl text-center flex flex-col items-center">
                        <h2 className="text-3xl font-black mb-4">Ready to Start Your Wealth Journey?</h2>
                        <p className="text-slate-400 mb-8 max-w-lg">
                            Get a personalized financial consultation and a detailed policy illustration from our experts today.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                            Book Free Consultation Now
                        </Link>
                    </Card>
                </div>
            </section>
        </div>
    );
}
