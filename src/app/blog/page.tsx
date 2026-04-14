import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { fetchBlogPosts } from '@/utils/blogFetcher';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Expert Insurance Blog | Claims, LIC, & Health Advice',
    description: 'Practical guides and expert insights on insurance claim recovery, LIC policy revival, and health insurance disputes in India.',
};

export default async function BlogListingPage() {
    // For now, we fetch the latest post. 
    // In a full implementation, we would fetch a list.
    const latestPost = await fetchBlogPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Insurance Support Insights</h1>
                    <p className="text-xl text-muted-foreground">Expert guidance to help you navigate the complex world of insurance.</p>
                </header>

                <div className="grid gap-8">
                    {latestPost ? (
                        <Card className="overflow-hidden hover:shadow-xl transition-shadow border-primary/10">
                            <div className="md:flex">
                                <div className="p-8 flex-1">
                                    <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                                        <FileText className="w-4 h-4" />
                                        Featured Article
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                                        <a href={latestPost.url} target="_blank" rel="noopener noreferrer">
                                            {latestPost.title}
                                        </a>
                                    </h2>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(latestPost.date).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </div>
                                    <div 
                                        className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: latestPost.summary }}
                                    />
                                    <Button asChild size="lg">
                                        <a href={latestPost.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            Read Full Article <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border">
                            <p className="text-muted-foreground">No articles found. Please check back later.</p>
                        </div>
                    )}
                </div>

                <aside className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-4">Need personalized advice?</h3>
                    <p className="text-slate-600 mb-6">Our experts are available to help you with claim rejections, policy updates, and more.</p>
                    <div className="flex gap-4">
                        <Button asChild variant="outline">
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/">Get a Quote</Link>
                        </Button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
