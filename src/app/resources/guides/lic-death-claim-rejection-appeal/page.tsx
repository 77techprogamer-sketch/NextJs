import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, FileText, Scale, ArrowRight, Gavel, HelpCircle, Mail, MapPin, ShieldCheck, Landmark, ClipboardList, Clock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'LIC Death Claim Rejected? Complete Appeal & Ombudsman Guide (2026)',
    description: 'Was your LIC death claim rejected? Learn how to use Section 45 of the Insurance Act to fight back. Step-by-step guide to GRO, Bima Bharosa, and Insurance Ombudsman appeals (2026 Updated).',
    keywords: [
        'lic death claim rejected help',
        'section 45 insurance act 3 years rule',
        'lic premature death claim rules',
        'how to file complaint against lic for rejected claim',
        'insurance ombudsman complaint format',
        'lic claim recovery services',
        'claim rejection reasons for lic 2026'
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
                            <span className="text-slate-900 font-medium uppercase tracking-wider text-[10px]">Expert Guide</span>
                        </nav>

                        <header className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase">Legal Authority</span>
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">Updated: April 2026</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-[0.9] tracking-tighter">
                                LIC Death Claim <br/> <span className="text-red-600 italic">Rejected?</span> <br/>
                                <span className="text-slate-400">The 2,000-Word <br/> Survival Manual.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-slate-900 pl-6 my-10" id="intro">
                                When LIC rejects a death claim, they often rely on a "Non-disclosure of Material Fact" clause. But what most nominees don't know is that <strong>Section 45 of the Insurance Act</strong> is a legal shield designed specifically to stop arbitrary rejections.
                            </p>
                        </header>

                        <div className="bg-slate-900 text-white p-10 rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Scale className="h-40 w-40" />
                            </div>
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                                The Executive Summary
                            </h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex gap-3 items-start">
                                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                                    </div>
                                    <span><strong>The 3-Year Shield:</strong> After 3 years, LIC cannot question a policy on any ground (except proven fraud).</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                                    </div>
                                    <span><strong>Burden of Proof:</strong> It is LIC's job to prove you lied, not your job to prove you didn't.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                                    </div>
                                    <span><strong>The Bima Lokpal:</strong> The Ombudsman is a free court that forces LIC to pay with interest.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-20 mb-8 text-slate-900 tracking-tight flex items-center gap-4" id="section-45">
                                <Landmark className="h-10 w-10 text-primary" />
                                1. The Legal Core: Section 45
                            </h2>
                            <p>
                                Section 45 of the Insurance Act 1938 is the most powerful weapon in your arsenal. Following the 2015 amendment, the law became even more favorable for policyholders.
                            </p>
                            
                            <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-3xl my-10">
                                <h4 className="font-black text-slate-900 mb-4 uppercase tracking-widest text-xs">Section 45 (Subsection 1) states:</h4>
                                <blockquote className="text-slate-700 italic border-l-0 pl-0 text-xl font-serif">
                                    "No policy of life insurance shall be called in question on any ground whatsoever after the expiry of three years from the date of the policy issuance or the date of commencement of risk or the date of revival of the policy..."
                                </blockquote>
                            </div>

                            <p>
                                <strong>Why this matters:</strong> Most LIC rejections happen because an "investigative officer" found an old medical record from 10 years ago. If your policy is older than 3 years, <strong>Section 45 makes that record legally irrelevant</strong>. LIC must pay, period.
                            </p>

                            <h3 className="text-2xl font-black mt-16 mb-6 text-slate-900">The "Early" vs "Non-Early" Distinction</h3>
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div className="p-8 bg-red-50 rounded-3xl border border-red-200">
                                    <div className="flex items-center gap-2 text-red-600 mb-4">
                                        <Clock className="h-5 w-5" />
                                        <span className="font-bold text-sm uppercase text-slate-500">Under 3 Years</span>
                                    </div>
                                    <h4 className="font-black text-red-900 text-xl m-0">Early Claim</h4>
                                    <p className="text-sm text-red-800/80 mt-4 leading-relaxed">
                                        If death occurs within 3 years of policy start/revival. LIC will investigate <strong>every single medical encounter</strong>. They can reject for "honest mistakes" in the proposal form.
                                    </p>
                                </div>
                                <div className="p-8 bg-green-50 rounded-3xl border border-green-200">
                                    <div className="flex items-center gap-2 text-green-600 mb-4">
                                        <ShieldCheck className="h-5 w-5" />
                                        <span className="font-bold text-sm uppercase tracking-widest text-slate-500">3 Years +</span>
                                    </div>
                                    <h4 className="font-black text-green-900 text-xl m-0">Incontestable Claim</h4>
                                    <p className="text-sm text-green-800/80 mt-4 leading-relaxed">
                                        The "Golden Window." LIC loses the right to question. Only proven, deliberate, and material <strong>Fraud</strong> can undo the policy, and the burden of proof is "Beyond Reasonable Doubt."
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight flex items-center gap-4" id="rejections">
                                <ClipboardList className="h-10 w-10 text-primary" />
                                2. Why LIC Rejects (And How We Reverse It)
                            </h2>
                            
                            <h3 className="text-3xl font-bold mt-12 mb-6 text-slate-900">A. Non-Disclosure of "Material" Fact</h3>
                            <p>
                                This is LIC's favorite reason. They claim that if you had disclosed that minor surgery or smoking habit, they wouldn't have issued the policy.
                            </p>
                            <p className="bg-slate-50 p-6 rounded-2xl italic text-slate-600 border-l-4 border-primary">
                                <strong>The Reversal Strategy:</strong> We argue that the fact was not "Material." For example, if the deceased had a minor knee surgery 5 years ago but died of a <em>Heart Attack</em>, the knee surgery is not material to the cause of death.
                            </p>

                            <h3 className="text-3xl font-bold mt-12 mb-6 text-slate-900">B. Repudiation based on "Policy Lapse"</h3>
                            <p>
                                If the policy lapsed, LIC will deny the death benefit. However, many nominees don't know about <strong>Paid-Up Value</strong>.
                            </p>
                            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-200 my-8">
                                <h5 className="font-black text-amber-900 m-0 text-sm flex items-center gap-2 uppercase">
                                    <AlertTriangle className="h-4 w-4" />
                                    The Paid-Up Rule
                                </h5>
                                <p className="text-amber-800 text-sm m-0 mt-4 leading-relaxed font-medium">
                                    If premiums were paid for at least 3 full years (for older policies) or 2 years (for newer ones), the policy acquires a "Paid-Up" status. Even if it lapsed, LIC is obligated to pay a <strong>proportionate death claim</strong>. Never accept a zero-payout for a lapsed policy with history.
                                </p>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight flex items-center gap-4" id="appeal-process">
                                <Gavel className="h-10 w-10 text-primary" />
                                3. The 3-Tier Official Appeal Process
                            </h2>

                            <div className="space-y-16 mt-12">
                                {/* Tier 1 */}
                                <div className="border-l-8 border-primary pl-10 py-4 relative">
                                    <div className="absolute -left-5 top-0 bg-primary text-white font-black h-10 w-10 rounded-full flex items-center justify-center shadow-lg">1</div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4">Grievance Redressal Officer (GRO)</h3>
                                    <p className="text-slate-600">
                                        Every LIC Divisional Office has a mandated GRO. Your appeal must be a <strong>formal legal representation</strong>. Mention specific IRDAI circulars and legal precedents.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                            <h5 className="font-bold text-slate-800 m-0 text-xs uppercase mb-3 tracking-widest text-primary">Mandatory Content</h5>
                                            <ul className="text-xs space-y-2 text-slate-500 m-0 list-disc pl-4 italic">
                                                <li>Claim Rejection Reference No. (Annexure VI-A)</li>
                                                <li>Copy of the Original Proposal Form</li>
                                                <li>Medical rebuttal from a certified Specialist</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                            <h5 className="font-bold text-slate-800 m-0 text-xs uppercase mb-3 tracking-widest text-primary">SLA (Timeline)</h5>
                                            <p className="text-xs text-slate-500 m-0 font-medium">LIC must acknowledge within 3 days and resolve within 15 days. <strong>Do not wait beyond the 16th day.</strong></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tier 2 */}
                                <div className="border-l-8 border-slate-300 pl-10 py-4 relative">
                                    <div className="absolute -left-5 top-0 bg-slate-300 text-slate-900 font-black h-10 w-10 rounded-full flex items-center justify-center shadow-lg">2</div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 italic transition-all hover:text-primary cursor-default">Bima Bharosa (IGMS) Portal</h3>
                                    <p className="text-slate-600">
                                        Formerly IGMS, the <strong>Bima Bharosa</strong> portal is IRDAI's direct eye into your case. When you file here, it goes directly to the IRDAI headquarters in Hyderabad. LIC Central Office is then forced to monitor their local branch's handling of your case.
                                    </p>
                                    <Button className="mt-4 bg-slate-900 font-bold h-12 px-8 uppercase text-xs tracking-widest hover:bg-primary transition-all" asChild>
                                        <Link href="https://bimabharosa.irdai.gov.in/" target="_blank">Access Portal</Link>
                                    </Button>
                                </div>

                                {/* Tier 3 */}
                                <div className="border-l-8 border-slate-900 pl-10 py-4 relative">
                                    <div className="absolute -left-5 top-0 bg-slate-900 text-white font-black h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-black/20">3</div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4">The Insurance Ombudsman (Bima Lokpal)</h3>
                                    <p className="text-slate-600">
                                        The most powerful ally for any nominee. The Ombudsman is a <strong>Semi-Judicial body</strong>. You do not need a lawyer, and it costs zero rupees.
                                    </p>
                                    <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/20 my-8 shadow-inner">
                                        <h4 className="text-primary font-black mb-4 flex items-center gap-2 uppercase tracking-tighter text-sm">
                                            <Landmark className="h-5 w-5" />
                                            Why the Ombudsman is Deadly for LIC
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm font-medium text-slate-700">
                                            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Award is binding on the company.</li>
                                            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> They can award up to ₹50 Lakhs (New 2026 limit).</li>
                                            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> They often award "Interest Penalty" of 2%+ over bank rate.</li>
                                            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Hearing is online or physical (easy access).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight flex items-center gap-4" id="locations">
                                <MapPin className="h-10 w-10 text-primary" />
                                4. Finding Your Ombudsman Office (2026)
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                You must approach the Ombudsman office under whose jurisdiction your residence or the LIC branch falls. Here is the active list of key major offices for 2026:
                            </p>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                                {[
                                    { city: "Bangalore", area: "Karnataka", address: "Jeevan Soudha, Jalahalli" },
                                    { city: "Mumbai", area: "Maharashtra & Goa", address: "Santacruz (West)" },
                                    { city: "Hyderabad", area: "Andhra & Telangana", address: "Saifabad" },
                                    { city: "Chennai", area: "Tamil Nadu & Pondy", address: "Annasalai" },
                                    { city: "Delhi", area: "Delhi & Haryana", address: "Asaf Ali Road" },
                                    { city: "Kolkata", area: "West Bengal & Bihar", address: "C.R. Avenue" }
                                ].map((box, i) => (
                                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-primary transition-all cursor-default group hover:shadow-xl hover:-translate-y-1">
                                        <h4 className="text-lg font-black text-slate-900 m-0 group-hover:text-primary transition-colors">{box.city}</h4>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 mt-1 tracking-widest">{box.area}</p>
                                        <p className="text-xs text-slate-500 mt-3 font-medium">{box.address}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="my-16 p-10 bg-slate-900 rounded-[3rem] text-white shadow-3xl">
                                <h3 className="text-3xl font-black mb-10 text-center">Expert Knowledge Base (FAQ)</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-100 border-white/10 hover:text-primary transition-colors">What if LIC found a private medical record from 10 years ago?</AccordionTrigger>
                                        <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-lg">
                                            If the policy is older than 3 years, they cannot use it to reject the claim unless they prove <strong>fraudulent intent</strong>. A mere discovery of a record is not proof of fraud. Under Section 45, they lose the right to question the policy on non-disclosure after 3 years. This was confirmed by several Supreme Court rulings including <em>Mithoolal Nayak vs LIC</em>.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-100 border-white/10 hover:text-primary transition-colors">Can a nominee go to Consumer Court directly?</AccordionTrigger>
                                        <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-lg">
                                            Yes, but we usually recommend the <strong>Insurance Ombudsman</strong> first. Consumer Courts (NCDRC/SCDRC) can take 3-5 years for a final verdict. The Ombudsman is mandated by law to provide a verdict in 90 days. If the Ombudsman fails, you can <em>still</em> go to Consumer Court. The doors are never closed for the policyholder.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-100 border-white/10 hover:text-primary transition-colors">How much compensation can I get in 2026?</AccordionTrigger>
                                        <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-lg">
                                            Beyond the full Sum Assured and accrued Bonuses, you are entitled to <strong>Penal Interest</strong>. Per IRDAI's latest rules, delayed claims must be paid with interest at 2% above the prevailing bank rate. If LIC has delayed your ₹20 Lakh claim by 2 years, the interest alone could be as high as ₹4 Lakhs.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger className="text-left font-bold py-6 text-slate-100 border-white/10 hover:text-primary transition-colors">Does the 3-year rule restart on Revival?</AccordionTrigger>
                                        <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-lg">
                                            Yes. This is a critical legal reality. While the original policy might be 15 years old, if you <strong>lapsed and revived</strong> it 1.5 years ago, the 3-year contestability clock resets from the date of the <em>latest revival</em>. This is why reviving a policy requires absolute medical transparency.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="bg-blue-50 border-2 border-blue-100 p-10 rounded-[3rem] my-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <HelpCircle className="h-40 w-40 text-blue-900" />
                            </div>
                            <h4 className="text-blue-900 font-black text-xl mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                                <MapPin className="h-5 w-5" />
                                On-Ground Case Management
                            </h4>
                            <p className="text-blue-800 mb-8 font-medium text-balance leading-relaxed">
                                Rejection letters are often cryptic and rely on policy wording nuances. Our veterans (former LIC Divisional Managers and TPA leads) audit your documents for free to find the structural flaw in LIC's rejection.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-6 py-2 bg-white rounded-xl border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 hover:shadow-lg transition-all">Bangalore Specialists</Link>
                                <Link href="/locations/mumbai" className="px-6 py-2 bg-white rounded-xl border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 hover:shadow-lg transition-all">Mumbai Claims Desk</Link>
                                <Link href="/locations/hyderabad" className="px-6 py-2 bg-white rounded-xl border border-blue-200 text-sm font-bold text-blue-900 hover:border-blue-500 hover:shadow-lg transition-all">Hyderabad Experts</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 p-16 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
                            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mb-60 -mr-60 group-hover:bg-primary/30 transition-all duration-700"></div>
                            <h3 className="text-5xl font-black mb-6 leading-tight">Don't let a "No" <br/> be the final answer.</h3>
                            <p className="text-slate-400 mb-12 text-xl leading-relaxed max-w-2xl text-balance">
                                90% of nominees give up because the legal path seems too complex. We have recovered over ₹15 Crores from insurance giants. 
                                <br/><span className="text-primary font-bold text-2xl mt-4 block italic">Risk-Free Consultation. We only charge if you win.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button size="lg" className="h-20 px-12 text-2xl font-black bg-primary hover:bg-primary/90 flex items-center gap-3 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-8 w-8" />
                                    Recover My Claim
                                </Button>
                                <Button variant="outline" size="lg" className="h-20 px-12 text-2xl font-black border-white/20 text-white hover:bg-white/10 rounded-2xl" asChild>
                                    <Link href="/contact">Free Legal Review</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-shadow">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none">Quick Audit</h3>
                                <p className="text-sm text-slate-500 mb-10 border-b border-slate-200 pb-6 uppercase font-bold tracking-tighter">Instant Case Review</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-12 bg-primary rounded-[3rem] text-primary-foreground shadow-2xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                                    <FileText className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-tight">Ombudsman <br/>Package (2026)</h4>
                                <p className="text-sm opacity-80 mb-10 leading-relaxed font-medium">Download the latest verified Annexure VI-A forms, self-declaration templates, and filing checklists for all 17 cities.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-16 rounded-3xl uppercase tracking-widest text-xs shadow-xl">Get The Pack</Button>
                            </div>

                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] border border-slate-800 shadow-xl">
                                <h4 className="font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-tighter text-xs">
                                    <Mail className="h-4 w-4" />
                                    The 15-Day Rule
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic">
                                    "If you don't receive a response from the LIC GRO within 15 days, do NOT wait. Email <span className="text-white font-bold underline">complaints@irdai.gov.in</span> immediately. This forces the local branch to answer to the regulator."
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
                                "name": "What is Section 45 3 Year Rule in LIC?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Under Section 45 of the Insurance Act 1938, no life insurance policy can be questioned by an insurer for any reason (misstatement or non-disclosure) after 3 continuous years of the policy being in force. This makes claims 'Incontestable' after the 3-year window."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How to file a complaint against LIC for a rejected claim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The process is 3-tiered: 1. Write to the Grievance Redressal Officer (GRO) at the Divisional Office. 2. Escalate to IRDAI Bima Bharosa portal. 3. File a case with the Insurance Ombudsman (Bima Lokpal) for the respective jurisdiction."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the Insurance Ombudsman verdict binding on LIC?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, if the policyholder accepts the Ombudsman's award, it is legally binding on the insurance company. They must pay the awarded amount within 30 days or face penal interest."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the new compensation limit for Ombudsman in 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The pecuniary jurisdiction of the Insurance Ombudsman has been updated to cover claims up to ₹50 Lakhs in 2026, up from the previous ₹30 Lakhs limit."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
