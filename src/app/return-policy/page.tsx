import React from 'react';
import { Metadata } from 'next';
import ReturnPolicyClient from '@/components/ReturnPolicyClient';

export const metadata: Metadata = {
    title: {
        absolute: 'Return Policy | Insurance Support India'
    },
    description: 'Understand the Free Look Period and cancellation policy for insurance products. Learn about refunds and deductions.',
    keywords: ['Return Policy', 'Free Look Period', 'Insurance Cancellation', 'Refund Policy'],
    alternates: {
        canonical: 'https://insurancesupport.online/return-policy',
    },
};

export default function ReturnPolicyPage() {
    return <ReturnPolicyClient />;
}
