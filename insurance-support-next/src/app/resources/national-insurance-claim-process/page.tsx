import { Metadata } from 'next'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, FileText, Phone, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'How to File National Insurance Claim | Step-by-Step Guide (2025)',
    description: 'Simplest guide to file National Insurance claims (Cashless & Reimbursement). Check documents required, download forms, and get claiming support.',
    keywords: ['National Insurance Claim Process', 'NIC Claims', 'Cashless Claim National Insurance', 'Reimbursement Claim NIC', 'National Insurance Claim Form'],
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'How to File National Insurance Claim | Easy Guide',
        description: 'Step-by-step guide for National Insurance claims. Don\'t let paperwork delay your settlement.',
        type: 'article',
    }
}

export default function ClaimProcessPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to File a National Insurance Company Claim',
        description: 'A comprehensive step-by-step guide to filing both cashless and reimbursement claims with National Insurance Company Ltd.',
        step: [
            {
                '@type': 'HowToStep',
                name: 'Notify the Insurer',
                text: 'Inform National Insurance or the TPA immediately upon hospitalization (24 hours for emergency, 48 hours prior for planned).'
            },
            {
                '@type': 'HowToStep',
                name: 'Submit Pre-Auth Form (Cashless only)',
                text: 'Submit the pre-authorization form at the hospital TPA desk.'
            },
            {
                '@type': 'HowToStep',
                name: 'Collect Original Documents (Reimbursement)',
                text: 'Collect all discharge summaries, bills, and prescriptions upon discharge.'
            },
            {
                '@type': 'HowToStep',
                name: 'Submit Claim Documents',
                text: 'Submit the claim form along with original documents to the TPA or National Insurance office within 15 days of discharge.'
            }
        ]
    }

    return (
        <div className="container px-4 py-12 mx-auto max-w-4xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mb-8">
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mb-4">National Insurance Claim Process Guide (2025)</h1>
                <p className="text-xl text-muted-foreground">
                    Filing a claim doesn&apos;t have to be complicated. Whether you need a cashless claim or reimbursement, follow this simple guide to ensure your settlement is fast and hassle-free.
                </p>
            </div>

            <div className="grid gap-8">
                <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Need Immediate Help?</AlertTitle>
                    <AlertDescription>
                        If you are in Bangalore and struggling with a claim rejection or delay, <Link href="/contact" className="underline font-medium">contact a National Insurance expert</Link> for free advice.
                    </AlertDescription>
                </Alert>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Documents Required Checklist
                        </CardTitle>
                        <CardDescription>Keep these ready before filing your claim</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Document Name</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Remark</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Claim Form (Part B)</TableCell>
                                    <TableCell><Badge variant="outline">Mandatory</Badge></TableCell>
                                    <TableCell>Filled and signed by the policyholder</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Discharge Summary</TableCell>
                                    <TableCell><Badge variant="outline">Original</Badge></TableCell>
                                    <TableCell>Issued by the hospital</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Final Hospital Bill</TableCell>
                                    <TableCell><Badge variant="outline">Original</Badge></TableCell>
                                    <TableCell>With detailed breakup</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Payment Receipts</TableCell>
                                    <TableCell><Badge variant="outline">Original</Badge></TableCell>
                                    <TableCell>Proof of payment needed</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Pharmacy Bills</TableCell>
                                    <TableCell><Badge variant="outline">Original</Badge></TableCell>
                                    <TableCell>Must be supported by prescriptions</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">KYC Documents</TableCell>
                                    <TableCell><Badge variant="secondary">Copy</Badge></TableCell>
                                    <TableCell>Aadhar Card / Pan Card & Cancelled Cheque</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Step-by-Step Process</h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium">1. Cashless Claims (Network Hospitals)</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Step 1:</strong> Identify a Network Hospital. National Insurance has tie-ups with thousands of hospitals.</li>
                                    <li><strong>Step 2:</strong> Approach the TPA desk at the hospital with your Health Card and ID proof.</li>
                                    <li><strong>Step 3:</strong> Fill out the Pre-Authorization Form. The hospital will send this to the TPA/Insurer.</li>
                                    <li><strong>Step 4:</strong> Once approved, the insurance company settles the bill directly with the hospital. You only pay for non-medical items (like gloves, food, etc.).</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium">2. Reimbursement Claims (Non-Network Hospitals)</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Step 1:</strong> Admissions generally require you to pay upfront. Inform the TPA within 24 hours of emergency hospitalization.</li>
                                    <li><strong>Step 2:</strong> Collect <strong>ALL originals</strong> (bills, discharge summary, reports) before leaving.</li>
                                    <li><strong>Step 3:</strong> Fill the Claim Form (Part A & B).</li>
                                    <li><strong>Step 4:</strong> Submit documents to the TPA or National Insurance office within 15 days of discharge.</li>
                                    <li><strong>Step 5:</strong> Amount is credited to your bank account after verification (usually 15-30 days).</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <Card className="bg-slate-50 border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-primary flex items-center gap-2">
                            <Phone className="h-5 w-5" />
                            Important Contact Numbers
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">National Insurance Toll Free:</p>
                                <a href="tel:18003450330" className="text-primary hover:underline">1800 345 0330</a>
                            </div>
                            <div>
                                <p className="font-semibold">Support Email:</p>
                                <a href="mailto:customer.relations@nic.co.in" className="text-primary hover:underline">customer.relations@nic.co.in</a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
