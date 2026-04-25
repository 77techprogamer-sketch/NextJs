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
import { cityData } from '@/data/cityData';
import { slugify } from '@/utils/slugify';

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

                // Slugify detected city
                const citySlug = slugify(city);
                
                // Find matching city in our data (checking by slug or name)
                const supportedCityKey = Object.keys(cityData).find(
                    key => cityData[key].slug === citySlug || slugify(cityData[key].name) === citySlug
                );

                // Only prompt if they are in India and the city is supported in our database
                if (country_code !== 'IN' || !city || !supportedCityKey) {
                    return;
                }

                setDetectedCity(supportedCityKey); // Store the key instead of raw city string
                setIsOpen(true);
            } catch (error) {
                console.error('Location Detection failed:', error);
                // Fail silently without blocking user
            }
        };

        checkAndPromptLocation();
    }, []);

    const handleConfirm = () => {
        if (detectedCity && cityData[detectedCity]) {
            const cityInfo = cityData[detectedCity];
            const stateSlug = slugify(cityInfo.state);
            
            // Redirect using the canonical 3-segment URL schema
            window.location.href = `/locations/${stateSlug}/${cityInfo.slug}`;
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
                        {t('location_prompt_description', `We detected you are visiting from ${detectedCity ? cityData[detectedCity]?.name : ''}. Would you like to view insurance services specific to your city?`)}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Button variant="outline" onClick={handleDismiss} className="w-full sm:w-auto order-2 sm:order-1">
                        {t('location_prompt_dismiss', 'No, stay here')}
                    </Button>
                    <Button onClick={handleConfirm} className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 order-1 sm:order-2">
                        {t('location_prompt_confirm', `View ${detectedCity ? cityData[detectedCity]?.name : ''} Services`)}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LocationPromptModal;
