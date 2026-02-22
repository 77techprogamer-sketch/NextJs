import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertCircle, RefreshCcw, Calendar, TrendingUp } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to Revive Lapsed LIC Policy After 5+ Years | 2026 Revival Guide',
    description: 'Stop your LIC money from being lost. Learn the Special Revival Scheme (SRS) to restore your lapsed policy with low interest and full bonus. Expert guidance included.',
    keywords: [
        'how to revive lapsed lic policy after 5 years',
        'lic special revival scheme 2026',
        'lic policy revival interest calculation',
        'restore lapsed insurance policy india',
        'lic policy revival form 680',
        'recover old lic policy money'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides/lapsed-policy-revival',
    }
};

export default function LapsedPolicyRevivalGuide() {
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
                            <span className="text-slate-900 font-medium">Lapsed Policy Revival</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            Don&apos;t Lose Your Hard-Earned Money: <span className="text-primary">LIC Policy Revival</span> Guide
                        </h1>

                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-10 flex gap-4">
                            <TrendingUp className="h-10 w-10 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-amber-900">Did you know?</h4>
                                <p className="text-amber-800 text-sm italic">
                                    &quot;A lapsed LIC policy still holds intrinsic value. Through the right revival scheme, you can restore your full life cover and claim thousands in accumulated bonuses that you might think are lost.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold mt-12 mb-6">What is Policy Lapsation?</h2>
                            <p>
                                An LIC policy lapses when the premium is not paid within the &quot;Grace Period&quot; (usually 30 days for yearly/half-yearly modes). Once a policy is lapsed, the life cover ceases, and you are no longer entitled to maturity benefits or bonuses.
                            </p>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Types of Revival Schemes</h2>
                            <div className="space-y-6 mt-8">
                                <div className="p-6 border border-slate-200 rounded-2xl hover:border-primary/30 transition-colors">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                        <RefreshCcw className="h-5 w-5 text-primary" />
                                        Ordinary Revival
                                    </h3>
                                    <p className="text-slate-600">If the policy is revived within 6 months of the first unpaid premium. No medical requirements are usually needed; just pay the arrears with interest.</p>
                                </div>
                                <div className="p-6 border border-slate-200 rounded-2xl bg-blue-50/50 hover:border-primary/30 transition-colors">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        Special Revival Scheme (SRS)
                                    </h3>
                                    <p className="text-slate-600">Best for policies that have been lapsed for a long time. The date of commencement is shifted, and you pay only one premium according to the new age. This is the most cost-effective way to restore old policies.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Revival Checklist (Form 680)</h2>
                            <p>To start the revival process, you will generally need:</p>
                            <ul className="space-y-4 my-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Personal Statement of Health (DGH) - Form 680</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Arrears of Premium + Late Fee (calculated by the branch)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>Medical Reports (if policy value is high or lapse period is long)</span>
                                </li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-16 mb-6">Why use an expert for revival?</h2>
                            <p>
                                Calculating the interest and identifying the best revival scheme (SRS vs Survival Benefit adjustment) can save you thousands of rupees. We handle the branch visits, document verification, and medical appointments to ensure your policy is back &quot;In-Force&quot; without any hassle.
                            </p>
                        </div>

                        <div className="mt-16 p-8 bg-primary rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Unsure if your policy can be revived?</h3>
                            <p className="text-blue-100 mb-8">Provide us with your policy number and date of last payment. We will get your revival quote directly from the branch within 48 hours for free.</p>
                            <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-blue-50 text-lg h-14">
                                <Phone className="mr-2 h-5 w-5" />
                                Get Free Revival Quote
                            </Button>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-2">Check Policy Status</h3>
                                <p className="text-sm text-muted-foreground mb-6">Enter your details to find out the current status and bonus of your old LIC policy.</p>
                                <QuoteForm insuranceType="lic_revival" />
                            </div>

                            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                <h4 className="font-bold text-green-900 flex items-center gap-2 mb-3">
                                    <AlertCircle className="h-5 w-5" />
                                    Money Back Specialist
                                </h4>
                                <p className="text-green-800 text-sm">
                                    Is your survival benefit (money back) pending? We help you track and claim unpaid survival benefits from old policies.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
