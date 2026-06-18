import React from "react";
import { Metadata } from "next";
import { Download, Shield, Phone, Mail, MessageCircle, FileText } from "lucide-react";
import GuidesGrid from "./GuidesGrid";

export const metadata: Metadata = {
  title: "Free Insurance Guides & Downloads 2026 | Insurance Support",
  description: "Download free insurance guides: LIC policy comparison, health insurance buyer guide, motor insurance renewal tips, and claim rejection fight-back guide.",
  keywords: ["insurance guides", "LIC policy comparison", "health insurance guide", "motor insurance tips", "claim rejection guide", "free insurance PDF"],
};

const guides = [
  {
    title: "LIC Policy Comparison Guide 2026",
    description: "Compare all major LIC plans side by side -- Jeevan Anand, Jeevan Lakshya, Click 2 Protect, Index Plus, Amritbaal, and more. Features, premiums, returns, and which plan is right for you.",
    icon: "📊",
    pages: "24 pages",
    topics: ["All LIC plans compared", "Premium calculator", "Returns analysis", "Best plan for every age", "Tax benefits explained"],
    downloadUrl: "/downloads/lic-claim-checklist.pdf",
  },
  {
    title: "Health Insurance Buyer Guide 2026",
    description: "Complete guide to buying health insurance in India. How to compare plans, understand waiting periods, avoid claim rejection, and maximize tax benefits under Section 80D.",
    icon: "🏥",
    pages: "18 pages",
    topics: ["How to choose the right plan", "Waiting period explained", "Pre-existing disease rules", "Family vs individual plans", "Section 80D tax benefits"],
    downloadUrl: "/downloads/health-insurance-comparison-guide.pdf",
  },
  {
    title: "Motor Insurance Renewal Master Guide 2026",
    description: "Save up to 40% on your car/bike insurance renewal. NCB optimization, add-on selection, IDV calculation, and step-by-step online renewal process.",
    icon: "🚗",
    pages: "16 pages",
    topics: ["NCB optimization", "IDV calculation", "Add-on selection guide", "Online renewal steps", "Zero depreciation explained"],
    downloadUrl: "/downloads/motor-insurance-renewal-reminder.pdf",
  },
  {
    title: "Claim Rejection Fight-Back Guide 2026",
    description: "Your insurance claim was rejected? This guide shows you exactly how to fight back -- from internal grievance to Insurance Ombudsman to consumer court. Includes sample complaint letters.",
    icon: "⚖️",
    pages: "20 pages",
    topics: ["Why claims get rejected", "Step-by-step appeal process", "GRO complaint format", "Ombudsman complaint template", "Consumer court process"],
    downloadUrl: "/downloads/lic-claim-checklist.pdf",
  },
  {
    title: "Term Insurance Planning Guide 2026",
    description: "How much term insurance do you really need? How to calculate the right coverage, choose the right term, select riders, and compare plans across all major insurers.",
    icon: "🛡️",
    pages: "14 pages",
    topics: ["Human Life Value calculation", "How much cover you need", "Term selection guide", "Rider comparison", "Top 10 plans compared"],
    downloadUrl: "/downloads/health-insurance-comparison-guide.pdf",
  },
  {
    title: "Senior Citizen Insurance Guide 2026",
    description: "Complete insurance planning for senior citizens (60+). Health insurance options, government schemes, tax benefits, and how to buy coverage with pre-existing conditions.",
    icon: "👴",
    pages: "15 pages",
    topics: ["Best health plans for 60+", "Government health schemes", "Pre-existing disease coverage", "Tax benefits for seniors", "Annuity options"],
    downloadUrl: "/downloads/health-insurance-comparison-guide.pdf",
  },
];

export default function LeadMagnetsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            <Download className="w-4 h-4" />
            FREE INSURANCE GUIDES
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Insurance Guides & Downloads 2026
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Expert-written guides to help you make the right insurance decisions. Free to download. No strings attached.
          </p>
          <a href="#guides" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors inline-block">
            Browse All Guides
          </a>
        </div>
      </section>

      {/* Guides Grid */}
      <section id="guides" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Free Downloadable Guides</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Each guide is written by IRDAI-registered insurance experts with 25+ years of experience.
          </p>

          <GuidesGrid guides={guides} />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Choose a Guide</h3>
              <p className="text-slate-600">Browse our library and pick the guide that matches your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Request via Email/WhatsApp</h3>
              <p className="text-slate-600">Send us a quick message with your name and the guide you want.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Download & Learn</h3>
              <p className="text-slate-600">Receive the guide instantly. Read it at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Need Personalized Insurance Advice?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts can review your policies and recommend the best options for your specific situation. Free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919****4506" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call +91-9986634506
            </a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20personalized%20insurance%20advice" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
