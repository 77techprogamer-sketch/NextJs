import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle2, Hospital, Activity, Heart, Shield, 
  Stethoscope, Cross, Smartphone, Zap, MapPin, 
  RefreshCw, Award, Search, Info, Star
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'ICICI Lombard iHealth Guide 2026 | Cashless & Restore Benefits',
    description: 'Master ICICI Lombard iHealth health insurance in 2026. Explore the Restore benefit, Cashless Everywhere policy, and wellness reward programs for maximum savings.',
    keywords: [
        'icici lombard ihealth benefits 2026',
        'icici health insurance cashless everywhere network',
        'restore benefit in icici lombard health insurance',
        'icici lombard health shield vs elite',
        'icici lombard takecare app health points',
        'icici health insurance claim process 2026',
        'health insurance for family icici lombard'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/icici-ihealth',
    }
};

export default function IciciIhealthGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal uppercase">ICICI iHealth</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-purple-200">
                                <Shield className="h-3 w-3" />
                                Premium Protection Authority
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 leading-[0.85] tracking-tighter">
                                Health without <br/> <span className="text-primary italic">Boundaries.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-primary pl-8 my-10">
                                In 2026, medical inflation in India is hitting 14-15% annually. <strong>ICICI Lombard iHealth</strong> has evolved to counter this with features like "Cashless Everywhere"—allowing you to get treated in any hospital regardless of their network status. This is the complete 2026 roadmap to utilizing your ICICI health policy.
                            </p>
                        </header>

                        {/* Top Utility Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Hospital className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">6,000+</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Network Hospitals</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Zap className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">99.7%</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">In-house Settlement</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Smartphone className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">4.8 ★</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">TakeCare App Rating</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <RefreshCw className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">∞</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sum Insured Reset</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-20 mb-10 text-slate-900 tracking-tight" id="core-benefits">
                                1. Core Benefits: The iHealth Advantage
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                ICICI Lombard's flagship health product is built on three pillars: <strong>Coverage, Convenience, and Continuity.</strong> Here is what sets it apart in the 2026 market:
                            </p>

                            <div className="space-y-12 my-16">
                                <div className="flex gap-8 group">
                                    <div className="h-20 w-20 rounded-3xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100 group-hover:bg-primary transition-colors duration-500">
                                        <MapPin className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Cashless Everywhere</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">As of 2026, ICICI Lombard has expanded its network. If you choose a non-network hospital, you can still get cashless treatment provided you inform the insurer 48 hours in advance for planned or 24 hours for emergency cases.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="h-20 w-20 rounded-3xl bg-green-50 flex items-center justify-center shrink-0 border border-green-100 group-hover:bg-primary transition-colors duration-500">
                                        <Activity className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Unlimited Reset Benefit</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">If your Sum Insured (SI) is exhausted during a policy year, it automatically resets to 100% for the next hospitalization—even for the SAME illness, which is a significant upgrade from older 2024 terms.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="h-20 w-20 rounded-3xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-primary transition-colors duration-500">
                                        <Award className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Guaranteed NCB</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">Receive a 20% cumulative bonus for every claim-free year, up to a maximum of 100% of your sum insured. This effectively doubles your coverage without increasing your premium.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight" id="variants">
                                2. Choosing Your Variant: Shield vs. Elite
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Not all iHealth plans are created equal. Depending on your lifestyle, you should choose one of these tier-based structures:
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[4rem] shadow-xl hover:border-primary/20 transition-all">
                                    <h5 className="font-black text-slate-400 uppercase text-[10px] tracking-[0.3em] mb-4">The Standard</h5>
                                    <h4 className="text-3xl font-black text-slate-900 mb-6">iHealth Shield</h4>
                                    <ul className="space-y-4 text-sm font-bold text-slate-600 mb-12">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {"₹5L to ₹50L Sum Insured"}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {"Pre/Post Hospitalization (60/90 days)"}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {"Annual Health Checkup Included"}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {"Modern Daycare Procedures Coverage"}</li>
                                    </ul>
                                </div>
                                <div className="p-10 bg-slate-900 text-white border-2 border-primary/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8">
                                        <Star className="h-8 w-8 text-primary fill-primary" />
                                    </div>
                                    <h5 className="font-black text-primary/60 uppercase text-[10px] tracking-[0.3em] mb-4">Premium Tier</h5>
                                    <h4 className="text-3xl font-black mb-6">iHealth Elite</h4>
                                    <ul className="space-y-4 text-sm font-bold text-slate-300 mb-12">
                                        <li className="flex gap-2"><Shield className="h-4 w-4 text-primary" /> ₹50L to ₹1Cr+ Sum Insured</li>
                                        <li className="flex gap-2"><Shield className="h-4 w-4 text-primary" /> Worldwide Coverage for Critical Illness</li>
                                        <li className="flex gap-2"><Shield className="h-4 w-4 text-primary" /> Maternity & OPD Benefits (Optional)</li>
                                        <li className="flex gap-2"><Shield className="h-4 w-4 text-primary" /> Air Ambulance & Personal Accident</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="how-to-claim">
                                3. The 2026 Claim Protocol
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                ICICI Lombard has moved away from physical paperwork. The <strong>TakeCare App</strong> is now your primary claim station.
                            </p>
                            
                            <div className="relative pl-12 border-l-2 border-slate-100 space-y-16 mb-20">
                                <div className="relative">
                                    <div className="absolute -left-[57px] top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-black shadow-xl">1</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Pre-Authorization</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Present your e-card via the app at the hospital counter. The TPA (Third Party Administrator) verifies your identity and policy status instantly.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[57px] top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-black shadow-xl">2</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Claim Intimation</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">SMS 'HEALTHCLAIM' to 575758 or trigger the button in the app. This creates your active tracking number.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[57px] top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-black shadow-xl">3</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Cashless Approval</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">ICICI Lombard aims for a **90-minute approval** for cashless requests. Ensure the hospital billing desk has all your previous KYC details updated.</p>
                                </div>
                            </div>

                            <div className="my-20 p-12 bg-purple-50 rounded-[4.5rem] border-2 border-purple-100 relative shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform">
                                    <Heart className="h-40 w-40 text-purple-900" />
                                </div>
                                <h3 className="text-3xl font-black mb-8 text-purple-900 flex items-center gap-4">
                                    <Smartphone className="h-8 w-8 text-primary" />
                                    Wellness Reward Points
                                </h3>
                                <p className="text-purple-800 leading-relaxed font-medium mb-10 text-lg">
                                    In 2026, you can lower your premium by up to **20%** just by walking. The app tracks your steps and rewards you with points that can be used for O.P.D. consultations or discounted renewals.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-white rounded-3xl text-center shadow-sm">
                                        <h5 className="font-black text-slate-400 uppercase text-[8px] tracking-widest mb-2">Track Steps</h5>
                                        <p className="text-slate-900 font-black text-2xl">5,000+</p>
                                        <p className="text-[10px] text-slate-400 mt-1">Daily Target</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-3xl text-center shadow-sm">
                                        <h5 className="font-black text-slate-400 uppercase text-[8px] tracking-widest mb-2">Consult</h5>
                                        <p className="text-slate-900 font-black text-2xl">Free</p>
                                        <p className="text-[10px] text-slate-400 mt-1">Online Doctors</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-3xl text-center shadow-sm">
                                        <h5 className="font-black text-slate-400 uppercase text-[8px] tracking-widest mb-2">Renew</h5>
                                        <p className="text-slate-900 font-black text-2xl">-20%</p>
                                        <p className="text-[10px] text-slate-400 mt-1">Max Discount</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="exclusions">
                                4. Critical Exclusions (What's NOT covered)
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Avoid claim rejections by understanding the "Standard Exclusions" of the iHealth policy:
                            </p>
                            <ul className="space-y-4 mb-16">
                                <li className="flex gap-3 text-slate-700 font-bold">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                    </div>
                                    Pre-existing Diseases: 3-4 years waiting period depending on the plan.
                                </li>
                                <li className="flex gap-3 text-slate-700 font-bold">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                    </div>
                                    Self-inflicted injuries or suicide attempts.
                                </li>
                                <li className="flex gap-3 text-slate-700 font-bold">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                    </div>
                                    Experimental or unproven treatments.
                                </li>
                            </ul>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight">Expert iHealth FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="faq-1">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Does ICICI Lombard cover robotic surgeries?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Yes, the 2026 iHealth policy includes coverage for robotic surgeries and other advanced treatments (like LASIK if medical necessity is proven), although sub-limits may apply depending on the total sum insured.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-2">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">How does "Tele-Consultation" work?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Through the TakeCare App, you get 24/7 unlimited access to GPs and Specialists. These consultations are usually free for policyholders and don't count towards your claim limit.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-3">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What is the "Room Rent" sub-limit?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Most iHealth Shield and Elite plans (SA ₹10L+) have **No Room Rent Capping**. This means you can choose an Executive Room or Suite if required, without having to pay a proportional deduction on other medical bills.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[4rem] my-24 relative overflow-hidden group shadow-xl">
                            <h4 className="text-slate-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <Heart className="h-6 w-6 text-primary" />
                                Need Claims Advocacy?
                            </h4>
                            <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                Even with "Cashless Everywhere", insurance companies sometimes haggle. Our veterans act as your advocate to ensure ICICI Lombard pays every legitimate rupee of your claim.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">Free Policy Audit</Link>
                                <Link href="/locations/bangalore" className="px-8 py-4 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">Local Search Assistance</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* High Conversion CTA Section */}
                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
                            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] group-hover:bg-primary/30 transition-all duration-1000"></div>
                            <h3 className="text-6xl font-black mb-8 leading-none tracking-tighter">Your Health, <br/> <span className="text-primary italic">Without Limits.</span></h3>
                            <p className="text-slate-400 mb-16 text-3xl font-medium max-w-2xl leading-tight">
                                Because medical bills shouldn't decide the quality of your care.
                                <br/><span className="text-white mt-8 block italic tracking-tighter decoration-primary underline decoration-4 underline-offset-8 transition-all group-hover:underline-offset-12">Expert Setup: iHealth Authority Implementation.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10" />
                                    Get Expert Consultation
                                </Button>
                                <Button variant="outline" size="lg" className="h-24 px-16 text-3xl font-black border-white/20 text-white hover:bg-white/10 rounded-3xl" asChild>
                                    <Link href="/contact">Check Cashless Hospitals</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Health Audit</h3>
                                <p className="text-sm text-slate-500 mb-12 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Instant icici ihealth Quote</p>
                                <QuoteForm insuranceType="health_insurance" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <Search className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none">Cashless Hospital <br/>Network 2026</h4>
                                <p className="text-sm opacity-80 mb-12 leading-relaxed font-bold tracking-tight">Search over 6,500 hospitals in India that honor ICICI Lombard e-cards instantly.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-20 rounded-[2.5rem] uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20">Find Hospital</Button>
                            </div>

                            <div className="p-12 bg-slate-900 text-white rounded-[4rem] border border-slate-800 shadow-xl group">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-3 uppercase tracking-tighter text-xs">
                                    <Info className="h-5 w-5" />
                                    The "iHealth" Verdict
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium group-hover:text-slate-300 transition-colors">
                                    "ICICI Lombard is the technology leader in Indian health insurance. If you want a policy that you can manage entirely from your phone without ever talking to an agent, iHealth is the answer."
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
                                "name": "What is Cashless Everywhere policy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It means ICICI Lombard allows cashless hospitalization at any hospital in India, not just those in their pre-defined network, provided certain notification timelines are met."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does the Unlimited Reset benefit work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "If you exhaust your sum insured during a year, it resets automatically to 100% for the next hospitalization, allowing you to stay covered for subsequent illnesses."
                                }
                            }
                        ]
                    })
                }}
            />
        
            <GuideArticleJsonLd 
                title={(metadata.title as { absolute?: string; default?: string })?.absolute || (metadata.title as string)}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/icici-ihealth`}
            />
        </div>
    );
}