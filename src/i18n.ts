import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  i18n.use(LanguageDetector);
}

i18n
  .use(resourcesToBackend((language: string, namespace: string) => {
    return import(`../public/locales/${language}/${namespace}.json`);
  }))
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    supportedLngs: ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'], // Indian languages + English
    react: {
      useSuspense: false,
    },
  }, (err, t) => {
    if (err) return console.error('i18next initialization failed:', err);
    if (isBrowser) {
      console.log('i18next initialized successfully. Current language:', i18n.language);
    }
  });

export default i18n;