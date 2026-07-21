import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { 
    Phone, 
    CheckCircle2, 
    ShieldCheck, 
    ArrowRight, 
    Sparkles, 
    Scale, 
    FileSearch, 
    AlertCircle, 
    Zap, 
    Clock, 
    Users, 
    HeartHandshake,
    XCircle,
    UserCheck,
    MessageSquare
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Expert Advisor vs. Insurance Portals: Why Advocacy Matters in 2026',
    description: 'Discover why choosing an IRDAI-certified expert advisor is superior to automated portals. Learn about claim advocacy, document audits, and long-term policy support.',
    keywords: [
        'expert insurance advisor vs portal',
        'policybazaar vs insurance advisor',
        'insurance claim advocacy india',
        'rejected insurance claim help',
        'lic policy support expert',
        'why use insurance agent instead of online'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/expert-advisor-vs-portal',
    }
};

export default function ExpertAdvisorVsPortalGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal uppercase">Advisor vs Portal</span>
                        </nav>

                        <header className="mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-wider">
                                <Sparkles className="h-4 w-4" />
                                Advocacy-Led Insurance Support
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight tracking-tight">
                                Why Choose an <span className="text-primary">Expert Advisor</span> Over an Insurance Portal?
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">
                                In a world of automated comparison portals and &quot;one-click&quot; purchases, it is easy to think that buying insurance is just about finding the lowest premium. But what happens when you actually need to use that policy?
                            </p>
                            <div className="bg-slate-900 p-8 rounded-[32px] text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <ShieldCheck className="h-40 w-40" />
                                </div>
                                <p className="text-xl md:text-2xl font-medium relative z-10 leading-relaxed italic">
                                    &quot;While portals are great for buying, <span className="text-primary font-bold">they are not built to support you</span> when things go wrong.&quot;
                                </p>
                            </div>
                        </header>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-16 mb-10 flex items-center gap-3">
                                <Scale className="h-8 w-8 text-primary" />
                                The &quot;Portal&quot; Reality vs. The Expert Advantage
                            </h2>

                            <div className="overflow-x-auto my-10 rounded-3xl border border-slate-100 shadow-xl">
                                <table className="w-full border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="p-6 text-left font-black text-slate-900 border-b border-slate-100">Feature</th>
                                            <th className="p-6 text-left font-black text-slate-400 border-b border-slate-100">Automated Portals</th>
                                            <th className="p-6 text-left font-black text-primary border-b border-slate-100 bg-primary/5">Expert Advisory</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm md:text-base">
                                        <tr>
                                            <td className="p-6 font-bold text-slate-700 border-b border-slate-50">Focus</td>
                                            <td className="p-6 text-slate-500 border-b border-slate-50">Speed and Volume of Sales</td>
                                            <td className="p-6 font-semibold text-slate-900 border-b border-slate-50 bg-primary/5">Claim Resolution & Stability</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold text-slate-700 border-b border-slate-50">Advocacy</td>
                                            <td className="p-6 text-slate-500 border-b border-slate-50">You vs. The Insurer</td>
                                            <td className="p-6 font-semibold text-slate-900 border-b border-slate-50 bg-primary/5">We represent <strong>YOU</strong> vs. Insurer</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold text-slate-700 border-b border-slate-50">Support</td>
                                            <td className="p-6 text-slate-500 border-b border-slate-50">Tiered call center queues</td>
                                            <td className="p-6 font-semibold text-slate-900 border-b border-slate-50 bg-primary/5">Direct access to 25+ yrs expertise</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold text-slate-700 border-b border-slate-50">Complex Cases</td>
                                            <td className="p-6 text-slate-500 border-b border-slate-50">Algorithm-based; often rejected</td>
                                            <td className="p-6 font-semibold text-slate-900 border-b border-slate-50 bg-primary/5">We audit, document, and appeal</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold text-slate-700">Personalization</td>
                                            <td className="p-6 text-slate-500">One-size-fits-all matching</td>
                                            <td className="p-6 font-semibold text-slate-900 bg-primary/5">Tailored risk strategy for life</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-3xl font-bold mt-20 mb-8 flex items-center gap-3 text-red-600">
                                <AlertCircle className="h-8 w-8" />
                                Why &quot;Cheap&quot; Often Costs You More
                            </h2>
                            <p className="mb-10">
                                Portals are designed to show you the lowest premium in seconds. However, they often hide the &quot;fine print&quot;â€”waiting periods, restrictive clauses, and non-disclosure trapsâ€”that lead to claim rejections later on.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 relative group">
                                    <h4 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                                        <XCircle className="h-6 w-6" />
                                        Portal Risks
                                    </h4>
                                    <ul className="space-y-4 text-red-700">
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 mt-1 shrink-0 opacity-50" />
                                            <span>You are a ticket number in a support queue.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 mt-1 shrink-0 opacity-50" />
                                            <span>You navigate complex grievance forms yourself.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 mt-1 shrink-0 opacity-50" />
                                            <span>No one verifies if documents are &quot;claim-ready.&quot;</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-8 bg-primary/5 rounded-[32px] border border-primary/10 relative group">
                                    <h4 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                                        <ShieldCheck className="h-6 w-6 text-primary" />
                                        Expert Advantage
                                    </h4>
                                    <ul className="space-y-4 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                                            <span><strong>Proactive Audits:</strong> Perfect documents <em>before</em> application.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                                            <span><strong>Advocacy:</strong> We escalate to Ombudsman & IRDAI for you.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                                            <span><strong>Policy Revival:</strong> We protect policies you&apos;ve held for years.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-20 mb-8 flex items-center gap-3">
                                <HeartHandshake className="h-8 w-8 text-primary" />
                                Our Promise: We Start Where Portals Stop
                            </h2>
                            <p className="mb-10 text-lg leading-relaxed text-slate-600">
                                We don&apos;t just help you pick a plan. We stand by you for the entire policy lifecycle. Whether it is reviving a lapsed LIC policy, navigating a critical illness claim, or simply understanding your tax benefits, our expertise is your protection.
                            </p>

                            <div className="bg-blue-600 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                    <Phone className="h-64 w-64" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-6">Ready for a higher standard of insurance support?</h3>
                                    <p className="text-blue-100 text-lg mb-8 max-w-2xl">
                                        Speak directly to an IRDAI-certified expert. No scripts, no call centers â€” just real solutions for your peace of mind.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button size="lg" className="h-16 px-8 bg-white text-blue-600 hover:bg-blue-50 font-black text-lg rounded-2xl" asChild>
                                            <a href={`tel:${contactConfig.phone}`}>
                                                <Phone className="mr-2 h-6 w-6" />
                                                Book Free Case Assessment
                                            </a>
                                        </Button>
                                        <Button size="lg" variant="outline" className="h-16 px-8 border-white/20 text-white hover:bg-white/10 font-black text-lg rounded-2xl" asChild>
                                            <Link href="/contact">
                                                <MessageSquare className="mr-2 h-6 w-6" />
                                                Chat with Advisor
                                            </Link>
                                        </Button>
                                    </div>
                                    <p className="mt-8 text-blue-200 text-sm font-medium flex items-center gap-2">
                                        <UserCheck className="h-4 w-4" />
                                        Direct expert access | 100% Transparency | Results-driven advocacy
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                        <FileSearch className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Case Audit</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                    Upload your policy or claim rejection details for a professional audit by our advocacy team.
                                </p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-slate-900 rounded-[40px] text-white shadow-2xl overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Zap className="h-32 w-32" />
                                </div>
                                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <Clock className="h-6 w-6 text-primary" />
                                    Fast-Track Resolution
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Stuck in call center loops? Our direct branch liaison service helps bypass bureaucracy for faster results.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Users className="h-4 w-4 text-primary" />
                                        <span>500+ Claims Recovered</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span>IRDAI Escalation Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Structured Data */}
            <GuideArticleJsonLd 
                title={(metadata.title as string) || "Expert Advisor vs. Insurance Portals"}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/expert-advisor-vs-portal`}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Why is an expert advisor better than an online portal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Expert advisors provide personalized advocacy, document auditing, and claim recovery support that automated portals lack. We represent the policyholder against the insurance company, whereas portals are built for sales volume."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do online insurance portals help with rejected claims?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most portals provide limited call center support and leave you to navigate the grievance process yourself. Expert advisors offer proactive audits and escalate cases to the Ombudsman and IRDAI."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
