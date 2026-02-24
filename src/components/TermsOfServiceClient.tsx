"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Scroll, ShieldAlert, UserCheck, MessageSquare, AlertTriangle, FileText, Gavel } from 'lucide-react';

const TermsOfServiceClient = () => {
    return (
        <div className="container mx-auto px-4 py-12 min-h-screen max-w-4xl">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Terms of Service
                </h1>
                <p className="text-muted-foreground text-lg">
                    Last Updated: January 1, 2026
                </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">

                {/* Acceptance */}
                <section className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <Scroll className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-semibold m-0">1. Acceptance of Terms</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        By accessing or using the Insurance Support website (&quot;Site&quot;) and our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;) and our Privacy Policy. If you do not agree to these Terms, you must not use our Site or services.
                    </p>
                </section>

                {/* Service Scope / Role Clarification */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-primary" />
                        2. Scope of Services & Our Role
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Insurance Support acts as an independent insurance intermediary and/or marketing agency connected with licensed insurance carriers and advisors.
                    </p>
                    <div className="bg-muted p-4 rounded-lg border-l-4 border-yellow-500">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                            Important Disclaimer: We Are Not the Insurer
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Unless expressly stated otherwise, we are not an insurance company. We do not underwrite risks, issue policies, or pay claims. The insurance policy you purchase is a direct contract between you and the insurance carrier.
                        </p>
                    </div>
                </section>

                {/* No Binding Authority */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        3. Quotes are Not Binders
                    </h2>
                    <p className="text-muted-foreground">
                        Any quotes provided on this Site are estimates based on the information you provide and current underwriting guidelines. <strong>Quotes are not offers of coverage and are not an insurance binder.</strong> Coverage is only confirmed when you receive a written policy declaration or binder directly from the insurance carrier. Final premiums are subject to carrier verification of your claims history, credit report, and other risk factors.
                    </p>
                </section>

                {/* User Obligations */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-primary" />
                        4. Your Obligations: Accuracy of Information
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Insurance is a contract of utmost good faith. You agree to provide true, accurate, current, and complete information during the quoting and application process.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                        <li><strong>Consequences of Misrepresentation:</strong> Providing false, misleading, or materially incomplete information may result in your policy being voided from inception, claims being denied, or premiums being adjusted retroactively.</li>
                        <li><strong>Duty to Update:</strong> You must inform us or your carrier immediately of any changes to the information provided (e.g., change of address, new driver, change in health status) prior to policy issuance.</li>
                    </ul>
                </section>

                {/* Communications / TCPA */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        5. Consent to Communications (TCPA)
                    </h2>
                    <div className="bg-secondary/10 p-5 rounded-lg">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            By submitting your information on this Site, you expressly consent to receive communications from Insurance Support and our licensed insurance partners via telephone, email, and/or text message (SMS), even if your number is listed on a national or state &quot;Do Not Call&quot; registry.
                        </p>
                        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            These communications may involve the use of automated dialing systems or pre-recorded voice messages for the purpose of verifying your information and providing insurance quotes. Consent is not a condition of purchase; you may revoke this consent at any time by contacting us directly.
                        </p>
                    </div>
                </section>

                {/* Limitation of Liability */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Gavel className="w-5 h-5 text-primary" />
                        6. Limitation of Liability
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        To the fullest extent permitted by law, Insurance Support shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                        <li>The use or inability to use the Site.</li>
                        <li>Any decision made or action taken by you in reliance on information contained on the Site.</li>
                        <li>Errors, omissions, or delays in the quoting or application process caused by third parties or technical failures.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
                    <p className="text-muted-foreground">
                        These Terms constitute the entire agreement between you and Insurance Support. All matters relating to the Site and these Terms, and any dispute or claim arising therefrom, shall be governed by and construed in accordance with the laws of the State of [State], without giving effect to any choice or conflict of law provision.
                    </p>
                </section>

            </div>

            <footer className="mt-16 pt-8 border-t border-border flex flex-col items-center">
                <p className="text-muted-foreground text-center mb-6">
                    Insurance Support is a marketing brand. All insurance products are offered through licensed affiliates.
                </p>
                <Button variant="outline" asChild>
                    <a href="mailto:hari.sahyadri@gmail.com">
                        Contact Legal Department
                    </a>
                </Button>
            </footer>
        </div>
    );
};

export default TermsOfServiceClient;
