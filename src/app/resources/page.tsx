import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, MapPin, Download, Scale, ShieldCheck, FileCheck, ClipboardList, Hospital, ClipboardCheck, UserCheck, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Resources & Guides | Insurance Support'
    },
    description: 'Master your insurance policies with expert guides, claim process tutorials, and local advisor support. 25+ years of experience in solving insurance complexities across India.',
    keywords: [
        'Insurance Guides India',
        'Policy Management Tutorials',
        'Claim Settlement Process',
        'Duplicate Policy Recovery',
        'Insurance Support Resources',
        'Expert Helping Hand Insurance',
        'General Insurance Claim Guide'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources',
    },
}

export default function ResourcesPage() {
    return (
        <div className="container px-4 py-12 mx-auto">
            <h1 className="text-4xl font-bold mb-4">Insurance Resources</h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                Everything you need to know about managing your insurance policies, filing claims, and getting support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <Link href="/resources/general-insurance-claim-process" className="group">
                    <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                <FileText className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">Claim Process Guide</CardTitle>
                            <CardDescription>Step-by-step instructions for cashless and reimbursement claims.</CardDescription>
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
                            <CardDescription>Locate advisors and get doorstep service in Bangalore.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href="/resources/download-policy-copy" className="group">
                    <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                        <CardHeader>
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                                <Download className="h-6 w-6 text-orange-600" />
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">Download Policy</CardTitle>
                            <CardDescription>How to get a duplicate copy of your insurance policy instantly.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            </div>

            <h2 className="text-3xl font-bold mb-8">Expert Insurance Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Claim Rejection Appeal", desc: "How to reverse a rejected health insurance claim.", href: "/resources/guides/claim-rejection-appeal", icon: Scale },
                    { title: "Term vs Life Insurance", desc: "Which one is better for your family?", href: "/resources/guides/term-vs-life-insurance", icon: ShieldCheck },
                    { title: "LIC Maturity Claim", desc: "Step-by-step guide to LIC maturity settlement.", href: "/resources/guides/maturity-claim-guide", icon: FileCheck },
                    { title: "Death Claim Documents", desc: "Checklist of forms for LIC & private claims.", href: "/resources/guides/documents-for-death-claim", icon: ClipboardList },
                    { title: "Cashless Hospitalization", desc: "Protocol for planned and emergency cases.", href: "/resources/guides/cashless-hospitalization-guide", icon: Hospital },
                    { title: "Health Claim Checklist", desc: "Don't miss these documents for reimbursement.", href: "/resources/guides/health-insurance-claim-checklist", icon: ClipboardCheck },
                    { title: "LIC Death Claim", desc: "Detailed LIC-specific death claim settlement.", href: "/resources/guides/death-claim-settlement", icon: UserCheck },
                    { title: "Lapsed Policy Revival", desc: "How to restore an old or lapsed LIC policy.", href: "/resources/guides/lapsed-policy-revival", icon: RefreshCw }
                ].map((guide, idx) => (
                    <Link key={idx} href={guide.href} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                            <CardHeader>
                                <CardTitle className="group-hover:text-primary transition-colors text-lg">{guide.title} →</CardTitle>
                                <CardDescription>{guide.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
