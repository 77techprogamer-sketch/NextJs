import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'],
    react: {
      useSuspense: false,
    }
  }, (err, t) => {
    if (err) return console.error('i18next initialization failed:', err);
    console.log('i18next initialized successfully. Current language:', i18n.language);
  });

export default i18n;