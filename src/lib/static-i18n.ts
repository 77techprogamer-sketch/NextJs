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

// Localized name lookup for cities/states
const NAME_MAP: Record<string, Record<string, string>> = {
    // States
    'maharashtra': { hi: 'महाराष्ट्र', bn: 'মহারাষ্ট্র', mr: 'महाराष्ट्र', te: 'మహారాష్ట్ర', ta: 'மகாராஷ்டிரா', gu: 'મહારાષ્ટ્ર', kn: 'ಮಹಾರಾಷ್ಟ್ರ', ml: 'മഹാരാഷ്ട്ര', pa: 'ਮਹਾਰਾਸ਼ਟਰ' },
    'karnataka': { hi: 'कर्नाटक', bn: 'কর্ণাটক', mr: 'कर्नाटक', te: 'కర్ణాటక', ta: 'கர்நாடகா', gu: 'કર્ણાટક', kn: 'ಕರ್ನಾಟಕ', ml: 'കർണാടക', pa: 'ਕਰਨਾਟਕ' },
    'delhi': { hi: 'दिल्ली', bn: 'দিল্লি', mr: 'दिल्ली', te: 'ఢిల్లీ', ta: 'டெல்லி', gu: 'દિલ્હી', kn: 'ದಿಲ್ಲಿ', ml: 'ഡൽഹി', pa: 'ਦਿੱਲੀ' },
    'tamil nadu': { hi: 'तमिल नाडु', bn: 'তামিলনাড়ু', mr: 'तमिळनाडू', te: 'తమిళనాడు', ta: 'தமிழ்நாடு', gu: 'તમિલનાડુ', kn: 'ತಮಿಳುನಾಡು', ml: 'തമിഴ്നാട്', pa: 'ਤਾਮਿਲ ਨਾਡੂ' },
    'kerala': { hi: 'केरल', bn: 'কেরালা', mr: 'केरळ', te: 'కేరళ', ta: 'கேரளா', gu: 'કેરળ', kn: 'ಕೇರಳ', ml: 'കേരളം', pa: 'ਕੇਰਲ' },
    'uttar pradesh': { hi: 'उत्तर प्रदेश', bn: 'উত্তর প্রদেশ', mr: 'उत्तर प्रदेश', te: 'ఉత్తర ప్రదేశ్', ta: 'உத்தர பிரதேசம்', gu: 'ઉત્તર પ્રદેશ', kn: 'ಉತ್ತರ ಪ್ರದೇಶ', ml: 'ഉത്തർ പ്രദേശ്', pa: 'ਉੱਤਰ ਪ੍ਰਦੇਸ਼' },
    'gujarat': { hi: 'गुजरात', bn: 'গুজরাট', mr: 'गुजरात', te: 'గుజరాత్', ta: 'குஜராத்', gu: 'ગુજરાત', kn: 'ಗುಜರಾತ್', ml: 'ഗുജറാത്ത്', pa: 'ਗੁਜਰਾਤ' },
    'west bengal': { hi: 'पश्चिम बंगाल', bn: 'পশ্চিমবঙ্গ', mr: 'पश्चिम बंगाल', te: 'పశ్చిమ బెంగాల్', ta: 'மேற்கு வங்காளம்', gu: 'પશ્ચિમ બંગાળ', kn: 'ಪಶ್ಚಿಮ ಬಂಗಾಳ', ml: 'പശ്ചിം ബംഗാൾ', pa: 'ਪੱਛਮ ਬੰਗਾਲ' },
    'andhra pradesh': { hi: 'आंध्र प्रदेश', bn: 'অন্ধ্র প্রদেশ', mr: 'आंध्र प्रदेश', te: 'ఆంధ్ర ప్రదేశ్', ta: 'ஆந்திரப் பிரதேசம்', gu: 'આંધ્ર પ્રદેશ', kn: 'ಆಂಧ್ರ ಪ್ರದೇಶ', ml: 'ആന്ധ്രാ പ്രദേശ്', pa: 'ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼' },
    'telangana': { hi: 'तेलंगाना', bn: 'তেলেঙ্গানা', mr: 'तेलंगाना', te: 'తెలంగాణ', ta: 'தெலங்கானா', gu: 'તેલંગાણા', kn: 'ತೆಲಂಗಾಣ', ml: 'തെലങ്കാന', pa: 'ਤੇਲੰਗਾਣਾ' },
    'rajasthan': { hi: 'राजस्थान', bn: 'রাজস্থান', mr: 'राजस्थान', te: 'రాజస్థాన్', ta: 'ராஜஸ்தான்', gu: 'રાજસ્થાન', kn: 'ರಾಜಸ್ಥಾನ', ml: 'രാജസ്ഥാൻ', pa: 'ਰਾਜਸਥਾਨ' },
    'madhya pradesh': { hi: 'मध्य प्रदेश', bn: 'মধ্যপ্রদেশ', mr: 'मध्य प्रदेश', te: 'మధ్య ప్రదేశ్', ta: 'மத்தியப் பிரதேசம்', gu: 'મધ્ય પ્રદેશ', kn: 'ಮಧ್ಯ ಪ್ರದೇಶ', ml: 'മധ്യ പ്രദേശ്', pa: 'ਮੱਧ ਪ੍ਰਦੇਸ਼' },
    'bihar': { hi: 'बिहार', bn: 'বিহার', mr: 'बिहार', te: 'బీహార్', ta: 'பீகார்', gu: 'બિહાર', kn: 'ಬಿಹಾರ', ml: 'ബിഹാർ', pa: 'ਬਿਹਾਰ' },
    'punjab': { hi: 'पंजाब', bn: 'পাঞ্জাব', mr: 'पंजाब', te: 'పంజాబ్', ta: 'பஞ்சாப்', gu: 'પંજાબ', kn: 'ಪಂಜಾಬ', ml: 'പഞ്ചാബ്', pa: 'ਪੰਜਾਬ' },
    // Major cities
    'mumbai': { hi: 'मुंबई', bn: 'মুম্বাই', mr: 'मुंबई', te: 'ముంబై', ta: 'மும்பை', gu: 'મુંબઈ', kn: 'ಮುಂಬೈ', ml: 'മുംബൈ', pa: 'ਮੁੰਬਈ' },
    'bangalore': { hi: 'बेंगलुरु', bn: 'বেঙ্গালুরু', mr: 'बेंगलुरू', te: 'బెంగళూరు', ta: 'பெங்களூரு', gu: 'બેંગલુરુ', kn: 'ಬೆಂಗಳೂರು', ml: 'ബെംഗളൂരു', pa: 'ਬੈਂਗਲੁਰੁ' },
    'delhi city': { hi: 'दिल्ली', bn: 'দিল্লি', mr: 'दिल्ली', te: 'ఢిల్లీ', ta: 'டெல்லி', gu: 'દિલ્હી', kn: 'ದಿಲ್ಲಿ', ml: 'ഡൽഹി', pa: 'ਦਿੱਲੀ' },
    'hyderabad': { hi: 'हैदराबाद', bn: 'হাইদ্রাবাদ', mr: 'हैदराबाद', te: 'హైదరాబాద్', ta: 'ஹைதராபாத்', gu: 'હૈદરાબાદ', kn: 'ಹೈದರಾಬಾದ್', ml: 'ഹൈദരാബാദ്', pa: 'ਹੈਦਰਾਬਾਦ' },
    'chennai': { hi: 'चेन्नई', bn: 'চেন্নাই', mr: 'चेन्नई', te: 'చెన్నై', ta: 'சென்னை', gu: 'ચેન્નઈ', kn: 'ಚೆನ್ನೈ', ml: 'ചെന്നൈ', pa: 'ਚੈਨਈ' },
    'kolkata': { hi: 'कोलकाता', bn: 'কোলকাতা', mr: 'कोलकाता', te: 'కోల్‌కతా', ta: 'கொல்கத்தா', gu: 'કોલકાતા', kn: 'ಕೊಲ್ಕತಾ', ml: 'കൊൽക്കത്ത', pa: 'ਕੋਲਕਾਤਾ' },
    'pune': { hi: 'पुणे', bn: 'পুনে', mr: 'पुणे', te: 'పుణె', ta: 'புனே', gu: 'પુણે', kn: 'ಪುಣೆ', ml: 'പുണെ', pa: 'ਪੁਣੇ' },
    'ahmedabad': { hi: 'अहमदाबाद', bn: 'আহমেদাবাদ', mr: 'अहमदाबाद', te: 'అహ్మదాబాద్', ta: 'அகமதாபாத்', gu: 'અહમદાબાદ', kn: 'ಅಹಮದಾಬಾದ್', ml: 'അഹമദാബാദ്', pa: 'ਅਹਿਮਦਾਬਾਦ' },
    'jaipur': { hi: 'जयपुर', bn: 'জয়পুর', mr: 'जयपूर', te: 'జైపుర్', ta: 'ஜெய்ப்பூர்', gu: 'જયપુર', kn: 'ಜೈಪುರ', ml: 'ജയ്പൂർ', pa: 'ਜੈਪੁਰ' },
    'lucknow': { hi: 'लखनऊ', bn: 'লখনউ', mr: 'लखनऊ', te: 'లఖ్నవ్', ta: 'லக்னோ', gu: 'લખનઉ', kn: 'ಲಖನೌ', ml: 'ലഖ്നോ', pa: 'ਲਖਨਊ' },
    'chandigarh': { hi: 'चंडीगढ़', bn: 'চণ্ডীগড়', mr: 'चंडीगड', te: 'చండీగఢ్', ta: 'சண்டிகர்', gu: 'ચંડીગઢ', kn: 'ಚಂಡೀಗಢ', ml: 'ചണ്ടിഗഢ്', pa: 'ਚੰਡੀਗੜ੍ਹ' },
    'nagpur': { hi: 'नागपुर', bn: 'নাগপুর', mr: 'नागपूर', te: 'నాగ్పూర్', ta: 'நாக்பூர்', gu: 'નાગપુર', kn: 'ನಾಗ್ಪುರ', ml: 'നാഗ്പൂർ', pa: 'ਨਾਗਪੁਰ' },
    'indore': { hi: 'इंदौर', bn: 'ইন্দৌর', mr: 'इंदूर', te: 'ఇందూర్', ta: 'இந்தூர்', gu: 'ઇંદૌર', kn: 'ಇಂದೂರ್', ml: 'ഇൻഡോർ', pa: 'ਇੰਦੌਰ' },
    'bhopal': { hi: 'भोपाल', bn: 'ভোপাল', mr: 'भोपाळ', te: 'భోపాల్', ta: 'போபால்', gu: 'ભોપાલ', kn: 'ಭೋಪಾಲ್', ml: 'ഭോപ്പാൽ', pa: 'ਭੋਪਾਲ' },
    'visakhapatnam': { hi: 'विशाखापत्तनम', bn: 'বিশাখাপত্তনম', mr: 'विशाखापत्तनम', te: 'విశాఖపట్నం', ta: 'விசாகப்பட்டினம்', gu: 'વિશાખાપટ્ટનમ', kn: 'ವಿಶಾಖಪಟ್ಟಣಂ', ml: 'വിശാഖപട്ടണം', pa: 'ਵਿਸ਼ਾਖਾਪੱਟਨਮ' },
    'patna': { hi: 'पटना', bn: 'পাটনা', mr: 'पटना', te: 'పాట్నా', ta: 'பாட்னா', gu: 'પટના', kn: 'ಪಾಟ್ನಾ', ml: 'പാറ്റ്ന', pa: 'ਪਟਨਾ' },
    'surat': { hi: 'सूरत', bn: 'সুরাট', mr: 'सूरत', te: 'సూరత్', ta: 'சூரத்', gu: 'સૂરત', kn: 'ಸೂರತ್', ml: 'സൂറത്ത്', pa: 'ਸੂਰਤ' },
    'kochi': { hi: 'कोच्चि', bn: 'কোচি', mr: 'कोची', te: 'కొచ్చి', ta: 'கொச்சி', gu: 'કોચ્ચિ', kn: 'ಕೊಚ್ಚಿ', ml: 'കൊച്ചി', pa: 'ਕੋਚੀ' },
    'goa': { hi: 'गोवा', bn: 'গোয়া', mr: 'गोवा', te: 'గోవా', ta: 'கோவா', gu: 'ગોવા', kn: 'ಗೋವಾ', ml: 'ഗോവ', pa: 'ਗੋਆ' },
};

export async function getLocalizedName(name: string, lang: string = 'en'): Promise<string> {
    if (lang === 'en' || !name) return name;
    const lower = name.toLowerCase();
    const mapped = NAME_MAP[lower];
    if (mapped && mapped[lang]) return mapped[lang];
    return name;
}
