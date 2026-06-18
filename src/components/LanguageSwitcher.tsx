"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      const lang = i18n.language ? i18n.language.split('-')[0] : 'en';
      setSelectedLanguage(lang);
      setIsReady(true);
    }
  }, [i18n.isInitialized, i18n.language]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
    { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  ];

  const changeLanguage = async (lng: string) => {
    if (!i18n.isInitialized) return;
    try {
      await i18n.changeLanguage(lng);
      setSelectedLanguage(lng);
      if (typeof document !== 'undefined') {
        document.cookie = `NEXT_LOCALE=${lng}; path=/; max-age=31536000`;
        document.cookie = `i18nextLng=${lng}; path=/; max-age=31536000`;
      }
      // Reload the page to apply translations everywhere
      window.location.reload();
    } catch (err) {
      console.error('Language change failed:', err);
    }
  };

  if (!isReady) {
    return (
      <div className="w-[180px] h-10 flex items-center">
        <Globe className="h-4 w-4 text-muted-foreground animate-pulse" />
      </div>
    );
  }

  return (
    <Select onValueChange={changeLanguage} value={selectedLanguage}>
      <SelectTrigger className="w-[180px] border-border/50">
        <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
        <SelectValue placeholder={t("select_language")} />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={5} className="z-[100] max-h-[300px] overflow-y-auto">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
