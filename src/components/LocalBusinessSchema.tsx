import React from 'react';

interface LocalBusinessSchemaProps {
    city: string;
}

export default function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
    const formatCity = (str: string) => {
        if (!str) return '';
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const cityName = formatCity(city);
    if (!cityName) return null;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        '@id': `https://insurancesupport.online/locations/${city}#organization`,
        name: `Insurance Support ${cityName}`,
        url: `https://insurancesupport.online/locations/${city}`,
        description: `Expert insurance consultant and advisor in ${cityName}. providing Life, Health, and General insurance services.`,
        areaServed: {
            '@type': 'City',
            name: cityName
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: cityName,
            addressCountry: 'IN'
        },
        telephone: '+919986634506',
        priceRange: '₹₹',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '21:00'
        },
        provider: {
            '@id': 'https://insurancesupport.online/#organization'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
