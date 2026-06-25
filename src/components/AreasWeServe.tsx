import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const TOP_CITIES = [
    { city: "Bangalore", state: "karnataka", slug: "/locations/karnataka/bangalore" },
    { city: "Mumbai", state: "maharashtra", slug: "/locations/maharashtra/mumbai" },
    { city: "Delhi", state: "delhi", slug: "/locations/delhi/delhi" },
    { city: "Chennai", state: "tamil-nadu", slug: "/locations/tamil-nadu/chennai" },
    { city: "Hyderabad", state: "telangana", slug: "/locations/telangana/hyderabad" },
    { city: "Pune", state: "maharashtra", slug: "/locations/maharashtra/pune" },
    { city: "Kolkata", state: "west-bengal", slug: "/locations/west-bengal/kolkata" },
    { city: "Jaipur", state: "rajasthan", slug: "/locations/rajasthan/jaipur" },
    { city: "Ahmedabad", state: "gujarat", slug: "/locations/gujarat/ahmedabad" },
    { city: "Lucknow", state: "uttar-pradesh", slug: "/locations/uttar-pradesh/lucknow" },
    { city: "Kochi", state: "kerala", slug: "/locations/kerala/kochi" },
    { city: "Indore", state: "madhya-pradesh", slug: "/locations/madhya-pradesh/indore" },
];

export default function AreasWeServe() {
    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("areas_we_serve")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">{t("serving_across_india")}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {TOP_CITIES.map((c, i) => (
                        <Link
                            key={i}
                            href={c.slug}
                            className="flex items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700 group"
                        >
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{c.city}</span>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                        {t("view_all_locations")} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
