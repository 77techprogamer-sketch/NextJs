import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle2, Car, Bike, Shield, 
  Wrench, Zap, Smartphone, Search, Info, 
  Clock, MapPin, Gauge
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'ICICI Lombard Motor Insurance Guide 2026 | Zero-Dep & Claims',
    description: 'Master ICICI Lombard Car & Bike insurance in 2026. Guide to Zero-Depreciation, Engine Protect, and the InstaCompute claim process via TakeCare app.',
    keywords: [
        'icici lombard car insurance review 2026',
        'zero depreciation add-on icici lombard',
        'icici motor insurance claim process online',
        'instaCompute icici lombard motor insurance',
        'icici bike insurance cashless garage list',
        'engine protect add-on car insurance icici',
        'best car insurance in india 2026'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/icici-motor-insurance',
    }
};

export default function IciciMotorInsuranceGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal uppercase">ICICI Motor</span>
                        </nav>

                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-slate-200">
                                <Car className="h-3 w-3" />
                                2026 Mobility Authority
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 leading-[0.85] tracking-tighter">
                                Drive with <br/> <span className="text-primary italic">Absolute Zero.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium border-l-4 border-primary pl-8 my-10">
                                In a road-incident prone market like India, standard comprehensive insurance isn't enough. <strong>ICICI Lombard Motor Insurance</strong> has pioneered the "Zero Depreciation" era, ensuring that your parts replacement costs are $100%$ covered. This is the expert guide to navigating the 2026 claim landscape.
                            </p>
                        </header>

                        {/* Top Utility Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Search className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">8,500+</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Network Garages</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Zap className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">Instant</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">InstaCompute Payouts</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Smartphone className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">Video</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Self-Survey Claims</p>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                                <Gauge className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-xl font-black mb-1">Top 3</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">GWP Ranking 2026</p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-4xl font-black mt-20 mb-10 text-slate-900 tracking-tight" id="add-ons">
                                1. The Add-On "Must-Haves" for 2026
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A base policy only covers the depreciated value of your vehicle. To get "Real 0" coverage, you need these specific ICICI Lombard add-ons:
                            </p>

                            <div className="space-y-12 my-16">
                                <div className="flex gap-8 group">
                                    <div className="h-20 w-20 rounded-3xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-primary transition-colors duration-500">
                                        <Shield className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Zero Depreciation (Zero-Dep)</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">Standard policies deduct 50% for plastic/fiber and 30% for glass. Zero-Dep ensures ICICI Lombard pays the FULL cost of parts replacement. **Note:** Available for vehicles up to 7 years old.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="h-20 w-20 rounded-3xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100 group-hover:bg-primary transition-colors duration-500">
                                        <Wrench className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Engine Protect Plus</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">Critical for flood-prone cities like Mumbai or Bangalore. Covers engine damage due to water ingression or oil leakage—which is otherwise considered "consequential damage" and rejected.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="h-20 w-20 rounded-3xl bg-green-50 flex items-center justify-center shrink-0 border border-green-100 group-hover:bg-primary transition-colors duration-500">
                                        <Clock className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Roadside Assistance (RSA)</h4>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">24/7 support for towing, flat tires, battery jumpstarts, and even fuel delivery. ICICI Lombard’s RSA is praised for its response time in Tier-1 cities.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-10 text-slate-900 tracking-tight" id="instacompute">
                                2. "InstaCompute": Claims in Your Pocket
                            </h2>
                            <div className="bg-slate-900 text-white p-12 rounded-[4rem] my-12 relative overflow-hidden group shadow-2xl transition-all hover:shadow-primary/10">
                                <Zap className="h-10 w-10 text-primary mb-6" />
                                <h4 className="text-3xl font-black mb-4">Immediate Settlement Authority</h4>
                                <p className="text-slate-400 mb-8 font-medium">For minor repairs (scratches/dents costing under ₹25,000), ICICI Lombard uses a 2026 AI model called **InstaCompute**.</p>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 text-primary" /> Take a 360° video of the car via the app.</li>
                                    <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 text-primary" /> AI calculates the repair cost automatically.</li>
                                    <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 text-primary" /> Claim amount is approved and transferred to your account within hours.</li>
                                </ul>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="claim-process">
                                3. The 2026 Claim Walkthrough
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Whether it's a major accident or a minor bump, follow this protocol to ensure 100% payout:
                            </p>
                            
                            <div className="relative pl-12 border-l-2 border-slate-100 space-y-16 mb-20">
                                <div className="relative">
                                    <div className="absolute -left-[57px] top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-black shadow-xl">1</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Spot Intimation</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Don't move the vehicle unless necessary. Open the TakeCare app and click **'Claim Now'**. Upload photos of the license plate, the damage, and the surroundings.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[57px] top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-black shadow-xl">2</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Pick-up Coordination</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">ICICI provides free towing to the nearest network garage. Ensure you get a "Work Order" copy from the garage manager before leaving.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[57px] top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-black shadow-xl">3</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Virtual Survey</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">A virtual surveyor will inspect the car via video link with the mechanic. No more waiting 3 days for a physical surveyor to visit.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight" id="exclusions">
                                4. How to Avoid Claim Rejection
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Most ICICI Lombard rejections happen due to these three 2026 "Technicalities":
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-20">
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                                    <Smartphone className="h-8 w-8 text-red-500 mx-auto mb-4" />
                                    <h5 className="font-black text-slate-900 mb-2">Lapsed DL</h5>
                                    <p className="text-[10px] text-slate-500 font-bold leading-relaxed uppercase tracking-tighter">If the driver's license was expired on the date of accident, the claim is rejected 100%.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                                    <Info className="h-8 w-8 text-red-500 mx-auto mb-4" />
                                    <h5 className="font-black text-slate-900 mb-2">Commercial Use</h5>
                                    <p className="text-[10px] text-slate-500 font-bold leading-relaxed uppercase tracking-tighter">Using a private car for Uber/Ola without a commercial policy voids your contract.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                                    <Zap className="h-8 w-8 text-red-500 mx-auto mb-4" />
                                    <h5 className="font-black text-slate-900 mb-2">Drunken Driving</h5>
                                    <p className="text-[10px] text-slate-500 font-bold leading-relaxed uppercase tracking-tighter">Illegal levels of alcohol in the driver's blood automatically disqualify any settlement.</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black mt-24 mb-12 text-slate-900 tracking-tight">Expert Motor FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="faq-1">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What is "Consumables Cover"?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Even with Zero-Dep, you have to pay for oil, coolants, nuts, and bolts. Consumables cover ensures ICICI Lombard pays for these recurring items too, making your claim effectively ₹0 out-of-pocket.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-2">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">Can I repair my car at a non-network garage?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Yes, but it will be on a **Reimbursement** basis. You pay the bill first, submit the original invoice to ICICI Lombard, and they will refund the amount within 7-10 working days.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="faq-3">
                                    <AccordionTrigger className="text-left font-black py-8 text-slate-800 hover:text-primary transition-colors text-xl">What happens to my NCB after a claim?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 text-lg font-medium">
                                        Normally, No-Claim-Bonus drops to $0$ after one claim. However, if you have the **NCB Protect** add-on, your bonus remains intact for the first two claims of the year.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Local Expertise Integration */}
                        <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[4rem] my-24 relative overflow-hidden group shadow-xl">
                            <h4 className="text-slate-900 font-black text-2xl mb-4 flex items-center gap-3">
                                <Car className="h-6 w-6 text-primary" />
                                Need a Garage Advocate?
                            </h4>
                            <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed max-w-2xl">
                                Garages often try to overcharge or push for unnecessary repairs. Our team monitors your ICICI claim in the background to ensure only the right work is billed.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">Free Quote Audit</Link>
                                <Link href="/locations/mumbai" className="px-8 py-4 bg-white rounded-2xl border-2 border-slate-200 text-sm font-black text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm">Mumbai Network List</Link>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* High Conversion CTA Section */}
                        <div className="mt-24 p-20 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
                            <h3 className="text-6xl font-black mb-8 leading-none tracking-tighter">Your Car, <br/> <span className="text-primary italic">Fully Protected.</span></h3>
                            <p className="text-slate-400 mb-16 text-3xl font-medium max-w-2xl leading-tight">
                                Because an accident shouldn't be a financial catastrophe.
                                <br/><span className="text-white mt-8 block italic tracking-tighter decoration-primary underline decoration-4 underline-offset-8 transition-all group-hover:underline-offset-12">Expert Setup: ICICI Lombard Mobility Authority.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 flex items-center gap-4 shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Phone className="h-10 w-10" />
                                    Get Expert Consultation
                                </Button>
                                <Button variant="outline" size="lg" className="h-24 px-16 text-3xl font-black border-white/20 text-white hover:bg-white/10 rounded-3xl" asChild>
                                    <Link href="/contact">Renew Now</Link>
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[450px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl hover:shadow-primary/5 transition-all">
                                <h3 className="text-3xl font-black mb-2 text-slate-900 leading-none tracking-tighter">Motor Audit</h3>
                                <p className="text-sm text-slate-500 mb-12 border-b pb-8 uppercase font-black tracking-widest text-[10px]">Instant icici motor Quote</p>
                                <QuoteForm insuranceType="motor_insurance" />
                            </div>

                            <div className="p-12 bg-primary rounded-[4rem] text-primary-foreground shadow-3xl shadow-primary/10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <Search className="h-32 w-32" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 leading-none">Find Cashless <br/>Garages Nearby</h4>
                                <p className="text-sm opacity-80 mb-12 leading-relaxed font-bold tracking-tight">Search ICICI Lombard's 8,500+ network garages in India to minimize your out-of-pocket costs.</p>
                                <Button className="w-full bg-slate-900 text-white font-black hover:bg-slate-800 h-20 rounded-[2.5rem] uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20">Find Garage</Button>
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
                                "name": "What is Zero-Depreciation add-on in ICICI Lombard?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It ensures the insurance company pays the full cost for replacement of parts in case of an accident, without deducting any depreciation on plastic, fiber, or glass components."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How to track ICICI motor insurance claim status?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can track it via the TakeCare app or the official ICICI Lombard website using your claim number and vehicle registration number."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
