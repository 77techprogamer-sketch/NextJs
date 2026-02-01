import { useState, useEffect } from 'react';

interface UserLocation {
    city: string | null;
    region: string | null;
    country_code: string | null;
    loading: boolean;
    error: string | null;
}

export const useUserLocation = () => {
    const [location, setLocation] = useState<UserLocation>({
        city: null,
        region: null,
        country_code: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchLocation = async () => {
            // Check if we already have the city in sessionStorage to avoid repeated API calls
            const cachedCity = sessionStorage.getItem('user_city');
            const cachedRegion = sessionStorage.getItem('user_region');
            const cachedCountry = sessionStorage.getItem('user_country');

            if (cachedCity) {
                setLocation({
                    city: cachedCity,
                    region: cachedRegion,
                    country_code: cachedCountry,
                    loading: false,
                    error: null
                });
                return;
            }

            try {
                // Primary API: Internal Proxy
                const response = await fetch('/api/location');
                if (!response.ok) throw new Error('Primary API failed');
                const data = await response.json();
                const city = data.city || 'Bangalore';
                const region = data.region || null;
                const country_code = data.country_code || 'IN';

                sessionStorage.setItem('user_city', city);
                if (region) sessionStorage.setItem('user_region', region);
                if (country_code) sessionStorage.setItem('user_country', country_code);

                setLocation({ city, region, country_code, loading: false, error: null });
            } catch (err) {
                console.warn('Primary IP geolocation failed, trying fallback within hook (should be handled by API)...', err);
                try {
                    // Fallback to ipwho.is if even our internal fallback fails (unlikely)
                    const response = await fetch('https://ipwho.is/');
                    if (!response.ok) throw new Error('Fallback API failed');
                    const data = await response.json();
                    const city = data.city || 'Bangalore';
                    const region = data.region || null;
                    const country_code = data.country_code || 'IN';

                    sessionStorage.setItem('user_city', city);
                    if (region) sessionStorage.setItem('user_region', region);
                    if (country_code) sessionStorage.setItem('user_country', country_code);

                    setLocation({ city, region, country_code, loading: false, error: null });
                } catch (fallbackErr) {
                    console.error('All IP geolocation APIs failed', fallbackErr);
                    setLocation({
                        city: 'Bangalore',
                        region: 'Karnataka',
                        country_code: 'IN',
                        loading: false,
                        error: 'Failed to fetch location'
                    });
                }
            }
        };

        fetchLocation();
    }, []);

    return location;
};
