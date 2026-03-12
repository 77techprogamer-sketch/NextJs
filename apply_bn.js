const fs = require('fs');
const path = require('path');

const bnPath = path.join(process.cwd(), 'public/locales/bn/translation.json');
let bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// High-priority UI translations
const uiTranslations = {
  "insurance_support": "ইন্সুরেন্স সাপোর্ট",
  "services_offered_link": "পরিষেবা সমূহ",
  "tools": "টুলস",
  "free_tools": "বিনামূল্যে টুলস",
  "loans": "লোন (ঋণ)",
  "resources": "রিসোর্স",
  "support": "সহায়তা",
  "about_us": "আমাদের সম্পর্কে",
  "get_quote": "কোটেশন পান",
  "call_now": "এখনই কল করুন",
  "chat_now": "চ্যাট করুন",
  "whatsapp_support": "হোয়াটসঅ্যাপ সাপোর্ট",
  "verified_advisor": "ভেরিফাইড উপদেষ্টা",
  "claim_settlement": "ক্লেইম সেটলমেন্ট",
  "doorstep_service": "ডোরস্টেপ সার্ভিস",
  "free_consultation": "বিনামূল্যে পরামর্শ",
  "life_insurance": "জীবন বীমা (Life Insurance)",
  "health_insurance": "স্বাস্থ্য বীমা (Health Insurance)",
  "term_insurance": "টার্ম ইন্সুরেন্স",
  "motor_insurance": "মোটর ইন্সুরেন্স",
};

// Map new SEO content
bn.service_seo_content = {
    "life-insurance": {
      "description": "জীবন বীমা শুধু সুরক্ষার জন্য নয়; এটি আপনার উত্তরাধিকার। আমাদের উপদেষ্টারা আপনাকে জটিল ক্লেইম সেটলমেন্ট প্রক্রিয়া এবং পলিসি রিভাইভালে সহায়তা করে যাতে আপনার পরিবারের আর্থিক স্থিতিশীলতা বজায় থাকে।",
      "highlights": ["ক্লেইম রিকভারি বিশেষজ্ঞ", "পলিসি রিভাইভাল সাপোর্ট", "ডোরস্টেপ ডকুমেন্ট সাহায্য"]
    },
    "health-insurance": {
      "description": "ক্যাশলেস হসপিটালাইজেশন, পলিসি কভারেজ এবং ঝামেলাহীন ক্লেইম প্রসেসিং সহ বিশ্বমানের স্বাস্থ্যসেবা নিশ্চিত করুন আপনার পুরো পরিবারের জন্য।",
      "highlights": ["ক্যাশলেস নেটওয়ার্ক সুবিধা", "নো-ক্লেইম বোনাস স্পষ্টতা", "দ্রুত প্রি-অথ সাপোর্ট"]
    },
    "motor-insurance": {
      "description": "থার্ড-পার্টি লায়াবিলিটি থেকে কম্প্রিহেনসিভ কভারেজ পর্যন্ত, আপনার গাড়ির জন্য সেরা IDV পান এবং সাথে ২৪/৭ রোডসাইড অ্যাসিস্ট্যান্স।",
      "highlights": ["তাৎক্ষণিক পলিসি ইস্যু", "সর্বোচ্চ IDV নিশ্চয়তা", "জিরো ডেপ কভারেজ"]
    },
    "term-insurance": {
      "description": "সুরক্ষার সবচেয়ে বিশুদ্ধ রূপ। সাশ্রয়ী প্রিমিয়ামে উচ্চ বিমা কভারেজ নিশ্চিত করুন এবং আপনার মনোনীতদের জন্য ঝামেলাহীন প্রক্রিয়া পান।",
      "highlights": ["উচ্চ বিমা কভারেজ", "মনোনীত ব্যক্তি সহায়তা", "ট্যাক্স বেনিফিট নির্দেশিকা"]
    }
};

// Apply UI translations
for (const key in uiTranslations) {
    bn[key] = uiTranslations[key];
}

// Update services_data (partially)
if (bn.services_data) {
  if (bn.services_data['life-insurance']) {
    bn.services_data['life-insurance'].title = "লাইফ ইন্সুরেন্স সাপোর্ট";
    bn.services_data['life-insurance'].description = "আপনার জীবন বীমা পলিসির জন্য বিশেষজ্ঞ সহায়তা পান।";
  }
}

fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));
console.log("Updated bn/translation.json with core Bengali translations");
