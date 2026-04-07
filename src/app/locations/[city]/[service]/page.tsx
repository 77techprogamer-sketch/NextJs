import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityData, cityData, isCityContentRich } from '@/data/cityData'
import { services, serviceLabels } from '@/data/services'
import ServiceLocationClient from '@/components/ServiceLocationClient'
import { contactConfig } from '@/data/contact';
import { generateUniqueContent } from '@/utils/contentEngine'
import { fetchCityPincodes } from '@/lib/supabase-server';

interface Props {
    params: { city: string; service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = getCityData(params.city)
    const serviceLabel = serviceLabels[params.service]

    if (!city || !serviceLabel) return {}

    const isLicRelated = params.service.includes('lic') || params.service.includes('life');
    const isHealthRelated = params.service.includes('health');
    const isMotor = params.service.includes('motor');
    
    let title = `${serviceLabel} Advisor in ${city.name} – Call ${contactConfig.phone}`;
    
    if (isLicRelated) {
        title = `${serviceLabel} Office & Agent Support ${city.name} – Call ${contactConfig.phone}`;
    } else if (isHealthRelated) {
        title = `${serviceLabel} Advisor in ${city.name} – Cashless Support & Call ${contactConfig.phone}`;
    } else if (isMotor) {
        title = `${serviceLabel} Agent in ${city.name} – Fast Renewal & Call ${contactConfig.phone}`;
    }

    const uniqueMetaDescription = generateUniqueContent(params.service, city);
    const pincodes = await fetchCityPincodes(city.name, 10);
    const localKeywords = pincodes.length > 0 
        ? pincodes.map(p => `${serviceLabel} near ${p.post_office}`)
        : city.areas.slice(0, 5).map(area => `${serviceLabel} near ${area}`);
        
    const enrichedDescription = pincodes.length > 0
        ? `${uniqueMetaDescription.substring(0, 100)}... Providing ${serviceLabel} across ${pincodes.slice(0, 3).map(p => p.post_office).join(', ')}.`
        : uniqueMetaDescription.substring(0, 160);

    return {
        robots: { index: true, follow: true },
        title: {
            absolute: title
        },
        description: enrichedDescription.substring(0, 160),
        keywords: [
            `Call ${serviceLabel} agent in ${city.name}`,
            `Talk to ${serviceLabel} advisor on phone ${city.name}`,
            `Book a call for ${serviceLabel} ${city.name}`,
            `${serviceLabel} ${city.name}`,
            `${serviceLabel} consultant near me ${city.name}`,
            ...localKeywords,
        ],
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.city}/${params.service}`,
        },
        openGraph: {
            title: `Best ${serviceLabel} in ${city.name} – Doorstep Service | Insurance Support`,
            description: `5,000+ families trust us for ${serviceLabel} in ${city.name}. ✔ 98% claim success ✔ Free doorstep consultation. Book your free call now!`,
            type: 'website',
        }
    }
}

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = []

    Object.keys(cityData).forEach((city) => {
        services.forEach((service) => {
            params.push({ city, service })
        })
    })

    return params
}

export default async function ServiceLocationPage({ params }: Props) {
    const city = getCityData(params.city)
    const serviceLabel = serviceLabels[params.service]
    const serviceSlug = params.service

    if (!city || !serviceLabel) {
        return notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: `${serviceLabel} - Insurance Support in ${city.name}`,
        description: `Expert ${serviceLabel} services in ${city.name}. 25+ years of trust and 98% claim settlement ratio by Insurance Support.`,
        url: `https://insurancesupport.online/locations/${params.city}/${params.service}`,
        telephone: contactConfig.phoneFull,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '312',
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
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${serviceLabel} Services`,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${serviceLabel} Consultation`
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${serviceLabel} Renewal`
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: `${serviceLabel} Claim Assistance`
                    }
                }
            ]
        }
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': `Who is the best ${serviceLabel} advisor in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Insurance Support is a top-rated agency in ${city.name} with 25+ years of experience, offering 98% claim settlement assurance and doorstep service for all ${serviceLabel} needs.`
                }
            },
            {
                '@type': 'Question',
                'name': `How can I renew my ${serviceLabel} in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `You can renew your ${serviceLabel} instantly through Insurance Support. We provide expert guidance to ensure you get the maximum benefits and IDV for your policy in ${city.name}.`
                }
            },
            {
                '@type': 'Question',
                'name': `Does Insurance Support provide doorstep service in ${city.name}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, our expert advisors provide doorstep service across ${city.name}, including ${city.areas.slice(0, 3).join(', ')} and surrounding regions.`
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
                'name': serviceLabel,
                'item': `https://insurancesupport.online/locations/${params.city}/${params.service}`
            }
        ]
    }

    return (
        <div className="container px-4 py-12 mx-auto">
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

            <ServiceLocationClient 
                city={city} 
                serviceSlug={serviceSlug} 
                serviceLabel={serviceLabel} 
                uniqueDescription={generateUniqueContent(serviceSlug, city)}
                localOffices={await fetchCityPincodes(city.name, 12)}
            />
        </div>
    )
}
