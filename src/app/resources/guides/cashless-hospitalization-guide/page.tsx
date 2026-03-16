import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Search, Hospital, ShieldCheck, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cashless Hospitalization Process — Step-by-Step Guide (2026)',
    description: 'Understand the cashless health insurance claim process. How to use your TPA card, search for network hospitals, and handle pre-authorization for planned or emergency cases.',
    keywords: [
        'cashless hospitalization process india',
        'health insurance tpa desk process',
        'how to find network hospitals for cashless',
        'pre-authorization health insurance timing',
        'planned vs emergency cashless claim',
        'cashless treatment denied what to do',
        'insurance advisor health claims'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/cashless-hospitalization-guide',
    }
};

export default function CashlessHospitalizationGuide() {
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
                            <span className="text-slate-900 font-medium">Cashless Hospitalization Guide</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            Smart Recovery: The <span className="text-primary">Cashless Hospitalization</span> Guide (2026)
                        </h1>

                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-10 flex gap-4">
                            <ShieldCheck className="h-10 w-10 text-green-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-green-900">Zero Out-of-Pocket Stress</h4>
                                <p className="text-green-800 text-sm italic">
                                    &quot;Cashless hospitalization is the ultimate benefit of health insurance. It ensures you focus on recovery while the insurer settles the hospital bill directly. Knowing the protocol avoids delays at the TPA desk.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">Planned vs. Emergency: The Protocol</h2>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="p-6 border rounded-2xl bg-slate-50">
                                    <h4 className="font-bold text-lg mb-3">Planned Surgery</h4>
                                    <p className="text-sm">Start the process <strong>48–72 hours before</strong> admission. Visit the hospital TPA desk with your policy card for pre-approval.</p>
                                </div>
                                <div className="p-6 border rounded-2xl bg-slate-50">
                                    <h4 className="font-bold text-lg mb-3 text-red-600">Emergency Case</h4>
                                    <p className="text-sm">Inform the insurer within <strong>24 hours</strong> of admission. The hospital will file for initial approval based on the diagnosis.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">The 4-Step Cashless Workflow</h2>
                            <div className="space-y-8 mt-8">
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Check Network Hospitals</h3>
                                        <p>Verify if the hospital is in your insurer&apos;s &quot;Cashless Network.&quot; We can help you find the latest list for your city.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">TPA Desk Submission</h3>
                                        <p>Submit your Policy Card, ID Proof, and Doctor&apos;s Admission Note to the hospital&apos;s Insurance/TPA desk.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Initial Approval</h3>
                                        <p>The insurer issues an initial &quot;Credit Letter&quot; (authorization) within 2–6 hours. This covers most surgical costs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xl">4</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Final Settlement</h3>
                                        <p>At discharge, the hospital sends final bills for approval. You only pay for &quot;Non-Medical Expenses&quot; (consumables) or room rent excess.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Common Reasons for Cashless Denial</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Pre-existing Disease:</strong> Admission is for a condition within the waiting period.</li>
                                <li><strong>Documentation Gaps:</strong> Missing previous treatment records or incorrect diagnosis code.</li>
                                <li><strong>Inadequate Sum Insured:</strong> Remaining limit is lower than the expected bill amount.</li>
                                <li><strong>Policy Exclusions:</strong> Treatment is for diagnostic purposes or cosmetic reasons.</li>
                            </ul>
                        </div>

                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Cashless Denied? We Can Help</h3>
                            <p className="text-slate-400 mb-8">If your cashless request is rejected, you can still treat it as a &apos;Reimbursement Claim.&apos; We assist in gathering all original documents for a successful refund after discharge.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Emergency Support
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-14 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Claim Audit</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Network Search</h3>
                                <p className="text-sm text-muted-foreground mb-6">Need to find a network hospital in your area? Enter your pincode below.</p>
                                <QuoteForm insuranceType="health_insurance" />
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <Hospital className="h-5 w-5" />
                                    Preferred Netowrk
                                </h4>
                                <p className="text-blue-800 text-sm">
                                    We have direct coordination channels with Star Health, HDFC Ergo, and Care Insurance to expedite pre-authorizations for our clients.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
