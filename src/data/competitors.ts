export interface Competitor {
  slug: string;
  name: string;
  type: string;
  commonComplaints: string[];
  seoKeywords: string[];
  description: string;
  whyUs: string;
}

export const competitors: Competitor[] = [
  {
    slug: 'policybazaar',
    name: 'PolicyBazaar',
    type: 'Automated Portal',
    commonComplaints: [
      'Constant spam calls after getting a quote',
      'No dedicated person when a claim gets rejected',
      'Generic advice that does not fit complex medical histories',
      'Hidden clauses only discovered during hospitalization'
    ],
    seoKeywords: [
      'PolicyBazaar alternative',
      'PolicyBazaar claim rejected',
      'PolicyBazaar complaints',
      'Cancel PolicyBazaar policy',
      'PolicyBazaar vs expert advisor'
    ],
    description: 'PolicyBazaar is a great aggregator for comparing basic prices, but when it comes to claim settlement and complex policy wording, their automated, high-volume model often leaves policyholders stranded without a dedicated advocate.',
    whyUs: 'We do not just sell a policy; we manage your risk. As your dedicated concierge, we ensure your medical history is properly documented, removing the loopholes that portals often miss. When a claim happens, you speak to a real expert, not a call center.'
  },
  {
    slug: 'acko',
    name: 'Acko',
    type: 'Digital Insurer',
    commonComplaints: [
      'Difficult to reach a human during an emergency',
      'Opaque claim deduction logic',
      'Over-reliance on the app for everything',
      'Lack of personalized pre-policy medical assessment'
    ],
    seoKeywords: [
      'Acko claim rejected',
      'Acko health insurance complaints',
      'Acko customer service terrible',
      'Acko alternative',
      'Switch from Acko'
    ],
    description: 'Acko promises a fully digital, app-first experience. While convenient for buying, an app cannot fight for your rights when a hospital overcharges or a legitimate claim is suddenly flagged for "non-disclosure".',
    whyUs: 'We bring the human element back to insurance. We pre-underwrite your policy to prevent surprises, and our expert team actively challenges unjust deductions on your behalf, something an algorithm simply will not do.'
  },
  {
    slug: 'digit',
    name: 'Digit',
    type: 'Digital Insurer',
    commonComplaints: [
      'Lengthy reimbursement processes despite "digital" claims',
      'Automated rejections for minor document discrepancies',
      'Frustrating AI chatbots when you need urgent help',
      'Confusion over network vs. non-network hospital coverage'
    ],
    seoKeywords: [
      'Digit insurance claim rejected',
      'Digit health complaints',
      'Alternative to Digit insurance',
      'Digit claim process stuck',
      'Escalate Digit claim'
    ],
    description: 'Digit aims to simplify insurance with technology, but in the complex world of healthcare, technology often defaults to rejecting claims if a document isn\'t perfectly standard. You need an advocate, not a chatbot.',
    whyUs: 'We bypass the bots. Our team manually reviews your documentation before submission to ensure it is bulletproof. If a claim is stuck, we use our direct escalation channels, navigating the bureaucracy so you can focus on recovery.'
  }
];

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
