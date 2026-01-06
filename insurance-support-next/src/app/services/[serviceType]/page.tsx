import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, CheckCircle2 } from "lucide-react"

// Define all services data statically
const servicesData = {
    "life-insurance": {
        title: "Life Insurance",
        description: "Secure your family's financial future with our comprehensive life insurance plans.",
        icon: Shield,
        features: ["Family Protection", "Tax Benefits (80C)", "Wealth Creation", "Loan Collateral"],
        content: "Life insurance is a contract between an insurance policy holder and an insurer or assurer, where the insurer promises to pay a designated beneficiary a sum of money upon the death of an insured person."
    },
    "health-insurance": {
        title: "Health Insurance",
        description: "Get access to the best medical care without financial stress.",
        icon: Heart,
        features: ["Cashless Hospitalization", "Pre/Post Hospitalization", "Ambulance Cover", "Tax Benefits (80D)"],
        content: "Health insurance covers the whole or a part of the risk of a person incurring medical expenses. It provides financial protection against unexpected medical costs."
    },
    "motor-insurance": {
        title: "Motor Insurance",
        description: "Mandatory protection for your vehicle against accidents and theft.",
        icon: Car,
        features: ["Third Party Liability", "Own Damage Cover", "Personal Accident Cover", "No Claim Bonus"],
        content: "Motor insurance provides protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle."
    },
    "term-insurance": {
        title: "Term Insurance",
        description: "High life cover at affordable premiums for pure risk protection.",
        icon: Home,
        features: ["High Coverage/Low Premium", "Critical Illness Riders", "Accidental Death Benefit", "Tax Savings"],
        content: "Term insurance is a type of life insurance policy that provides coverage for a certain period of time or a specified \"term\" of years."
    },
    "sme-insurance": {
        title: "SME Insurance",
        description: "Tailored insurance solutions for small and medium enterprises.",
        icon: Briefcase,
        features: ["Property Protection", "Employee Benefits", "Liability Coverage", "Business Interruption"],
        content: "SME Insurance protects small businesses against risks such as property damage, legal liability, and employee-related risks."
    },
    "travel-insurance": {
        title: "Travel Insurance",
        description: "Complete protection for your domestic and international trips.",
        icon: Plane,
        features: ["Medical Emergencies", "Trip Cancellation", "Lost Baggage", "Flight Delays"],
        content: "Travel insurance is an insurance product for covering unforeseen losses incurred while buzzing, either internationally or domestically."
    },
    "pension-plans": {
        title: "Pension Plans",
        description: "Build a retirement corpus for a stress-free retired life.",
        icon: Coins,
        features: ["Regular Income", "Inflation Protection", "Tax Efficient", "Spouse Coverage"],
        content: "Pension plans are retirement plans that require an employer to make contributions into a pool of funds set aside for a worker's future benefit."
    },
    "ulip-plans": {
        title: "ULIP Plans",
        description: "Unit Linked Insurance Plans for investment plus insurance.",
        icon: UserCheck,
        features: ["Market Linked Returns", "Life Cover", "Tax Free Withdrawal", "Fund Switching"],
        content: "A Unit Linked Insurance Plan (ULIP) is a product offered by insurance companies that, unlike a pure insurance policy, gives investors both insurance and investment under a single integrated plan."
    },
    "wedding-insurance": {
        title: "Wedding Insurance",
        description: "Insure your big day against cancellations and mishaps.",
        icon: Heart,
        features: ["Event Cancellation", "Public Liability", "Property Damage", "Personal Accident"],
        content: "Wedding insurance protects a couple's investment in their wedding, covering losses from cancellation, postponement, or damaged property."
    },
    "cyber-insurance": {
        title: "Cyber Insurance",
        description: "Protection against digital threats and cyber attacks.",
        icon: Lock,
        features: ["Data Breach Cover", "Cyber Extortion", "Identity Theft", "Legal Costs"],
        content: "Cyber insurance is a specialty insurance product intended to protect businesses and individuals from Internet-based risks, and more generally from risks relating to information technology infrastructure and activities."
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
        title: `${service.title} Quotes | Insurance Support`,
        description: service.description,
    }
}

export default function ServicePage({ params }: { params: { serviceType: string } }) {
    const service = servicesData[params.serviceType as ServiceType]

    if (!service) {
        notFound()
    }

    const Icon = service.icon

    return (
        <div className="container px-4 py-12 mx-auto">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                        ← Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Icon className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold">{service.title}</h1>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {service.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-card border rounded-lg p-6 shadow-sm">
                            <h2 className="text-2xl font-semibold mb-4">About {service.title}</h2>
                            <p className="text-muted-foreground leading-loose">
                                {service.content}
                                <br /><br />
                                At Insurance Support, we help you navigate the complexities of specific policy terms
                                to find the plan that best fits your requirements and budget.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-6 rounded-lg sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                            <p className="text-slate-300 mb-6 text-sm">
                                Speak to our expert advisors today to get the best rates for {service.title}.
                            </p>
                            <Link href="/support" className="block">
                                <Button size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                                    Contact Us
                                </Button>
                            </Link>
                            <p className="text-xs text-center text-slate-500 mt-4">
                                Free consultation. No spam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
