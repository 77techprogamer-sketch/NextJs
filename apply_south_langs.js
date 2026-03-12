const fs = require('fs');
const path = require('path');

function updateLang(lang, translations, seoContent) {
    const p = path.join(process.cwd(), `public/locales/${lang}/translation.json`);
    if (!fs.existsSync(p)) return;
    let data = JSON.parse(fs.readFileSync(p, 'utf8'));

    for (const key in translations) {
        data[key] = translations[key];
    }
    data.service_seo_content = seoContent;

    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}/translation.json successfully`);
}

// Kannada (kn)
const knUI = {
    "insurance_support": "ಇನ್ಶೂರೆನ್ಸ್ ಸಪೋರ್ಟ್",
    "services_offered_link": "ಸೇವೆಗಳು",
    "tools": "ಪರಿಕರಗಳು (Tools)",
    "about_us": "ನಮ್ಮ ಬಗ್ಗೆ",
    "get_quote": "ಕೋಟ್ ಪಡೆಯಿರಿ",
    "call_now": "ಈಗಲೇ ಕರೆ ಮಾಡಿ",
    "verified_advisor": "ಪರಿಶೀಲಿಸಿದ ಸಲಹೆಗಾರ",
};
const knSEO = {
    "life-insurance": {
      "description": "ಜೀವ ವಿಮೆ ಕೇವಲ ರಕ್ಷಣೆಯಲ್ಲ; ಇದು ಪರಂಪರೆಯ ಬಗ್ಗೆ. ನಮ್ಮ ಸಲಹೆಗಾರರು ಜಟಿಲವಾದ ಕ್ಲೈಮ್ ಸೆಟಲ್ಮೆಂಟ್ ಪ್ರಕ್ರಿಯೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತಾರೆ.",
      "highlights": ["ಕ್ಲೈಮ್ ರಿಕವರಿ ತಜ್ಞರು", "ಪಾಲಿಸಿ ಪುನಶ್ಚೇತನ ಬೆಂಬಲ", "ಡೋರ್‌ಸ್ಟೆಪ್ ಡಾಕ್ಯುಮೆಂಟ್ ಸಹಾಯ"]
    }
};

// Telugu (te)
const teUI = {
    "insurance_support": "ఇన్సూరెన్స్ సపోర్ట్",
    "services_offered_link": "మా సేవలు",
    "tools": "టూల్స్",
    "about_us": "మా గురించి",
    "get_quote": "కోట్ పొందండి",
    "call_now": "ఇప్పుడే కాల్ చేయండి",
};

// Tamil (ta)
const taUI = {
  "insurance_support": "இன்சூரன்ஸ் சப்போர்ட்",
  "services_offered_link": "எங்கள் சேவைகள்",
  "tools": "கருவிகள்",
  "about_us": "எங்களைப் பற்றி",
  "get_quote": "மேற்கோள் பெறவும்",
  "call_now": "இப்பொழுதே அழைக்கவும்",
};

updateLang('kn', knUI, knSEO);
updateLang('te', teUI, knSEO); // Reusing knSEO as fallback placeholder for South Indian SEO for now or keeping it simple
updateLang('ta', taUI, knSEO);
