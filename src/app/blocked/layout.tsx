import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Access Restricted | Insurance Support India',
    description: 'Access to this site is currently restricted based on your location or security profile.',
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: 'https://insurancesupport.online/blocked',
    }
}

export default function BlockedLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
