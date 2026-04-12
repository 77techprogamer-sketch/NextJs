import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, HelpCircle, FileText, Shield, CheckCircle2, Phone, ArrowRight, AlertTriangle } from 'lucide-react'
import { contactConfig } from '@/data/contact'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
    title: {
        absolute: 'How to Download Insurance Policy Copy Online India | LIC, Star Health, HDFC & More (2026 Guide)'
    },
    description: 'Step-by-step guide to download your insurance policy copy online for LIC, Star Health, HDFC ERGO, ICICI Prudential, and General Insurance. Get duplicate policy bond, e-policy PDF, and lost document recovery help.',
    keywords: [
        'Download Insurance Policy Copy Online',
        'Lost Insurance Policy Document India',
        'Duplicate Insurance Policy',
        'How to Get LIC Policy Copy',
        'Insurance e-Policy Download',
        'Policy Bond Replacement India',
        'LIC Policy Bond Download',
        'Star Health Policy Download',
        'HDFC ERGO Policy Copy',
        'ICICI Insurance Policy PDF',
        'General Insurance Policy Download',
        'Lost Policy Bond Recovery',
        'Duplicate Policy Issuance Process',
        'Insurance Policy Document Recovery India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/download-policy-copy',
    },
    openGraph: {
        title: 'How to Download Insurance Policy Copy Online — Complete 2026 Guide',
        description: 'Download your LIC, health, or motor insurance policy copy online. Step-by-step guide for all major insurers.',
        type: 'article',
    }
}

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download Your Insurance Policy Copy Online in India',
    description: 'A comprehensive guide to downloading insurance policy copies from LIC, Star Health, HDFC ERGO, ICICI Prudential, and General Insurance portals.',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Identify Your Insurer Portal',
            text: 'Visit the official website of your insurance company (LIC, Star Health, HDFC ERGO, etc.) and navigate to the customer login section.'
        },
        {
            '@type': 'HowToStep',
            name: 'Login with Your Credentials',
            text: 'Enter your Customer ID, Policy Number, or Registered Mobile Number along with your password or OTP to access your dashboard.'
        },
        {
            '@type': 'HowToStep',
            name: 'Navigate to Policy Section',
            text: 'Go to "My Policies", "Policy Details", or "Download Policy" section in your dashboard.'
        },
        {
            '@type': 'HowToStep',
            name: 'Download Policy PDF',
            text: 'Click "Download Schedule", "View Policy", or "Print Policy" button to get a PDF copy of your insurance policy document.'
        }
    ]
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can I download my LIC policy copy online?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Log in to the LIC customer portal at licindia.in, go to "My Policy" section, and click "View Policy Schedule". You can download the policy bond as a PDF. If you don\'t have login credentials, register using your policy number and date of birth.'
            }
        },
        {
            '@type': 'Question',
            name: 'What should I do if I have lost my original policy bond?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For LIC policies, you need to: (1) publish a public notice in one English and one regional newspaper, (2) submit an Indemnity Bond on non-judicial stamp paper, (3) pay duplicate policy fees at the branch. The duplicate is typically issued in 3-4 weeks. For private insurers, the process is simpler — usually a request through the customer portal or a written application is sufficient.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is a downloaded e-policy legally valid?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. As per IRDAI guidelines, an e-policy (electronic insurance policy) is legally equivalent to a physical policy document. It can be used for claims, nominations, assignments, and all other insurance transactions. All major insurers now issue policies in electronic format by default.'
            }
        }
    ]
};

