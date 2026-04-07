import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
    ShieldCheck, 
    Stethoscope, 
    Hospital, 
    Heart, 
    CheckCircle2, 
    ArrowRight, 
    Phone, 
    Clock, 
    AlertCircle,
    UserCheck,
    Award,
    MapPin,
    Building2,
    Briefcase
} from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import AuthorBio from '@/components/AuthorBio';
import CityFAQSection from '@/components/CityFAQSection';

export const metadata: Metadata = {
    title: 'Health Insurance Advisor in Bangalore | Expert LIC & Claim Support',
    description: 'Looking for a trusted health insurance advisor in Bangalore? Expert guidance on LIC health plans, cashless claims, and corporate top-ups. Specialized support for IT professionals and senior citizens.',
    keywords: [
        'health insurance advisor in Bangalore',
        'health insurance consultant Bangalore',
        'LIC health insurance Bangalore',
        'best health insurance for IT employees Bangalore',
        'cashless hospitalization Bangalore help',
        'health insurance for senior citizens Bangalore',
        'insurance claim recovery specialist Bangalore'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/locations/bangalore/health-insurance',
    }
};

const hospitalList = [
    { name: "Manipal Hospital", locations: "Old Airport Road, Whitefield, Jayanagar" },
    { name: "Apollo Hospitals", locations: "Bannerghatta Road, Jayanagar, Sheshadripuram" },
    { name: "Fortis Hospital", locations: "Bannerghatta Road, Cunningham Road, Rajajinagar" },
    { name: "Aster CMI Hospital", locations: "Hebbal" },
    { name: "Sakra World Hospital", locations: "Marathahalli - Sarjapur Outer Ring Road" }
];

const bangaloreSpecificFAQs = [
    {
        question: "Why do IT employees in Bangalore need a separate health insurance policy?",
        answer: "Most IT companies in Bangalore provide group health insurance (GHI). However, these corporate policies often have 'Room Rent Caps' or 'Co-payment clauses' that lead to major out-of-pocket expenses during a claim. A personal health policy ensures continuity if you change jobs and provides a higher sum insured for high-cost Bangalore hospitals."
    },
    {
        question: "How do I add a top-up to my existing corporate insurance in Bangalore?",
        answer: "A 'Super Top-up' is the most cost-effective way for Bangalore techies to enhance their cover. For instance, you can add a ₹20 Lakh top-up with a ₹5 Lakh deductible for as low as ₹4,000/year. This ensures that even if you leave your job, your large medical cover remains intact."
    },
    {
        question: "Which are the top hospitals for cashless treatment in Bangalore?",
        answer: "Bangalore has world-class network hospitals like Manipal, Apollo, Fortis, and Sakra. Most major insurers like Star Health, HDFC Ergo, and Care have cashless tie-ups with these hospitals. We help you coordinate the pre-authorization process to ensured a smooth admission."
    },
    {
        question: "Do you provide doorstep coordination for senior citizen health insurance?",
        answer: "Yes, we specialize in senior citizen health insurance in Bangalore. We offer doorstep document collection and physical policy audits in areas like Jayanagar, Malleshwaram, and Basavanagudi to ensure elderly parents don't have to navigate complex online portals."
    },
    {
        question: "What is the process for TPA pre-authorization at Manipal Hospital Old Airport Road?",
        answer: "Manipal Hospital has a dedicated TPA desk. For planned surgeries, you must submit the 'Intimation Letter' 48 hours in advance. Our local coordinators physically follow up with the TPA desk to expedite approvals, often securing them in under 3 hours."
    },
    {
        question: "How can I get the latest list of network hospitals for Star Health in Bangalore?",
        answer: "The hospital network changes frequently. We maintain a real-time list of 500+ network hospitals in Bangalore for Star Health, HDFC Ergo, and Care Insurance. Contact us for the latest PDF for your specific pincode."
    },
    {
        question: "What should I do if my health insurance claim is rejected in Bangalore?",
        answer: "If a Bangalore-based TPA rejects your claim, do not sign the discharge papers without a 'Medical Necessity Note' from your doctor. We specialize in appealing rejected claims at the Insurance Ombudsman office on Residency Road."
    },
    {
        question: "Does health insurance cover maternity and dental in Bangalore?",
        answer: "Maternity cover usually has a 2-4 year waiting period in Bangalore. Some new-age plans for IT employees offer 'Day 1' maternity. Dental is usually covered only if it involves hospitalization due to an accident."
    },
    {
        question: "How to claim 80D tax benefits for my parents living in Bangalore?",
        answer: "You can claim up to ₹50,000 under Section 80D for health insurance premiums paid for parents (above 60). We provide the specific 'Section 80D Certificate' along with your policy bond during our doorstep delivery."
    },
    {
        question: "Can I port my health insurance from another city to Bangalore?",
        answer: "Yes, you can port without losing 'Waiting Period' credits. Porting to a Bangalore-centric plan is recommended to ensure higher 'Room Rent' limits, matching the local hospital charges in Electronic City or Whitefield."
    },
    {
        question: "How can I upgrade my existing LIC health policy in Bangalore?",
        answer: "If you have an older LIC health plan like Jeevan Arogya, we help you understand the 'Fixed Benefit' payouts vs 'Indemnity' plans. We can advise on adding top-up covers to enhance your protection without high premiums."
    },
    {
        question: "What is the 'Insurance Support' advantage at hospital discharge?",
        answer: "The final discharge approval usually takes 4-6 hours. Our coordinators coordinate with the hospital billing department to ensure documents aren't stuck, helping Bangalore families get home faster."
    },
    {
        question: "How do I choose the best health insurance advisor in Bangalore?",
        answer: "A good health insurance advisor in Bangalore should have deep knowledge of local hospital networks, TPA desk procedures at places like Apollo or Manipal, and a physical presence to assist with doorstep documentation and dispute resolutions."
    },
    {
        question: "Can a health insurance advisor in Bangalore help with corporate policy disputes?",
        answer: "Yes, as an experienced health insurance advisor in Bangalore, we often mediate between corporate HRs, TPA desks, and employees to ensure seamless admission during emergencies, bypassing red tape safely."
    },
    {
        question: "Is it worth paying a premium to a health insurance advisor in Bangalore instead of buying online?",
        answer: "We do not charge extra premiums. As an IRDAI-certified health insurance advisor in Bangalore, we get remunerated by the insurer. You pay the exact same premium as online, but you gain our 25+ years of local claim settlement expertise completely free of charge."
    },
    {
        question: "Can a health insurance advisor in Bangalore help with porting my policy?",
        answer: "Absolutely. A dedicated health insurance advisor in Bangalore will evaluate the local room rent caps and help port your policy to a provider like HDFC Ergo or Star Health without losing your crucial waiting period benefits."
    }
];

