"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Lock, FileText, Scale } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-12 min-h-screen max-w-4xl">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Privacy Policy
                </h1>
                <p className="text-muted-foreground text-lg">
                    Effective Date: January 1, 2026
                </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">

                {/* Introduction */}
                <section className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-semibold m-0">Our Commitment to Privacy</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        At Insurance Support, we recognize that when you choose us for your insurance needs, you are entrusting us with your most personal and sensitive information. We take this responsibility seriously. This Privacy Policy outlines our uncompromising commitment to protecting your data, complying with industry regulations, and ensuring transparency in how we collect, use, and safeguard your information.
                    </p>
                </section>

                {/* Information Collection */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        1. Information We Collect
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        To provide accurate quotes, facilitate underwriting, and service your policies, we collect various categories of personal information (&quot;PI&quot;). The types of PI we collect depend on the product or service you request:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Identity Data</h3>
                            <p className="text-sm text-muted-foreground">Name, date of birth, social security number, driver&apos;s license number, and government-issued IDs necessary for identity verification and background checks.</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Contact Data</h3>
                            <p className="text-sm text-muted-foreground">Mailing address, email address, and telephone numbers.</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Financial Data</h3>
                            <p className="text-sm text-muted-foreground">Bank account details, payment card information, credit history, and credit scores (obtained from consumer reporting agencies) for premium payments and underwriting purposes.</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Risk & Asset Data</h3>
                            <p className="text-sm text-muted-foreground">Property details, vehicle information, driving history, claims history, and other data relevant to the risk being insured.</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg md:col-span-2">
                            <h3 className="font-semibold text-foreground mb-2">Sensitive Health Information</h3>
                            <p className="text-sm text-muted-foreground">For Life and Health insurance products, we may collect medical history, prescription drug history, and other health-related information. We handle this data with strict adherence to HIPAA and other applicable health privacy laws.</p>
                        </div>
                    </div>
                </section>

                {/* Usage */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">We do not sell your personal information. We use your data solely for:</p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                        <li><strong>Quoting and Underwriting:</strong> Assessing risk and determining eligibility and premium rates.</li>
                        <li><strong>Policy Administration:</strong> Processing payments, issuing policy documents, and managing renewals.</li>
                        <li><strong>Claims Processing:</strong> Investigating, evaluating, and settling claims.</li>
                        <li><strong>Legal Compliance:</strong> Fulfilling our legal and regulatory obligations, including fraud prevention and anti-money laundering checks.</li>
                    </ul>
                </section>

                {/* Disclosure */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclosure of Information</h2>
                    <p className="text-muted-foreground mb-4">
                        We respect your confidentiality. We only share your information with third parties as necessary to conduct business or as required by law:
                    </p>
                    <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                            <h3 className="font-semibold text-foreground">Insurance Carriers and Partners</h3>
                            <p className="text-sm text-muted-foreground">We share data with insurance companies and underwriters to obtain quotes and bind coverage on your behalf. These entities are also bound by strict privacy regulations.</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                            <h3 className="font-semibold text-foreground">Service Providers</h3>
                            <p className="text-sm text-muted-foreground">We may use trusted third-party vendors for payment processing, IT support, and customer service. They are contractually obligated to protect your data and use it only for the services they provide.</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                            <h3 className="font-semibold text-foreground">Legal Requirements</h3>
                            <p className="text-sm text-muted-foreground">We may disclose information to law enforcement or regulatory bodies if required by a subpoena, court order, or other legal process.</p>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" />
                        4. Data Security
                    </h2>
                    <p className="text-muted-foreground">
                        We employ state-of-the-art physical, electronic, and procedural safeguards to protect your personal information. This includes 256-bit encryption for data in transit and at rest, strict access controls, and regular security audits. While no method of transmission is 100% secure, we continuously update our security measures to combat emerging threats.
                    </p>
                </section>

                {/* User Rights */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-primary" />
                        5. Your Rights and Choices
                    </h2>
                    <p className="text-muted-foreground mb-2">Subject to applicable laws, you may have the right to:</p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
                        <li>Access the personal information we hold about you.</li>
                        <li>Request correction of inaccurate or incomplete data.</li>
                        <li>Request deletion of your data (subject to legal retention requirements).</li>
                        <li>Opt-out of marketing communications.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                        To exercise these rights, please contact our Compliance Officer using the information below.
                    </p>
                </section>

            </div>

            <footer className="mt-16 pt-8 border-t border-border">
                <div className="bg-secondary/20 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Questions about privacy?</h3>
                        <p className="text-muted-foreground text-sm max-w-md">
                            If you have any questions or concerns about this policy or our data practices, please contact our Data Protection Team.
                        </p>
                    </div>
                    <Button size="lg" asChild className="shrink-0">
                        <a href="mailto:hari.sahyadri@gmail.com">
                            Contact Privacy Support
                        </a>
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