export default function DownloadPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/resources" className="text-sm text-slate-400 hover:text-primary mb-6 block">
                            ← Back to Resources
                        </Link>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <FileText className="h-4 w-4" />
                            Updated for 2026
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            How to Download Your Insurance <span className="text-primary italic">Policy Copy</span> Online
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                            Lost or misplaced your insurance policy document? Don&apos;t worry — you can download a copy of your policy online from any major insurer in India within minutes. This guide covers LIC, Star Health, HDFC ERGO, ICICI Prudential, General Insurance, and more.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container px-4 mx-auto py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="flex-1 max-w-4xl">

                        {/* LIC Policy Download */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Shield className="h-6 w-6 text-primary" />
                                LIC Policy Copy Download (Most Searched)
                            </h2>
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="text-xl">Method 1: Using LIC Customer Portal</CardTitle>
                                    <CardDescription>Best for policyholders with existing login</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                                        <li>Visit <a href="https://licindia.in" target="_blank" rel="nofollow noreferrer" className="text-primary underline font-medium">licindia.in</a> — the official LIC website.</li>
                                        <li>Click <strong>&quot;Customer Login&quot;</strong> → select <strong>&quot;Registered User&quot;</strong>.</li>
                                        <li>Enter your User ID, Password, and Date of Birth.</li>
                                        <li>Navigate to <strong>&quot;My Policy&quot;</strong> section.</li>
                                        <li>Click <strong>&quot;View Policy Schedule&quot;</strong> and download the PDF.</li>
                                    </ol>
                                    <Button className="mt-2" asChild>
                                        <a href="https://licindia.in" target="_blank" rel="nofollow noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Go to LIC Portal
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="text-xl">Method 2: New Registration on LIC Portal</CardTitle>
                                    <CardDescription>If you don&apos;t have an existing login</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                                        <li>Go to <a href="https://licindia.in" target="_blank" rel="nofollow noreferrer" className="text-primary underline">licindia.in</a> → click <strong>&quot;New User&quot;</strong>.</li>
                                        <li>Enter your Policy Number, Date of Birth, and registered Mobile Number.</li>
                                        <li>Verify via <strong>OTP</strong> sent to your registered mobile.</li>
                                        <li>Create your User ID and Password.</li>
                                        <li>Login and download your policy document from the <strong>&quot;My Policy&quot;</strong> section.</li>
                                    </ol>
                                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mt-4">
                                        <p className="text-amber-800 text-sm flex items-start gap-2">
                                            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                                            <span><strong>Important:</strong> The OTP is sent to the mobile number registered with LIC. If your number has changed, visit your servicing branch with Aadhaar proof to update it first.</span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">Method 3: UMANG App (Government App)</CardTitle>
                                    <CardDescription>Unified Mobile Application for New-age Governance</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                                        <li>Download the <strong>UMANG App</strong> from Google Play Store or Apple App Store.</li>
                                        <li>Register with your Aadhaar-linked mobile number.</li>
                                        <li>Search for <strong>&quot;LIC&quot;</strong> in the services section.</li>
                                        <li>Select <strong>&quot;Policy Details&quot;</strong> and enter your policy number.</li>
                                        <li>View and download your policy schedule and premium payment history.</li>
                                    </ol>
                                </CardContent>
                            </Card>
                        </section>

                        {/* General Insurance */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">General Insurance Policy Download</h2>
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="text-xl">Using the Customer Portal</CardTitle>
                                    <CardDescription>For NIC (National Insurance Company) policyholders</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
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
                                    <CardTitle className="text-xl">Quick Download Without Login</CardTitle>
                                    <CardDescription>For Motor Third Party policies</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-600">
                                        Some policies, especially Motor Third Party, can be downloaded directly using the policy number and chassis/engine number.
                                    </p>
                                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                                        <li>Go to the &quot;Quick Renewal / Download&quot; section on the homepage.</li>
                                        <li>Select &quot;Download Policy&quot;.</li>
                                        <li>Enter your <strong>Policy Number</strong> and Vehicle Registration Number.</li>
                                        <li>Verify with OTP sent to your registered mobile number.</li>
                                    </ol>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Health Insurance */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Health Insurance Policy Download</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { insurer: 'Star Health', url: 'https://www.starhealth.in', portal: 'Customer Zone', steps: 'Login → My Policies → Download' },
                                    { insurer: 'HDFC ERGO', url: 'https://www.hdfcergo.com', portal: 'My Account', steps: 'Login → Policy Summary → View & Download' },
                                    { insurer: 'ICICI Lombard', url: 'https://www.icicilombard.com', portal: 'Customer Portal', steps: 'Login → My Policy → Download Schedule' },
                                    { insurer: 'Care Health', url: 'https://www.careinsurance.com', portal: 'Customer Login', steps: 'Login → Dashboard → Policy Download' },
                                ].map((ins, i) => (
                                    <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">{ins.insurer}</h4>
                                        <p className="text-sm text-slate-600 mb-1"><strong>Portal:</strong> {ins.portal}</p>
                                        <p className="text-sm text-slate-600 mb-3"><strong>Steps:</strong> {ins.steps}</p>
                                        <a href={ins.url} target="_blank" rel="nofollow noreferrer" className="text-primary text-sm font-bold hover:underline">
                                            Visit Portal →
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Lost Physical Policy Bond */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lost Your Original Policy Bond?</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                If you need a <strong>duplicate physical policy bond</strong> (not just a digital copy), the process varies by insurer. For LIC policies, the process involves legal documentation and typically takes 3-4 weeks.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-blue-900 mb-3">LIC Duplicate Policy Bond Process</h3>
                                <ol className="list-decimal pl-5 space-y-2 text-blue-800 text-sm">
                                    <li>Publish a <strong>public notice</strong> in one English newspaper and one regional language newspaper.</li>
                                    <li>Submit an <strong>Indemnity Bond</strong> on non-judicial stamp paper (value depends on sum assured).</li>
                                    <li>Pay the <strong>duplicate policy charges</strong> at your servicing LIC branch.</li>
                                    <li>Wait for <strong>3-4 weeks</strong> for issuance after the newspaper notice period expires.</li>
                                </ol>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                For private insurers (Star Health, HDFC ERGO, etc.), you can typically request a re-issuance through the customer portal or by emailing the customer service team with a copy of your ID proof.
                            </p>
                        </section>

                        {/* Common Issues */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Issues & Solutions</h2>
                            <div className="space-y-4">
                                {[
                                    { issue: 'Mobile number not registered or changed', solution: 'Visit your servicing branch with Aadhaar card to update your mobile number. For LIC, you can also submit Form 3750 at the branch.' },
                                    { issue: 'Policy not showing in portal after login', solution: 'Your policy may be linked to a different User ID. Try searching by policy number. If it still doesn\'t appear, call the insurer\'s helpline to re-link the policy.' },
                                    { issue: 'Old policy from before digital era', solution: 'For LIC policies issued before 2015, you may need to first register the policy on the portal by providing the policy number, DOB, and registered mobile.' },
                                    { issue: 'Portal showing "server error" or maintenance', solution: 'LIC portal experiences heavy traffic, especially around maturity/premium due dates. Try early morning (6-8 AM) or late evening (post 9 PM) for better access.' },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 bg-amber-50 rounded-xl border border-amber-100">
                                        <h4 className="font-bold text-amber-900 mb-1 flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4" /> {item.issue}
                                        </h4>
                                        <p className="text-sm text-amber-800 leading-relaxed">{item.solution}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: 'Is a downloaded e-policy legally valid?', a: 'Yes. As per IRDAI guidelines, an e-policy is legally equivalent to a physical document. It can be used for claims, nominations, and all transactions.' },
                                    { q: 'Can I use the digital copy for claim settlement?', a: 'Yes. For maturity claims, death claims, and health claims, a digital copy is accepted by all insurers. The original policy bond is needed only for LIC maturity claims where the original bond must be surrendered.' },
                                    { q: 'How do I download my policy if I only have the policy number?', a: 'Register on the insurer\'s portal using your policy number, DOB, and registered mobile for OTP verification. For LIC, you can also use the UMANG app or call 1800 233 7827 (toll-free).' },
                                ].map((faq, i) => (
                                    <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                                            <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Need More Help */}
                        <div className="bg-slate-900 rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Still Can&apos;t Find Your Policy?</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                If you bought your policy through an advisor, the portal is down, or the process seems complex — our team handles the entire document recovery for you. From newspaper ad coordination for LIC duplicate bonds to portal navigation for private insurers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/resources/guides/lapsed-policy-revival">
                                        Lost LIC Policy Guide <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[380px]">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                                <h3 className="text-xl font-bold mb-2">Need Help Finding Your Policy?</h3>
                                <p className="text-sm text-slate-500 mb-6">Share your details and we&apos;ll locate your policy and send you the document.</p>
                                <QuoteForm insuranceType="policy_recovery" />
                            </div>

                            <Card className="bg-slate-50 border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-primary flex items-center gap-2 text-base">
                                        <Phone className="h-5 w-5" />
                                        Insurer Helpline Numbers
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 text-sm">
                                        {[
                                            { name: 'LIC (Toll Free)', num: '1800 233 7827' },
                                            { name: 'Star Health', num: '1800 425 2255' },
                                            { name: 'HDFC ERGO', num: '1800 2700 700' },
                                            { name: 'ICICI Lombard', num: '1800 266 9725' },
                                            { name: 'General Insurance (NIC)', num: '1800 345 0330' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center">
                                                <span className="font-medium text-slate-700">{item.name}</span>
                                                <a href={`tel:${item.num.replace(/\s/g, '')}`} className="text-primary hover:underline font-bold">{item.num}</a>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                                <h4 className="font-bold text-green-900 mb-2">Related Guides</h4>
                                <ul className="space-y-2">
                                    {[
                                        { label: 'Lost LIC Policy Recovery Help', href: '/resources/guides/lapsed-policy-revival' },
                                        { label: 'LIC Maturity Claim Process', href: '/resources/guides/maturity-claim-guide' },
                                        { label: 'Policy Revival Masterclass', href: '/resources/guides/lic-revival-maturity-masterclass' },
                                    ].map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-sm text-green-700 hover:text-green-900 font-medium hover:underline">{link.label} →</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
