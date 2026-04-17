import { Metadata } from 'next'
import Link from 'next/link'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import { MapPin, ChevronRight, Shield, ArrowRight, Target } from 'lucide-react'
import { getServerSideTranslation, getLocalizedName } from '@/lib/i18n-server'

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getServerSideTranslation();
    const route = '/locations';
    return {
        title: t('locations_meta_title', 'Locations | Insurance Support Services Across India'),
        description: t('locations_meta_description', 'Find expert insurance support and claim recovery services in your state. Serving 140+ cities across Karnataka, Maharashtra, Delhi, Tamil Nadu, and more.'),
        alternates: {
            canonical: `https://insurancesupport.online${route}`,
            languages: {
                en: `https://insurancesupport.online${route}`,
                hi: `https://insurancesupport.online/hi${route}`,
            }
        }
    }
}

export default async function LocationsPage() {
    const { t, lang } = await getServerSideTranslation();
    // Group everything by state
    const stateGroups: Record<string, { count: number; sampleCities: string[]; localizedState: string }> = {}

    for (const loc of INDIAN_LOCATIONS) {
        if (!stateGroups[loc.state]) {
            const localizedState = await getLocalizedName(loc.state, lang);
            stateGroups[loc.state] = { count: 0, sampleCities: [], localizedState }
        }
        stateGroups[loc.state].count++
        if (stateGroups[loc.state].sampleCities.length < 3) {
            // Localize city name for sample if available
            const localizedCity = await getLocalizedName(loc.city, lang);
            stateGroups[loc.state].sampleCities.push(localizedCity)
        }
    }

    const sortedStates = Object.entries(stateGroups).sort((a,b) => a[1].localizedState.localeCompare(b[1].localizedState))

    // Pre-calculate priority cities with localized names
    const priorityCitiesSlugs = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune'];
    const priorityCities = await Promise.all(
        INDIAN_LOCATIONS
            .filter(l => priorityCitiesSlugs.includes(l.city))
            .map(async (loc) => ({
                ...loc,
                localizedName: await getLocalizedName(loc.city, lang)
            }))
    );

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 dark:text-white leading-tight">
                        {t('location_page.regional_service_network_h1', 'Our Regional Service Network')}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {t('location_page.service_network_desc', 'Insurance Support operates across 140+ urban centers in India. Select your state below or jump directly to our major metropolitan service hubs.')}
                    </p>
                </div>

                {/* Priority Metro Hubs (Phase 7 Internal Linking) */}
                <div className="mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-800 pb-2">{t('location_page.leading_service_cities', 'Leading Service Cities (TIER 1)')}</h2>
                    <div className="flex flex-wrap gap-3">
                        {priorityCities.map((loc) => (
                            <Link
                                key={loc.city}
                                href={lang === 'en' ? `/locations/${loc.state}/${loc.city}/life-insurance` : `/${lang}/locations/${loc.state}/${loc.city}/life-insurance`}
                                className="bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:text-primary font-bold shadow-sm transition-all flex items-center gap-2"
                            >
                                <Target className="w-4 h-4 text-primary" />
                                {loc.localizedName}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {sortedStates.map(([stateSlug, stats]) => (
                        <Link
                            key={stateSlug}
                            href={lang === 'en' ? `/locations/${stateSlug}` : `/${lang}/locations/${stateSlug}`}
                            className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    {stats.count} {t('cities', 'Cities')}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 capitalize text-slate-800 dark:text-slate-100">
                                {stats.localizedState}
                            </h2>
                            <p className="text-sm text-muted-foreground mb-6">
                                {t('location_page.serving_cities_desc', { cities: stats.sampleCities.join(', ') })}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                {t('visit_state_hub', 'View State Hub')} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                                {t('location_page.missing_state_h2', "Don't See Your State Listed?")}
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                {t('location_page.missing_state_desc_v2', 'We are rapidly expanding our physical presence. Our centralized support team can still assist you with online consultancy and remote claim recovery support for all major insurers anywhere in India.')}
                            </p>
                            <Link
                                href={lang === 'en' ? "/contact" : `/${lang}/contact`}
                                className="inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-10 rounded-2xl hover:bg-primary/90 transition-all text-lg shadow-lg shadow-primary/25"
                            >
                                {t('contact_support_area', 'Contact Support Area')}
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1">140+</span>
                                <span className="text-sm text-slate-400">{t('active_cities', 'Active Cities')}</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1">24/7</span>
                                <span className="text-sm text-slate-400">{t('claims_help', 'Claims Help')}</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1"> {t('doorstep', 'Doorstep')}</span>
                                <span className="text-sm text-slate-400">{t('consultation', 'Consultation')}</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                                <span className="block text-3xl font-bold mb-1">98%</span>
                                <span className="text-sm text-slate-400">{t('success_ratio', 'Success Ratio')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
