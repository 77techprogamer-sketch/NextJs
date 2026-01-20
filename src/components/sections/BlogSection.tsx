"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { fetchBlogPosts } from '@/utils/blogFetcher';
import { cn } from '@/lib/utils';

const BlogSection = () => {
    const { t, i18n } = useTranslation();
    const [latestBlogPost, setLatestBlogPost] = useState<{ title: string; url: string; summary: string } | null>(null);
    const [loadingBlog, setLoadingBlog] = useState(true);
    const [isBlogExpanded, setIsBlogExpanded] = useState(false);

    useEffect(() => {
        const getLatestBlogPost = async () => {
            setLoadingBlog(true);
            const post = await fetchBlogPosts(undefined, i18n.language);
            setLatestBlogPost(post);
            setLoadingBlog(false);
        };
        getLatestBlogPost();
    }, [t, i18n.language]);

    return (
        <section id="blog" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-8 sm:mb-12 text-center" suppressHydrationWarning>
                    {t("latest_blog_post")}
                </h2>

                {loadingBlog ? (
                    <Card className="max-w-2xl mx-auto p-6 min-h-[280px]">
                        <div className="space-y-4">
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                            <Skeleton className="h-10 w-32 mt-6" />
                        </div>
                    </Card>
                ) : latestBlogPost ? (
                    <Card className="max-w-2xl mx-auto overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-[280px]">
                        <CardHeader className="bg-primary/5 dark:bg-primary/10">
                            <CardTitle className="text-xl sm:text-2xl font-bold line-clamp-2">
                                {latestBlogPost?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className={cn(
                                "text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base transition-all duration-300",
                                !isBlogExpanded && "line-clamp-4"
                            )}>
                                {latestBlogPost?.summary}
                            </div>

                            <button
                                onClick={() => setIsBlogExpanded(!isBlogExpanded)}
                                className="text-primary hover:text-accent font-medium text-sm flex items-center gap-1 mb-6 focus:outline-none transition-colors"
                            >
                                {isBlogExpanded ? (
                                    <>
                                        {t("show_less", "Show Less")} <ChevronUp className="h-4 w-4" />
                                    </>
                                ) : (
                                    <>
                                        {t("read_more", "Read More")} <ChevronDown className="h-4 w-4" />
                                    </>
                                )}
                            </button>

                            <Button
                                asChild
                                className="w-full sm:w-auto hover:scale-105 transition-transform"
                            >
                                <a href={latestBlogPost?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <span suppressHydrationWarning>{t("read_full_article")}</span>
                                    <FileText className="h-4 w-4" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                        {t("no_blog_posts_available")}
                    </p>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
