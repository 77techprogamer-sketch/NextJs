const fs = require('fs');
const path = require('path');

const bnPath = path.join(process.cwd(), 'public/locales/bn/translation.json');
let bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

bn.location_page = {
    "breadcrumb_home": "হোম (Home)",
    "best_support_in": "সেরা <0>{{service}} সহায়তা</0> - {{city}}",
    "secure_future_fallback": "{{city}}-এ সবচেয়ে নির্ভরযোগ্য {{service}} পরিকল্পনার সাথে আপনার ভবিষ্যৎ সুরক্ষিত করুন।",
    "doorstep_service_note": "আপনি {{area1}} বা {{area2}}-এ যেখানেই থাকুন না কেন, আমাদের বিশেষজ্ঞ উপদেষ্টারা আপনার দোরগোড়ায় ব্যক্তিগত সহায়তা প্রদান করবেন।",
    "why_choose_title": "{{city}}-এ {{service}}-এর জন্য কেন ইনস্যুরেন্স সাপোর্ট বেছে নেবেন?",
    "specialist_title": "{{service}} বিশেষজ্ঞ",
    "regional_presence_title": "আঞ্চলিক উপস্থিতি",
    "regional_presence_desc": "<0>{{area1}}</0>, <1>{{area2}}</1> এবং পুরো {{city}} মেট্রোপলিটন অঞ্চলে সরাসরি ডোরস্টেপ পরিষেবা উপলব্ধ। আমাদের উপদেষ্টারা স্থানীয় {{state}} ইনস্যুরেন্স পরিস্থিতি বোঝেন।",
    "fast_processing_title": "দ্রুত স্থানীয় প্রসেসিং",
    "fast_processing_desc": "{{city}}-এ বেশিরভাগ {{service}} নথি আমাদের নিবেদিত স্থানীয় সমন্বয়কারীর মাধ্যমে ২৪-৪৮ ঘণ্টার মধ্যে প্রসেস করা হয়।",
    "trusted_families_title": "১৫ হাজারেরও বেশি পরিবারের বিশ্বস্ত",
    "trusted_families_desc": "আমাদের {{state}} আঞ্চলিক অফিসের ৯৮% ক্লেইম সেটলমেন্ট রেশিও রয়েছে, যা নিশ্চিত করে যে {{city}}-এর বাসিন্দারা কোনো মানসিক চাপ ছাড়াই তাদের ক্লেইম সেটল করতে পারেন।",
    "local_advisory_hub_title": "{{city}} স্থানীয় বিশেষজ্ঞ কেন্দ্র",
    "local_advisory_hub_desc": "{{city}}-এ একটি নির্ভরযোগ্য <0>{{service}} এজেন্ট</0> খুঁজছেন? আমাদের দল {{state}}-নির্দিষ্ট ইনস্যুরেন্স নিয়মে বিশেষজ্ঞ এবং স্থানীয় পরিস্থিতি সম্পর্কে গভীর ধারণা রাখে, যা {{areas}}-এর মতো এলাকায় আপনার সেরা ক্লেইম সাপোর্ট পাওয়া নিশ্চিত করে।",
    "support_services_title": "{{city}}-এ আমাদের {{service}} সহায়তা পরিষেবা",
    "service_list": {
      "new_policy": "{{city}}-এ নতুন {{service}} পলিসি ইস্যু",
      "renewal": "বিদ্যমান {{service}} পলিসি নবায়ন",
      "lapsed_revival": "মেয়াদোত্তীর্ণ পলিসি পুনরুজ্জীবন (Revival) সাপোর্ট",
      "claim_assistance": "ক্লেইম ইনটিমেশন এবং সেটলমেন্ট সহায়তা",
      "portability": "{{city}}-এর বাসিন্দাদের জন্য পোর্টেবিলিটি সুবিধা",
      "nominee_updates": "স্থানীয় মনোনীত ব্যক্তি (Nominee) এবং ঠিকানা আপডেট"
    },
    "other_services_in_city": "{{city}}-এ অন্যান্য পরিষেবা",
    "other_service_advisor": "{{city}}-এ {{service}} উপদেষ্টা",
    "service_in_nearby_cities": "নিকটস্থ শহরগুলিতে {{service}}",
    "nearby_service_advisor": "{{city}}-এ {{service}} উপদেষ্টা",
    "serving_every_corner": "{{city}}-এর প্রতিটি কোণায় আমাদের সেবা",
    "serving_every_corner_desc": "{{area1}} থেকে {{areaLast}} পর্যন্ত, আমাদের নিবেদিত দল নিশ্চিত করে যে আপনার ইনস্যুরেন্স প্রয়োজনের জন্য আপনাকে কোথাও ভ্রমণ করতে হবে না। আমরা {{areas}} এবং পার্শ্ববর্তী অঞ্চলে {{service}}-এর জন্য স্থানীয় সহায়তা প্রদান করি।",
    "helpful_guides": "সহায়ক {{service}} নির্দেশিকা",
    "rejected_case_recovery": "বাতিল ক্লেইম রিকভারি",
    "rejected_case_recovery_desc": "শিখুন কীভাবে আমরা {{city}}-এর বাসিন্দাদের বাতিল করা ইনস্যুরেন্স ক্লেইম ফিরে পেতে সাহায্য করি।",
    "duplicate_policy_guide": "ডুপ্লিকেট পলিসি গাইড",
    "duplicate_policy_guide_desc": "ঝামেলা ছাড়াই {{city}}-এ ডুপ্লিকেট LIC পলিসি পাওয়ার উপায়।",
    "call_advisor_in_city": "{{city}}-এ উপদেষ্টাকে কল করুন",
    "whatsapp_support": "হোয়াটসঅ্যাপ সাপোর্ট",
    "nearby_centers": "নিকটস্থ ইনস্যুরেন্স সাপোর্ট সেন্টার",
    "request_quote_title": "{{service}} কোটেশনের জন্য আবেদন করুন",
    "request_quote_subtitle": "{{city}}-এর বাসিন্দাদের জন্য যাচাইকৃত সহায়তা।",
    "service_hours": "সেবার সময়",
    "mon_sat": "সোম - শনি:",
    "sundays": "রবিবার:",
    "on_appointment": "অ্যাপয়েন্টমেন্ট অনুযায়ী"
};

