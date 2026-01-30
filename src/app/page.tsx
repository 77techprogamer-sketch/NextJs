import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import enTranslations from "../../public/locales/en/translation.json";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insurance Support Bangalore | Expert Advisors (25+ Years Exp)',
    description: 'Claim Rejected? Policy Lost? Get expert help from industry veterans in Bangalore. Free consultation for LIC, Health, and Motor insurance.',
    keywords: [
        'Insurance Support Bangalore',
        'LIC Agent Bangalore',
        'Insurance Consultancy India',
        'Claim Settlement Expert',
        'Lost Policy Bond Help',
        'Insurance Advisor Bangalore',
        'Health Insurance Support',
        'Term Insurance Consultant',
        'Motor Insurance Renewal',
        'LIC Policy Surrender'
    ]
};

export default function Home() {
    return (
        <>
            <LocalBusinessJsonLd />
            <HomeClient
                heroTitle={enTranslations.hero_title}
                heroDescription={enTranslations.secure_family_future}
            />
        </>
    );
}
