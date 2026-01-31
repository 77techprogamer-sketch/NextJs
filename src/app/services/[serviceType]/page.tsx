import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, Lock, CheckCircle2 } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import QuoteForm from "@/components/QuoteForm"
import ServiceJsonLd from "@/components/ServiceJsonLd"

// Define all services data statically
const servicesData = {
    "life-insurance": {
        title: "Life Insurance",
        description: "Secure your family's future with the best Life Insurance plans in India. Compare Term, Whole Life, and Endowment policies with high claim settlement ratios.",
        icon: Shield,
        image: "/life-insurance.png",
        features: ["Family Financial Protection", "Tax Saving under 80C", "Wealth Creation Options", "Loan Liability Cover"],
        content: `Life insurance is the foundation of financial security for any family. It is not just an investment; it is a shield that protects your loved ones from financial instability in your absence. At **Insurance Support India**, we believe that the right life insurance policy ensures that your family's dreams—whether it's your child's education, your spouse's retirement, or paying off a home loan—are never compromised.

        **Why Choose Insurance Support India?**
        Unlike automated online comparison tools, we provide **personalized, human advisory** based on 25+ years of experience. We don't just sell a policy; we manage your portfolio for life.
        *   **Legacy of Trust:** We have served thousands of families across India, ensuring their claims are settled priority.
        *   **Unbiased Advice:** We work with top insurers (LIC, HDFC Life, ICICI Pru, Tata AIA) but work *for* you. We recommend plans that suit *your* needs, not the highest commission ones.
        *   **Claim Settlement Ratio:** We only partner with insurers who have a CSR of 98% and above.

        **Comprehensive Life Insurance Solutions:**
        *   **Term Insurance (Pure Protection):** The most affordable way to get high cover (e.g., ₹1 Crore cover for ~₹1000/month). Crucial for every breadwinner.
        *   **Whole Life Policy:** Coverage that lasts up to age 100, leaving a tax-free legacy for your heirs.
        *   **Endowment & Savings Plans:** Guaranteed return plans that help you save systematically for goals like marriage or education, unaffected by market volatility.
        *   **ULIPs (Wealth Creation):** Market-linked plans that offer the dual benefit of insurance + high returns from equity/debt markets.

        **Our "Claim-First" Approach**
        The true test of insurance is at the time of a claim. Our dedicated claim settlement team handles everything—from documentation to coordinating with the insurer. Your family will never have to run around offices; we stand simply by their side.`,
        faqs: [
            { question: "Is a medical test mandatory for Term Insurance?", answer: "It depends on your age and sum assured. Generally, for coverage above ₹50 Lakhs or for age above 45, a medical test is required." },
            { question: "What is the ideal life cover amount?", answer: "A thumb rule is to have a cover that is 10-15 times your annual income." },
            { question: "Can I have multiple life insurance policies?", answer: "Yes, you can buy multiple policies, but you must disclose existing policies to the new insurer." }
        ]
    },
    "health-insurance": {
        title: "Health Insurance",
        description: "Get comprehensive Health Insurance with cashless treatment at top hospitals. Plans cover pre-existing diseases, maternity, and critical illness with no hidden clauses.",
        icon: Heart,
        image: "/health-insurance.png",
        features: ["Cashless Treatment", "Pre & Post Hospitalization", "AYUSH Treatment Cover", "Tax Benefit under 80D"],
        content: `With medical inflation in India growing at over 14% annually, a single hospitalization can wipe out your entire life's savings. **Health Insurance** is not a luxury; it is a necessity. At Insurance Support, we don't just sell you a policy; we ensure you have access to the best medical care without the financial stress.

        **Why We Are the Best Health Insurance Advisors:**
        Choosing a health plan is tricky. There are hidden clauses like "Room Rent Capping," "Co-payment," and "Waiting Periods." We decode the fine print for you.
        *   **No Hidden Clauses:** We recommend plans with No Room Rent Capping and Zero Co-payment.
        *   **Restoration Benefits:** We ensure your plan refills the sum assured if it gets exhausted during a treatment.
        *   **Lifetime Renewability:** We place you with insurers who guarantee coverage for life.

        **Types of Plans We specialize In:**
        *   **Individual & Family Floater:** Comprehensive coverage for you, your spouse, and children under a single premium.
        *   **Senior Citizen Plans:** Specialized plans covering pre-existing diseases (Diabetes, BP) with minimal waiting periods.
        *   **Critical Illness Covers:** Lumpsum payout for Cancer, Heart Attack, Kidney Failure, etc.
        *   **Top-Up & Super Top-Up:** An incredibly cheap way to increase your cover (e.g., adding ₹20 Lakhs cover for just ₹5,000/year).

        **The "Cashless" Advantage**
        We have tie-ups with Star Health, HDFC Ergo, Niva Bupa, and Care to give you access to 10,000+ network hospitals. In an emergency, **you call us**, and we coordinate the cashless approval with the TPA/Insurer while you focus on your loved one's recovery.`,
        faqs: [
            { question: "Does health insurance cover pre-existing diseases?", answer: "Yes, but usually after a waiting period of 2 to 4 years. Some special plans shorten this to 1 year or less." },
            { question: "What is the difference between Cashless and Reimbursement?", answer: "In Cashless, the insurer pays the hospital directly. In Reimbursement, you pay first and claim the money back later." },
            { question: "Is maternity covered in health insurance?", answer: "Yes, specific plans offer maternity benefits, usually with a waiting period of 9 months to 2 years." }
        ]
    },
    "motor-insurance": {
        title: "Motor Insurance",
        description: "Renew your Car or Bike insurance instantly with maximum IDV and lowest premiums. Enjoy cashless claims, zero depreciation, and 24/7 roadside assistance.",
        icon: Car,
        image: "/motor-insurance.png",
        features: ["Zero Depreciation Cover", "24x7 Roadside Assistance", "Engine Protection", "Consumables Cover"],
        content: `Driving on Indian roads is unpredictable. Whether it's a scratch in traffic or a flood in the monsoon, your vehicle needs robust protection. We provide **Instant Motor Insurance** that protects not just your car/bike but also your wallet from heavy repair bills and third-party liabilities.

        **Why Renew With Insurance Support?**
        Many people buy the cheapest policy online, only to realize later that the "IDV" (Vehicle Value) was too low or critical add-ons were missing.
        *   **Maximum IDV:** We ensure your vehicle is insured for its correct market value, so you don't lose money in case of theft or total loss.
        *   **Claim Assistance:** In case of an accident, we guide you on how to file an FIR, take photos, and get the vehicle to a cashless garage.
        *   **Keep Your NCB:** We verify your No Claim Bonus (NCB) eligibility to save you up to 50% on premiums legally.

        **Essential Add-Ons We Recommend:**
        *   **Zero Depreciation (Bumper-to-Bumper):** Mandatory for cars <5 years old. The insurer pays 100% of the parts cost, including plastic and rubber.
        *   **Engine Protection:** Covers engine seizure due to water logging (crucial for cities like Bangalore, Mumbai, Chennai).
        *   **Roadside Assistance:** 24/7 help for flat tires, towing, or battery jumpstarts anywhere in India.
        *   **Return to Invoice:** In case of theft, get the full on-road price back, not just the depreciated value.

        **Coverage for All Vehicles**
        *   Private Cars & SUVs
        *   Two-Wheelers (Bikes & Scooters)
        *   Commercial Vehicles (Taxis, Trucks, Buses)`,
        faqs: [
            { question: "What happens if my insurance expires?", answer: "You can renew it online instantly. If the break-in period is long, a vehicle inspection might be required." },
            { question: "What is Zero Depreciation cover?", answer: "It ensures you get the full claim amount without deduction for depreciation on parts (plastic, metal, rubber)." },
            { question: "Is third-party insurance mandatory?", answer: "Yes, as per the Motor Vehicles Act, third-party liability insurance is mandatory in India." }
        ]
    },
    "term-insurance": {
        title: "Term Insurance",
        description: "Get high life cover at affordable premiums with pure Term Insurance. Protect your family's financial future with critical illness and accidental death benefits.",
        icon: Home,
        image: "/term-insurance.png",
        features: ["High Coverage/Low Premium", "Critical Illness Riders", "Accidental Death Benefit", "Tax Savings"],
        content: `**Term Insurance is the most important financial product you will ever buy.** Period. It is a pure risk protection plan that guarantees a large sum of money (e.g., ₹1 Crore, ₹5 Crore) to your family if you pass away untimely. It ensures your family lifestyle, children's education, and home loans are taken care of.

        **Top Features of Our Term Plans:**
        *   **Unbeatable Premiums:** We source plans that offer ₹1 Crore cover for as low as ₹500 - ₹800 per month (depending on age).
        *   **Lengthy Coverage:** Lock your premiums today and get coverage up to age 85 or even 99 (Whole Life Term).
        *   **Riders for Extra Protection:**
            *   *Critical Illness Rider:* Get a payout if diagnosed with Cancer, Heart issues, etc., to cover treatment costs.
            *   *Accidental Disability:* Monthly income replacement if an accident leaves you disabled.

        **Why Buy Term Insurance Through an Advisor?**
        Buying online is easy, but claim settlement is hard. If your family faces a rejection due to a technicality in the proposal form filled years ago, the policy is useless.
        *   **Zero-Error Proposal:** We fill out the proposal form with professional precision to eliminate chances of "Non-Disclosure" rejection.
        *   **Medical Coordination:** We arrange your medical tests at your convenience.
        *   **The "3-Day" Claim Guarantee:** In the unfortunate event of a claim, we personally handle the paperwork to ensure the money reaches your nominee's bank account within the shortest possible time.

        **Tax Benefits**
        Premiums paid for Term Insurance are eligible for tax deductions of up to ₹1.5 Lakhs under Section 80C of the Income Tax Act.`,
        faqs: [
            { question: "What is the right age to buy Term Insurance?", answer: "The earlier, the better. Buying in your 20s secures a very low premium for life." },
            { question: "Do I get money back if I survive the term?", answer: "Pure term plans do not offer maturity benefits. However, 'Return of Premium' (ROP) plans refund all premiums paid if you survive." },
            { question: "Is accidental death covered?", answer: "Standard term plans cover all deaths (natural/accidental). You can add an Accidental Death Benefit rider for extra payout." }
        ]
    },
    "sme-insurance": {
        title: "SME Insurance",
        description: "Protect your business with tailored SME Insurance solutions. Coverage for shops, offices, and startups including fire, burglary, liability, and employee benefits.",
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
        description: "Travel stress-free with complete Travel Insurance for domestic and international trips. Covers medical emergencies, flight delays, lost baggage, and trip cancellations.",
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
        description: "Plan a stress-free retirement with our Pension Plans. Build a corpus for regular monthly income, inflation protection, and financial independence in your golden years.",
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
        description: "Combine insurance and investment with ULIPs. Create long-term wealth with market-linked returns while securing life cover and enjoying tax benefits.",
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
        description: "Insure your big day against cancellations and mishaps. Wedding Insurance covers venue damage, non-appearance, and public liability for a worry-free celebration.",
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
        description: "Safeguard against digital threats with Cyber Insurance. Protect your finances and identity from phishing, ransomware, cyber extortion, and online fraud.",
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
                            <div className="text-muted-foreground leading-loose prose dark:prose-invert max-w-none">
                                <ReactMarkdown>{service.content}</ReactMarkdown>
                            </div>
                            <p className="text-muted-foreground leading-loose mt-4">
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
