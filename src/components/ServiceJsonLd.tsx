import { WithContext, Service, BreadcrumbList } from 'schema-dts'

interface ServiceJsonLdProps {
    title: string;
    description: string;
    url: string;
    image: string;
}

export default function ServiceJsonLd({ title, description, url, image }: ServiceJsonLdProps) {
    const serviceSchema: WithContext<Service> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description: description,
        provider: {
            '@type': 'InsuranceAgency',
            name: 'Insurance Support',
            image: 'https://insurance-support.vercel.app/brand-favicon.svg',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangalore',
                addressRegion: 'KA',
                addressCountry: 'IN'
            },
            telephone: '+919986634506',
            url: 'https://insurance-support.vercel.app'
        },
        areaServed: {
            '@type': 'City',
            name: 'Bangalore'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: title,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${title} Consultation`
                    }
                }
            ]
        },
        image: image,
        url: url
    }

    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://insurance-support.vercel.app'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: title,
                item: url
            }
        ]
    }

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </section>
    )
}
