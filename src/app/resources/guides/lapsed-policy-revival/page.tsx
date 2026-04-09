import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, History, AlertCircle, Calculator, FileText, ArrowRight, Activity, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'How to Revive Lapsed LIC Policy in 2026 | Late Fee & Concessions',
    description: 'Avoid policy loss! Learn the 4 ways to revive your lapsed LIC policy in 2026. Check late fee concessions, medical (DGH) requirements, and the 5-year revival rule.',
    keywords: [
        'lic policy revival process 2026',
        'lic special revival scheme dates 2026',
        'late fee concession lic policy',
        'revive lic policy after 5 years',
        'lic dgh form 680 download',
        'lic policy status check online'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lapsed-policy-revival',
    }
};

export default function LapsedPolicyRevivalGuide() {
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
                            <span className="text-slate-900 font-medium">LIC Policy Revival</span>
                        </nav>

                        <header className="mb-12 text-center md:text-left">
                            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                                2026 Revival Campaign Live
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-none">
                                Don't Let Your <span className="text-primary italic">Security</span> Lapse.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Millions of LIC policies are lapsed due to missed premiums. In 2026, the rules for revival have changed—offering bigger concessions but stricter medical gates. This guide shows you how to bring your policy back to life.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl">
                                <History className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">5 Year Limit</h4>
                                <p className="text-xs text-slate-400">Policies can usually only be revived within 5 years of the first unpaid premium.</p>
                            </div>
                            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl">
                                <Calculator className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Late Fees</h4>
                                <p className="text-xs text-slate-400">Standard interest is 9% p.a. Concessions up to 30% are available in Special Schemes.</p>
                            </div>
                            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl">
                                <Activity className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">DGH Form</h4>
                                <p className="text-xs text-slate-400">Declaration of Good Health is mandatory for all revivals past 6 months.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-black mt-16 mb-8 text-slate-900 border-b-4 border-primary w-fit">4 Ways to Revive (The 2026 Toolkit)</h2>
                            
                            <div className="space-y-12 mt-10">
                                <section>
                                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-md bg-primary text-white flex items-center justify-center text-xs">1</div>
                                        Ordinary Revival
                                    </h3>
                                    <p className="text-slate-600 pl-8">
                                        Used when you just want to pay the arrears + interest. If you are reviving within 6 months of the due date, no medical report is needed. Most common for 1-2 missed premiums.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-md bg-primary text-white flex items-center justify-center text-xs">2</div>
                                        Special Revival Scheme (SRS)
                                    </h3>
                                    <p className="text-slate-600 pl-8">
                                        LIC shifts the <strong>Date of Commencement (DOC)</strong> forward. This means you don't pay all old premiums, but your "Years to Maturity" increases. Best if you have missed 2+ years and can't pay the bulk arrears.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-md bg-primary text-white flex items-center justify-center text-xs">3</div>
                                        Installment Revival
                                    </h3>
                                    <p className="text-slate-600 pl-8">
                                        For policies with high arrears. LIC allows you to pay the total amount in 6 monthly or quarterly installments. Great for cash-flow management.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-md bg-primary text-white flex items-center justify-center text-xs">4</div>
                                        Loan-cum-Revival
                                    </h3>
                                    <p className="text-slate-600 pl-8">
                                        If your policy has "Surrender Value," you can take a loan <em>against</em> that value and use the loan amount to pay the revival premiums. You effectively revive the policy with Zero out-of-pocket cost.
                                    </p>
                                </section>
                            </div>

                            <div className="my-16 p-10 bg-blue-50 rounded-[3rem] border border-blue-100">
                                <h3 className="text-2xl font-black mb-6 text-blue-900">2026 Late Fee Concession Scale</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between p-4 bg-white rounded-xl shadow-sm">
                                        <span className="font-bold text-slate-700">Total Premium up to ₹1 Lakh</span>
                                        <span className="text-primary font-black">20% Off (Max ₹2,000)</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-white rounded-xl shadow-sm">
                                        <span className="font-bold text-slate-700">Premium ₹1 Lakh to ₹3 Lakhs</span>
                                        <span className="text-primary font-black">25% Off (Max ₹2,500)</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-white rounded-xl shadow-sm">
                                        <span className="font-bold text-slate-700">Premium Above ₹3 Lakhs</span>
                                        <span className="text-primary font-black">30% Off (Max ₹3,000)</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-blue-800 mt-4 italic">*Concessions only applicable during "Special Revival Campaigns" announced by LIC periodcially.</p>
                            </div>

                            <h2 className="text-3xl font-black mt-20 mb-10 text-slate-900 leading-tight">Revival after 5 Years? The "Hard Limit"</h2>
                            <p className="leading-relaxed text-slate-600">
                                As per current IRDAI guidelines, a policy that has been in a lapsed state for more than <strong>5 consecutive years</strong> cannot be revived. At this point, the policy is considered "Terminated" or "Paid-up."
                            </p>
                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-8">
                                <h5 className="font-bold text-amber-900 m-0 text-sm">Vital Tip:</h5>
                                <p className="text-amber-800 text-xs m-0 mt-2">
                                    If your policy is past the 5-year mark, check if it has "Paid-up Value." You may still be entitled to a reduced death benefit or a maturity amount without paying any further premiums.
                                </p>
                            </div>

                            <h2 className="text-3xl font-black mt-20 mb-8 text-slate-900">Common Revival FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800">What is a DGH (Declaration of Good Health)?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        It is a form where you declare that your health status hasn't changed since the policy was taken. If the sum assured is high or you are older, LIC may ask for a full medical check-up (SMR-Special Medical Report) instead of just a DGH.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800">Can I revive my policy at any LIC branch?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Yes! You can now pay revival premiums at any satellite office or branch in India. However, the <strong>"Revival Quotation"</strong> and processing of the medical reports are best handled at your local home branch.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800">Will my bonuses be added during the lapsed period?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Yes. Once revived, your policy becomes "In-Force" and all bonuses declared during the lapsed period are credited back to your account. This is the biggest benefit of revival over buying a new policy.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Advisor Section */}
                        <div className="my-16 p-8 border-2 border-slate-900 rounded-[2rem] bg-slate-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <MapPin className="h-32 w-32" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Doorstep Revival Assistance</h3>
                            <p className="text-slate-600 mb-8">
                                Don't wait in long queues at LIC branches. Our advisors collect your DGH forms and documents from your home and get your policy revived in 48 hours.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-4 py-2 bg-white rounded-lg border text-sm font-bold text-slate-900 hover:text-primary transition-colors">Bangalore (HSR/Jalahalli)</Link>
                                <Link href="/locations/mumbai" className="px-4 py-2 bg-white rounded-lg border text-sm font-bold text-slate-900 hover:text-primary transition-colors">Mumbai Support</Link>
                                <Link href="/locations/hyderabad" className="px-4 py-2 bg-white rounded-lg border text-sm font-bold text-slate-900 hover:text-primary transition-colors">Hyderabad Expert</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white">
                            <h3 className="text-3xl font-black mb-4">Revive & Secure.</h3>
                            <p className="text-primary-foreground/80 mb-10 text-lg max-w-2xl leading-relaxed">
                                A lapsed policy is a lost legacy. Let us calculate your exact revival cost today—including all applicable 2026 concessions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="h-16 px-8 text-xl font-black bg-slate-900 hover:bg-slate-800 flex items-center gap-2">
                                    <Phone className="h-6 w-6" />
                                    Get Revival Quote
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 px-8 text-xl font-black border-white/40 text-white hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                                <h3 className="text-2xl font-black mb-2">Check Status</h3>
                                <p className="text-sm text-slate-400 mb-8">Enter your policy number to see latest health & revival requirements.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                                <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5" />
                                    Revival Bonus
                                </h4>
                                <p className="text-green-800 text-sm leading-relaxed">
                                    "When you revive, you don't just get coverage back. You get all the accrued bonuses for the years you didn't pay. It's often cheaper than buying a fresh policy at a higher entry age."
                                </p>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                                <FileText className="h-10 w-10 mb-4 text-slate-300" />
                                <h4 className="text-xl font-bold mb-2 text-slate-900 leading-tight">Revival Form Set</h4>
                                <p className="text-sm text-slate-500 mb-6 uppercase font-bold tracking-tighter">Verified 2026 Checklist</p>
                                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                                    <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Form No. 680 (DGH)</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Self-attested PAN/Aadhar</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Arrears Premium Cheque</li>
                                </ul>
                                <Button variant="outline" className="w-full font-bold border-slate-300">Request Documents</Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is the 5 year rule for LIC revival?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "LIC policies can generally be revived within 5 years of the first unpaid premium. Beyond this period, the policy is usually terminated under IRDAI guidelines."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does LIC give late fee concessions 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, LIC launches periodic Special Revival Campaigns offering 20-30% late fee concessions (capped at ₹3,000) for eligible policyholders."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is Form 680 in LIC?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Form No. 680 is the Declaration of Good Health (DGH) required for ordinary revival of a lapsed policy to prove the policyholder's health status has not changed."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
