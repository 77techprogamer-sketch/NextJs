import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, FileText, ShieldCheck, RefreshCw, Search, AlertTriangle, CheckCircle2, Clock, ArrowRight, HelpCircle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from '@/components/QuoteForm';
import { contactConfig } from '@/data/contact';
import { getStaticTranslation } from "@/lib/static-i18n";
import EscalationRoadmap from '@/components/lead-magnets/EscalationRoadmap';
import LeadMagnetCTA from '@/components/lead-magnets/LeadMagnetCTA';
import ClaimStressTest from '@/components/lead-magnets/ClaimStressTest';



export async function generateMetadata(): Promise<Metadata> {
    const { t } = getStaticTranslation();
    
    return {
        title: {
            absolute: t('support_meta_title')
        },
        description: t('support_meta_desc'),
        keywords: [
            'Insurance Claim Support Center',
            'Policy Renewal Help India',
            'Insurance Complaint Resolution',
            'Stuck Insurance Claim Help India',
            'Insurance Document Support',
            'Rejected Claim Appeal Help',
            'LIC Policy Revival Support',
            'Insurance Ombudsman Filing Help',
            'Lost Policy Bond Recovery',
            'Health Insurance TPA Support',
            'Insurance Claim Follow Up',
            'Insurance Grievance Redressal Help'
        ],
        alternates: {
            canonical: 'https://insurancesupport.online/support',
        },
        openGraph: {
            title: t('support_meta_title'),
            description: t('support_meta_desc'),
            type: 'website',
            url: 'https://insurancesupport.online/support',
            siteName: 'Insurance Support',
            locale: 'en_IN',
        },
    };
}

