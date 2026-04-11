import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, MapPin, Download, Scale, ShieldCheck, FileCheck, ClipboardList, Hospital, ClipboardCheck, UserCheck, RefreshCw, Award, Phone, ArrowRight, CheckCircle2, GraduationCap, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactConfig } from '@/data/contact'

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Resources & Expert Guides — Claim Recovery, Policy Management | Insurance Support'
    },
    description: 'Master your insurance policies with expert guides written by advisors with 25+ years of experience. Step-by-step claim process tutorials, document checklists, rejection appeal strategies, and local advisor support across India.',
    keywords: [
        'Insurance Guides India',
        'Policy Management Tutorials',
        'Claim Settlement Process',
        'Duplicate Policy Recovery',
        'Insurance Support Resources',
        'Expert Helping Hand Insurance',
        'General Insurance Claim Guide',
        'Insurance Advice India',
        'LIC Claim Process Guide'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources',
    },
}

export default function ResourcesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <BookOpen className="h-4 w-4" />
                            Knowledge Center
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Insurance <span className="text-primary italic">Resources</span> & Expert Guides
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
                            Everything you need to know about managing your insurance policies, filing claims, appealing rejections, and protecting your family&apos;s financial future. Written by certified advisors with 25+ years of experience — not generic content scraped from the internet.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: '11+', label: 'Expert Guides' },
                                { value: '25+ Yrs', label: 'Industry Knowledge' },
                                { value: '15,000+', label: 'Families Supported' },
                                { value: 'Free', label: 'All Resources' },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Our Guides Are Different</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Unlike generic insurance articles, every guide on this page is authored by practicing insurance advisors who deal with these scenarios daily. We don&apos;t just explain the theory — we walk you through the exact forms, common pitfalls, escalation contacts, and timelines based on thousands of real cases handled across India.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { icon: <Award className="h-5 w-5 text-primary" />, text: 'Written by IRDAI-certified advisors with real case experience' },
                                { icon: <CheckCircle2 className="h-5 w-5 text-green-600" />, text: 'Includes exact form numbers, document checklists, and timelines' },
                                { icon: <ShieldCheck className="h-5 w-5 text-blue-600" />, text: 'Updated for 2026 with the latest IRDAI regulations' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                                    {item.icon}
                                    <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Resources */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-3">Essential Insurance Tools</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">Practical resources for the most common insurance needs — from downloading your policy copy to understanding the claim filing process.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <Link href="/resources/general-insurance-claim-process" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                        <FileText className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">Claim Process Guide</CardTitle>
                                    <CardDescription>Step-by-step instructions for filing both cashless and reimbursement claims with General Insurance. Includes a documents-required checklist and TPA contact details.</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link href="/resources/bangalore-insurance-support" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                                        <MapPin className="h-6 w-6 text-green-600" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">Bangalore Support</CardTitle>
                                    <CardDescription>Locate insurance advisors and get doorstep service in Bangalore. Covers Indiranagar, Koramangala, Jayanagar, Whitefield, HSR Layout, and all major areas.</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link href="/resources/download-policy-copy" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                                        <Download className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">Download Policy Copy</CardTitle>
                                    <CardDescription>How to get a duplicate copy of your General Insurance policy instantly. Covers both the customer portal method and the quick download option using your policy number.</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link href="/resources/guides/claim-rejection-appeal" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                                        <ShieldCheck className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">Claim Rejection Help</CardTitle>
                                    <CardDescription>Master the 6-step appeal process for reversing rejected claims. From GRO escalations to the Insurance Ombudsman route.</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link href="/resources/how-it-works" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                                        <BookOpen className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">How It Works</CardTitle>
                                    <CardDescription>Our transparent 4-phase process from free consultation to settlement — covering strategy, paperwork, escalation, and final payout.</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link href="/resources/veteran-advantage" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                                        <Award className="h-6 w-6 text-amber-600" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">The Veteran Advantage</CardTitle>
                                    <CardDescription>Why 25+ years of IRDAI-certified experience matters — inside knowledge of underwriting, claims, and the Ombudsman escalation ecosystem.</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>

                    {/* Expert Guides */}
                    <h2 className="text-3xl font-bold mb-3">Expert Insurance Guides</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">In-depth, step-by-step guides on specific insurance topics — from rejected claim appeals to LIC maturity settlements. Each guide includes form numbers, document checklists, and real-world advice.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "LIC Jeevan Anand (715)", desc: "Expert guide on LIC's bestseller: Whole-life risk cover plus maturity bonuses. The definitive 2026 breakdown of Plan 715 dual benefits.", href: "/resources/guides/lic-jeevan-anand", icon: Award },
                            { title: "LIC Jeevan Lakshya (733)", desc: "Securing your child's future with the 10% annual income benefit and premium waiver. A must-read for education and marriage planning.", href: "/resources/guides/lic-jeevan-lakshya", icon: GraduationCap },
                            { title: "ICICI iHealth Guide", desc: "Master ICICI Lombard's flagship health policy. Covers 'Cashless Everywhere', Unlimited Reset, and wellness reward programs.", href: "/resources/guides/icici-ihealth", icon: ShieldCheck },
                            { title: "Revival & Maturity Masterclass", desc: "How to recover frozen funds from lapsed LIC policies. Handling Form 3762 for missing bonds and Section 194DA TDS rules.", href: "/resources/guides/lic-revival-maturity-masterclass", icon: RefreshCw },
                            { title: "ICICI Motor Excellence", desc: "Expert guide to Car & Bike insurance. Zero-depreciation deep-dive, Engine Protect add-ons, and the InstaCompute claim process.", href: "/resources/guides/icici-motor-insurance", icon: Car },
                            { title: "Claim Rejection Appeal", desc: "The complete 6-step appeal process for reversing a rejected health insurance claim. Covers GRO, IRDAI, and Ombudsman routes.", href: "/resources/guides/claim-rejection-appeal", icon: Scale }
                        ].map((guide, idx) => (
                            <Link key={idx} href={guide.href} className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                                    <CardHeader>
                                        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                                            <guide.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle className="group-hover:text-primary transition-colors text-lg">{guide.title} →</CardTitle>
                                        <CardDescription className="leading-relaxed">{guide.desc}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ + CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Our resource library covers the most common insurance scenarios. But every case is unique. If your situation isn&apos;t covered here, talk to an expert advisor for personalized guidance — completely free.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                    <Link href="/contact">
                                        Get Free Expert Advice <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
