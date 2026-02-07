import React from 'react';
import { Metadata } from 'next';
import TermsOfServiceClient from '@/components/TermsOfServiceClient';

export const metadata: Metadata = {
    title: 'Terms of Service | Insurance Support',
    description: 'Read the Terms of Service for Insurance Support. Understand your rights and obligations when using our insurance services.',
    keywords: ['Terms of Service', 'Insurance Legal', 'User Agreement', 'Insurance Policy Terms'],
    alternates: {
        canonical: './',
    },
};

export default function TermsOfServicePage() {
    return <TermsOfServiceClient />;
}
