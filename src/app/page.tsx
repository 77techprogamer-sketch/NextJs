import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import enTranslations from "../../public/locales/en/translation.json";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rejected Insurance Claim? Expert Help in India | 100% Support',
    description: "Don't let your claim get rejected. Our 25+ years of experience ensures you get what you deserve. LIC, Health, Motor & Life Insurance. Free Advice.",
    keywords: [
        'Insurance Support India',
        'Claim Recovery Expert',
        'Rejected Claim Help',
        'LIC Agent India',
        'Insurance Consultancy',
        'Lost Policy Bond Help',
        'Health Insurance Claim Support',
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
