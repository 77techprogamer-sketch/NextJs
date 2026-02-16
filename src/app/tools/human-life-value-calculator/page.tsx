import { Metadata } from 'next'
import HLVCalculator from '@/components/tools/HLVCalculator'

export const metadata: Metadata = {
    title: 'Human Life Value (HLV) Calculator | How much Insurance do you need?',
    description: 'Calculate your Human Life Value (HLV) free. Find out the exact life insurance cover you need to secure your family\'s future based on your income and liabilities.',
    keywords: ['HLV Calculator', 'Human Life Value Calculator India', 'Life Insurance Calculator', 'Insurance Need Analysis'],
    openGraph: {
        title: 'Free Human Life Value (HLV) Calculator',
        description: 'Are you under-insured? Calculate your true life insurance need in 2 minutes.',
        type: 'website',
    }
}

export default function HLVCalculatorPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    Human Life Value (HLV) Calculator
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Most people are under-insured. Use this scientific calculator to find out the
                    <span className="font-semibold text-primary"> exact amount</span> your family would need to maintain their lifestyle if you weren&apos;t there.
                </p>
            </div>

            <HLVCalculator />

            <div className="mt-16 prose dark:prose-invert max-w-none bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h2>What is Human Life Value (HLV)?</h2>
                <p>
                    Human Life Value (HLV) is a numeric value that represents your economic worth to your family.
                    In insurance terms, it is the amount of money your family would need to replace your future earnings
                    and pay off all liabilities if something were to happen to you today.
                </p>

                <h3>Why is HLV important?</h3>
                <ul>
                    <li>It prevents <strong>Under-Insurance</strong>: Many people buy random policies (e.g., ₹5 Lakhs) which are insufficient.</li>
                    <li>It accounts for <strong>Inflation</strong>: Your family&apos;s expenses will grow over time.</li>
                    <li>It covers <strong>Liabilities</strong>: Home loans, personal loans, and children&apos;s education costs are factored in.</li>
                </ul>

                <h3>How is it calculated?</h3>
                <p>We use the <strong>Income Replacement Method</strong> adjusted for inflation and liabilities:</p>
                <blockquote>
                    HLV = (Annual Income - Personal Expenses) × Years to Retirement + Outstanding Loans - Current Savings
                </blockquote>
            </div>
        </div>
    )
}