export default async function SupportPage() {
    const { t } = getStaticTranslation();

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What should I do if my insurance claim has been stuck for months?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If your claim hasn\'t been resolved within 30 days, it\'s likely stuck in the insurer\'s internal process. Contact us with your claim reference number and we\'ll escalate it through the Grievance Redressal Officer (GRO), IRDAI Bima Bharosa, or the Insurance Ombudsman depending on the severity and duration of the delay.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can you help with a claim that was rejected years ago?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. The Insurance Ombudsman accepts complaints within one year of the insurer\'s final response. However, IRDAI has no time limit for regulatory complaints. For very old cases (2+ years), consumer court remedies are also available. We assess every case individually to determine the best recovery route.'
                }
            },
            {
                '@type': 'Question',
                name: 'How do I file a complaint against my insurance company?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The process involves three levels: (1) Internal Grievance to the insurer\'s GRO â€” 15-day response window, (2) IRDAI Bima Bharosa portal at igms.irda.gov.in, and (3) Insurance Ombudsman â€” a zero-cost, semi-judicial body. We handle the entire complaint filing and documentation process on your behalf.'
                }
            },
            {
                '@type': 'Question',
                name: 'What documents do I need for claim support?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The required documents vary by case: For health claims â€” policy copy, rejection letter, discharge summary, medical bills, and payment receipts. For death claims â€” death certificate, policy bond, nominee ID, post-mortem report (if applicable). For revival â€” policy number, premium payment history, and health declaration form. Don\'t worry if you\'re missing documents â€” we help locate and collect them.'
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"></div>
                </div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                            <ShieldCheck className="h-4 w-4" />
                            {t('support_page.hero_badge')}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Insurance <span className="text-primary italic">Support Center</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                            {t('support_page.hero_desc')}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: '2 Hrs', label: t('support_page.stats.response_time') },
                                { value: 'â‚¹50Cr+', label: t('support_page.stats.claims_recovered') },
                                { value: '98%', label: t('support_page.stats.resolution_rate') },
                                { value: 'Free', label: t('support_page.stats.case_assessment') },
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

            {/* Support Categories */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('support_page.choose_category_title')}</h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-3xl leading-relaxed">
                        {t('support_page.choose_category_desc')}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: AlertTriangle,
                                title: t('support_page.categories.rejected.title'),
                                desc: t('support_page.categories.rejected.desc'),
                                color: 'red',
                                link: '/resources/guides/claim-rejection-appeal'
                            },
                            {
                                icon: Clock,
                                title: t('support_page.categories.stuck.title'),
                                desc: t('support_page.categories.stuck.desc'),
                                color: 'amber',
                                link: '/resources/how-it-works'
                            },
                            {
                                icon: RefreshCw,
                                title: t('support_page.categories.revival.title'),
                                desc: t('support_page.categories.revival.desc'),
                                color: 'blue',
                                link: '/resources/guides/lapsed-policy-revival'
                            },
                            {
                                icon: Search,
                                title: t('support_page.categories.lost_docs.title'),
                                desc: t('support_page.categories.lost_docs.desc'),
                                color: 'purple',
                                link: '/resources/guides/lapsed-policy-revival'
                            },
                            {
                                icon: Scale,
                                title: t('support_page.categories.ombudsman.title'),
                                desc: t('support_page.categories.ombudsman.desc'),
                                color: 'teal',
                                link: '/resources/guides/irdai-complaint-portal-guide'
                            },
                            {
                                icon: FileText,
                                title: t('support_page.categories.renewal.title'),
                                desc: t('support_page.categories.renewal.desc'),
                                color: 'green',
                                link: '/services'
                            },
                        ].map((cat, i) => {
                            const Icon = cat.icon;
                            return (
                                <Link key={i} href={cat.link} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all">
                                    <div className={`w-12 h-12 bg-${cat.color}-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`h-6 w-6 text-${cat.color}-600`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{cat.desc}</p>
                                    <span className="text-primary text-sm font-bold flex items-center gap-1">
                                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Lead Magnet: Escalation Roadmap */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <EscalationRoadmap />
                </div>
            </section>

            {/* How to Get Help - Step Process */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('support_page.process_title')}</h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                {t('support_page.process_desc')}
                            </p>
                            <div className="space-y-8">
                                {[
                                    {
                                        step: '1',
                                        title: t('support_page.steps.describe.title'),
                                        desc: t('support_page.steps.describe.desc'),
                                        detail: t('support_page.steps.describe.detail')
                                    },
                                    {
                                        step: '2',
                                        title: t('support_page.steps.assessment.title'),
                                        desc: t('support_page.steps.assessment.desc'),
                                        detail: t('support_page.steps.assessment.detail')
                                    },
                                    {
                                        step: '3',
                                        title: t('support_page.steps.execution.title'),
                                        desc: t('support_page.steps.execution.desc'),
                                        detail: t('support_page.steps.execution.detail')
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">{item.step}</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed mb-2">{item.desc}</p>
                                            <span className="text-xs text-primary font-bold bg-primary/5 px-3 py-1 rounded-full">{item.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Support Form */}
                        <div className="lg:w-[420px]">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('support_page.form_title')}</h3>
                                    <p className="text-sm text-slate-500 mb-6">{t('support_page.form_subtitle')}</p>
                                    <QuoteForm insuranceType="support_request" />
                                </div>
                                <div className="bg-slate-900 text-white rounded-2xl p-6">
                                    <h4 className="font-bold text-lg mb-3">{t('support_page.talk_title')}</h4>
                                    <p className="text-slate-400 text-sm mb-4">{t('support_page.talk_subtitle')}</p>
                                    <div className="space-y-3">
                                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-12" asChild>
                                            <a href={`tel:${contactConfig.phoneFull}`}>
                                                <Phone className="mr-2 h-5 w-5" />
                                                Call +91 99866 34506
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="w-full h-12 text-white border-white/20 hover:bg-white/10" asChild>
                                            <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                                <MessageCircle className="mr-2 h-5 w-5" />
                                                {t('support_page.whatsapp_us')}
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Tool: Claim Stress-Test */}
            <section id="stress-test-container" className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('lead_magnets.claim_stress_test.title')}</h2>
                        <p className="text-slate-600 text-lg">{t('lead_magnets.claim_stress_test.description')}</p>
                    </div>
                    <ClaimStressTest />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('support_page.faq_title')}</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: t('support_page.faqs.stuck.q'),
                                a: t('support_page.faqs.stuck.a')
                            },
                            {
                                q: t('support_page.faqs.old.q'),
                                a: t('support_page.faqs.old.a')
                            },
                            {
                                q: t('support_page.faqs.how_to.q'),
                                a: t('support_page.faqs.how_to.a')
                            },
                            {
                                q: t('support_page.faqs.docs.q'),
                                a: t('support_page.faqs.docs.a')
                            },
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Value Hook: Claim Stress-Test */}
            <section className="py-20 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center"></div>
                <div className="container px-4 mx-auto relative z-10">
                    <LeadMagnetCTA 
                        title={t('lead_magnets.claim_stress_test.title')}
                        subtitle={t('lead_magnets.claim_stress_test.subtitle')}
                        description={t('lead_magnets.claim_stress_test.description')}
                        ctaText={t('lead_magnets.claim_stress_test.cta')}
                        icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                        scrollTargetId="stress-test-container"
                        href="#stress-test-modal"
                    />
                </div>
            </section>

            {/* Helpful Resources */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('support_page.resources_title')}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: t('support_page.resource_list.rejection_guide.title'), desc: t('support_page.resource_list.rejection_guide.desc'), href: '/resources/guides/claim-rejection-appeal' },
                            { title: t('support_page.resource_list.revival_guide.title'), desc: t('support_page.resource_list.revival_guide.desc'), href: '/resources/guides/lapsed-policy-revival' },
                            { title: t('support_page.resource_list.irdai_guide.title'), desc: t('support_page.resource_list.irdai_guide.desc'), href: '/resources/guides/irdai-complaint-portal-guide' },
                            { title: t('support_page.resource_list.death_claim_guide.title'), desc: t('support_page.resource_list.death_claim_guide.desc'), href: '/resources/guides/death-claim-settlement' },
                            { title: t('support_page.resource_list.cashless_guide.title'), desc: t('support_page.resource_list.cashless_guide.desc'), href: '/resources/guides/cashless-hospitalization-guide' },
                            { title: t('support_page.resource_list.lost_lic_guide.title'), desc: t('support_page.resource_list.lost_lic_guide.desc'), href: '/resources/guides/lapsed-policy-revival' },
                        ].map((resource, i) => (
                            <Link key={i} href={resource.href} className="group p-5 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{resource.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{resource.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild size="lg" variant="outline" className="rounded-xl border-primary/20 hover:border-primary/50 text-primary hover:bg-primary/5 group">
                            <Link href="/resources">
                                {t('support_page.explore_library')}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
