import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock } from "lucide-react"
import ServiceContent from "@/components/ServiceContent"

// Define all services data statically for SEO/Metadata
const servicesData = {
    "life-insurance": {
        title: "Life Insurance",
        description: "Secure your family's future with the best Life Insurance plans in India. Compare Term, Whole Life, and Endowment policies with high claim settlement ratios.",
        icon: Shield,
        iconName: "Shield",
        image: "/life-insurance.png",
        features: ["Family Financial Protection", "Tax Saving under 80C", "Wealth Creation Options", "Loan Liability Cover"],
    },
    "health-insurance": {
        title: "Health Insurance",
        description: "Get comprehensive Health Insurance with cashless treatment at top hospitals. Plans cover pre-existing diseases, maternity, and critical illness with no hidden clauses.",
        icon: Heart,
        iconName: "Heart",
        image: "/health-insurance.png",
        features: ["Cashless Treatment", "Pre & Post Hospitalization", "AYUSH Treatment Cover", "Tax Benefit under 80D"],
    },
    "motor-insurance": {
        title: "Motor Insurance",
        description: "Renew your Car or Bike insurance instantly with maximum IDV and lowest premiums. Enjoy cashless claims, zero depreciation, and 24/7 roadside assistance.",
        icon: Car,
        iconName: "Car",
        image: "/motor-insurance.png",
        features: ["Zero Depreciation Cover", "24x7 Roadside Assistance", "Engine Protection", "Consumables Cover"],
    },
    "term-insurance": {
        title: "Term Insurance",
        description: "Get high life cover at affordable premiums with pure Term Insurance. Protect your family's financial future with critical illness and accidental death benefits.",
        icon: Home,
        iconName: "Home",
        image: "/term-insurance.png",
        features: ["High Coverage/Low Premium", "Critical Illness Riders", "Accidental Death Benefit", "Tax Savings"],
    },
    "sme-insurance": {
        title: "SME Insurance",
        description: "Protect your business with tailored SME Insurance solutions. Coverage for shops, offices, and startups including fire, burglary, liability, and employee benefits.",
        icon: Briefcase,
        iconName: "Briefcase",
        image: "/sme-insurance.png",
        features: ["Property Protection", "Employee Benefits", "Liability Coverage", "Business Interruption"],
    },
    "travel-insurance": {
        title: "Travel Insurance",
        description: "Travel stress-free with complete Travel Insurance for domestic and international trips. Covers medical emergencies, flight delays, lost baggage, and trip cancellations.",
        icon: Plane,
        iconName: "Plane",
        image: "/travel-insurance.png",
        features: ["Medical Emergencies", "Trip Cancellation", "Lost Baggage", "Flight Delays"],
    },
    "pension-plans": {
        title: "Pension Plans",
        description: "Plan a stress-free retirement with our Pension Plans. Build a corpus for regular monthly income, inflation protection, and financial independence in your golden years.",
        icon: Coins,
        iconName: "Coins",
        image: "/pension-plans.png",
        features: ["Regular Income", "Inflation Protection", "Tax Efficient", "Spouse Coverage"],
    },
    "ulip-plans": {
        title: "ULIP Plans",
        description: "Combine insurance and investment with ULIPs. Create long-term wealth with market-linked returns while securing life cover and enjoying tax benefits.",
        icon: UserCheck,
        iconName: "UserCheck",
        image: "/ulip-plans.png",
        features: ["Market Linked Returns", "Life Cover", "Tax Free Withdrawal", "Fund Switching"],
    },
    "wedding-insurance": {
        title: "Wedding Insurance",
        description: "Insure your big day against cancellations and mishaps. Wedding Insurance covers venue damage, non-appearance, and public liability for a worry-free celebration.",
        icon: Heart,
        iconName: "Heart",
        image: "/wedding-insurance.png",
        features: ["Event Cancellation", "Public Liability", "Property Damage", "Personal Accident"],
    },
    "cyber-insurance": {
        title: "Cyber Insurance",
        description: "Safeguard against digital threats with Cyber Insurance. Protect your finances and identity from phishing, ransomware, cyber extortion, and online fraud.",
        icon: Lock,
        iconName: "Lock",
        image: "/cyber-insurance.png",
        features: ["Data Breach Cover", "Cyber Extortion", "Identity Theft", "Legal Costs"],
    }
}

type ServiceType = keyof typeof servicesData

// SSG: Generate params for all 10 services
export function generateStaticParams() {
    return Object.keys(servicesData).map((serviceType) => ({
        serviceType: serviceType,
    }))
}

// Meta: Generate SEO tags for each service
export function generateMetadata({ params }: { params: { serviceType: string } }): Metadata {
    const service = servicesData[params.serviceType as ServiceType]
    if (!service) return {}

    return {
        title: {
            absolute: `${service.title} Plans: Compare & Buy Online - Insurance Support`
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
            ...service.features
        ],
        openGraph: {
            title: `${service.title} Quotes | Insurance Support India`,
            description: service.description,
            url: `https://insurancesupport.online/services/${params.serviceType}`,
            siteName: 'Insurance Support India',
            images: [
                {
                    url: service.image,
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
            images: [service.image],
        },
        alternates: {
            canonical: `https://insurancesupport.online/services/${params.serviceType}`,
        },
    }
}

export default function ServicePage({ params }: { params: { serviceType: string } }) {
    const service = servicesData[params.serviceType as ServiceType]

    if (!service) {
        notFound()
    }

    return (
        <ServiceContent
            serviceType={params.serviceType}
            iconName={service.iconName}
            imagePath={service.image}
        />
    )
}
