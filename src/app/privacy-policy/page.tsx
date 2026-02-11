import React from 'react';
import { Metadata } from 'next';
import PrivacyPolicyClient from '@/components/PrivacyPolicyClient';

export const metadata: Metadata = {
    title: {
        absolute: 'Privacy Policy | Insurance Support India'
    },
    description: 'Learn how Insurance Support collects, uses, and protects your personal information. Our commitment to data privacy and security.',
    keywords: ['Privacy Policy', 'Data Protection', 'Insurance Privacy', 'Personal Information Security'],
    alternates: {
        canonical: 'https://insurancesupport.online/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
