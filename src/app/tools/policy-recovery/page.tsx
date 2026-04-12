import { Metadata } from 'next';
import PolicyRecoveryClient from '@/components/tools/PolicyRecoveryClient';

export const metadata: Metadata = {
    title: 'Lost Policy Recovery Tool — Find Your Insurance Policy Number',
    description: 'Free tool to recover lost or forgotten LIC, health, and life insurance policy numbers. Search by name, PAN, or Aadhaar. Expert assistance for duplicate policy bonds.',
    keywords: [
        'Lost LIC policy number',
        'Find insurance policy number',
        'Lost policy recovery',
        'Duplicate policy bond',
        'LIC policy search by name',
        'Insurance policy recovery India',
        'Lost insurance documents',
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/tools/policy-recovery',
    },
};

export default function PolicyRecoveryPage() {
    return <PolicyRecoveryClient />;
}
