import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertTriangle, Scale, ShieldCheck, HeartPulse, Info, ArrowRight, Gavel, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Health Insurance Claim Rejection Reasons & How to Fight Them (2026)',
    description: 'Stop rejected medical claims! Exhaustive guide on IRDAI rejection rules, 8-year moratorium period, standardized exclusions, and how to appeal a health insurance rejection.',
    keywords: [
        'health insurance claim rejection reasons india',
        'irdai rules for claim rejection 2026',
        '8 year moratorium period insurance',
        'medical necessity certificate format',
        'reasonable and customary charges insurance',
        'fight health insurance rejection'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/health-insurance-rejection-reasons-guide',
    }
};

export default function HealthRejectionGuide() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <nav className="text-sm border-b pb-4 mb-8 flex gap-2 text-slate-500 uppercase tracking-widest font-bold">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-primary">Resources</Link>
                            <span>/</span>
                            <span className="text-slate-900">Health Claim Rejection Guide</span>
                        </nav>

                        <header className="mb-16">
                            <h1 className="text-4xl md:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
                                Rejected? <br/><span className="text-primary italic">Not on our watch.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-primary pl-6 py-2">
                                In 2026, IRDAI has made it harder for insurance companies to reject claims arbitrarily. From the <strong>8-Year Moratorium</strong> to <strong>Standardized Exclusions</strong>, here is your expert manual on fighting back.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
                                <ShieldCheck className="h-12 w-12 text-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-2xl font-black mb-2">The 8-Year Rule</h4>
                                <p className="text-sm text-slate-400">After 8 years of continuous coverage, the insurer <strong>cannot</strong> reject a claim except for proven fraud. This is known as the Moratorium Period.</p>
                            </div>
                            <div className="p-8 bg-primary text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
                                <Gavel className="h-12 w-12 text-slate-900 mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="text-2xl font-black mb-2">Technical Denial</h4>
                                <p className="text-sm text-slate-100/80">Most rejections are for "No Medical Necessity." We help you get the specialized Doctor certificate needed to reverse this.</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-black mb-8 text-slate-900">Top 5 Rejection Reasons (The 2026 List)</h2>
                            
                            <div className="space-y-12">
                                <section className="relative">
                                    <div className="absolute -left-12 top-0 text-7xl font-black text-slate-100 select-none">01</div>
                                    <h3 className="text-2xl font-bold text-slate-900">Non-Disclosure of Pre-Existing Disease (PED)</h3>
                                    <p>The #1 reason. Insurers claim you hid diseases like BP, Thyroid, or old surgeries. <strong>How to fight:</strong> Prove that the disease was diagnosed <em>after</em> the waiting period or was irrelevant to the current hospitalization.</p>
                                </section>

                                <section className="relative">
                                    <div className="absolute -left-12 top-0 text-7xl font-black text-slate-100 select-none">02</div>
                                    <h3 className="text-2xl font-bold text-slate-900">"No Medical Necessity"</h3>
                                    <p>The TPA (Third Party Administrator) believes the treatment could have been done as an Outpatient (OPD). <strong>How to fight:</strong> Use the Treatng Doctor's "Medical Justification Certificate" citing why 24-hour hospitalization was clinicaly mandatory.</p>
                                </section>

                                <section className="relative">
                                    <div className="absolute -left-12 top-0 text-7xl font-black text-slate-100 select-none">03</div>
                                    <h3 className="text-2xl font-bold text-slate-900">Standardized Exclusions (Reform 2020)</h3>
                                    <p>Certain items like "Cosmetic Surgery" or "Aesthetic treatments" are excluded. However, IRDAI now mandates that Mental Illness, Genetic Disorders, and Obesity (if clinical) <strong>must</strong> be covered.</p>
                                </section>

                                <section className="relative">
                                    <div className="absolute -left-12 top-0 text-7xl font-black text-slate-100 select-none">04</div>
                                    <h3 className="text-2xl font-bold text-slate-900">Proportionate Deduction (Room Rent Limit)</h3>
                                    <p>If you stayed in a Suite but were eligible for a Twin-Sharing room, the company will cut a percentage from the <em>entire</em> bill. <strong>How to fight:</strong> Check for "No Room Rent Cap" policies or file a grievance if the deduction is mathematically flawed.</p>
                                </section>

                                <section className="relative">
                                    <div className="absolute -left-12 top-0 text-7xl font-black text-slate-100 select-none">05</div>
                                    <h3 className="text-2xl font-bold text-slate-900">Reasonable & Customary Charges</h3>
                                    <p>The insurer says the hospital's charge for "Dr. Visit" or "OT Charges" is higher than the city average. <strong>How to fight:</strong> This is the most common area for Ombudsman intervention—where insurers are forced to pay as per hospital tariffs.</p>
                                </section>
                            </div>

                            <div className="my-16 p-10 bg-red-50 rounded-[3rem] border-2 border-red-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <AlertTriangle className="h-40 w-40 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-black mb-6 text-red-900 flex items-center gap-2">
                                    <AlertTriangle className="h-6 w-6" />
                                    The 8-Year Moratorium Period
                                </h3>
                                <p className="text-red-800 leading-relaxed font-medium mb-6">
                                    IRDAI introduced a revolutionary rule: After 8 continuous years of policy renewal (without break), an insurance company <strong>cannot question</strong> the claim except on grounds of fraud or specific permanent exclusions. They cannot raise "Non-disclosure" issues after 8 years.
                                </p>
                                <Button className="bg-red-600 hover:bg-red-700 font-bold">Check My Policy Age</Button>
                            </div>

                            <h2 className="text-3xl font-black mt-24 mb-8 text-slate-900 uppercase tracking-tighter">Your "Fight Back" Checklist</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    { t: "Gather Rejection Letter", d: "Ask for the specific 'Clause Number' cited for rejection." },
                                    { t: "Medical Justification", d: "Get a Counter-Opining letter from your Doctor." },
                                    { t: "Grievance Filing", d: "Write to the GRO (Grievance Redressal Officer) formally." },
                                    { t: "Ombudsman Prep", d: "Draft the Annexure VI-A for the semi-judicial hearing." }
                                ].map((step, i) => (
                                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h5 className="font-bold text-slate-900 mb-1">{step.t}</h5>
                                        <p className="text-xs text-slate-500 m-0">{step.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-black mt-24 mb-10 text-slate-900 leading-tight">Expert FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 italic">Can I claim for Robotic Surgeries in 2026?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        Yes! As per IRDAI's latest guidelines, "Modern Treatments" including Robotic Surgery, Stereotactic Radio Surgeries, and Stem Cell Therapy MUST be covered by all Comprehensive Health Insurance policies, though some may have a 10% co-pay or sub-limit.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 italic">What is the "Proportionate Deduction" rule?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        If you upgrade your room beyond your policy eligibility, the insurer will deduct a proportionate percentage from almost all bill items (except medicines and implants). Example: If you're eligible for ₹5,000 rent but take a ₹10,000 room, your claim may be cut by 50%.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-bold py-6 text-slate-800 italic">How long does an Ombudsman appeal take?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                                        On average, the Bangalore and Mumbai Ombudsman offices take 4 to 6 months to schedule a hearing. Once the 'Award' is passed, the insurance company must pay within 30 days or pay 2% interest above the bank rate.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* City Support Banner */}
                        <div className="my-16 p-10 bg-slate-100 rounded-[3rem] border border-slate-200">
                            <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <MapPin className="h-6 w-6 text-primary" />
                                On-Ground Claims Support
                            </h3>
                            <p className="text-slate-600 mb-8 border-l-2 border-slate-300 pl-4">
                                Dealing with TPAs in Bangalore, Mumbai, or Delhi is stressful. Our local claim officers handle the physical submission and coordination with hospital TPA desks for you.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/locations/bangalore/health-insurance" className="font-bold text-primary hover:underline">Bangalore Specialists</Link>
                                <Link href="/locations/mumbai" className="font-bold text-primary hover:underline">Mumbai Claims Desk</Link>
                                <Link href="/locations/chennai" className="font-bold text-primary hover:underline">Chennai Support</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary"></div>
                            <h3 className="text-4xl font-black mb-4">Don't let them keep your money.</h3>
                            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
                                We represent policyholders against corporate giants. <strong>1,200+ claims reversed last year alone.</strong>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="h-16 px-10 text-xl font-black bg-primary hover:bg-primary/90 flex items-center gap-2">
                                    <Phone className="h-6 w-6" />
                                    Speak to a Claim Expert
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-black border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/contact">Free Claim Audit</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-2xl">
                                <h3 className="text-2xl font-black mb-2 text-slate-900">Rejection Audit</h3>
                                <p className="text-sm text-slate-500 mb-8 pb-4 border-b">Upload your rejection letter. Our specialists will identify the IRDAI violations in 24 hours.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5" />
                                    Moratorium Check
                                </h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    "If your policy is >8 years old, no insurer can reject for PED. If they did, it's a direct violation of IRDAI circular 2019/20. We can help you file a direct regulator complaint."
                                </p>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-[2rem] border border-primary/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <HeartPulse className="h-10 w-10 text-primary" />
                                    <h4 className="text-xl font-bold leading-tight text-slate-900">Health Claim Checklist</h4>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Hospital Discharge Summary</li>
                                    <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> All Diagnostic Reports (Original)</li>
                                    <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Pharmacy Bills + Prescriptions</li>
                                    <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> IRDAI Annexure IV-B</li>
                                </ul>
                                <Button variant="secondary" className="w-full font-black uppercase text-xs tracking-widest shadow-lg">Download Guide</Button>
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
                                "name": "What is the 8 year moratorium period in health insurance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The moratorium period is a continuous 8-year coverage window after which an insurer cannot reject a claim based on non-disclosure of health facts at the time of purchase, except for proven fraud."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How to appeal a rejected health insurance claim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "First, file a formal grievance with the insurer's GRO. If unresolved within 15 days, escalate to IRDAI Bima Bharosa. Finally, approach the Insurance Ombudsman within one year of rejection."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is proportionate deduction in room rent?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "If you occupy a room higher than your policy eligibility, the insurer will proportionately deduct a similar percentage from all medical bill items, not just the room rent."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
