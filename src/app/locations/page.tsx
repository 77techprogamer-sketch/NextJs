import { Metadata } from 'next'
import Link from 'next/link'
import { cityData } from '@/data/cityData'
import { MapPin, ChevronRight, Shield } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Areas We Serve | Local Insurance Support Across India',
    description: 'Find expert insurance support and claim recovery services in your city. Serving Bangalore, Chennai, Hyderabad, Pune, Mumbai, and 25+ other major cities across India.',
}

export default function LocationsPage() {
    // Group cities by state
    const states: Record<string, typeof cityData[string][]> = {}

    Object.values(cityData).forEach(city => {
        if (!states[city.state]) {
            states[city.state] = []
        }
        states[city.state].push(city)
    })

    const sortedStates = Object.keys(states).sort()

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        Expert Insurance Support <span className="text-primary">In Your City</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We provide doorstep insurance consultancy and claim recovery support across major industrial and urban hubs in India. Find your city below to get started.
                    </p>
                </div>

                <div className="grid gap-12">
                    {sortedStates.map(state => (
                        <div key={state} className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                <MapPin className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-slate-800">{state}</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {states[state].sort((a, b) => a.name.localeCompare(b.name)).map(city => (
                                    <Link
                                        key={city.slug}
                                        href={`/locations/${city.slug}`}
                                        className="group bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                                {city.name}
                                            </h3>
                                            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                            {city.description || `Expert insurance agents and claim support services for families and businesses in ${city.name}.`}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {city.areas.slice(0, 3).map(area => (
                                                <span key={area} className="text-[10px] font-medium uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                                                    {area}
                                                </span>
                                            ))}
                                            {city.areas.length > 3 && (
                                                <span className="text-[10px] font-medium text-slate-400 py-0.5">+{city.areas.length - 3} more</span>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 text-center max-w-4xl mx-auto">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Don&apos;t see your city?</h2>
                    <p className="text-muted-foreground mb-8">
                        We are rapidly expanding our physical presence. Even if your city isn&apos;t listed, we provide online consultancy and remote claim recovery support for all major insurers across India.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
                    >
                        Contact Our Support Team
                    </Link>
                </div>
            </div>
        </div>
    )
}
