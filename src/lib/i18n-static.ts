/**
 * Static translation utility for Next.js App Router (Server Components)
 * Loads translations from filesystem at build time for static generation.
 * Does NOT use cookies() — allows pages to be statically generated.
 */

const FALLBACK_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];

// Cache translations in memory for performance
const translationCache: Record<string, Record<string, any>> = {};

function loadTranslations(lang: string): Record<string, any> {
    if (translationCache[lang]) return translationCache[lang];
    
    try {
        const data = require(`@/../public/locales/${lang}/translation.json`);
        translationCache[lang] = data;
        return data;
    } catch (e) {
        return {};
    }
}

function getNested(obj: any, key: string): any {
    if (!obj) return undefined;
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function createStaticT(lang: string = FALLBACK_LANG) {
    const translations = loadTranslations(lang);
    const fallbacks = lang !== FALLBACK_LANG ? loadTranslations(FALLBACK_LANG) : {};

    return (key: string, options?: Record<string, string | number | boolean> | string) => {
        let translation = getNested(translations, key);
        
        if (translation === undefined && lang !== FALLBACK_LANG) {
            translation = getNested(fallbacks, key);
        }

        if (translation === undefined) {
            return typeof options === 'string' ? options : key;
        }

        if (typeof translation === 'string' && options && typeof options === 'object') {
            Object.keys(options).forEach(optKey => {
                if (typeof options[optKey] !== 'boolean') {
                    const regex = new RegExp(`{{${optKey}}}`, 'g');
                    translation = (translation as string).replace(regex, String(options[optKey]));
                }
            });
        }

        return translation;
    };
}

/**
 * Get the translation function for static generation.
 * Always uses 'en' as the default language for SEO pages.
 * Language switching happens client-side via i18n.
 */
export function getStaticTranslation(lang?: string) {
    const resolvedLang = lang && SUPPORTED_LANGS.includes(lang) ? lang : FALLBACK_LANG;
    return { t: createStaticT(resolvedLang), lang: resolvedLang };
}
