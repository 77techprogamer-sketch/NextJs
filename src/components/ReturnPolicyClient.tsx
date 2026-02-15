"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const ReturnPolicyClient = () => {
    return (
        <div className="container mx-auto px-4 py-12 min-h-screen max-w-4xl">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Return & Cancellation Policy
                </h1>
                <p className="text-muted-foreground text-lg">
                    Understanding your rights during the Free Look Period
                </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">

                {/* Introduction */}
                <section className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <RefreshCw className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-semibold m-0">Free Look Period</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        Insurance policies in India come with a mandatory "Free Look Period" of 15 days (30 days for policies sold via distance marketing like online or phone). During this time, you have the right to review the terms and conditions of your policy. If you disagree with any of the terms, you can return (cancel) the policy.
                    </p>
                </section>

                {/* Cancellation Process */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        1. How to Return Your Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        If you wish to return your policy within the Free Look Period, follow these steps:
                    </p>
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li><strong>Submit a Written Request:</strong> Send a cancellation request to the insurer or us via email or letter, stating your policy number and the reason for cancellation.</li>
                            <li><strong>Original Policy Document:</strong> You may need to return the original policy document (if issued physically).</li>
                            <li><strong>Bank Details:</strong> Provide a cancelled cheque or bank details for the refund transfer.</li>
                        </ul>
                    </div>
                </section>

                {/* Refund Calculation */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-primary" />
                        2. Refund Calculation
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Upon successful cancellation during the Free Look Period, the premium will be refunded after strict non-refundable deductions:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Prorated Risk Premium</h3>
                            <p className="text-sm text-muted-foreground">Premium for the number of days the policy was active is deducted.</p>
                        </div>
                        <div className="bg-card border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Medical Expenses</h3>
                            <p className="text-sm text-muted-foreground">Costs incurred by the insurer for your medical tests (if any) are deducted.</p>
                        </div>
                        <div className="bg-card border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Stamp Duty</h3>
                            <p className="text-sm text-muted-foreground">Stamp duty charges paid for policy issuance are non-refundable.</p>
                        </div>
                    </div>
                </section>

                {/* Important Notes */}
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        3. Service Returns
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Please note that "Insurance Support" acts as a facilitator. We do not issue refunds directly. All refunds are processed by the respective Insurance Company to your bank account directly.
                    </p>
                    <p className="text-muted-foreground">
                        For our advisory or consulting fees (if applicable and charged separately), refunds are governed by the specific service agreement signed at the time of engagement.
                    </p>
                </section>

            </div>

            <footer className="mt-16 pt-8 border-t border-border">
                <div className="bg-secondary/20 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Need help cancelling?</h3>
                        <p className="text-muted-foreground text-sm max-w-md">
                            Our support team can guide you through the free-look cancellation process with your insurer.
                        </p>
                    </div>
                    <Button size="lg" asChild className="shrink-0">
                        <a href="mailto:hari.sahyadri@gmail.com">
                            Contact Support
                        </a>
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default ReturnPolicyClient;
