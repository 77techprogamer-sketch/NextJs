import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import translations from '@/../public/locales/en/translation.json';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Support: Expert Claim Recovery & Policy Help India'
    },
    description: "Navigate rejected insurance claims and policy issues with expert help. 25+ years of trust in LIC, Health, & Life insurance support across India.",
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
