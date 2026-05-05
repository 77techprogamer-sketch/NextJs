import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { PincodeData } from '@/lib/supabase-server';

interface Props {
    city: string;
    offices: PincodeData[];
}

export default function LocalCoverageSection({ city, offices }: Props) {
    if (!offices || offices.length === 0) return null;

    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center mb-10 text-center">
                    <div className="inline-flex items-center px-4 py-2 mb-4 space-x-2 text-sm font-medium transition-colors bg-blue-100/80 rounded-full text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        <MapPin className="w-4 h-4" />
                        <span>Hyper-Local Support in {city}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                        Serving Your Neighborhood
                    </h2>
                    <p className="max-w-2xl mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Skip the branch queues. Our local advisors provide guaranteed doorstep service directly to the following postal zones across {city}.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {offices.map((office, idx) => (
                        <div 
                            key={`${office.pincode}-${idx}`}
                            className="relative flex items-center p-4 overflow-hidden transition-all duration-300 border bg-white/60 backdrop-blur-md border-slate-200/80 dark:bg-slate-800/40 dark:border-slate-700/50 rounded-2xl group hover:shadow-xl hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-900/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 transition-colors rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md">
                                <Navigation className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col min-w-0 pr-2">
                                <span className="font-bold text-slate-900 dark:text-slate-100 truncate" title={office.post_office}>
                                    {office.post_office}
                                </span>
                                <span className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                                    {office.pincode}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
