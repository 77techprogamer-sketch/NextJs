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
            // 1. Check if already prompted
            const hasPrompted = localStorage.getItem('language_prompt_shown');
            if (hasPrompted) return;

            try {
                // 2. Fetch IP Geolocation
                const response = await fetch('https://ipapi.co/json/');
                if (!response.ok) throw new Error('IP API failed');

                const data = await response.json();
                const { region, country_code } = data; // e.g., "Maharashtra", "IN"

                // 2.5 Refinement: If outside India, do not prompt (stick to English default)
                if (country_code !== 'IN') {
                    // Optional: If we want to strictly FORCE English even if they are already on another lang, do it here.
                    // For now, we just ensure we don't prompt them to switch to a regional lang.
                    return;
                }

                if (!region) return;

                // 3. Map Region to Language
                const langCode = REGION_TO_LANG[region];

                // 4. Prompt if we have a mapping AND it's different from current language
                if (langCode && langCode !== i18n.language) {
                    setDetectedRegion(region);
                    setSuggestedLang(langCode);
                    setIsOpen(true);
                } else {
                    // Determine that we checked, even if no change needed, to avoid re-checking every reload
                    // Optionally we can choose NOT to set this if we want to retry until a mapped region is found
                    // But usually better to just set it to avoid API spam.
                    localStorage.setItem('language_prompt_shown', 'true');
                }

            } catch (error) {
                console.error('Smart Language Detection failed:', error);
                // Fail silently, don't block user
            }
        };

        checkAndPromptLanguage();
    }, [i18n.language]);

    const handleConfirm = () => {
        if (suggestedLang) {
            i18n.changeLanguage(suggestedLang);
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
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
