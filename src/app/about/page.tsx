import React from 'react';
import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
    title: 'About Insurance Support | 25+ Years of Trust',
    description: 'Learn about Insurance Support, our legacy of 25+ years, and our mission to secure families. Trusted by 15,000+ clients with a 98% claim settlement ratio.',
    keywords: [
        'About Insurance Support',
        'Insurance Advisors Experience',
        'Trusted Insurance Agents',
        'Claim Settlement Ratio',
        'Insurance Experts Bangalore',
        'Legacy Insurance Protection',
        'Family Financial Planning',
        'SME Insurance Specialists'
    ]
};

const AboutPage = () => {
    return <AboutContent />;
};

export default AboutPage;

