import { getServerSideTranslation, getLocalizedName } from '@/lib/i18n-server'
import { serviceLabels, services } from '@/data/services'
import { INDIAN_LOCATIONS } from '@/data/indianCities'
import Link from 'next/link'
import { ArrowRight, Shield, ChevronRight, Briefcase, Heart, Stethoscope, Car } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
    params: { state: string, city: string }
}

export async function generateStaticParams() {
    return INDIAN_LOCATIONS.map(loc => ({
        state: loc.state,
        city: loc.city
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { t, lang } = await getServerSideTranslation();
    const location = INDIAN_LOCATIONS.find(l => l.city === params.city && l.state === params.state);
    
    if (!location) return { title: 'Not Found' };

    const localizedCity = await getLocalizedName(params.city, lang);
    const localizedState = await getLocalizedName(params.state, lang);

    const title = t('city_meta_title', 'Insurance Advisor & Support in {{city}}, {{state}}').replace('{{city}}', localizedCity).replace('{{state}}', localizedState);
    const description = t('city_meta_desc', 'Connect with specialized insurance advisors in {{city}}. Support for LIC life insurance, health claims, and policy servicing for all residents of {{city}}, {{state}}.').replace(/{{city}}/g, localizedCity).replace(/{{state}}/g, localizedState);

    const route = `/locations/${params.state}/${params.city}`;

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

export default async function CityHubPage({ params }: Props) {
    const { t, lang } = await getServerSideTranslation();
    const location = INDIAN_LOCATIONS.find(l => l.city === params.city && l.state === params.state);

    if (!location) {
        return notFound()
    }

    const localizedCity = await getLocalizedName(params.city, lang);
    const localizedState = await getLocalizedName(params.state, lang);

    const serviceIcons: Record<string, any> = {
        'life-insurance': Heart,
        'health-insurance': Stethoscope,
        'motor-insurance': Car,
        'term-insurance': Shield,
        'lic-agent': Briefcase
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
                <Link href="/" className="hover:text-primary transition-colors">{t('location_page.breadcrumb_home', 'Home')}</Link>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <Link href="/locations" className="hover:text-primary transition-colors">{t('locations', 'Locations')}</Link>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <Link href={`/locations/${params.state}`} className="hover:text-primary transition-colors capitalize">{localizedState}</Link>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <span className="font-bold text-foreground capitalize">{localizedCity}</span>
            </nav>

            <header className="mb-16">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                    Local Insurance Hub
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight capitalize">
                    Insurance Support in <span className="text-primary">{localizedCity}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Connecting with residents of {localizedCity}, {localizedState} for expert LIC policy management, health insurance claim recovery, and personalized advisor support.
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                    const Icon = serviceIcons[service] || Shield;
                    return (
                        <Link 
                            key={service}
                            href={`/locations/${params.state}/${params.city}/${service}`}
                            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group hover:shadow-xl"
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {t(`service_${service.replace(/-/g, '_')}`, serviceLabels[service])}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Specialized support and local advisor assistance for {serviceLabels[service]} in {localizedCity}.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                Explore Local Services <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className="mt-20 p-8 bg-slate-900 text-white rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Doorstep Support in {localizedCity}</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Our experts provide physical document collection and policy audit services in all major neighborhoods of {localizedCity}. Skip the online paperwork and get expert assistance at your home.
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        Request Doorstep Visit
                    </Link>
                </div>
            </div>
        </div>
    )
}
