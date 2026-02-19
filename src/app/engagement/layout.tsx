import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Engagement Dashboard | Internal',
    description: 'Internal analytics dashboard for monitoring site engagement.',
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: 'https://insurancesupport.online/engagement',
    }
}

export default function EngagementLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
