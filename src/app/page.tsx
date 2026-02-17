import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";

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
        'Rejected Insurance Claim Help',
        'Lost Policy Document Recovery',
        'LIC Policy Status Check',
        'Insurance Claim Consultant India',
        'LIC Agent',
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
            <HomeClient />
        </>
    );
}
