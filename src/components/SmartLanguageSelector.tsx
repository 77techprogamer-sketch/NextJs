"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserLocation } from '@/hooks/useUserLocation';
import { usePathname } from 'next/navigation';

// City to Language Code Mapping (Higher Priority)
const CITY_TO_LANG: Record<string, string> = {
    'Bangalore': 'kn',
    'Bengaluru': 'kn',
    'Mysore': 'kn',
    'Chennai': 'ta',
    'Coimbatore': 'ta',
    'Madurai': 'ta',
    'Hyderabad': 'te',
    'Visakhapatnam': 'te',
    'Vijayawada': 'te',
    'Mumbai': 'mr',
    'Pune': 'mr',
    'Nagpur': 'mr',
    'Nashik': 'mr',
    'Kolkata': 'bn',
    'Asansol': 'bn',
    'Delhi': 'hi',
    'New Delhi': 'hi',
    'Lucknow': 'hi',
    'Kanpur': 'hi',
    'Patna': 'hi',
    'Indore': 'hi',
    'Bhopal': 'hi',
    'Jaipur': 'hi',
    'Ahmedabad': 'gu',
    'Surat': 'gu',
    'Vadodara': 'gu',
    'Kochi': 'ml',
    'Thiruvananthapuram': 'ml',
    'Amritsar': 'pa',
    'Ludhiana': 'pa',
    'Chandigarh': 'hi',
};

// State to Language Code Mapping
const REGION_TO_LANG: Record<string, string> = {
    'Maharashtra': 'mr',
    'Karnataka': 'kn',
    'Tamil Nadu': 'ta',
    'Andhra Pradesh': 'te',
    'Telangana': 'te',
    'West Bengal': 'bn',
    'Gujarat': 'gu',
    'Kerala': 'ml',
    'Punjab': 'pa',
    'Odisha': 'bn',
    'Assam': 'bn',
    'Delhi': 'hi',
    'Uttar Pradesh': 'hi',
    'Madhya Pradesh': 'hi',
    'Haryana': 'hi',
    'Rajasthan': 'hi',
    'Bihar': 'hi',
    'Jharkhand': 'hi',
    'Chhattisgarh': 'hi',
    'Himachal Pradesh': 'hi',
    'Uttarakhand': 'hi',
};

const SmartLanguageSelector = () => {
    const { i18n } = useTranslation();
    const { city, region, country_code, loading: locationLoading } = useUserLocation();
    const pathname = usePathname();
    const [isProcessed, setIsProcessed] = useState(false);

    useEffect(() => {
        if (isProcessed) return;

        const setLanguage = () => {
            // Check cookie instead of sessionStorage so server knows if we've already handled this
            const cookies = document.cookie.split(';').reduce((acc: Record<string, string>, cookie) => {
                const [key, value] = cookie.trim().split('=');
                acc[key] = value;
                return acc;
            }, {});

            if (cookies['language_auto_set'] === 'true') {
                setIsProcessed(true);
                return;
            }

            // 1. URL-based detection
            if (pathname?.startsWith('/locations/')) {
                const urlCitySlug = pathname.split('/locations/')[1]?.split('/')[0];
                if (urlCitySlug) {
                    const normalizedUrlCity = urlCitySlug.replace(/-/g, ' ').toLowerCase().trim();
                    const cityMatch = Object.keys(CITY_TO_LANG).find(key =>
                        key.toLowerCase() === normalizedUrlCity ||
                        normalizedUrlCity.includes(key.toLowerCase())
                    );

                    if (cityMatch) {
                        const newLang = CITY_TO_LANG[cityMatch];
                        i18n.changeLanguage(newLang);
                        document.cookie = `language_auto_set=true; path=/; max-age=${86400 * 30}`;
                        document.cookie = `i18nextLng=${newLang}; path=/; max-age=${86400 * 30}`;
                        setIsProcessed(true);
                        return;
                    }
                }
            }

            // 2. IP Geolocation Fallback
            if (locationLoading) return;

            try {
                if (country_code && country_code !== 'IN') {
                    // English default for international
                    i18n.changeLanguage('en');
                    document.cookie = `language_auto_set=true; path=/; max-age=${86400 * 30}`;
                    document.cookie = `i18nextLng=en; path=/; max-age=${86400 * 30}`;
                    setIsProcessed(true);
                    return;
                }

                const normalizedCity = (city || '').toLowerCase().trim();
                const normalizedRegion = (region || '').toLowerCase().trim();

                let newLang = 'en'; // default
                
                const cityMatch = Object.keys(CITY_TO_LANG).find(key =>
                    key.toLowerCase() === normalizedCity ||
                    normalizedCity.includes(key.toLowerCase())
                );

                if (cityMatch) {
                    newLang = CITY_TO_LANG[cityMatch];
                } else {
                    const regionMatch = Object.keys(REGION_TO_LANG).find(key =>
                        key.toLowerCase() === normalizedRegion ||
                        normalizedRegion.includes(key.toLowerCase())
                    );
                    if (regionMatch) {
                        newLang = REGION_TO_LANG[regionMatch];
                    }
                }

                if (newLang !== 'en') {
                   i18n.changeLanguage(newLang);
                }
                
                document.cookie = `language_auto_set=true; path=/; max-age=${86400 * 30}`;
                document.cookie = `i18nextLng=${newLang}; path=/; max-age=${86400 * 30}`;
                setIsProcessed(true);

            } catch (error) {
                console.error('Language auto-detection failed:', error);
                setIsProcessed(true);
            }
        };

        setLanguage();
    }, [locationLoading, city, region, country_code, isProcessed, pathname, i18n]);

    // This component is now invisible
    return null;
};

export default SmartLanguageSelector;
