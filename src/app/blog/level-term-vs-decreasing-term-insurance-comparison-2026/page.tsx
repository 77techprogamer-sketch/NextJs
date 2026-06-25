import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import blogs from '@/data/blogs.json';
import { Calendar, ChevronLeft, Share2, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getStaticTranslation } from '@/lib/i18n-server';
import ReactMarkdown from 'react-markdown';
import ShareButtons from '@/components/ShareButtons';
import BlogFAQ from '@/components/BlogFAQ';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const post = blogs.find((p) => p.slug === params.slug);
    if (!post) {
        return { title: 'Post Not Found | Insurance Support Insights' };
    }
    return {
        title: `${post.title} | Insurance Support Insights`,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
            publishedTime: post.date,
            authors: ['Hari Kotian'],
            images: [{
                url: `https://insurancesupport.online/api/og?title=${encodeURIComponent(post.title)}&category=Blog`,
                width: 1200, height: 630, alt: post.title,
            }],
        },
    };
}

const getServiceLink = (categories: string[] | undefined) => {
    if (!categories) return { url: '/services', label: 'Insurance Services' };
    const lowerCats = categories.map(c => c.toLowerCase());
    if (lowerCats.includes('health insurance')) return { url: '/services/health-insurance', label: 'Health Insurance Services' };
    if (lowerCats.includes('life insurance') || lowerCats.includes('lic')) return { url: '/services/life-insurance', label: 'Life Insurance Services' };
    if (lowerCats.includes('motor insurance')) return { url: '/services/motor-insurance', label: 'Motor Insurance Services' };
    if (lowerCats.includes('term insurance')) return { url: '/services/term-insurance', label: 'Term Insurance Services' };
    return { url: '/services', label: 'Insurance Services' };
};

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { t, lang } = getStaticTranslation();
    const post = blogs.find((p) => p.slug === params.slug);
    if (!post) { notFound(); }

    const shareUrl = "https://insurancesupport.online/blog/" + post.slug;
    const jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Person', name: 'Hari Kotian', url: 'https://insurancesupport.online/about' },
        publisher: { '@type': 'Organization', name: 'Insurance Support Online', logo: { '@type': 'ImageObject', url: 'https://insurancesupport.online/logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': shareUrl },
    };

    const relatedPosts = blogs.filter(p => p.slug !== post.slug && (post.categories?.some((c: string) => p.categories?.includes(c)))).slice(0, 3);
    const fallbackPosts = relatedPosts.length > 0 ? relatedPosts : blogs.filter(p => p.slug !== post.slug).slice(0, 3);
    const serviceLink = getServiceLink(post.categories);
    const contentWithCTA = `${post.content}\n\n---\n\n**Need expert assistance?** Explore our [${serviceLink.label}](${serviceLink.url}) for professional guidance, policy management, and claim support.`;

    return (
        <React.Fragment>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-black dark:hover:text-white transition-colors mb-8 font-medium">
                        <ChevronLeft className="w-4 h-4" /> {t('back_to_all_articles')}
                    </Link>
                    <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden mb-16">
                        <header className="p-8 md:p-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.categories.map((cat: string, i: number) => (
                                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                            <Tag className="w-3 h-3" /> {t(cat.toLowerCase().replace(/ /g, '_'))}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">{post.title}</h1>
                            <div className="flex flex-wrap items-center justify-between gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                <div className="flex items-center gap-2 font-medium">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-IN' : lang, { day: 'numeric', month: 'long', year: 'numeric' })}
                                    <span className="mx-2 text-slate-300 dark:text-slate-600">|</span>
                                    <Link href="/about" rel="author" className="hover:text-primary transition-colors">Hari Kotian</Link>
                                </div>
                                <Button variant="ghost" size="sm" className="gap-2 h-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hidden sm:flex">
                                    <Share2 className="w-4 h-4" /> {t('share')}
                                </Button>
                            </div>
                        </header>
                        <div className="p-8 md:p-12">
                            <div className="prose prose-lg dark:prose-invert prose-indigo max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline blog-content">
                                <ReactMarkdown>{contentWithCTA}</ReactMarkdown>
                            </div>
                            <ShareButtons title={post.title} url={shareUrl} />
                            {post.categories && post.categories.length > 0 && (<BlogFAQ categories={post.categories} />)}
                        </div>
                    </article>
                    {fallbackPosts.length > 0 && (
                        <div className="border-t border-slate-200 dark:border-slate-800 pt-16 mt-8">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><span className="w-8 h-1 bg-primary rounded-full"></span>{t('related_articles')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {fallbackPosts.map((related: any) => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group block h-full">
                                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                                            <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-3 leading-snug">{related.title}</h4>
                                            <div className="mt-auto pt-4 flex justify-between items-center text-sm font-medium">
                                                <span className="text-slate-500 dark:text-slate-400">{new Date(related.date).toLocaleDateString(lang === 'en' ? 'en-IN' : lang, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">{t('read')} <ArrowRight className="w-4 h-4" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}
