import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'How to Find Lost LIC Policy Number | Expert Help',
    description: 'Lost your LIC policy bond or forgot the policy number? Follow our step-by-step expert guide to recover your policy details without paying agent fees.',
    alternates: {
        canonical: 'https://insurancesupport.online/guides/lost-lic-policy-help'
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
