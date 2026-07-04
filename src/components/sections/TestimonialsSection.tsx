'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, ShieldCheck } from 'lucide-react';

const reviews = [
    {
        name: 'Meera Nair',
        city: 'Bangalore',
        service: 'LIC Death Claim Recovery',
        rating: 5,
        text: 'My LIC death claim was stuck for over a year. Insurance Support resolved it in 3 weeks. Cannot thank them enough.',
        date: 'Oct 2025'
    },
    {
        name: 'Ravi Kumar',
        city: 'Mumbai',
        service: 'Policy Revival',
        rating: 5,
        text: 'Doorstep service is a game changer. They handled my entire policy revival without me visiting any office.',
        date: 'Jan 2026'
    },
    {
        name: 'Sneha Patil',
        city: 'Pune',
        service: 'Maturity Claim Settlement',
        rating: 5,
        text: 'Got my maturity claim settled after my policy had lapsed. Professional and transparent throughout.',
        date: 'Sep 2025'
    },
    {
        name: 'Arun Sharma',
        city: 'Delhi',
        service: 'Health Insurance Claim',
        rating: 4,
        text: 'Very knowledgeable team. Helped me understand my health insurance cover and get a rejected claim reconsidered.',
        date: 'Aug 2025'
    },
    {
        name: 'Priya Menon',
        city: 'Chennai',
        service: 'Lost Policy Bond Recovery',
        rating: 5,
        text: 'Found my lost LIC policy bond with their help. Never thought it was possible. Truly excellent service.',
        date: 'Feb 2026'
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        4.2 Star Rated on Google - 23+ Reviews
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Real Stories from Real Clients
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Every claim we win, every policy we revive, is a family we help. See what they say.
                    </p>
                </div>

                {/* Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.slice(0, 5).map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < review.rating
                                                ? 'fill-amber-400 text-amber-400'
                                                : 'text-gray-200'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-700 mb-4 text-sm leading-relaxed italic">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            {/* Service Badge */}
                            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full w-fit mb-3">
                                <ShieldCheck className="w-3 h-3" />
                                <span>{review.service}</span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                                    <p className="text-xs text-slate-400">{review.city} - {review.date}</p>
                                </div>
                                <Award className="w-5 h-5 text-amber-400" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <p className="text-slate-500 text-sm mb-2">
                        Your experience matters. Help others make informed decisions.
                    </p>
                    <a
                        href="https://g.page/r/CRDgJanrKjRhEBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
                    >
                        <Star className="w-5 h-5 fill-white" />
                        Write Your Review on Google
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;