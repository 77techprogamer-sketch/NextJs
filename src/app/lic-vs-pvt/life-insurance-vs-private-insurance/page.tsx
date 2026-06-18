import React from 'react';
import { Metadata } from 'next';
import ComparisonHero from '@/components/comparisons/ComparisonHero';
import ComparisonTable, { ComparisonRow } from '@/components/comparisons/ComparisonTable';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'LIC vs Private Life Insurance (2026 Comparison) | Insurance Concierge',
  description: 'Should you buy life insurance from LIC or a private insurer like HDFC, ICICI, or Max Life? Compare claim settlement ratios, premiums, and features to decide.',
  keywords: 'LIC vs Private insurance, best life insurance India, LIC vs HDFC Life, LIC vs ICICI Pru, term insurance comparison'
};

export default function LicVsPvtPage() {
  const tableRows: ComparisonRow[] = [
    { label: 'Sovereign Guarantee (Govt Backing)', values: [true, false], highlightWinner: 0 },
    { label: 'Claim Settlement Ratio (Average)', values: ['~98.5%', '~97-99%'], highlightWinner: 1 },
    { label: 'Premium Costs (Term Insurance)', values: ['Higher (Generally)', 'Lower / Competitive'], highlightWinner: 1 },
    { label: 'Digital Experience / App', values: ['Basic', 'Advanced & Seamless'], highlightWinner: 1 },
    { label: 'Product Innovation (Riders/Flexibility)', values: ['Traditional', 'Highly Customisable'], highlightWinner: 1 },
    { label: 'Rural / Tier-3 Presence', values: ['Excellent', 'Limited'], highlightWinner: 0 }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is LIC better than private life insurance companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LIC offers a sovereign guarantee and unmatched rural presence, making it highly trusted. However, private insurers typically offer cheaper term plans, better digital experiences, and more customizable features."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <ComparisonHero 
        title={<>LIC <span className="text-blue-400">vs</span> Private Insurers</>}
        subtitle="The ultimate 2026 guide to choosing between India's trusted giant and agile private competitors."
        benefits={['Latest 2026 Data', 'Unbiased Comparison', 'Expert Recommendations']}
        ctaText="Get a Free Policy Audit"
      />

      <div className="container mx-auto px-4 max-w-5xl -mt-8 relative z-20">
        <ComparisonTable 
          headers={['LIC of India', 'Private Insurers (HDFC, ICICI, Max, etc.)']}
          rows={tableRows}
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose LIC?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">1</span>
                <p className="text-slate-600"><strong>Sovereign Guarantee:</strong> Section 37 of the LIC Act provides a government guarantee on the sum assured and bonuses.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">2</span>
                <p className="text-slate-600"><strong>Unmatched Trust:</strong> Decades of consistent claim settlement and massive asset base.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Private?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">1</span>
                <p className="text-slate-600"><strong>Cost Effective:</strong> Term insurance premiums are significantly lower than LIC for the same coverage.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">2</span>
                <p className="text-slate-600"><strong>Modern Features:</strong> Better riders (like critical illness), flexible payout options, and seamless app-based tracking.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
