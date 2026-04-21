import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const LocationPromptModal = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [detectedCity, setDetectedCity] = useState('');

    useEffect(() => {
        const checkAndPromptLocation = async () => {
            // Check if user has already made a choice to prevent spamming
            const hasPrompted = localStorage.getItem('location_prompt_shown');
            if (hasPrompted) return;

            try {
                // Fetch IP Geolocation
                const response = await fetch('https://ipapi.co/json/');
                if (!response.ok) throw new Error('IP API failed');

                const data = await response.json();
                const { city, country_code } = data; 

                // Only prompt if they are in India and we successfully extracted a city
                if (country_code !== 'IN' || !city) {
                    return;
                }

                setDetectedCity(city);
                setIsOpen(true);
            } catch (error) {
                console.error('Location Detection failed:', error);
                // Fail silently without blocking user
            }
        };

        checkAndPromptLocation();
    }, []);

    const handleConfirm = () => {
        if (detectedCity) {
            // Slugify the city name (e.g., "New Delhi" -> "new-delhi")
            const slug = detectedCity.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            
            // Explicitly use window.location.href instead of React Router navigate. 
            // This forces a hard browser redirect so Vercel can route the request 
            // to the Next.js location pages, bypassing the Vite SPA shell.
            window.location.href = `/locations/${slug}`;
        }
        localStorage.setItem('location_prompt_shown', 'true');
        setIsOpen(false);
    };

    const handleDismiss = () => {
        localStorage.setItem('location_prompt_shown', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                // Ensure localStorage is set no matter how the dialog is dismissed
                localStorage.setItem('location_prompt_shown', 'true');
                setIsOpen(false);
            }
        }}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-accent" />
                        <DialogTitle>{t('location_prompt_title', 'Local Services Available')}</DialogTitle>
                    </div>
                    <DialogDescription className="pt-2">
                        {t('location_prompt_description', `We detected you are visiting from ${detectedCity}. Would you like to view insurance services specific to your city?`)}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Button variant="outline" onClick={handleDismiss} className="w-full sm:w-auto order-2 sm:order-1">
                        {t('location_prompt_dismiss', 'No, stay here')}
                    </Button>
                    <Button onClick={handleConfirm} className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 order-1 sm:order-2">
                        {t('location_prompt_confirm', `View ${detectedCity} Services`)}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LocationPromptModal;
