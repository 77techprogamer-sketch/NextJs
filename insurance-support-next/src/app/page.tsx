import Link from "next/link"
import { Shield, Heart, Car, Home, Briefcase, Plane, Coins, UserCheck, AlertTriangle, Lock } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"

const services = [
    { id: 'life-insurance', title: "Life Insurance", icon: Shield, description: "Secure your family's future with our comprehensive life insurance plans." },
    { id: 'health-insurance', title: "Health Insurance", icon: Heart, description: "Get the best medical care without financial worry with our health plans." },
    { id: 'motor-insurance', title: "Motor Insurance", icon: Car, description: "Protect your vehicle against accidents, theft, and third-party liabilities." },
    { id: 'term-insurance', title: "Term Insurance", icon: Home, description: "Pure protection plans ensuring financial stability for your dependents." },
    { id: 'sme-insurance', title: "SME Insurance", icon: Briefcase, description: "Customized insurance solutions for small and medium enterprises." },
    { id: 'travel-insurance', title: "Travel Insurance", icon: Plane, description: "Comprehensive travel protection for safe and worry-free journeys." },
    { id: 'pension-plans', title: "Pension Plans", icon: Coins, description: "Plan a secure and comfortable retirement with our pension schemes." },
    { id: 'ulip-plans', title: "ULIP Plans", icon: UserCheck, description: "Dual benefit of investment and insurance for long-term wealth creation." },
    { id: 'wedding-insurance', title: "Wedding Insurance", icon: Heart, description: "Protect your big day against unforeseen cancellations and liabilities." },
    { id: 'cyber-insurance', title: "Cyber Insurance", icon: Lock, description: "Safeguard against digital threats, cyber-attacks, and data breaches." },
]

export default function HomePage() {
    return (
        <div className="flex flex-col gap-12 pb-12">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-24 md:py-32">
                <div className="container px-4 mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Your Trusted <span className="text-primary">Insurance Partner</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Expert guidance for Life, Health, Motor, and Business Insurance.
                        We explain the fine print so you don't have to worry.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/support">
                            <Button size="lg" className="text-lg px-8">Get Free Quote</Button>
                        </Link>
                        <Link href="#services">
                            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                                Explore Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="container px-4 mx-auto scroll-mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive insurance solutions tailored to your unique needs.
                        Explore our range of products designed to protect you and your loved ones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            href={`/services/${service.id}`}
                        />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-slate-50 py-16 mt-8">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                            <p className="text-muted-foreground">15+ years of industry experience guiding you to the right policies.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                            <p className="text-muted-foreground">We prioritize your needs and claims settlement over sales targets.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Claims Support</h3>
                            <p className="text-muted-foreground">Dedicated assistance during the claims process when you need it most.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
