"use client";

import React from 'react';
import Link from 'next/link';
import { cityData } from '@/data/cityData';
import { MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';


const ServiceAreasSection = () => {
    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                        <MapPin className="h-6 w-6 text-primary" />
                        Insurance Support Across South India
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We provide dedicated doorstep assistance, claims support, and policy renewals in the following major cities.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.values(cityData).map((city, index) => (
                        <Link
                            key={city.slug}
                            href={`/locations/${city.slug}`}
                            className="block group"
                        >
                            <ScrollReveal animation="fade-up" delay={index * 0.05} width="100%">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary">
                                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                                        Insurance Support {city.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        LIC & General Insurance Agent
                                    </p>
                                </div>
                            </ScrollReveal>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreasSection;