// UI Keys
bn.show_less = "কম দেখুন";
bn.show_all = "সব দেখুন ({{count}})";
bn.hlv_calculator_new = "HLV ক্যালকুলেটর (নতুন)";
bn.insurance_support_guide = "ইনস্যুরেন্স সাপোর্ট গাইড";
bn.view_all_services = "সব পরিষেবা দেখুন";
bn.view_all_locations = "সব ৩০+ লোকেশন দেখুন";
bn.trending_now = "ট্রেন্ডিং";
bn.site_map = "সাইট ম্যাপ";
bn.xml_sitemap = "XML সাইটম্যাপ";
bn.irdai_certified_advisors = "IRDAI প্রত্যয়িত উপদেষ্টা";
bn.disclaimer_label = "দাবিত্যাগ (Disclaimer):";
bn.disclaimer_text = "বীমা একটি অনুরোধের বিষয়। ইনস্যুরেন্স সাপোর্ট একটি পেশাদার উপদেষ্টা সংস্থা যা IRDAI অনুমোদিত বীমা পণ্যগুলির জন্য পরামর্শ প্রদান করে। সমস্ত পলিসি ইস্যু এবং ক্লেইম সেটলমেন্ট সংশ্লিষ্ট বীমা কোম্পানিগুলির শর্তাবলী এবং আন্ডাররাইটিংয়ের অধীনে।";

fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));
console.log("Updated bn/translation.json with full location page keys");
