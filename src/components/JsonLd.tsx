export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: 'Insurance Support',
        image: 'https://insurance-support.vercel.app/logo.png', // Assuming a logo exists, or use a default image
        '@id': 'https://insurance-support.vercel.app',
        url: 'https://insurance-support.vercel.app',
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
            opens: '00:00',
            closes: '23:59'
        },
        sameAs: [
            'https://www.facebook.com/insurancesupport', // Example placeholders
            'https://twitter.com/insurancesupport',
            'https://www.instagram.com/insurancesupport'
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
