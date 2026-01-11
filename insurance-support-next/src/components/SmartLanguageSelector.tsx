"use client";

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
import { Globe, LogOut } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    'en': 'English',
    'hi': 'Hindi (हिंदी)',
    'mr': 'Marathi (मराठी)',
    'kn': 'Kannada (ಕನ್ನಡ)',
    'ta': 'Tamil (தமிழ்)',
    'te': 'Telugu (తెలుగు)',
    'bn': 'Bengali (বাংলা)',
    'gu': 'Gujarati (ગુજરાતી)',
    'ml': 'Malayalam (മലയാളം)',
    'pa': 'Punjabi (ਪੰਜਾਬੀ)',
};

type FlowState = 'IDLE' | 'REGION_PROMPT' | 'NATIVE_CHECK' | 'MANUAL_SELECT';

const SmartLanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [flowState, setFlowState] = useState<FlowState>('IDLE');

    // REGION_PROMPT state data
    const [detectedRegion, setDetectedRegion] = useState('');
    const [suggestedLang, setSuggestedLang] = useState('');

    // MANUAL_SELECT state data
    const [selectedManualLang, setSelectedManualLang] = useState('');

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
                const { region, country_code } = data;

                // 3. Handle International Users
                if (country_code !== 'IN') {
                    // Start Native Native Check Flow
                    setFlowState('NATIVE_CHECK');
                    setIsOpen(true);
                    return;
                }

                if (!region) return;

                // 4. Handle Domestic Users (Region Mapping)
                const langCode = REGION_TO_LANG[region];

                if (langCode && langCode !== i18n.language) {
                    setDetectedRegion(region);
                    setSuggestedLang(langCode);
                    setFlowState('REGION_PROMPT');
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

    // --- Actions ---

    const dismiss = () => {
        localStorage.setItem('language_prompt_shown', 'true');
        setIsOpen(false);
    };

    // Flow: NATIVE_CHECK
    const handleNativeConfirm = (isNative: boolean) => {
        if (isNative) {
            setFlowState('MANUAL_SELECT');
        } else {
            // Redirect to Google based on locale if possible, otherwise .com
            // We'll just generic redirect for now as extracting locale from IP for google TLD is complex
            window.location.href = 'https://www.google.com';
        }
    };

    // Flow: MANUAL_SELECT
    const handleManualSelectConfirm = () => {
        if (selectedManualLang) {
            i18n.changeLanguage(selectedManualLang);
        }
        dismiss();
    };

    // Flow: REGION_PROMPT
    const handleRegionConfirm = () => {
        if (suggestedLang) {
            i18n.changeLanguage(suggestedLang);
        }
        dismiss();
    };


    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                // If closing manually, treat as dismiss (unless redirecting)
                dismiss();
            }
            setIsOpen(open);
        }}>
            <DialogContent className="sm:max-w-md">

                {/* --- STATE: NATIVE_CHECK (International) --- */}
                {flowState === 'NATIVE_CHECK' && (
                    <>
                        <DialogHeader>
                            <div className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-accent" />
                                <DialogTitle>Welcome to Insurance Support</DialogTitle>
                            </div>
                            <DialogDescription className="pt-2">
                                We detected you are visiting from outside India. To provide you the best experience, please tell us:
                                <br /><br />
                                <span className="font-semibold text-foreground">Are you a native of India?</span>
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                            <Button variant="outline" onClick={() => handleNativeConfirm(false)} className="order-2 sm:order-1 gap-2">
                                <LogOut className="h-4 w-4" />
                                No, I am not
                            </Button>
                            <Button onClick={() => handleNativeConfirm(true)} className="bg-primary text-white hover:bg-primary/90 order-1 sm:order-2">
                                Yes, I am an Indian Native
                            </Button>
                        </DialogFooter>
                    </>
                )}

                {/* --- STATE: MANUAL_SELECT (Native confirmed) --- */}
                {flowState === 'MANUAL_SELECT' && (
                    <>
                        <DialogHeader>
                            <div className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-accent" />
                                <DialogTitle>Choose Your Language / भाषा चुनें</DialogTitle>
                            </div>
                            <DialogDescription className="pt-2">
                                Please select your preferred language to continue.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="py-4">
                            <Select onValueChange={setSelectedManualLang}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(LANG_DISPLAY_NAMES).map(([code, name]) => (
                                        <SelectItem key={code} value={code}>{name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <DialogFooter className="flex sm:justify-between gap-2 mt-4">
                            <Button variant="ghost" onClick={dismiss} className="text-muted-foreground hover:text-foreground">
                                Skip (English)
                            </Button>
                            <Button
                                onClick={handleManualSelectConfirm}
                                disabled={!selectedManualLang}
                                className="bg-primary text-white hover:bg-primary/90"
                            >
                                Continue
                            </Button>
                        </DialogFooter>
                    </>
                )}

                {/* --- STATE: REGION_PROMPT (Domestic) --- */}
                {flowState === 'REGION_PROMPT' && (
                    <>
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
                            <Button variant="outline" onClick={dismiss} className="w-full sm:w-auto order-2 sm:order-1">
                                {t('language_prompt_dismiss', 'Keep English')}
                            </Button>
                            <Button onClick={handleRegionConfirm} className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 order-1 sm:order-2">
                                {t('language_prompt_confirm', { language: LANG_DISPLAY_NAMES[suggestedLang] || suggestedLang })}
                            </Button>
                        </DialogFooter>
                    </>
                )}

            </DialogContent>
        </Dialog>
    );
};

export default SmartLanguageSelector;
