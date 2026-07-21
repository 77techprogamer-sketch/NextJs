import { Metadata } from 'next';
import { getStaticTranslation } from "@/lib/i18n-server";
import { LocalBusinessJsonLd } from '@/components/ServerJsonLd';
import HomeClient from '@/components/HomeClient';




export async function generateMetadata(): Promise<Metadata> {
    const { t } = getStaticTranslation();
    
    return {
        title: {
            absolute: t('home_page_title')
        },
        description: t('home_page_meta_description'),
        keywords: [
            'LIC Insurance Support',
            'Insurance Claim Recovery India',
            'Rejected Claim Appeal Help',
            'LIC Agent Bangalore',
            'Insurance Advisor India',
            'Claim Settlement Support',
            'Lost Policy Recovery',
            'LIC Policy Status Check',
            'Insurance Consultancy'
        ],
        metadataBase: new URL('https://insurancesupport.online'),
        alternates: {
            canonical: '/',
        },
        openGraph: {
            title: t('home_page_title'),
            description: t('home_page_meta_description'),
            url: 'https://insurancesupport.online',
            siteName: 'Insurance Support India',
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('home_page_title'),
            description: t('home_page_meta_description'),
        }
    };
}

export default async function Home() {
    const { t } = getStaticTranslation();
    
    return (
        <>
            <LocalBusinessJsonLd />
            <HomeClient
                initialTitle={t('hero_title')}
                initialDescription={t('secure_family_future')}
            />
        </>
    );
}


