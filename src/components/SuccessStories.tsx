"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, HelpCircle, MapPin } from 'lucide-react';
import { successStories } from '@/data/successStoriesData';

export const SuccessStories = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge variant="outline" className="mb-4 py-1 px-4 text-primary border-primary/20 bg-primary/5">
                        Our Results
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Expert <span className="text-primary">Claim Recovery</span> Stories
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        We don&apos;t just sell policies; we fight for your rights. Here are a few real cases where our 25+ years of expertise made the difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {successStories.map((story) => (
                        <Card key={story.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                            <CardHeader className="bg-white border-b border-slate-100 pb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                                        {story.category}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <MapPin className="h-3 w-3" />
                                        {story.location}
                                    </div>
                                </div>
                                <CardTitle className="text-xl md:text-2xl text-slate-900 leading-tight">
                                    {story.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">The Challenge</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{story.challenge}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <HelpCircle className="h-5 w-5 text-blue-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Our Strategy</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{story.solution}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-green-900 mb-1">The Result</h4>
                                            <p className="text-green-800 text-sm font-medium leading-relaxed">{story.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
