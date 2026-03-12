const fs = require('fs');
const path = require('path');

function updateLang(lang, translations, seoContent) {
    const p = path.join(process.cwd(), `public/locales/${lang}/translation.json`);
    if (!fs.existsSync(p)) return;
    let data = JSON.parse(fs.readFileSync(p, 'utf8'));

    // Apply UI translations
    for (const key in translations) {
        data[key] = translations[key];
    }

    // Apply SEO content
    data.service_seo_content = seoContent;

    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}/translation.json successfully`);
}

// Hindi (hi)
const hiUI = {
    "insurance_support": "इंश्योरेंस सपोर्ट",
    "services_offered_link": "प्रदान की जाने वाली सेवाएं",
    "tools": "टूल्स",
    "free_tools": "निःशुल्क टूल्स",
    "loans": "ऋण (Loanz)",
    "resources": "संसाधन",
    "support": "सहायता",
    "about_us": "हमारे बारे में",
    "get_quote": "कोटेशन प्राप्त करें",
    "call_now": "अभी कॉल करें",
    "chat_now": "चैट करें",
    "whatsapp_support": "व्हाट्सएप सहायता",
    "verified_advisor": "सत्यापित सलाहकार",
};
const hiSEO = {
    "life-insurance": {
      "description": "जीवन बीमा केवल सुरक्षा के बारे में नहीं है; यह आपकी विरासत के बारे में है। हमारे सलाहकार आपको जटिल दावा निपटान प्रक्रियाओं और पॉलिसी पुनरुद्धार में मदद करते हैं।",
      "highlights": ["दावा रिकवरी विशेषज्ञ", "पॉलिसी पुनरुद्धार सहायता", "डोरस्टेप डॉक्यूमेंट मदद"]
    },
    "health-insurance": {
      "description": "कैशलेस अस्पताल में भर्ती, पहले से मौजूद बीमारी कवरेज और आपके पूरे परिवार के लिए परेशानी मुक्त दावा प्रसंस्करण के साथ विश्व स्तरीय स्वास्थ्य सेवा सुरक्षित करें।",
      "highlights": ["कैशलेस नेटवर्क पार्क", "नो-क्लेम बोनस स्पष्टता", "फास्ट प्री-ऑथ सपोर्ट"]
    }
};

// Marathi (mr)
const mrUI = {
    "insurance_support": "इन्शुरन्स सपोर्ट",
    "services_offered_link": "आमच्या सेवा",
    "tools": "टूल्स",
    "free_tools": "मोफत टूल्स",
    "loans": "कर्ज (Loans)",
    "resources": "रिसोर्सेस",
    "support": "मदत",
    "about_us": "आमच्याबद्दल",
    "get_quote": "कोट मिळवा",
    "call_now": "आत्ता कॉल करा",
    "chat_now": "चॅट करा",
    "whatsapp_support": "व्हॉट्सॲप सपोर्ट",
    "verified_advisor": "व्हेरिफाईड सल्लागार",
};
const mrSEO = {
    "life-insurance": {
      "description": "जीवन विमा फक्त संरक्षणासाठी नाही; हे वारशाबद्दल आहे. आमचे सल्लागार तुम्हाला जटिल दावा सेटलमेंट प्रक्रिया आणि पॉलिसी पुनरुज्जीवनामध्ये मदत करतात.",
      "highlights": ["क्लेम रिकव्हरी तज्ञ", "पॉलिसी पुनरुज्जीवन समर्थन", "डोरस्टेप डॉक्युमेंट मदत"]
    },
    "health-insurance": {
      "description": "कॅशलेस हॉस्पिटलायझेशन, आधीपासून असलेल्या आजारांचे कव्हरेज आणि आपल्या संपूर्ण कुटुंबासाठी त्रासमुक्त क्लेम प्रोसेसिंगसह जागतिक दर्जाची आरोग्यसेवा सुरक्षित करा.",
      "highlights": ["कॅशलेस नेटवर्क पार्क्स", "नो-क्लेम बोनस क्लिअरिटी", "फास्ट प्री-ऑथ सपोर्ट"]
    }
};

updateLang('hi', hiUI, hiSEO);
updateLang('mr', mrUI, mrSEO);
