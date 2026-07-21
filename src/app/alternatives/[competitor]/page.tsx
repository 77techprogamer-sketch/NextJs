import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCompetitorBySlug, competitors } from '@/data/competitors';
import ClaimStressTest from '@/components/lead-magnets/ClaimStressTest';
import EscalationRoadmap from '@/components/lead-magnets/EscalationRoadmap';
import { ShieldCheck, AlertCircle, ArrowRight, UserCheck, PhoneCall, FileSearch } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

interface Props {
  params: { competitor: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const competitor = getCompetitorBySlug(params.competitor);
  
  if (!competitor) {
    return {};
  }

  return {
    title: `Frustrated with ${competitor.name}? Get Real Expert Help | Insurance Concierge`,
    description: `Struggling with a ${competitor.name} claim rejection or poor service? Discover why a dedicated human advisor is better than an automated portal. Get expert help today.`,
    keywords: competitor.seoKeywords.join(', '),
  };
}

export async function generateStaticParams() {
  return competitors.map((competitor) => ({
    competitor: competitor.slug,
  }));
}

export default function CompetitorAlternativePage({ params }: Props) {
  const competitor = getCompetitorBySlug(params.competitor);

  if (!competitor) {
    notFound();
  }

  // FAQ Schema Generation
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What to do if ${competitor.name} rejects my health insurance claim?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `If your claim through ${competitor.name} is rejected, do not panic. Download our Escalation Roadmap or use our Claim Stress Test to identify the reason. Often, automated portals reject claims for minor documentation errors. A dedicated expert advisor can help you appeal and escalate the issue manually.`
        }
      },
      {
        "@type": "Question",
        "name": `How is a dedicated advisor different from ${competitor.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While ${competitor.name} (${competitor.type}) is good for comparing basic prices, an expert advisor provides personalized pre-policy medical assessments and actively fights for your claim settlement during emergencies, bypassing chatbots and automated queues.`
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-4 border border-red-100">
            <AlertCircle className="w-4 h-4" />
            <span>Are you frustrated with {competitor.name}?</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stop Fighting Automated Systems. <br className="hidden md:block" />
            <span className="text-blue-600">Get a Dedicated Advocate.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {competitor.description}
          </p>
        </section>

        {/* Empathy / Complaints Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Common Frustrations with {competitor.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {competitor.commonComplaints.map((complaint, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-slate-700 font-medium">{complaint}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Solution / Why Us Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Human-Led Alternative</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{competitor.whyUs}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSearch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pre-Underwriting</h3>
              <p className="text-slate-600">We analyze your medical history before policy issuance to ensure zero loopholes during claims.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center transform md:-translate-y-4 shadow-lg border-blue-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Claim Escalation</h3>
              <p className="text-slate-600">We bypass chatbots. If a claim is stuck, we use direct channels to force manual reviews.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Concierge</h3>
              <p className="text-slate-600">You get the direct phone number of an expert advisor. No call centers, no generic advice.</p>
            </div>
          </div>
        </section>

        {/* Actionable Help (Lead Magnets) */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Stuck Right Now? Let&apos;s Fix It.</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">Use our free tools below to audit your policy or escalate a pending claim immediately.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white/5 rounded-3xl p-1 border border-white/10 backdrop-blur-sm">
                <ClaimStressTest />
              </div>
              <div className="bg-white/5 rounded-3xl p-1 border border-white/10 backdrop-blur-sm">
                <EscalationRoadmap />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to upgrade from {competitor.name}?</h2>
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-xl">
            <Link href="/contact">
              Talk to an Expert Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>

      </div>
    </div>
  );
}
