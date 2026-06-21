'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LANG_DISPLAY_NAMES: Record<string, string> = {
    'mr': 'Marathi (मराठी)', 'kn': 'Kannada (ಕನ್ನಡ)', 'ta': 'Tamil (தமிழ்)',
    'te': 'Telugu (తెలుగు)', 'bn': 'Bengali (বাংলা)', 'gu': 'Gujarati (ગુજરાતી)',
    'ml': 'Malayalam (മലയാളം)', 'pa': 'Punjabi (ਪੰਜਾਬੀ)', 'hi': 'Hindi (हिंदी)', 'en': 'English',
};

const SmartLanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [detectedRegion, setDetectedRegion] = useState('');
    const [suggestedLang, setSuggestedLang] = useState('');
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        const checkAndPromptLanguage = async () => {
            if (hasChecked) return;
            setHasChecked(true);
            try {
                const hasPrompted = localStorage.getItem('language_prompt_shown');
                const manualLang = localStorage.getItem('i18nextLng');
                if (hasPrompted || (manualLang && manualLang !== 'en')) return;
                if (!i18n.isInitialized) {
                    await new Promise(resolve => {
                        const check = () => { if (i18n.isInitialized) resolve(true); else setTimeout(check, 100); };
                        check();
                        setTimeout(() => resolve(false), 5000);
                    });
                }
                const response = await fetch('/api/location');
                if (!response.ok) { localStorage.setItem('language_prompt_shown', 'true'); return; }
                const data = await response.json();
                if (data.country_code !== 'IN') { localStorage.setItem('language_prompt_shown', 'true'); return; }
                if (data.detected_lang && data.detected_lang !== i18n.language && data.detected_lang !== 'en') {
                    setDetectedRegion(data.region || 'your region');
                    setSuggestedLang(data.detected_lang);
                    setIsOpen(true);
                } else {
                    localStorage.setItem('language_prompt_shown', 'true');
                }
            } catch (error) {
                console.error('Smart Language Detection failed:', error);
                localStorage.setItem('language_prompt_shown', 'true');
            }
        };
        checkAndPromptLanguage();
    }, [hasChecked, i18n.isInitialized]);

    const handleConfirm = useCallback(async () => {
        if (suggestedLang && i18n.isInitialized) {
            try {
                // Set cookie BEFORE reload so server picks up the new language
                if (typeof document !== 'undefined') {
                    document.cookie = `NEXT_LOCALE=${suggestedLang}; path=/; max-age=31536000`;
                    document.cookie = `i18nextLng=${suggestedLang}; path=/; max-age=31536000`;
                }
                await i18n.changeLanguage(suggestedLang);
                window.location.reload();
            } catch (err) { console.error('Language confirm failed:', err); }
        }
        localStorage.setItem('language_prompt_shown', 'true');
        setIsOpen(false);
    }, [suggestedLang, i18n]);

    const handleDismiss = useCallback(() => {
        localStorage.setItem('language_prompt_shown', 'true');
        setIsOpen(false);
    }, []);

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleDismiss(); }}>
            <DialogContent className="sm:max-w-md" style={{ zIndex: 9999 }}>
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
