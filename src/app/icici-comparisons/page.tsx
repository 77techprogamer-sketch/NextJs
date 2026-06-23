import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Award, Users, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "ICICI Lombard vs Competitor Insurance Comparisons (2026) | Insurance Support",
  description: "Compare ICICI Lombard with ACKO, Digit, Coverfox, and private insurers. Factual comparison of claim settlement ratios, networks, premiums.",
  keywords: "ICICI Lombard vs ACKO, ICICI Lombard vs Digit, ICICI Lombard vs Coverfox, general insurance comparison India"
};

const comparisons = [
  { slug: "/icici-vs-private-general", title: "ICICI Lombard vs Private General Insurance", desc: "97.5% claim settlement, 10,000+ cashless hospitals, comprehensive product range vs competitive pricing.", highlights: ["97.5% vs 93-96% CSR", "10,000+ Hospitals", "24+ Years Experience", "7 Crore+ Customers"], icon: Shield, color: "blue" },
  { slug: "/icici-vs-acko", title: "ICICI Lombard vs ACKO", desc: "24+ year track record, 10,000+ hospital network, comprehensive product range vs digital-first approach.", highlights: ["97.5% vs 96.8% CSR", "10,000 vs 4,000 Hospitals", "5,000 vs 2,000 Garages", "24+ vs 9+ Years"], icon: Award, color: "purple" },
  { slug: "/icici-vs-digit", title: "ICICI Lombard vs Digit Insurance", desc: "Superior claim settlement, larger network, comprehensive products vs competitive premiums and faster digital.", highlights: ["97.5% vs 95.2% CSR", "10,000 vs 5,000 Hospitals", "5,000 vs 2,500 Garages", "24+ vs 8+ Years"], icon: Building2, color: "green" },
  { slug: "/icici-vs-coverfox", title: "ICICI Lombard vs Coverfox", desc: "3% higher claim settlement, 3x larger hospital network, comprehensive products vs digital-first.", highlights: ["97.5% vs 94.5% CSR", "10,000 vs 3,000 Hospitals", "5,000 vs 1,500 Garages", "24+ vs 12+ Years"], icon: Users, color: "amber" }
];

export default function IciciComparisonsIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">ICICI Lombard vs Competitor Comparisons</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">Factual, data-driven comparisons of ICICI Lombard against India top general insurance companies. Based on IRDAI public disclosures.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold"><Shield className="w-4 h-4" /> IRDAI Verified Data</div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold"><Award className="w-4 h-4" /> 7 Crore+ Customers</div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((comp) => {
              const Icon = comp.icon;
              const colors: Record<string, string> = { blue: "border-blue-200 hover:border-blue-400 bg-blue-50", purple: "border-purple-200 hover:border-purple-400 bg-purple-50", green: "border-green-200 hover:border-green-400 bg-green-50", amber: "border-amber-200 hover:border-amber-400 bg-amber-50" };
              return (
                <Link key={comp.slug} href={comp.slug} className={`block p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${colors[comp.color]}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm"><Icon className="w-6 h-6 text-slate-700" /></div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-slate-900 mb-2">{comp.title}</h2>
                      <p className="text-sm text-slate-600 mb-4">{comp.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">{comp.highlights.map((h, i) => (<span key={i} className="px-2 py-0.5 rounded bg-white text-xs font-semibold text-slate-700 border">{h}</span>))}</div>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">Read Full Comparison <ArrowRight className="w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Why ICICI Lombard Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4"><Shield className="w-8 h-8 text-blue-600" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">97.5% Claim Settlement</h3><p className="text-sm text-slate-600">Among the highest in the industry with 24+ years of consistent performance.</p></div>
            <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4"><Award className="w-8 h-8 text-green-600" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">10,000+ Cashless Hospitals</h3><p className="text-sm text-slate-600">Largest network in India. Cashless treatment at virtually any major hospital.</p></div>
            <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4"><Building2 className="w-8 h-8 text-amber-600" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">7 Crore+ Customers</h3><p className="text-sm text-slate-600">India largest private general insurer with pan-India presence.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
