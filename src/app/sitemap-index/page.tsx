import { Metadata } from 'next'
import Link from 'next/link'
import { cityData } from '@/data/cityData'
import { services, serviceLabels } from '@/data/services'
import { faqData } from '@/data/faqData'
import { MapPin, Shield, FileText, HelpCircle, Layout } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Site Map | Insurance Support India',
    description: 'Complete directory of all insurance services and local advisor pages across India. Easy navigation for all your insurance needs.',
    robots: {
        index: true,
        follow: true,
    }
}

export default function SitemapIndexPage() {
    const locations = Object.values(cityData).sort((a, b) => a.name.localeCompare(b.name))
    const staticRoutes = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Insurance Services', path: '/services' },
        { name: 'Service Locations', path: '/locations' },
        { name: 'Claims Support', path: '/support' },
        { name: 'Loans & Financing', path: '/loans' },
        { name: 'Resources & Guides', path: '/resources' },
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Get a Quote', path: '/get-started' },
    ]

    const tools = [
        { name: 'HLV Calculator', path: '/tools/human-life-value-calculator' },
        { name: 'Lost Policy Recovery', path: '/tools/policy-recovery' },
        { name: 'Risk Scorecard', path: '/tools/risk-scorecard' },
        { name: 'Wealth Discovery', path: '/tools/investment-returns' },
    ]

    const guides = [
        { name: 'Death Claim Settlement Guide', path: '/resources/guides/death-claim-settlement' },
        { name: 'Lapsed Policy Revival Guide', path: '/resources/guides/lapsed-policy-revival' },
        { name: 'Download Policy Copy', path: '/resources/download-policy-copy' },
        { name: 'General Insurance Claim Process', path: '/resources/general-insurance-claim-process' },
    ]

    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Site Directory</h1>
                    <p className="text-slate-600">Explore all pages and services provided by Insurance Support India.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Main Pages */}
                    <section>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                            <Layout className="h-5 w-5" />
                            Main Pages
                        </h2>
                        <ul className="space-y-3">
                            {staticRoutes.map(route => (
                                <li key={route.path}>
                                    <Link href={route.path} className="text-slate-600 hover:text-primary transition-colors">
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-bold mt-10 mb-6 flex items-center gap-2 text-primary">
                            <Shield className="h-5 w-5" />
                            Smart Tools
                        </h2>
                        <ul className="space-y-3">
                            {tools.map(tool => (
                                <li key={tool.path}>
                                    <Link href={tool.path} className="text-slate-600 hover:text-primary transition-colors">
                                        {tool.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Services */}
                    <section>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                            <Shield className="h-5 w-5" />
                            Insurance Services
                        </h2>
                        <ul className="space-y-3">
                            {services.map(slug => (
                                <li key={slug}>
                                    <Link href={`/services/${slug}`} className="text-slate-600 hover:text-primary transition-colors">
                                        {serviceLabels[slug] || slug}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-bold mt-10 mb-6 flex items-center gap-2 text-primary">
                            <FileText className="h-5 w-5" />
                            Expert Guides
                        </h2>
                        <ul className="space-y-3">
                            {guides.map(guide => (
                                <li key={guide.path}>
                                    <Link href={guide.path} className="text-slate-600 hover:text-primary transition-colors">
                                        {guide.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Locations */}
                    <section>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                            <MapPin className="h-5 w-5" />
                            Service Locations
                        </h2>
                        <div className="max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200">
                            <ul className="space-y-3">
                                {locations.map(city => (
                                    <li key={city.slug}>
                                        <Link href={`/locations/${city.slug}`} className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                            Advisor in {city.name}
                                        </Link>
                                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                                            {services.map(service => (
                                                <Link
                                                    key={`${city.slug}-${service}`}
                                                    href={`/locations/${city.slug}/${service}`}
                                                    className="text-[10px] text-slate-400 hover:text-primary"
                                                >
                                                    {serviceLabels[service]}
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* FAQs */}
                <section className="mt-16 pt-12 border-t border-slate-200">
                    <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-primary">
                        <HelpCircle className="h-5 w-5" />
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm text-slate-500">
                        {faqData.map(faq => (
                            <Link
                                key={faq.slug}
                                href={`/resources/faq/${faq.slug}`}
                                className="hover:text-primary transition-colors"
                            >
                                {faq.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="mt-16 text-center text-xs text-slate-400">
                    <Link href="/sitemap.xml" className="hover:text-primary">XML Sitemap</Link>
                    <span className="mx-2">|</span>
                    <span>&copy; {new Date().getFullYear()} Insurance Support Online</span>
                </div>
            </div>
        </div>
    )
}
