import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, FileText, Scale, ArrowRight, MapPin, Search, ListChecks, HelpCircle, UserCheck } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'How to Appeal a Rejected Health Insurance Claim in India (2026 Guide)',
    description: 'Was your health insurance claim rejected? Learn the professional, IRDAI-compliant appeal process, from GRO grievance to the Insurance Ombudsman.',
    keywords: [
        'how to appeal health insurance rejection india',
        'health insurance claim appeal steps',
        'insurance ombudsman india process',
        'Bima Bharosa portal complaint',
        'rejected health claim reasons india',
        'insurance grievance officer india'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/claim-rejection-appeal',
    }
};

export default function ClaimRejectionAppealGuide() {
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
                            <span className="text-slate-900 font-medium">Claim Appeal Guide</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
                            How to Successfully <span className="text-primary">Appeal a Rejected</span> Health Insurance Claim: A Step-by-Step Guide
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Health insurance claims are frequently rejected due to documentation errors, misinterpretations of policy terms, or lack of proper communication between hospitals and insurers. If your claim has been denied, <strong>you have the right to appeal.</strong>
                        </p>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-12">
                            <p className="text-blue-900 font-medium">
                                This guide outlines the professional, IRDAI-compliant process to challenge a rejection and recover your rightful benefits.
                            </p>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <Search className="h-8 w-8 text-primary" />
                                1. Understand the &quot;Why&quot; (The Rejection Letter)
                            </h2>
                            <p>
                                The moment you receive a rejection, the insurer is legally required to send a <strong>Rejection Letter</strong> (or TPA email) explaining the specific reason. Common reasons include:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 my-8">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Non-Disclosure</h4>
                                    <p className="text-sm text-slate-600">Often used incorrectly for long-term conditions like BP/Diabetes.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Exclusions</h4>
                                    <p className="text-sm text-slate-600">Insurer claims the specific treatment is not covered by the policy.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Lack of Medical Necessity</h4>
                                    <p className="text-sm text-slate-600">Claiming the hospitalization wasn&apos;t required for the treatment.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Incomplete Documentation</h4>
                                    <p className="text-sm text-slate-600">Missing discharge summaries, reports, or detailed pharmacy bills.</p>
                                </div>
                            </div>
                            <p className="font-bold text-slate-900">
                                Action: Read the letter carefully. Do not contact the insurer until you have the exact clause they are citing.
                            </p>

                            <h2 className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                                <ListChecks className="h-8 w-8 text-primary" />
                                2. Gather Your Evidence
                            </h2>
                            <p>To win an appeal, you need proof that counters the rejection. Organize your file with:</p>
                            <ul className="space-y-4 my-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                                    <span><strong>Doctor&apos;s Note:</strong> A letter from the treating physician explicitly stating why the treatment was necessary.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                                    <span><strong>Complete Medical History:</strong> Copies of all diagnostic tests, lab reports, and prescriptions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                                    <span><strong>Policy Document:</strong> A highlighted copy of your policy wording that contradicts the insurer&apos;s rejection clause.</span>
                                </li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                                <Scale className="h-8 w-8 text-primary" />
                                3. File a Formal Grievance
                            </h2>
                            <p>You must follow the internal escalation process before going to the Ombudsman.</p>
                            
                            <div className="space-y-6 my-10">
                                <div className="p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 opacity-10">
                                        <FileText className="h-32 w-32" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm">1</div>
                                        Step 1: Contact the Grievance Officer
                                    </h4>
                                    <p className="text-slate-400">
                                        Every insurer in India has a mandatory Grievance Redressal Officer (GRO). Send a formal email citing your claim number and the date of the rejection letter.
                                    </p>
                                </div>

                                <div className="p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 opacity-10">
                                        <Scale className="h-32 w-32" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm">2</div>
                                        Step 2: Use the Bima Bharosa Portal
                                    </h4>
                                    <p className="text-slate-400">
                                        If the insurer does not resolve the issue within 15 days, register your complaint on the <a href="https://bimabharosa.irdai.gov.in/" className="text-primary hover:underline">IRDAI Bima Bharosa portal</a>. This triggers a formal regulatory audit of your claim.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                                <UserCheck className="h-8 w-8 text-primary" />
                                4. When to Approach the Insurance Ombudsman
                            </h2>
                            <p>If the GRO response is unsatisfactory or they fail to respond within 30 days, you can approach the <strong>Insurance Ombudsman</strong>.</p>
                            <ul className="space-y-4">
                                <li><strong>Conditions:</strong> You must have filed a written complaint with the insurer first.</li>
                                <li><strong>The Process:</strong> It is a quasi-judicial, free, and fast-track process for disputes up to ₹30 Lakhs.</li>
                            </ul>

                            <hr className="my-16" />

                            <h2 className="text-3xl font-bold mb-6">Why Expert Advocacy Matters</h2>
                            <p>Navigating these bureaucratic hurdles while recovering from illness is stressful. Our team acts as your independent advocate to:</p>
                            <div className="grid md:grid-cols-3 gap-6 my-10">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <Search className="h-10 w-10 text-primary mx-auto mb-4" />
                                    <h4 className="font-bold mb-2">Audit File</h4>
                                    <p className="text-xs text-slate-500">We identify errors that lead to rejections.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
                                    <h4 className="font-bold mb-2">Draft Responses</h4>
                                    <p className="text-xs text-slate-500">Legal-grade responses to insurer clauses.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <Scale className="h-10 w-10 text-primary mx-auto mb-4" />
                                    <h4 className="font-bold mb-2">Represent Case</h4>
                                    <p className="text-xs text-slate-500">We handle the Ombudsman presentation.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                        Do I need a lawyer for the Ombudsman?
                                    </h4>
                                    <p className="text-slate-600 mt-2">No, the Ombudsman process is designed for individuals to represent themselves, but having an insurance expert prepare your case significantly increases your success rate.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                        Does my policy get cancelled if I appeal?
                                    </h4>
                                    <p className="text-slate-600 mt-2">Absolutely not. You have a legal right to challenge any decision regarding your benefits.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                        Is there a time limit?
                                    </h4>
                                    <p className="text-slate-600 mt-2">Yes, you must approach the Ombudsman within one year of the insurer&apos;s final rejection.</p>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-16 p-10 bg-slate-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <AlertTriangle className="h-40 w-40" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 relative z-10">Need Immediate Help with a Rejected Claim?</h3>
                            <p className="text-slate-400 mb-10 text-lg relative z-10">Don&apos;t let a &quot;No&quot; from the insurance company be the final word. Our IRDAI-certified experts offer a 98% settlement success rate.</p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                <Button size="lg" className="flex-1 text-lg h-16 bg-primary hover:bg-primary/90 font-bold" asChild>
                                    <a href={`tel:${contactConfig.phone}`}>
                                        <Phone className="mr-2 h-6 w-6" />
                                        Get Claim Help Now
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-16 text-white border-white/20 hover:bg-white/10 font-bold" asChild>
                                    <Link href="/contact">Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Claim Audit</h3>
                                <p className="text-sm text-muted-foreground mb-8">Upload your rejection letter for a free expert analysis by our legal and medical teams.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <Scale className="h-6 w-6" />
                                    Legal Support
                                </h4>
                                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                    We assist in drafting the &quot;Annexure VI-A&quot; needed for Ombudsman complaints to ensure your case is presented professionally and accurately.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        
            <GuideArticleJsonLd 
                title={(metadata.title as { absolute?: string; default?: string })?.absolute || (metadata.title as string)}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/claim-rejection-appeal`}
            />
        </div>
    );
}