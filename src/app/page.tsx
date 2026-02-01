import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import enTranslations from "../../public/locales/en/translation.json";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Support India: Claim Recovery & Expert Advice'
    },
    description: "Expert help for rejected insurance claims and policy management. 25+ years of trust. LIC, Health, Motor & Life Insurance support in India.",
    keywords: [
        'Insurance Support India',
        'Claim Recovery',
        'Rejected Claim Help',
        'LIC Agent',
        'Insurance Consultancy'
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
