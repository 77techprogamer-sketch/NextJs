import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
    ShieldCheck, 
    CheckCircle2, 
    ArrowRight, 
    Phone, 
    Clock, 
    AlertCircle,
    Building2,
    MapPin,
    History,
    FileText,
    TrendingUp,
    Scale,
    Shield,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
    title: 'LIC Agent in Bangalore | Policy, Revival & Claim Support (2026)',
    description: 'Looking for a reliable LIC agent in Bangalore? Expert support for LIC policy revival, maturity claims, and death claim settlement. Doorstep service in Indiranagar, HSR, Jayanagar & more.',
    keywords: [
        'LIC agent in Bangalore',
        'LIC advisor Bangalore',
        'LIC policy revival Bangalore',
        'LIC death claim help Bangalore',
        'LIC maturity claim Bangalore',
        'LIC office JC Road Bangalore',
        'best LIC agent near me Bangalore'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/locations/bangalore/lic-agent',
    }
};

const licBranches = [
    { name: "LIC Branch 611 (DO-1)", location: "J.C. Road, Bangalore" },
    { name: "LIC Branch 612 (DO-1)", location: "Jeevan Sampat, J.C. Road" },
    { name: "LIC Branch 614 (DO-1)", location: "Residency Road" },
    { name: "LIC Branch 617 (DO-1)", location: "Jayanagar 4th Block" },
    { name: "LIC Branch 641 (DO-2)", location: "Jeevan Prakash, J.C. Road" }
];

const licSpecificFAQs = [
    {
        question: "How do I revive my lapsed LIC policy in Bangalore?",
        answer: "If your LIC policy has lapsed for more than 6 months, you need to submit a 'Personal Statement of Health' (Form 680) and pay the arrears with interest. We assist with doorstep collection of forms and coordination with your base branch in Bangalore for a swift revival."
    },
    {
        question: "Why is the J.C. Road office considered the hub for LIC in Bangalore?",
        answer: "The J.C. Road office houses the Divisional Office 1 & 2. Most complex approvals, death claim investigations, and legal appeals (Ombudsman) are processed here. Having a physical presence near J.C. Road allows us to fast-track file movement for our clients."
    },
    {
        question: "How long does a maturity claim take at the LIC J.C. Road office?",
        answer: "Maturity claims at J.C. Road usually take 7-15 working days if the Discharge Voucher (Form 3825) and NEFT mandate are submitted 30 days in advance. We handle the physical submission to ensure your payment hits the bank on the maturity date."
    },
    {
        question: "What should I do if I have lost my original LIC policy bond in Bangalore?",
        answer: "Don't worry. You need to file a 'Loss of Policy' advertisement or submit an Indemnity Bond (Form 3756) on non-judicial stamp paper. We assist Bangalore residents in drafting this bond and getting it franked at the nearest Sub-registrar office."
    },
    {
        question: "Can I pay my LIC premiums at Bangalore One centers?",
        answer: "Yes, Bangalore One centers accept LIC premiums. However, for 'Lapsed Policies' or 'Loan Interest,' you must visit a branch or use authorized portals. We recommend digital payments to avoid the 2-day reconciliation delay at physical centers."
    },
    {
        question: "What is the current interest rate for a loan against an LIC policy in Bangalore?",
        answer: "Currently, LIC charges 9% interest (per annum) for loans against policies, payable half-yearly. This is often cheaper than personal loans. We help calculate your 'Loan Eligibility' and handle the lien marking at the branch."
    },
    {
        question: "How do I change the nominee for my LIC policy in Bangalore?",
        answer: "Nominee changes require Form 3750. In Bangalore, this is typically processed in 2-3 days if you visit the branch. We provide doorstep service for nominee updates, ensuring your family's future is legally secure."
    },
    {
        question: "Can I transfer my LIC policy from another city (like Mumbai) to Bangalore?",
        answer: "Absolutely. Policy transfer ensures you can avail loans and survival benefits locally. You'll need to submit a written request to your current branch. We facilitate the file tracking to ensure it reaches your preferred Bangalore branch (e.g., Indiranagar or Jayanagar) safely."
    },
    {
        question: "What is an 'Early Claim' and why does it take longer in Bangalore?",
        answer: "An 'Early Claim' occurs if the policyholder passes away within 3 years of policy inception/revival. These cases undergo mandatory investigation. Our expertise lies in preparing the 'Inquiry Response' to ensure genuine Bangalore claimants get paid without harassment."
    },
    {
        question: "Why is the NEFT mandate mandatory for LIC payouts now?",
        answer: "LIC has moved away from physical cheques to curb fraud and ensure instant transfers. A cancelled cheque and the NEFT form must be on record. We help senior citizens in Bangalore update their bank details to avoid payment bounces."
    },
    {
        question: "How to track LIC survival benefits if my agent is no longer active?",
        answer: "Many older agents in Bangalore have retired. We act as your 'Service Agent' to track 'Money Back' installments. We check the LIC 'Customer Portal' and branch records to ensure your due amounts are credited on time."
    },
    {
        question: "Why choose Hari Kotian for complex LIC claims in Bangalore?",
        answer: "With 25+ years of experience and deep roots in the Bangalore LIC ecosystem, Hari Kotian understands the 'unwritten' procedural nuances of local branches. We bridge the gap between bureaucratic requirements and your family's urgent needs."
    }
];

