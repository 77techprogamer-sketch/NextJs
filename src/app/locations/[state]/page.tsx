import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { serviceLabels } from '@/data/services'
import Link from 'next/link'
import { MapPin, ArrowRight, Shield, ChevronRight } from 'lucide-react'

interface Props {
    params: { state: string }
}

export async function generateStaticParams() {
    // Extract unique states
    const states = Array.from(new Set(INDIAN_LOCATIONS.map(loc => loc.state)))
    return states.map(state => ({ state }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const stateName = params.state.replace(/-/g, ' ')
    const title = `Insurance Support Services in ${stateName.toUpperCase()} | Claims & Policy Help`
    const description = `Find expert insurance advisors across ${stateName}. Specialized support for LIC death claims, health insurance rejections, and policy revivals in all major cities of ${stateName}.`

    return {
        title,
        description,
        alternates: {
            canonical: `https://insurancesupport.online/locations/${params.state}`,
        }
    }
}

export default async function StateHubPage({ params }: Props) {
    const stateName = params.state.replace(/-/g, ' ')
    const citiesInState = INDIAN_LOCATIONS.filter(loc => loc.state === params.state)

    if (citiesInState.length === 0) {
        return notFound()
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="font-bold text-foreground capitalize">{stateName}</span>
            </nav>

            <header className="mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight capitalize">
                    Insurance Support in <span className="text-primary">{stateName}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Connecting families across {stateName} with certified insurance experts. Whether you are in {citiesInState[0].name} or {citiesInState[Math.min(5, citiesInState.length - 1)].name}, our doorstep service handles everything from claim rejections to policy bond recovery.
                </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <MapPin className="text-primary" />
                        Select Your City
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {citiesInState.sort((a,b) => a.name.localeCompare(b.name)).map((loc) => (
                            <Link 
                                key={loc.city} 
                                href={`/locations/${loc.state}/${loc.city}/life-insurance`}
                                className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
                            >
                                <span className="font-semibold group-hover:text-primary transition-colors block">{loc.name}</span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Services <ArrowRight className="w-3 h-3" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                        <Shield className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">State-Wide Expertise</h3>
                        <p className="text-slate-400 mb-6">
                            Our advisors in {stateName} are well-versed in local regulations and have direct liaison with regional insurance offices to fast-track your requests.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-center gap-2">✓ Cashless Hospitalization Support</li>
                            <li className="flex items-center gap-2">✓ LIC Dead-Claim Specialists</li>
                            <li className="flex items-center gap-2">✓ Motor Accidental Claims</li>
                            <li className="flex items-center gap-2">✓ Doorstep Document Pickup</li>
                        </ul>
                    </div>
                    
                    <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h4 className="font-bold mb-4">Common Issues We Resolve</h4>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <span className="block font-bold text-sm">Claim Rejections</span>
                                <span className="text-xs text-muted-foreground">Appealing unfair rejections with technical evidence.</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <span className="block font-bold text-sm">Policy Revival</span>
                                <span className="text-xs text-muted-foreground">Getting lapsed policies back on track with minimal penalty.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
