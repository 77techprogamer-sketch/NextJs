import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Veteran Advantage | Insurance Support',
    description: 'Discover why 25+ years of IRDAI-certified experience makes the difference in your insurance and claim journey.',
};

export default function VeteranAdvantagePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                The Veteran Advantage
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                Over two decades of battling insurance technicalities, winning rejected claims, and securing families. 
                Experience is the ultimate shield in the insurance industry.
            </p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        25+ Years of Trust & Knowledge
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Insurance Support is built on the foundation of deep, battle-tested knowledge. Our senior advisors have seen 
                        every type of policy variation, exclusion clause, and TPA delay tactic since the late 90s.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        When you work with us, you aren&apos;t just buying a policy from a portal; you are gaining a lifelong advocate 
                        who knows how to navigate the complex corporate structures of LIC, Star Health, HDFC ERGO, and more.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Inside Knowledge of Underwriting & Claims
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Because we know how underwriters think, we structure your applications to minimize the risk of future
                        claim rejections. We know exactly which medical documents to submit and how to declare pre-existing conditions safely.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        The Ombudsman & Escalation Ecosystem
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        A typical agent stops answering calls when a claim is rejected. A veteran advisor steps in. 
                        We draft legal-grade medical representations and fight cases at the grievance and Ombudsman levels.
                    </p>
                </section>
            </div>

            <div className="mt-16 p-8 bg-blue-50 dark:bg-slate-800 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Experience the Advantage</h3>
                <Link href="/get-started" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-primary/90 transition-colors">
                    Talk to our Senior Advisors
                </Link>
            </div>
        </div>
    );
}
