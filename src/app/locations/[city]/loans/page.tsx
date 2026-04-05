import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityData, cityData, isCityContentRich } from '@/data/cityData'
import LoansPageClient from '@/components/LoansPageClient'
import { contactConfig } from '@/data/contact'

interface Props {
    params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = getCityData(params.city)

    if (!city || !city.slug.startsWith('bangalore')) return {}

    const title = `Best Loans Advisor in ${city.name} | Lowest Interest Rates`;
    const description = `Looking for the best Home, Personal, or Business loans in ${city.name}? Insurance Support provides the lowest interest rates and fastest approvals across ${city.areas.slice(0, 3).join(', ')}.`;

    return {
        ...(isCityContentRich(city) ? {} : { robots: { index: false, follow: true } }),
        title: {
            absolute: title
        },
        description: description,
        keywords: [
            `Loans ${city.name}`,
            `Best Loan Advisor in ${city.name}`,
            `Home Loan ${city.name}`,
            `Personal Loan ${city.name}`,
            `low interest loans near me ${city.name}`,
            ...city.areas.slice(0, 5).map(area => `loans near ${area}`),
        ],
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.city}/loans`,
        },
        openGraph: {
            title: `Best Loans in ${city.name} – Quick Approval | Insurance Support`,
            description: description,
            type: 'website',
        }
    }
}

export async function generateStaticParams() {
    const params: { city: string }[] = []

    Object.keys(cityData).forEach((city) => {
        // As per requirements, generate only for Bangalore locations for now
        if (city.startsWith('bangalore')) {
            params.push({ city })
        }
    })

    return params
}

export default function LoansLocationPage({ params }: Props) {
    const city = getCityData(params.city)

    if (!city || !city.slug.startsWith('bangalore')) {
        return notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: `Loans - Insurance Support in ${city.name}`,
        description: `Expert Loan services in ${city.name}. Lowest interest rates and fast approvals for home, personal, and business loans.`,
        url: `https://insurancesupport.online/locations/${params.city}/loans`,
        telephone: contactConfig.phoneFull,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '185',
            bestRating: '5',
            worstRating: '1'
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: city.state,
            addressCountry: "IN"
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates?.[0],
            longitude: city.coordinates?.[1]
        },
        areaServed: {
            '@type': 'City',
            name: city.name
        }
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': `Who provides the best loans in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Insurance Support offers comprehensive loan assistance in ${city.name}, helping you secure home, personal, and business loans with the lowest interest rates.`
                }
            },
            {
                '@type': 'Question',
                'name': `How fast can I get a loan approved in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `With our 20+ lending partners, you can get quick approvals in 24-48 hours across all major areas including ${city.areas.slice(0, 3).join(', ')}.`
                }
            }
        ]
    }

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://insurancesupport.online'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Locations',
                'item': 'https://insurancesupport.online/locations'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': city.name,
                'item': `https://insurancesupport.online/locations/${params.city}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Loans',
                'item': `https://insurancesupport.online/locations/${params.city}/loans`
            }
        ]
    }

    return (
        <div className="w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <LoansPageClient 
                customTitle={`Best Loans in ${city.name}`}
                customDescription={`Get the lowest interest rates and quickest approvals directly at your doorstep in ${city.name}. We provide fast, hassle-free processing for Home, Business, and Personal loans.`}
            />
        </div>
    )
}
