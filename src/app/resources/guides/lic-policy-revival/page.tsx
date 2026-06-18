import React from 'react';
import { GuideArticleJsonLd } from '@/components/ServerJsonLd';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, History, AlertCircle, Calculator, FileText, ArrowRight, Activity, MapPin, Receipt, ShieldAlert, Sparkles, TrendingUp, HelpCircle, UserCheck } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'How to Revive a Lapsed LIC Policy: A Comprehensive 2026 Guide',
    description: 'Learn how to calculate revival costs, check eligibility, and revive your lapsed LIC policy in 2026. Step-by-step guide on premiums, interest, and health declarations.',
    keywords: [
        'how to revive lapsed lic policy 2026',
        'lic policy revival charges calculator',
        'lic policy revival interest rate 2026',
        'revive lic policy after 5 years',
        'lic health declaration form for revival',
        'lic policy revival quotation online'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lapsed-policy-revival',
    }
};

export default function LicPolicyRevivalGuide() {
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
                            <span className="text-slate-900 font-black tracking-normal uppercase">LIC Policy Revival</span>
                        </nav>

                        <header className="mb-12">
                            <h1 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight tracking-tight">
                                How to Revive a <span className="text-primary">Lapsed LIC Policy</span>: A Comprehensive 2026 Guide
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">
                                A lapsed LIC policy means your life cover is inactive and your financial protection is at risk. However, you can revive your policy at any time within the revival period, provided you meet the company&apos;s health and payment requirements.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <p className="text-blue-900 font-medium">
                                    This guide details how to calculate your revival costs and complete the process smoothly.
                                </p>
                            </div>
                        </header>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <AlertCircle className="h-8 w-8 text-red-600" />
                                1. What Happens When a Policy Lapses?
                            </h2>
                            <p>When premium payments stop, the policy moves into a &quot;lapsed&quot; state.</p>
                            <ul className="space-y-4 my-8">
                                <li className="flex items-start gap-3">
                                    <ShieldAlert className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <span><strong>Loss of Cover:</strong> Your life insurance benefits are no longer active.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <span><strong>Loss of Bonuses:</strong> You stop earning bonuses on your accumulated sum assured.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Receipt className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <span><strong>Financial Penalty:</strong> Revival requires paying all overdue premiums plus interest (currently charged at roughly 9.5% p.a. by LIC).</span>
                                </li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                                <CheckCircle2 className="h-8 w-8 text-primary" />
                                2. Eligibility for Revival
                            </h2>
                            <p>You can revive your policy if:</p>
                            <ol className="space-y-4 my-8">
                                <li>It is within the <strong>5-year revival window</strong> from the date of the first unpaid premium.</li>
                                <li>The policy has not been surrendered for its cash value.</li>
                                <li>You are still insurable (depending on the duration of the lapse, you may need to provide a fresh &quot;Declaration of Good Health&quot;).</li>
                            </ol>

                            <h2 className="text-3xl font-bold mt-16 mb-10 border-l-4 border-primary pl-6">
                                3. The 3-Step Revival Process
                            </h2>
                            
                            <div className="space-y-12">
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-2xl font-bold mb-4">Step 1: Calculate Total Dues</h3>
                                    <p>
                                        Visit the official <a href="https://customer.onlinelic.in/Login.do" className="text-primary hover:underline">LIC Customer Portal</a> or use the LIC mobile app. Enter your policy number to see the &quot;Revival Quotation,&quot; which will detail:
                                    </p>
                                    <ul className="list-disc pl-6 mt-4 text-slate-600">
                                        <li>Total unpaid premiums.</li>
                                        <li>Accrued interest.</li>
                                        <li>Applicable service tax.</li>
                                    </ul>
                                </div>

                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-2xl font-bold mb-4">Step 2: Submit Health Declaration (If Required)</h3>
                                    <p>
                                        If your policy has been lapsed for a long period (usually over 6 months), LIC will require a <strong>Declaration of Good Health</strong>. In some cases, a medical examination by an LIC-empanelled doctor may be mandatory to prove your insurability.
                                    </p>
                                </div>

                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-2xl font-bold mb-4">Step 3: Payment & Approval</h3>
                                    <p>
                                        You can pay the revival amount online via the portal or at any LIC Branch Office. Once the payment is received, the branch will process the revival and send an endorsement letter confirming your policy is active again.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-20 mb-8">Tips for a Faster Revival</h2>
                            <div className="grid md:grid-cols-3 gap-6 my-10">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="font-bold mb-2">Don&apos;t Wait</h4>
                                    <p className="text-sm text-slate-500">Interest accumulates daily. Reviving early saves significant costs.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                    <Activity className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="font-bold mb-2">Consolidate</h4>
                                    <p className="text-sm text-slate-500">Revive multiple lapsed policies at once to minimize paperwork.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                    <UserCheck className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="font-bold mb-2">Use an Advisor</h4>
                                    <p className="text-sm text-slate-500">For complex cases (3+ years lapse), an expert prevents rejections.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-20 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                        Can I revive a policy after 5 years?
                                    </h4>
                                    <p className="text-slate-600 mt-2">Generally, no. Policies lapsed beyond 5 years are considered &quot;terminated.&quot; You would need to speak with an expert to see if special concessions are currently available.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                        Is there any discount on interest?
                                    </h4>
                                    <p className="text-slate-600 mt-2">Occasionally, LIC runs &quot;Revival Campaigns&quot; offering partial interest waivers. We monitor these announcementsâ€”contact us to see if a campaign is currently live.</p>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-16 p-10 bg-slate-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <History className="h-40 w-40" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 relative z-10">Professional Support for Policy Revival</h3>
                            <p className="text-slate-400 mb-10 text-lg relative z-10">Managing paperwork with LIC branches can be time-consuming. We provide professional end-to-end support for policyholders across India.</p>
                            
                            <ul className="space-y-4 mb-10 relative z-10">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Instant Revival Quotation Retrieval</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Branch-level Documentation Assistance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Health Declaration Advocacy</span>
                                </li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                <Button size="lg" className="flex-1 text-lg h-16 bg-primary hover:bg-primary/90 font-bold" asChild>
                                    <a href={`tel:${contactConfig.phone}`}>
                                        <Phone className="mr-2 h-6 w-6" />
                                        Get Help Reviving Your Policy
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="flex-1 text-lg h-16 text-white border-white/20 hover:bg-white/10 font-bold" asChild>
                                    <Link href="/contact">Free Advisor Chat</Link>
                                </Button>
                            </div>
                            <p className="text-xs text-slate-500 mt-6 text-center italic">Expert assistance for 25+ years | Avoid penalty build-ups | Simple online process</p>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Revival Audit</h3>
                                <p className="text-sm text-muted-foreground mb-8">Submit your policy details for an instant calculation of your total revival dues and interest concessions.</p>
                                <QuoteForm insuranceType="claim_support" />
                            </div>

                            <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <MapPin className="h-6 w-6" />
                                    Local LIC Support
                                </h4>
                                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                    We have advisors available for physical document pickup and branch liaison in Bangalore, Mumbai, and Hyderabad.
                                </p>
                                <Link href="/locations" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                                    Find Your City <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* HowTo Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Revive a Lapsed LIC Policy in 2026",
                        "description": "A step-by-step guide on reviving a lapsed life insurance policy from LIC, including calculation of dues, health declarations, and payment steps.",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Calculate Total Dues",
                                "text": "Visit the LIC Customer Portal or mobile app, enter your policy number, and get a Revival Quotation detailing unpaid premiums and interest.",
                                "url": "https://customer.onlinelic.in/Login.do"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Submit Health Declaration",
                                "text": "If the policy has lapsed for over 6 months, submit a Declaration of Good Health (DGH) or undergo a medical exam if required by LIC.",
                                "url": "https://insurancesupport.online/resources/guides/lapsed-policy-revival"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Payment & Approval",
                                "text": "Pay the revival amount online or at any LIC Branch Office. The branch will process the revival and send an endorsement letter.",
                                "url": "https://insurancesupport.online/resources/guides/lapsed-policy-revival"
                            }
                        ],
                        "totalTime": "P3D",
                        "estimatedCost": {
                            "@type": "MonetaryAmount",
                            "currency": "INR",
                            "value": "Variable"
                        }
                    })
                }}
            />
        
            <GuideArticleJsonLd 
                title={(metadata.title as { absolute?: string; default?: string })?.absolute || (metadata.title as string)}
                description={metadata.description as string || ""}
                url={`https://insurancesupport.online/resources/guides/lapsed-policy-revival`}
            />
        </div>
    );
}
