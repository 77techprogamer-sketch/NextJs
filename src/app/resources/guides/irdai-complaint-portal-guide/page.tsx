import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, Scale, ShieldCheck, HeartPulse, Info, ArrowRight, Gavel, MapPin, Search, Mail, MessageSquare, Landmark, LifeBuoy } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'IRDAI Complaint Process 2026 | Bima Bharosa & Ombudsman Portal Guide',
    description: 'Rejected by your insurer? Learn the official IRDAI complaint process (2026). Step-by-step guide to Bima Bharosa registration, GRO escalation, and Insurance Ombudsman appeals.',
    keywords: [
        'irdai complaint portal bima bharosa 2026',
        'how to file complaint against insurance company irdai',
        'bima bharosa igms tracking status',
        'insurance ombudsman complaint procedure',
        'consumer court jurisdiction limits 2026',
        'irdai grievance cell toll free number',
        'rejected insurance claim appeal process'
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
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 uppercase tracking-widest font-black text-[10px]">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-black tracking-normal">Grievance Portal 2026</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter mb-6 shadow-xl">
                                <Scale className="h-3 w-3 text-primary" />
                                Regulatory Authority Guide
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 leading-[0.85] tracking-tighter">
                                Don't Just Argue. <br/> <span className="text-primary italic text-6xl md:text-7xl underline decoration-slate-900 underline-offset-8">Escalate.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-slate-900 pl-8 my-10" id="intro">
                                In 2026, the power dynamic in Indian insurance has shifted. With the rebranding of IGMS to **Bima Bharosa**, IRDAI has mandated a "Tech-First" grievance redressal system that forces every insurance giant to answer to you within 15 days.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-10 bg-slate-50 rounded-[3rem] shadow-sm border border-slate-100 hover:border-primary transition-all group">
                                <Search className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">Bima Bharosa</h4>
                                <p className="text-xs text-slate-500 font-medium">The central nervous system of IRDAI grievance tracking. Every complaint gets a unique, un-deletable token.</p>
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[3rem] shadow-sm border border-slate-100 hover:border-primary transition-all group">
                                <Gavel className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">The Ombudsman</h4>
                                <p className="text-xs text-slate-500 font-medium">A semi-judicial court for claims up to ₹50 Lakhs (New 2026 limit). No lawyers required, Zero fees.</p>
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[3rem] shadow-sm border border-slate-100 hover:border-primary transition-all group">
                                <Landmark className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-xl font-black mb-2 text-slate-900">Consumer Court</h4>
                                <p className="text-xs text-slate-500 font-medium">The final legal hammer for complex liability cases and claims exceeding ₹50 Lakhs.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="step-by-step">
                                1. The 3-Tier Escalation Workflow
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 italic border-l-4 border-primary pl-8 py-2 font-medium">
                                "The biggest mistake policyholders make is jumping to the Ombudsman before writing to the company's GRO. IRDAI will reject your case if you skip the tiers."
                            </p>

                            <div className="space-y-16">
                                <div className="relative pl-12 border-l-2 border-slate-100 py-4">
                                    <div className="absolute -left-[1.25rem] top-0 h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black shadow-lg">1</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Tier 1: Grievance Redressal Officer (GRO)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        You are contractually bound to complain to the insurer first. Every insurance company must have a GRO at their Head Office and every Divisional Office. 
                                        <br/><br/>
                                        <strong>Pro-Tip:</strong> Always mention <em>"Standardized Grievance Redressal Guidelines"</em> in your letter. This signal notifies the GRO that you know the law. They have 15 days to give you a "Final Resolution Letter."
                                    </p>
                                </div>

                                <div className="relative pl-12 border-l-2 border-slate-100 py-4">
                                    <div className="absolute -left-[1.25rem] top-0 h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black shadow-lg">2</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Tier 2: The Bima Bharosa Portal</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        If the GRO rejects your claim or ignores you for 15 days, you enter the <strong>Bima Bharosa Portal</strong>. 
                                        This is IRDAI's "Integrated Grievance Management System (IGMS)." Once you register here, IRDAI officials (not just company staff) can see the logs. If the company exceeds the resolution SLA, it triggers a regulatory red-flag.
                                    </p>
                                    <Button className="mt-4 bg-primary text-white font-black h-12 px-8 uppercase tracking-widest text-[10px]" asChild>
                                        <Link href="https://bimabharosa.irdai.gov.in/" target="_blank">File Portal Complaint</Link>
                                    </Button>
                                </div>

                                <div className="relative pl-12 border-l-2 border-slate-100 py-4">
                                    <div className="absolute -left-[1.25rem] top-0 h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black shadow-lg">3</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Tier 3: The Insurance Ombudsman</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        If the portal complaint doesn't work, you approach the <strong>Bima Lokpal</strong> within your jurisdiction. This is a cost-free, semi-judicial body. The award is binding on the company but not on you. 
                                        <br/><br/>
                                        <strong>Pecuniary Limit:</strong> Can handle claims up to ₹50 Lakhs. 
                                        <strong>Timeline:</strong> Must issue a verdict within 90 days.
                                    </p>
                                </div>
                            </div>

                            <div className="my-20 p-12 bg-slate-900 rounded-[4rem] text-white relative shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-45 group-hover:rotate-0 transition-transform duration-1000">
                                    <LifeBuoy className="h-64 w-64 text-primary" />
                                </div>
                                <h3 className="text-3xl font-black mb-8 text-primary">The 2026 Consumer Court PECUNIARY Limits</h3>
                                <p className="text-slate-400 leading-relaxed font-medium mb-10 text-lg">
                                    If your claim exceeds the Ombudsman's ₹50 Lakh limit, or if you want to sue for mental agony, you must go to the Consumer Commission.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <h5 className="font-black text-primary uppercase text-[10px] tracking-widest mb-4">District Commission</h5>
                                        <p className="text-white font-black text-2xl mb-2">Up to ₹50L</p>
                                        <p className="text-[10px] text-slate-500 font-medium italic">// Consider the 'Value of Services Paid' as the deciding factor.</p>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <h5 className="font-black text-primary uppercase text-[10px] tracking-widest mb-4">State Commission</h5>
                                        <p className="text-white font-black text-2xl mb-2">₹50L — ₹2Cr</p>
                                        <p className="text-[10px] text-slate-500 font-medium italic">// Requires filing at the State HQ (e.g., Bangalore, Mumbai).</p>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group-hover:bg-white/10 transition-colors border-primary/20">
                                        <h5 className="font-black text-primary uppercase text-[10px] tracking-widest mb-4">National (NCDRC)</h5>
                                        <p className="text-white font-black text-2xl mb-2">Above ₹2Cr</p>
                                        <p className="text-[10px] text-slate-500 font-medium italic">// Apex consumer court located in New Delhi.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="gro-template">
                                2. Drafting the GRO Complaint (Mandatory Template)
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Never write a generic email. IRDAI-mandated GROs are looking for specific markers to categorise your grievance. Use this structure:
                            </p>
                            
                            <div className="bg-slate-50 p-12 rounded-[3.5rem] border-2 border-slate-100 shadow-inner mb-20">
                                <div className="font-serif text-slate-700 space-y-4">
                                    <p className="font-black text-slate-900 uppercase text-xs tracking-widest border-b pb-4 mb-8">Official Grievance Format 2026</p>
                                    <p><strong>Subject:</strong> Formal Grievance – Policy No: [Insert No] – Rejection Token: [Insert No]</p>
                                    <p><strong>Preamble:</strong> I am writing regarding the unfair repudiation of my death/medical claim based on [Clause No].</p>
                                    <p><strong>Legal Citation:</strong> I draw your attention to <strong>Section 45 of the Insurance Act</strong> (or IRDAI Circular 2019/20 for health) which prohibits rejection on these specific grounds.</p>
                                    <p><strong>Resolution Required:</strong> Full settlement of the claim amount (₹[Amount]) along with penal interest of 2% above bank rate as per IRDAI SLA.</p>
                                    <p><strong>Closing:</strong> If no resolution is provided within 15 days, I will escalate this to Bima Bharosa and the Insurance Ombudsman.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 pb-4 border-b tracking-tighter">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">How long does a Bima Bharosa complaint take to resolve?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        Once a token is generated, the insurance company is legally mandated to close the grievance within <strong>15 working days</strong>. If they don't, the system automatically marks it as "SLA Violated," which can lead to IRDAI fines for the company.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">Can I go to the Ombudsman if my claim is ₹60 Lakhs?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        No. The current pecuniary jurisdiction of the Insurance Ombudsman (Bima Lokpal) is capped at <strong>₹50 Lakhs</strong> (Increased from ₹30L in 2026 reforms). For larger claims, you must proceed directly to the State Consumer Commission.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">What is the IRDAI Grievance Toll-Free Number?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium text-primary font-black">
                                        You can reach the IRDAI Grievance Call Centre (IGCC) at: <br/> 155255 or 1800 4254 732 <br/>
                                        <span className="text-slate-500 font-medium text-sm">(Available 8 AM to 8 PM, all days including Sundays)</span>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-black py-10 text-slate-800 hover:text-primary transition-colors text-2xl">Do I need a lawyer for the Ombudsman hearing?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-10 text-xl font-medium">
                                        Absolutely NOT. In fact, the Ombudsman process is designed to be <strong>Non-Legalistic</strong>. They prefer the policyholder/nominee to speak directly. Most hearings in 2026 are conducted via Video Conference for your convenience.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* City Liaison Banner */}
                        <div className="my-24 p-12 bg-blue-50 border-2 border-blue-100 rounded-[4rem] relative overflow-hidden group shadow-xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <Landmark className="h-48 w-48 text-blue-900" />
                            </div>
                            <h4 className="text-blue-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-primary" />
                                On-Ground Ombudsman Liaison
                            </h4>
                            <p className="text-blue-800 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                Filing is one thing; winning is another. Our veterans (former LIC managers and legal experts) help you draft the <strong>Annexure VI-A</strong> for the Ombudsman to ensure your case is bulletproof.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-8 py-3 bg-white rounded-2xl border-2 border-blue-200 text-sm font-black text-blue-900 hover:border-primary hover:text-primary transition-all shadow-sm">Bangalore (Jalahalli Office Support)</Link>
                                <Link href="/locations/mumbai" className="px-8 py-3 bg-white rounded-2xl border-2 border-blue-200 text-sm font-black text-blue-900 hover:border-primary hover:text-primary transition-all shadow-sm">Mumbai (Santacruz Office Liaison)</Link>
                                <Link href="/locations/delhi" className="px-8 py-3 bg-white rounded-2xl border-2 border-blue-200 text-sm font-black text-blue-900 hover:border-primary hover:text-primary transition-all shadow-sm">Delhi Support</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative group overflow-hidden shadow-3xl">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mt-60 -mr-60 group-hover:bg-primary/40 transition-all duration-700"></div>
                            <h3 className="text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter">Your Voice isn't <br/> <span className="text-primary italic underline decoration-white decoration-2 underline-offset-12">Just a Ticket Number.</span></h3>
                            <p className="text-slate-400 mb-16 text-2xl font-medium max-w-2xl leading-relaxed text-balance">
                                We've reversed illegal rejections by representing policyholders at the highest levels of IRDAI and the Ombudsman. 
                                <br/><span className="text-white mt-8 block italic font-serif">Risk-Free Case Audit: You don't pay us a rupee unless your claim is awarded.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10 text-slate-900" />
                                    Recover My Claim
                                </Button>
                                <Button variant="outline" size="lg" className="h-24 px-16 text-3xl font-black border-white/20 text-white hover:bg-white/10 rounded-[2.5rem]" asChild>
                                    <Link href="/contact">Free Legal Call</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-3xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Rejection Check</h3>
                                <p className="text-sm text-slate-500 mb-10 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Instant Regulatory Audit</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <MessageSquare className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none tracking-tighter">The Appeal <br/>Form Set (2026)</h4>
                                <p className="text-sm opacity-90 mb-12 leading-relaxed font-bold tracking-tight">Download the IRDAI Bima Bharosa step-guide, GRO Letter Templates, and the 2026 Ombudsman jurisdiction list.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-20 rounded-[2.5rem] uppercase tracking-[0.2em] text-[10px] shadow-2xl">Download Package</Button>
                            </div>

                            <div className="p-10 bg-slate-900 text-white rounded-[3.5rem] border border-slate-800 shadow-xl group">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-tighter text-xs">
                                    <Mail className="h-4 w-4" />
                                    Direct IRDAI Email
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium group-hover:text-slate-300 transition-colors">
                                    "If you have a Bima Bharosa token and its status hasn't changed in 12 days, email <span className="text-white font-bold underline">complaints@irdai.gov.in</span> with the subject line 'TIER 2 ESCALATION - TOKEN NO XXX'. This triggers a manual investigation by the IRDAI."
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
                                "name": "What is the official IRDAI complaint portal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The official IRDAI grievance portal is called 'Bima Bharosa' (formerly IGMS), accessible at bimabharosa.irdai.gov.in. It is the centralized system to lodge and track complaints against all insurance companies in India."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How to file a claim on Bima Bharosa 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "1. Visit the portal and create a profile. 2. Register your grievance citing the reference number of your failed complaint to the insurer's GRO. 3. Upload the rejection letter and policy document. 4. Track the real-time status via the unique token ID."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the consumer court pecuniary limits in 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For 2026: District Commission handles up to ₹50 Lakhs. State Commission handles cases from ₹50 Lakhs to ₹2 Crores. National Commission (NCDRC) handles complex cases above ₹2 Crores."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I approach the Ombudsman directly?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. You must first file a formal written complaint with the insurance company's GRO. If you don't receive a response within 30 days, or are unsatisfied with the final rejection letter, you can approach the Ombudsman within one year."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
