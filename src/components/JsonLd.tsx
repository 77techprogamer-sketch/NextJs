export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'InsuranceAgency',
                '@id': 'https://insurancesupport.online/#organization',
                name: 'Insurance Support',
                alternateName: 'Insurance Support Online',
                url: 'https://insurancesupport.online',
                logo: 'https://insurancesupport.online/brand-favicon.svg',
                image: 'https://insurancesupport.online/brand-favicon.svg',
                description: 'Expert insurance support online for LIC, Health, Motor, and Life policies. Assistance with claims, renewals, and new quotes.',
                telephone: '+919986634506',
                email: 'contact@insurancesupport.online',
                priceRange: '₹₹',
                areaServed: {
                    '@type': 'Country',
                    name: 'India'
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
                sameAs: [
                    'https://www.facebook.com/insurancesupport',
                    'https://twitter.com/insurancesupport',
                    'https://www.instagram.com/insurancesupport'
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+919986634506',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi', 'kn']
                }
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
            },
            {
                '@type': 'Service',
                name: 'Insurance Consultation',
                provider: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                serviceType: 'Insurance Advisory',
                areaServed: {
                    '@type': 'Country',
                    name: 'India'
                },
                description: 'Professional consultation for Life, Health, Motor, and extensive insurance portfolio management.'
            },
            {
                '@type': 'Service',
                name: 'Claims Assistance',
                provider: {
                    '@id': 'https://insurancesupport.online/#organization'
                },
                serviceType: 'Insurance Claims Support',
                areaServed: {
                    '@type': 'Country',
                    name: 'India'
                },
                description: 'Expert assistance with insurance claim settlements and rejected claims.'
            }
        ]
    }

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    )
}
