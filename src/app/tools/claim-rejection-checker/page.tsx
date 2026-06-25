import { getStaticTranslation } from '@/lib/i18n-server';
import ClaimRejectionCheckerClient from '@/components/tools/ClaimRejectionCheckerClient';



export async function generateMetadata() {
    const { t } = getStaticTranslation();
    return {
        title: 'Claim Rejection Checker | Insurance Support',
        description: 'Has your insurance claim been unfairly rejected? Answer three quick questions to check the viability of an appeal to the Grievance Cell or Insurance Ombudsman.',
        keywords: [
            'Insurance claim rejection',
            'Rejected claim appeal',
            'Insurance grievance',
            'Ombudsman appeal',
            'Health insurance claim rejected',
            'Life insurance claim rejected',
            'Claim appeal viability',
        ],
        alternates: {
            canonical: 'https://insurancesupport.online/tools/claim-rejection-checker',
        },
    };
}

export default async function ClaimRejectionCheckerPage() {
    return <ClaimRejectionCheckerClient />;
}

