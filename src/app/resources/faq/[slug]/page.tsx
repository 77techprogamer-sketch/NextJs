import React from 'react';
import { notFound } from 'next/navigation';
import { getFaqBySlug, faqData } from '@/data/faqData';
import { Metadata } from 'next';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { TranslateWrapper } from '@/components/TranslateWrapper';

// Mock translation for server metadata (since we can't easily access client i18n here)
// In a production app, you might read the translation JSON file directly from the filesystem.
const t_server_fallback = (key: string) => {
    // Return a human-readable fallback derived from the key if possible, or just the key
    // For now, returning the key is the safest "no-crash" option, though suboptimal for SEO title if not replaced.
    // A better approach for the future: Load common.json/translation.json here.
    return key;
};

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const faq = getFaqBySlug(params.slug);
    if (!faq) return { title: 'FAQ Not Found' };

    return {
        title: `${faq.slug.replace(/-/g, ' ')} | Insurance Support`, // Fallback title
        description: `Expert answer to: ${faq.slug.replace(/-/g, ' ')}`,
        alternates: {
            canonical: `https://insurancesupport.online/resources/faq/${params.slug}`,
        }
    }
}

export async function generateStaticParams() {
    return faqData.map((faq) => ({
        slug: faq.slug,
    }));
}

export default function FAQPage({ params }: Props) {
    const faq = getFaqBySlug(params.slug);

    if (!faq) {
        notFound();
    }

    // JSON-LD Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [{
            '@type': 'Question',
            'name': faq.questionKey, // Ideally translated
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answerKey // Ideally translated
            }
        }]
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8 pt-24">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="capitalize">{faq.slug.replace(/-/g, ' ')}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                                {faq.category} Insurance
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                <TranslateWrapper k={faq.questionKey} />
                            </h1>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                                <TranslateWrapper k={faq.answerKey} />
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                Still have questions about {faq.category} Insurance?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Our experts can provide personalized guidance tailored to your specific situation.
                            </p>
                            <Button asChild size="lg" className="rounded-xl font-bold">
                                <Link href="/contact">Talk to an Expert</Link>
                            </Button>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24">
                            <h3 className="font-bold text-lg mb-4">Related Questions</h3>
                            <ul className="space-y-3">
                                {faqData.filter(f => f.category === faq.category && f.slug !== faq.slug).map(f => (
                                    <li key={f.slug}>
                                        <Link href={`/resources/faq/${f.slug}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                                            <span>
                                                <TranslateWrapper k={f.questionKey} />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
