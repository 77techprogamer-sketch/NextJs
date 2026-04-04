import { Metadata } from 'next'
import Link from 'next/link'
import { services, serviceLabels, serviceDescriptions, serviceHighlights } from '@/data/services'
import { Shield, ChevronRight, CheckCircle2, Phone, Users, ShieldCheck, TrendingUp, Award, ArrowRight, FileText, Heart, Car, Briefcase, Plane, Gem, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactConfig } from '@/data/contact'

export const metadata: Metadata = {
    title: 'Our Insurance Services | Claim Support, Policy Guidance & Financial Protection',
    description: 'Explore our comprehensive insurance services — Life, Health, Motor, Term, SME, Travel, Pension, ULIP, Wedding & Cyber insurance. Expert support for claim recovery, policy revival, and financial planning with 25+ years of experience.',
    keywords: [
        'insurance services India',
        'life insurance advisor',
        'health insurance claim support',
        'motor insurance claim help',
        'term insurance expert',
        'SME insurance consultant',
        'insurance advisor Bangalore',
        'claim recovery specialist'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/services',
    }
}

const serviceIcons: Record<string, typeof Shield> = {
    'life-insurance': Shield,
    'health-insurance': Heart,
    'motor-insurance': Car,
    'term-insurance': ShieldCheck,
    'sme-insurance': Briefcase,
    'travel-insurance': Plane,
    'pension-plans': TrendingUp,
    'ulip-plans': Gem,
    'wedding-insurance': Award,
    'cyber-insurance': Lock,
}

export default function ServicesHubPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <Shield className="h-4 w-4" />
                            10+ Insurance Verticals
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Comprehensive <span className="text-primary italic">Insurance Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                            Insurance isn&apos;t just about buying a policy — it&apos;s about having a knowledgeable partner who fights for your money when claims are filed, rejected, or delayed. With over 25 years of hands-on expertise across every major insurance vertical in India, we provide end-to-end support from policy selection to claim settlement and beyond.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: '10+', label: 'Insurance Verticals' },
                                { value: '25+ Yrs', label: 'Industry Expertise' },
                                { value: '₹50Cr+', label: 'Claims Recovered' },
                                { value: '98%', label: 'Settlement Success' },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Insurance Support?</h2>
                        <p className="text-slate-600 text-lg mb-10 max-w-3xl leading-relaxed">
                            We don&apos;t just help you buy insurance — we stay with you throughout the entire policy lifecycle. Here&apos;s what sets our service apart from online portals and traditional agents.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: FileText, title: 'Doorstep Service', desc: 'We visit your home or office for documentation, form filling, and policy delivery — no branch visits ever needed.' },
                                { icon: Users, title: 'Lifetime Relationship', desc: 'We don\'t disappear after the sale. Annual policy health check-ups, renewal reminders, and claim support for life.' },
                                { icon: TrendingUp, title: 'Claim Recovery Experts', desc: 'Specialized in reversing rejected claims through GRO, IRDAI, and Insurance Ombudsman channels, recovering ₹50Cr+ for families.' },
                                { icon: Award, title: 'IRDAI Certified', desc: 'All advisors are IRDAI licensed with verified credentials. Your data, premiums, and claims are handled with professional integrity.' },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How Our Services Work */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Process Works</h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">From initial conversation to lifetime support — here&apos;s what every engagement looks like.</p>
                    <div className="flex flex-col md:flex-row gap-6">
                        {[
                            { step: '1', title: 'Free Consultation', desc: 'Tell us about your insurance needs, existing policies, or claim issues. We listen, assess, and provide a clear recommendation — completely free, no obligation.' },
                            { step: '2', title: 'Expert Execution', desc: 'We handle all paperwork, branch visits, TPA coordination, and document verification. You sit back while we manage the process end to end.' },
                            { step: '3', title: 'Lifetime Support', desc: 'Once onboarded, you get lifetime advisory support — renewals, additional coverage, claim filing, and annual policy health check-ups at no extra cost.' },
                        ].map((item, i) => (
                            <div key={i} className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100 relative">
                                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Cards Grid */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore All Insurance Services</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Click any service to learn more about coverage options, claim processes, and how our team can help with that specific insurance category.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((slug) => {
                            const IconComponent = serviceIcons[slug] || Shield;
                            const highlights = serviceHighlights[slug] || [];
                            const description = serviceDescriptions[slug] || `Professional guidance and claim support for ${serviceLabels[slug] || slug} policies.`;

                            return (
                                <Link
                                    key={slug}
                                    href={`/services/${slug}`}
                                    className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                                        <IconComponent className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                                        {serviceLabels[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                    </h3>

                                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                        {description}
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        {highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Learn More <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Not sure which insurance product is right for you? Whether you need coverage for a growing family, a business, or want help recovering a stuck claim — our expert advisors will build a personalized insurance portfolio tailored to your exact needs and budget.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                    <Link href="/contact">
                                        Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call +91 99866 34506
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
