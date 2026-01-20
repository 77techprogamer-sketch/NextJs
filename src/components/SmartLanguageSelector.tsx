"use client";

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ArrowRight, LogOut } from 'lucide-react';

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

// Language configurations with native names and greetings
const LANGUAGES = [
    { code: 'en', name: 'English', native: 'English', greeting: 'Welcome' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी', greeting: 'स्वागत है' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', greeting: 'ಸ್ವಾಗತ' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', greeting: 'வரவேற்கிறோம்' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', greeting: 'స్వాగతం' },
    { code: 'mr', name: 'Marathi', native: 'मराठी', greeting: 'स्वागत आहे' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা', greeting: 'স্বাগতম' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', greeting: 'સ્વાગત છે' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം', greeting: 'സ്വാഗതം' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', greeting: 'ਜੀ ਆਇਆਂ ਨੂੰ' },
];

type FlowState = 'LOADING' | 'LANGUAGE_SELECT' | 'NATIVE_CHECK' | 'DISMISSED';

const SmartLanguageSelector = () => {
    const { i18n } = useTranslation();
    const [flowState, setFlowState] = useState<FlowState>('LOADING');
    const [detectedRegion, setDetectedRegion] = useState('');
    const [suggestedLang, setSuggestedLang] = useState('en');
    const [isAnimating, setIsAnimating] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const checkAndPromptLanguage = async () => {
            // Check if already prompted (Session constrained)
            const hasPrompted = sessionStorage.getItem('language_prompt_shown');
            if (hasPrompted) {
                setFlowState('DISMISSED');
                return;
            }

            try {
                // Fetch IP Geolocation (Primary + Fallback)
                let data;
                let usedFallback = false;

                try {
                    // Internal API removed as it doesn't exist
                    // Fallback to ipwho.is directly
                    const response = await fetch('https://ipwho.is/');
                    if (!response.ok) throw new Error(`Fallback API failed`);
                    data = await response.json();
                    usedFallback = true;
                } catch (error) {
                    console.error('Fallback location check failed', error);
                }

                const country_code = (data && data.country_code) ? data.country_code : 'IN';
                const region = (data && data.region) ? data.region : '';

                // Handle International Users
                if (country_code !== 'IN') {
                    setFlowState('NATIVE_CHECK');
                    setIsAnimating(true);
                    return;
                }

                // Handle Domestic Users
                if (region) {
                    setDetectedRegion(region);
                    const langCode = REGION_TO_LANG[region];
                    if (langCode) {
                        setSuggestedLang(langCode);
                    }
                }

                setFlowState('LANGUAGE_SELECT');
                setIsAnimating(true);

            } catch (error) {
                console.error('Language detection failed:', error);
                // On error, show language selection anyway
                setFlowState('LANGUAGE_SELECT');
                setIsAnimating(true);
            }
        };

        checkAndPromptLanguage();
    }, []);

    const selectLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        dismiss();
    };

    const dismiss = () => {
        sessionStorage.setItem('language_prompt_shown', 'true');
        setIsAnimating(false);
        setTimeout(() => setFlowState('DISMISSED'), 300);
    };

    const handleNativeConfirm = (isNative: boolean) => {
        if (isNative) {
            setFlowState('LANGUAGE_SELECT');
        } else {
            window.location.href = 'https://www.google.com';
        }
    };

    // Get suggestion details
    const suggestedLangData = LANGUAGES.find(l => l.code === suggestedLang) || LANGUAGES[0];

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) return null;

    if (flowState === 'DISMISSED' || flowState === 'LOADING') {
        // Show loading state briefly
        if (flowState === 'LOADING') {
            return (
                <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto"></div>
                        <p className="mt-4 text-white/80 text-sm">Loading...</p>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content Card */}
            <div
                className={`relative w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10 transition-all duration-500 ${isAnimating ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
                    }`}
            >
                {/* International User Check */}
                {flowState === 'NATIVE_CHECK' && (
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Globe className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Welcome to Insurance Support
                        </h1>
                        <p className="text-white/70 mb-8">
                            We detected you are visiting from outside India.<br />
                            <span className="font-medium text-white/90">Are you a native of India?</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleNativeConfirm(false)}
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition-all"
                            >
                                <LogOut className="w-4 h-4" />
                                No, I am not
                            </button>
                            <button
                                onClick={() => handleNativeConfirm(true)}
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg"
                            >
                                Yes, I am an Indian Native
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Language Selection */}
                {flowState === 'LANGUAGE_SELECT' && (
                    <>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Globe className="w-8 h-8 text-white" />
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {suggestedLangData.greeting} / Welcome
                            </h1>

                            {detectedRegion && (
                                <p className="text-white/70 text-sm">
                                    We see you&apos;re from <span className="text-blue-300 font-medium">{detectedRegion}</span>
                                </p>
                            )}

                            <p className="text-white/60 text-sm mt-2">
                                Choose your preferred language
                            </p>
                        </div>

                        {/* Language Grid */}
                        {/* Language Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-3xl mx-auto">
                            {(() => {
                                const targetCodes = Array.from(new Set([suggestedLang, 'en', 'hi']));
                                const displayLanguages = targetCodes
                                    .map(code => LANGUAGES.find(l => l.code === code))
                                    .filter((l): l is typeof LANGUAGES[0] => !!l);

                                return displayLanguages.map((lang) => {
                                    const isSuggested = lang.code === suggestedLang;
                                    const isSelected = lang.code === i18n.language;

                                    return (
                                        <button
                                            key={lang.code}
                                            onClick={() => selectLanguage(lang.code)}
                                            className={`relative group p-4 rounded-xl border transition-all duration-200 text-center ${isSuggested
                                                ? 'bg-gradient-to-br from-blue-600/40 to-purple-600/40 border-blue-400/50 ring-2 ring-blue-400/30'
                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            {isSuggested && (
                                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-medium bg-blue-500 text-white rounded-full">
                                                    Suggested
                                                </span>
                                            )}

                                            <div className="text-lg font-bold text-white mb-1">
                                                {lang.native}
                                            </div>
                                            <div className="text-xs text-white/60">
                                                {lang.name}
                                            </div>

                                            {isSelected && (
                                                <div className="absolute top-2 right-2">
                                                    <Check className="w-4 h-4 text-green-400" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                });
                            })()}
                        </div>

                        {/* Skip option */}
                        <div className="text-center">
                            <button
                                onClick={dismiss}
                                className="text-white/50 hover:text-white/80 text-sm transition-colors"
                            >
                                Skip and continue in English
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Brand Footer */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-white/30 text-xs">
                    Insurance Support • Your Trusted Partner
                </p>
            </div>
        </div>
    );
};

export default SmartLanguageSelector;
