export interface FAQItem {
    slug: string;
    questionKey: string;
    answerKey: string;
    category: 'Life' | 'Health' | 'General' | 'Motor' | 'Term';
}

export const faqData: FAQItem[] = [
    {
        slug: 'how-to-revive-lapsed-lic-policy',
        questionKey: 'faq_life_q1',
        answerKey: 'faq_life_a1',
        category: 'Life'
    },
    {
        slug: 'how-to-check-lic-policy-status',
        questionKey: 'faq_life_q2',
        answerKey: 'faq_life_a2',
        category: 'Life'
    },
    {
        slug: 'is-health-insurance-premium-tax-deductible',
        questionKey: 'faq_health_q1',
        answerKey: 'faq_health_a1',
        category: 'Health'
    },
    {
        slug: 'waiting-period-in-health-insurance',
        questionKey: 'faq_health_q2',
        answerKey: 'faq_health_a2',
        category: 'Health'
    },
    {
        slug: 'term-insurance-vs-life-insurance',
        questionKey: 'faq_term_q1',
        answerKey: 'faq_term_a1',
        category: 'Term'
    },
    {
        slug: 'what-is-idv-in-car-insurance',
        questionKey: 'faq_motor_q1',
        answerKey: 'faq_motor_a1',
        category: 'Motor'
    },
    {
        slug: 'how-to-claim-insurance-if-rejected',
        questionKey: 'faq_claim_rejected_q',
        answerKey: 'faq_claim_rejected_a',
        category: 'General'
    },
    {
        slug: 'best-life-insurance-for-senior-citizens',
        questionKey: 'faq_senior_life_q',
        answerKey: 'faq_senior_life_a',
        category: 'Life'
    },
    {
        slug: 'lic-policy-surrender-value-calculator',
        questionKey: 'faq_lic_surrender_q',
        answerKey: 'faq_lic_surrender_a',
        category: 'Life'
    },
    {
        slug: 'cashless-hospitalization-process',
        questionKey: 'faq_cashless_q',
        answerKey: 'faq_cashless_a',
        category: 'Health'
    },
    {
        slug: 'documents-required-for-death-claim',
        questionKey: 'faq_death_claim_docs_q',
        answerKey: 'faq_death_claim_docs_a',
        category: 'Life'
    }
];

export const getFaqBySlug = (slug: string) => {
    return faqData.find(faq => faq.slug === slug) || null;
};
