import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import translations from '@/../public/locales/en/translation.json';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'LIC Insurance Advisor India – Call 9986634506 | InsuranceSupport'
    },
    description: 'Licensed LIC and health insurance advisor in India. Instant quotes, claim support, policy comparisons. Call/WhatsApp 9986634506 to buy a policy today.',
    keywords: [
        'LIC Insurance Support',
        'Call LIC Agent',
        'Lic office near me',
        'Insurance Support',
        'Insurance Support India',
        'Claim Recovery',
        'Rejected Claim Help',
        'Lost Policy Document Recovery',
        'LIC Policy Status Check',
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

