import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Access Restricted | Insurance Support',
    description: 'Access to Insurance Support is restricted from your current location due to regulatory requirements.',
    robots: {
        index: false,
        follow: false,
    }
}

export default function BlockedLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
