"use client";

import { useState, useEffect } from 'react';
import { cityData } from '@/data/cityData';
import { services, serviceLabels } from '@/data/services';
import Link from 'next/link';

// Helper to get deterministic subset based on a seed or just fixed indices
function getDeterministicSubset<T>(array: T[], count: number, offset: number = 0): T[] {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
        result.push(array[(offset + i) % array.length]);
    }
    return result;
}

export default function DynamicKeywordLinks() {
    const locations = Object.keys(cityData);

    // Using deterministic selection so search engines see consistent links
    const featuredCities = getDeterministicSubset(locations, 8, 0);
    const featuredServices = getDeterministicSubset(services, 8, 2);

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
                        {featuredCities.map(city => (
                            <Link
                                key={city}
                                href={`/locations/${city}`}
                                className="text-gray-600 hover:text-primary hover:underline transition-colors"
                            >
                                Insurance Advisors in {cityData[city]?.name || city}
                            </Link>
                        ))}
                    </div>

                    {/* Service Links */}
                    <div className="flex flex-col gap-2">
                        <span className="font-medium text-gray-700">Services</span>
                        {featuredServices.slice(0, 4).map(service => (
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
                            {featuredServices.slice(4, 8).map((service, index) => {
                                const city = featuredCities[index] || locations[0];
                                return (
                                    <Link
                                        key={`${service}-${city}`}
                                        href={`/locations/${cityData[city]?.slug || city}/${service}`}
                                        className="text-gray-600 hover:text-primary hover:underline transition-colors block"
                                    >
                                        {serviceLabels[service] || service} in {cityData[city]?.name || city}
                                    </Link>
                                );
                            })}
                            <Link key="rejected-claim" href="/resources/faq/how-can-i-appeal-if-my-insurance-claim-is-rejected" className="text-gray-600 hover:text-primary hover:underline transition-colors block">
                                Rejected Claim Appeal Process
                            </Link>
                            <Link key="lic-revival" href="/resources/faq/how-to-revive-a-lapsed-lic-policy-online" className="text-gray-600 hover:text-primary hover:underline transition-colors block">
                                Lapsed LIC Policy Revival
                            </Link>
                            <Link key="senior-health" href="/resources/faq/is-there-any-specific-health-insurance-for-senior-citizens" className="text-gray-600 hover:text-primary hover:underline transition-colors block">
                                Senior Citizen Health Plans
                            </Link>
                            <Link key="cashless-process" href="/resources/faq/can-i-get-help-with-cashless-hospitalization-process" className="text-gray-600 hover:text-primary hover:underline transition-colors block">
                                Cashless Hospitalization Help
                            </Link>
                            <Link key="claim-docs" href="/resources/faq/what-docs-for-death-claim" className="text-gray-600 hover:text-primary hover:underline transition-colors block">
                                Death Claim Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
