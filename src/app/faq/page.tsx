import { Metadata } from 'next';
import { getStaticTranslation } from '@/lib/i18n-static';
import { FullFaqJsonLd } from '@/components/ServerJsonLd';
import FAQSection from '@/components/sections/FAQSection';
import { faqData } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'Insurance FAQ - LIC Claims, Policy Revival, Coverage Questions',
  description: 'Expert answers to common insurance questions: claim process, policy revival, nominees, surrender value, tax benefits. IRDAI certified advice from 25+ year veteran.',
  alternates: { canonical: 'https://insurancesupport.online/faq' },
  openGraph: {
    title: 'Insurance & LIC FAQs - Expert Answers',
    description: 'Get answers to all your insurance questions. LIC claims, policy revival, health insurance, motor insurance - all explained by an IRDAI certified advisor.',
    url: 'https://insurancesupport.online/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <FullFaqJsonLd faqs={faqData} />
      <section className='py-16 md:py-20 bg-white'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900'>
            Insurance & LIC FAQs
          </h1>
          <p className='text-slate-600 mb-8 text-lg'>
            Get expert answers from an IRDAI certified advisor with 25+ years of experience.
            Have a question not listed? Call us at +91-9986634506.
          </p>
          <FAQSection items={faqData} />
          <div className='mt-12 text-center bg-amber-50 rounded-2xl p-8'>
            <h2 className='text-xl font-bold mb-2'>Still have questions?</h2>
            <p className='text-slate-600 mb-4'>
              Every policy is unique. Get a free, personalized answer from our team.
            </p>
            <a
              href='tel:+919986634506'
              className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-colors'
            >
              📞 Call +91-9986634506
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
