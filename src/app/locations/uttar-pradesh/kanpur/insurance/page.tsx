import React from "react";
import { Metadata } from "next";
import { Phone, MessageCircle, CheckCircle, MapPin, Star, Clock, Award, Shield, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Services in Kanpur 2026 | LIC, Health, Motor | Insurance Support",
  description: "Expert insurance services in Kanpur. LIC policy support, health insurance, motor insurance, claim assistance, and policy revival. Free consultation. Call +91-9986634506.",
  keywords: ["insurance services Kanpur", "LIC agent Kanpur", "health insurance Kanpur", "motor insurance Kanpur", "insurance claim support Kanpur", "LIC policy revival Kanpur"],
};

const services = [
  { title: "LIC Policy Support", desc: "Complete LIC policy assistance in Kanpur -- new policy purchase, premium payment, policy status check, revival of lapsed policies, and maturity claim support.", features: ["New LIC policy guidance", "Premium payment assistance", "Policy status check", "Lapsed policy revival", "Maturity claim support", "Loan against policy"] },
  { title: "Health Insurance", desc: "Find the best health insurance plans in Kanpur. Compare policies from all major insurers, get cashless hospitalization support at Manipal, Apollo, Fortis, Narayana Health, and claim assistance.", features: ["Policy comparison", "Cashless claim support", "Reimbursement claims", "Family floater plans", "Senior citizen plans", "Section 80D tax benefits"] },
  { title: "Motor Insurance", desc: "Car and bike insurance in Kanpur. Compare quotes, renew online, maximize No Claim Bonus, and get claim support for accidents and theft.", features: ["Online renewal", "NCB optimization", "Zero depreciation cover", "Engine protection", "Claim assistance", "Multi-insurer comparison"] },
  { title: "Claim Assistance", desc: "Stuck with a rejected insurance claim in Kanpur? Our experts help you fight back -- from internal grievance to Insurance Ombudsman to consumer court.", features: ["Claim rejection appeal", "GRO complaint filing", "Ombudsman support", "Documentation help", "Follow-up with insurer", "Legal guidance"] },
  { title: "Term Insurance Planning", desc: "Get the right term insurance coverage for your family in Kanpur. Compare plans from all insurers, calculate the right coverage amount, and buy online.", features: ["Coverage calculation", "Plan comparison", "Online purchase support", "Rider selection", "Medical test coordination", "Policy delivery"] },
  { title: "Policy Revival & Recovery", desc: "Has your LIC or insurance policy lapsed? We help revive policies in Kanpur -- even those lapsed for years. Recover your investment and restore life cover.", features: ["LIC policy revival", "Special revival schemes", "Paid-up value recovery", "Surrender value calculation", "Unclaimed amount recovery", "Lost policy bond retrieval"] },
];

const bangaloreTestimonials = [
  { name: "Ramesh K", area: "Indiranagar", text: "My LIC policy had lapsed 3 years ago. Insurance Support revived it within 2 weeks. Excellent service!", rating: 5 },
  { name: "Priya S", area: "Whitefield", text: "Got cashless health insurance claim approved at Manipal Hospital. They handled everything. Highly recommended.", rating: 5 },
  { name: "Suresh M", area: "JP Nagar", text: "Best LIC agent in Kanpur. Helped me compare and choose the right policy for my family. Very knowledgeable.", rating: 5 },
];

