import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock } from "lucide-react"
import ServiceContent from "@/components/ServiceContent"

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

    return {
        title: {
            absolute: `${service.title} Plans: Compare & Buy India`
        },
        description: service.description,
        keywords: [
            service.title,
            `${service.title} Quotes India`,
            `Best ${service.title} in India`,
            `${service.title} Agent India`,
            `${service.title} Bangalore`,
            `${service.title} Support`,
            "Insurance Support India",
            "Online Insurance Agent",
            `${service.title} Policy India`,
            `Buy ${service.title} Online`,
            `${service.title} Benefits`,
            `${service.title} Renewal`,
            ...(service.features || [])
        ],
        openGraph: {
            title: `${service.title} Quotes | Insurance Support India`,
            description: service.description,
            url: `https://insurancesupport.online/services/${params.serviceType}`,
            siteName: 'Insurance Support India',
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
            <ServiceContent
                serviceType={params.serviceType}
                iconName={assets.iconName}
                imagePath={assets.image}
            />
        </>
    )
}
