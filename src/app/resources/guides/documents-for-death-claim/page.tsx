import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, FileText, ClipboardList, Briefcase, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
    title: 'Documents Required for LIC Death Claim Settlement (2026 Checklist)',
    description: 'Complete checklist of documents for LIC and private insurer death claims. Form 3783, 3801, and 3785 explained for nominee payout settlement.',
    keywords: [
        'lic death claim documentation checklist',
        'documents needed for insurance death claim',
        'lic form 3783 download',
        'lic form 3801 certificate of death',
        'how to file death claim in lic',
        'death claim settlement duration india',
        'nominee kyc for insurance claim'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/documents-for-death-claim',
    }
};

export default function DeathClaimDocumentsGuide() {
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
                            <span className="text-slate-900 font-medium">Death Claim Documents Checklist</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            The Complete <span className="text-primary">Death Claim Documents</span> Checklist (2026)
                        </h1>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 flex gap-4">
                            <ClipboardList className="h-10 w-10 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">Be Prepared, Stay Calm</h4>
                                <p className="text-slate-600 text-sm italic">
                                    &quot;Claiming a death benefit during bereavement is emotionally draining. Having a pre-verified checklist ensures you don&apos;t have to make multiple trips to the insurance office.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">Part 1: Mandatory Foundation Documents</h2>
                            <p>These documents are required for EVERY death claim, regardless of whether it is an LIC or private insurer policy.</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Original Policy Bond</strong> (If lost, you need an Indemnity Bond)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Death Certificate</strong> issued by Local Body (Original + 5 Copies)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Nominee&apos;s ID & Address Proof</strong> (Aadhar & PAN mandatory)</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                    <span><strong>Nominee&apos;s Cancelled Cheque</strong> (For NEFT Transfer)</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Part 2: Essential LIC Claim Forms</h2>
                            <p>For LIC policies, you must fill out specific forms depending on the cause and timing of death.</p>
                            <div className="space-y-6 mt-8">
                                <div className="p-6 border rounded-2xl flex gap-4">
                                    <FileText className="h-8 w-8 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Form No. 3783 (Claimant&apos;s Statement)</h4>
                                        <p className="text-sm text-slate-600">The primary application form to be filled by the nominee.</p>
                                    </div>
                                </div>
                                <div className="p-6 border rounded-2xl flex gap-4">
                                    <FileText className="h-8 w-8 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Form No. 3801 (Certificate of Death)</h4>
                                        <p className="text-sm text-slate-600">A certificate to be completed by the hospital or doctor who last attended the deceased.</p>
                                    </div>
                                </div>
                                <div className="p-6 border rounded-2xl flex gap-4">
                                    <FileText className="h-8 w-8 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Form No. 3785 (Employer&apos;s Certificate)</h4>
                                        <p className="text-sm text-slate-600">Required if the policy was less than 3 years old at the time of death.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Part 3: Special Accidental Case Documents</h2>
                            <p>If death was due to an accident or suicide, additional legal documentation is required:</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Certified copy of First Information Report (FIR)</li>
                                <li>Post-Mortem Report (PMR)</li>
                                <li>Panchnama or Inquest Report</li>
                                <li>Final Police Closure Report</li>
                            </ul>
                        </div>

                        <AuthorBio />

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Need Help with Paperwork?</h3>
                            <p className="text-slate-400 mb-8">Filing a death claim is complex. We handle document collection from your home and coordinate directly with the insurance office to ensure a smooth payout.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call a Specialist
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">Book Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Claim Guidance</h3>
                                <p className="text-sm text-muted-foreground mb-6">Tell us about your policy for a free document audit.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <Briefcase className="h-5 w-5" />
                                    Employee Benefits
                                </h4>
                                <p className="text-blue-800 text-sm">
                                    If the policy was under a Salary Savings Scheme (SSS), we help coordinate with the employer for the &apos;Form 3785&apos; certification.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        
            <GuideArticleJsonLd 
                title={(metadata.title as { absolute?: string; default?: string })?.absolute || (metadata.title as string)}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/documents-for-death-claim`}
            />
        </div>
    );
}