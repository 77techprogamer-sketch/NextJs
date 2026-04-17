import { getServerSideTranslation } from '@/lib/i18n-server'
import HLVCalculator from '@/components/tools/HLVCalculator'
import { Trans } from 'react-i18next/TransWithoutContext';

export async function generateMetadata() {
    const { t } = await getServerSideTranslation();
    return {
        title: t('hlv_page.meta_title'),
        description: t('hlv_page.meta_desc'),
        keywords: ['HLV Calculator', 'Human Life Value Calculator India', 'Life Insurance Calculator', 'Insurance Need Analysis'],
        openGraph: {
            title: t('hlv_page.meta_title'),
            description: t('hlv_page.meta_desc'),
            type: 'website',
        },
        alternates: {
            canonical: 'https://insurancesupport.online/tools/human-life-value-calculator',
        }
    }
}

export default async function HLVCalculatorPage() {
    const { t } = await getServerSideTranslation();
    const importanceItems = t('hlv_page.importance_items', { returnObjects: true }) as string[];

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    {t('hlv_page.title')}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('hlv_page.description')}
                </p>
            </div>

            <HLVCalculator />

            <div className="mt-16 prose dark:prose-invert max-w-none bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h2>{t('hlv_page.what_is_title')}</h2>
                <p>
                    {t('hlv_page.what_is_desc')}
                </p>

                <h3>{t('hlv_page.importance_title')}</h3>
                <ul>
                    {importanceItems.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>

                <h3>{t('hlv_page.how_calc_title')}</h3>
                <p>{t('hlv_page.how_calc_desc')}</p>
                <blockquote>
                    HLV = (Annual Income - Personal Expenses) × Years to Retirement + Outstanding Loans - Current Savings
                </blockquote>
            </div>
        </div>
    )
}
