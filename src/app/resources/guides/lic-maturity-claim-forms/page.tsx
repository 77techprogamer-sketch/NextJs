import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, AlertTriangle, Download, Info, ShieldCheck, FileDigit, Landmark } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Form 3825 & 3510: Maturity Claim Guide & Download 2026',
    description: 'Learn how to correctly fill LIC Form 3825 (Maturity Claim) and Form 3510. Step-by-step instructions, required documents, and common reasons for rejection.',
    keywords: [
        'lic form 3825 download pdf',
        'how to fill lic form 3825',
        'lic maturity claim procedure',
        'lic form 3510 meaning',
        'lic maturity settlement documents',
        'lic policy surrender form 2026',
        'lic neft mandate form online'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lic-revival-maturity-masterclass',
    }
};

export default function LICMaturityFormsGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal">LIC Maturity Forms</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter mb-6 shadow-xl">
                                <FileDigit className="h-3 w-3 text-primary" />
                                Official Form Guide
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-[0.85] tracking-tighter">
                                Don't Lose Your Maturity Payout Over a <span className="text-primary italic underline decoration-slate-900 underline-offset-8">Clerical Error.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-slate-900 pl-8 my-10" id="intro">
                                In 2026, LIC has tightened its verification process for maturity payouts. A single mismatch on <strong>Form 3825</strong> or a failed NEFT mandate on <strong>Form 3510</strong> can delay your hard-earned money by months. Here's exactly how to get it right the first time.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-10 bg-slate-50 rounded-[3rem] shadow-sm border border-slate-100 hover:border-primary transition-all group">
                                <FileText className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">Form 3825</h4>
                                <p className="text-sm text-slate-500 font-medium mb-4">The Discharge Form for Maturity and Survival Benefits. This is the master receipt acknowledging that LIC owes you money.</p>
                                <Button variant="outline" className="w-full text-xs uppercase tracking-wider font-bold">Download PDF</Button>
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[3rem] shadow-sm border border-slate-100 hover:border-primary transition-all group">
                                <Landmark className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">Form 3510 (NEFT)</h4>
                                <p className="text-sm text-slate-500 font-medium mb-4">The NEFT Mandate Form. LIC no longer issues cheques. Without this, your money cannot be transferred.</p>
                                <Button variant="outline" className="w-full text-xs uppercase tracking-wider font-bold">Download PDF</Button>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="step-by-step">
                                How to Fill Form 3825 (Discharge Voucher)
                            </h2>
                            <p className="text-slate-600 mb-8">
                                Two months before your policy matures, LIC usually sends an intimation letter along with Form 3825. If you haven't received it, you can download it and submit it to your home branch.
                            </p>

                            <div className="space-y-8">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Step 1: Revenue Stamp</h4>
                                    <p className="text-slate-600 text-sm">Affix a <strong>â‚¹1 Revenue Stamp</strong> on the designated spot at the bottom of the form. You must sign <em>across</em> the stamp. Without the stamp, the form is legally void.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Step 2: Policy Details</h4>
                                    <p className="text-slate-600 text-sm">Fill in the Policy Number, Name of Life Assured, and the Date of Maturity exactly as printed on your Original Policy Bond. Do not use nicknames or abbreviations.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Step 3: Witness Signature</h4>
                                    <p className="text-slate-600 text-sm">Your signature must be witnessed by someone who knows you. This can be an LIC Agent, a Development Officer (DO), a Bank Manager, or a Gazetted Officer. Ensure they provide their address and designation stamp.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="documents">
                                The Master Document Checklist (2026)
                            </h2>
                            <p className="text-slate-600 mb-8">
                                Submitting the form alone isn't enough. You must attach the following annexures to your branch:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-slate-700 font-medium">
                                <li>Original Policy Document (Bond)</li>
                                <li>Original LIC Form 3825 (Signed across â‚¹1 stamp)</li>
                                <li>Original LIC Form 3510 (NEFT Mandate)</li>
                                <li>Cancelled Cheque with your name printed on it <em>OR</em> front page of Bank Passbook (attested)</li>
                                <li>Self-attested PAN Card copy</li>
                                <li>Self-attested Aadhar Card copy</li>
                            </ul>

                            <div className="my-16 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl">
                                <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                                    <AlertTriangle className="h-5 w-5" /> What if I lost the Original Policy Bond?
                                </h4>
                                <p className="text-amber-800 text-sm">
                                    If the original bond is lost, you cannot simply submit Form 3825. You will need to apply for a <strong>Duplicate Policy</strong> first, which involves executing an Indemnity Bond (Form 3756) on non-judicial stamp paper, and potentially placing a newspaper advertisement depending on the claim amount.
                                </p>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 pb-4 border-b tracking-tighter">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">When will the money be credited to my account?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        If all documents are submitted correctly 1-2 months prior to maturity, LIC will credit the amount precisely on the <strong>Date of Maturity</strong>. If submitted late, it usually takes 7-10 working days after submission.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">Can I submit these forms online?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        While certain NEFT updates can be done via the LIC e-Services portal, the final maturity claim (Form 3825) along with the original physical policy bond must be submitted in person or via registered post to your <strong>Servicing Branch</strong>.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <AuthorBio />
                    </article>

                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-3xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Claim Assistance</h3>
                                <p className="text-sm text-slate-500 mb-10 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Stuck at the Branch?</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-10 bg-slate-900 text-white rounded-[3.5rem] border border-slate-800 shadow-xl">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-tighter text-xs">
                                    <AlertTriangle className="h-4 w-4" />
                                    Name Mismatch Warning
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium">
                                    If the name on your LIC Policy does not match your Bank Account and PAN Card (e.g., initial vs full surname), your NEFT will fail. You must submit a Gazette notification or an affidavit to fix this before submitting Form 3825.
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
                                "name": "How to download LIC Form 3825?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "LIC Form 3825 (Maturity/Survival Benefit Discharge Form) can be downloaded from the official LIC website under the 'Download Forms' section or obtained directly from any LIC branch office."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is a revenue stamp mandatory on Form 3825?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, affixing a â‚¹1 revenue stamp and signing across it is mandatory. It acts as a legal receipt of payment. Without it, the form will be rejected."
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
