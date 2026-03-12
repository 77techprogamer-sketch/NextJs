const fs = require('fs');
const path = require('path');

const enPath = path.join(process.cwd(), 'public/locales/en/translation.json');
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

en.location_page = {
    "breadcrumb_home": "Home",
    "best_support_in": "Best <0>{{service}} Support</0> in {{city}}",
    "secure_future_fallback": "Secure your future with the most reliable {{service}} plans in {{city}}.",
    "doorstep_service_note": "Whether you are in {{area1}} or {{area2}}, our expert advisors provide personalized support at your doorstep.",
    "why_choose_title": "Why Choose Insurance Support for {{service}} in {{city}}?",
    "specialist_title": "{{service}} Specialist",
    "regional_presence_title": "Regional Presence",
    "regional_presence_desc": "Direct doorstep service available in <0>{{area1}}</0>, <1>{{area2}}</1>, and throughout the {{city}} metropolitan region. Our advisors understand the local {{state}} insurance climate.",
    "fast_processing_title": "Fast Local Processing",
    "fast_processing_desc": "Most {{service}} documents in {{city}} are processed within 24-48 hours with our dedicated local coordinator.",
    "trusted_families_title": "Trusted by 15k+ Families",
    "trusted_families_desc": "Our {{state}} regional office has a 98% settlement ratio, ensuring {{city}} residents get their claims settled without stress.",
    "local_advisory_hub_title": "{{city}} Local Advisory Hub",
    "local_advisory_hub_desc": "Looking for a reliable <0>{{service}} agent in {{city}}</0>? Our team specializes in {{state}}-specific insurance regulations and has a deep understanding of the local landscape, ensuring you get the best possible claim support in areas like {{areas}}.",
    "support_services_title": "Our {{service}} Support Services in {{city}}",
    "service_list": {
      "new_policy": "New {{service}} Policy Issuance in {{city}}",
      "renewal": "Renewal of Existing {{service}} Policies",
      "lapsed_revival": "Lapsed Policy Revival Support",
      "claim_assistance": "Claim Intimation & Settlement Assistance",
      "portability": "Portability for {{city}} Residents",
      "nominee_updates": "Local Nominee & Address Updates"
    },
    "other_services_in_city": "Other Services in {{city}}",
    "other_service_advisor": "{{service}} Advisor in {{city}}",
    "service_in_nearby_cities": "{{service}} in Nearby Cities",
    "nearby_service_advisor": "{{service}} Advisor in {{city}}",
    "serving_every_corner": "Serving Every Corner of {{city}}",
    "serving_every_corner_desc": "From {{area1}} to {{areaLast}}, our dedicated team ensures you don't have to travel for your insurance needs. We cover {{areas}} and surrounding regions with localized support for {{service}}.",
    "helpful_guides": "Helpful {{service}} Guides",
    "rejected_case_recovery": "Rejected Case Recovery",
    "rejected_case_recovery_desc": "Learn how we help {{city}} residents recover rejected insurance claims.",
    "duplicate_policy_guide": "Duplicate Policy Guide",
    "duplicate_policy_guide_desc": "Getting a duplicate LIC policy in {{city}} without the hassle.",
    "call_advisor_in_city": "Call Advisor in {{city}}",
    "whatsapp_support": "WhatsApp Support",
    "nearby_centers": "Nearby Insurance Support Centers",
    "request_quote_title": "Request {{service}} Quote",
    "request_quote_subtitle": "Verified support for {{city}} residents.",
    "service_hours": "Service Hours",
    "mon_sat": "Mon - Sat:",
    "sundays": "Sundays:",
    "on_appointment": "On Appointment"
};

// Also add missing UI keys for Footer expansion
en.show_less = "Show Less";
en.show_all = "Show All ({{count}})";
en.hlv_calculator_new = "HLV Calculator (New)";
en.insurance_support_guide = "Insurance Support Guide";
en.view_all_services = "View All Services";
en.view_all_locations = "View All 30+ Locations";
en.trending_now = "Trending Now";
en.site_map = "Site Map";
en.xml_sitemap = "XML Sitemap";
en.irdai_certified_advisors = "IRDAI CERTIFIED ADVISORS";
en.disclaimer_label = "Disclaimer:";
en.disclaimer_text = "Insurance is a subject matter of solicitation. Insurance Support is a professional advisory firm providing consultancy for IRDAI approved insurance products. All policy issuance and claim settlements are subject to the terms and conditions and underwriting of the respective insurance companies.";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log("Updated en/translation.json with full location page keys");
