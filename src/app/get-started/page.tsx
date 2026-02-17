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
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/get-started',
    }
};

const GetStartedPage = ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const interest = typeof searchParams.interest === 'string' ? searchParams.interest : 'life-insurance';
    return (
        <GetStartedClient initialInterest={interest} />
    );
};

export default GetStartedPage;
