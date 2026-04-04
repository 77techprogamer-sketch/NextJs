import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from '@/components/QuoteForm';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions — Insurance Claims, Policies & Recovery | Insurance Support',
    description: 'Find detailed answers to common questions about health insurance claims, LIC policy revival, motor insurance disputes, rejected claim appeals, and more. Expert advice from 25+ years of experience.',
    keywords: [
        'insurance FAQ India',
        'health insurance claim questions',
        'LIC policy revival FAQ',
        'insurance claim rejection help',
        'motor insurance claim process',
        'insurance ombudsman process FAQ',
        'insurance advisor questions India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/faq'
    }
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What can I do if my insurance claim was rejected?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Read the rejection letter carefully to identify the clause cited. Gather missing evidence including a Medical Necessity Certificate. File an internal grievance with the insurer\'s GRO (15-day response window). If unresolved, escalate to IRDAI Bima Bharosa or the Insurance Ombudsman. Professional claim recovery specialists can help reverse rejections based on technicalities.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I revive a lapsed LIC policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A lapsed LIC policy can generally be revived within 5 years of the first unpaid premium. You need to pay accumulated arrears with penalty interest and submit a Declaration of Good Health (Form 680). For policies lapsed beyond 5 years, Special Revival Schemes (SRS) may be available that shift the commencement date.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the waiting period in health insurance?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Health insurance plans typically have: 30-day initial waiting period for all illnesses (except accidents), 2-4 year waiting period for pre-existing conditions, and a 24-month waiting period for specific ailments like cataracts, hernias, and joint replacements.'
            }
        },
        {
            '@type': 'Question',
            name: 'How long does an insurance claim settlement take in India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cashless health claims are settled during hospitalization (2-6 hours for approval). Reimbursement claims take 15-30 days after document submission. LIC maturity claims settle in 15-30 days. Death claims settle in 15-30 days (normal) or 90-180 days (if investigated for early death within 3 years).'
            }
        }
    ]
};

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <HelpCircle className="h-4 w-4" />
                            Expert Knowledge Base
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                            Detailed answers and deep dives into common insurance queries — written by advisors with 25+ years of hands-on claims experience. Not generic copy from a portal, but real-world knowledge from thousands of cases.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="flex-1 max-w-4xl">
                        {/* Health Insurance & Claims */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Health Insurance & Claims</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="health-1">
                                    <AccordionTrigger className="text-left font-semibold">What can I do if my insurance claim was rejected?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>If your claim is rejected, do not panic. The first step is to carefully read the rejection letter to understand the exact clause the TPA has cited (e.g., non-disclosure, waiting period, non-medical expenses).</p>
                                        <p>We recommend you contact an expert advisor immediately to draft an appeal pointing out medical facts. The insurer&apos;s Grievance Redressal Officer (GRO) is legally required to respond within 15 days. If that fails, you can escalate to the IRDAI Bima Bharosa portal or approach the Insurance Ombudsman — a zero-cost, semi-judicial process where no lawyer is required.</p>
                                        <p>Our team has successfully reversed hundreds of health claim rejections, particularly those based on alleged non-disclosure of pre-existing conditions where the condition was either immaterial to the hospitalization or was not properly asked during the proposal stage.</p>
                                        <Link href="/resources/guides/claim-rejection-appeal" className="text-primary font-medium hover:underline block mt-2">Read our complete Claim Recovery guide →</Link>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="health-2">
                                    <AccordionTrigger className="text-left font-semibold">What is the waiting period in health insurance?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>Health insurance plans typically have multiple layers of waiting periods that policyholders often confuse:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Initial Waiting Period (30 days):</strong> No claims are payable for any illness during the first 30 days after issuance, except for accidental injuries.</li>
                                            <li><strong>Pre-Existing Disease (PED) Waiting Period (2-4 years):</strong> Conditions you already have at the time of buying the policy (diabetes, hypertension, thyroid, etc.) are covered only after this waiting period expires.</li>
                                            <li><strong>Specific Illness Waiting Period (24 months):</strong> Certain named conditions like cataracts, hernias, tonsillectomies, adenoids, and joint replacements have a mandatory 24-month wait.</li>
                                        </ul>
                                        <p>Many claim rejections occur because policyholders are unaware of these waiting periods. Our advisors help you understand exactly when each condition becomes claimable under your specific policy wording.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="health-3">
                                    <AccordionTrigger className="text-left font-semibold">What is the difference between cashless and reimbursement claims?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p><strong>Cashless:</strong> Available at &quot;network hospitals&quot; empanelled with your insurer. The hospital bill is settled directly by the insurance company — you pay nothing except non-medical consumables. Requires pre-authorization from the TPA desk before or during admission.</p>
                                        <p><strong>Reimbursement:</strong> Available at any hospital. You pay the entire bill upfront, collect all original documents (discharge summary, itemized bills, payment receipts), and submit them to the insurer within 15 days. The approved amount is credited to your bank account in 15-30 days.</p>
                                        <p>Many families lose money on reimbursement claims because they fail to collect original documents at discharge or miss the submission deadline. We provide a pre-discharge checklist and handle the entire submission for you.</p>
                                        <Link href="/resources/guides/cashless-hospitalization-guide" className="text-primary font-medium hover:underline block mt-2">Read our Cashless Hospitalization Guide →</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        {/* Life Insurance & LIC */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Life Insurance & LIC</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="lic-1">
                                    <AccordionTrigger className="text-left font-semibold">How do I revive a lapsed LIC policy?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>A lapsed policy can generally be revived within 5 years from the date of the first unpaid premium. You will need to pay the accumulated arrears along with a penalty interest, and you may need to submit a Declaration of Good Health (Form 680).</p>
                                        <p>For policies lapsed beyond 5 years, LIC periodically announces <strong>Special Revival Schemes (SRS)</strong> that effectively shift the commencement date of the policy, allowing you to revive it by paying just one premium calculated at your current age. This is often the most cost-effective route for very old policies.</p>
                                        <p>We specialize in revival cases that branches initially refuse — including policies lapsed for 10-15 years. A thorough understanding of LIC&apos;s internal circulars and revival campaign timelines allows us to recover value that most agents consider lost.</p>
                                        <Link href="/resources/guides/lapsed-policy-revival" className="text-primary font-medium hover:underline block mt-2">Read our complete Policy Revival guide →</Link>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lic-2">
                                    <AccordionTrigger className="text-left font-semibold">What happens if I lose my LIC policy bond?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>A lost policy bond does not mean your money is lost. LIC has a well-established process for issuing duplicate bonds:</p>
                                        <ol className="list-decimal pl-6 space-y-2">
                                            <li>Place an advertisement in one English newspaper and one regional language newspaper in the locality of the branch.</li>
                                            <li>Submit an <strong>Indemnity Bond</strong> on non-judicial stamp paper (value depends on the sum assured).</li>
                                            <li>Pay the duplicate policy charges to the servicing LIC branch.</li>
                                            <li>Wait for 3-4 weeks for the issuance of the duplicate bond.</li>
                                        </ol>
                                        <p>We handle the entire process including the legal drafting of the indemnity bond, newspaper advertisement coordination, and branch submissions — saving you multiple trips and legal fees.</p>
                                        <Link href="/guides/lost-lic-policy-help" className="text-primary font-medium hover:underline block mt-2">See our Lost Policy Support steps →</Link>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lic-3">
                                    <AccordionTrigger className="text-left font-semibold">How is LIC maturity amount credited to my account?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>LIC sends a &quot;Maturity Intimation&quot; letter approximately 2 months before the date of maturity. You need to submit the original policy bond, a signed Discharge Voucher (Form 3825), a cancelled cheque (for NEFT mandate), and photocopies of your Aadhaar and PAN card.</p>
                                        <p>If all documents are submitted on time, the maturity amount — including the Sum Assured plus accumulated bonuses — is credited directly to your linked bank account within 7-15 working days of the maturity date. We recommend starting the process 30 days in advance to avoid processing delays.</p>
                                        <Link href="/resources/guides/maturity-claim-guide" className="text-primary font-medium hover:underline block mt-2">Read the full Maturity Claim Guide →</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        {/* Motor Insurance */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Motor Insurance</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="motor-1">
                                    <AccordionTrigger className="text-left font-semibold">Can I claim motor insurance if the accident was my fault?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p><strong>Own-Damage (OD) claims:</strong> Yes, you can claim for damage to your own vehicle even if the accident was your fault, provided you have a Comprehensive policy (not just Third-Party). Your No Claim Bonus (NCB) discount will be affected, but the repair costs are covered up to your IDV (Insured Declared Value).</p>
                                        <p><strong>Third-Party (TP) claims:</strong> If you damaged another person or their property, the third-party liability component of your policy covers the legal and compensation costs. This is mandatory under the Motor Vehicles Act.</p>
                                        <p>Key exceptions include driving under the influence of alcohol, driving without a valid license, or using the vehicle for purposes not specified in the policy (e.g., commercial use on a private vehicle policy).</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="motor-2">
                                    <AccordionTrigger className="text-left font-semibold">What should I do immediately after a car accident for insurance?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>Follow these critical steps to protect your insurance claim:</p>
                                        <ol className="list-decimal pl-6 space-y-2">
                                            <li><strong>Document the scene:</strong> Take photos and videos of all vehicle damage, the surroundings, and any injuries.</li>
                                            <li><strong>File an FIR</strong> at the nearest police station within 24 hours (mandatory for all third-party claims and theft).</li>
                                            <li><strong>Notify your insurer</strong> within 24-48 hours through their toll-free number, app, or your advisor.</li>
                                            <li><strong>Do not move the vehicle</strong> for major damage — wait for the surveyor or get a spot survey from the insurer&apos;s mobile app.</li>
                                            <li><strong>Get repairs done only at authorized garages</strong> or network garages for cashless repair settlement.</li>
                                        </ol>
                                        <p>Delayed intimation to the insurer is one of the top reasons for motor claim rejection. We can help you navigate the entire process from FIR to repairs.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        {/* General / Process */}
                        <section className="mb-12 pt-8 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">General & Process Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="gen-1">
                                    <AccordionTrigger className="text-left font-semibold">How long does an insurance claim settlement take in India?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>Settlement timelines vary significantly by claim type:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Cashless health claims:</strong> 2-6 hours for TPA approval; settlement during hospitalization</li>
                                            <li><strong>Reimbursement health claims:</strong> 15-30 working days after submission of complete documents</li>
                                            <li><strong>LIC maturity claims:</strong> 7-15 working days from maturity date (if documents pre-submitted)</li>
                                            <li><strong>LIC death claims (normal):</strong> 15-30 days after submission of complete documents</li>
                                            <li><strong>LIC death claims (early/investigated):</strong> 90-180 days due to mandatory investigation within 3 years of policy commencement</li>
                                            <li><strong>Motor OD claims:</strong> 7-21 days (cashless repair) or 15-30 days (reimbursement)</li>
                                        </ul>
                                        <p>If your claim is stuck beyond these timelines, you are legally entitled to escalate. Our team tracks each claim and proactively escalates delayed cases.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="gen-2">
                                    <AccordionTrigger className="text-left font-semibold">What is the Insurance Ombudsman and do I need a lawyer?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>The Insurance Ombudsman is a quasi-judicial body established by the Government of India and IRDAI to resolve insurance disputes without the need for expensive and time-consuming court proceedings. Key facts:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>No lawyer needed:</strong> The process is designed for individual policyholders and does not require legal representation.</li>
                                            <li><strong>Zero cost:</strong> There are no fees to file a complaint with the Ombudsman.</li>
                                            <li><strong>Binding on insurer:</strong> The Ombudsman&apos;s award is binding on the insurance company (but not on the policyholder — you retain the right to pursue civil remedies).</li>
                                            <li><strong>Jurisdiction:</strong> Claims up to ₹30 lakhs are covered. For higher amounts, consumer courts are the appropriate forum.</li>
                                        </ul>
                                        <p>We prepare and file Ombudsman complaints on your behalf, including the &apos;Annexure VI-A&apos; documentation required for admission of the case.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="gen-3">
                                    <AccordionTrigger className="text-left font-semibold">Do you charge for your advisory services?</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed space-y-4">
                                        <p>Our initial consultation is always free. For ongoing services:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>New policy purchase:</strong> No additional charge to you — advisors are compensated by insurer commissions as per IRDAI norms.</li>
                                            <li><strong>Claim support &amp; recovery:</strong> Our standard advisory support for document collection and submission is included as part of our relationship.</li>
                                            <li><strong>Complex escalations (Ombudsman/legal):</strong> Discussed on a case-by-case basis depending on the claim value and complexity.</li>
                                        </ul>
                                        <p>We believe in transparency — there are never any hidden charges, and we will always explain our fee structure upfront before commencing any engagement.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        {/* CTA */}
                        <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h3>
                            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
                                Can&apos;t find the answer you&apos;re looking for? Our expert advisors are available for a free one-on-one consultation to discuss your specific situation in detail.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="h-14 text-lg px-8" asChild>
                                    <Link href="/contact">
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Ask an Expert
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-14 text-lg px-8" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Quick Help</h3>
                                <p className="text-sm text-slate-500 mb-6">Share your question and an expert will call you with a detailed answer within 2 hours.</p>
                                <QuoteForm insuranceType="general_inquiry" />
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5" />
                                    Expert Guides
                                </h4>
                                <p className="text-blue-800 text-sm mb-4">
                                    Dive deeper into specific topics with our detailed step-by-step guides:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        { label: 'Claim Rejection Appeal Guide', href: '/resources/guides/claim-rejection-appeal' },
                                        { label: 'LIC Maturity Claim Process', href: '/resources/guides/maturity-claim-guide' },
                                        { label: 'Lapsed Policy Revival Guide', href: '/resources/guides/lapsed-policy-revival' },
                                        { label: 'Cashless Hospitalization Steps', href: '/resources/guides/cashless-hospitalization-guide' },
                                    ].map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-sm text-blue-700 hover:text-blue-900 font-medium hover:underline">
                                                {link.label} →
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
