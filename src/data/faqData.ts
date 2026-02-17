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
    }
];

export const getFaqBySlug = (slug: string) => {
    return faqData.find(faq => faq.slug === slug) || null;
};
