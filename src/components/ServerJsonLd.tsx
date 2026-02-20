import { WithContext, Organization, WebSite, InsuranceAgency, Service, FAQPage, BreadcrumbList, SiteNavigationElement, AggregateRating, Offer } from 'schema-dts';
import enTranslations from '../../public/locales/en/translation.json';
import { faqData } from '@/data/faqData';

// Type for the translation object to ensure type safety if needed, 
// though direct import infers types.
const t = (key: string) => {
    return (enTranslations as any)[key] || key;
};

export function GlobalJsonLd() {
    const jsonLd: any = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://insurancesupport.online/#organization',
                name: 'Insurance Support',
                url: 'https://insurancesupport.online',
                logo: 'https://insurancesupport.online/brand-favicon.svg',
                email: 'contact@insurancesupport.online',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bangalore',
                    addressRegion: 'KA',
                    addressCountry: 'IN'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+919986634506',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi', 'kn', 'ta', 'te', 'mr', 'gu']
                },
                sameAs: [
                    'https://www.facebook.com/insurancesupport',
                    'https://twitter.com/insurancesupport',
                    'https://www.instagram.com/insurancesupport'
                ],
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: 4.8,
                    reviewCount: 156,
                    bestRating: 5,
                    worstRating: 1
                }
            },
            {
                '@type': 'WebSite',
                '@id': 'https://insurancesupport.online/#website',
                url: 'https://insurancesupport.online',
                name: 'Insurance Support India',
                description: (t('services_description') as string) || 'Your trusted partner for all insurance related queries and support.',
                publisher: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://insurancesupport.online/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                } as any
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'Home',
                url: 'https://insurancesupport.online'
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'About Us',
                url: 'https://insurancesupport.online/about'
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'Life Insurance',
                url: 'https://insurancesupport.online/services/life-insurance'
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'Health Insurance',
                url: 'https://insurancesupport.online/services/health-insurance'
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'Motor Insurance',
                url: 'https://insurancesupport.online/services/motor-insurance'
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'Support',
                url: 'https://insurancesupport.online/support'
            },
            {
                '@type': 'SiteNavigationElement',
                name: 'Resources',
                url: 'https://insurancesupport.online/resources'
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export function LocalBusinessJsonLd() {
    const faqSchema: FAQPage = {
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: t(faq.questionKey) as string,
            acceptedAnswer: {
                '@type': 'Answer',
                text: t(faq.answerKey) as string
            }
        }))
    };

    const jsonLd: { '@context': string; '@graph': (InsuranceAgency | Service | FAQPage | BreadcrumbList)[] } = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'InsuranceAgency',
                '@id': 'https://insurancesupport.online/#local-business',
                name: 'Insurance Support India',
                alternateName: [
                    'Insurance Support Online',
                    'LIC Insurance Support',
                    'Insurance Agent Kotian',
                    'Claim Recovery Experts',
                    'Rejected Claim Specialists'
                ],
                url: 'https://insurancesupport.online',
                logo: 'https://insurancesupport.online/brand-favicon.svg',
                image: 'https://insurancesupport.online/brand-favicon.svg',
                description: (t('services_description') as string) || 'Expert insurance support online for LIC, Health, Motor, and Life policies. Specializing in rejected claims and lost policies.',
                telephone: '+919986634506',
                email: 'contact@insurancesupport.online',
                priceRange: '₹₹',
                aggregateRating: {
                    '@type': 'AggregateRating',
                    name: 'Insurance Support Customer Satisfaction',
                    ratingValue: 4.8,
                    reviewCount: 156,
                    bestRating: 5,
                    worstRating: 1
                } as any,
                areaServed: [
                    {
                        '@type': 'Country',
                        name: 'India'
                    },
                    {
                        '@type': 'City',
                        name: 'Bangalore'
                    }
                ],
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Bangalore',
                    addressLocality: 'Bangalore',
                    addressRegion: 'KA',
                    postalCode: '560001',
                    addressCountry: 'IN'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 12.9716,
                    longitude: 77.5946
                },
                openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '09:00',
                    closes: '21:00'
                },
                parentOrganization: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                review: [
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Prashanth S' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5 },
                        reviewBody: 'Best LIC consultant. Highly recommended. In-depth knowledge of LIC policies.'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Ayush Kandoi' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5 },
                        reviewBody: 'Positive experience. Excellent guidance for insurance planning.'
                    }
                ] as any
            },
            {
                '@type': 'Service',
                name: 'LIC Policy Management',
                provider: {
                    '@id': 'https://insurancesupport.online/#local-business'
                },
                serviceType: 'Insurance Advisory',
                areaServed: {
                    '@type': 'Country',
                    name: 'India'
                },
                description: 'Expert help with LIC policy surrender, maturity claims, and lost policy bond retrieval.',
                image: 'https://insurancesupport.online/life-insurance.png',
                offers: {
                    '@type': 'Offer',
                    price: 500,
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock',
                    url: 'https://insurancesupport.online/services/life-insurance'
                }
            },
            {
                '@type': 'Service',
                name: 'Insurance Claims Assistance',
                provider: {
                    '@id': 'https://insurancesupport.online/#local-business'
                },
                serviceType: 'Claims Support',
                areaServed: {
                    '@type': 'Country',
                    name: 'India'
                },
                description: 'Professional assistance for rejected Life, Health, and Motor insurance claims.',
                image: 'https://insurancesupport.online/health-insurance.png',
                offers: {
                    '@type': 'Offer',
                    price: 1000,
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock',
                    url: 'https://insurancesupport.online/services/health-insurance'
                }
            },
            faqSchema
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
