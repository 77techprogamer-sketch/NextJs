import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Download, Shield, FileText, Phone, Mail, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Insurance Claim Checklist 2026 | Download PDF | Insurance Support',
  description: 'Download our free Insurance Claim Checklist for 2026. Covers LIC death claims, health insurance claims, and motor insurance claims. Step-by-step document checklist to ensure your claim is never rejected.',
  keywords: ['insurance claim checklist', 'LIC claim documents', 'health insurance claim checklist', 'motor insurance claim', 'claim rejection prevention', 'insurance claim PDF'],
  openGraph: {
    title: 'Free Insurance Claim Checklist 2026 | Download PDF',
    description: 'Step-by-step document checklist to ensure your insurance claim is never rejected.',
    type: 'website',
  }
};

const claimTypes = [
  {
    title: 'LIC Death Claim Checklist',
    icon: '💼',
    items: [
      'Original policy bond/certificate',
      'Death certificate (municipal/panchayat issued)',
      'Claimant identity proof (Aadhaar/PAN)',
      'Claim form (Form 3783/3801)',
      'Cancelled cheque of nominee bank account',
      'Medical records / hospital discharge summary',
      'Attending physician certificate',
      'FIR copy (if accidental death)',
      'Post-mortem report (if applicable)',
      'Employer certificate (if employed)',
    ]
  },
  {
    title: 'Health Insurance Claim Checklist',
    icon: '🏥',
    items: [
      'Policy number and insurer details',
      'Pre-authorization form (for cashless)',
      'Doctor prescription and treatment plan',
      'Hospital admission/discharge summary',
      'All bills and receipts (itemized)',
      'Diagnostic reports (lab, X-ray, MRI)',
      'Medicine prescriptions and pharmacy bills',
      'Identity proof of patient',
      'KYC documents (Aadhaar/PAN)',
      'Previous medical records (if PED claimed)',
    ]
  },
  {
    title: 'Motor Insurance Claim Checklist',
    icon: '🚗',
    items: [
      'Policy number and RC copy',
      'Driving license of driver',
      'FIR copy (for accidents/theft)',
      'Vehicle damage photographs (all angles)',
      'Repair estimate from authorized garage',
      'Original bills and payment receipts',
      'No Claim Bonus certificate',
      'Transfer papers (if vehicle sold)',
      'Spot panchnama (if applicable)',
      'Insurance claim form',
    ]
  },
  {
    title: 'LIC Policy Revival Checklist',
    icon: '🔄',
    items: [
      'Policy number (check via LIC portal if lost)',
      'Last premium paid receipt',
      'Identity proof (Aadhaar/PAN)',
      'Address proof',
      'Medical examination reports (if lapsed > 6 months)',
      'Declaration of good health',
      'Outstanding premium calculation',
      'Interest on outstanding premiums',
      'Revival application form',
      'Bank account details',
    ]
  }
];

const tips = [
  'File your claim within 24-48 hours of the event',
  'Keep photocopies of ALL documents submitted',
  'Note down the claim reference number',
  'Follow up every 3-5 days for status updates',
  'Escalate to GRO if not resolved in 15 days',
  'Approach Insurance Ombudsman if rejected unfairly',
];

export default function ClaimChecklistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <Download className="w-4 h-4" />
            FREE DOWNLOADABLE CHECKLISTS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Insurance Claim Checklist 2026
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Never miss a document again. Download our comprehensive checklists for LIC, health, motor, and policy revival claims. Used by 15,000+ policyholders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#checklists" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View All Checklists
            </a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20help%20with%20my%20insurance%20claim" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Get Expert Help
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-slate-900">15,000+</div>
            <div className="text-sm text-slate-500">Claims Assisted</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">98%</div>
            <div className="text-sm text-slate-500">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">4</div>
            <div className="text-sm text-slate-500">Checklist Types</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">100%</div>
            <div className="text-sm text-slate-500">Free Resource</div>
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section id="checklists" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Complete Document Checklists</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Every document you need for each type of insurance claim. Print these checklists and tick off each item as you gather them.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {claimTypes.map((type, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{type.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                </div>
                <ul className="space-y-3">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Pro Tips to Avoid Claim Rejection</h2>
          <p className="text-slate-600 text-center mb-12">Follow these expert tips to ensure your claim is processed smoothly.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-700 font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Need Help With Your Insurance Claim?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our IRDAI-registered experts have helped 15,000+ families recover their rightful claims. Get a free consultation today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919986634506" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call +91-9986634506
            </a>
            <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20need%20help%20with%20my%20insurance%20claim" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
