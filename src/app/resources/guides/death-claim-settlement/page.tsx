import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, FileText, Scale } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to File LIC Death Claim in India (2026 Guide) | Expert Help',
    description: 'Complete guide to LIC death claim process, documentation, and what to do if the claim is rejected. Learn from experts with 25+ years experience.',
    keywords: [
        'LIC death claim process 2026',
        'document required for lic death claim',
        'lic death claim rejection help',
        'early death claim investigation lic',
        'how to file lic claim online',
        'insurance claim recovery specialist India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/death-claim-settlement',
    }
};

export default function DeathClaimGuide() {
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
                            <span className="text-slate-900 font-medium">Death Claim Guide</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            The Complete Guide to <span className="text-primary">LIC Death Claim Settlement</span> in India
                        </h1>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-10 flex gap-4">
                            <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
                            <div>
                                <p className="text-blue-900 font-medium italic">
                                    &quot;Navigating a death claim during a time of grief is overwhelming. This guide is designed to simplify the technicalities so you can secure your family&apos;s financial future.&quot;
                                </p>
                                <p className="text-blue-700 text-sm mt-2">— Hari Kotian, Senior Claim Specialist (25+ Yrs Exp)</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">Step-by-Step Filing Process</h2>
                            <p>To ensure a smooth settlement, follow these critical steps immediately after the unfortunate event:</p>

                            <ol className="space-y-6 mt-8">
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Immediate Notification</h3>
                                        <p>Inform the LIC branch where the policy was serviced. You can do this via an informal letter or by visiting the branch.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Form Filing (Claim Form A)</h3>
                                        <p>Complete Form No. 3783 (Claim Form A) for normal death. If death occurs within 3 years of policy commencement, additional forms are required.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Documentation</h3>
                                        <p>Submit original policy bond, death certificate, and claimant&apos;s ID proof.</p>
                                    </div>
                                </li>
                            </ol>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Common Reasons for Rejection</h2>
                            <div className="grid md:grid-cols-2 gap-6 my-10">
                                <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                    <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                                    <h4 className="font-bold text-red-900 mb-2">Non-Disclosure</h4>
                                    <p className="text-red-800 text-sm">Most early claims are rejected alleging pre-existing health habits like smoking or chronic illness not mentioned in the proposal.</p>
                                </div>
                                <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                    <FileText className="h-8 w-8 text-red-600 mb-4" />
                                    <h4 className="font-bold text-red-900 mb-2">Policy Lapsation</h4>
                                    <p className="text-red-800 text-sm">If the death occurs while the policy is in a lapsed state (unpaid premiums beyond the grace period).</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">What if your claim is rejected?</h2>
                            <p>
                                Do not lose hope. Section 45 of the Insurance Act protects policyholders from arbitrary rejections after 3 years. Even for early claims, if the rejection is based on non-material facts, it can be challenged at the Insurance Ombudsman or via IRDAI Grievance cell.
                            </p>
                        </div>

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Struggling with a Rejected Claim?</h3>
                            <p className="text-slate-400 mb-8">We specialize in escalating rejected death claims with a 98% success rate. Let us handle the legal and technical paperwork for you.</p>
                            <Button size="lg" className="w-full sm:w-auto text-lg h-14">
                                <Phone className="mr-2 h-5 w-5" />
                                Talk to a Claim Expert
                            </Button>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-2">Free Claim Review</h3>
                                <p className="text-sm text-muted-foreground mb-6">Send us your rejection letter for a free expert analysis within 24 hours.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                                <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-3">
                                    <Scale className="h-5 w-5" />
                                    Need Legal Support?
                                </h4>
                                <p className="text-amber-800 text-sm">
                                    We provide end-to-end support for Insurance Ombudsman filings and legal notices to insurance companies.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

function ShieldCheck(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
