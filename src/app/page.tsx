import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import translations from '@/../public/locales/en/translation.json';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Advisor India | LIC, Health & Claim Recovery – Insurance Support'
    },
    description: 'Looking for a trusted insurance advisor in India? 25+ years of IRDAI-certified expertise in LIC policy revival, rejected health insurance claims, and motor renewals. Free doorstep consultation.',
    keywords: [
        'Insurance Support',
        'Insurance Support India',
        'Claim Recovery',
        'Rejected Claim Help',
        'Rejected Insurance Claim Help',
        'Lost Policy Document Recovery',
        'LIC Policy Status Check',
        'Insurance Claim Consultant India',
        'Insurance Advisor',
        'Insurance Consultancy'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online',
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
