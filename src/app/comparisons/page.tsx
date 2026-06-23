import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Award, Users, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "LIC vs Competitor Insurance Comparisons (2026) | Insurance Support",
  description: "Compare LIC with HDFC Life, SBI Life, ICICI Prudential. Factual comparison of claim settlement ratios, premiums, bonuses.",
  keywords: "LIC vs HDFC Life, LIC vs SBI Life, LIC vs ICICI Pru, life insurance comparison India"
};

const comparisons = [
  { slug: "/lic-vs-private-life", title: "LIC vs Private Life Insurance", desc: "Sovereign guarantee, 98.5% claim settlement, 68+ year bonus consistency vs competitive pricing.", highlights: ["98.5% vs 94-97% CSR", "Govt Sovereign Guarantee", "68+ Years Operation", "250 Crore+ Policies"], icon: Shield, color: "blue" },
  { slug: "/lic-vs-hdfc-life", title: "LIC vs HDFC Life", desc: "LIC advantages: claim settlement (98.5% vs 97.2%), bonus consistency, rural reach, lower loan rates.", highlights: ["98.5% vs 97.2% CSR", "1000+ vs 700 Branches", "10% vs 11% Loan Rate", "68+ vs 23 Years"], icon: Award, color: "purple" },
  { slug: "/lic-vs-sbi-life", title: "LIC vs SBI Life", desc: "Sovereign guarantee and 68+ year track record vs SBI banking network.", highlights: ["98.5% vs 96.8% CSR", "Govt vs SBI Brand", "10% vs 10.5% Loan Rate", "Unbroken 68 Year Bonus"], icon: Building2, color: "green" },
  { slug: "/lic-vs-icici-pru", title: "LIC vs ICICI Prudential", desc: "Sovereign security vs digital innovation. 98.5% vs 95.7% claim settlement.", highlights: ["98.5% vs 95.7% CSR", "10% vs 11% Loan Rate", "1000+ vs 600 Branches", "Rural vs Urban Reach"], icon: Users, color: "amber" }
];

export default function ComparisonsIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">LIC vs Competitor Comparisons</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Factual, data-driven comparisons based on IRDAI public disclosures. No marketing fluff.</p>
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Why LIC Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4"><Shield className="w-8 h-8 text-blue-600" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">Sovereign Guarantee</h3><p className="text-sm text-slate-600">Government of India backs all LIC policies. No other insurer can offer this.</p></div>
            <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4"><Award className="w-8 h-8 text-green-600" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">98.5% Claim Settlement</h3><p className="text-sm text-slate-600">Highest in the industry with 68+ years of consistent performance.</p></div>
            <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4"><Building2 className="w-8 h-8 text-amber-600" /></div><h3 className="text-lg font-bold text-slate-900 mb-2">250 Crore+ Policies</h3><p className="text-sm text-slate-600">India largest life insurer with reach into every district.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
