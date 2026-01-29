import { WithContext, Organization, WebSite, InsuranceAgency, Service, FAQPage } from 'schema-dts';
import enTranslations from '../../public/locales/en/translation.json';

// Type for the translation object to ensure type safety if needed, 
// though direct import infers types.
const t = (key: keyof typeof enTranslations) => {
    return enTranslations[key] || key;
};

export function GlobalJsonLd() {
    const jsonLd: { '@context': string; '@graph': (Organization | WebSite)[] } = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://insurancesupport.online/#organization',
                name: 'Insurance Support',
                url: 'https://insurancesupport.online',
                logo: 'https://insurancesupport.online/brand-favicon.svg',
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+919986634506',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi', 'kn']
                },
                sameAs: [
                    'https://www.facebook.com/insurancesupport',
                    'https://twitter.com/insurancesupport',
                    'https://www.instagram.com/insurancesupport'
                ]
            },
            {
                '@type': 'WebSite',
                '@id': 'https://insurancesupport.online/#website',
                url: 'https://insurancesupport.online',
                name: 'Insurance Support Online',
                description: t('services_description') || 'Your trusted partner for all insurance related queries and support.',
                publisher: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://insurancesupport.online/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                } as any
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
    const faqs = [
        { q: "faq_life_q1", a: "faq_life_a1" },
        { q: "faq_life_q2", a: "faq_life_a2" },
        { q: "faq_health_q1", a: "faq_health_a1" },
        { q: "faq_health_q2", a: "faq_health_a2" },
        { q: "faq_term_q1", a: "faq_term_a1" },
        { q: "faq_motor_q1", a: "faq_motor_a1" },
    ] as const;

    const faqSchema: FAQPage = {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: t(faq.q),
            acceptedAnswer: {
                '@type': 'Answer',
                text: t(faq.a)
            }
        }))
    };

    const jsonLd: { '@context': string; '@graph': (InsuranceAgency | Service | FAQPage)[] } = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'InsuranceAgency',
                '@id': 'https://insurancesupport.online/#local-business',
                name: 'Insurance Support Bangalore',
                alternateName: [
                    'Insurance Support Online',
                    'LIC Insurance Support',
                    'Insurance Agent Kotian'
                ],
                url: 'https://insurancesupport.online',
                logo: 'https://insurancesupport.online/brand-favicon.svg',
                image: 'https://insurancesupport.online/brand-favicon.svg',
                description: t('services_description') || 'Expert insurance support online for LIC, Health, Motor, and Life policies.',
                telephone: '+919986634506',
                email: 'contact@insurancesupport.online',
                priceRange: '₹₹',
                areaServed: {
                    '@type': 'City',
                    name: 'Bangalore'
                },
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
                }
            },
            {
                '@type': 'Service',
                name: 'LIC Policy Management',
                provider: {
                    '@id': 'https://insurancesupport.online/#local-business'
                },
                serviceType: 'Insurance Advisory',
                areaServed: {
                    '@type': 'City',
                    name: 'Bangalore'
                },
                description: 'Expert help with LIC policy surrender, maturity claims, and lost policy bond retrieval.'
            },
            {
                '@type': 'Service',
                name: 'Insurance Claims Assistance',
                provider: {
                    '@id': 'https://insurancesupport.online/#local-business'
                },
                serviceType: 'Claims Support',
                areaServed: {
                    '@type': 'City',
                    name: 'Bangalore'
                },
                description: 'Professional assistance for rejected Life, Health, and Motor insurance claims.'
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
