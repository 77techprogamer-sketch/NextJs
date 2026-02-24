import { InsuranceAgency, Service, FAQPage, BreadcrumbList } from 'schema-dts';
import enTranslations from '../../public/locales/en/translation.json';
import { faqData } from '@/data/faqData';

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
                logo: 'https://insurancesupport.online/favicon.svg',
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
                    'https://www.instagram.com/insurancesupport',
                    'https://share.google/2Cbcq7l39kTWJl2Dm'
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
                // Person schema — critical E-E-A-T for YMYL insurance niche
                '@type': 'Person',
                '@id': 'https://insurancesupport.online/#advisor',
                name: 'Kotian',
                jobTitle: 'Certified Insurance Advisor & Claim Recovery Specialist',
                description: 'Licensed insurance advisor with 25+ years of experience in LIC, health, motor, and life insurance claim recovery across India.',
                url: 'https://insurancesupport.online/about',
                telephone: '+919986634506',
                email: 'contact@insurancesupport.online',
                worksFor: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                knowsAbout: [
                    'Life Insurance',
                    'Health Insurance',
                    'LIC Policy Management',
                    'Insurance Claim Recovery',
                    'Motor Insurance',
                    'Term Insurance',
                    'Pension Plans'
                ],
                sameAs: [
                    'https://www.instagram.com/insurancesupport'
                ]
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
                // HowTo schema — targets "how to claim insurance India" featured snippets
                '@type': 'HowTo',
                name: 'How to File an Insurance Claim in India',
                description: 'Step-by-step guide to filing a life, health, or motor insurance claim in India with help from a certified advisor.',
                totalTime: 'P7D',
                supply: [
                    { '@type': 'HowToSupply', name: 'Policy documents' },
                    { '@type': 'HowToSupply', name: 'Identity proof (Aadhaar/PAN)' },
                    { '@type': 'HowToSupply', name: 'Claim form from insurer' }
                ],
                step: [
                    {
                        '@type': 'HowToStep',
                        position: 1,
                        name: 'Notify the Insurance Company',
                        text: 'Inform your insurer about the claim event within 24-48 hours via phone or online portal. For death claims, notify within 7 days.',
                        url: 'https://insurancesupport.online/support'
                    },
                    {
                        '@type': 'HowToStep',
                        position: 2,
                        name: 'Gather Required Documents',
                        text: 'Collect policy documents, ID proof, medical records (for health), FIR copy (for motor), or death certificate (for life claims).',
                        url: 'https://insurancesupport.online/resources'
                    },
                    {
                        '@type': 'HowToStep',
                        position: 3,
                        name: 'Submit the Claim Form',
                        text: 'Fill out the insurer\'s claim form accurately. Attach all supporting documents. Submit online or at the nearest branch.',
                        url: 'https://insurancesupport.online/support'
                    },
                    {
                        '@type': 'HowToStep',
                        position: 4,
                        name: 'Track Your Claim Status',
                        text: 'Note down your claim reference number and track status via the insurer\'s portal or helpline.',
                        url: 'https://insurancesupport.online/support'
                    },
                    {
                        '@type': 'HowToStep',
                        position: 5,
                        name: 'Escalate if Rejected',
                        text: 'If your claim is rejected, you can escalate to IRDAI Grievance Cell or seek help from a certified claim recovery specialist.',
                        url: 'https://insurancesupport.online/services/life-insurance'
                    }
                ]
            },
            { '@type': 'SiteNavigationElement', name: 'Home', url: 'https://insurancesupport.online' },
            { '@type': 'SiteNavigationElement', name: 'About Us', url: 'https://insurancesupport.online/about' },
            { '@type': 'SiteNavigationElement', name: 'Life Insurance', url: 'https://insurancesupport.online/services/life-insurance' },
            { '@type': 'SiteNavigationElement', name: 'Health Insurance', url: 'https://insurancesupport.online/services/health-insurance' },
            { '@type': 'SiteNavigationElement', name: 'Motor Insurance', url: 'https://insurancesupport.online/services/motor-insurance' },
            { '@type': 'SiteNavigationElement', name: 'Support', url: 'https://insurancesupport.online/support' },
            { '@type': 'SiteNavigationElement', name: 'Resources', url: 'https://insurancesupport.online/resources' }
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
                sameAs: [
                    'https://share.google/2Cbcq7l39kTWJl2Dm',
                    'https://www.facebook.com/insurancesupport',
                    'https://twitter.com/insurancesupport',
                    'https://www.instagram.com/insurancesupport'
                ],
                logo: 'https://insurancesupport.online/favicon.svg',
                image: 'https://insurancesupport.online/favicon.svg',
                hasMap: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
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
                    { '@type': 'Country', name: 'India' },
                    { '@type': 'City', name: 'Bangalore' },
                    { '@type': 'City', name: 'Mumbai' },
                    { '@type': 'City', name: 'Delhi' },
                    { '@type': 'City', name: 'Chennai' },
                    { '@type': 'City', name: 'Hyderabad' }
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
                employee: {
                    '@id': 'https://insurancesupport.online/#advisor'
                },
                review: [
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Prashanth S' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Best LIC consultant. Highly recommended. In-depth knowledge of LIC policies.',
                        datePublished: '2025-11-15'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Ayush Kandoi' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Positive experience. Excellent guidance for insurance planning.',
                        datePublished: '2025-12-02'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Meera Nair' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'My LIC death claim was stuck for over a year. Insurance Support resolved it in 3 weeks. Cannot thank them enough.',
                        datePublished: '2025-10-20'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Ravi Kumar' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Doorstep service is a game changer. They handled my entire policy revival without me visiting any office.',
                        datePublished: '2026-01-10'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Sneha Patil' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Got my maturity claim settled after my policy had lapsed. Professional and transparent throughout.',
                        datePublished: '2025-09-05'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Arun Sharma' },
                        reviewRating: { '@type': 'Rating', ratingValue: 4, bestRating: 5 },
                        reviewBody: 'Very knowledgeable team. Helped me understand my health insurance cover and get a rejected claim reconsidered.',
                        datePublished: '2025-08-18'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Priya Menon' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Found my lost LIC policy bond with their help. Never thought it was possible. Truly excellent service.',
                        datePublished: '2026-02-01'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Suresh Reddy' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Recommended by my friend. They helped me get the best term insurance for my family. Fast, honest, expert advice.',
                        datePublished: '2025-11-28'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Farida Khan' },
                        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                        reviewBody: 'Our group health insurance for 50+ employees was set up smoothly. Very professional team.',
                        datePublished: '2025-07-14'
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Dinesh Bhat' },
                        reviewRating: { '@type': 'Rating', ratingValue: 4, bestRating: 5 },
                        reviewBody: 'Helped me renew my motor insurance at a great price and also advised on a better health cover. Very helpful.',
                        datePublished: '2026-01-30'
                    }
                ] as any
            },
            {
                '@type': 'Service',
                name: 'LIC Policy Management',
                provider: { '@id': 'https://insurancesupport.online/#local-business' },
                serviceType: 'Insurance Advisory',
                areaServed: { '@type': 'Country', name: 'India' },
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
                provider: { '@id': 'https://insurancesupport.online/#local-business' },
                serviceType: 'Claims Support',
                areaServed: { '@type': 'Country', name: 'India' },
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
