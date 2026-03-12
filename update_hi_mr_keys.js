const fs = require('fs');
const path = require('path');

function updateLang(lang, locData, uiData) {
    const p = path.join(process.cwd(), `public/locales/${lang}/translation.json`);
    if (!fs.existsSync(p)) return;
    let data = JSON.parse(fs.readFileSync(p, 'utf8'));

    data.location_page = locData;

    for (const key in uiData) {
        data[key] = uiData[key];
    }

    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}/translation.json successfully`);
}

// Hindi (hi)
const hiLoc = {
    "breadcrumb_home": "होम",
    "best_support_in": "{{city}} में सबसे श्रेष्ठ <0>{{service}} सहायता</0>",
    "secure_future_fallback": "{{city}} में सबसे विश्वसनीय {{service}} योजनाओं के साथ अपना भविष्य सुरक्षित करें।",
    "doorstep_service_note": "चाहे आप {{area1}} या {{area2}} में हों, हमारे विशेषज्ञ सलाहकार आपके दरवाजे पर व्यक्तिगत सहायता प्रदान करते हैं।",
    "why_choose_title": "{{city}} में {{service}} के लिए इंश्योरेंस सपोर्ट क्यों चुनें?",
    "specialist_title": "{{service}} विशेषज्ञ",
    "regional_presence_title": "क्षेत्रीय उपस्थिति",
    "regional_presence_desc": "<0>{{area1}}</0>, <1>{{area2}}</1> और पूरे {{city}} महानगरीय क्षेत्र में सीधे डोरस्टेप सेवा उपलब्ध है। हमारे सलाहकार स्थानीय {{state}} बीमा माहौल को समझते हैं।",
    "fast_processing_title": "तेजी से स्थानीय प्रोसेसिंग",
    "fast_processing_desc": "{{city}} में अधिकांश {{service}} दस्तावेजों को हमारे समर्पित स्थानीय समन्वयक के साथ 24-48 घंटों के भीतर संसाधित किया जाता है।",
    "trusted_families_title": "15 हजार से अधिक परिवारों का भरोसा",
    "trusted_families_desc": "हमारे {{state}} क्षेत्रीय कार्यालय में 98% दावा निपटान अनुपात है, जिससे यह सुनिश्चित होता है कि {{city}} के निवासियों को बिना किसी तनाव के अपने दावे मिल सकें।",
    "local_advisory_hub_title": "{{city}} स्थानीय सलाहकार केंद्र",
    "local_advisory_hub_desc": "{{city}} में एक विश्वसनीय <0>{{service}} एजेंट</0> की तलाश है? हमारी टीम {{state}}-विशिष्ट बीमा नियमों में माहिर है और स्थानीय परिदृश्य की गहरी समझ रखती है, जिससे आपको {{areas}} जैसे क्षेत्रों में सर्वोत्तम संभव दावा सहायता मिलना सुनिश्चित होता है।",
    "support_services_title": "{{city}} में हमारी {{service}} सहायता सेवाएं",
    "service_list": {
      "new_policy": "{{city}} में नई {{service}} पॉलिसी जारी करना",
      "renewal": "मौजूदा {{service}} पॉलिसियों का नवीनीकरण",
      "lapsed_revival": "लैप्स पॉलिसी पुनरुद्धार सहायता",
      "claim_assistance": "दावा सूचना और निपटान सहायता",
      "portability": "{{city}} निवासियों के लिए पोर्टेबिलिटी",
      "nominee_updates": "स्थानीय नामांकित व्यक्ति और पता अपडेट"
    },
    "other_services_in_city": "{{city}} में अन्य सेवाएं",
    "service_in_nearby_cities": "आस-पास के शहरों में {{service}}",
    "serving_every_corner": "{{city}} के हर कोने में सेवा",
    "helpful_guides": "सहायक {{service}} गाइड",
    "call_advisor_in_city": "{{city}} में सलाहकार को कॉल करें",
    "whatsapp_support": "व्हाट्सएप सहायता",
}
const hiUI = {
    "show_less": "कम दिखाएं",
    "show_all": "सभी दिखाएं ({{count}})",
}

// Marathi (mr)
const mrLoc = {
    "breadcrumb_home": "होम",
    "best_support_in": "{{city}} मधील सर्वोत्तम <0>{{service}} मदत</0>",
    "secure_future_fallback": "{{city}} मधील सर्वात विश्वसनीय {{service}} योजनांसह आपले भविष्य सुरक्षित करा।",
    "doorstep_service_note": "तुम्ही {{area1}} किंवा {{area2}} मध्ये कुठेही असाल, आमचे तज्ञ सल्लागार तुमच्या दारापर्यंत वैयक्तिक मदत देतात।",
    "why_choose_title": "{{city}} मध्ये {{service}} साठी इन्शुरन्स सपोर्ट का निवडावा?",
    "specialist_title": "{{service}} तज्ञ",
    "regional_presence_title": "प्रादेशिक उपस्थिती",
    "regional_presence_desc": "<0>{{area1}}</0>, <1>{{area2}}</1> आणि पूर्ण {{city}} महानगर क्षेत्रात थेट डोरस्टेप सेवा उपलब्ध आहे। आमचे सल्लागार स्थानिक {{state}} विमा परिस्थिती समजून घेतात।",
    "fast_processing_title": "जलद स्थानिक प्रक्रिया",
    "fast_processing_desc": "{{city}} मधील बहुतेक {{service}} दस्तऐवज आमच्या समर्पित स्थानिक समन्वयकासह 24-48 तासांच्या आत पूर्ण केले जातात।",
    "trusted_families_title": "15 हजार कुटुंबांचा विश्वास",
    "trusted_families_desc": "आमच्या {{state}} प्रादेशिक कार्यालयात 98% क्लेम सेटलमेंट गुणोत्तर आहे, ज्यामुळे {{city}} मधील रहिवाशांना ताणमुक्त क्लेम मिळण्याची खात्री मिळते।",
    "local_advisory_hub_title": "{{city}} स्थानिक सल्ला केंद्र",
    "local_advisory_hub_desc": "{{city}} मध्ये विश्वसनीय <0>{{service}} एजंट</0> शोधत आहात? आमची टीम {{state}}-विशिष्ट विमा नियमांमध्ये तज्ञ आहे आणि स्थानिक परिस्थितीची सखोल समज आहे, ज्यामुळे तुम्हाला {{areas}} सारख्या भागात सर्वोत्तम क्लेम मदत मिळेल।",
    "support_services_title": "{{city}} मधील आमची {{service}} मदत सेवा",
    "service_list": {
      "new_policy": "{{city}} मध्ये नवीन {{service}} पॉलिसी",
      "renewal": "विद्यमान {{service}} पॉलिसी नूतनीकरण",
      "lapsed_revival": "लॅप्स पॉलिसी पुनरुज्जीवन मदत",
      "claim_assistance": "क्लेम माहिती आणि सेटलमेंट मदत",
      "portability": "{{city}} रहिवाशांसाठी पोर्टेबिलिटी",
      "nominee_updates": "स्थानिक नॉमिनी आणि पत्ता अपडेट"
    },
    "other_services_in_city": "{{city}} मधील इतर सेवा",
    "service_in_nearby_cities": "जवळील शहरांमध्ये {{service}}",
    "serving_every_corner": "{{city}} च्या प्रत्येक कोपऱ्यात सेवा",
    "helpful_guides": "उपयुक्त {{service}} मार्गदर्शक",
    "call_advisor_in_city": "{{city}} मधील सल्लागाराला कॉल करा",
    "whatsapp_support": "व्हाट्सॲप सपोर्ट",
}
const mrUI = {
    "show_less": "कमी दाखवा",
    "show_all": "सर्व दाखवा ({{count}})",
}

updateLang('hi', hiLoc, hiUI);
updateLang('mr', mrLoc, mrUI);
