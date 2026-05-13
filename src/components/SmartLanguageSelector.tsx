'use client';

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
import { Globe } from 'lucide-react';

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
    // Hindi Belt
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

// Language Code to Display Name Mapping (for UI)
const LANG_DISPLAY_NAMES: Record<string, string> = {
    'mr': 'Marathi (मराठी)',
    'kn': 'Kannada (ಕನ್ನಡ)',
    'ta': 'Tamil (தமிழ்)',
    'te': 'Telugu (తెలుగు)',
    'bn': 'Bengali (বাংলা)',
    'gu': 'Gujarati (ગુજરાતી)',
    'ml': 'Malayalam (മലയാളം)',
    'pa': 'Punjabi (ਪੰਜਾਬੀ)',
    'hi': 'Hindi (हिंदी)',
    'en': 'English',
};

const SmartLanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [detectedRegion, setDetectedRegion] = useState('');
    const [suggestedLang, setSuggestedLang] = useState('');

    useEffect(() => {
        const checkAndPromptLanguage = async () => {
            // 1. Check if already prompted or manually set
            const hasPrompted = localStorage.getItem('language_prompt_shown');
            const manualLang = localStorage.getItem('i18nextLng'); // LanguageDetector sets this
            if (hasPrompted || manualLang === i18n.language) return;

            try {
                // 2. Fetch Location from our Internal API
                const response = await fetch('/api/location');
                if (!response.ok) throw new Error('Location API failed');

                const data = await response.json();
                const { region, country_code, detected_lang } = data;

                // 2.5 Refinement: Only prompt if in India
                if (country_code !== 'IN') {
                    localStorage.setItem('language_prompt_shown', 'true');
                    return;
                }

                // 3. Prompt if we have a detected language AND it's different from current
                if (detected_lang && detected_lang !== i18n.language) {
                    setDetectedRegion(region || 'your region');
                    setSuggestedLang(detected_lang);
                    setIsOpen(true);
                } else {
                    localStorage.setItem('language_prompt_shown', 'true');
                }

            } catch (error) {
                console.error('Smart Language Detection failed:', error);
            }
        };

        checkAndPromptLanguage();
    }, [i18n.language]);

    const handleConfirm = () => {
        if (suggestedLang) {
            i18n.changeLanguage(suggestedLang);
            
            // Set NEXT_LOCALE cookie for server-side detection persistence
            if (typeof document !== 'undefined') {
                document.cookie = `NEXT_LOCALE=${suggestedLang}; path=/; max-age=31536000`; // 1 year
            }
        }
        localStorage.setItem('language_prompt_shown', 'true');
        setIsOpen(false);
    };

    const handleDismiss = () => {
        localStorage.setItem('language_prompt_shown', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                // Ensure localStorage is set no matter how the dialog is dismissed
                localStorage.setItem('language_prompt_shown', 'true');
                setIsOpen(false);
            }
        }}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-accent" />
                        <DialogTitle>{t('language_prompt_title', 'Welcome / सुस्वागत')}</DialogTitle>
                    </div>
                    <DialogDescription className="pt-2">
                        {t('language_prompt_description', {
                            region: detectedRegion,
                            language: LANG_DISPLAY_NAMES[suggestedLang] || suggestedLang
                        })}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Button variant="outline" onClick={handleDismiss} className="w-full sm:w-auto order-2 sm:order-1">
                        {t('language_prompt_dismiss', 'Keep English')}
                    </Button>
                    <Button onClick={handleConfirm} className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 order-1 sm:order-2">
                        {t('language_prompt_confirm', { language: LANG_DISPLAY_NAMES[suggestedLang] || suggestedLang })}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SmartLanguageSelector;
