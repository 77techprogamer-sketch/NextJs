import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle2, FileText, Wallet, Landmark, 
  AlertCircle, ArrowRight, ShieldCheck, Download, 
  RefreshCcw, Calculator, Ban, FileSignature, 
  Gavel, HelpCircle, HardDrive, Stamp
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Policy Revival & Maturity Masterclass 2026 | Form 3762 & TDS Help',
    description: 'The ultimate 2026 guide to reviving lapsed LIC policies and handling maturity claims. Learn about Form 3762, late fee interest, and Section 194DA TDS rules.',
    keywords: [
        'lic policy revival process 2026',
        'calculate lic late fee interest online',
        'lic form 3762 indemnity bond lost bond',
        'lic maturity claim signature mismatch solution',
        'revive lic policy after 5 years',
        'lic survival benefit vs maturity benefit',
        'tds on lic maturity section 194da'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lic-revival-maturity-masterclass',
    }
};

export default function LicMasterclassGuide() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 uppercase tracking-widest font-bold text-[10px]">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                            <span>/</span>
                            <Link href="/resources/guides" className="hover:text-primary transition-colors">Guides</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-black tracking-normal uppercase">Revival & Maturity Masterclass</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-red-200">
                                <AlertCircle className="h-3 w-3" />
                                Operation Recovery 2026
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 leading-[0.85] tracking-tighter">
                                Don't let your <br/> <span className="text-primary italic">Money Vanish.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-primary pl-8 my-10">
                                Thousands of crores lie in LIC's "Unclaimed Funds" because of lapsed policies and maturity hurdles. Whether your policy has been dead for 5 years or you've lost your original bond, this masterclass provides the legal and operational step-by-step to **getting your money back** in 2026.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <RefreshCcw className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">Policy Revival</h4>
                                <p className="text-xs text-slate-400 font-medium">Reactivate coverage and salvage your bonuses before the policy hits "Void" status.</p>
                            </div>
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <Wallet className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">Maturity Rescue</h4>
                                <p className="text-xs text-slate-400 font-medium">Solve signature mismatches, TDS leaks, and missing documents for a smooth payout.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-20 mb-10 text-slate-900 tracking-tight" id="revival-types">
                                1. The 4 Types of LIC Policy Revival
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Not every lapsed policy is revived the same way. LIC offers four distinct schemes depending on your financial situation:
                            </p>

                            <div className="space-y-8 my-12">
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                                    <h4 className="text-xl font-black text-slate-900 mb-3">A. Ordinary Revival</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Pay all overdue premiums with interest (usually 9-9.5%). Requires a simple "Declaration of Good Health" if revived within 6 months.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                                    <h4 className="text-xl font-black text-slate-900 mb-3">B. Special Revival Scheme</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">The original "Date of Commencement" is shifted forward. You don't pay old premiums, but the policy is treated as "New", effectively erasing the gap.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                                    <h4 className="text-xl font-black text-slate-900 mb-3">C. Installment Revival</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Pay the arrears in 6 to 12 monthly installments. Ideal for those who want to save the policy but can't pay 3 years of premiums at once.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                                    <h4 className="text-xl font-black text-slate-900 mb-3">D. Survival Benefit (SB) Revival</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">The accrued money-back benefit (SB) is used to offset the revival cost. Very common in Jeevan Anand policies.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight" id="interest-calc">
                                2. Calculating the Late Fee (The 2026 Formula)
                            </h2>
                            <div className="bg-slate-900 text-white p-12 rounded-[4rem] my-12 relative overflow-hidden group shadow-2xl">
                                <Calculator className="h-10 w-10 text-primary mb-6" />
                                <h4 className="text-3xl font-black mb-4">The Interest Math</h4>
                                <p className="text-slate-400 mb-8 font-medium">LIC charges compound interest on the monthly delay. Here is the standard calculation logic:</p>
                                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 font-mono text-primary">
                                    Interest = (Premium × N × R) / 1200
                                    <br/>
                                    <span className="text-white text-xs opacity-50 mt-2 block">(N = Months delayed, R = Interest Rate ~9.5%)</span>
                                </div>
                                <p className="mt-8 text-xs text-slate-500 italic">
                                    *During "Special Revival Campaigns" (usually Feb-March and Sept-Oct), LIC offers up to 25% discount on these interest charges.
                                </p>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="maturity-crisis">
                                3. The Maturity Crisis: Handling signature Mismatch & TDS
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                You've waited 20 years, but the payout is stuck. Here are the three most common 2026 hurdles:
                            </p>

                            <Accordion type="single" collapsible className="w-full mb-16">
                                <AccordionItem value="item-1" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        Signature Mismatch on Form 3825
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Signatures change over 20 years. If your current signature doesn't match the 2004 original, LIC will reject your discharge form. **Solution:** Submit a Bank Attestation (Form 3510) where your Bank Manager verifies your current signature.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        The TDS Section 194DA Trap
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Since 2024, LIC deducts 5% TDS on the income portion if sum assured is less than 10x of annual premium. If you didn't update your PAN, they deduct **20%**. Update your PAN at least 30 days before maturity date.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        NEFT Failure (Rejection Code R01)
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Maturity payouts only go to NEFT-enabled accounts. If your IFSC changed (due to bank mergers like PNB/OBC or HDFC), your payment will bounce. Always submit a NEW cancelled cheque with the 2026 IFSC code.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="lost-bond-3762">
                                4. Lost Policy Bond? The Form 3762 Guide
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                If you've lost the original bond, follow this "Indemnity" protocol:
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-20">
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-xl relative overflow-hidden group">
                                    <Stamp className="h-10 w-10 text-primary mb-6" />
                                    <h5 className="font-black text-lg text-slate-900 mb-2">Non-Judicial Stamp</h5>
                                    <p className="text-slate-500 text-sm italic">Purchase a stamp paper (typically ₹100-₹500 depending on state) in the name of the Policyholder.</p>
                                </div>
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-xl relative overflow-hidden group">
                                    <FileSignature className="h-10 w-10 text-primary mb-6" />
                                    <h5 className="font-black text-lg text-slate-900 mb-2">Form 3762 Filling</h5>
                                    <p className="text-slate-500 text-sm italic">Fill the "Indemnity For Duplicate Payout". Needs one witness who is preferably not a family member.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight">Expert FAQs: Revival & Maturity</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="faq-1">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">My policy lapsed 6 years ago. Can I revive it?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        Standard LIC rules allow revival within **5 years** from the first unpaid premium. If it's 6 years, it may require a special appeal to the Zonal Manager or can be treated as a claim for "Paid-Up Value" without revival.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-2">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What is "Admission of Age"?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        If your age wasn't officially admitted when you bought the policy (Age Not Admitted), you MUST provide a 10th marksheet or birth certificate during maturity. Without this, the payment will be on hold.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Professional Advice */}
                        <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[4rem] my-24 relative overflow-hidden group shadow-xl">
                            <h4 className="text-slate-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <Gavel className="h-6 w-6 text-primary" />
                                Legal & Technical Assistance
                            </h4>
                            <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                Lost bonds, signature mismatches, and "Non-admitted Age" are our specialty. Our veterans handle the LIC branch coordination so you just see the credit in your bank account.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">Start My Recovery</Link>
                                <Link href="/resources/guides" className="px-8 py-4 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">All Resources</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* CTA */}
                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
                            <h3 className="text-6xl font-black mb-8 leading-none tracking-tighter">Recover Your <br/> <span className="text-primary italic">Frozen Assets.</span></h3>
                            <p className="text-slate-400 mb-16 text-2xl font-medium max-w-2xl leading-tight">
                                Because your discipline of the past deserves the payout of the present.
                                <br/><span className="text-white mt-8 block italic tracking-tighter decoration-primary underline decoration-4 underline-offset-8 transition-all group-hover:underline-offset-12">Expert Recovery: 2026 Masterclass Policy.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10" />
                                    Book Free Recovery Consult
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Recapture Funds</h3>
                                <p className="text-sm text-slate-500 mb-12 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Maturity / Revival Audit</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <Download className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none">The Masterclass <br/>Document Pack</h4>
                                <p className="text-sm opacity-80 mb-12 leading-relaxed font-bold tracking-tight">Download Form 3825, 3762 (Lost Bond), and the Signature Attestation template for 2026.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-20 rounded-[2.5rem] uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20">Download Pack</Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How to revive a lapsed LIC policy in 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can revive a policy within 5 years of the first unpaid premium. Depending on the delay, you'll need to pay premiums with interest and may need a medical declaration."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is LIC Form 3762?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "LIC Form 3762 is an Indemnity Bond used when the original policy bond is lost, allowing the policyholder to still receive maturity or death benefits."
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