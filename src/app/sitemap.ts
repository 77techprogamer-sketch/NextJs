import { MetadataRoute } from 'next'
import { cityData, isCityContentRich } from '@/data/cityData'
import { services } from '@/data/services'
import { faqData } from '@/data/faqData'

const BASE_url = 'https://insurancesupport.online'

// Dynamic dates: each group reflects its actual update frequency
const now = new Date()
const todayISO = now.toISOString()
const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes = [
        '',
        '/support',
        '/about',
        '/privacy-policy',
        '/terms-of-service',
        '/return-policy',
        '/get-started',
        '/resources',
        '/contact',
        '/locations',
        '/services',
        '/loans',
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: route === '' || route === '/locations' || route === '/services' ? 1 : 0.8,
    }))

    const locations = Object.keys(cityData).filter(city => isCityContentRich(cityData[city]))

    const serviceRoutes = services.map((slug: string) => ({
        url: `${BASE_url}/services/${slug}`,
        lastModified: todayISO,
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }))

    const locationRoutes = locations.map((city) => ({
        url: `${BASE_url}/locations/${city}`,
        lastModified: sevenDaysAgo,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }))

    const resourceSubPages = [
        '/resources/how-it-works',
        '/resources/veteran-advantage',
        '/resources/bangalore-insurance-support',
        '/tools/policy-recovery',
        '/tools/risk-scorecard',
        '/tools/human-life-value-calculator',
        '/tools/term-insurance-calculator',
        '/resources/download-policy-copy',
        '/resources/general-insurance-claim-process',
        '/success-stories',
        '/resources/guides/death-claim-settlement',
        '/resources/guides/lapsed-policy-revival',
        '/resources/guides/maturity-claim-guide',
        '/resources/guides/lic-death-claim-rejection-appeal',
        '/resources/guides/health-insurance-rejection-reasons-guide',
        '/resources/guides/irdai-complaint-portal-guide',
        '/resources/guides/claim-rejection-appeal',
        '/resources/guides/term-vs-life-insurance',
        '/resources/guides/documents-for-death-claim',
        '/resources/guides/cashless-hospitalization-guide',
        '/resources/guides/health-insurance-claim-checklist',
    ].map((route) => ({
        url: `${BASE_url}${route}`,
        lastModified: sevenDaysAgo,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const faqRoutes = faqData.map((faq) => ({
        url: `${BASE_url}/resources/faq/${faq.slug}`,
        lastModified: sevenDaysAgo,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }))

    const allCityKeys = Object.keys(cityData)
    const matrixRoutes: MetadataRoute.Sitemap = []
    allCityKeys.forEach(city => {
        const isRich = isCityContentRich(cityData[city])
        if (!isRich) return; // Skip non-rich cities to prevent 'Crawled - currently not indexed'

        services.forEach(service => {
            matrixRoutes.push({
                url: `${BASE_url}/locations/${city}/${service}`,
                lastModified: thirtyDaysAgo,
                changeFrequency: 'monthly' as const,
                priority: 0.5,
            })
        })
    })

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...resourceSubPages, ...matrixRoutes, ...faqRoutes]
}
