import React from 'react';
import { Metadata } from 'next';
import SupportClient from '@/components/SupportClient';

export const metadata: Metadata = {
    title: 'Contact Us | Insurance Support India',
    description: 'Contact our expert insurance advisors for quick support. Call us or send an inquiry for Life, Health, and Motor insurance services.',
    keywords: ['Contact Insurance Agent', 'Insurance Support Number', 'LIC Agent Contact', 'Insurance Inquiry'],
    alternates: {
        canonical: './',
    },
};

export default function ContactPage() {
    return <SupportClient />;
}
