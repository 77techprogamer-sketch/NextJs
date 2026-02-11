import React from 'react';
import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

import translations from '@/../public/locales/en/translation.json';

export const metadata: Metadata = {
    title: {
        absolute: `${translations.about_page_title} - Insurance Support`
    },
    description: translations.about_meta_description,
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
        'SME Insurance Specialists'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/about',
    }
};

const AboutPage = () => {
    return <AboutContent />;
};

export default AboutPage;