export default function BangaloreHealthHub() {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* Hero Section */}
            <header className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
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
                            #1 Trusted <span className="text-primary">Health Insurance Advisor</span> in Bangalore
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                            Expert guidance to secure your family&apos;s health in India&apos;s Silicon Valley. Specialized in LIC health products, cashless claim recovery, and personalized insurance audits.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20">
                                <Phone className="mr-2 h-5 w-5" /> Free Expert Consultation
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold text-white border-white/20 hover:bg-white/10">
                                View Network Hospitals
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Trust Signals */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex items-center gap-4">
                            <UserCheck className="h-10 w-10 text-primary" />
                            <div>
                                <p className="font-bold text-lg leading-tight text-slate-900">IRDAI Certified</p>
                                <p className="text-sm text-slate-500">Government Authorized</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Hospital className="h-10 w-10 text-primary" />
                            <div>
                                <p className="font-bold text-lg leading-tight text-slate-900">500+ Hospitals</p>
                                <p className="text-sm text-slate-500">Cashless Network</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Award className="h-10 w-10 text-primary" />
                            <div>
                                <p className="font-bold text-lg leading-tight text-slate-900">25+ Years</p>
                                <p className="text-sm text-slate-500">Industry Expertise</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Heart className="h-10 w-10 text-primary" />
                            <div>
                                <p className="font-bold text-lg leading-tight text-slate-900">98% Success</p>
                                <p className="text-sm text-slate-500">Claim Approval Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Hub */}
            <main className="container px-4 py-20 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 max-w-4xl">
                        {/* Section: Why Bangalore Needs Specialized Advice */}
                        <section className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                                Navigating Health Insurance in India&apos;s Tech Capital
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Bangalore is home to some of the best medical facilities in the world, from the sprawling multi-specialty centers like Manipal and Apollo to specialized institutes like NIMHANS and Jayadeva. However, with world-class care comes high costs. Medical inflation in Bangalore is rising at 12-15% annually, making a robust health insurance strategy a financial necessity.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                As independent <strong>health insurance advisors in Bangalore</strong>, we don&apos;t just sell policies; we build safety nets. Whether you are an IT professional in Whitefield or a senior citizen in Jayanagar, your insurance needs are unique.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-16">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <Briefcase className="h-20 w-20 text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                            <ShieldCheck className="h-5 w-5" />
                                            IT Corridor Protection Plan
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                            Specialized for techies in <strong>Manyata</strong>, <strong>Bagmane</strong>, and <strong>Electronic City</strong>. We map your corporate GHI gaps and setup &quot;Super Top-ups&quot; that act as a primary cover if you switch companies or face layoffs.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["E-City", "Whitefield", "Bellandur"].map((tag, i) => (
                                                <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/20 uppercase tracking-tighter">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                                        <MapPin className="h-20 w-20 text-slate-900" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Pincode-level Doorstep Audit</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            No more online guesswork. We visit your home in <strong>HSR (560102)</strong>, <strong>Koramangala (560034)</strong>, or <strong>Indiranagar (560038)</strong> for a free physical audit of your existing policy bonds.
                                        </p>
                                        <ul className="text-xs space-y-2 text-slate-500 font-medium">
                                            <li className="flex items-center gap-2 underline decoration-primary/30">560001 - 560100 Covered</li>
                                            <li className="flex items-center gap-2 underline decoration-primary/30">Same-day Document Pickup</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">
                                Comprehensive Health Coverage for Bangalore Families
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Securing a robust family floater health insurance plan in Bangalore requires an intimate understanding of local pediatric, maternity, and emergency care costs. Corporate hospitals like Cloudnine and Motherhood have specialized—and often premium—pricing structures that can easily exhaust a standard policy&apos;s limits. As your dedicated <strong>health insurance advisor in Bangalore</strong>, we help you structure family floater policies that offer adequate room rent limits for these premium hospitals without exorbitant premium spikes. We analyze your family&apos;s medical history line-by-line, ensure essential pediatric consultations and vaccination covers are properly evaluated, and select general insurers with the most reliable local TPA networks. 
                            </p>

                            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">
                                Senior Citizen Health Insurance: A Localized Bangalore Approach
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Finding the right health cover for elderly parents living in Bangalore—especially those managing pre-existing conditions like diabetes or hypertension—can be uniquely daunting. Many older policies carry severe co-payment clauses and unreasonable room sub-limits. We specialize in comprehensive senior citizen health insurance audits. Our team physically checks on clients in classic residential neighborhoods like <strong>Malleswaram, Basavanagudi, and Jayanagar</strong> to review existing policy bonds. We decode the complex fine print regarding cataract limits, joint-replacement waiting periods, or robotic surgery caps, and help upgrade coverage to modern, comprehensive plans (such as Star Health Assure or Care Supreme). Best of all, our white-glove doorstep service ensures your parents never have to struggle with navigating confusing online health portals or customer care IVR systems.
                            </p>

                            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">
                                Overcoming Local Claim Issues in Bangalore Hospitals
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-16">
                                The most significant pain point for patients in Bangalore is claim rejection or partial settlement due to &quot;non-disclosure of pre-existing diseases&quot; or &quot;unreasonable billing&quot; by hospitals. It is highly common for a TPA desk in prominent hubs like Marathahalli or Hebbal to arbitrarily deny specific consumable charges or PPE kits. Having an expert, street-smart <strong>health insurance advisor in Bangalore</strong> by your side fundamentally shifts the dynamic of power. We intervene directly with the local TPA desk, provide the mandatory &quot;Medical Necessity&quot; justifications directly from treating doctors, and fiercely challenge unfair proportionate deductions. If an insurance claim is wrongly repudiated by the insurer, we meticulously prepare the grievance file and guide you through navigating the legal appeal at the Insurance Ombudsman office situated locally on Residency Road, ensuring justice, peace of mind, and financial recovery.
                            </p>

                            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                                Cashless Hospitalization & Claim Support in Bangalore
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                The real value of insurance is felt at the hospital TPA desk. We provide end-to-end coordination for cashless claims across the city.
                            </p>
                            <div className="bg-slate-900 rounded-3xl p-8 my-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Hospital className="h-32 w-32" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-6 text-primary">Major Network Hospitals Covered:</h4>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {hospitalList.map((h, i) => (
                                            <div key={i} className="flex gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                                                <div>
                                                    <p className="font-bold">{h.name}</p>
                                                    <p className="text-xs text-slate-400">{h.locations}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">
                                LIC Health Plans: The Trust of LIC in Bangalore
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Many Bangaloreans prefer the sovereign guarantee of LIC. We help you navigate LIC health products like <strong>Jeevan Arogya</strong> and <strong>Cancer Cover</strong>. These are fixed benefit plans that compliment your regular mediclaim by providing cash for lost income or supplementary bills.
                            </p>
                            <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl my-10 flex gap-6 items-start">
                                <Clock className="h-10 w-10 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-2 font-serif uppercase tracking-widest">Resolution Timeline</h4>
                                    <p className="text-blue-800 text-sm leading-relaxed">
                                        For LIC Health Claims in Bangalore, we typically see a settlement cycle of 15-20 days once documents are submitted at the Residency Road or J.C. Road branch offices. We handle the follow-ups personally.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">
                                Why Choose Us as Your Health Insurance Advisor?
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                With over 25 years of experience in the Bangalore insurance landscape, we bring a level of expertise that digital aggregators simply cannot match.
                            </p>
                            <div className="grid gap-4 mb-20">
                                {[
                                    "Physical presence near LIC HQ at Residency Road for fast coordination.",
                                    "Deep understanding of Bangalore-specific hospital billing patterns.",
                                    "Specialized support for senior citizens who struggle with online apps.",
                                    "Unbiased advice: We prioritize your coverage over policy commissions.",
                                    "98% claim approval rate through expert documentation filing."
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 items-center">
                                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Author Bio Section */}
                        <AuthorBio />

                        {/* Localized FAQ Section */}
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">
                                Bangalore Health Insurance FAQs
                            </h2>
                            <div className="space-y-6">
                                {bangaloreSpecificFAQs.map((faq, i) => (
                                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex gap-3 text-left">
                                            <span className="text-primary tracking-tighter shrink-0">Q.</span>
                                            {faq.question}
                                        </h3>
                                        <div className="flex gap-3">
                                            <span className="font-bold text-green-600 shrink-0">A.</span>
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
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                                <h3 className="text-2xl font-bold mb-2 text-slate-900">Get a Free Audit</h3>
                                <p className="text-sm text-slate-500 mb-8 font-medium">Schedule a doorstep visit or a quick call with our Bangalore experts.</p>
                                <QuoteForm insuranceType="health_insurance" />
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                            <Building2 className="h-5 w-5" />
                                        </div>
                                        <div className="text-xs">
                                            <p className="font-bold text-slate-900">Bangalore Office</p>
                                            <p>Bahubali Nagar, Jalahalli, Bengaluru, Karnataka 560013</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Area Badge */}
                            <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                                <h4 className="font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <MapPin className="h-4 w-4" />
                                    Active Hubs
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Whitefield", "HSR Layout", "Indiranagar", "Jayanagar", "Electronic City", "Koramangala", "Bannerghatta"].map((area, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold text-slate-600">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency Callout */}
                            <div className="p-8 bg-red-600 rounded-3xl text-white shadow-xl shadow-red-600/20">
                                <AlertCircle className="h-10 w-10 mb-4 text-white/80" />
                                <h3 className="text-xl font-bold mb-2">Claim Denied Today?</h3>
                                <p className="text-sm text-red-100 mb-6">
                                    Is the TPA desk refusing your cashless request? Call us now for immediate coordination.
                                </p>
                                <Button className="w-full h-12 bg-white text-red-600 hover:bg-slate-50 font-extrabold text-lg">
                                    94480 34850
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Bottom CTA */}
            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                        Don&apos;t Leave Your <span className="text-primary italic">Family&apos;s Health</span> to Chance
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                        Join 5000+ families in Bangalore who trust our IRDAI-certified expertise for their LIC and Health insurance needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-lg">
                            Schedule a Consultation
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg bg-white">
                            Download Claim Checklist
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
