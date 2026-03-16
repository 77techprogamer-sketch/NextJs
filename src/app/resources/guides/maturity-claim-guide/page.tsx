import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, PiggyBank, Calendar, FileCheck, ArrowRight, History, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
    title: 'How to Settle LIC Maturity Claim (2026 Step-by-Step Guide)',
    description: 'Waiting for your LIC maturity amount? Learn the exact process, forms (No. 3825), and documentation required to get your money directly in your bank account.',
    keywords: [
        'LIC maturity claim process 2026',
        'LIC form 3825 download',
        'documents for lic maturity claim',
        'lic discharge voucher process',
        'how to get lic maturity money directly in bank',
        'lic neft mandate form submission'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/maturity-claim-guide',
    }
};

export default function MaturityClaimGuide() {
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
                            <span className="text-slate-900 font-medium">Maturity Claim Guide</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            Getting Your Money Back: <span className="text-primary">LIC Maturity Claim</span> Settlement Guide
                        </h1>

                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-10 flex gap-4">
                            <PiggyBank className="h-10 w-10 text-green-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-green-900">Maturity is a Milestone</h4>
                                <p className="text-green-800 text-sm italic">
                                    &quot;After years of disciplined savings, receiving your LIC maturity amount should be a celebration, not a struggle. This guide ensures you avoid common delays and get your funds credited on time.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">The Settlement Process (2026)</h2>
                            <p>
                                LIC usually sends a &quot;Maturity Intimation&quot; letter 2 months before the date of maturity. However, don&apos;t wait for the letter. You can start the process 30 days in advance.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                                <p className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    Are you in Bangalore?
                                </p>
                                <p className="text-blue-800 text-sm">
                                    Get specialized physical support for maturity claims at J.C. Road or Residency Road. 
                                    <Link href="/locations/bangalore/lic-agent" className="ml-1 underline font-extrabold hover:text-primary">
                                        Connect with our LIC Agent in Bangalore
                                    </Link>
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Essential Documents Checklist</h2>
                            <div className="grid md:grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <FileCheck className="h-5 w-5 text-primary mt-1" />
                                    <span>Original Policy Bond</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <FileCheck className="h-5 w-5 text-primary mt-1" />
                                    <span>Discharge Voucher (Form No. 3825)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <FileCheck className="h-5 w-5 text-primary mt-1" />
                                    <span>NEFT Mandate Form + Cancelled Cheque</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <FileCheck className="h-5 w-5 text-primary mt-1" />
                                    <span>ID Proof (Aadhar/PAN)</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Common Issues & Solutions</h2>
                            <ul className="space-y-6 mt-8">
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Lost Policy Bond?</h3>
                                        <p>You can still claim the money by submitting an &quot;Indemnity Bond&quot; on non-judicial stamp paper. We can assist with the legal drafting needed for this.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Name Mismatch?</h3>
                                        <p>If your name on the bank account differs from the policy bond, a &quot;One and the Same&quot; affidavit is required.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Want a Hassle-Free Settlement?</h3>
                            <p className="text-slate-400 mb-8">We handle everything: From document collection to branch coordination. Get your money credited without visiting the LIC office.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call a Specialist
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">Book Home Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Claim Assistance</h3>
                                <p className="text-sm text-muted-foreground mb-6">Enter your details for a free consultation on your maturity claim.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    Check Maturity Date
                                </h4>
                                <p className="text-blue-800 text-sm">
                                    Unsure when your policy matures? We can help you check the status and bonus of all your old LIC policies.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

