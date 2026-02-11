import React from 'react';
import { Metadata } from 'next';
import SupportClient from '@/components/SupportClient';

export const metadata: Metadata = {
    title: {
        absolute: 'Contact Us | Insurance Support India'
    },
    description: 'Contact our expert insurance advisors for quick support. Call us or send an inquiry for Life, Health, and Motor insurance services.',
    keywords: [
        'Contact Insurance Agent',
        'Insurance Support Number',
        'LIC Agent Contact',
        'Insurance Inquiry',
        'Insurance Customer Care Number',
        'LIC Agent Phone Number',
        'Insurance Helpline India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/contact',
    },
};

export default function ContactPage() {
    return <SupportClient />;
}