export default function BangaloreLICHub() {
    return (
        <div className="bg-white min-h-screen text-slate-900">
            {/* Hero Section */}
            <header className="relative bg-blue-900 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[grid] bg-[length:50px_50px]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)' }} />
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <nav className="flex gap-2 text-primary/80 text-sm font-bold mb-6 uppercase tracking-widest">
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/locations">Locations</Link>
                            <span>/</span>
                            <Link href="/locations/bangalore">Bangalore</Link>
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Expert <span className="text-primary">LIC Agent</span> in Bangalore
                        </h1>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                            25+ years of legacy in securing Bangalore families. Specializing in high-value policy management, maturity claims, and expert death claim appeals at J.C. Road & Residency Road branch offices.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90">
                                <Phone className="mr-2 h-5 w-5" /> 24/7 LIC Support
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold text-white border-white/20 hover:bg-white/10">
                                Download Revival Forms
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Links */}
            <section className="py-8 bg-blue-50 border-b border-blue-100">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {['Policy Revival', 'Maturity Claim', 'Death Claim Support', 'Loan Against Policy', 'Surrender Advisory'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-blue-800 uppercase tracking-widest">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Hub */}
            <main className="container px-4 py-20 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 max-w-4xl">
                        {/* Section: LIC Bangalore Landscape */}
                        <section className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                                Reliable LIC Services Across Bangalore
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Life Insurance Corporation of India (LIC) remains the most trusted institution for millions in Bangalore. From the historic J.C. Road Divisional Offices to the modern branches in HSR and Whitefield, LIC&apos;s footprint is vast. Navigating the paperwork for a <strong>maturity claim</strong> or a <strong>lapsed policy revival</strong> often requires local branch coordination and technical knowledge.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                As your dedicated <strong>LIC agent in Bangalore</strong>, we act as your bridge to the corporation. We ensure your premiums are paid, your claims are processed without delays, and your family&apos;s future stays protected despite any technical hurdles.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-16">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-3xl border border-blue-800 shadow-xl shadow-blue-900/20 relative overflow-hidden group text-white">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <History className="h-20 w-20" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                            <Shield className="h-5 w-5" />
                                            The Legacy of J.C. Road
                                        </h3>
                                        <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                            Bangalore&apos;s LIC history started at the iconic <strong>Jeevan Prakash</strong> building on J.C. Road. We leverage our 25+ years of proximity to DO-1 and DO-2 to track your physical files through the massive LIC archive systems.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["DO-1", "DO-2", "Residency Rd"].map((tag, i) => (
                                                <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-primary border border-white/20 uppercase tracking-tighter">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                                        <Clock className="h-20 w-20 text-slate-900" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">30-Day Maturity Walkthrough</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Don&apos;t wait for your policy to mature. We start the <strong>Form 3825</strong> and NEFT processing 30 days early to ensure the funds hit your bank account on the exact maturity date.
                                        </p>
                                        <ul className="text-xs space-y-2 text-slate-500 font-medium">
                                            <li className="flex items-center gap-2 underline decoration-primary/30">Step 1: DV Signing (Doorstep)</li>
                                            <li className="flex items-center gap-2 underline decoration-primary/30">Step 2: Branch Submission (We Handle)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">
                                Doorstep Support for LIC Claims in Bangalore
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Claim settlement is the most sensitive part of our service. Whether it&apos;s a happy milestone like a maturity payout or a difficult time like a death claim, our experts handle the physical visits to LIC branches so you don&apos;t have to.
                            </p>
                            
                            <div className="bg-slate-50 border-2 border-dashed border-blue-200 rounded-3xl p-8 my-12">
                                <h4 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2">
                                    <Building2 className="h-5 w-5" />
                                    Major Bangalore LIC Branches We Serve:
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {licBranches.map((b, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                            <MapPin className="h-4 w-4 text-primary shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm text-slate-900">{b.name}</p>
                                                <p className="text-xs text-slate-500">{b.location}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">
                                LIC Death Claim Assistance: Beyond Paperwork
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                In 2025, several Bangalore claimants faced delays due to naming mismatches and &apos;Early Claim&apos; investigations. We specialize in preparing the files for <strong>Claims Review Committee (CRC)</strong> meetings at the Residency Road Divisional Office, ensuring that legitimate claims are never rejected based on technicalities.
                            </p>
                            
                            <div className="bg-red-50 border border-red-100 p-8 rounded-3xl my-10 flex gap-6 items-start">
                                <AlertCircle className="h-10 w-10 text-red-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-red-900 mb-2">Claim Rejection Help</h4>
                                    <p className="text-red-800 text-sm leading-relaxed font-medium">
                                        If LIC has rejected your claim alleging non-disclosure, do not lose hope. We provide legal guidance for Insurance Ombudsman filings in Bangalore to recover your hard-earned money.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">
                                Why We Are the Preferred LIC Advisors in Bangalore
                            </h2>
                            <div className="grid gap-4 mb-20">
                                {[
                                    "Physical presence near Divisional Office 1 & 2 for direct file tracking.",
                                    "Specialized experts for Pension & Pradhan Mantri Vaya Vandana Yojana (PMVVY).",
                                    "Doorstep document collection across HSR, Indiranagar, and Jayanagar.",
                                    "Transparent status updates for Policy Loans and Surrenders.",
                                    "98% Success rate in resolving complex documentation gaps."
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 items-start shadow-sm hover:border-primary/20 transition-colors">
                                        <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                        <span className="font-medium text-slate-700 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Author Bio Section */}
                        <AuthorBio />

                        {/* Localized FAQ Section */}
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">
                                Frequently Asked Questions: LIC Bangalore
                            </h2>
                            <div className="space-y-6">
                                {licSpecificFAQs.map((faq, i) => (
                                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex gap-3 text-left">
                                            <span className="text-primary tracking-tighter shrink-0 font-serif">Q.</span>
                                            {faq.question}
                                        </h3>
                                        <div className="flex gap-3">
                                            <span className="font-bold text-green-600 shrink-0 font-serif">A.</span>
                                            <p className="text-slate-600 leading-relaxed font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            {/* Lead Form Widget */}
                            <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                                <h3 className="text-2xl font-bold mb-2 text-slate-900">LIC Expert Near You</h3>
                                <p className="text-sm text-slate-500 mb-8 font-medium italic">Available for home visits across Bangalore.</p>
                                <QuoteForm insuranceType="claim_support" />
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                                            <Building2 className="h-5 w-5" />
                                        </div>
                                        <div className="text-xs">
                                            <p className="font-bold text-slate-900 uppercase tracking-widest">Main Hub</p>
                                            <p>Residency Road, Cross, Bangalore - 560025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Area Badge */}
                            <div className="p-6 bg-slate-900 rounded-3xl text-white">
                                <h4 className="font-bold text-primary mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <MapPin className="h-4 w-4" />
                                    Doorstep Localities
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {["Indiranagar", "HSR Layout", "Jayanagar", "Whitefield", "Marathahalli", "Electronic City", "Koramangala", "BTM Layout"].map((area, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-300 flex items-center gap-1">
                                            <CheckCircle2 className="h-3 w-3 text-primary" />
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline Alert */}
                            <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-600/20">
                                <Calendar className="h-10 w-10 mb-4 text-white/50" />
                                <h3 className="text-xl font-bold mb-2">Policy Maturing?</h3>
                                <p className="text-sm text-blue-100 mb-6 font-medium">
                                    Don&apos;t wait for the intimation letter. Start the process 30 days early to get paid on the exact date.
                                </p>
                                <Button className="w-full h-12 bg-white text-blue-600 hover:bg-slate-50 font-extrabold text-lg">
                                    Check My Policy
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Structured Data Callout */}
            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">
                        Your Trusted <span className="text-primary italic">LIC Partner</span> in Bangalore
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                        Focusing on your protection so you can focus on your legacy. Join thousands of Bangaloreans who trust Hari Kotian for their LIC needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-lg font-bold">
                            Book Consultant Visit
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg bg-white font-bold border-slate-200">
                            Download Claim Checklist
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
