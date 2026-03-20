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

// Static FAQ schema for the homepage – uses real English strings so Google can index them
const homepageFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: (translations as any).faq_life_q1 || 'What is the entry age for life insurance?',
            acceptedAnswer: { '@type': 'Answer', text: (translations as any).faq_life_a1 || 'Life insurance can generally be purchased from 18 to 65 years. LIC and most private insurers offer plans starting at 18 years with coverage up to 75–80 years.' }
        },
        {
            '@type': 'Question',
            name: (translations as any).faq_life_q2 || 'How do I check my LIC policy status online?',
            acceptedAnswer: { '@type': 'Answer', text: (translations as any).faq_life_a2 || 'You can check LIC policy status online via the LIC portal or by contacting your nearest branch. Our advisors can also retrieve full policy details via the NEFT portal on your behalf.' }
        },
        {
            '@type': 'Question',
            name: (translations as any).faq_health_q1 || 'Is health insurance premium tax deductible in India?',
            acceptedAnswer: { '@type': 'Answer', text: (translations as any).faq_health_a1 || 'Yes, health insurance premiums paid are deductible under Section 80D of the Income Tax Act—up to ₹25,000 for self/family and an additional ₹25,000–50,000 for parents.' }
        },
        {
            '@type': 'Question',
            name: (translations as any).faq_health_q2 || 'What is the waiting period in health insurance?',
            acceptedAnswer: { '@type': 'Answer', text: (translations as any).faq_health_a2 || 'Health insurance plans typically have an initial waiting period of 30 days for all illnesses, and 2–4 years for pre-existing conditions. Critical illness cover usually has a 90-day waiting period.' }
        },
        {
            '@type': 'Question',
            name: (translations as any).faq_term_q1 || 'What is the difference between term insurance and life insurance?',
            acceptedAnswer: { '@type': 'Answer', text: (translations as any).faq_term_a1 || 'Term insurance provides pure life cover for a fixed period with no maturity benefit. Life insurance (endowment/ULIP) combines life cover with savings or investment components and has a maturity benefit.' }
        },
        {
            '@type': 'Question',
            name: (translations as any).faq_claim_rejected_q || 'What can I do if my insurance claim was rejected?',
            acceptedAnswer: { '@type': 'Answer', text: (translations as any).faq_claim_rejected_a || 'If your insurance claim was rejected, you can file a complaint with IRDAI or approach the Insurance Ombudsman. Our experts specialize in claim recovery and will review your case and appeal the rejection on your behalf.' }
        }
    ]
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
            />
            <LocalBusinessJsonLd />
            <HomeClient
                initialTitle={translations.hero_title}
                initialDescription={translations.secure_family_future}
            />
        </>
    );
}
