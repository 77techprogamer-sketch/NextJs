import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: {
        absolute: 'Download General Insurance Policy Copy - Quick Guide'
    },
    description: 'Lost your policy document? Learn how to download your General Insurance policy copy online instantly. Step-by-step instructions for 2025.',
    keywords: ['General Insurance Policy Download', 'NIC Policy Copy', 'Lost Insurance Policy', 'Download Car Insurance Policy', 'Health Insurance Soft Copy'],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/download-policy-copy',
    },
    openGraph: {
        title: 'How to Download General Insurance Policy Copy',
        description: 'Get your policy document in minutes. Easy guide for PDF download.',
        type: 'article',
    }
}

export default function DownloadPolicyPage() {
    return (
        <div className="container px-4 py-12 mx-auto max-w-3xl">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                ← Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                How to Download Your General Insurance Policy Copy
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
                Misplaced your physical insurance document? Don&apos;t worry. You can easily download a duplicate PDF copy from the official General Insurance portal. Here is how.
            </p>

            <div className="space-y-8">

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Method 1: Using the Customer Portal</CardTitle>
                        <CardDescription>Best for registered users</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                            <li>Visit the <a href="https://nationalinsurance.nic.co.in" target="_blank" rel="nofollow noreferrer" className="text-primary underline">Official General Insurance Website</a>.</li>
                            <li>Click on <strong>&quot;Customer Login&quot;</strong> in the top menu.</li>
                            <li>Enter your Customer ID / User ID and Password.</li>
                            <li>Once logged in, go to the <strong>&quot;My Policies&quot;</strong> section.</li>
                            <li>Select your active policy and click the <strong>&quot;Download Schedule&quot;</strong> or &quot;Print Policy&quot; button.</li>
                        </ol>
                        <Button className="mt-2" asChild>
                            <a href="https://nationalinsurance.nic.co.in" target="_blank" rel="nofollow noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Go to Official Portal
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Method 2: Without Login (Quick Download)</CardTitle>
                        <CardDescription>If you know your policy number</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Some policies, especially Motor Third Party, can be downloaded directly using the policy number and chassis/engine number.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                            <li>Go to the &quot;Quick Renewal / Download&quot; section on the homepage.</li>
                            <li>Select &quot;Download Policy&quot;.</li>
                            <li>Enter your <strong>Policy Number</strong> and Vehicle Registration Number (for motor).</li>
                            <li>Verify with OTP sent to your registered mobile number.</li>
                        </ol>
                    </CardContent>
                </Card>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
                        <HelpCircle className="h-5 w-5" />
                        Still Can&apos;t Find It?
                    </h3>
                    <p className="text-yellow-700 mb-4">
                        If you bought the policy through us or a specific advisor, it might be faster to contact them directly.
                        They usually keep a record of your policy.
                    </p>
                    <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-100">
                        Contact Support for Help
                    </Button>
                </div>

            </div>
        </div>
    )
}
