import { Metadata } from 'next';
import RiskScorecardClient from '@/components/tools/RiskScorecardClient';

export const metadata: Metadata = {
    title: 'Free Insurance Risk Scorecard — Assess Your Coverage Gaps',
    description: 'Take a free 2-minute quiz to find hidden gaps in your insurance coverage. Get a personalized risk score and expert recommendations for Life, Health, and Motor insurance.',
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

export default function RiskScorecardPage() {
    return <RiskScorecardClient />;
}
