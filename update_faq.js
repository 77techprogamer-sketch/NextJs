const fs = require('fs');

const file = 'd:/Insurance-Support/insurance-support-next/public/locales/en/translation.json';
const t = JSON.parse(fs.readFileSync(file, 'utf8'));
t.faq_pension_q1 = 'When can I start receiving pension?';

const additions = {
  faq_claim_rejected_q: 'How do I claim insurance if my previous claim was rejected?',
  faq_senior_life_q: 'What is the best life insurance for senior citizens?',
  faq_lic_surrender_q: 'How is the LIC policy surrender value calculated?',
  faq_cashless_q: 'What is the process for cashless hospitalization?',
  faq_death_claim_docs_q: 'What documents are required for a death claim?',
  faq_duplicate_policy_q: 'How can I get a duplicate LIC policy bond?',
  faq_change_nominee_q: 'How do I change the nominee in my LIC policy?',
  faq_maternity_cover_q: 'Is maternity covered under health insurance?',
  faq_covid_coverage_q: 'Does my health insurance cover COVID-19 treatment?',
  faq_aadhaar_link_q: 'How do I link Aadhaar to my LIC policy?',
  faq_rejection_reasons_q: 'What are the common reasons for insurance claim rejection?',
  faq_zero_dep_q: 'What are the benefits of zero depreciation car insurance?',
  faq_tpa_vs_ins_q: 'What is the difference between a TPA and an Insurance Company?',
  faq_no_nominee_claim_q: 'How can a claim be processed if there is no nominee?',
  faq_max_age_term_q: 'What is the maximum age to buy term insurance?',
  faq_multiple_policies_q: 'Can I claim multiple life insurance policies?',
  faq_car_transfer_q: 'How do I transfer car insurance to a new owner?',
  faq_grace_period_q: 'What is the grace period in an insurance policy?',
  faq_lost_bond_maturity_q: 'Can I claim maturity if I lost my LIC policy bond?',
  faq_missed_renewal_q: 'What happens if I miss my health insurance renewal date?',
  faq_claim_rejected_a: 'You can appeal the rejection by addressing the specific reasons mentioned in the rejection letter, providing additional documents, or approaching the Grievance Redressal Officer (GRO) and subsequently the Insurance Ombudsman if needed.',
  faq_senior_life_a: 'Senior citizen life insurance plans or retirement plans with guaranteed returns and minimal medical checkups are usually best. It is recommended to consult an advisor to find a policy tailored to specific health conditions and financial goals.',
  faq_lic_surrender_a: 'The surrender value depends on the number of premiums paid, the policy term, and the bonuses accumulated. A guaranteed surrender value is available after paying premiums for a minimum of 3 full years (or 2 years for some new policies).',
  faq_cashless_a: 'For planned hospitalization, inform your insurer at least 48 hours in advance. For emergencies, inform them within 24 hours of admission. Show your health card at the network hospital\'s TPA desk to initiate the cashless process.',
  faq_death_claim_docs_a: 'Key documents include the original policy bond, original death certificate, nominee\'s ID and address proof, bank mandate form with cancelled cheque, and claim discharge forms. Additional documents may be required for unnatural deaths.',
  faq_duplicate_policy_a: 'You need to submit an indemnity bond on non-judicial stamp paper, a questionnaire detailing the loss, and sometimes an advertisement in a local newspaper. The branch will issue a duplicate policy after verification.',
  faq_change_nominee_a: 'You can change the nominee by submitting a filled endorsement form along with the original policy document and the new nominee\'s KYC details to your home branch.',
  faq_maternity_cover_a: 'Maternity cover is available in specific health insurance plans or as an add-on, typically with a waiting period of 9 months to 4 years. It covers delivery expenses and sometimes newborn baby care.',
  faq_covid_coverage_a: 'Yes, comprehensive health insurance policies cover hospitalization expenses for COVID-19, subject to the policy\'s standard terms, conditions, and sum insured limits.',
  faq_aadhaar_link_a: 'You can link your Aadhaar card online through the LIC customer portal, via SMS, or offline by submitting a copy of your Aadhaar card at your LIC home branch.',
  faq_rejection_reasons_a: 'Common reasons include non-disclosure of pre-existing conditions, policy lapse due to unpaid premiums, filing a claim during the waiting period, or the specific illness/event being excluded from the policy.',
  faq_zero_dep_a: 'A zero depreciation (bumper-to-bumper) cover ensures that the insurer pays the entire cost of replacing damaged parts without deducting any depreciation value, reducing your out-of-pocket expenses.',
  faq_tpa_vs_ins_a: 'The Insurance Company provides the coverage and bears the financial risk, while the Third Party Administrator (TPA) handles the processing of claims and provides network hospital assistance on behalf of the insurer.',
  faq_no_nominee_claim_a: 'If no nominee is registered, the legal heirs must provide a succession certificate, an indemnity bond, and a no-objection certificate from other legal heirs to claim the policy benefits.',
  faq_max_age_term_a: 'The maximum entry age for most term insurance plans is 65 years, though some insurers offer plans up to the age of 70, subject to medical underwriting.',
  faq_multiple_policies_a: 'Yes, in the event of death, the nominee can file claims with all the insurance companies where the deceased held an active policy. The total payout will be the sum of all valid policies.',
  faq_car_transfer_a: 'The new owner must apply for insurance transfer within 14 days of the vehicle\'s registration transfer. Required documents include the new RC, old policy document, and an application form with the required fee.',
  faq_grace_period_a: 'The grace period is an extra time (usually 15 to 30 days) given after the premium due date to pay the premium without the policy lapsing. Life cover continues during this period.',
  faq_lost_bond_maturity_a: 'Yes, you can claim maturity by applying for a duplicate policy or submitting an indemnity bond along with the maturity claim forms, depending on the insurer\'s specific requirements for maturity claims.',
  faq_missed_renewal_a: 'If you miss the renewal date, you generally get a 30-day grace period to renew the policy without losing continuity benefits (like waiting periods). However, you are not covered for claims arising during the grace period.'
};

Object.assign(t, additions);
fs.writeFileSync(file, JSON.stringify(t, null, 2));
console.log('Updated translation.json successfully.');
