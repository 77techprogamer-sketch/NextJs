import { Metadata } from 'next'
import Link from 'next/link'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { MapPin, ChevronRight, Shield, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Locations | Insurance Support Services Across India',
    description: 'Find expert insurance support and claim recovery services in your state. Serving 140+ cities across Karnataka, Maharashtra, Delhi, Tamil Nadu, and more.',
    alternates: {
        canonical: 'https://insurancesupport.online/locations',
    }
}

export default function LocationsPage() {
    // Group everything by state
    const stateGroups: Record<string, { count: number; sampleCities: string[] }> = {}

    INDIAN_LOCATIONS.forEach(loc => {
        if (!stateGroups[loc.state]) {
            stateGroups[loc.state] = { count: 0, sampleCities: [] }
        }
        stateGroups[loc.state].count++
        if (stateGroups[loc.state].sampleCities.length < 3) {
            stateGroups[loc.state].sampleCities.push(loc.name)
        }
    })

    const sortedStates = Object.entries(stateGroups).sort((a,b) => a[0].localeCompare(b[0]))

    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 leading-tight">
                        Our Regional <span className="text-primary">Service Network</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Insurance Support operates across 140+ urban centers in India. Select your state below to find dedicated advisors in your city.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {sortedStates.map(([stateSlug, stats]) => (
                        <Link
                            key={stateSlug}
                            href={`/locations/${stateSlug}`}
                            className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    {stats.count} Cities
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 capitalize text-slate-800">
                                {stateSlug.replace(/-/g, ' ')}
                            </h2>
                            <p className="text-sm text-muted-foreground mb-6">
                                Serving {stats.sampleCities.join(', ')} and more.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                View State Hub <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Shield className="h-64 w-64" />
                    </div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Don&apos;t See Your State Listed?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We are rapidly expanding our physical presence. Our centralized support team can still assist you with online consultancy and remote claim recovery support for all major insurers anywhere in India.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-10 rounded-2xl hover:bg-primary/90 transition-all text-lg shadow-lg shadow-primary/25"
                            >
                                Contact Support Area
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1">140+</span>
                                <span className="text-sm text-slate-400">Active Cities</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1">24/7</span>
                                <span className="text-sm text-slate-400">Claims Help</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1"> Doorstep</span>
                                <span className="text-sm text-slate-400">Consultation</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1">98%</span>
                                <span className="text-sm text-slate-400">Success Ratio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
