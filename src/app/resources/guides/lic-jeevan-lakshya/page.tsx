import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle2, FileText, Wallet, Landmark, 
  AlertCircle, ArrowRight, ShieldCheck, Download, 
  GraduationCap, Baby, HeartHandshake, History, 
  LineChart, UserPlus, Lightbulb
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Jeevan Lakshya (733) Guide 2026 | Child Education & Income Benefit',
    description: 'Protect your child\'s future with LIC Jeevan Lakshya (Plan 733). Expert guide on the 10% annual income benefit, premium waiver on death, and maturity payouts.',
    keywords: [
        'lic jeevan lakshya 733 benefits 2026',
        'income benefit in lic jeevan lakshya',
        'lic plan for child education 2026',
        'jeevan lakshya premium waiver benefit',
        'lic 733 maturity calculator 2026',
        'lic child plan with income benefit',
        'best lIC plan for daughter marriage'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lic-jeevan-lakshya',
    }
};

export default function JeevanLakshyaGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal uppercase">Jeevan Lakshya (733)</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-pink-200">
                                <Baby className="h-3 w-3" />
                                Family Future Protection
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 leading-[0.85] tracking-tighter">
                                Secure the <br/> <span className="text-primary italic">Dreams You Hold.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-primary pl-8 my-10">
                                {"What happens to your child's education if you aren't there? "}<strong>LIC Jeevan Lakshya (Plan 733)</strong>{" is specifically designed to answer that question. It is a \"Savings with Income\" plan that ensures that even in your absence, your family receives an annual income and a final maturity payout to fulfill your promises."}
                            </p>
                        </header>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden group">
                                <GraduationCap className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">Education Fix</h4>
                                <p className="text-xs text-slate-400 font-medium">{"Guarantees funds for higher education regardless of life's uncertainties."}</p>
                            </div>
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden group">
                                <HeartHandshake className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">Income Benefit</h4>
                                <p className="text-xs text-slate-400 font-medium">{"Nominees receive 10% of Sum Assured annually after policyholder's death."}</p>
                            </div>
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden group">
                                <History className="h-12 w-12 text-primary mb-8" />
                                <h4 className="text-2xl font-black mb-2">Premium Waiver</h4>
                                <p className="text-xs text-slate-400 font-medium">All future premiums are waived immediately upon the death of the policyholder.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-20 mb-10 text-slate-900 tracking-tight" id="how-lakshya-works">
                                1. How Jeevan Lakshya Works
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Jeevan Lakshya (733) is a unique "Limited Premium Payment" plan. If you choose a 20-year term, you only pay premiums for 17 years. The last 3 years are premium-free.
                            </p>
                            
                            <div className="bg-amber-50 border-2 border-amber-100 p-12 rounded-[4rem] my-12 relative overflow-hidden">
                                <h3 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-3">
                                    <Lightbulb className="h-6 w-6 text-amber-600" />
                                    The Death Benefit Scenario (Critical)
                                </h3>
                                <p className="text-amber-800/80 mb-8 font-medium">If the policyholder passes away during the term:</p>
                                <ul className="space-y-4 text-amber-900 font-bold">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                                        Future premiums are WAIVED (No burden on family).
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                                        10% of Sum Assured is paid ANNUALLY until maturity.
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                                        110% of Sum Assured + Bonuses is paid on MATURITY.
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight" id="technical-details">
                                2. Technical Specs & Eligibility
                            </h2>
                            <div className="overflow-x-auto mb-16 rounded-3xl border border-slate-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-8 py-6 text-sm font-black uppercase tracking-widest text-slate-400">Parameter</th>
                                            <th className="px-8 py-6 text-sm font-black uppercase tracking-widest text-slate-400">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Minimum Entry Age</td>
                                            <td className="px-8 py-6 text-slate-600">18 Years (Completed)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Maximum Entry Age</td>
                                            <td className="px-8 py-6 text-slate-600">50 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Policy Term</td>
                                            <td className="px-8 py-6 text-slate-600">13 to 25 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Premium Paying Term (PPT)</td>
                                            <td className="px-8 py-6 text-slate-600">Policy Term minus 3 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Minimum Sum Assured</td>
                                            <td className="px-8 py-6 text-slate-600">₹1,00,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="maturity-math">
                                3. The Maturity Math: Bonus & FAB
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                On surviving the term, LIC pays a massive lump sum. This is calculated as:
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100 text-center">
                                    <LineChart className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                                    <h4 className="text-2xl font-black text-blue-900 mb-2">Revisionary Bonus</h4>
                                    <p className="text-blue-800/80 text-sm font-medium">Accumulated yearly based on LIC profit declarations.</p>
                                </div>
                                <div className="p-8 bg-green-50 rounded-[3rem] border border-green-100 text-center">
                                    <UserPlus className="h-10 w-10 text-green-600 mx-auto mb-4" />
                                    <h4 className="text-2xl font-black text-green-900 mb-2">Final Bonus (FAB)</h4>
                                    <p className="text-green-800/80 text-sm font-medium">A loyalty reward for staying in the plan for over 15 years.</p>
                                </div>
                            </div>
                            <p className="bg-slate-50 p-8 rounded-3xl text-sm italic border-l-4 border-primary text-slate-500">
                                <strong>Case Study:</strong> For a ₹10 Lakh Sum Assured with a 25-year term, assuming a bonus of ₹45, the maturity could potentially reach ₹23-28 Lakhs depending on the FAB.
                            </p>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="riders">
                                4. Essential Riders for Lakshya
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                To make this plan truly "Bulletproof", we recommend:
                            </p>
                            <Accordion type="single" collapsible className="w-full mb-16">
                                <AccordionItem value="rider-1" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        Accident Benefit Rider
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Doubles the Sum Assured in case of accidental death. This provides an immediate lump sum for urgent liabilities (like loans) while the 10% annual income starts for education.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="rider-2" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        Term Assurance Rider
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Provides an additional death cover. Very useful if you have a low entry age and high responsibilities.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="faqs">
                                Expert FAQs (Plan 733)
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="faq-1">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Is it better than a Sukanya Samriddhi Yojana (SSY)?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        {"SSY offers higher interest rates but no life cover or premium waiver. If you pass away, SSY just stops, and the money stays till she is 21. Jeevan Lakshya provides an annual income to the family and maturity regardless of whether you are alive."}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-2">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Can I take a loan on this policy?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        {"Yes, you can take a loan after 2 years if premiums are paid. The interest rate is decided by LIC (usually ~9%). It's a great tool for short-term liquidity without breaking the long-term goal."}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-3">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What is the "Income Benefit" payout date?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        {"The 10% annual income benefit is paid on every policy anniversary from the year following death until the year before the maturity date."}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Professional Advice */}
                        <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[4rem] my-24 relative overflow-hidden group shadow-xl">
                            <h4 className="text-slate-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                                {"Don't Just Buy, Design It."}
                            </h4>
                            <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                {"Designing a policy for a child's marriage at 25 or education at 18 requires precise term selection. We map your policy term exactly to your milestone years."}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">Custom Planning Session</Link>
                                <Link href="/resources/guides" className="px-8 py-4 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">All LIC Guides</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* CTA */}
                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
                            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] group-hover:bg-primary/30 transition-all duration-1000"></div>
                            <h3 className="text-6xl font-black mb-8 leading-none tracking-tighter">{"Your Child's "} <br/> <span className="text-primary italic">{"Financial Shield."}</span></h3>
                            <p className="text-slate-400 mb-16 text-2xl font-medium max-w-2xl leading-tight">
                                {"Because \"I'll save later\" is a risk they shouldn't have to carry."}
                                <br/><span className="text-white mt-8 block italic tracking-tighter decoration-primary underline decoration-4 underline-offset-8 transition-all group-hover:underline-offset-12">{"Expert Setup: Guaranteed Payout Authority."}</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10" />
                                    Book Free Consultation
                                </Button>
                                <Button variant="outline" size="lg" className="h-24 px-16 text-3xl font-black border-white/20 text-white hover:bg-white/10 rounded-3xl" asChild>
                                    <Link href="/contact">Check Payouts</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Child Benefit</h3>
                                <p className="text-sm text-slate-500 mb-12 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Instant 733 Quote</p>
                                <QuoteForm insuranceType="life_insurance" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <FileText className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none">The Lakshya <br/>Prospectus</h4>
                                <p className="text-sm opacity-80 mb-12 leading-relaxed font-bold tracking-tight">Everything about Plan 733 in one PDF. Includes bonus history and rider cost tables.</p>
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
                                "name": "What is the main benefit of LIC Jeevan Lakshya?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The main benefit is the annual income feature: if the policyholder dies, the family receives 10% of the Sum Assured every year until maturity, and all future premiums are waived."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long do I need to pay premiums for Plan 733?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The premium payment term is the Policy Term minus 3 years. For example, if you choose a 20-year term, you pay for 17 years."
                                }
                            }
                        ]
                    })
                }}
            />
        
            <GuideArticleJsonLd 
                title={(metadata.title as { absolute?: string; default?: string })?.absolute || (metadata.title as string)}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/lic-jeevan-lakshya`}
            />
        </div>
    );
}