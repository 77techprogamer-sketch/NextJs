import React from 'react';
import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';
import translations from '@/../public/locales/en/translation.json';

export const metadata: Metadata = {
    title: {
        absolute: `${translations.about_page_title} - Insurance Support`
    },
    description: 'Meet our certified insurance advisors with 25+ years of experience. IRDAI-compliant insurance support for LIC, health, motor, and life insurance claims across India.',
    keywords: [
        translations.about_hero_title,
        'Insurance Advisors Experience',
        'Trusted Insurance Agents',
        'Claim Settlement Ratio',
        'Insurance Experts Bangalore',
        'Legacy Insurance Protection',
        'Family Financial Planning',
        '25 Years Experience Insurance',
        'Trusted LIC Advisor',
        'Top Rated Insurance Agent',
        'SME Insurance Specialists',
        'IRDAI Certified Insurance Advisor',
        'Licensed Insurance Agent India',
        'Insurance Agent Kotian',
        'Best Insurance Advisor India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/about',
    }
};

// Person schema for advisor — direct E-E-A-T signal on the About page
const advisorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://insurancesupport.online/#advisor',
    name: 'Kotian',
    jobTitle: 'Certified Insurance Advisor & Claim Recovery Specialist',
    description: 'Licensed insurance advisor with 25+ years of experience in LIC, health, motor, and life insurance claim recovery across India. Expert in rejected claim escalation and policy revival.',
    url: 'https://insurancesupport.online/about',
    telephone: '+919986634506',
    email: 'contact@insurancesupport.online',
    worksFor: {
        '@type': 'InsuranceAgency',
        name: 'Insurance Support India',
        url: 'https://insurancesupport.online'
    },
    knowsAbout: [
        'Life Insurance Claims',
        'Health Insurance Rejection Appeals',
        'LIC Policy Management',
        'Insurance Claim Recovery India',
        'Motor Insurance Claims',
        'Term Insurance Advisory',
        'Pension Plans & Retirement',
        'IRDAI Complaint Filing'
    ]
}

const AboutPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(advisorSchema) }}
            />
            <AboutContent />
        </>
    );
};

export default AboutPage;