export default function CityInsurancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(16,185,129,0.15),_transparent),_radial-gradient(circle_at_70%_60%,_rgba(59,130,246,0.1),_transparent)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-4"><MapPin className="w-4 h-4" />INSURANCE SERVICES IN BANGALORE</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Expert Insurance Services in Kanpur</h1>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl">LIC policy support, health insurance, motor insurance, claim assistance & policy revival. Serving all areas of Kanpur with 25+ years of experience.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.2/5 Rating (23 reviews)</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4 text-emerald-400" /> IRDAI Registered</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-blue-400" /> 24/7 Support</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+919986634506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/25"><Phone className="w-5 h-5" />Call +91-99866 34506</a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Bangalore" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-green-500/25"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 px-4 border-b bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-2xl font-extrabold text-slate-900">15k+</div><div className="text-sm text-slate-500">Clients Served</div></div>
          <div><div className="text-2xl font-extrabold text-emerald-600">98%</div><div className="text-sm text-slate-500">Claims Settled</div></div>
          <div><div className="text-2xl font-extrabold text-blue-600">25+</div><div className="text-sm text-slate-500">Years Experience</div></div>
          <div><div className="text-2xl font-extrabold text-purple-600">79+</div><div className="text-sm text-slate-500">Cities in India</div></div>
        </div>
      </section>

      {/* Why Bangalore */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 text-center">Why Why Kanpur Trusts Insurance Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3"><Shield className="w-5 h-5 text-emerald-600" /></div>
              <h3 className="font-bold text-slate-900 mb-2">Local Bangalore Expertise</h3>
              <p className="text-sm text-slate-600">Our advisors know every area of Kanpur -- across all major areas. We understand local healthcare costs, insurance needs of residents, and Kanpur-specific claim processes.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
              <h3 className="font-bold text-slate-900 mb-2">Cashless at Top Hospitals</h3>
              <p className="text-sm text-slate-600">We ensure your health insurance works at SGPGIMS, Medanta Hospital, Apollo Hospital, Fortis Hospital, and 400+ network hospitals across Kanpur.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3"><Clock className="w-5 h-5 text-purple-600" /></div>
              <h3 className="font-bold text-slate-900 mb-2">Doorstep Service</h3>
              <p className="text-sm text-slate-600">We come to your home or office anywhere in Kanpur. No need to travel. Free consultation at your convenience -- evenings and weekends available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Services in Kanpur</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive insurance support for individuals, families, and businesses across Kanpur.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20help%20with%20" className="mt-4 inline-block text-emerald-600 font-semibold text-sm hover:underline">Get Help Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">What Kanpur Customers Say</h2>
          <p className="text-slate-600 text-center mb-10">Real feedback from families and professionals across Kanpur.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {bangaloreTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <Quote className="w-8 h-8 text-emerald-100 mb-2" />
                <p className="text-slate-700 text-sm italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{t.area}, Kanpur</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Areas We Serve in Kanpur</h2>
          <p className="text-slate-600 text-center mb-12">Doorstep insurance assistance across all major neighborhoods of Kanpur.</p>

          <div className="mb-8">
            <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>Central & North Bangalore</h3>
            <div className="flex flex-wrap gap-2">
              {["Kanpur City", "Kanpur East", "Kanpur West", "Kanpur North", "Kanpur South", "Main Road", "Station Road", "Market Area"].map((area, idx) => (
                <span key={idx} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-emerald-400 hover:text-emerald-700 transition-colors">{area}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>East & South Bangalore</h3>
            <div className="flex flex-wrap gap-2">
              {["Whitefield", "Marathahalli", "Bellandur", "Sarjapur Road", "Kadubeesanahalli", "Electronic City", "Bommanahalli", "Hosur Road", "Bannerghatta Road", "Kanakapura Road", "HSR Layout", "Kasavanahalli", "Kudlu Gate"].map((area, idx) => (
                <span key={idx} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-blue-400 hover:text-blue-700 transition-colors">{area}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>West Bangalore</h3>
            <div className="flex flex-wrap gap-2">
              {["Rajajinagar", "Vijayanagar", "Nagarbhavi", "Kengeri", "Kottigepalya", "Uttarahalli", "Padmanabhanagar", "Girinagar", "Kathriguppe"].map((area, idx) => (
                <span key={idx} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition-colors">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions — Kanpur</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">How do I find a reliable LIC agent in Kanpur?</h3><p className="text-slate-600">Look for an IRDAI-registered advisor with deep LIC product knowledge. Our Kanpur team has 25+ years of experience. Call +91-99866 34506 for a free, no-obligation consultation.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">Can you help revive my lapsed LIC policy in Kanpur?</h3><p className="text-slate-600">Yes. We revive lapsed LIC policies across Kanpur -- even those lapsed for years. Most policies can be revived within 5 years of the first unpaid premium. We handle all paperwork and follow-up.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">Do you provide doorstep service in Kanpur?</h3><p className="text-slate-600">Yes. We provide free doorstep consultation across all Kanpur areas. Our advisor will visit your home or office at a convenient time -- including evenings and weekends.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">My health claim was rejected. Can you help?</h3><p className="text-slate-600">Absolutely. We help appeal rejected claims through the insurer GRO, IRDAI Bima Bharosa portal, and the Insurance Ombudsman. Our claim success rate is over 98%.</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="font-bold text-lg mb-2">What is the minimum health insurance coverage for Bangalore?</h3><p className="text-slate-600">Given Bangalore&apos;s high healthcare costs, we recommend at least ₹15 lakhs for a family floter. A single hospitalization at leading hospitals can cost ₹2-5 lakhs. Working professionals should consider ₹25-50 lakhs to supplement employer cover.</p></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get Expert Insurance Help in Kanpur</h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">Free consultation. No obligation. Doorstep service available.</p>
          <p className="text-emerald-400 font-semibold mb-8 flex items-center justify-center gap-2"><Clock className="w-5 h-5" />Get a callback within 2 hours</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919986634506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/25"><Phone className="w-5 h-5" />Call +91-99866 34506</a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Bangalore" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-green-500/25"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
          <p className="text-slate-500 text-sm mt-6">Registered Office: Bahubali Nagar, Jalahalli, Bengaluru, Karnataka 560013</p>
        </div>
      </section>

      {/* Floating Call Button (Mobile) */}
      <a href="tel:+919986634506" className="fixed bottom-6 left-6 z-50 bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:bg-emerald-600 transition-colors md:hidden">
        <Phone className="w-6 h-6" />
      </a>
      <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20insurance%20help%20in%20Bangalore" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:bg-green-600 transition-colors md:hidden">
        <MessageCircle className="w-6 h-6" />
      </a>
    </main>
  );
}
