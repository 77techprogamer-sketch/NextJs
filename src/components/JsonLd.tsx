
export function GlobalSchema() {
    const jsonLd = {
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
                description: 'Your trusted partner for all insurance related queries and support.',
                publisher: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://insurancesupport.online/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                }
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

export function LocalBusinessSchema() {
    const jsonLd = {
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
                description: 'Expert insurance support online for LIC, Health, Motor, and Life policies. Assistance with claims, renewals, and new quotes.',
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
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'What is the entry age for life insurance?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Typically, the entry age starts from 18 years up to 65 years, depending on the specific plan chosen.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Can I have multiple life insurance policies?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes, you can hold multiple policies from different providers as long as you disclose them during the application process.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Does health insurance cover pre-existing diseases?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Most plans cover pre-existing diseases after a waiting period, which usually ranges from 2 to 4 years.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'What is a \'Cashless Claim\' in health insurance?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'It allows you to get treated at network hospitals without paying the bills upfront; the insurer settles it directly with the hospital.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Will my family get the money if I die outside India?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes, term insurance provides global coverage as long as the policy is active and the cause of death is covered.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Is Third-Party insurance enough for my car?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Third-Party is mandatory by law, but a Comprehensive plan is recommended as it also covers damages to your own vehicle.'
                        }
                    }
                ]
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

export default GlobalSchema;

