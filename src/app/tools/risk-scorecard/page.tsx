import { getServerSideTranslation } from '@/lib/i18n-server';
import RiskScorecardClient from '@/components/tools/RiskScorecardClient';

export async function generateMetadata() {
    const { t } = await getServerSideTranslation();
    return {
        title: t('scorecard_page.meta_title'),
        description: t('scorecard_page.meta_desc'),
        keywords: [
            'Insurance risk assessment',
            'Insurance coverage gaps',
            'Life insurance calculator India',
            'Health insurance risk score',
            'Insurance adequacy check',
            'Free insurance quiz',
            'Insurance gap analysis',
        ],
        alternates: {
            canonical: 'https://insurancesupport.online/tools/risk-scorecard',
        },
    };
}

export default async function RiskScorecardPage() {
    return <RiskScorecardClient />;
}
