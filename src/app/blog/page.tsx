import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import blogs from '@/data/blogs.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Expert Insurance Blog | Claims, LIC, & Health Advice',
    description: 'Practical guides and expert insights on insurance claim recovery, LIC policy revival, and health insurance disputes in India.',
};

export default function BlogListingPage() {
    const featuredPost = blogs.length > 0 ? blogs[0] : null;
    const remainingPosts = blogs.length > 1 ? blogs.slice(1) : [];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">Insurance Support Insights</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Expert guidance to help you navigate the complex world of insurance in India.</p>
                </header>

                <div className="space-y-12">
                    {/* Featured Post */}
                    {featuredPost ? (
                        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                            <div className="md:flex">
                                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-primary text-sm font-bold mb-6 uppercase tracking-widest">
                                        <FileText className="w-4 h-4" />
                                        Featured Article
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-primary transition-colors leading-tight">
                                        <Link href={`/blog/${featuredPost.slug}`}>
                                            {featuredPost.title}
                                        </Link>
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-6">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(featuredPost.date).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </div>
                                        {featuredPost.categories && featuredPost.categories.length > 0 && (
                                            <div className="flex items-center gap-1.5 text-primary/80">
                                                <Tag className="w-4 h-4" />
                                                <span>{featuredPost.categories[0]}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed line-clamp-3">
                                        {featuredPost.summary}
                                    </p>
                                    <div>
                                        <Button asChild size="lg" className="rounded-xl font-semibold shadow-lg hover:shadow-primary/25">
                                            <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                                                Read Full Article <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed">
                            <p className="text-muted-foreground text-lg">No articles found. Please check back later.</p>
                        </div>
                    )}

                    {/* Remaining Posts Grid */}
                    {remainingPosts.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Latest Articles
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {remainingPosts.map((post) => (
                                    <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm flex flex-col">
                                        <CardContent className="p-6 flex flex-col flex-1">
                                            {post.categories && post.categories.length > 0 && (
                                                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                                                    {post.categories[0]}
                                                </div>
                                            )}
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-3 leading-snug">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                                                {post.summary}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.date).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Read <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <aside className="mt-20 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl border border-blue-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">Need personalized advice?</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">Our experts are available to help you with claim rejections, policy updates, and customized insurance planning.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild variant="outline" size="lg" className="rounded-xl border-2 border-primary/20 hover:border-primary/50 text-slate-700 dark:text-slate-200">
                                <Link href="/contact">Contact Support</Link>
                            </Button>
                            <Button asChild size="lg" className="rounded-xl shadow-lg hover:shadow-primary/25">
                                <Link href="/">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
