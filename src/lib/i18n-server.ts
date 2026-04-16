import { cookies, headers } from 'next/headers';
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
            const cookieStore = cookies();
            lang = cookieStore.get('i18nextLng')?.value;
        } catch (e) {
            // cookies() might fail if not called in a request context
        }
        
        // Fallback to Accept-Language header
        if (!lang || !SUPPORTED_LANGS.includes(lang)) {
            try {
                const acceptLang = headers().get('accept-language');
                if (acceptLang) {
                    const detected = acceptLang.split(',')[0].split('-')[0].toLowerCase();
                    if (SUPPORTED_LANGS.includes(detected)) {
                        lang = detected;
                    }
                }
            } catch (e) {}
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
    const t = (key: string, options?: Record<string, string | number> | string) => {
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

        // Interpolation
        if (options && typeof options === 'object') {
            Object.keys(options).forEach(optKey => {
                const regex = new RegExp(`{{${optKey}}}`, 'g');
                translation = translation.replace(regex, String(options[optKey]));
            });
        }

        return translation;
    };

    return { t, lang };
}
