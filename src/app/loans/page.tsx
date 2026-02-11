import { Metadata } from 'next';
import LoansPageClient from '@/components/LoansPageClient';
import translations from '@/../public/locales/en/translation.json';

export const metadata: Metadata = {
    title: {
        absolute: 'Loans & Financial Services | Insurance Support India'
    },
    description: translations.loans_hero_description || 'Get the best loan offers specifically tailored for the Indian market. Home, Personal, Business loans and more.',
    keywords: ['Loans India', 'Home Loan', 'Personal Loan', 'Business Loan', 'Mortgage Loan', 'Education Loan', 'Vehicle Loan', 'Low Interest Loans'],
    openGraph: {
        title: 'Loans & Financial Services | Insurance Support India',
        description: translations.loans_hero_description || 'Get the best loan offers specifically tailored for the Indian market.',
        type: 'website',
        url: 'https://insurancesupport.online/loans',
        siteName: 'Insurance Support India',
        locale: 'en_IN',
    },
    alternates: {
        canonical: 'https://insurancesupport.online/loans',
    }
};

export default function LoansPage() {
    return <LoansPageClient />;
}
