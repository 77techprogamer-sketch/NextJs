import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle2, FileText, Wallet, Landmark, 
  AlertCircle, ArrowRight, ShieldCheck, Download, 
  Star, Heart, Scale, Info, PieChart, Users, Zap
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC New Jeevan Anand (Plan 715) Guide 2026 | Benefits & Maturity',
    description: 'Expert guide to LIC New Jeevan Anand (715). Understand whole-life risk cover, maturity bonus, loan facility, and tax benefits under Section 80C & 10(10D).',
    keywords: [
        'lic new jeevan anand 715 plan details 2026',
        'jeeavan anand maturity benefit calculation',
        'lic whole life assurance plan 715',
        'benefits of lic jeevan anand after maturity',
        'lic jeevan anand vs new endowment plan',
        'lic bonus rates 2026 jeevan anand',
        'lic accident death and disability rider'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lic-jeevan-anand',
    }
};

export default function JeevanAnandGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal uppercase">Jeevan Anand (715)</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-200">
                                <Zap className="h-3 w-3 fill-current" />
                                Expert Product Deep-Dive
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 leading-[0.85] tracking-tighter">
                                The Master of <br/> <span className="text-primary italic">Double Benefits.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-primary pl-8 my-10">
                                In the world of traditional insurance, <strong>LIC New Jeevan Anand (Plan 715)</strong> stands alone. It is the only plan that pays you a maturity lump sum and <em>keeps your life cover alive for free</em> until age 100. This is the definitive 2026 breakdown of why this plan remains LIC's bestseller.
                            </p>
                        </header>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Min Age</p>
                                <h4 className="text-2xl font-black text-slate-900">18 Years</h4>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Max Age</p>
                                <h4 className="text-2xl font-black text-slate-900">50 Years</h4>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Min Term</p>
                                <h4 className="text-2xl font-black text-slate-900">15 Years</h4>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Max Term</p>
                                <h4 className="text-2xl font-black text-slate-900">35 Years</h4>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-20 mb-10 text-slate-900 tracking-tight" id="why-it-is-unique">
                                1. Why Jeevan Anand is Unique
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Most insurance plans end when you receive the maturity amount. You get your money, and the contract is finished. However, <strong>Jeevan Anand</strong> is an Endowment-cum-Whole Life plan. 
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] my-12 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                                    <Star className="h-40 w-40 text-primary" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                    The "Zindagi Ke Saath Bhi" Advantage
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-slate-300"><strong>Maturity Payout:</strong> Sum Assured + vested Revisionary Bonus + FAB at the end of the term.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-slate-300"><strong>Extended Life Cover:</strong> After maturity, your life cover for the Sum Assured continues for $0$ cost until your death or age 100.</p>
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight" id="eligibility-details">
                                2. In-Depth Eligibility & Criteria
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                To subscribe to this plan in 2026, you must meet the following technical requirements set by the IRDAI and LIC:
                            </p>
                            
                            <div className="overflow-x-auto mb-16 rounded-3xl border border-slate-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-8 py-6 text-sm font-black uppercase tracking-widest text-slate-400">Parameter</th>
                                            <th className="px-8 py-6 text-sm font-black uppercase tracking-widest text-slate-400">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Minimum Sum Assured</td>
                                            <td className="px-8 py-6 text-slate-600">₹1,00,000 (No upper limit)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Maximum Maturity Age</td>
                                            <td className="px-8 py-6 text-slate-600">75 Years (For the term portion)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Policy Term</td>
                                            <td className="px-8 py-6 text-slate-600">15 to 35 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-6 font-bold text-slate-900">Premium Paying Term</td>
                                            <td className="px-8 py-6 text-slate-600">Equal to Policy Term</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="bonuses-explained">
                                3. Bonuses: The Wealth Engine
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Since Jeevan Anand is a <strong>Participating Plan</strong>, you earn a share of LIC's profits. In 2026, these are declared in three forms:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="p-8 bg-green-50 rounded-[3rem] border border-green-100">
                                    <h4 className="text-2xl font-black text-green-900 mb-4 flex items-center gap-2">
                                        <Users className="h-6 w-6" />
                                        Simple Reversionary Bonus
                                    </h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed font-medium">
                                        Declared annually per ₹1000 of Sum Assured. This is added to your policy every year and is payable either on maturity or death. 
                                        <em> (Recent trend: ₹40-50 per ₹1000).</em>
                                    </p>
                                </div>
                                <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
                                        <PieChart className="h-6 w-6" />
                                        Final Additional Bonus (FAB)
                                    </h4>
                                    <p className="text-blue-800/80 text-sm leading-relaxed font-medium">
                                        A one-time bonus paid for policies with a term of 15 years or more. It significantly boosts the final maturity amount.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="riders-guide">
                                4. Optional Riders: Enhancing Your Plan
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                You can customize your Jeevan Anand policy by adding these riders for a small additional premium:
                            </p>
                            
                            <Accordion type="single" collapsible className="w-full mb-16">
                                <AccordionItem value="rider-1" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        Accidental Death & Disability Benefit Rider
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 pr-8">
                                        In case of accidental death, an additional sum (equal to the SA) is paid. In case of permanent disability, all future premiums are waived, and the Sum Assured is paid in 10 yearly installments.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="rider-2" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        New Term Assurance Rider
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 pr-8">
                                        Increases the life cover during the policy term without the saving component. Ideal for young breadwinners who need high cover at low cost.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="rider-3" className="bg-slate-50 border-none rounded-3xl mb-4 px-8">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">
                                        New Critical Illness Benefit Rider
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 pr-8">
                                        Provides a lump sum payout if the insurer is diagnosed with any of the 15 pre-defined critical illnesses (Cancer, Heart Attack, etc.).
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 pb-4 border-b" id="loan-and-surrender">
                                5. Loan, Surrender & Tax Benefits
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Jeevan Anand is not just an insurance plan; it's a liquid asset.
                            </p>
                            <ul className="space-y-6 mb-16">
                                <li className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
                                        <Wallet className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-black text-xl text-slate-900 mb-1">Loan Facility</h5>
                                        <p className="text-slate-500 text-sm italic">Available after 2 full years of premiums. You can get up to 90% of the surrender value as a loan at highly competitive interest rates (roughly 9.5% currently).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
                                        <Scale className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-black text-xl text-slate-900 mb-1">Tax Savings (SEC 80C)</h5>
                                        <p className="text-slate-500 text-sm italic">Premiums paid are eligible for deduction up to ₹1.5 Lakhs under Section 80C. This effectively lowers your annual premium cost by 10-30% depending on your tax bracket.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
                                        <Landmark className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-black text-xl text-slate-900 mb-1">Tax-Free Maturity (SEC 10(10D))</h5>
                                        <p className="text-slate-500 text-sm italic">The maturity amount and death benefit are completely tax-free under Section 10(10D), provided the annual premium is less than 10% of the Sum Assured.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight">Expert FAQs: Jeevan Anand (Plan 715)</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="faq-1">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Can I stop the policy after 10 years?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        Yes, you can surrender the policy after 2 years. However, if you stop after 10 years, you will receive a "Reduced Paid-Up" value if you don't surrender. We highly recommend completing the full term for maximum bonus accrual.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-2">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Is medical check-up mandatory for Plan 715?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        It depends on your Age and the Sum Assured. For Sum Assured above ₹3 Lakhs and age above 35, a basic medical (SMR) is usually required. Younger applicants with lower SA can often get "Non-Medical" approval.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-3">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What happens if I die after the policy term?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg">
                                        Even after you receive your full maturity payout, your life cover for the **Basic Sum Assured** remains active. If you die at age 85 (having matured the policy at 50), LIC will pay your nominee the full Sum Assured again.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[4rem] my-24 relative overflow-hidden group shadow-xl">
                            <h4 className="text-slate-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <Users className="h-6 w-6 text-primary" />
                                Planning for the Long Haul?
                            </h4>
                            <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                Jeevan Anand is a 20-30 year commitment. Our experts help you calibrate your Sum Assured so that future inflation doesn't eat your maturity rewards.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">Free Premium Quotation</Link>
                                <Link href="/resources/calculators" className="px-8 py-4 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">Bonus Calculator 2026</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* High Conversion CTA Section */}
                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
                            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -mb-80 -mr-80 group-hover:bg-primary/30 transition-all duration-1000"></div>
                            <h3 className="text-6xl font-black mb-8 leading-none tracking-tighter">Invest in <br/> <span className="text-primary italic">Generational Wealth.</span></h3>
                            <p className="text-slate-400 mb-16 text-2xl font-medium max-w-2xl leading-tight">
                                Don't just buy insurance. Buy a plan that pays you today and protects your family forever.
                                <br/><span className="text-white mt-8 block italic tracking-tighter decoration-primary underline decoration-4 underline-offset-8 transition-all group-hover:underline-offset-12">Expert Setup: Plan 715 Authority.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10" />
                                    Get Expert Consultation
                                </Button>
                                <Button variant="outline" size="lg" className="h-24 px-16 text-3xl font-black border-white/20 text-white hover:bg-white/10 rounded-3xl" asChild>
                                    <Link href="/contact">Check Eligibility</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Plan 715</h3>
                                <p className="text-sm text-slate-500 mb-12 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Instant Premium Quote</p>
                                <QuoteForm insuranceType="life_insurance" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <Download className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none">The 715 <br/>Policy Brochure</h4>
                                <p className="text-sm opacity-80 mb-12 leading-relaxed font-bold tracking-tight">Download the latest LIC New Jeevan Anand (Plan 715) official brochure and rider specifics for 2026.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-20 rounded-[2.5rem] uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20">Download PDF</Button>
                            </div>

                            <div className="p-12 bg-slate-900 text-white rounded-[4rem] border border-slate-800 shadow-xl group">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-3 uppercase tracking-tighter text-xs">
                                    <Info className="h-5 w-5" />
                                    The "715" Verdict
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium group-hover:text-slate-300 transition-colors">
                                    "Jeevan Anand is the ultimate choice for those who want to be remembered. It provides the financial backbone for your retirement and a guaranteed legacy for your grandchildren, all in one premium."
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
                                "name": "What is the policy term for New Jeevan Anand?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The policy term for LIC New Jeevan Anand (Plan 715) ranges from 15 to 35 years."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does life cover continue after maturity in Jeevan Anand?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, one of the unique features of Plan 715 is that the risk cover (Sum Assured) continues even after the maturity amount is paid, until age 100 or death of the policyholder."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is Jeevan Anand a good investment for tax saving?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, premiums paid qualify for tax deduction under Section 80C, and maturity/death benefits are tax-free under Section 10(10D)."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
