import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Landmark, CheckCircle2, AlertTriangle, ShieldCheck, CreditCard, Clock, MapPin, XCircle } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Insurance NEFT Mandate Failed? Troubleshooting Guide 2026',
    description: 'Why did your LIC or Health Insurance NEFT transfer fail? Learn how to fix name mismatches, dormant accounts, and invalid IFSC codes to release your stuck payout.',
    keywords: [
        'insurance neft mandate failed',
        'lic neft return reason',
        'how to update bank details in lic online',
        'health insurance claim stuck in neft',
        'name mismatch in insurance and bank',
        'neft form for insurance claim'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lic-revival-maturity-masterclass',
    }
};

export default function NEFTTroubleshootingGuide() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    <article className="flex-1 max-w-4xl">
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 uppercase tracking-widest font-black text-[10px]">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-black tracking-normal">NEFT Troubleshooting</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter mb-6 shadow-xl">
                                <CreditCard className="h-3 w-3 text-primary" />
                                Payment Recovery
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-[0.85] tracking-tighter">
                                Claim Approved. <br/> <span className="text-primary italic underline decoration-slate-900 underline-offset-8">Money Missing?</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-slate-900 pl-8 my-10" id="intro">
                                In 2026, IRDAI regulations strictly mandate that all claim payouts, maturity benefits, and policy surrenders must be settled via electronic transfer (NEFT). Cheques are history. But what happens when the <strong>system rejects your bank details?</strong>
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-10 bg-red-50 rounded-[3rem] shadow-sm border border-red-100 hover:border-red-200 transition-all group">
                                <XCircle className="h-10 w-10 text-red-500 mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">Name Mismatch</h4>
                                <p className="text-sm text-slate-500 font-medium mb-4">The #1 reason for NEFT failure. If your policy says "A. Sharma" and your bank says "Amit Sharma", the RBI payment gateway will bounce it.</p>
                            </div>
                            <div className="p-10 bg-amber-50 rounded-[3rem] shadow-sm border border-amber-100 hover:border-amber-200 transition-all group">
                                <Landmark className="h-10 w-10 text-amber-500 mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">Bank Mergers (Invalid IFSC)</h4>
                                <p className="text-sm text-slate-500 font-medium mb-4">Due to recent PSU bank mergers, old IFSC codes no longer work. The NEFT mandate will fail if you provide an outdated passbook.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="how-to-fix">
                                How to Unblock a Failed NEFT Transfer
                            </h2>
                            <p className="text-slate-600 mb-8">
                                If your insurer notifies you of an NEFT return, you need to act fast. Follow this recovery protocol:
                            </p>

                            <div className="space-y-8">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Step 1: Procure a Fresh NEFT Mandate</h4>
                                    <p className="text-slate-600 text-sm">Download your specific insurer's NEFT Mandate Form. Fill it with your <strong>current</strong> bank details. Ensure your account is active (not frozen/dormant due to lack of KYC).</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Step 2: The Name Mismatch Affidavit</h4>
                                    <p className="text-slate-600 text-sm">If your name differs between the policy and the bank, you must submit an Affidavit on ₹100 stamp paper stating that both names belong to the same person. Alternatively, officially change your name in the bank using your Aadhar to match the policy.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Step 3: Attested Cancelled Cheque</h4>
                                    <p className="text-slate-600 text-sm">Provide a cancelled cheque where your <strong>name is pre-printed</strong>. If you provide a blank/non-personalized cheque, you must also attach a copy of the front page of your bank passbook, duly signed and stamped by the Bank Branch Manager.</p>
                                </div>
                            </div>

                            <div className="my-16 p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform">
                                    <Clock className="w-64 h-64 -mb-16 -mr-16" />
                                </div>
                                <h3 className="text-2xl font-black mb-4">The NRE / NRO Account Trap</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 font-medium">
                                    NRIs often try to receive payouts into standard savings accounts. By law, if your residential status changes to NRI, you cannot use a resident account. The NEFT will fail. You must update your KYC with the insurer and provide an NRO account for the payout.
                                </p>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 pb-4 border-b tracking-tighter">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">Can I get the payout in my spouse's account?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        No. IRDAI strictly prohibits third-party payments. The payout can only be transferred to a bank account where the <strong>Policyholder</strong> (or the official registered Nominee/Assignee in case of death claims) is the primary account holder.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">How long does it take after submitting fresh NEFT details?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        Once the fresh NEFT mandate and supporting documents are submitted and verified at the branch, the system typically re-triggers the payment batch within <strong>3 to 5 working days</strong>.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">Can I update my NEFT details online?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        Some insurers (like LIC via their Customer Portal) allow online NEFT registration provided your mobile number is linked for OTP verification and the uploaded cheque clears automated OCR checks. However, if there is a name mismatch, physical submission is mandatory.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <AuthorBio />
                    </article>

                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-3xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Escalate Issue</h3>
                                <p className="text-sm text-slate-500 mb-10 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Money Stuck for Months?</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-10 bg-slate-900 text-white rounded-[3.5rem] border border-slate-800 shadow-xl">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-tighter text-xs">
                                    <AlertTriangle className="h-4 w-4" />
                                    Penal Interest Notice
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium">
                                    If your payout is delayed and the fault lies with the insurer's internal system (not a bounce due to your incorrect details), you are legally entitled to <strong>penal interest</strong> at 2% above the prevailing bank rate for the period of delay.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Why did my LIC NEFT transfer fail?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The most common reasons are: 1. A mismatch between your name on the policy and your bank account. 2. An invalid or old IFSC code due to bank mergers. 3. A dormant or frozen bank account due to pending KYC."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I receive insurance payout in a joint account?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, provided you (the policyholder or nominee) are the primary/first account holder in the joint account."
                                }
                            }
                        ]
                    })
                }}
            />
            <GuideArticleJsonLd 
                title={(metadata.title as { absolute?: string; default?: string })?.absolute || (metadata.title as string)}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/lic-revival-maturity-masterclass`}
            />
        </div>
    );
}
