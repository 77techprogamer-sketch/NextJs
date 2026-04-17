import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/data/contact';
import SupportClient from '@/components/SupportClient';
import { getServerSideTranslation } from '@/lib/i18n-server';

export async function generateMetadata() {
    const { t } = await getServerSideTranslation();
    return {
        title: t('contact.meta_title'),
        description: t('contact.meta_desc'),
        alternates: {
            canonical: 'https://insurancesupport.online/contact',
        },
    };
}

export default async function ContactPage() {
    const { t } = await getServerSideTranslation();
    const helpItems = t('contact.help_items', { returnObjects: true }) as string[];
    const steps = t('contact.steps', { returnObjects: true }) as { title: string; desc: string }[];
    const faqs = t('contact.faqs', { returnObjects: true }) as { q: string; a: string }[];

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
            '@type': 'InsuranceAgency',
            '@id': 'https://insurancesupport.online/#organization',
            name: 'Insurance Support',
            url: 'https://insurancesupport.online',
            telephone: contactConfig.phoneFull,
            email: contactConfig.email,
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    telephone: contactConfig.phoneFull,
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['English', 'Hindi', 'Kannada'],
                    hoursAvailable: {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        opens: '09:00',
                        closes: '20:00'
                    }
                }
            ],
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bahubali Nagar, Jalahalli',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560013',
                addressCountry: 'IN'
            }
        }
    };

    const faqSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
            }
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <Phone className="h-4 w-4" />
                            {t('contact.hero_badge')}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            {t('contact.hero_title_1')} <span className="text-primary italic">{t('contact.hero_title_2')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                            {t('contact.hero_desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <a href={`tel:${contactConfig.phoneFull}`} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                <Phone className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{t('contact.call_us')}</h3>
                            <p className="text-primary font-bold text-lg">{contactConfig.phoneDisplay}</p>
                            <p className="text-xs text-slate-500 mt-1">{t('contact.tap_to_call')}</p>
                        </a>
                        <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-green-500/20 transition-all text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{t('contact.whatsapp')}</h3>
                            <p className="text-green-600 font-bold text-lg">{t('common.chat_now')}</p>
                            <p className="text-xs text-slate-500 mt-1">{t('contact.instant_messaging_support')}</p>
                        </a>
                        <a href={`mailto:${contactConfig.email}`} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-500/20 transition-all text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{t('contact.email')}</h3>
                            <p className="text-blue-600 font-bold text-sm">{contactConfig.email}</p>
                            <p className="text-xs text-slate-500 mt-1">{t('contact.for_detailed_inquiries')}</p>
                        </a>
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{t('contact.office')}</h3>
                            <p className="text-slate-600 text-sm">Bahubali Nagar, Jalahalli</p>
                            <p className="text-xs text-slate-500 mt-1">Bengaluru, KA 560013</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Help With */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('contact.help_with_title')}</h2>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-3xl">
                        {t('contact.help_with_desc')}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {helpItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What to Expect + Interactive Form */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('contact.what_happens_title')}</h2>
                            <div className="space-y-6">
                                {steps.map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <h4 className="font-bold text-slate-900">{t('contact.business_hours_title')}</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    <strong>{t('contact.mon_sat')}:</strong> 9:00 AM – 8:00 PM IST<br />
                                    <strong>{t('contact.sunday')}:</strong> {t('contact.emergency_only')}<br />
                                    <strong>{t('contact.languages')}:</strong> English, Hindi, Kannada, Tulu
                                </p>
                            </div>
                        </div>

                        {/* Interactive Form Section */}
                        <div className="lg:w-[480px]">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.send_query_title')}</h3>
                                <p className="text-slate-500 text-sm mb-6">{t('contact.send_query_desc')}</p>
                                <SupportClient />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('contact.areas_serve_title')}</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        {t('contact.areas_serve_desc')}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { region: 'Karnataka', cities: 'Bangalore, Mysore, Mangalore, Hubli' },
                            { region: 'Maharashtra', cities: 'Mumbai, Pune, Nagpur, Thane' },
                            { region: 'Tamil Nadu', cities: 'Chennai, Coimbatore, Madurai' },
                            { region: 'Telangana & AP', cities: 'Hyderabad, Vizag, Vijayawada' },
                            { region: 'Delhi NCR', cities: 'Delhi, Noida, Gurgaon, Faridabad' },
                            { region: 'West Bengal', cities: 'Kolkata, Howrah, Siliguri' },
                            { region: 'Gujarat', cities: 'Ahmedabad, Surat, Vadodara' },
                            { region: 'Kerala', cities: 'Kochi, Thiruvananthapuram, Kozhikode' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.region}</h4>
                                <p className="text-xs text-slate-500">{item.cities}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/locations" className="text-primary text-sm font-bold hover:underline">
                            {t('contact.view_all_locations')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('contact.faq_title')}</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">{t('contact.final_cta_title')}</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    {t('contact.final_cta_desc')}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
                                    <a href={`tel:${contactConfig.phoneFull}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        {t('contact.call_now')}
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8 text-white border-white/20 hover:bg-white/10" asChild>
                                    <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        {t('contact.whatsapp_us')}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
