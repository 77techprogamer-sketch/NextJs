import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Static imports for all locales — no fetch delay, no flash of English content
import en from '../public/locales/en/translation.json';
import hi from '../public/locales/hi/translation.json';
import bn from '../public/locales/bn/translation.json';
import mr from '../public/locales/mr/translation.json';
import te from '../public/locales/te/translation.json';
import ta from '../public/locales/ta/translation.json';
import gu from '../public/locales/gu/translation.json';
import kn from '../public/locales/kn/translation.json';
import ml from '../public/locales/ml/translation.json';
import pa from '../public/locales/pa/translation.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  bn: { translation: bn },
  mr: { translation: mr },
  te: { translation: te },
  ta: { translation: ta },
  gu: { translation: gu },
  kn: { translation: kn },
  ml: { translation: ml },
  pa: { translation: pa },
};

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  i18n.use(LanguageDetector);
}

i18n
  .use(initReactI18next)
  .init({
    resources,
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
  }, (err) => {
    if (err) return console.error('i18next initialization failed:', err);
    if (isBrowser) {
      console.log('i18next initialized. Language:', i18n.language);
    }
  });

export default i18n;
