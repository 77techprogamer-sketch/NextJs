import { getStaticTranslation } from '@/lib/static-i18n';
import RiskScorecardClient from '@/components/tools/RiskScorecardClient';



export async function generateMetadata() {
    const { t } = getStaticTranslation();
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

