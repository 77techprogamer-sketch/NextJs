import React from "react";
import { getStaticTranslation } from "@/lib/i18n-server";
import { Metadata } from "next";
import { Phone, MessageCircle, CheckCircle, MapPin, Star, Clock, Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Services in Dhanbad",
  description: "Expert insurance services in Dhanbad. LIC policy support, health insurance, motor insurance, claim assistance & policy revival. Free consultation.",
  keywords: ["insurance services Dhanbad", "LIC agent Dhanbad", "health insurance Dhanbad", "motor insurance Dhanbad", "insurance claim support Dhanbad", "LIC policy revival Dhanbad"],
};

const services = [
  { titleKey: "service_lic_policy", descKey: "service_lic_policy_desc", featuresKey: "service_lic_features" },
  { titleKey: "service_health", descKey: "service_health_desc", featuresKey: "service_health_features" },
  { titleKey: "service_motor", descKey: "service_motor_desc", featuresKey: "service_motor_features" },
  { titleKey: "service_claim", descKey: "service_claim_desc", featuresKey: "service_claim_features" },
  { titleKey: "service_term", descKey: "service_term_desc", featuresKey: "service_term_features" },
  { titleKey: "service_revival", descKey: "service_revival_desc", featuresKey: "service_revival_features" },
];

const areas = [
  "Dhanbad Central", "Dhanbad East", "Dhanbad West", "Dhanbad North", "Dhanbad South",
  "Sector 1", "Sector 2", "Sector 3", "Main Road", "Station Road",
  "Market Area", "Industrial Area", "Residential Zone", "Commercial Hub", "IT Park"
];

const faqs = [
  { qKey: "faq_find_agent_q", a: "Look for an IRDAI-registered advisor with experience in LIC products. Our team has 25+ years of experience serving Dhanbad residents. Call +91-9986634506 for a free consultation." },
  { qKey: "faq_revive_lapsed_q", a: "Yes! We help revive lapsed LIC policies across Dhanbad. Most policies can be revived within 5 years of the first unpaid premium. We handle the entire process for you." },
  { qKey: "faq_doorstep_q", a: "Yes. We provide free doorstep consultation across all Dhanbad areas. Our advisor will visit your home or office at a convenient time -- including evenings and weekends." },
  { qKey: "faq_rejected_claim_q", a: "Absolutely. We help appeal rejected claims through the insurer GRO, IRDAI Bima Bharosa portal, and the Insurance Ombudsman. We have a high claim success rate across all insurance types." },
];

export default async function CityInsurancePage() {
  const { t } = getStaticTranslation();
  const city = "Dhanbad";
  const cityOpt = { city };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-4"><MapPin className="w-4 h-4" />{t("insurance_services_in", "INSURANCE SERVICES IN {{city}}", cityOpt).toUpperCase()}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{t("hero_title", "Expert Insurance Services in {{city}}", cityOpt)}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">{t("hero_desc", "LIC policy support, health insurance, motor insurance, claim assistance & policy revival. Serving {{city}} and nearby areas. Free consultation.", cityOpt)}</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+919****4506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><Phone className="w-5 h-5" />{t("call_now_phone", "Call +91-99866 34506")}</a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Dhanbad" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><MessageCircle className="w-5 h-5" />{t("whatsapp_us", "WhatsApp Us")}</a>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 border-b">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="flex items-center justify-center gap-1 text-amber-500 mb-1"><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /></div><div className="text-sm text-slate-600">{t("rating_text", "Trusted by Families")}</div></div>
          <div><div className="flex items-center justify-center gap-1 text-emerald-500 mb-1"><Award className="w-5 h-5" /></div><div className="text-sm text-slate-600">{t("years_experience", "25+ Years")}</div></div>
          <div><div className="flex items-center justify-center gap-1 text-blue-500 mb-1"><Shield className="w-5 h-5" /></div><div className="text-sm text-slate-600">{t("irdai_registered", "IRDAI Registered")}</div></div>
          <div><div className="flex items-center justify-center gap-1 text-purple-500 mb-1"><Clock className="w-5 h-5" /></div><div className="text-sm text-slate-600">{t("support_hours", "Mon-Sat 9AM-9PM")}</div></div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">{t("our_services_title", "Our Services in {{city}}", cityOpt)}</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">{t("our_services_desc", "Comprehensive insurance support for individuals, families, and businesses across {{city}}.", cityOpt)}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const features = t(service.featuresKey, [], cityOpt);
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t(service.titleKey, "Service", cityOpt)}</h3>
                  <p className="text-slate-600 mb-4">{t(service.descKey, "Service description", cityOpt)}</p>
                  <ul className="space-y-2">
                    {Array.isArray(features) && features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{f}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">{t("areas_served_title", "Areas We Serve in {{city}}", cityOpt)}</h2>
          <p className="text-slate-600 text-center mb-12">{t("areas_served_desc", "Doorstep insurance assistance across all major neighborhoods of {{city}}.", cityOpt)}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">{t("faq_title", "Frequently Asked Questions — {{city}}", cityOpt)}</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-lg mb-2">{t(faq.qKey, "Question", cityOpt)}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t("final_cta_title", "Get Expert Insurance Help in {{city}}", cityOpt)}</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{t("final_cta_desc", "Free consultation. No obligation. Doorstep service available.")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919****4506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><Phone className="w-5 h-5" />{t("call_now_phone", "Call +91-99866 34506")}</a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Dhanbad" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><MessageCircle className="w-5 h-5" />{t("whatsapp_us", "WhatsApp Us")}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
