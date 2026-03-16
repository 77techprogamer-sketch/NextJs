import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, FileText, Scale, ArrowRight, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
    title: 'How to Appeal a Rejected Health Insurance Claim in India (2026 Guide)',
    description: 'Was your health insurance claim rejected? Learn the 6-step appeal process, common reasons for rejection, and how to approach the Insurance Ombudsman.',
    keywords: [
        'health insurance claim rejection reasons',
        'how to appeal health insurance rejection india',
        'insurance ombudsman complaint process',
        'rejected medical claim help india',
        'insurance claim appeal letter format',
        'claims assistance services bangalore'
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
                            <span className="text-slate-900 font-medium">Claim Rejection Appeal Guide</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            Don&apos;t Give Up: <span className="text-primary">How to Appeal</span> a Rejected Health Insurance Claim
                        </h1>

                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-10 flex gap-4">
                            <AlertTriangle className="h-10 w-10 text-red-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-red-900">Rejection is Not the Final Word</h4>
                                <p className="text-red-800 text-sm italic">
                                    &quot;Over 15% of health insurance claims in India are initially rejected, often due to technicalities or incomplete documentation. Following a structured appeal process can reverse these decisions in many cases.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">Top 5 Reasons for Claim Rejection</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Non-Disclosure:</strong> Hiding pre-existing diseases like BP or Diabetes at the time of buying.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span><strong>Waiting Period:</strong> Claiming for an illness before the mandatory waiting period (usually 2-4 years) is over.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span><strong>Permanent Exclusions:</strong> Certain procedures or lifestyle-related issues not covered by the policy.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span><strong>Administrative Errors:</strong> Missing the 30-day window for document submission or filing incorrect forms.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span><strong>No Medical Necessity:</strong> Insurer believes the treatment didn&apos;t require hospitalization.</span>
                                </li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-16 mb-6">The 6-Step Appeal Process</h2>
                            <div className="space-y-8 mt-8">
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Analyze the Rejection Letter</h3>
                                        <p>Read the exact clause mentioned in the rejection letter. Is it a misunderstanding of facts or a strict policy exclusion?</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Gather Missing Evidence</h3>
                                        <p>Get a detailed &quot;Medical Necessity Certificate&quot; from your treating doctor. Collect all diagnostic reports that support your case.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Internal Grievance (Tier 1)</h3>
                                        <p>Write to the insurer&apos;s Grievance Redressal Officer (GRO). They are legally mandated to respond within 15 days.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">4</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">IRDAI Bima Bharosa (Tier 2)</h3>
                                        <p>If the GRO fails to resolve, register a complaint on the IRDAI Official Portal (Bima Bharosa). This puts regulatory pressure on the insurer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">5</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">The Insurance Ombudsman (Tier 3)</h3>
                                        <p>The Ombudsman is a cost-free, semi-judicial body. You can approach them within 1 year of a rejection. No lawyer is needed.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">6</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Legal Action (Consumer Court)</h3>
                                        <p>The last resort. Consumer courts are highly effective but can take 1-3 years for a final award.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-12 p-8 border-2 border-dashed border-red-200 rounded-3xl bg-red-50/30">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                                    <Scale className="h-6 w-6 text-red-600" />
                                    Expected Appeal Timeline
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="px-3 py-1 bg-white border border-red-100 rounded-lg font-bold text-red-600 shrink-0">15 Days</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Insurer Internal Grievance</h4>
                                            <p className="text-sm text-slate-600">The first step where the Company&apos;s GRO reviews your evidence. High success rate for documentation errors.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="px-3 py-1 bg-white border border-red-100 rounded-lg font-bold text-red-600 shrink-0">30 Days</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">IRDAI Bima Bharosa Escalation</h4>
                                            <p className="text-sm text-slate-600">If the company ignores the grievance, the regulator intervenes to force a response.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="px-3 py-1 bg-white border border-red-100 rounded-lg font-bold text-red-600 shrink-0">4-6 Months</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Ombudsman Hearing</h4>
                                            <p className="text-sm text-slate-600">The gold standard for fair play. Most valid appeals are settled here without going to court.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-10">
                                <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-3">
                                    <AlertTriangle className="h-5 w-5" />
                                </h4>
                                <p className="text-amber-800 text-sm leading-relaxed">
                                    While an Ombudsman&apos;s award is binding on the insurance company, it is <strong>not binding on the policyholder</strong>. If you are dissatisfied, you still have the legal right to approach the Consumer Forum. However, ensure you have strong medical evidence to avoid the 1-3 year court delay.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-12 not-prose">
                                <p className="text-blue-900 font-bold mb-3 flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    Get Expert Claim Help in Your City
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/locations/bangalore/health-insurance" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Bangalore Support
                                    </Link>
                                    <Link href="/locations/mumbai" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Mumbai Advisor
                                    </Link>
                                    <Link href="/locations/delhi" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Delhi NCR Help
                                    </Link>
                                    <Link href="/locations/hyderabad" className="text-sm border-b-2 border-blue-200 hover:border-blue-500 font-bold text-blue-800 transition-colors">
                                        Hyderabad Expert
                                    </Link>
                                </div>
                                <p className="text-blue-800 text-xs mt-4 italic">
                                    Our local experts prioritize physical document liaison with TPAs and the Insurance Ombudsman in major metros.
                                </p>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Struggling with a Rejected Claim?</h3>
                            <p className="text-slate-400 mb-8">We represent policyholders in Ombudsman cases and grievance filings. Let our 25+ years of industry experience help you recover your money.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Get Claim Help Now
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Claim Audit</h3>
                                <p className="text-sm text-muted-foreground mb-6">Upload your rejection letter for an expert analysis by our team.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <Scale className="h-5 w-5" />
                                    Ombudsman Support
                                </h4>
                                <p className="text-blue-800 text-sm">
                                    We assist in drafting the &apos;Annexure VI-A&apos; needed for Ombudsman complaints to ensure your case is presented professionally.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
