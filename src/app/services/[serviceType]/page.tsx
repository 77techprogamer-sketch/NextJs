import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, CheckCircle2 } from "lucide-react"
import QuoteForm from "@/components/QuoteForm"
import ServiceJsonLd from "@/components/ServiceJsonLd"

// Define all services data statically
const servicesData = {
    "life-insurance": {
        title: "Life Insurance",
        description: "Secure your family's financial future with the best life insurance plans in India.",
        icon: Shield,
        image: "/life-insurance.png",
        features: ["Family Financial Protection", "Tax Saving under 80C", "Wealth Creation Options", "Loan Liability Cover"],
        content: `Life insurance is more than just a policy; it's a promise to secure your family's future even in your absence. In today's fast-paced life, having a robust financial safety net is essential.

        **Why Choose Insurance Support India?**
        We understand that every individual's financial goal is unique. Whether you are looking for pure protection (Term Plans), wealth creation (ULIPs), or guaranteed returns (Endowment Plans), we help you compare and choose the right policy from top insurers across India.

        **Types of Life Insurance We Offer:**
        *   **Term Insurance:** Pure risk cover providing high sum assured at low premiums.
        *   **Whole Life Insurance:** Coverage up to 100 years of age.
        *   **Endowment Plans:** A mix of insurance and savings.
        *   **ULIPs:** Market-linked returns with life cover.

        **Claim Settlement Assistance**
        Our dedicated team assists you throughout the claim process, ensuring your family faces no administrative hassles during difficult times. We have a 100% claim support record pan-India.`,
        faqs: [
            { question: "Is a medical test mandatory for Term Insurance?", answer: "It depends on your age and sum assured. Generally, for coverage above ₹50 Lakhs or for age above 45, a medical test is required." },
            { question: "What is the ideal life cover amount?", answer: "A thumb rule is to have a cover that is 10-15 times your annual income." },
            { question: "Can I have multiple life insurance policies?", answer: "Yes, you can buy multiple policies, but you must disclose existing policies to the new insurer." }
        ]
    },
    "health-insurance": {
        title: "Health Insurance",
        description: "Comprehensive health coverage with access to top hospitals across India.",
        icon: Heart,
        image: "/health-insurance.png",
        features: ["Cashless Treatment", "Pre & Post Hospitalization", "AYUSH Treatment Cover", "Tax Benefit under 80D"],
        content: `Healthcare costs in India are rising. A single hospitalization can drain your savings. Our Health Insurance plans ensure you get the best medical care without financial worry.
        
        **Best Health Insurance Agents in India**
        We help you find plans that cover:
        *   **Cashless Hospitalization:** Network of 10,000+ hospitals including major chains like Manipal, Apollo, and Fortis across all metro cities.
        *   **Critical Illness Cover:** Protection against life-threatening diseases.
        *   **Maternity Benefits:** Coverage for delivery expenses and newborn care.
        *   **Senior Citizen Plans:** Special plans for parents with pre-existing disease coverage.

        **We Prioritize Claims**
        Unlike online aggregators, we personally handle your cashless approvals and reimbursement claims, ensuring you focus on recovery, not paperwork.`,
        faqs: [
            { question: "Does health insurance cover pre-existing diseases?", answer: "Yes, but usually after a waiting period of 2 to 4 years. Some special plans shorten this to 1 year or less." },
            { question: "What is the difference between Cashless and Reimbursement?", answer: "In Cashless, the insurer pays the hospital directly. In Reimbursement, you pay first and claim the money back later." },
            { question: "Is maternity covered in health insurance?", answer: "Yes, specific plans offer maternity benefits, usually with a waiting period of 9 months to 2 years." }
        ]
    },
    "motor-insurance": {
        title: "Motor Insurance",
        description: "Instant Car and Bike insurance renewal with max IDV and lowest premium.",
        icon: Car,
        image: "/motor-insurance.png",
        features: ["Zero Depreciation Cover", "24x7 Roadside Assistance", "Engine Protection", "Consumables Cover"],
        content: `Driving on Indian roads requires reliable protection. Whether you own a car or a two-wheeler, having comprehensive motor insurance is mandatory and crucial for financial safety.

        **Motor Insurance Services**
        We offer tailored plans for:
        *   **Car Insurance:** Comprehensive, Third-Party, and Own Damage covers with add-ons like Zero Dep, Return to Invoice, and Engine Protect.
        *   **Two-Wheeler Insurance:** Affordable plans for bikes and scooters with multi-year policy options.

        **Why Renew with Us?**
        *   **Instant Policy Issuance:** Get your policy in 5 minutes online.
        *   **Hassle-Free Claims:** Tie-ups with major workshops across India for cashless repairs.
        *   **No Claim Bonus (NCB) Transfer:** We ensure you get up to 50% discount on renewal premiums if you haven't made a claim.`,
        faqs: [
            { question: "What happens if my insurance expires?", answer: "You can renew it online instantly. If the break-in period is long, a vehicle inspection might be required." },
            { question: "What is Zero Depreciation cover?", answer: "It ensures you get the full claim amount without deduction for depreciation on parts (plastic, metal, rubber)." },
            { question: "Is third-party insurance mandatory?", answer: "Yes, as per the Motor Vehicles Act, third-party liability insurance is mandatory in India." }
        ]
    },
    "term-insurance": {
        title: "Term Insurance",
        description: "High life cover at affordable premiums for pure risk protection.",
        icon: Home,
        image: "/term-insurance.png",
        features: ["High Coverage/Low Premium", "Critical Illness Riders", "Accidental Death Benefit", "Tax Savings"],
        content: `Term Insurance is the purest form of life insurance. It provides a large sum assured to your nominees if something happens to you. It is the cheapest way to buy a high life cover in India.

        **Key Features for Indian Residents:**
        *   **High Cover at Low Cost:** Get ₹1 Crore cover starting at just ₹500/month (age dependent).
        *   **Critical Illness Riders:** Add-on covers for heart attack, cancer, stroke, etc., which are rising in urban areas like Bangalore.
        *   **Tax Benefits:** Premiums paid are eligible for tax deduction under Section 80C.

        **Why Buy Term Insurance Early?**
        The younger you are, the lower your premium. Once locked, the premium stays the same for the entire policy term.`,
        faqs: [
            { question: "What is the right age to buy Term Insurance?", answer: "The earlier, the better. Buying in your 20s secures a very low premium for life." },
            { question: "Do I get money back if I survive the term?", answer: "Pure term plans do not offer maturity benefits. However, 'Return of Premium' (ROP) plans refund all premiums paid if you survive." },
            { question: "Is accidental death covered?", answer: "Standard term plans cover all deaths (natural/accidental). You can add an Accidental Death Benefit rider for extra payout." }
        ]
    },
    "sme-insurance": {
        title: "SME Insurance",
        description: "Tailored insurance solutions for small and medium enterprises.",
        icon: Briefcase,
        image: "/sme-insurance.png",
        features: ["Property Protection", "Employee Benefits", "Liability Coverage", "Business Interruption"],
        content: `Small and Medium Enterprises (SMEs) are the backbone of India's economy. However, they face unique risks ranging from fire accidents to employee liability. Our SME Insurance packages are custom-built for shops, offices, and startups across India.

        **What We Cover:**
        *   **Shopkeepers Policy:** Protects stock, furniture, and cash against fire and burglary.
        *   **Office Package Policy:** Comprehensive cover for IT offices, including laptops and servers.
        *   **Workmen Compensation:** Mandatory legal liability cover for employees.
        *   **Public Liability:** Protects against third-party injury claims within your premises.
        
        **Tailored for Indian Startups**
        We understand the dynamic nature of startups and offer flexible plans that scale with your business.`,
        faqs: [
            { question: "Is property insurance mandatory for shops?", answer: "It is not legally mandatory, but highly recommended to protect your inventory and livelihood." },
            { question: "Does it cover employee theft?", answer: "Yes, Fidelity Guarantee cover protects against losses due to dishonesty of employees." },
            { question: "How is the premium calculated?", answer: "It depends on the value of contents, type of business, and risk factors associated with the location." }
        ]
    },
    "travel-insurance": {
        title: "Travel Insurance",
        description: "Complete protection for your domestic and international trips.",
        icon: Plane,
        image: "/travel-insurance.png",
        features: ["Medical Emergencies", "Trip Cancellation", "Lost Baggage", "Flight Delays"],
        content: `Whether you are flying out of Kempegowda International Airport for a holiday or a business trip, unforeseen events can disrupt your plans. Travel Insurance protects you against medical emergencies, flight delays, and lost luggage.

        **Essential for International Travel**
        Many countries (like Schengen states) mandate travel insurance for visa approval. Our plans are 100% visa compliant.

        **Coverage Highlights:**
        *   **Medical Expenses:** Covers hospitalization costs abroad, which can be astronomically high.
        *   **Trip Cancellation:** Reimburses non-refundable bookings if you cancel due to medical/emergency reasons.
        *   **Baggage Loss/Delay:** Compensation for essential items if your bags are delayed.
        *   **Passport Loss:** Assistance and coverage for obtaining a duplicate passport.`,
        faqs: [
            { question: "Is travel insurance mandatory?", answer: "For many countries (Schengen, UAE, etc.), it is mandatory. For others, it is strongly advised." },
            { question: "Does it cover pre-existing diseases abroad?", answer: "Most standard plans exclude pre-existing conditions unless it is a life-threatening emergency." },
            { question: "When should I buy travel insurance?", answer: "Ideally, as soon as you book your tickets to get coverage for trip cancellation." }
        ]
    },
    "pension-plans": {
        title: "Pension Plans",
        description: "Build a retirement corpus for a stress-free retired life.",
        icon: Coins,
        image: "/pension-plans.png",
        features: ["Regular Income", "Inflation Protection", "Tax Efficient", "Spouse Coverage"],
        content: `Retirement should be the golden phase of life, not a time of financial stress. Our Pension Plans help you build a substantial corpus during your working years, ensuring a steady stream of income post-retirement.

        **Why Start Early?**
        With the rising cost of living across Indian metro cities, reliance on savings alone is not enough. You need a dedicated pension plan that beats inflation.

        **Types of Plans:**
        *   **Deferred Annuity:** Accumulate now, get pension later (e.g., NPS, private pension plans).
        *   **Immediate Annuity:** Pay a lump sum and get pension immediately (suitable for retirees).
        *   **NPS Assistance:** We guide you on National Pension System tier selection and fund management.`,
        faqs: [
            { question: "Is pension taxable?", answer: "The commuted part (lump sum) is largely tax-free. The monthly pension is treated as income and taxed as per your slab." },
            { question: "Can I withdraw money before retirement?", answer: "Most plans have a lock-in period. However, partial withdrawals are allowed for specific reasons like children's marriage or critical illness." },
            { question: "What happens to the pension after death?", answer: "In joint-life annuity plans, the spouse continues to receive the pension." }
        ]
    },
    "ulip-plans": {
        title: "ULIP Plans",
        description: "Unit Linked Insurance Plans for investment plus insurance.",
        icon: UserCheck,
        image: "/ulip-plans.png",
        features: ["Market Linked Returns", "Life Cover", "Tax Free Withdrawal", "Fund Switching"],
        content: `Unit Linked Insurance Plans (ULIPs) offer the dual benefit of investment and life cover. They are ideal for long-term wealth creation, allowing you to invest in potential high-growth equity funds or safe debt funds.

        **Why Choose ULIPs?**
        *   **Wealth Creation:** Participate in the stock market with professional fund management.
        *   **Tax Efficiency:** Maturity proceeds are tax-free under Section 10(10D) (subject to conditions).
        *   **Flexibility:** Switch between equity and debt funds based on market performance without tax implications.
        *   **Lock-in Period:** A 5-year lock-in encourages disciplined saving.`,
        faqs: [
            { question: "Are ULIP charges high?", answer: "Modern ULIPs have very low charges, comparable to mutual funds. Some online plans even have zero allocation charges." },
            { question: "Is ULIP money safe?", answer: "It depends on the fund choice. Debt funds are safer, while equity funds carry market risk but offer higher potential returns." },
            { question: "Can I surrender my ULIP?", answer: "Yes, after the 5-year lock-in period, you can surrender the policy without surrender charges." }
        ]
    },
    "wedding-insurance": {
        title: "Wedding Insurance",
        description: "Insure your big day against cancellations and mishaps.",
        icon: Heart,
        image: "/wedding-insurance.png",
        features: ["Event Cancellation", "Public Liability", "Property Damage", "Personal Accident"],
        content: `A wedding is a once-in-a-lifetime event, and thousands of crores are spent on weddings in India annually. But unforeseen events like natural calamities, fire, or sudden illness can cause cancellations, leading to huge losses.

        **What Coverage Includes:**
        *   **Cancellation due to Disaster:** Fire, flood, or earthquake at the venue.
        *   **Non-appearance:** If the bride, groom, or main family members cannot attend due to hospitalization/death.
        *   **Public Liability:** Accidents or injury to guests during the function.
        *   **Theft:** Loss of jewelry or cash from the venue/safe.`,
        faqs: [
            { question: "Does it cover cancellation due to breakup?", answer: "No, 'change of heart' is not covered. Only external uncontrollable events are covered." },
            { question: "When should I take the policy?", answer: "Ideally, at least 15 days before the event date." },
            { question: "Is food poisoning covered?", answer: "Yes, public liability can cover claims arising from food poisoning of guests." }
        ]
    },
    "cyber-insurance": {
        title: "Cyber Insurance",
        description: "Protection against digital threats and cyber attacks.",
        icon: Lock,
        image: "/cyber-insurance.png",
        features: ["Data Breach Cover", "Cyber Extortion", "Identity Theft", "Legal Costs"],
        content: `In the digital era, cyber threats are a daily reality. From phishing attacks to ransomware, individuals and businesses across India are at constant risk. Cyber Insurance provides a safety net against financial losses caused by cybercrimes.

        **Coverage for Individuals:**
        *   **Theft of Funds:** Reimbursement for money stolen via phishing or bank fraud.
        *   **Identity Theft:** Legal costs and expenses to restore your identity.
        *   **Cyber Bullying:** Consultation costs for psychological trauma.
        *   **Device Value:** Data restoration costs if your device is infected by malware.`,
        faqs: [
            { question: "Does it cover UPI frauds?", answer: "Yes, most comprehensive plans cover financial losses due to UPI or credit card fraud." },
            { question: "Do I need to file an FIR?", answer: "Yes, a police complaint/FIR is mandatory for claiming losses due to cybercrime." },
            { question: "Does it cover business data breach?", answer: "Individual cyber insurance is different from corporate cyber liability insurance. We offer both types." }
        ]
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
        title: `${service.title} in India | Insurance Support`,
        description: service.description,
        keywords: [
            service.title,
            `${service.title} Quotes India`,
            `Best ${service.title} in India`,
            `${service.title} Agent India`,
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
            <ServiceJsonLd
                title={`${service.title} Service`}
                description={service.description}
                url={`https://insurancesupport.online/services/${params.serviceType}`}
                image={`https://insurancesupport.online${service.image}`}
                faqs={service.faqs}
            />
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

                <div className="mb-12">
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-xl shadow-lg bg-muted"
                        priority
                        sizes="(max-width: 896px) 100vw, 896px"
                    />
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
                        <div className="sticky top-24">
                            <QuoteForm
                                insuranceType={params.serviceType}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
