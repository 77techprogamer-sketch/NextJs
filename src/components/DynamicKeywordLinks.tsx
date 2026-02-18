"use client";

import { useState, useEffect } from 'react';
import { cityData } from '@/data/cityData';
import { services, serviceLabels } from '@/data/services';
import Link from 'next/link';

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export default function DynamicKeywordLinks() {
    const [mounted, setMounted] = useState(false);
    const [randomCities, setRandomCities] = useState<string[]>([]);
    const [randomServices, setRandomServices] = useState<string[]>([]);

    useEffect(() => {
        const locations = Object.keys(cityData);
        setRandomCities(shuffleArray(locations).slice(0, 8));
        setRandomServices(shuffleArray(services).slice(0, 8));
        setMounted(true);
    }, []);

    // Return null during SSR and initial client pass
    if (!mounted) return null;

    const locations = Object.keys(cityData);

    return (
        <section className="py-8 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                    Trending Searches via Insurance Support
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    {/* Location Links */}
                    <div className="flex flex-col gap-2">
                        <span className="font-medium text-gray-700">Popular Locations</span>
                        {randomCities.map(city => (
                            <Link
                                key={city}
                                href={`/locations/${city}`}
                                className="text-gray-600 hover:text-primary hover:underline transition-colors"
                            >
                                Insurance Agents in {cityData[city]?.name || city}
                            </Link>
                        ))}
                    </div>

                    {/* Service Links */}
                    <div className="flex flex-col gap-2">
                        <span className="font-medium text-gray-700">Services</span>
                        {randomServices.slice(0, 4).map(service => (
                            <Link
                                key={service}
                                href={`/services/${service}`}
                                className="text-gray-600 hover:text-primary hover:underline transition-colors"
                            >
                                {serviceLabels[service] || service.replace('-', ' ')}
                            </Link>
                        ))}
                    </div>

                    {/* Combo Links (Service + Location) */}
                    <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                        <span className="font-medium text-gray-700">Frequently Asked</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {randomServices.slice(4, 8).map((service, index) => {
                                const city = randomCities[index] || locations[0];
                                return (
                                    <Link
                                        key={`${service}-${city}`}
                                        href={`/services/${service}`} // Ideally this would be a specific landing page, but linking to service is safe
                                        className="text-gray-600 hover:text-primary hover:underline transition-colors block"
                                    >
                                        {serviceLabels[service] || service} in {cityData[city]?.name || city}
                                    </Link>
                                );
                            })}
                            <Link href="/contact" className="text-gray-600 hover:text-primary hover:underline transition-colors">
                                Lost Policy Document Help
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-primary hover:underline transition-colors">
                                LIC Policy Revival Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
