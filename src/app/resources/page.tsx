import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, MapPin, Download } from 'lucide-react'

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Resources & Guides | Insurance Support India'
    },
    description: 'Helpful guides, tutorials, and resources for General Insurance policyholders. Claim process, downloads, and local support.',
    keywords: [
        'Insurance Guides',
        'Policy Download Help',
        'Claim Process Tutorial',
        'Insurance Forms Download',
        'General Insurance Claim Process',
        'Duplicate Policy Copy',
        'Insurance Resources India'
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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
        </div>
    )
}
