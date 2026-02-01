import React from 'react';
import { Metadata } from 'next';
import SupportClient from '@/components/SupportClient';

export const metadata: Metadata = {
    title: 'Support | Insurance Support India',
    description: 'Get expert help for all your insurance needs. Contact our support team for claims, renewals, and new policy inquiries.',
    keywords: ['Insurance Support', 'Insurance Help', 'Customer Care', 'Claim Assistance', 'Policy Renewal Help'],
    alternates: {
        canonical: './',
    },
};

export default function SupportPage() {
    return <SupportClient />;
}
