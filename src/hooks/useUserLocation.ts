import { useState, useEffect } from 'react';

interface UserLocation {
    city: string | null;
    loading: boolean;
    error: string | null;
}

export const useUserLocation = () => {
    const [location, setLocation] = useState<UserLocation>({
        city: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchLocation = async () => {
            // Check if we already have the city in sessionStorage to avoid repeated API calls
            const cachedCity = sessionStorage.getItem('user_city');
            if (cachedCity) {
                setLocation({ city: cachedCity, loading: false, error: null });
                return;
            }

            try {
                // Primary API: ipapi.co
                const response = await fetch('https://ipapi.co/json/');
                if (!response.ok) throw new Error('Primary API failed');
                const data = await response.json();
                const city = data.city || 'Bangalore';

                sessionStorage.setItem('user_city', city);
                setLocation({ city, loading: false, error: null });
            } catch (err) {
                console.warn('Primary IP geolocation failed, trying fallback...', err);
                try {
                    // Fallback API: ipwho.is
                    const response = await fetch('https://ipwho.is/');
                    if (!response.ok) throw new Error('Fallback API failed');
                    const data = await response.json();
                    const city = data.city || 'Bangalore';

                    sessionStorage.setItem('user_city', city);
                    setLocation({ city, loading: false, error: null });
                } catch (fallbackErr) {
                    console.error('All IP geolocation APIs failed', fallbackErr);
                    setLocation({ city: 'Bangalore', loading: false, error: 'Failed to fetch location' });
                }
            }
        };

        fetchLocation();
    }, []);

    return location;
};
