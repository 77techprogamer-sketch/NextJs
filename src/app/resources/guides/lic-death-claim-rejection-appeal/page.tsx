import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, FileText, Scale, ArrowRight, Gavel, HelpCircle, Mail, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Death Claim Rejected? Complete Appeal & Ombudsman Guide (2026)',
    description: 'Was your LIC death claim rejected? Learn how to use Section 45 of the Insurance Act to fight back. Step-by-step guide to GRO, Bima Bharosa, and Insurance Ombudsman appeals.',
    keywords: [
        'lic death claim rejected help',
        'section 45 insurance act 3 years rule',
        'lic premature death claim rules',
        'how to file complaint against lic for rejected claim',
        'insurance ombudsman complaint format',
        'lic claim recovery services'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lic-death-claim-rejection-appeal',
    }
};

export default function LICDeathClaimAppealGuide() {
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
                            <span className="text-slate-900 font-medium">LIC Death Claim Appeal</span>
                        </nav>

                        <header className="mb-12">
                            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-none tracking-tight">
                                LIC Death Claim <span className="text-red-600">Rejected?</span> The Definitive Appeal Guide (2026)
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                                A death claim rejection is not a death sentence for your finances. In India, policyholders have powerful legal protections—specifically <strong>Section 45 of the Insurance Act</strong>—that can force LIC to honor its commitments.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Expert Authority Guide</div>
                                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Verified April 2026</div>
                            </div>
                        </header>

                        <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-100 mb-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <AlertTriangle className="h-24 w-24 text-red-600" />
                            </div>
                            <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6" />
                                Did you know?
                            </h4>
                            <p className="text-red-800 leading-relaxed font-medium">
                                Under Section 45 of the Insurance Act 1938, a life insurance policy <strong>cannot be called into question</strong> by an insurer on any ground whatsoever after the expiry of <strong>3 years</strong> from the date of the policy issuance or commencement of risk.
                            </p>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-black mt-16 mb-8 text-slate-900">1. Understanding "Early" vs "Non-Early" Claims</h2>
                            <p>
                                The ground for rejection usually depends on when the life assured passed away relative to the policy purchase date.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="text-red-700 font-bold mb-3 mt-0">Early Death Claim</h3>
                                    <p className="text-sm">Death occurs within <strong>3 years</strong> of policy issuance. LIC will perform a "Strict Investigation" to check for non-disclosure of medical facts (Smoking, Diabetes, Heart conditions).</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <h3 className="text-green-800 font-bold mb-3 mt-0">Non-Early Death Claim</h3>
                                    <p className="text-sm">Death occurs after <strong>3 years</strong>. Rejections here are extremely rare and legally difficult for LIC, as Section 45 provides "Indisputability."</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-black mt-16 mb-8 text-slate-900">2. Top 3 Technical Grounds for Appeal</h2>
                            <p>
                                Most rejections fall into "Non-Disclosure of Material Facts." If your claim was rejected on this ground, you can fight back if:
                            </p>
                            <ul className="space-y-6 list-none p-0">
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">A</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 m-0">The fact was not "Material"</h4>
                                        <p className="text-slate-600 text-sm">Hiding a minor illness (like common flu or a tooth extraction) is not a "Material Fact" that would affect life expectancy. LIC cannot reject based on trivial omissions.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">B</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 m-0">No Link to Cause of Death</h4>
                                        <p className="text-slate-600 text-sm">If a policyholder didn't disclose a knee surgery but died of a sudden Heart Attack, the non-disclosure had no impact on the cause of death.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">C</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 m-0">Fraud vs. Innocent Mistake</h4>
                                        <p className="text-slate-600 text-sm">Insurance companies must prove that the suppression was <strong>Fraudulent</strong> (deliberate intent to deceive). An "unintentional" oversight in the form is not ground for rejection after 3 years.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-3xl font-black mt-20 mb-10 text-slate-900">3. The 3-Tier Official Appeal Process</h2>
                            
                            {/* Tier 1 */}
                            <div className="mb-12 border-l-4 border-primary pl-8 py-2">
                                <h3 className="text-2xl font-bold mb-4">Tier 1: Grievance Redressal Officer (GRO)</h3>
                                <p>Every LIC Division has a mandated GRO. Do not just talk to your agent; file a formal written appeal.</p>
                                <div className="bg-slate-900 text-white p-6 rounded-2xl my-6">
                                    <h5 className="text-primary font-bold mb-2">Technical Tip:</h5>
                                    <p className="text-sm m-0 italic">"Ensure your letter mentions the specific Claim No. and clearly states why the ground for rejection is factually or legally incorrect. LIC is legally mandated to reply within 15 days."</p>
                                </div>
                            </div>

                            {/* Tier 2 */}
                            <div className="mb-12 border-l-4 border-primary pl-8 py-2">
                                <h3 className="text-2xl font-bold mb-4">Tier 2: IRDAI Bima Bharosa Portal</h3>
                                <p>If the GRO fails to resolve or ignores you for 15 days, escalate to <strong>Bima Bharosa</strong> (formerly IGMS). High-level IRDAI officers monitor these complaints, forcing LIC's Central Office to review the case.</p>
                            </div>

                            {/* Tier 3 */}
                            <div className="mb-12 border-l-4 border-primary pl-8 py-2">
                                <h3 className="text-2xl font-bold mb-4">Tier 3: The Insurance Ombudsman</h3>
                                <p>The "Bima Lokpal" or Ombudsman is your most powerful ally. It is a cost-free, semi-judicial body. You don't need a lawyer.</p>
                                <ul className="space-y-2 mt-4 text-sm font-medium">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Valid for claims up to ₹30 Lakhs.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Award is binding on the Insurance Company.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> You can file within 1 year of the first rejection.</li>
                                </ul>
                            </div>

                            <div className="my-16 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                                <h3 className="text-3xl font-black mb-6 text-slate-900">Expert Troubleshooting FAQ</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-800">What happens if LIC says the policy has lapsed?</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                            If a policy has lapsed, LIC is not liable to pay the full Sum Assured. However, check if the policy had acquired "Paid-Up Value." If at least 3 years' premiums were paid, you are entitled to a proportionate amount (Paid-up Value + Bonuses).
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-800">How do I prove a fact wasn't suppressed fraudulently?</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                            Evidence like prescriptions showing the condition was diagnosed *after* the policy was taken, or an affidavit from the primary physician, can be vital. Our advisors help compile this "Medical Timeline" to prove innocence.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-800">Which Ombudsman office should I contact?</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                            You must approach the office within whose jurisdiction your residential address falls. For example, the <strong>Bangalore Ombudsman</strong> covers all of Karnataka. The <strong>Mumbai Ombudsman</strong> covers Maharashtra and Goa. 
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="bg-blue-50 border-2 border-blue-100 p-8 rounded-3xl my-12">
                            <h4 className="text-blue-900 font-black text-xl mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                                <MapPin className="h-5 w-5" />
                                Local Case Specialists
                            </h4>
                            <p className="text-blue-800 mb-6 font-medium">
                                Our veteran advisors specialize in the "Technical Liaison" needed with specific LIC branches and Ombudsman offices.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-6 py-2 bg-white rounded-full border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors">Bangalore (Jalahalli/JC Road)</Link>
                                <Link href="/locations/mumbai" className="px-6 py-2 bg-white rounded-full border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors">Mumbai (Churchgate/Santacruz)</Link>
                                <Link href="/locations/hyderabad" className="px-6 py-2 bg-white rounded-full border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors">Hyderabad (Saifabad)</Link>
                                <Link href="/locations/delhi" className="px-6 py-2 bg-white rounded-full border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 transition-colors">Delhi NCR</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -mb-40 -mr-40"></div>
                            <h3 className="text-3xl font-black mb-4">Fight for your family's rights.</h3>
                            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-2xl text-balance">
                                Don't let a corporate rejection be the final answer. We have recovered over ₹15 Crores in disputed claims for our clients across India. 
                                <strong> No upfront fees for claim audit.</strong>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="h-16 px-8 text-xl font-black bg-primary hover:bg-primary/90 flex items-center gap-2">
                                    <Phone className="h-6 w-6" />
                                    Recover My Claim
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 px-8 text-xl font-black border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Legal Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl">
                                <h3 className="text-2xl font-black mb-2 text-slate-900">Claim Review</h3>
                                <p className="text-sm text-slate-500 mb-8 border-b pb-4">Is your rejection valid? Let our former LIC claim officers audit your rejection letter for free.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100">
                                <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2 italic">
                                    <Scale className="h-5 w-5" />
                                    Legal Reference
                                </h4>
                                <p className="text-amber-800 text-sm leading-relaxed">
                                    "Save your rejection letter (Annexure VI-A) and ensure you have a copy of the original <strong>Proposal Form</strong>. Rejections are often based on misinterpreting what you wrote 10 years ago."
                                </p>
                            </div>

                            <div className="p-8 bg-primary rounded-3xl text-primary-foreground shadow-lg shadow-primary/20">
                                <FileText className="h-10 w-10 mb-4 opacity-50" />
                                <h4 className="text-xl font-bold mb-2 leading-tight">Download Ombudsman Form set</h4>
                                <p className="text-sm opacity-80 mb-6">Get the verified 2026 Annexure forms for your city.</p>
                                <Button className="w-full bg-white text-primary font-bold hover:bg-slate-50">Download Pack</Button>
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
                                "name": "What is Section 45 3 Year Rule in LIC?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Under Section 45 of the Insurance Act, no policy can be questioned after 3 years from its commencement or revival on any ground. This makes claims after 3 years 'Indisputable'."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can LIC reject a claim after 3 years?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Legally, LIC cannot reject a claim after 3 years except in extremely rare cases of proven fraud at the time of purchase. Even then, the burden of proof is entirely on LIC."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the Insurance Ombudsman award binding?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, the Ombudsman award is binding on the insurance company, but not on the policyholder. You can still go to Consumer Court if you're not satisfied."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
