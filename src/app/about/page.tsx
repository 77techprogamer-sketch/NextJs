import React from 'react';
import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';
import { contactConfig } from '@/data/contact';
import { getServerSideTranslation } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getServerSideTranslation();
    
    return {
        title: {
            absolute: `${t('about_meta_title')} - Insurance Support`
        },
        description: t('about_meta_desc'),
        keywords: [
            t('about_hero_title'),
            'Insurance Advisors Experience',
            'Trusted Insurance Advisors',
            'Claim Settlement Ratio',
            'Insurance Experts Bangalore',
            'Legacy Insurance Protection',
            'Family Financial Planning',
            '25 Years Experience Insurance',
            'Trusted LIC Advisor',
            'Top Rated Insurance Advisor',
            'SME Insurance Specialists',
            'IRDAI Certified Insurance Advisor',
            'Licensed Insurance Advisor India',
            'Insurance Advisor Kotian',
            'Best Insurance Advisor India'
        ],
        alternates: {
            canonical: 'https://insurancesupport.online/about',
        }
    };
}

// Person schema for advisor — direct E-E-A-T signal on the About page
const advisorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://insurancesupport.online/#advisor',
    name: 'Hari Kotian',
    jobTitle: 'Certified Insurance Advisor & Claim Recovery Specialist',
    description: 'Licensed insurance advisor with 25+ years of experience in LIC, health, motor, and life insurance claim recovery across India. Expert in rejected claim escalation and policy revival.',
    url: 'https://insurancesupport.online/about',
    telephone: contactConfig.phoneFull,
    email: contactConfig.email,
    worksFor: {
        '@type': 'InsuranceAgency',
        name: 'Insurance Support',
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

const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
        '@id': 'https://insurancesupport.online/#organization'
    },
    description: 'Learn about Insurance Support, our legacy of 25+ years in claim recovery, and our mission to provide professional insurance advisory services.',
    publisher: {
        '@id': 'https://insurancesupport.online/#organization'
    }
}

const AboutPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(advisorSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />
            <AboutContent />
        </>
    );
};

export default AboutPage;
