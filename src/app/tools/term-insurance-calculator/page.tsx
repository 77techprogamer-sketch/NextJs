import { Metadata } from 'next'
import TermCalculator from '@/components/tools/TermCalculator'
import Link from 'next/link'
import { CheckCircle2, Info, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Term Insurance Premium Calculator 2026 | Get Instant Quotes',
    description: 'Calculate your term insurance premium in 60 seconds. Compare quotes from LIC, HDFC, ICICI, and Max Life. Plan your family\'s security with the most accurate premium estimator.',
    keywords: [
        'Term Insurance Calculator', 
        'LIC Term Plan Calculator', 
        'Life Insurance Premium Estimator', 
        'Online Term Insurance Quotes', 
        'Term insurance premium india'
    ],
    openGraph: {
        title: 'Instant Term Insurance Premium Calculator',
        description: 'See how much a 1 Crore life cover costs for you. Instant estimates, no registration required.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://insurancesupport.online/tools/term-insurance-calculator',
    }
}

export default function TermCalculatorPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Breadcrumbs */}
                <nav className="text-xs text-slate-400 mb-8 flex items-center gap-1 uppercase tracking-widest font-bold">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-slate-900">Tools</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-primary/70">Term Insurance Calculator</span>
                </nav>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-none">
                        How Much Does <span className="text-primary italic">Peace of Mind</span> Cost?
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Don&apos;t guess your premium. Use our <span className="text-slate-900 font-bold border-b-2 border-primary/30">2026 Benchmark Calculator</span> to estimate your annual outlay for a robust term life cover.
                    </p>
                </div>

                <TermCalculator />

                {/* Educational Content Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-black text-slate-900">What determines your premium?</h2>
                        <p className="text-slate-600">
                            Insurance companies use a process called <strong>underwriting</strong> to evaluate the risk of insuring you. The lower the risk, the lower the premium.
                        </p>
                        
                        <div className="space-y-4 mt-8">
                            {[
                                { title: 'Entry Age', desc: 'The earlier you start, the lower your premium. Locked-in for life.' },
                                { title: 'Medical History', desc: 'Pre-existing conditions like diabetes can increase premiums.' },
                                { title: 'Lifestyle Choices', desc: 'Smokers pay 50-70% higher premiums due to health risks.' },
                                { title: 'Sum Assured', desc: 'Higher coverage increases the risk pool, thus higher cost.' }
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
                        <h3 className="text-2xl font-bold mb-6">Comparison Tips</h3>
                        <ul className="space-y-6 list-none p-0">
                            <li className="flex gap-3">
                                <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</span>
                                <p className="text-slate-300 text-sm">Always choose <strong>annual payment</strong> over monthly to save up to 5% on processing fees.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</span>
                                <p className="text-slate-300 text-sm">Add <strong>Critical Illness Riders</strong> only if your base health policy cover is low (under ₹20L).</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</span>
                                <p className="text-slate-300 text-sm">Choose <strong>MWP (Married Women&apos;s Property) Act</strong> to ensure your claim money goes only to your wife and children.</p>
                            </li>
                        </ul>
                        
                        <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 flex gap-4">
                            <Info className="h-6 w-6 text-primary shrink-0" />
                            <p className="text-xs text-slate-400 leading-relaxed italic">
                                Note: This calculator provides market-standard estimates. For corporate group policies or special high-net-worth plans, physical underwriting is mandatory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
