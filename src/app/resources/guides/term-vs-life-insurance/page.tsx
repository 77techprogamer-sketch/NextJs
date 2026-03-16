import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Info, Scale, ShieldCheck, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
    title: 'Term Insurance vs Life Insurance — Which Should You Choose in 2026?',
    description: 'Confusion between Term and Life insurance? Compare premiums, coverage, and returns to find the best protection for your family. Expert advice on when to buy what.',
    keywords: [
        'term insurance vs life insurance comparison',
        'is term insurance better than endowment',
        'benefits of pure term plan india',
        'life insurance with maturity returns',
        'best insurance for breadwinners',
        'insurance advisor bangalore'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/term-vs-life-insurance',
    }
};

export default function TermVsLifeGuide() {
    const comparisonRows = [
        { feature: 'Primary Purpose', col1: 'Pure Protection', col2: 'Savings + Protection', highlight: true },
        { feature: 'Premium Cost', col1: 'Very Low (Affordable)', col2: 'Higher', highlight: true },
        { feature: 'Maturity Benefit', col1: false, col2: true },
        { feature: 'Policy Term', col1: 'Fixed (e.g., 20-40 years)', col2: 'Whole Life (till age 99/100)' },
        { feature: 'Ideal For', col1: 'High Liabilities (Home Loan)', col2: 'Legacy Planning' },
        { feature: 'Tax Benefit (80C)', col1: true, col2: true },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-medium">Term vs Life Insurance</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            The Great Debate: <span className="text-primary">Term Insurance vs. Life Insurance</span>
                        </h1>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-10 flex gap-4">
                            <Info className="h-10 w-10 text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-blue-900">Understanding the Difference</h4>
                                <p className="text-blue-800 text-sm italic">
                                    &quot;Term Insurance is like a safety net—cheap and massive. Endowment/Life plans are like a safety net with a money-back feature—much more expensive but ensures you get something back if you survive. Both have their place.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">Comparison Table: Quick Look</h2>
                            <div className="overflow-x-auto border rounded-xl mb-12">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b">
                                        <tr>
                                            <th className="p-4 font-bold border-r">Feature</th>
                                            <th className="p-4 font-bold text-primary">Term Insurance</th>
                                            <th className="p-4 font-bold">Endowment / Whole Life</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr>
                                            <td className="p-4 border-r font-medium">Premium Cost</td>
                                            <td className="p-4 text-green-600 font-medium">Ultra Low (₹1000/mo for 1Cr)</td>
                                            <td className="p-4 text-red-500">High (₹10,000/mo for 10L)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-r font-medium">Maturity Benefit</td>
                                            <td className="p-4">Zero (Only Death Benefit)</td>
                                            <td className="p-4 text-green-600 font-medium">Full Sum + Bonus</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-r font-medium">Coverage Amount</td>
                                            <td className="p-4 font-bold">10-20x Annual Income</td>
                                            <td className="p-4">Usually 1-2x Annual Income</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-r font-medium">Primary Goal</td>
                                            <td className="p-4">Pure Protection (Risk)</td>
                                            <td className="p-4">Savings + Small Protection</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">When to Choose Term Insurance?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                                    <span><strong>If you have Liabilities:</strong> Like a Home loan or Personal loan. Term insurance covers the full debt amount cheaply.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                                    <span><strong>If you are the Breadwinner:</strong> Families depend on your monthly salary. Term insurance acts as an income replacement.</span>
                                </li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-16 mb-6">When to Choose Endowment/Life Plans?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>For Guaranteed Milestones:</strong> Children&apos;s marriage or education where you want 100% safety of principal.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>For Legacy Planning:</strong> Whole life plans provide a payout to your heirs regardless of when you pass away.</span>
                                </li>
                            </ul>
                        </div>

                        <ComparisonTable 
                            title="Side-by-Side: Term vs. Whole Life Insurance"
                            headers={["Feature", "Term Insurance", "Whole Life Insurance"]}
                            rows={comparisonRows}
                            note="Term insurance is generally the first priority for breadwinners with active liabilities."
                        />

                        <AuthorBio />

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Unsure Which One Fits Your Needs?</h3>
                            <p className="text-slate-400 mb-8">We perform a &apos;Gap Analysis&apos; to see how much cover your family actually needs. Don&apos;t be underinsured or over-invested.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Talk to an Advisor
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">Book Free Audit</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Benefit Comparison</h3>
                                <p className="text-sm text-muted-foreground mb-6">Share your age and income to receive a custom comparison plan.</p>
                                <QuoteForm insuranceType="life_insurance" />
                            </div>

                            <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Scale className="h-5 w-5" />
                                    Tax Benefits
                                </h4>
                                <p className="text-slate-700 text-sm">
                                    Both plans offer tax benefits under Section 80C. However, the maturity proceeds of Endowment plans are tax-free under Section 10(10D).
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
