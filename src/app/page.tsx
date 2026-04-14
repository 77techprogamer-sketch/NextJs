import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import translations from '@/../public/locales/en/translation.json';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Support | Expert Claim Recovery & Policy Advice India'
    },
    description: 'Trusted Insurance Support in India. Dedicated experts for IRDAI claim appeals, LIC policy revival, and high-value health insurance. Recover your rejected claims today.',
    keywords: [
        'LIC Insurance Support',
        'Insurance Claim Recovery India',
        'Rejected Claim Appeal Help',
        'LIC Agent Bangalore',
        'Insurance Advisor India',
        'Claim Settlement Support',
        'Lost Policy Recovery',
        'LIC Policy Status Check',
        'Insurance Consultancy'
    ],
    metadataBase: new URL('https://insurancesupport.online'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Insurance Support | Expert Claim Recovery & Policy Advice India',
        description: 'Professional assistance for insurance claims, policy revivals, and expert advisory. Over 25 years of trust and 15,000+ satisfied clients.',
        url: 'https://insurancesupport.online',
        siteName: 'Insurance Support India',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Insurance Support | Expert Claim Recovery & Policy Advice India',
        description: 'Recover rejected insurance claims and get expert policy advice from veteran advisors in India.',
    }
};

export default function Home() {
    return (
        <>
            <LocalBusinessJsonLd />
            <HomeClient
                initialTitle={translations.hero_title}
                initialDescription={translations.secure_family_future}
            />
        </>
    );
}

