import { getServerSideTranslation } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getServerSideTranslation();
    
    return {
        title: {
            absolute: t('home_meta_title')
        },
        description: t('home_meta_desc'),
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
            title: t('home_meta_title'),
            description: t('home_meta_desc'),
            url: 'https://insurancesupport.online',
            siteName: 'Insurance Support India',
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('home_meta_title'),
            description: t('home_meta_desc'),
        }
    };
}

export default async function Home() {
    const { t } = await getServerSideTranslation();
    
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

