import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, FileText, ClipboardList, Wallet, Landmark, AlertCircle, ArrowRight, ShieldCheck, Download, CreditCard, Ban, HelpingHand, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Maturity Claim Documents 2026 | Complete Form & TDS Guide',
    description: 'Claim your money easily! Complete checklist for LIC maturity claim documents in 2026. Guide for Form 3825, NEFT 5806, Lost Policy Bond, and TDS Section 194DA rules.',
    keywords: [
        'lic maturity claim documents checklist 2026',
        'lic discharge form 3825 fill up guide',
        'lic neft mandate form 5806 download',
        'lost lic policy bond maturity process',
        'tds on lic maturity section 194da 2026',
        'how to claim lic maturity online',
        'lic indemnity bond for lost policy bond'
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
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 uppercase tracking-widest font-bold text-[10px]">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-black tracking-normal">Maturity Claims 2026</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-6 border border-green-200">
                                <Wallet className="h-3 w-3" />
                                Settlement Authority
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 leading-[0.85] tracking-tighter">
                                Claim What is <br/> <span className="text-primary italic">Rightfully Yours.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-primary pl-8 my-10" id="intro">
                                Maturity is the reward for years of financial discipline. In 2026, LIC has simplified the payout process, but one missing form or an incorrect <strong>TDS declaration</strong> can delay your funds by months. This is your definitive checklist.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <FileText className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">Form 3825</h4>
                                <p className="text-xs text-slate-400 font-medium">The mandatory Discharge Form. Without this, LIC cannot legally release your maturity proceeds.</p>
                            </div>
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <Landmark className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">NEFT 5806</h4>
                                <p className="text-xs text-slate-400 font-medium">Direct credit mandate. Payouts via cheque are historical; NEFT is 2026 mandatory standard.</p>
                            </div>
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <Ban className="h-12 w-12 text-red-500 mb-8" />
                                <h4 className="text-2xl font-black mb-2">TDS 194DA</h4>
                                <p className="text-xs text-slate-400 font-medium">5% tax on 'Income Component' if aggregate maturity exceeds ₹1 Lakh in a year.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="core-documents">
                                1. Mandatory Document Checklist
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 border-b pb-6 italic">
                                "Submit these at least 30 days before the maturity date to ensure credit on the exact due date."
                            </p>

                            <div className="space-y-12">
                                <div className="flex gap-8 group">
                                    <div className="h-16 w-16 rounded-3xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary transition-colors">
                                        <ClipboardList className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Original Policy Bond</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">The most critical document. If you've lost it, you'll need to submit an <strong>Indemnity Bond on Stamp Paper</strong> (Form 3762). LIC will not process maturity on a photocopied bond.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="h-16 w-16 rounded-3xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary transition-colors">
                                        <Download className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Discharge Form (Form 3825)</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">This is your receipt of acceptance. You must sign this in front of a witness. If your address has changed, this is where you update your new details for future bonuses.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="h-16 w-16 rounded-3xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary transition-colors">
                                        <CreditCard className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">NEFT Mandate & KYC</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">Duly filled <strong>Form 5806</strong> with a cancelled cheque where your name is printed. Attach self-attested copies of your <strong>Aadhar Card and PAN Card</strong>.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-20 p-12 bg-amber-50 rounded-[4rem] border-2 border-amber-100 relative shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-110 transition-transform">
                                    <AlertCircle className="h-40 w-40 text-amber-900" />
                                </div>
                                <h3 className="text-3xl font-black mb-8 text-amber-900 flex items-center gap-4">
                                    <Ban className="h-8 w-8 text-red-600" />
                                    TDS Warning: Section 194DA
                                </h3>
                                <p className="text-amber-800 leading-relaxed font-medium mb-10 text-lg">
                                    As of 2026, if your policy is NOT exempt under Section 10(10D) (e.g., if the annual premium exceeded 10% of sum assured), LIC is legally bound to deduct TDS.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-8 bg-white rounded-3xl border border-amber-200">
                                        <h5 className="font-black text-slate-400 uppercase text-[10px] tracking-widest mb-4">With Valid PAN</h5>
                                        <p className="text-slate-900 font-black text-4xl mb-2">5% <span className="text-xs text-slate-400">Tax</span></p>
                                        <p className="text-xs text-slate-500 font-medium italic">Applied only on the 'Income Component' (Maturity Value - Total Premiums).</p>
                                    </div>
                                    <div className="p-8 bg-red-600 rounded-3xl shadow-xl border border-red-700">
                                        <h5 className="font-black text-white/50 uppercase text-[10px] tracking-widest mb-4">Without Valid PAN</h5>
                                        <p className="text-white font-black text-4xl mb-2">20% <span className="text-xs text-white/50">Tax</span></p>
                                        <p className="text-xs text-white/80 font-medium italic">Avoid this massive loss by updating your PAN at the branch today.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight flex items-center gap-4" id="lost-bond">
                                <HelpingHand className="h-10 w-10 text-primary" />
                                2. Solving the "Lost Policy Bond" Crisis
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Misplacing an LIC bond is common for 20-year policies. In 2026, you don't need to file an FIR unless the Sum Assured is very high.
                                <br/><br/>
                                <strong>Step 1:</strong> Request a "Duplicate Payout Quotation" from your servicing branch.
                                <br/>
                                <strong>Step 2:</strong> Execute an <strong>Indemnity Bond (Form 3762)</strong> on non-judicial stamp paper. The value of the stamp paper varies by state (usually ₹100 to ₹500).
                                <br/>
                                <strong>Step 3:</strong> Provide a Questionnaire (Annexure 1) explaining why the bond is missing.
                            </p>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 pb-4 border-b">Step-by-Step Submission (2026)</h2>
                            
                            <div className="space-y-12">
                                <div className="relative pl-20">
                                    <div className="absolute left-0 top-0 h-14 w-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">1</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">The Intimation Letter</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">LIC sends a letter 60 days before maturity. If you didn't receive it, visit the branch with your policy number to get a copy of the "Discharge Form."</p>
                                </div>
                                <div className="relative pl-20">
                                    <div className="absolute left-0 top-0 h-14 w-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">2</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Signing Discharge (Form 3825)</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Fill all fields. If the policy was assigned to a bank for a home loan, ensure the bank issues a <strong>Reassignment Deed</strong> or NOC first.</p>
                                </div>
                                <div className="relative pl-20">
                                    <div className="absolute left-0 top-0 h-14 w-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">3</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Branch or Online Submission</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">You can now submit maturity documents at <strong>any LIC Branch</strong> (not just the servicing one) thanks to "All India Portability." Alternatively, use the LIC Customer Portal if your sum assured is under ₹10 Lakhs.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight">Expert FAQs (Maturity 2026)</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">What is the timeline for maturity payout?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-lg font-medium">
                                        LIC's official goal is to credit the amount on the <strong>Due Date itself</strong>. However, if documents are submitted late, it typically takes 7-10 working days from the date of submission. If it takes longer than 15 days, you are entitled to penal interest.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">Is Form 15G/15H required for LIC Maturity?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-lg font-medium">
                                        Yes! If your maturity proceeds are taxable under Section 194DA and your total income is below the taxable limit, you must submit <strong>Form 15G (for under 60) or 15H (for over 60)</strong> along with your discharge form to skip TDS.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">What is Form 3510 (Statement of Age)?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-lg font-medium">
                                        If you didn't provide a birth certificate or 10th marksheet when you took the policy 20 years ago (known as 'Age Not Admitted'), LIC will ask for <strong>Form 3510</strong>. This verifies your age to ensure the premium you paid match your actual age risk.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">What happens to accrued bonuses on maturity?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-lg font-medium">
                                        The maturity payout is a combination of: <strong>Sum Assured + Accrued Reversionary Bonus + Final Additional Bonus (FAB)</strong>. LIC only declares the FAB in the final year of the policy, so your actual payout is often 20-30% higher than your last known bonus statement.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[4rem] my-24 relative overflow-hidden group shadow-xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <Landmark className="h-48 w-48 text-slate-900" />
                            </div>
                            <h4 className="text-slate-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-primary" />
                                Doorstep Maturity Assistance
                            </h4>
                            <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                Dealing with missing policy bonds or incorrect NEFT mandates is stressful. Our local veterans handle the branch coordination and "Lost Bond" indemnity technicalities for you.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-8 py-3 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">Bangalore (Jalahalli/HSR)</Link>
                                <Link href="/locations/mumbai" className="px-8 py-3 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">Mumbai (Fort/Borivali)</Link>
                                <Link href="/locations/hyderabad" className="px-8 py-3 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">Hyderabad Support</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
                            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -mb-80 -mr-80 group-hover:bg-primary/30 transition-all duration-1000"></div>
                            <h3 className="text-6xl font-black mb-8 leading-none tracking-tighter">Secure Your <br/> <span className="text-primary italic">Financial Win.</span></h3>
                            <p className="text-slate-400 mb-16 text-3xl font-medium max-w-2xl leading-tight">
                                Don't let a "Missing Bond" or a "Tax Deduction" leak your hard-earned wealth. 
                                <br/><span className="text-white mt-8 block italic tracking-tighter decoration-primary underline decoration-4 underline-offset-8 transition-all group-hover:underline-offset-12">Expert Maturity Audit: Instant & Final.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10" />
                                    Claim My Maturity
                                </Button>
                                <Button variant="outline" size="lg" className="h-24 px-16 text-3xl font-black border-white/20 text-white hover:bg-white/10 rounded-3xl" asChild>
                                    <Link href="/contact">Free Form Review</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Maturity Check</h3>
                                <p className="text-sm text-slate-500 mb-12 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Instant Payout Audit</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <Download className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none">The Complete <br/>Form Set (2026)</h4>
                                <p className="text-sm opacity-80 mb-12 leading-relaxed font-bold tracking-tight">Download Form 3825, NEFT 5806, and the Lost Bond Indemnity Template in one verified 2026 pack.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-20 rounded-[2.5rem] uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20">Download Pack</Button>
                            </div>

                            <div className="p-12 bg-slate-900 text-white rounded-[4rem] border border-slate-800 shadow-xl group">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-3 uppercase tracking-tighter text-xs">
                                    <AlertCircle className="h-5 w-5" />
                                    The 30-Day Rule
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium group-hover:text-slate-300 transition-colors">
                                    "If you don't submit your documents at least 30 days before the maturity date, LIC typically defaults the payout to their next batch (7-14 days delay). Start the process at the 22nd year, 10th month mark."
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
                                "name": "What are the main documents for LIC maturity claim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The mandatory documents are: 1. Discharge Form (Form 3825), 2. Original Policy Bond, 3. NEFT Mandate (Form 5806) with a cancelled cheque, and 4. self-attested copies of PAN and Aadhaar Card."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How to claim LIC maturity if the policy bond is lost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "If the bond is lost, you must submit an Indemnity Bond on non-judicial stamp paper (Form 3762) and a Questionnaire regarding the loss. In 2026, an FIR is usually not required for sum assured under ₹5 Lakhs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is TDS deducted on LIC maturity in 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "TDS under Section 194DA is 5% on the income portion if the payout is not exempt under Section 10(10D). If a valid PAN is not provided, the TDS rate increases to 20%."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I submit LIC maturity documents online?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, for policies with sum assured up to ₹10 Lakhs, LIC allows digital submission of scanned documents via the LIC Customer Portal. For higher amounts, physical submission at a branch is required."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
