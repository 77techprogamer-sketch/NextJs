import React from "react";
import { Metadata } from "next";
import { Phone, MessageCircle, CheckCircle, MapPin, Star, Clock, Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Services in Chennai 2026 | LIC, Health, Motor | Insurance Support",
  description: "Expert insurance services in Chennai. LIC policy support, health insurance, motor insurance, claim assistance, and policy revival. Free consultation. Call +91-9986634506.",
  keywords: ["insurance services Chennai", "LIC agent Chennai", "health insurance Chennai", "motor insurance Chennai", "insurance claim support Chennai", "LIC policy revival Chennai"],
};

const services = [
  { title: "LIC Policy Support", desc: "Complete LIC policy assistance in Chennai -- new policy purchase, premium payment, policy status check, revival of lapsed policies, and maturity claim support.", features: ["New LIC policy guidance", "Premium payment assistance", "Policy status check", "Lapsed policy revival", "Maturity claim support", "Loan against policy"] },
  { title: "Health Insurance", desc: "Find the best health insurance plans in Chennai. Compare policies from all major insurers, get cashless hospitalization support, and claim assistance.", features: ["Policy comparison", "Cashless claim support", "Reimbursement claims", "Family floater plans", "Senior citizen plans", "Section 80D tax benefits"] },
  { title: "Motor Insurance", desc: "Car and bike insurance in Chennai. Compare quotes, renew online, maximize No Claim Bonus, and get claim support for accidents and theft.", features: ["Online renewal", "NCB optimization", "Zero depreciation cover", "Engine protection", "Claim assistance", "Multi-insurer comparison"] },
  { title: "Claim Assistance", desc: "Stuck with a rejected insurance claim in Chennai? Our experts help you fight back -- from internal grievance to Insurance Ombudsman to consumer court.", features: ["Claim rejection appeal", "GRO complaint filing", "Ombudsman support", "Documentation help", "Follow-up with insurer", "Legal guidance"] },
  { title: "Term Insurance Planning", desc: "Get the right term insurance coverage for your family in Chennai. Compare plans from all insurers, calculate the right coverage amount, and buy online.", features: ["Coverage calculation", "Plan comparison", "Online purchase support", "Rider selection", "Medical test coordination", "Policy delivery"] },
  { title: "Policy Revival & Recovery", desc: "Has your LIC or insurance policy lapsed? We help revive policies in Chennai -- even those lapsed for years. Recover your investment and restore life cover.", features: ["LIC policy revival", "Special revival schemes", "Paid-up value recovery", "Surrender value calculation", "Unclaimed amount recovery", "Lost policy bond retrieval"] },
];

export default function CityInsurancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-4"><MapPin className="w-4 h-4" />INSURANCE SERVICES IN Chennai</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Expert Insurance Services in Chennai</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">LIC policy support, health insurance, motor insurance, claim assistance, and policy revival. Serving Chennai and nearby areas. Free consultation.</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+919****4506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><Phone className="w-5 h-5" />Call +91-9986634506</a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Chennai" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 border-b">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="flex items-center justify-center gap-1 text-amber-500 mb-1"><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /></div><div className="text-sm text-slate-600">4.9/5 Rating</div></div>
          <div><div className="flex items-center justify-center gap-1 text-emerald-500 mb-1"><Award className="w-5 h-5" /></div><div className="text-sm text-slate-600">25+ Years</div></div>
          <div><div className="flex items-center justify-center gap-1 text-blue-500 mb-1"><Shield className="w-5 h-5" /></div><div className="text-sm text-slate-600">IRDAI Registered</div></div>
          <div><div className="flex items-center justify-center gap-1 text-purple-500 mb-1"><Clock className="w-5 h-5" /></div><div className="text-sm text-slate-600">24/7 Support</div></div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Services in Chennai</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive insurance support for individuals, families, and businesses in Chennai.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Areas We Serve in Chennai</h2>
          <p className="text-slate-600 text-center mb-12">Doorstep insurance assistance across all major areas of Chennai.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Chennai Central", "Chennai East", "Chennai West", "Chennai North", "Chennai South", "Sector 1", "Sector 2", "Sector 3", "Main Road", "Station Road", "Market Area", "Industrial Area", "Residential Zone", "Commercial Hub", "IT Park"].map((area, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">How do I find a good LIC agent in Chennai?</h3><p className="text-slate-600">Look for an IRDAI-registered advisor with experience in LIC products. Our team has 25+ years of experience serving Chennai residents. Call +91-9986634506 for a free consultation.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">Can you help revive my lapsed LIC policy in Chennai?</h3><p className="text-slate-600">Yes! We help revive lapsed LIC policies across Chennai. Most policies can be revived within 5 years of the first unpaid premium. We handle the entire process for you.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">How do I compare health insurance plans in Chennai?</h3><p className="text-slate-600">We compare plans from all major insurers based on your age, medical history, budget, and coverage needs. Get a personalized comparison for free.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">My insurance claim was rejected. Can you help?</h3><p className="text-slate-600">Absolutely. We help appeal rejected claims through the insurer GRO, IRDAI Bima Bharosa, and the Insurance Ombudsman. Our success rate is over 98%.</p></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Get Expert Insurance Help in Chennai</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Free consultation. No obligation. Call or WhatsApp us today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919****4506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><Phone className="w-5 h-5" />Call +91-9986634506</a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Chennai" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
