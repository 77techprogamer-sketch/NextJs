// Static translation for Cloudflare Pages Edge Runtime
// No Node.js deps, no next/headers, no fs/path — pure static imports
const en = require('./locales/en/translation.json');
const hi = require('./locales/hi/translation.json');
const bn = require('./locales/bn/translation.json');
const mr = require('./locales/mr/translation.json');
const te = require('./locales/te/translation.json');
const ta = require('./locales/ta/translation.json');
const gu = require('./locales/gu/translation.json');
const kn = require('./locales/kn/translation.json');
const ml = require('./locales/ml/translation.json');
const pa = require('./locales/pa/translation.json');

const FALLBACK = 'en';
const SUPPORTED = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];

const ALL: Record<string, any> = { en, hi, bn, mr, te, ta, gu, kn, ml, pa };

function getNested(obj: any, key: string): any {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function getStaticTranslation(lang: string = FALLBACK) {
    if (!SUPPORTED.includes(lang)) lang = FALLBACK;
    const dict = ALL[lang] || ALL[FALLBACK];
    const fallback = lang !== FALLBACK ? ALL[FALLBACK] : null;

    const t = (key: string, options?: any) => {
        let val = getNested(dict, key);
        if (val === undefined && fallback) {
            val = getNested(fallback, key);
        }
        if (options && typeof options === 'object' && (options as any).returnObjects) {
            return val !== undefined ? val : key;
        }
        if (typeof val === 'string' && options && typeof options === 'object') {
            for (const [k, v] of Object.entries(options)) {
                if (typeof v !== 'boolean') {
                    val = val.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
                }
            }
        }
        return val !== undefined ? val : key;
    };
    return { t, lang };
}
