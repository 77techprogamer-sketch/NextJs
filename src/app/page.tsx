import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'Insurance Support Online: Claim Recovery & Expert Advice India'
    },
    description: "Expert help for rejected insurance claims and policy management. 25+ years of trust. LIC, Health, Motor & Life Insurance support online in India.",
    keywords: [
        'Insurance Support Online',
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
            <HomeClient />
        </>
    );
}
