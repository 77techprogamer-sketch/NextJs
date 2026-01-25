export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: 'Insurance Support',
        alternateName: 'Insurance Support Online',
        image: 'https://insurancesupport.online/brand-favicon.svg',
        '@id': 'https://insurancesupport.online',
        url: 'https://insurancesupport.online',
        telephone: '+919986634506',
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
        priceRange: '₹₹',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '09:00',
            closes: '21:00'
        },
        // sameAs: [
        //     'https://www.facebook.com/insurancesupport', 
        //     'https://twitter.com/insurancesupport',
        //     'https://www.instagram.com/insurancesupport'
        // ]
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
