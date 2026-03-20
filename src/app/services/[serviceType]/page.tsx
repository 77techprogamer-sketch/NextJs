import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock } from "lucide-react"
import ServiceContent from "@/components/ServiceContent"
import { CityLinksForService } from "@/components/KeywordLinkBlocks"

// Define all services data statically for SEO/Metadata
import translations from '@/../public/locales/en/translation.json';

// Define assets mapping (images/icons) which are not in translation files
const servicesAssets: Record<string, { icon: any, iconName: string, image: string }> = {
    "life-insurance": {
        icon: Shield,
        iconName: "Shield",
        image: "/life-insurance.png"
    },
    "health-insurance": {
        icon: Heart,
        iconName: "Heart",
        image: "/health-insurance.png"
    },
    "motor-insurance": {
        icon: Car,
        iconName: "Car",
        image: "/motor-insurance.png"
    },
    "term-insurance": {
        icon: Home,
        iconName: "Home",
        image: "/term-insurance.png"
    },
    "sme-insurance": {
        icon: Briefcase,
        iconName: "Briefcase",
        image: "/sme-insurance.png"
    },
    "travel-insurance": {
        icon: Plane,
        iconName: "Plane",
        image: "/travel-insurance.png"
    },
    "pension-plans": {
        icon: Coins,
        iconName: "Coins",
        image: "/pension-plans.png"
    },
    "ulip-plans": {
        icon: UserCheck,
        iconName: "UserCheck",
        image: "/ulip-plans.png"
    },
    "wedding-insurance": {
        icon: Heart,
        iconName: "Heart",
        image: "/wedding-insurance.png"
    },
    "cyber-insurance": {
        icon: Lock,
        iconName: "Lock",
        image: "/cyber-insurance.png"
    }
}

type ServiceType = keyof typeof servicesAssets

// SSG: Generate params for all services defined in assets
export function generateStaticParams() {
    return Object.keys(servicesAssets).map((serviceType) => ({
        serviceType: serviceType,
    }))
}

