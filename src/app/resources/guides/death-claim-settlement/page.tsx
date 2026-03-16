import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, FileText, Scale, ShieldCheck, History, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

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

                            <div className="my-12 p-8 border-2 border-dashed border-primary/20 rounded-3xl bg-primary/5">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                                    <History className="h-6 w-6 text-primary" />
                                    Expected Settlement Timeline
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="px-3 py-1 bg-white border border-primary/10 rounded-lg font-bold text-primary shrink-0">15-30 Days</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Normal Death Claims</h4>
                                            <p className="text-sm text-slate-600">For policies older than 3 years with natural causes, settlements are usually swift once documents are verified.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="px-3 py-1 bg-white border border-primary/10 rounded-lg font-bold text-primary shrink-0">90-180 Days</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Early Death Claims (Investigated)</h4>
                                            <p className="text-sm text-slate-600">If death occurs within 3 years of policy start, the insurer conducts a mandatory investigation to rule out non-disclosure.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-10">
                                <h4 className="font-bold text-red-900 flex items-center gap-2 mb-3">
                                    <AlertTriangle className="h-5 w-5" />
                                    Section 45: The 3-Year Incontestability Clause
                                </h4>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    According to Section 45 of the Insurance Act 1938, no life insurance policy can be called in question by an insurer on any ground whatsoever after the expiry of <strong>3 years</strong> from the date of issuance or revival. If your claim is rejected after this period, you have a massive legal advantage.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-12 not-prose">
                                <p className="text-blue-900 font-bold mb-3 flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    Get Expert Claim Support in Your City
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/locations/bangalore/lic-agent" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Bangalore Flagship Hub
                                    </Link>
                                    <Link href="/locations/mumbai" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Mumbai Expert
                                    </Link>
                                    <Link href="/locations/hyderabad" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Hyderabad Support
                                    </Link>
                                    <Link href="/locations/chennai" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Chennai Advisor
                                    </Link>
                                </div>
                                <p className="text-blue-800 text-xs mt-4 italic">
                                    Direct liaison support at Residency Road, JC Road, and Dadar/Nariman Point LIC offices for claim escalation.
                                </p>
                            </div>
                        </div>

                        <AuthorBio />

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

