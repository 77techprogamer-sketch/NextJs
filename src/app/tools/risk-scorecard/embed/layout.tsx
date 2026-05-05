import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Risk Scorecard | Embed',
    description: 'Assess your financial risk instantly.',
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: 'https://insurancesupport.online/tools/risk-scorecard/embed',
    }
}

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
