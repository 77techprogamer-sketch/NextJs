import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, PiggyBank, Calendar, FileCheck, ArrowRight, History, MapPin, AlertCircle, Bookmark, Download } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Maturity Claim Documents Checklist 2026 | Form 3825 & NEFT',
    description: 'Avoid LIC maturity delays! Complete 2026 checklist of documents for LIC maturity claim, Form 3825 instructions, lost bond indemnity process, and bank NEFT mandate.',
    keywords: [
        'documents for lic maturity claim 2026',
        'lic form 3825 discharge voucher download',
        'lic lost policy bond indemnity bond 3762',
        'lic maturity claim online process',
        'how to get lic maturity money directly in bank account',
        'lic survival benefit vs maturity claim'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/maturity-claim-guide',
    }
};

export default function MaturityClaimGuide() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 font-bold uppercase tracking-widest">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900">Maturity Claim 2026</span>
                        </nav>

                        <header className="mb-12">
                            <h1 className="text-4xl md:text-7xl font-black mb-6 text-slate-900 leading-[0.9] tracking-tighter">
                                Cash Out Your <br/><span className="text-primary italic">Maturity</span> on Time.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-primary pl-6 py-2 mt-8">
                                After 15, 20, or 25 years of regular premiums, your LIC policy is ready to pay back. But paperwork errors often delay the credit by months. This 2026 guide ensures your funds hit your bank account on the <strong>exact date of maturity</strong>.
                            </p>
                        </header>

                        <div className="flex flex-col md:flex-row gap-4 mb-16">
                            <div className="flex-1 p-6 bg-slate-900 text-white rounded-3xl flex items-center gap-4">
                                <div className="h-12 w-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-black">30</div>
                                <p className="text-xs font-bold leading-tight">START YOUR PROCESS 30 DAYS BEFORE MATURITY</p>
                            </div>
                            <div className="flex-1 p-6 bg-primary text-white rounded-3xl flex items-center gap-4">
                                <FileCheck className="h-12 w-12 opacity-50" />
                                <p className="text-xs font-bold leading-tight uppercase">ELECTRONIC CREDIT (NEFT) IS NOW MANDATORY</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-black mb-8 text-slate-900 uppercase">The Master Checklist 2026</h2>
                            <p className="text-slate-600 mb-10">To ensure a hassle-free settlement, LIC requires the following "Golden Four" documents. Missing even one will cause the papers to be returned to the branch.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-primary transition-all">
                                    <Bookmark className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="text-xl font-bold mb-2">Original Policy Bond</h4>
                                    <p className="text-sm text-slate-500">The most important document. If you have lost it, you must file an <strong>Indemnity Bond (Form 3762)</strong> on ₹100 stamp paper.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-primary transition-all">
                                    <Download className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="text-xl font-bold mb-2">Form No. 3825 (Discharge)</h4>
                                    <p className="text-sm text-slate-500">Also known as the Discharge Voucher. It must be signed by the policyholder and witnessed by a third party.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-primary transition-all">
                                    <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="text-xl font-bold mb-2">NEFT Mandate + Cheque</h4>
                                    <p className="text-sm text-slate-500">A cancelled cheque with your <strong>name printed</strong> is mandatory. If the name is not printed, get a bank passbook copy attested.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-primary transition-all">
                                    <History className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="text-xl font-bold mb-2">KYC Update</h4>
                                    <p className="text-sm text-slate-500">Recent Aadhar and PAN copy. Ensure your Aadhar name matches the LIC bond perfectly to avoid "Mismatch Affidavits."</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-black mt-24 mb-8 text-slate-900 uppercase tracking-tighter leading-none">Form 3825: Expert Drafting Guide</h2>
                            <p className="leading-relaxed text-slate-600">
                                Form 3825 is the legal receipt you give LIC. In 2026, LIC still requires a physical signature on this form even for online submissions. 
                            </p>
                            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 my-10">
                                <h5 className="font-black text-amber-900 text-lg mb-4 flex items-center gap-2">
                                    <AlertCircle className="h-6 w-6" />
                                    Revenue Stamp Rule
                                </h5>
                                <p className="text-amber-800 text-sm italic m-0">
                                    "For any maturity amount exceeding ₹5,000, you must affix a <strong>₹1 Revenue Stamp</strong> on the Discharge Voucher and sign across it. Failure to do this is the #1 reason for paper rejection at LIC cash counters."
                                </p>
                            </div>

                            <h2 className="text-3xl font-black mt-24 mb-10 text-slate-900">What if the Policy Bond is Lost?</h2>
                            <p className="text-slate-600">
                                Losing the original bond is common over a 20-year period. You don't lose your money, but the process becomes "Conditional":
                            </p>
                            <ul className="space-y-4 list-none p-0 mt-8">
                                <li className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</div>
                                    <p className="text-sm m-0">Apply for a <strong>Duplicate Policy Bond</strong> first (Form 3756) OR apply for direct maturity with an indemnity.</p>
                                </li>
                                <li className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">2</div>
                                    <p className="text-sm m-0">Execute an <strong>Indemnity Bond on Form 3762</strong>. This must be notarized on a non-judicial stamp paper of ₹100 value.</p>
                                </li>
                                <li className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">3</div>
                                    <p className="text-sm m-0">Submit an <strong>Affidavit</strong> stating you have not assigned the policy to any bank or third party.</p>
                                </li>
                            </ul>

                            <div className="my-20 p-12 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h3 className="text-3xl font-black mb-6">Maturity vs Survival Benefit</h3>
                                <div className="space-y-6">
                                    <p className="text-slate-400 text-lg">Money-Back policies give you "Survival Benefits" every 4-5 years. These are paid automatically <strong>if your bank details are updated</strong>. The Maturity Claim is only the final final payment + Bonuses.</p>
                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/10">
                                            <h5 className="font-bold text-primary mb-1">Maturity</h5>
                                            <p className="text-xs text-slate-500 m-0">Paid at end of term. Full Bonus + FAB added.</p>
                                        </div>
                                        <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/10">
                                            <h5 className="font-bold text-primary mb-1">SB (Survival)</h5>
                                            <p className="text-xs text-slate-500 m-0">Periodic payouts. No Bond needed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-black mt-24 mb-10 text-slate-900">Expert Troubleshooting</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 italic uppercase tracking-tighter">My Bank Branch is closed/merged. What to do?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        If your old bank merged (e.g., Syndicate into Canara), your IFSC code has changed. LIC will reject the payout if you use the old IFSC. Use a fresh "NEFT Mandate" with the updated IFSC code and a new cancelled cheque to ensure credit.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 italic uppercase tracking-tighter">Can a nominee collect the maturity amount?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        No. Maturity amount is always paid to the <strong>Policyholder</strong> (Life Assured) if they are alive. A nominee only collects in the event of death. 
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 italic uppercase tracking-tighter">What is FAB (Final Additional Bonus)?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        FAB is a one-time loyalty bonus paid only at maturity for long-term policies (typically 15+ years). This amount is often significant (up to 10% of total payout) and is calculated based on the policy term and sum assured.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Advisor Section */}
                        <div className="my-16 p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] relative overflow-hidden">
                            <h4 className="text-blue-900 font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Branch Liaison Service
                            </h4>
                            <p className="text-blue-800 mb-8 font-medium italic">
                                "Don't visit the LIC office 5 times. Our advisors deliver your documents directly to the Higher Grade Assistant (HGA) at the branch and get your acknowledgement receipt on the same day."
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-6 py-2 bg-white rounded-xl border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors shadow-sm">Bangalore (Jalahalli/JC Road)</Link>
                                <Link href="/locations/mumbai" className="px-6 py-2 bg-white rounded-xl border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors shadow-sm">Mumbai</Link>
                                <Link href="/locations/hyderabad" className="px-6 py-2 bg-white rounded-xl border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors shadow-sm">Hyderabad</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 p-12 bg-primary rounded-[4rem] text-white text-center">
                            <h3 className="text-4xl font-black mb-4">Cash in, Stress out.</h3>
                            <p className="text-primary-foreground/80 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                                Our veteran advisory team handles over 500 maturity claims every month. Get your documents audited by experts before submission.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="h-16 px-10 text-xl font-black bg-slate-900 hover:bg-slate-800 flex items-center gap-2">
                                    <Phone className="h-6 w-6" />
                                    Book Home Pickup
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-black border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Form Audit</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                                <h3 className="text-2xl font-black mb-2">Claim Assist</h3>
                                <p className="text-sm text-slate-400 mb-8 pb-4 border-b border-white/10">Unsure of your maturity amount? Get a current bonus and FAB calculation from our experts.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
                                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-tighter text-xs">
                                    <Calculator className="h-4 w-4 text-primary" />
                                    Bonus Calculator
                                </h4>
                                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                                    "Maturity is $Sum Assured + Accrued Bonus + FAB$. If you took your policy in 1999 or earlier, your FAB alone could be over ₹2 Lakhs per ₹10 Lakh sum assured. Don't leave money on the table."
                                </p>
                                <Button variant="link" className="p-0 h-auto font-black text-primary text-xs flex items-center gap-1 group">
                                    Calculate My Bonus <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <div className="p-8 bg-green-50 rounded-[3rem] border border-green-100 shadow-sm relative overflow-hidden">
                                <div className="absolute -right-4 -bottom-4 opacity-5">
                                    <PiggyBank className="h-32 w-32" />
                                </div>
                                <h4 className="text-lg font-black text-green-900 mb-2">Tax Free?</h4>
                                <p className="text-xs text-green-800 leading-relaxed font-bold">
                                    Maturity amounts for policies where the annual premium is less than 10% of Sum Assured are 100% Tax-Free under Section 10(10D).
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Structured Data (FAQ Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What documents are needed for LIC maturity claim 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The mandatory documents are: Original Policy Bond, Discharge Voucher (Form 3825) with revenue stamp, NEFT Mandate Form with a printed cancelled cheque, and KYC (Aadhar/PAN) copies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What can I do if I lost my LIC policy bond?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "If lost, you can still claim maturity by submitting an Indemnity Bond on Form 3762 along with a notarized affidavit. You do not always need to get a duplicate bond first if the maturity is imminent."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is LIC Form 3825 mandatory for maturity?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Form 3825 is the Discharge Voucher which acts as a legal receipt for LIC. It must be manually signed and stamped for any amount above ₹5,000."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
