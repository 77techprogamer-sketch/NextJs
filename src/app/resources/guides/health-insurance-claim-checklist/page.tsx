import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ClipboardCheck, FileText, Stethoscope, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
    title: 'Health Insurance Claim Checklist — Documents & Process (2026)',
    description: 'Complete documentation checklist for health insurance reimbursement claims. Avoid common rejection reasons by ensuring your discharge summary, bills, and reports are pre-verified.',
    keywords: [
        'health insurance claim document checklist',
        'reimbursement claim process india',
        'documents needed for sickness claim',
        'discharge summary insurance requirement',
        'health insurance claim form download',
        'medical bill verification for insurance',
        'claims support bangalore'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/health-insurance-claim-checklist',
    }
};

export default function HealthClaimChecklistGuide() {
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
                            <span className="text-slate-900 font-medium">Health Claim Checklist</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            The Essential <span className="text-primary">Health Insurance Claim</span> Checklist (2026)
                        </h1>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-10 flex gap-4">
                            <ClipboardCheck className="h-10 w-10 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">Documentation is Key</h4>
                                <p className="text-slate-600 text-sm italic">
                                    &quot;In reimbursement claims, the insurer doesn&apos;t see the patient; they only see the papers. A single missing report can lead to a 20% deduction or a total rejection of your claim.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">Part 1: The Core Document Kit</h2>
                            <p>Collect these original documents from the hospital BEFORE you leave the discharge desk.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Discharge Summary</strong> (Original, signed by treating doctor)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Final Hospital Bill</strong> (Detailed break-up is mandatory)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Payment Receipts</strong> (With matching serial numbers)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Medical Reports</strong> (Blood tests, X-rays, MRI, Scans)</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Part 2: Claim Forms & KYC</h2>
                            <div className="space-y-6 mt-8">
                                <div className="p-6 border rounded-2xl flex gap-4">
                                    <FileText className="h-8 w-8 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Claim Form Part A & B</h4>
                                        <p className="text-sm text-slate-600">Part A is filled by you; Part B is filled and stamped by the hospital administration.</p>
                                    </div>
                                </div>
                                <div className="p-6 border rounded-2xl flex gap-4">
                                    <FileText className="h-8 w-8 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Cancelled Cheque</h4>
                                        <p className="text-sm text-slate-600">Must show the policyholder&apos;s name for electronic fund transfer (NEFT).</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Pro Tips for Faster Payout</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Pre-Hospitalization:</strong> Keep receipts for tests done up to 60 days before admission.</li>
                                <li><strong>Post-Hospitalization:</strong> Keep receipts for follow-up medicines up to 90 days after discharge.</li>
                                <li><strong>Doctor Consultation:</strong> Every bill must have a matching doctor&apos;s prescription.</li>
                                <li><strong>Stickers:</strong> Ensure the &quot;Implant Sticker&quot; is attached for surgeries like Stents or Knee replacements.</li>
                            </ul>
                        </div>

                        <AuthorBio />

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Worrying About Deductions?</h3>
                            <p className="text-slate-400 mb-8">We pre-verify your documents before submission and handle all insurer queries to ensure you get the maximum possible refund allowed by your policy.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Consult a Claim Expert
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">Free File Review</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Claim Assistance</h3>
                                <p className="text-sm text-muted-foreground mb-6">Enter your details and our team will call you to guide through the documentation.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Stethoscope className="h-5 w-5" />
                                    Medical Necessity
                                </h4>
                                <p className="text-slate-700 text-sm">
                                    The #1 reason for reimbursement rejection is &quot;No Medical Necessity.&quot; We help your doctor phrase the certificate to satisfy insurer requirements.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
