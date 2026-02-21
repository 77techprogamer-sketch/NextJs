import React from 'react';
import Link from 'next/link';
import { cityData } from '@/data/cityData';
import { services, serviceLabels } from '@/data/services';

interface CityLinksForServiceProps {
    serviceSlug: string;
    serviceTitle: string;
}

export const CityLinksForService: React.FC<CityLinksForServiceProps> = ({ serviceSlug, serviceTitle }) => {
    const locations = Object.keys(cityData);

    return (
        <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                Explore {serviceTitle} Support Across India
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                {locations.map((cityKey) => (
                    <Link
                        key={cityKey}
                        href={`/locations/${cityKey}/${serviceSlug}`}
                        className="text-slate-600 hover:text-primary hover:underline transition-colors py-1"
                    >
                        {serviceTitle} in {cityData[cityKey].name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

interface ServiceLinksForCityProps {
    citySlug: string;
    cityName: string;
}

export const ServiceLinksForCity: React.FC<ServiceLinksForCityProps> = ({ citySlug, cityName }) => {
    return (
        <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                Our Services in {cityName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((serviceSlug) => (
                    <Link
                        key={serviceSlug}
                        href={`/locations/${citySlug}/${serviceSlug}`}
                        className="group flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-primary/20 hover:shadow-md transition-all"
                    >
                        <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">
                            Best {serviceLabels[serviceSlug]} in {cityName}
                        </span>
                        <div className="h-6 w-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
