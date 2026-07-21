"use client";

import React, { useState } from 'react';
import { Phone, MessageCircle, CheckCircle, XCircle, AlertTriangle, ArrowRight, Shield } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; risk?: 'low' | 'medium' | 'high' }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'insurance_type',
    question: 'What type of insurance claim do you have?',
    options: [
      { label: 'Life Insurance (LIC / Private)', value: 'life' },
      { label: 'Health Insurance', value: 'health' },
      { label: 'Motor Insurance (Car / Bike)', value: 'motor' },
      { label: 'Term Insurance', value: 'term' },
    ],
  },
  {
    id: 'claim_status',
    question: 'What is the current status of your claim?',
    options: [
      { label: 'Not filed yet — need help filing', value: 'not_filed', risk: 'low' },
      { label: 'Filed but pending for over 30 days', value: 'pending', risk: 'medium' },
      { label: 'Rejected by the insurance company', value: 'rejected', risk: 'high' },
      { label: 'Partially paid — amount seems too low', value: 'partial', risk: 'medium' },
    ],
  },
  {
    id: 'policy_age',
    question: 'How old is your insurance policy?',
    options: [
      { label: 'Less than 1 year', value: 'under_1yr', risk: 'medium' },
      { label: '1–3 years', value: '1_3yr', risk: 'low' },
      { label: '3–5 years', value: '3_5yr', risk: 'low' },
      { label: 'More than 5 years', value: 'over_5yr', risk: 'low' },
    ],
  },
  {
    id: 'documentation',
    question: 'Do you have all your policy documents?',
    options: [
      { label: 'Yes — policy bond, ID proof, bank details all ready', value: 'full_docs', risk: 'low' },
      { label: 'Mostly yes — missing 1-2 documents', value: 'partial_docs', risk: 'medium' },
      { label: 'No — I lost my policy bond / missing key documents', value: 'no_docs', risk: 'high' },
    ],
  },
  {
    id: 'rejection_reason',
    question: 'If your claim was rejected, what reason did the insurer give?',
    options: [
      { label: 'Not rejected yet', value: 'not_rejected', risk: 'low' },
      { label: 'Non-disclosure of pre-existing condition', value: 'non_disclosure', risk: 'high' },
      { label: 'Waiting period not completed', value: 'waiting_period', risk: 'medium' },
      { label: 'Policy was lapsed / premium not paid', value: 'lapsed', risk: 'high' },
      { label: 'Exclusion clause applied', value: 'exclusion', risk: 'medium' },
      { label: 'Incomplete documentation', value: 'incomplete_docs', risk: 'medium' },
      { label: 'Other / Not sure', value: 'other', risk: 'medium' },
    ],
  },
];

