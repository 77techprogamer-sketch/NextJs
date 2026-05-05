import { Metadata } from 'next';
import LoansPageClient from '@/components/LoansPageClient';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight, Shield, Calculator, Clock, FileText, HelpCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: {
        absolute: 'Loan Against Insurance Policy India | LIC Policy Loan, Interest Rates & Process — Insurance Support'
    },
    description: 'Get loans against your LIC or life insurance policy at low interest rates. Compare policy loan vs personal loan. Expert guidance on eligibility, documents, and instant processing. Free consultation available.',
    keywords: [
        'Loan Against Insurance Policy India',
        'LIC Policy Loan',
        'Loan on Life Insurance Policy',
        'Policy Loan Interest Rate',
        'Borrow Against Insurance Policy',
        'LIC Loan Against Policy Process',
        'Insurance Policy Loan Eligibility',
        'Home Loan Insurance India',
        'Personal Loan vs Policy Loan',
        'Education Loan with Insurance',
        'Low Interest Loans India',
        'LIC Housing Finance Loan',
        'Policy Loan Documents Required',
        'How to Get Loan Against LIC Policy'
    ],
    openGraph: {
        title: 'Loan Against Insurance Policy | Expert Advisory — Insurance Support',
        description: 'Get low-interest loans against your LIC or life insurance policy. Expert guidance on eligibility and processing.',
        type: 'website',
        url: 'https://insurancesupport.online/loans',
        siteName: 'Insurance Support',
        locale: 'en_IN',
    },
    alternates: {
        canonical: 'https://insurancesupport.online/loans',
    }
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much loan can I get against my LIC policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'LIC offers loans up to 90% of the policy\'s surrender value for endowment and money-back plans. For whole-life policies, the limit is typically 85%. The exact amount depends on your policy tenure, plan type, and accumulated bonuses. ULIP and term insurance policies are generally not eligible for loans.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the interest rate for a loan against LIC policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'LIC policy loan interest rates range from 9% to 10% per annum (simple interest), which is significantly lower than personal loans (12-24%) or credit card cash advances (36%+). The rate depends on when the policy was purchased — older policies typically have lower loan rates. Interest is charged half-yearly.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I get a policy loan if my LIC policy is lapsed?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, only active (in-force) policies are eligible for loans. However, if your policy has a paid-up value, it may still qualify. If your policy has lapsed, we can help revive it first and then facilitate the loan application. Revival typically requires paying arrears with interest and a health declaration.'
            }
        },
        {
            '@type': 'Question',
            name: 'How long does it take to get a loan against insurance policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'With our doorstep processing, a loan against LIC policy can be sanctioned within 5-7 working days. The process involves submitting the policy bond with a loan application form at the servicing branch. If you apply directly at the branch, it may take 7-15 days. We handle the entire process on your behalf.'
            }
        },
        {
            '@type': 'Question',
            name: 'What happens if I don\'t repay the policy loan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Unpaid policy loan interest is compounded and added to the principal. If the total outstanding loan amount (principal + accumulated interest) exceeds the surrender value of the policy, the policy is automatically terminated by the insurer. To avoid this, at minimum, pay the half-yearly interest charges regularly.'
            }
        }
    ]
};

