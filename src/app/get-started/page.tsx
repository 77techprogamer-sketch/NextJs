import React from 'react';
import GetStartedClient from '@/components/GetStartedClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get Free Insurance Quote | Insurance Support India',
    description: 'Get instant quotes for Life, Health, Motor, and Travel Insurance. Compare top plans from LIC, Star Health, HDFC, and more. Free expert consultation.',
    keywords: [
        'Get Insurance Quote Online',
        'Buy Insurance Online',
        'Free Insurance Consultation',
        'Life Insurance Quote India',
        'Health Insurance Quote',
        'Motor Insurance Calculator',
        'Instant Policy Issuance',
        'Compare Insurance Plans'
    ]
};

const GetStartedPage = () => {
    return (
        <GetStartedClient />
    );
};

export default GetStartedPage;
