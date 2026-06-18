import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import enTranslation from '../public/locales/en/translation.json';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  i18n.use(LanguageDetector);
}

i18n
  .use(resourcesToBackend((language: string, namespace: string) => {
    if (language === 'en') return Promise.resolve(enTranslation);
    if (typeof window === 'undefined') {
      return import(`../public/locales/${language}/${namespace}.json`);
    } else {
      return fetch(`/locales/${language}/${namespace}.json`).then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${language} translations`);
        return res.json();
      });
    }
  }))
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      lookupCookie: 'i18nextLng',
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'],
    react: {
      useSuspense: false,
    },
  }, (err, t) => {
    if (err) return console.error('i18next initialization failed:', err);
    if (isBrowser) {
      console.log('i18next initialized. Language:', i18n.language);
    }
  });

export default i18n;
