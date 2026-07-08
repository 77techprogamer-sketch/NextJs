import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, Building, TrendingUp } from "lucide-react"
import ServiceContent from "@/components/ServiceContent"
import { CityLinksForService } from "@/components/KeywordLinkBlocks"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

import { getStaticTranslation } from "@/lib/i18n-server"
import { services, serviceLabels, serviceDescriptions } from "@/data/services"



// Asset mappings (non-translatable)
const servicesAssets: Record<string, { icon: any, iconName: string, image: string }> = {
    "life-insurance": { icon: Shield, iconName: "Shield", image: "/life-insurance.png" },
    "health-insurance": { icon: Heart, iconName: "Heart", image: "/health-insurance.png" },
    "motor-insurance": { icon: Car, iconName: "Car", image: "/motor-insurance.png" },
    "term-insurance": { icon: Home, iconName: "Home", image: "/term-insurance.png" },
    "sme-insurance": { icon: Briefcase, iconName: "Briefcase", image: "/sme-insurance.png" },
    "travel-insurance": { icon: Plane, iconName: "Plane", image: "/travel-insurance.png" },
    "pension-plans": { icon: Coins, iconName: "Coins", image: "/pension-plans.png" },
    "ulip-plans": { icon: UserCheck, iconName: "UserCheck", image: "/ulip-plans.png" },
    "wedding-insurance": { icon: Heart, iconName: "Heart", image: "/wedding-insurance.png" },
    "cyber-insurance": { icon: Lock, iconName: "Lock", image: "/cyber-insurance.png" },
    "lic-agent": { icon: UserCheck, iconName: "UserCheck", image: "/lic-agent.png" },
    "home-insurance": { icon: Home, iconName: "Home", image: "/home-insurance.png" },
    "business-insurance": { icon: Building, iconName: "Building", image: "/business-insurance.png" },
    "investment-plans": { icon: TrendingUp, iconName: "TrendingUp", image: "/investment-plans.png" }
}

export function generateStaticParams() {
    return services.map((serviceType) => ({
        serviceType: serviceType,
    }))
}

export async function generateMetadata({ params }: { params: { serviceType: string } }): Promise<Metadata> {
    const { t } = getStaticTranslation();
    const serviceType = params.serviceType;
    const assets = servicesAssets[serviceType];
    
    if (!services.includes(serviceType) || !assets) return {}

    const flatKeyPrefix = serviceType.replace(/-/g, '_');
    const label = t(flatKeyPrefix) !== flatKeyPrefix ? t(flatKeyPrefix) : (serviceLabels[serviceType] || serviceType);
    
    // Attempt to get metadata from translation file
    const metaTitle = t(`${flatKeyPrefix}_page_title`);
    const metaDescription = t(`${flatKeyPrefix}_meta_description`);

    const title = metaTitle !== `${flatKeyPrefix}_page_title` ? metaTitle : `${label} Advisor in India | Insurance Support`;
    const description = metaDescription !== `${flatKeyPrefix}_meta_description` ? metaDescription : serviceDescriptions[serviceType];

    return {
        title: {
            absolute: title
        },
        description: description,
        keywords: [
            label,
            `${label} Quotes India`,
            `Best ${label} in India`,
            `${label} Advisor India`,
            "Insurance Support",
        ],
        openGraph: {
            title: `${label} Quotes | Insurance Support`,
            description: description,
            url: `https://insurancesupport.online/services/${serviceType}`,
            siteName: 'Insurance Support',
            images: [{ url: assets.image, width: 1200, height: 600, alt: label }],
            locale: 'en_IN',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${label} Quotes | Insurance Support`,
            description: description,
            images: [assets.image],
        },
        alternates: {
            canonical: `https://insurancesupport.online/services/${serviceType}`,
        },
    }
}

// Mapping of services to their high-authority expert guides
const relatedGuides: Record<string, { title: string, slug: string }[]> = {
    "life-insurance": [
        { title: "LIC Lapsed Policy Revival Guide", slug: "lapsed-policy-revival" },
        { title: "LIC Maturity & Lost Bond Masterclass", slug: "lic-revival-maturity-masterclass" },
        { title: "LIC Death Claim Settlement", slug: "death-claim-settlement" }
    ],
    "health-insurance": [
        { title: "Health Claim Rejection Appeal", slug: "claim-rejection-appeal" },
        { title: "Cashless Hospitalization Guide", slug: "cashless-hospitalization-guide" },
        { title: "Health Insurance Claim Checklist", slug: "health-insurance-claim-checklist" }
    ],
    "motor-insurance": [
        { title: "Motor Insurance Claim Mastery", slug: "icici-motor-insurance" },
        { title: "General Insurance Claim Process", slug: "general-insurance-claim-process" }
    ],
    "term-insurance": [
        { title: "Term Insurance vs Life Insurance", slug: "term-vs-life-insurance" },
        { title: "Documents for Death Claim", slug: "documents-for-death-claim" }
    ]
};

export default async function ServicePage({ params }: { params: { serviceType: string } }) {
    const { t } = getStaticTranslation();
    const serviceType = params.serviceType;
    const assets = servicesAssets[serviceType];

    if (!services.includes(serviceType) || !assets) {
        notFound()
    }

    const flatKeyPrefix = serviceType.replace(/-/g, '_');
    const label = t(flatKeyPrefix) !== flatKeyPrefix ? t(flatKeyPrefix) : (serviceLabels[serviceType] || serviceType);
    const description = t(`${flatKeyPrefix}_long_description`) !== `${flatKeyPrefix}_long_description` 
        ? t(`${flatKeyPrefix}_long_description`) 
        : serviceDescriptions[serviceType];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: label,
        description: description,
        provider: {
            '@id': 'https://insurancesupport.online/#organization'
        },
        areaServed: {
            '@type': 'Country',
            name: 'India'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${label} Services`,
            itemListElement: [] // Features handled in component
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
                'name': label,
                'item': `https://insurancesupport.online/services/${serviceType}`
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
                serviceType={serviceType}
                iconName={assets.iconName}
                imagePath={assets.image}
                title={label}
                description={description}
            />

            {/* Expert Authority Section */}
            {relatedGuides[serviceType] && (
                <div className="container mx-auto px-4 mb-20">
                    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                            <BookOpen className="h-40 w-40 text-primary" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                                Expert Authority & <br/> <span className="text-primary italic">Technical Insights.</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                                {relatedGuides[serviceType].map((guide) => (
                                    <Link 
                                        key={guide.slug}
                                        href={`/resources/guides/${guide.slug}`}
                                        className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group/item"
                                    >
                                        <span className="font-bold text-lg">{guide.title}</span>
                                        <ArrowRight className="h-5 w-5 text-primary group-hover/item:translate-x-2 transition-transform" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 pb-16">
                <CityLinksForService
                    serviceSlug={serviceType}
                    serviceTitle={label}
                />
            </div>
        </>
    )
}

