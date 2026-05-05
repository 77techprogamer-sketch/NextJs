import { getServerSideTranslation } from '@/lib/i18n-server';
import PolicyRecoveryClient from '@/components/tools/PolicyRecoveryClient';

export async function generateMetadata() {
    const { t } = await getServerSideTranslation();
    return {
        title: t('recovery_page.meta_title'),
        description: t('recovery_page.meta_desc'),
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
}

export default async function PolicyRecoveryPage() {
    return <PolicyRecoveryClient />;
}
