import { cookies, headers } from 'next/headers';
import { REGIONAL_NAMES } from '@/data/regionalData';
import fs from 'fs';
import path from 'path';

const FALLBACK_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];

/**
 * Server-side translation utility for Next.js App Router (Server Components)
 */
/**
 * Server-side translation utility for Next.js App Router (Server Components)
 */
export async function getServerSideTranslation(lng?: string) {
    // 1. Determine language
    let lang = lng;
    
    if (!lang) {
        try {
            // Priority 1: Check if locale was passed via internal rewrite header
            lang = headers().get('x-next-locale') || undefined;
            
            // Priority 2: Check cookie
            if (!lang) {
                const cookieStore = cookies();
                lang = cookieStore.get('i18nextLng')?.value;
            }
        } catch (e: any) {
            if (e && e.digest === 'DYNAMIC_SERVER_USAGE') {
                throw e;
            }
            // cookies() might fail if not called in a request context
        }
        
        // Priority 3: Fallback to Accept-Language header
        if (!lang || !SUPPORTED_LANGS.includes(lang)) {
            try {
                const acceptLang = headers().get('accept-language');
                if (acceptLang) {
                    const detected = acceptLang.split(',')[0].split('-')[0].toLowerCase();
                    if (SUPPORTED_LANGS.includes(detected)) {
                        lang = detected;
                    }
                }
            } catch (e: any) {
                if (e && e.digest === 'DYNAMIC_SERVER_USAGE') {
                    throw e;
                }
            }
        }
    }

    if (!lang || !SUPPORTED_LANGS.includes(lang)) {
        lang = FALLBACK_LANG;
    }

    // 2. Load translation resources
    const loadFile = (l: string) => {
        try {
            const filePath = path.join(process.cwd(), 'public', 'locales', l, 'translation.json');
            return JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            return {};
        }
    };

    const translations = loadFile(lang);
    const fallbacks = lang !== FALLBACK_LANG ? loadFile(FALLBACK_LANG) : {};

    /**
     * Resolve nested keys and interpolate variables
     */
    const t = (key: string, options?: Record<string, string | number | boolean> | string) => {
        const getNested = (obj: any, k: string) => {
            if (!obj) return undefined;
            return k.split('.').reduce((acc, part) => acc && acc[part], obj);
        };

        let translation = getNested(translations, key);
        
        // Fallback to English if missing
        if (translation === undefined && lang !== FALLBACK_LANG) {
            translation = getNested(fallbacks, key);
        }

        // Final fallback to provided string or the key itself
        if (translation === undefined) {
            return typeof options === 'string' ? options : key;
        }

                // Interpolation for strings
        if (typeof translation === 'string' && options && typeof options === 'object') {
            Object.keys(options).forEach(optKey => {
                if (typeof options[optKey] !== 'boolean') {
                    const regex = new RegExp(`{{${optKey}}}`, 'g');
                    translation = (translation as string).replace(regex, String(options[optKey]));
                }
            });
        }

        // Interpolation for arrays of strings
        if (Array.isArray(translation) && options && typeof options === 'object') {
            translation = translation.map((item) => {
                if (typeof item === 'string') {
                    let result = item;
                    Object.keys(options).forEach(optKey => {
                        if (typeof options[optKey] !== 'boolean') {
                            const regex = new RegExp(`{{${optKey}}}`, 'g');
                            result = result.replace(regex, String(options[optKey]));
                        }
                    });
                    return result;
                }
                return item;
            });
        }

        return translation;
    };

    return { t, lang };
}

export async function getLocalizedName(slug: string, locale: string): Promise<string> {
    const regional = REGIONAL_NAMES[slug];
    if (regional && regional[locale]) {
        return regional[locale];
    }
    // Fallback: Return formatted slug
    return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}


export function getStaticTranslation(lang: string = 'en') {
    const translations: Record<string, any> = {
        en: require('../../public/locales/en/translation.json'),
        hi: require('../../public/locales/hi/translation.json')
    };
    const t = (key: string) => translations[lang]?.key || key;
    return { t, lang };
}
