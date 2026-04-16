import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock } from "lucide-react"
import ServiceContent from "@/components/ServiceContent"
import { CityLinksForService } from "@/components/KeywordLinkBlocks"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

import { getServerSideTranslation } from "@/lib/i18n-server"

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
    "cyber-insurance": { icon: Lock, iconName: "Lock", image: "/cyber-insurance.png" }
}

type ServiceType = keyof typeof servicesAssets

export function generateStaticParams() {
    return Object.keys(servicesAssets).map((serviceType) => ({
        serviceType: serviceType,
    }))
}

export async function generateMetadata({ params }: { params: { serviceType: string } }): Promise<Metadata> {
    const { t } = await getServerSideTranslation();
    const serviceKey = params.serviceType as ServiceType
    const assets = servicesAssets[serviceKey]
    
    // Attempt to get metadata from translation file
    const meta = t(`services_meta.${serviceKey}`) as any;
    const serviceData = t(`services_data.${serviceKey}`) as any;

    if (!assets || !serviceData) return {}

    const title = meta?.title || `${serviceData.title} Advisor in India | Insurance Support`;
    const description = meta?.description || serviceData.description;

    return {
        title: {
            absolute: title
        },
        description: description,
        keywords: [
            serviceData.title,
            `${serviceData.title} Quotes India`,
            `Best ${serviceData.title} in India`,
            `${serviceData.title} Advisor India`,
            "Insurance Support",
            ...(serviceData.features || [])
        ],
        openGraph: {
            title: `${serviceData.title} Quotes | Insurance Support`,
            description: serviceData.description,
            url: `https://insurancesupport.online/services/${params.serviceType}`,
            siteName: 'Insurance Support',
            images: [{ url: assets.image, width: 1200, height: 600, alt: serviceData.title }],
            locale: 'en_IN',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${serviceData.title} Quotes | Insurance Support`,
            description: serviceData.description,
            images: [assets.image],
        },
        alternates: {
            canonical: `https://insurancesupport.online/services/${params.serviceType}`,
        },
    }
}

// Mapping of services to their high-authority expert guides
const relatedGuides: Record<string, { title: string, slug: string }[]> = {
    "life-insurance": [
        { title: "LIC New Jeevan Anand Mastery", slug: "lic-jeevan-anand" },
        { title: "LIC Policy Revival Masterclass", slug: "lic-revival-maturity-masterclass" },
        { title: "LIC Jeevan Lakshya (Plan 933)", slug: "lic-jeevan-lakshya" }
    ],
    "health-insurance": [
        { title: "ICICI iHealth Coverage Guide", slug: "icici-ihealth" },
        { title: "Claim Rejection Reason Audit", slug: "health-insurance-rejection-reasons-guide" }
    ],
    "motor-insurance": [
        { title: "Motor Insurance Claim Mastery", slug: "icici-motor-insurance" }
    ],
    "term-insurance": [
        { title: "Term Insurance vs Life Insurance", slug: "term-vs-life-insurance" },
        { title: "Claim Settlement Checklist", slug: "death-claim-settlement" }
    ]
};

export default async function ServicePage({ params }: { params: { serviceType: string } }) {
    const { t } = await getServerSideTranslation();
    const serviceKey = params.serviceType as ServiceType
    const assets = servicesAssets[serviceKey]

    const service = t(`services_data.${serviceKey}`) as any;

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

            {/* Expert Authority Section */}
            {relatedGuides[serviceKey] && (
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
                                {relatedGuides[serviceKey].map((guide) => (
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
                    serviceSlug={params.serviceType}
                    serviceTitle={service.title}
                />
            </div>
        </>
    )
}
