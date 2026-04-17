import { getServerSideTranslation, getLocalizedName } from '@/lib/i18n-server'
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
    const { t, lang } = await getServerSideTranslation();
    const localizedState = await getLocalizedName(params.state, lang);
    const title = t('state_meta_title', 'Insurance Support Services in {{state}} | Claims & Policy Help').replace('{{state}}', localizedState);
    const description = t('state_meta_desc', 'Find expert insurance advisors across {{state}}. Specialized support for LIC death claims, health insurance rejections, and policy revivals in all major cities of {{state}}.').replace(/{{state}}/g, localizedState);

    const route = `/locations/${params.state}`;

    return {
        title,
        description,
        alternates: {
            canonical: `https://insurancesupport.online${route}`,
            languages: {
                en: `https://insurancesupport.online${route}`,
                hi: `https://insurancesupport.online/hi${route}`,
            }
        }
    }
}

export default async function StateHubPage({ params }: Props) {
    const { t, lang } = await getServerSideTranslation();
    const localizedState = await getLocalizedName(params.state, lang);
    const citiesInState = INDIAN_LOCATIONS.filter(loc => loc.state === params.state)

    if (citiesInState.length === 0) {
        return notFound()
    }

    const services = Object.keys(serviceLabels)

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
                <Link href="/" className="hover:text-primary transition-colors">{t('location_page.breadcrumb_home', 'Home')}</Link>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <Link href={lang === 'en' ? "/locations" : `/${lang}/locations`} className="hover:text-primary transition-colors">{t('locations', 'Locations')}</Link>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <span className="font-bold text-foreground capitalize">{localizedState}</span>
            </nav>

            <header className="mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight capitalize">
                    {t('location_page.insurance_support_in_state', 'Insurance Support in')} <span className="text-primary">{localizedState}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    {t('location_page.state_hub_desc', { 
                        state: localizedState, 
                        city1: citiesInState[0].name, 
                        city2: citiesInState[Math.min(5, citiesInState.length - 1)].name 
                    })}
                </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <MapPin className="text-primary" />
                            {t('select_your_city', 'Select Your City')}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {citiesInState.sort((a,b) => a.name.localeCompare(b.name)).map((loc, index) => (
                                <Link 
                                    key={loc.city} 
                                    href={lang === 'en' ? `/locations/${loc.state}/${loc.city}/${services[index % services.length]}` : `/${lang}/locations/${loc.state}/${loc.city}/${services[index % services.length]}`}
                                    className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
                                >
                                    <span className="font-semibold group-hover:text-primary transition-colors block">{loc.name}</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest block mt-1 opacity-70">
                                        {t(`service_${services[index % services.length].replace(/-/g, '_')}`, serviceLabels[services[index % services.length]])}
                                    </span>
                                    <span className="text-xs text-primary flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                                        {t('view_expert', 'View Expert')} <ArrowRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold mb-6">{t('location_page.our_services_in_state', 'Our Services in')} {localizedState}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            {services.map((service) => (
                                <Link 
                                    key={service}
                                    href={lang === 'en' ? `/locations/${params.state}/${citiesInState[0].city}/${service}` : `/${lang}/locations/${params.state}/${citiesInState[0].city}/${service}`}
                                    className="flex items-center justify-between group py-2 border-b border-slate-200 dark:border-slate-800 last:border-0 hover:text-primary transition-colors"
                                >
                                    <span className="font-medium">{t(`service_${service.replace(/-/g, '_')}`, serviceLabels[service])} {t('support_in_state', 'support in')} {localizedState}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="space-y-8">
                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                        <Shield className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">{t('location_page.state_wide_expertise_title', 'State-Wide Expertise')}</h3>
                        <p className="text-slate-400 mb-6">
                            {t('location_page.state_wide_expertise_desc', { state: localizedState })}
                        </p>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-center gap-2 font-medium"><span className="text-primary text-xl leading-none">•</span> {t('cashless_hospitalization', 'Cashless Hospitalization Support')}</li>
                            <li className="flex items-center gap-2 font-medium"><span className="text-primary text-xl leading-none">•</span> {t('dead_claim_specialists', 'LIC Dead-Claim Specialists')}</li>
                            <li className="flex items-center gap-2 font-medium"><span className="text-primary text-xl leading-none">•</span> {t('motor_claims', 'Motor Accidental Claims')}</li>
                            <li className="flex items-center gap-2 font-medium"><span className="text-primary text-xl leading-none">•</span> {t('doorstep_pickup', 'Doorstep Document Pickup')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

