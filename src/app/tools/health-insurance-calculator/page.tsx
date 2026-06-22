import { Metadata } from 'next'
import HealthInsuranceCalculator from '@/components/tools/HealthInsuranceCalculator'
import Link from 'next/link'
import { CheckCircle2, Info, ChevronRight, AlertTriangle, ShieldAlert, FileX2, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Health Insurance Premium Calculator 2026 | Get Instant Estimates',
    description: 'Calculate your health insurance premium in 60 seconds. Compare basic, comprehensive, and super top-up plan estimates. Plan your family\'s health security with our premium estimator.',
    keywords: [
        'Health Insurance Calculator',
        'Health Insurance Premium Estimator',
        'Family Floater Premium Calculator',
        'Medical Insurance Cost India',
        'Health insurance premium india',
        'Super top-up health insurance'
    ],
    openGraph: {
        title: 'Instant Health Insurance Premium Calculator',
        description: 'See how much a ₹10 Lakh health cover costs for you. Instant estimates for basic, comprehensive, and super top-up plans.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://insurancesupport.online/tools/health-insurance-calculator',
    }
}

export default function HealthInsuranceCalculatorPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Breadcrumbs */}
                <nav className="text-xs text-slate-400 mb-8 flex items-center gap-1 uppercase tracking-widest font-bold">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-slate-900">Tools</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-primary/70">Health Insurance Calculator</span>
                </nav>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-none">
                        How Much Does <span className="text-primary italic">Health Security</span> Cost?
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Don&apos;t let medical bills drain your savings. Use our <span className="text-slate-900 font-bold border-b-2 border-primary/30">2026 Premium Calculator</span> to estimate your health insurance cost across three plan types.
                    </p>
                </div>

                <HealthInsuranceCalculator />

                {/* Educational Content Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-black text-slate-900">What determines your health insurance premium?</h2>
                        <p className="text-slate-600">
                            Health insurance premiums are calculated based on <strong>actuarial risk assessment</strong>. Insurers evaluate your age, lifestyle, location, and coverage amount to determine the premium.
                        </p>

                        <div className="space-y-4 mt-8">
                            {[
                                { title: 'Age', desc: 'Premiums increase with age. A 45-year-old pays nearly double what a 25-year-old pays for the same cover.' },
                                { title: 'Pre-existing Conditions', desc: 'Diabetes, hypertension, and other conditions can increase premiums by 15-50% or lead to exclusions.' },
                                { title: 'Smoking/Tobacco', desc: 'Tobacco users pay 30-50% higher premiums due to elevated risk of cancer, heart disease, and respiratory conditions.' },
                                { title: 'City of Residence', desc: 'Metro cities have 20-30% higher premiums due to higher medical treatment costs.' },
                                { title: 'Sum Insured', desc: 'Higher coverage amounts mean higher premiums. Choose based on your city tier and family medical history.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 m-0">{item.title}</h4>
                                        <p className="text-sm text-slate-600 m-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <h3 className="text-2xl font-bold mb-6">Plan Comparison Guide</h3>
                        <ul className="space-y-6 list-none p-0">
                            <li className="flex gap-3">
                                <span className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">B</span>
                                <p className="text-slate-300 text-sm"><strong>Basic Plan:</strong> Entry-level coverage with room rent caps. Best for young individuals in Tier-2/3 cities.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">C</span>
                                <p className="text-slate-300 text-sm"><strong>Comprehensive:</strong> No room rent caps, covers daycare, AYUSH, and mental health. Ideal for families.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">S</span>
                                <p className="text-slate-300 text-sm"><strong>Super Top-Up:</strong> Activates after a deductible (e.g., ₹3L). Extends your base cover at a fraction of the cost.</p>
                            </li>
                        </ul>

                        <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 flex gap-4">
                            <Info className="h-6 w-6 text-primary shrink-0" />
                            <p className="text-xs text-slate-400 leading-relaxed italic">
                                Tip: Combine a ₹5L base policy with a ₹15L super top-up for cost-effective high coverage. This can save 40-50% compared to a standalone ₹20L policy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Claim Rejection Reasons Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Top Reasons for <span className="text-red-600 italic">Health Insurance Claim Rejections</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Understanding why claims get rejected can help you avoid costly mistakes. Here are the most common reasons insurers deny health insurance claims.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <ShieldAlert className="h-8 w-8 text-red-500" />,
                                title: 'Pre-existing Disease Not Disclosed',
                                desc: 'Failing to declare diabetes, hypertension, or other conditions at the time of purchase is the #1 reason for claim rejection. Always disclose your full medical history.'
                            },
                            {
                                icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
                                title: 'Waiting Period Not Completed',
                                desc: 'Most policies have a 30-day initial waiting period, 2-4 year waiting for pre-existing diseases, and specific waiting periods for conditions like hernia or cataract.'
                            },
                            {
                                icon: <FileX2 className="h-8 w-8 text-slate-500" />,
                                title: 'Non-Disclosure of Habits',
                                desc: 'Not disclosing smoking, alcohol consumption, or tobacco use can lead to claim denial. Insurers consider this material misrepresentation.'
                            },
                            {
                                icon: <ShieldAlert className="h-8 w-8 text-red-500" />,
                                title: 'Treatment Not Covered',
                                desc: 'Cosmetic surgery, dental treatments (unless accidental), and alternative therapies may not be covered under standard health insurance policies.'
                            },
                            {
                                icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
                                title: 'Room Rent Exceeded',
                                desc: 'Many policies cap room rent (e.g., 1% of sum insured). Choosing a room above this limit can lead to proportionate deduction on the entire bill.'
                            },
                            {
                                icon: <FileX2 className="h-8 w-8 text-slate-500" />,
                                title: 'Claim Filed After Policy Lapse',
                                desc: 'Claims are only valid during the active policy period. Even a single day of lapse can result in claim denial. Set up auto-renewal to avoid this.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 bg-gradient-to-br from-primary/10 via-white to-primary/5 rounded-[3rem] p-8 md:p-16 text-center border border-primary/20">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Need Help Choosing the Right Health Cover?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        Our insurance experts have helped 10,000+ families find the perfect health insurance plan. Get a free, no-obligation consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            <Phone className="h-5 w-5" />
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/tools/claim-rejection-checker"
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors border border-slate-200"
                        >
                            Check Claim Rejection Risk
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
