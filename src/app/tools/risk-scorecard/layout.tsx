import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Is Your Family Truly Protected? | Risk Scorecard',
    description: 'Our 30-second proprietary Risk Scorecard helps you identify gaps in your financial security before they become critical.',
    alternates: {
        canonical: 'https://insurancesupport.online/tools/risk-scorecard',
    }
}

export default function RiskScorecardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
