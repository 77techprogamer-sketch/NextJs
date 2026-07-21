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
    },
    {
        slug: 'how-to-get-duplicate-lic-policy',
        questionKey: 'faq_duplicate_policy_q',
        answerKey: 'faq_duplicate_policy_a',
        category: 'Life'
    },
    {
        slug: 'change-nominee-lic-policy',
        questionKey: 'faq_change_nominee_q',
        answerKey: 'faq_change_nominee_a',
        category: 'Life'
    },
    {
        slug: 'health-insurance-maternity-cover',
        questionKey: 'faq_maternity_cover_q',
        answerKey: 'faq_maternity_cover_a',
        category: 'Health'
    },
    {
        slug: 'covid-19-health-insurance-coverage',
        questionKey: 'faq_covid_coverage_q',
        answerKey: 'faq_covid_coverage_a',
        category: 'Health'
    },
    {
        slug: 'lic-aadhaar-link-process',
        questionKey: 'faq_aadhaar_link_q',
        answerKey: 'faq_aadhaar_link_a',
        category: 'Life'
    },
    {
        slug: 'insurance-claim-rejection-reasons',
        questionKey: 'faq_rejection_reasons_q',
        answerKey: 'faq_rejection_reasons_a',
        category: 'General'
    },
    {
        slug: 'zero-dep-car-insurance-benefits',
        questionKey: 'faq_zero_dep_q',
        answerKey: 'faq_zero_dep_a',
        category: 'Motor'
    },
    {
        slug: 'tpa-vs-insurance-company',
        questionKey: 'faq_tpa_vs_ins_q',
        answerKey: 'faq_tpa_vs_ins_a',
        category: 'Health'
    },
    {
        slug: 'claim-without-nominee',
        questionKey: 'faq_no_nominee_claim_q',
        answerKey: 'faq_no_nominee_claim_a',
        category: 'General'
    },
    {
        slug: 'term-insurance-maximum-age',
        questionKey: 'faq_max_age_term_q',
        answerKey: 'faq_max_age_term_a',
        category: 'Term'
    },
    {
        slug: 'multiple-life-insurance-policies',
        questionKey: 'faq_multiple_policies_q',
        answerKey: 'faq_multiple_policies_a',
        category: 'Life'
    },
    {
        slug: 'car-insurance-transfer-process',
        questionKey: 'faq_car_transfer_q',
        answerKey: 'faq_car_transfer_a',
        category: 'Motor'
    },
    {
        slug: 'insurance-grace-period-explained',
        questionKey: 'faq_grace_period_q',
        answerKey: 'faq_grace_period_a',
        category: 'General'
    },
    {
        slug: 'lost-lic-policy-bond-maturity-claim',
        questionKey: 'faq_lost_bond_maturity_q',
        answerKey: 'faq_lost_bond_maturity_a',
        category: 'Life'
    },
    {
        slug: 'health-insurance-renewal-missed',
        questionKey: 'faq_missed_renewal_q',
        answerKey: 'faq_missed_renewal_a',
        category: 'Health'
    }
];

export const getFaqBySlug = (slug: string) => {
    return faqData.find(faq => faq.slug === slug) || null;
};
