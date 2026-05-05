import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import blogs from '@/data/blogs.json';
import { Calendar, ChevronLeft, Share2, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        return {
            title: 'Post Not Found | Insurance Support Insights',
        };
    }

    return {
        title: `${post.title} | Insurance Support Insights`,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
            publishedTime: post.date,
            authors: ['Insurance Support Expert'],
        },
    };
}

// Reuse the sanitizer logic from before if we want, or just raw since it's built-time
const sanitizeHtml = (html: string): string => {
    // Basic structural cleanup if needed; 
    // Since this is static generation from our own verified blogspot, we can trust it mostly.
    // Removing some blogger specific weird elements if they exist.
    return html;
};

export default function BlogPostPage({ params }: BlogPostProps) {
    const post = blogs.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: 'Insurance Support Online',
            url: 'https://insurancesupport.online',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Insurance Support Online',
            logo: {
                '@type': 'ImageObject',
                url: 'https://insurancesupport.online/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://insurancesupport.online/blog/${post.slug}`,
        },
    };

    // Find related articles (same category or recent)
    const relatedPosts = blogs
        .filter(p => p.slug !== post.slug && (post.categories?.some(c => p.categories?.includes(c))))
        .slice(0, 3);
    
    // Fallback to recent if no related
    const fallbackPosts = relatedPosts.length > 0 
        ? relatedPosts 
        : blogs.filter(p => p.slug !== post.slug).slice(0, 3);

    return (
        <React.Fragment>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-black dark:hover:text-white transition-colors mb-8 font-medium">
                        <ChevronLeft className="w-4 h-4" /> Back to all articles
                    </Link>

                    <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden mb-16">
                        <header className="p-8 md:p-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.categories.map((cat, i) => (
                                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                            <Tag className="w-3 h-3" /> {cat}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-between gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                <div className="flex items-center gap-2 font-medium">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>
                                <Button variant="ghost" size="sm" className="gap-2 h-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hidden sm:flex">
                                    <Share2 className="w-4 h-4" /> Share
                                </Button>
                            </div>
                        </header>

                        <div className="p-8 md:p-12">
                            <div 
                                className="prose prose-lg dark:prose-invert prose-indigo max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
                            />
                        </div>
                    </article>

                    {/* Related Articles Section */}
                    {fallbackPosts.length > 0 && (
                        <div className="border-t border-slate-200 dark:border-slate-800 pt-16 mt-8">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Related Articles
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {fallbackPosts.map((related) => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group block h-full">
                                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                                            <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-3 leading-snug">
                                                {related.title}
                                            </h4>
                                            <div className="mt-auto pt-4 flex justify-between items-center text-sm font-medium">
                                                <span className="text-slate-500 dark:text-slate-400">
                                                    {new Date(related.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Read <ArrowRight className="w-4 h-4" />
                                                </span>
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