// Meta: Generate SEO tags for each service using imported translations
export function generateMetadata({ params }: { params: { serviceType: string } }): Metadata {
    const serviceKey = params.serviceType as ServiceType
    const assets = servicesAssets[serviceKey]

    // Type assertion for translation data structure
    const tServices = translations.services_data as Record<string, any>;
    const service = tServices[serviceKey];

    if (!service || !assets) return {}

    // Intent-specific titles for better SERP appeal
    const titleMap: Record<string, string> = {
        'life-insurance': `Best Life Insurance Plans in India | LIC & Private Policies – Insurance Support`,
        'health-insurance': `Health Insurance Advisor India | Cashless & Claim Recovery Support`,
        'term-insurance': `Term Insurance Plans India | High Cover at Low Premium – Free Quote`,
        'motor-insurance': `Motor Insurance Renewal & Claims India | Instant Quotes – Insurance Support`,
        'cyber-insurance': `Cyber Insurance in India | Data Breach & Fraud Protection Plans`,
        'sme-insurance': `SME & Business Insurance India | Protect Your Company – Insurance Support`,
        'travel-insurance': `Travel Insurance India | Trip Cancellation & Medical Coverage`,
        'pension-plans': `Pension & Retirement Plans India | Secure Post-Retirement Income`,
        'ulip-plans': `ULIP Plans India | Investment + Life Cover Advisor – Insurance Support`,
        'wedding-insurance': `Wedding Insurance India | Event Cancellation & Venue Coverage`,
    };
    const descriptionMap: Record<string, string> = {
        'life-insurance': `Compare top LIC & private life insurance plans in India. Get free expert advice on payouts, nominees, and policy revival from our IRDAI-certified team. Free doorstep consultation.`,
        'health-insurance': `Get cashless health insurance tailored for you. We help resolve rejected claims, find network hospitals, and secure the best premium. 25+ years experience. Call now for a free review.`,
        'term-insurance': `Buy high-coverage term insurance at the lowest premium in India. Our advisors compare all top plans and ensure claim settlement support. Get a free quote today.`,
        'motor-insurance': `Renew motor insurance in minutes. We compare all IRDAI-approved insurers, protect your IDV, and assist with zero-dep claims across India. Instant digital renewal.`,
        'cyber-insurance': `Protect your business and personal data with India-specific cyber insurance. Coverage for ransomware, phishing, identity theft & data breach. Get a free risk assessment now.`,
        'sme-insurance': `Comprehensive business insurance for SMEs in India. Covers fire, liability, employee health, and trade credit risks. Expert advice for your industry. Call for a free consultation.`,
        'travel-insurance': `Secure your international and domestic trips. We provide travel insurance covering medical emergencies, trip cancellations, and lost baggage. Instant plans, 24/7 support.`,
        'pension-plans': `Plan a worry-free retirement. Compare NPS, LIC pension, and annuity plans with expert guidance to maximize your post-retirement income. Book a free financial review.`,
        'ulip-plans': `Maximize wealth with ULIP plans combining life cover + market-linked returns. Our advisors benchmark fund performance and switch strategies for you. Free portfolio review.`,
        'wedding-insurance': `Protect your big day with wedding insurance in India. Coverage for cancellations, vendor no-shows, fire, and accidental damage. Get quotes in minutes.`,
    };

    const title = titleMap[serviceKey] || `${service.title} Advisor in India | Plans, Claims & Support – Insurance Support`;
    const description = descriptionMap[serviceKey] || service.description;

    return {
        title: {
            absolute: title
        },
        description: description,
        keywords: [
            service.title,
            `${service.title} Quotes India`,
            `Best ${service.title} in India`,
            `${service.title} Advisor India`,
            `${service.title} Bangalore`,
            `${service.title} Support`,
            "Insurance Support",
            "Insurance Advisor",
            `${service.title} policy check`,
            `buy ${service.title} online`,
            `${service.title} advisor near me`,
            `IRDAI certified ${service.title} advisor`,
            `best ${service.title} broker`,
            `top rated ${service.title} company`,
            `${service.title} consultant near me`,
            `${service.title} Benefits`,
            `${service.title} Renewal`,
            ...(service.features || [])
        ],
        openGraph: {
            title: `${service.title} Quotes | Insurance Support`,
            description: service.description,
            url: `https://insurancesupport.online/services/${params.serviceType}`,
            siteName: 'Insurance Support',
            images: [
                {
                    url: assets.image,
                    width: 1200,
                    height: 600,
                    alt: service.title,
                }
            ],
            locale: 'en_IN',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} Quotes | Insurance Support`,
            description: service.description,
            images: [assets.image],
        },
        alternates: {
            canonical: `https://insurancesupport.online/services/${params.serviceType}`,
        },
    }
}

export default function ServicePage({ params }: { params: { serviceType: string } }) {
    const serviceKey = params.serviceType as ServiceType
    const assets = servicesAssets[serviceKey]

    const tServices = translations.services_data as Record<string, any>;
    const service = tServices[serviceKey];

    if (!service || !assets) {
        notFound()
    }

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@id': 'https://insurancesupport.online/#organization'
        },
        areaServed: {
            '@type': 'Country',
            name: 'India'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${service.title} Services`,
            itemListElement: (service.features || []).map((feature: string, index: number) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: feature
                }
            }))
        }
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
                'name': 'Services',
                'item': 'https://insurancesupport.online/services'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': service.title,
                'item': `https://insurancesupport.online/services/${params.serviceType}`
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServiceContent
                serviceType={params.serviceType}
                iconName={assets.iconName}
                imagePath={assets.image}
                title={service.title}
                description={service.description}
            />
            <div className="container mx-auto px-4 pb-16">
                <CityLinksForService
                    serviceSlug={params.serviceType}
                    serviceTitle={service.title}
                />
            </div>
        </>
    )
}