function getEligibilityResult(answers: Record<string, string>): {
  eligible: boolean;
  score: number;
  title: string;
  description: string;
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high';
} {
  let score = 0;
  const recommendations: string[] = [];

  // Claim status scoring
  if (answers.claim_status === 'rejected') {
    score += 3;
    recommendations.push('Your claim has been rejected — this is often reversible with the right legal approach.');
  } else if (answers.claim_status === 'pending') {
    score += 2;
    recommendations.push('Claims pending over 30 days violate IRDAI guidelines. You have the right to escalate.');
  } else if (answers.claim_status === 'partial') {
    score += 2;
    recommendations.push('Partial payments can be challenged. Get an independent valuation of your claim amount.');
  } else if (answers.claim_status === 'not_filed') {
    score += 1;
    recommendations.push('We can help you file correctly the first time — reducing rejection risk by 80%.');
  }

  // Policy age scoring
  if (answers.policy_age === 'over_5yr') {
    score += 2;
    recommendations.push('Policies over 5 years have strong protection under Section 45 of the Insurance Act.');
  } else if (answers.policy_age === '3_5yr') {
    score += 1;
  } else if (answers.policy_age === 'under_1yr') {
    recommendations.push('Early death claims (within 1 year) face additional scrutiny. Expert documentation is critical.');
  }

  // Documentation scoring
  if (answers.documentation === 'no_docs') {
    score += 2;
    recommendations.push('Lost policy bonds can be replaced. We help obtain duplicate bonds from LIC records.');
  } else if (answers.documentation === 'partial_docs') {
    score += 1;
    recommendations.push('Missing documents can be obtained. We guide you through the exact process for each document.');
  }

  // Rejection reason scoring
  if (answers.rejection_reason === 'non_disclosure') {
    score += 3;
    recommendations.push('Non-disclosure rejections are the most commonly overturned. After 3 years, insurers must prove deliberate fraud.');
  } else if (answers.rejection_reason === 'lapsed') {
    score += 2;
    recommendations.push('Lapsed policies can often be revived within 5 years. LIC also runs Special Revival Schemes.');
  } else if (answers.rejection_reason === 'waiting_period') {
    score += 1;
    recommendations.push('Waiting period disputes depend on policy terms and portability rights. We can review your specific case.');
  } else if (answers.rejection_reason === 'exclusion') {
    recommendations.push('Exclusion clauses are often misapplied. We analyze the exact policy wording to challenge wrongful exclusions.');
  }

  // Insurance type specific
  if (answers.insurance_type === 'life') {
    recommendations.push('LIC claims have specific grievance channels — GRO, Zonal Office, and Insurance Ombudsman.');
  } else if (answers.insurance_type === 'health') {
    recommendations.push('Cashless denials at network hospitals can be challenged under IRDAI emergency treatment guidelines.');
  } else if (answers.insurance_type === 'motor') {
    recommendations.push('Motor total loss valuations can be independently assessed. Surveyor reports can be challenged.');
  }

  const urgency = score >= 5 ? 'high' : score >= 3 ? 'medium' : 'low';
  const eligible = score >= 2;

  return {
    eligible,
    score: Math.min(score, 10),
    title: eligible ? 'You Likely Have a Strong Case' : 'We Can Still Help You',
    description: eligible
      ? 'Based on your answers, your claim has a good chance of success with professional assistance. Many similar cases have been resolved in our clients\' favor.'
      : 'Even if your situation seems complex, there are often options available. A free case review can identify the best path forward.',
    recommendations,
    urgency,
  };
}

export default function ClaimEligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getEligibilityResult(answers) : null;
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Free Eligibility Checker
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Check If Your Claim Can Be Recovered</h1>
          <p className="text-lg text-slate-300">Answer 5 quick questions to find out if your rejected or stuck insurance claim has a chance of success.</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                {QUESTIONS[currentStep].question}
              </h2>
              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(QUESTIONS[currentStep].id, option.value)}
                    className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700 group-hover:text-emerald-700">{option.label}</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="mt-4 text-slate-500 hover:text-slate-700 font-medium flex items-center gap-2"
              >
                ← Back to previous question
              </button>
            )}
          </>
        ) : result ? (
          /* Results */
          <div className="space-y-6">
            <div className={`rounded-2xl p-8 border-2 ${
              result.urgency === 'high' ? 'bg-red-50 border-red-200' :
              result.urgency === 'medium' ? 'bg-amber-50 border-amber-200' :
              'bg-emerald-50 border-emerald-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                {result.urgency === 'high' ? (
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                )}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{result.title}</h2>
                  <p className="text-slate-600 mt-1">{result.description}</p>
                </div>
              </div>

              {/* Score */}
              <div className="mt-6 mb-4">
                <div className="flex justify-between text-sm text-slate-500 mb-1">
                  <span>Case Strength Score</span>
                  <span>{result.score}/10</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      result.score >= 7 ? 'bg-emerald-500' :
                      result.score >= 4 ? 'bg-amber-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${result.score * 10}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Recommendations</h3>
              <div className="space-y-4">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Get a Free Case Review</h3>
              <p className="text-slate-300 mb-6">Our claim recovery specialists will analyze your documents and give you a honest assessment — no obligation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919986634506" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                  <Phone className="w-5 h-5" />
                  Call +91-99866 34506
                </a>
                <a href="https://wa.me/919986634506?text=Hi%20Insurance%20Support%2C%20I%20just%20used%20the%20claim%20eligibility%20checker%20and%20need%20help%20with%20my%20claim" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Retake */}
            <div className="text-center">
              <button onClick={handleReset} className="text-slate-500 hover:text-slate-700 font-medium">
                ← Retake the assessment
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