export default function LoansPage() {
    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full blur-[100px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <Shield className="h-4 w-4" />
                            Expert Loan Advisory
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Loans Against <span className="text-primary italic">Insurance Policies</span> & Financial Services
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                            Need immediate funds without breaking your long-term insurance investment? A loan against your LIC or life insurance policy offers the lowest interest rates — often 50-70% cheaper than personal loans. Our advisors help you unlock the full financial potential of your existing policies.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: '9-10%', label: 'Policy Loan Rate' },
                                { value: '90%', label: 'Max Surrender Value' },
                                { value: '5-7 Days', label: 'Processing Time' },
                                { value: 'Zero', label: 'Prepayment Penalty' },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What is a Policy Loan */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What is a Loan Against Insurance Policy?</h2>
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p>
                            A <strong>loan against insurance policy</strong> is a secured loan where your existing life insurance or endowment policy serves as collateral. Instead of surrendering your policy and losing future benefits (bonuses, risk cover, maturity payout), you can borrow against its accumulated surrender value at significantly lower interest rates than unsecured personal loans.
                        </p>
                        <p>
                            This is particularly valuable for <strong>LIC policyholders</strong> in India, where policies like Jeevan Anand, Jeevan Lakshya, and other endowment plans build substantial surrender values over 5-10 years. Rather than taking a high-interest personal loan during a financial emergency, you can tap into this existing asset at 9-10% interest — roughly half the cost of a bank personal loan.
                        </p>
                        <p>
                            The best part? <strong>Your policy remains active</strong> throughout the loan period. You continue to earn bonuses, your risk cover stays intact, and the maturity payout is reduced only by the outstanding loan amount at the time of maturity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Policy Loan vs. Other Loan Options</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Before choosing a loan product, compare these key differences. A policy loan is often the smartest choice for policyholders who need short-term funds without destroying long-term wealth.
                    </p>
                    <div className="overflow-x-auto border rounded-xl">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b">
                                <tr>
                                    <th className="p-4 font-bold border-r text-sm">Parameter</th>
                                    <th className="p-4 font-bold text-primary text-sm">Policy Loan (LIC)</th>
                                    <th className="p-4 font-bold text-slate-500 text-sm">Personal Loan</th>
                                    <th className="p-4 font-bold text-slate-500 text-sm">Gold Loan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y text-sm">
                                <tr><td className="p-4 border-r font-medium">Interest Rate</td><td className="p-4 text-green-700 font-medium">9–10% p.a.</td><td className="p-4 text-slate-600">12–24% p.a.</td><td className="p-4 text-slate-600">10–16% p.a.</td></tr>
                                <tr><td className="p-4 border-r font-medium">Collateral</td><td className="p-4 text-green-700 font-medium">Your existing policy</td><td className="p-4 text-slate-600">None (unsecured)</td><td className="p-4 text-slate-600">Physical gold</td></tr>
                                <tr><td className="p-4 border-r font-medium">Approval Time</td><td className="p-4 text-green-700 font-medium">5–7 working days</td><td className="p-4 text-slate-600">2–7 days</td><td className="p-4 text-slate-600">Same day</td></tr>
                                <tr><td className="p-4 border-r font-medium">Max Amount</td><td className="p-4 text-green-700 font-medium">Up to 90% surrender value</td><td className="p-4 text-slate-600">Based on income</td><td className="p-4 text-slate-600">75% of gold value</td></tr>
                                <tr><td className="p-4 border-r font-medium">Prepayment Penalty</td><td className="p-4 text-green-700 font-medium">Zero</td><td className="p-4 text-slate-600">2–5% typically</td><td className="p-4 text-slate-600">Varies</td></tr>
                                <tr><td className="p-4 border-r font-medium">Risk Cover Continues</td><td className="p-4 text-green-700 font-medium">Yes — policy stays active</td><td className="p-4 text-slate-600">N/A</td><td className="p-4 text-slate-600">N/A</td></tr>
                                <tr><td className="p-4 border-r font-medium">Credit Score Impact</td><td className="p-4 text-green-700 font-medium">No impact</td><td className="p-4 text-slate-600">Affects CIBIL</td><td className="p-4 text-slate-600">Minimal</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Policy Loan Eligibility Criteria</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">Not all insurance policies qualify for a loan. Here&apos;s what you need to know about eligibility.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5" /> Eligible Policies
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />LIC Endowment Plans (Jeevan Anand, Jeevan Lakshya, etc.)</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Money Back Plans with 3+ years of premium paid</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Whole Life Plans with surrender value</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Private life insurance endowment policies</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Policies with paid-up value (even if partially lapsed)</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                                <Shield className="h-5 w-5" /> Not Eligible
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">✗</span>Term Insurance Plans (no surrender value)</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">✗</span>ULIP Plans during lock-in period (first 5 years)</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">✗</span>Health Insurance Policies</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">✗</span>Fully lapsed policies with no paid-up value</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">✗</span>Micro Insurance and group term plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Get a Loan Against Your Insurance Policy</h2>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                        Our doorstep service means you don&apos;t have to visit any branch. Here&apos;s the step-by-step process managed entirely by our team.
                    </p>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Free Eligibility Check', desc: 'Share your policy number with us. We verify the current surrender value, check if your policy qualifies, and calculate the maximum loan amount you can get — all within 24 hours.' },
                            { step: '2', title: 'Document Collection', desc: 'We collect your original policy bond, a signed loan application form (provided by us), ID proof, and a cancelled cheque for NEFT disbursement — right at your doorstep.' },
                            { step: '3', title: 'Branch Submission', desc: 'Our representative submits the complete application at the servicing branch on your behalf. We ensure all documents are in order to avoid processing delays.' },
                            { step: '4', title: 'Loan Disbursement', desc: 'The approved loan amount is credited directly to your bank account via NEFT/RTGS within 5-7 working days. Your policy remains fully active with all future benefits intact.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Financial Services - Client Component */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Explore All Financial Services</h2>
                    <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                        Beyond policy loans, we help you find the best loan products tailored for the Indian market — home loans, personal loans, education loans, and more.
                    </p>
                    <LoansPageClient />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About Policy Loans</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How much loan can I get against my LIC policy?', a: 'LIC offers loans up to 90% of the policy\'s surrender value for endowment and money-back plans. For whole-life policies, the limit is typically 85%. The exact amount depends on your policy tenure, plan type, and accumulated bonuses.' },
                            { q: 'What is the interest rate for a loan against LIC policy?', a: 'LIC policy loan interest rates range from 9% to 10% per annum (simple interest). The rate depends on when the policy was purchased — older policies typically have lower rates. Interest is charged half-yearly.' },
                            { q: 'Can I get a policy loan if my LIC policy is lapsed?', a: 'Only active (in-force) policies are eligible. However, policies with paid-up value may still qualify. If your policy has lapsed, we can help revive it first and then facilitate the loan application.' },
                            { q: 'How long does it take to get a loan against insurance?', a: 'With our doorstep processing, a policy loan can be sanctioned within 5-7 working days. We handle the entire process — document collection, branch submission, and follow-up — so you don\'t have to visit any office.' },
                            { q: 'What happens if I don\'t repay the policy loan?', a: 'Unpaid interest compounds and adds to the principal. If the total outstanding exceeds the surrender value, the policy terminates. To avoid this, at minimum pay the half-yearly interest charges regularly.' },
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Check Your Policy Loan Eligibility — Free</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Share your policy number with our advisor. We&apos;ll calculate the maximum loan amount, current interest rate, and process the entire application from your doorstep.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">
                                        Get Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
