import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How It Works | Insurance Support',
    description: 'Learn the step-by-step process of how we help you buy the right insurance, recover rejected claims, and revive lapsed policies.',
    alternates: {
        canonical: 'https://insurancesupport.online/resources/how-it-works'
    }
};

export default function HowItWorksPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                How It Works
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                Our simple, transparent process to ensure you get the best coverage or recover your money from rejected claims.
            </p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Phase 1: Free Consultation & Assessment
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We start with a complete review of your current situation. Whether you are looking to buy a new policy
                        or fighting a rejected claim, our experts sit with you to understand your needs.
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li>Doorstep or Video Call consultation</li>
                        <li>Policy document review</li>
                        <li>Claim rejection letter analysis (if applicable)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Phase 2: Strategy & Paperwork
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We handle all the heavy lifting. We gather the necessary documents, communicate with hospitals, 
                        TPAs, or insurance companies, and draft the medical representation for appeals.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Phase 3: Escalation & Follow-up
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        If a claim is delayed, we escalate it to the Grievance Redressal Officer or Ombudsman. 
                        We don&apos;t stop until there is a resolution.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Phase 4: Success & Settlement
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        You receive your claim money directly to your account. For new policies, you receive your confirmed bond and our lifetime support promise.
                    </p>
                </section>
            </div>

            <div className="mt-16 p-8 bg-blue-50 dark:bg-slate-800 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to get started?</h3>
                <Link href="/get-started" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-primary/90 transition-colors">
                    Book Free Consultation
                </Link>
            </div>
        </div>
    );
}
