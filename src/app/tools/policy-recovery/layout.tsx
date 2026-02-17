import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Find Your Lost Wealth | Insurance Support India',
    description: 'Recover lost, lapsed, or hidden insurance policies with our veteran-led recovery service. We handle the paperwork, you reclaim your legacy.',
    alternates: {
        canonical: 'https://insurancesupport.online/tools/policy-recovery',
    }
}

export default function PolicyRecoveryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
