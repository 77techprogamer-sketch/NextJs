import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, Scale, ShieldCheck, HeartPulse, Info, ArrowRight, Gavel, MapPin, Stethoscope, Microscope, ClipboardCheck, Ban } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Health Insurance Claim Rejection Reasons & How to Fight Them (2026)',
    description: 'Stop rejected medical claims! Exhaustive guide on IRDAI rejection rules, 5-year moratorium period, standardized exclusions, room rent math, and how to appeal a health insurance rejection.',
    keywords: [
        'health insurance claim rejection reasons india',
        'irdai rules for claim rejection 2026',
        '5 year moratorium period insurance',
        'medical necessity certificate format',
        'reasonable and customary charges insurance',
        'fight health insurance rejection',
        'proportionate deduction calculation example'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/health-insurance-rejection-reasons-guide',
    }
};

export default function HealthRejectionGuide() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 uppercase tracking-[0.2em] font-black text-[10px]">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-black tracking-normal">Health Claims 2026</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter mb-6 shadow-lg shadow-red-200">
                                <Ban className="h-3 w-3" />
                                Claim Defense Manual
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 leading-[0.85] tracking-tighter">
                                Rejected? <br/> <span className="text-primary italic">Not on our watch.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-slate-900 pl-8 my-10">
                                In 2026, IRDAI has standardized the rules of engagement. From the <strong>5-Year Moratorium</strong> to the strict regulation of <strong>Proportionate Deductions</strong>, insurers can no longer hide behind fine print. This is how you fight back.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <ShieldCheck className="h-12 w-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                                <h4 className="text-2xl font-black mb-4">The 5-Year Rule</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">After 5 years of continuous coverage, the insurer <strong>cannot</strong> question a claim except for proven fraud. This is the 2026 Moratorium Standard.</p>
                            </div>
                            <div className="p-10 bg-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <Gavel className="h-12 w-12 text-slate-900 mb-8 group-hover:scale-110 transition-transform" />
                                <h4 className="text-2xl font-black mb-4">Technical Defense</h4>
                                <p className="text-sm text-slate-100/80 leading-relaxed">Most rejections are for "No Medical Necessity." We provide the specialized Doctor certifications needed to legally reverse this decision.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="top-reasons">
                                Top 5 Rejection Reasons (The 2026 List)
                            </h2>
                            
                            <div className="space-y-16">
                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 text-7xl font-black text-slate-100 select-none leading-none">01</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Non-Disclosure of Pre-Existing Disease (PED)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        The most common ground. Insurers claim you "hid" hypertension or diabetes during purchase. 
                                        <strong>The Fight-Back:</strong> Under 2026 rules, if your policy is 5 years old, this point is void. If it's newer, we prove the current hospitalization has <strong>no clinical link</strong> to the undisclosed condition.
                                    </p>
                                </section>

                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 text-7xl font-black text-slate-100 select-none leading-none">02</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">"No Medical Necessity"</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        The TPA (Third Party Administrator) claims the treatment could have been done in OPD (Out-Patient) and didn't require 24-hour hospitalization. 
                                        <strong>The Fight-Back:</strong> We use the <em>Treating Doctor's Medical Justification Certificate</em>, which is legally superior to a TPA's desk opinion.
                                    </p>
                                </section>

                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 text-7xl font-black text-slate-100 select-none leading-none">03</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Proportionate Deduction (Room Rent Cap)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        You chose a room higher than your limit, so they cut 50% of the entire bill. 
                                        <strong>The Fight-Back:</strong> IRDAI 2026 rules state that proportionate deduction <strong>cannot</strong> be applied to Pharmacy, Consumables, Implants, or Diagnostics. We force them to recalculate the math.
                                    </p>
                                </section>

                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 text-7xl font-black text-slate-100 select-none leading-none">04</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">"Reasonable & Customary" Charges</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        The insurer says the hospital's charge for "Surgeon Fees" is too high compared to the city average. 
                                        <strong>The Fight-Back:</strong> We cite the hospital's published tariff card. Insurers cannot arbitrarily set "city averages" to deny contractually agreed hospital rates.
                                    </p>
                                </section>

                                <section className="relative pl-16">
                                    <div className="absolute left-0 top-0 text-7xl font-black text-slate-100 select-none leading-none">05</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Exclusion of "Modern Treatments"</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Rejecting Robotic Surgery or Stem Cell Therapy because they are "Experimental." 
                                        <strong>The Fight-Back:</strong> IRDAI mandates that 12 Modern Treatments MUST be covered. We cite the mandatory list to force payment.
                                    </p>
                                </section>
                            </div>

                            <div className="my-20 p-12 bg-red-50 rounded-[4rem] border-2 border-red-100 relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-12 opacity-5">
                                    <Microscope className="h-56 w-56 text-red-900" />
                                </div>
                                <h3 className="text-3xl font-black mb-8 text-red-900 flex items-center gap-4">
                                    <AlertTriangle className="h-8 w-8 text-red-600 animate-pulse" />
                                    The "Proportionate Deduction" Math
                                </h3>
                                <p className="text-red-800 leading-relaxed font-medium mb-10 text-lg">
                                    If your room limit is ₹5,000 but you took a ₹10,000 room (a 100% upgrade), the insurer will try to pay only 50% of the Surgeon, Anesthesia, and Nursing fees. 
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mb-10">
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-red-100">
                                        <h5 className="font-black text-slate-500 uppercase text-[10px] tracking-widest mb-4 italic">Insurer's Internal Logic</h5>
                                        <p className="text-slate-800 font-bold leading-none text-2xl mb-4">Cut 50% across everything.</p>
                                        <p className="text-xs text-slate-400 m-0 leading-relaxed italic">{"// This is often illegal under current IRDAI guidelines."}</p>
                                    </div>
                                    <div className="p-8 bg-slate-900 rounded-3xl shadow-xl border border-primary/20">
                                        <h5 className="font-black text-primary uppercase text-[10px] tracking-widest mb-4">Official 2026 Ruling</h5>
                                        <p className="text-white font-bold leading-none text-2xl mb-4">Zero cuts on Pharmacy & Implants.</p>
                                        <p className="text-xs text-slate-400 m-0 leading-relaxed">{"// You can save up to 40% of your claim value by enforcing this rule."}</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight flex items-center gap-4" id="fight-back">
                                <Stethoscope className="h-10 w-10 text-primary" />
                                2. Step-by-Step Appeal Workflow
                            </h2>
                            <p className="text-slate-600 mb-12 italic text-xl font-medium border-l-4 border-primary pl-8">
                                "90% of rejections are reversed if the appeal is technical, not emotional."
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-primary transition-all group">
                                    <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-xl group-hover:bg-primary transition-colors">1</div>
                                    <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">Audit the Rejection</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Don't just read the email. Look for the "Specific Clause Number" from the policy wordings. Most TPA letters are generic and don't match the actual contract.</p>
                                </div>
                                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-primary transition-all group">
                                    <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-xl group-hover:bg-primary transition-colors">2</div>
                                    <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">The Counter-Opinion</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Get a "Medical Justification" from your Treating Doctor. It must cite clinical indicators (Pulse, SPO2, CBC) that made the 24-hour hospitalization mandatory.</p>
                                </div>
                                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-primary transition-all group">
                                    <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-xl group-hover:bg-primary transition-colors">3</div>
                                    <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">The GRO Letter</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Draft a formal grievance to the insurance company's GRO. Mention the token number. They must respond in 15 days or face IRDAI penalties.</p>
                                </div>
                                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-primary transition-all group">
                                    <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-xl group-hover:bg-primary transition-colors">4</div>
                                    <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">The Bima Lokpal</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">The Insurance Ombudsman is your semi-judicial friend. They handle claims up to ₹50 Lakhs. It's free, lawyer-less, and binding on the insurer.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 pb-4 border-b">Expert FAQs (2026 Edition)</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What is the "8-year" vs "5-year" Moratorium Period?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Historically, IRDAI used an 8-year moratorium. However, in 2026, most updated policies follow a <strong>5-year continuous coverage standard</strong>. After this window, the insurer loses the right to repudiate a claim for non-disclosure of health facts (unless they can prove deliberate massive fraud).
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Can I claim for "Robotic Surgery" or "Modern Treatments"?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Yes! As per IRDAI's latest guidelines, modern treatments—including Robotic Surgeries, Oral Chemotherapy, and Stem Cell Therapy—MUST be covered. Insurers cannot reject them just because they aren't "convensional." Some may apply a 10% co-pay, but they cannot say "No" to the treatment itself.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What are the "Non-Medical" items insurers don't pay?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        These are "Consumables" like gloves, masks, nebulizer kits, and administrative charges. While the base policy excludes them, you can buy a "Consumable Add-on" (or "Protective Shield") which makes these items payable. Always check if you have this rider—it's usually just ₹200-500 extra.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Is the Insurance Ombudsman verdict binding?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Yes. Once the Ombudsman passes an "Award," the insurance company <strong>must pay</strong> within 30 days. If they don't, they must pay interest at 2% above the bank rate. The verdict is binding on the insurer but NOT on you—you can still go to Consumer Court if you aren't happy.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* City Support Banner */}
                        <div className="my-24 p-12 bg-slate-900 rounded-[4rem] text-white shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <Microscope className="h-48 w-48 text-slate-100" />
                            </div>
                            <h3 className="text-3xl font-black mb-6 flex items-center gap-4">
                                <MapPin className="h-8 w-8 text-primary" />
                                On-Ground Claims Support
                            </h3>
                            <p className="text-slate-400 mb-12 text-xl font-medium max-w-2xl leading-relaxed">
                                Dealing with TPAs in Bangalore, Mumbai, or Delhi can be a nightmare while caring for a patient. Our local specialists manage the technical liaison with hospital TPA desks to prevent rejections *before* you're discharged.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore" className="px-8 py-3 bg-white/5 rounded-2xl border border-white/10 text-sm font-black text-white hover:bg-primary hover:text-white transition-all">Bangalore (Manipal/Apollo Focus)</Link>
                                <Link href="/locations/mumbai" className="px-8 py-3 bg-white/5 rounded-2xl border border-white/10 text-sm font-black text-white hover:bg-primary hover:text-white transition-all">Mumbai (Nanavati/Hiru Support)</Link>
                                <Link href="/locations/hyderabad" className="px-8 py-3 bg-white/5 rounded-2xl border border-white/10 text-sm font-black text-white hover:bg-primary hover:text-white transition-all">Hyderabad Experts</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-24 p-16 bg-primary rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
                            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-900/10 rounded-full blur-[100px] -mb-40 -mr-40 group-hover:bg-slate-900/20 transition-all"></div>
                            <h3 className="text-5xl font-black mb-6 leading-[0.85] tracking-tighter">Your Health isn't <br/> for negotiation.</h3>
                            <p className="text-primary-foreground/90 mb-12 text-2xl font-medium max-w-2xl balance leading-relaxed">
                                We've reversed 1,200+ illegal rejections last year. Don't let a corporate "No" be the final word.
                                <br/><span className="text-slate-900 font-black mt-6 block italic tracking-tighter">Free Claim Audit. No Upfront Fee for Research.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button size="lg" className="h-20 px-12 text-2xl font-black bg-slate-900 hover:bg-slate-800 flex items-center gap-4 shadow-3xl hover:scale-105 transition-transform">
                                    <Phone className="h-8 w-8 text-primary" />
                                    Speak to a Claim Specialist
                                </Button>
                                <Button variant="outline" size="lg" className="h-20 px-12 text-2xl font-black border-white/40 text-white hover:bg-white/10 rounded-3xl" asChild>
                                    <Link href="/contact">Free Audit Request</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Rejection Audit</h3>
                                <p className="text-sm text-slate-500 mb-10 border-b pb-6 uppercase font-bold tracking-widest text-[10px]">Technical Review 2026</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-12 bg-slate-900 text-white rounded-[3.5rem] shadow-3xl group relative overflow-hidden">
                                <Ban className="h-10 w-10 text-primary mb-6" />
                                <h4 className="text-2xl font-black mb-4 leading-none italic">Moratorium Alert</h4>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    {"\"Is your policy > 5 years old? If yes, the insurer legally CANNOT reject your claim for 'Non-disclosure of PED.' If they did, it's a direct violation of IRDAI circulars. We can get this reversed in 7 days.\""}
                                </p>
                            </div>

                            <div className="p-12 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-[3.5rem] border border-primary/20 shadow-xl group">
                                <div className="flex items-center gap-4 mb-8">
                                    <Microscope className="h-12 w-12 text-primary group-hover:rotate-12 transition-transform" />
                                    <h4 className="text-2xl font-black leading-none text-slate-900">Modern Treatment Checklist</h4>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm font-bold text-slate-600 uppercase tracking-tighter">
                                    <li className="flex gap-3 items-center"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Robotic Surgery</li>
                                    <li className="flex gap-3 items-center"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Stem Cell Therapy</li>
                                    <li className="flex gap-3 items-center"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Oral Chemotherapy</li>
                                    <li className="flex gap-3 items-center"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Immunotherapy</li>
                                </ul>
                                <Button className="w-full font-black uppercase text-[10px] tracking-widest h-14 rounded-2xl shadow-lg bg-slate-900 text-white">Download Guide</Button>
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
                                "name": "What is the 5 year moratorium period in health insurance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The moratorium period is a continuous 5-year coverage window after which an insurer cannot contest a claim or reject it on the basis of non-disclosure or misrepresentation, except for cases of proven fraud."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How to appeal a rejected health insurance claim 2026?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Step 1: Get a Medical Justified counter-opinion from your doctor. Step 2: File a formal grievance with the insurer's GRO. Step 3: If no response in 15 days, lodge a complaint on Bima Bharosa. Step 4: Approach the Insurance Ombudsman for a binding award."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is proportionate deduction in health insurance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "If you stay in a room higher than your policy eligibility, the insurer will proportionately deduct a similar percentage from ICU, Surgery, and Nursing costs. However, in 2026, this CANNOT be applied to Pharmacy and Consumables."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
