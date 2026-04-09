import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Gavel, Scale, Mail, Globe, MapPin, AlertCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'IRDAI Complaint Process for Insurance Claims 2026 | Bima Bharosa',
    description: 'Rejected insurance claim? Learn the official IRDAI complaint process. Step-by-step guide to Bima Bharosa portal, Ombudsman filings, and insurer grievance redressal.',
    keywords: [
        'irdai complaint process for rejected claim',
        'bima bharosa portal complaint login',
        'how to file insurance ombudsman complaint india',
        'insurance grievance redressal officer contact',
        'insurance ombudsman office address bangalore mumbai delhi',
        'rejected health insurance claim appeal irdai'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/irdai-complaint-portal-guide',
    }
};

export default function IRDAIComplaintGuide() {
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
                            <span className="text-slate-900">IRDAI Complaint Guide</span>
                        </nav>

                        <header className="mb-12">
                            <h1 className="text-4xl md:text-7xl font-black mb-8 text-slate-900 leading-[0.85] tracking-tighter">
                                The Consumer <br/><span className="text-primary italic">Court</span> Alternative.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-primary pl-6 py-2 mt-10">
                                Most policyholders think "Consumer Court" is the only way to fight a rejected claim. In reality, the **Insurance Ombudsman** and **Bima Bharosa** (IRDAI) are faster, cheaper (Zero Cost), and highly effective semijudicial bodies in 2026.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl group hover:shadow-primary/20 transition-all border border-transparent hover:border-primary/50">
                                <Globe className="h-12 w-12 text-primary mb-6" />
                                <h4 className="text-2xl font-black mb-2">Bima Bharosa</h4>
                                <p className="text-sm text-slate-400">The central IRDAI portal for online grievance tracking. Every complaint is tracked by the regulator with real-time escalation.</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl group hover:shadow-primary/20 transition-all border border-transparent hover:border-primary/50">
                                <Scale className="h-12 w-12 text-primary mb-6" />
                                <h4 className="text-2xl font-black mb-2">Ombudsman</h4>
                                <p className="text-sm text-slate-400">The "Bima Lokpal"—a semijudicial authority that can pass awards binding on insurance companies up to ₹30 Lakhs.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-black mb-10 text-slate-900 uppercase tracking-tighter">The 3-Step Escalation Ladder</h2>
                            <p className="text-slate-600 mb-12">To be eligible for an IRDAI or Ombudsman appeal, you <strong>must</strong> follow the legal hierarchy. You cannot jump directly to the regulator.</p>
                            
                            <div className="space-y-16">
                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 h-12 w-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-xl">1</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 mt-0">Insurer Internal Grievance</h3>
                                    <p className="text-slate-600">Write to the <strong>Grievance Redressal Officer (GRO)</strong> of the insurance company. They have <strong>15 days</strong> to resolve your issue. If they reject it or ignore you, go to Step 2.</p>
                                    <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 text-red-900 text-xs mt-4 italic font-bold">
                                        <AlertTriangle className="h-4 w-4 shrink-0" />
                                        Critical: You MUST have a physical/email acknowledgement from the GRO to proceed to the Ombudsman.
                                    </div>
                                </section>

                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 h-12 w-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-xl">2</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 mt-0">Bima Bharosa Escalation</h3>
                                    <p className="text-slate-600">Register the complaint on the <Link href="https://bimabharosa.irdai.gov.in/" className="text-primary font-bold underline" target="_blank" rel="noopener">Bima Bharosa Portal</Link>. This assigns a unique "Token Number" which forces the high-level compliance team of the insurer to re-evaluate the case under regulator visibility.</p>
                                </section>

                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 h-12 w-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-xl">3</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 mt-0">Insurance Ombudsman Filing</h3>
                                    <p className="text-slate-600">If the claim is still rejected, file a formal complaint with the Insurance Ombudsman. This is a one-on-one "hearing" with an expert judge. No lawyers are allowed, ensuring a fair playing field for the common citizen.</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none p-0 text-xs font-bold uppercase tracking-widest text-slate-500">
                                        <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Award Binding on Insurer</li>
                                        <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Zero Filing Cost</li>
                                        <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Up to ₹30 Lakhs Award</li>
                                        <li className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> 6 Months for decision</li>
                                    </ul>
                                </section>
                            </div>

                            <div className="my-20 p-12 bg-blue-50 rounded-[4rem] border-2 border-blue-100">
                                <h3 className="text-3xl font-black mb-10 text-blue-900 leading-[0.9]">Top Ombudsman Jurisdictions 2026</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center uppercase tracking-widest font-bold">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <h5 className="text-[10px] text-slate-400 mb-2">Karnataka</h5>
                                        <span className="text-primary">Bangalore</span>
                                    </div>
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <h5 className="text-[10px] text-slate-400 mb-2">Maharashtra / Goa</h5>
                                        <span className="text-primary">Mumbai</span>
                                    </div>
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <h5 className="text-[10px] text-slate-400 mb-2">Tamil Nadu</h5>
                                        <span className="text-primary">Chennai</span>
                                    </div>
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <h5 className="text-[10px] text-slate-400 mb-2">Delhi / Haryana</h5>
                                        <span className="text-primary">Delhi</span>
                                    </div>
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <h5 className="text-[10px] text-slate-400 mb-2">Telangana / AP</h5>
                                        <span className="text-primary">Hyderabad</span>
                                    </div>
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <h5 className="text-[10px] text-slate-400 mb-2">West Bengal</h5>
                                        <span className="text-primary">Kolkata</span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-black mt-24 mb-10 text-slate-900 leading-tight">Expert FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 uppercase tracking-tighter">Should I involve a lawyer at the Ombudsman?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        No. In fact, Insurance Ombudsman rules explicitly <strong>prohibited</strong> lawyers from representing parties at the hearing. This is to keep the process informal and protect the individual from high corporate legal costs. You can represent yourself or use an expert insurance advisor (not a lawyer).
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 uppercase tracking-tighter">What happens if the company doesn't pay the Award?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        If the award is passed in your favor, the insurer MUST comply and pay within 30 days. If they don't, they are liable to pay interest at a rate that is 2% above the prevailing bank rate for each day of delay. You can escalate this non-payment to the IRDAI.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 uppercase tracking-tighter">Is there a time limit for Ombudsman filing?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Yes. You must approach the Ombudsman within <strong>one year</strong> from the date of the insurer's rejection of your complaint/representation.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="my-16 p-12 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden">
                            <h4 className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-4">Ombudsman Liaison Desk</h4>
                            <p className="text-slate-300 mb-10 font-medium text-lg leading-relaxed border-l-2 border-primary pl-6">
                                We specialize in the "Technical Drafting" of Ombudsman complaints (Annexure VI-A). Presenting the medical facts correctly is the difference between an Award and a Rejection.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="font-bold text-white hover:text-primary transition-colors flex items-center gap-2">Bangalore Support <ArrowRight className="h-4 w-4" /></Link>
                                <Link href="/locations/mumbai" className="font-bold text-white hover:text-primary transition-colors flex items-center gap-2">Mumbai Desk <ArrowRight className="h-4 w-4" /></Link>
                                <Link href="/locations/hyderabad" className="font-bold text-white hover:text-primary transition-colors flex items-center gap-2">Hyderabad Specialist <ArrowRight className="h-4 w-4" /></Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-24 p-12 bg-primary rounded-[4rem] text-white text-center">
                            <h3 className="text-4xl font-black mb-6">Take the first step.</h3>
                            <p className="text-primary-foreground/80 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
                                Our veteran claim officers have a 92% success rate at the Ombudsman. Let us audit your case for free before you file.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="h-16 px-10 text-xl font-black bg-slate-900 hover:bg-slate-800 flex items-center gap-2">
                                    <Phone className="h-6 w-6" />
                                    Recover My Money
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-black border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Case Review</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-100 shadow-2xl relative">
                                <div className="absolute top-0 left-10 h-8 w-1 bg-primary"></div>
                                <h3 className="text-2xl font-black mb-2 text-slate-900">Bima Bharosa</h3>
                                <p className="text-sm text-slate-500 mb-8 pb-4 border-b border-slate-200">Official IRDAI escalation portal. Enter your details to start the online filing process.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-amber-50 rounded-[3rem] border border-amber-100">
                                <h4 className="font-black text-amber-900 mb-4 flex items-center gap-2 uppercase tracking-tighter text-xs">
                                    <AlertCircle className="h-4 w-4 text-amber-600" />
                                    Warning!
                                </h4>
                                <p className="text-amber-800 text-xs leading-relaxed font-bold">
                                    If you file a case in Consumer Court, you CANNOT approach the Ombudsman. The case must not be pending before any court for the Ombudsman to take it up. Choose wisely!
                                </p>
                            </div>

                            <div className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[4rem] text-white border border-white/10 group">
                                <div className="flex items-center gap-4 mb-6">
                                    <Mail className="h-10 w-10 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <h4 className="text-xl font-black leading-tight">Drafting Pack 2026</h4>
                                </div>
                                <p className="text-xs text-slate-400 mb-8 border-l border-white/20 pl-4 italic">"Contains Annexure VI-A, GRO Appeal Form, and Sample Rejection Counter-Argument."</p>
                                <Button variant="secondary" className="w-full h-12 font-black uppercase tracking-widest text-xs group-hover:bg-primary transition-colors">Download Pack</Button>
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
                                "name": "What is Bima Bharosa portal for IRDAI complaints?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Bima Bharosa (formerly IGMS) is the online portal by IRDAI to register and track insurance grievances against all insurers in India. It ensures high-level regulatory monitoring of your compliant."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need a lawyer for the Insurance Ombudsman?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, lawyers are not allowed to represent parties at the Insurance Ombudsman hearing. Policyholders represent themselves or are assisted by experts who are not legal practitioners."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the compensation limit of the Insurance Ombudsman?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The Insurance Ombudsman can award compensation up to ₹30 Lakhs (including interest) per complaint for health, life, and general insurance claims."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
