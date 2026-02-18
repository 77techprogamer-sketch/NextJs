import { Metadata } from 'next'
import Link from 'next/link'
import { services, serviceLabels } from '@/data/services'
import { Shield, ChevronRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Our Insurance Services | Claim Support & Policy Guidance',
    description: 'Comprehensive insurance solutions including Life, Health, Motor, SME, and Travel insurance across India. Specialized services for lapsed policy revival and claim settlement.',
}

export default function ServicesHubPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                        Comprehensive <span className="text-primary">Insurance Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        With over 25 years of industry expertise, we bridge the gap between policyholders and insurance companies. Explore our specialized services designed to protect your financial future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((slug) => (
                        <Link
                            key={slug}
                            href={`/services/${slug}`}
                            className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                                <Shield className="h-6 w-6" />
                            </div>

                            <h2 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                                {serviceLabels[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                            </h2>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Professional guidance and claim support for {serviceLabels[slug] || slug} policies. We ensure you get the best coverage and hassle-free claim settlements.
                            </p>

                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>Expert Policy Comparison</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>Lapsed Policy Revival</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>Dedicated Claim Support</span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                Learn More <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 border-t border-slate-100 pt-16">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-4">
                            <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>
                            <p className="text-slate-400 text-lg">
                                Not sure which insurance product is right for you? Our expert advisors are ready to help you build a personalized insurance portfolio tailored to your family&apos;s needs.
                            </p>
                        </div>
                        <div className="flex gap-4 shrink-0">
                            <Link
                                href="/contact"
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
