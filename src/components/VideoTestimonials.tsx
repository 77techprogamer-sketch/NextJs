"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Star, Play } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Prashanth S",
        location: "Bangalore",
        rating: 5,
        text: "Best LIC consultant. Highly recommended. In-depth knowledge of LIC policies.",
        videoId: "dQw4w9WgXcQ",
    },
    {
        name: "Meera Nair",
        location: "Kochi",
        rating: 5,
        text: "My LIC death claim was stuck for over a year. Insurance Support resolved it in 3 weeks.",
        videoId: "dQw4w9WgXcQ",
    },
    {
        name: "Ravi Kumar",
        location: "Chennai",
        rating: 5,
        text: "Doorstep service is a game changer. They handled my entire policy revival without me visiting any office.",
        videoId: "dQw4w9WgXcQ",
    },
];

export default function VideoTestimonials() {
    const { t } = useTranslation();
    return (
        <section className="py-16 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("video_testimonials")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">{t("watch_testimonials")}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                            <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                        <Play className="w-8 h-8 text-primary ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-bold">{testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <div className="font-medium">{testimonial.name}</div>
                                        <div className="text-sm text-slate-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
