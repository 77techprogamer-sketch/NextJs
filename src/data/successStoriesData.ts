export interface SuccessStory {
    id: string;
    title: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    outcome: string;
    location: string;
    date: string;
}

export const successStories: SuccessStory[] = [
    {
        id: 'health-claim-recovery-bangalore',
        title: '₹8.5 Lakh Health Claim Recovered After 3 Rejections',
        category: 'Health Insurance',
        description: 'A senior citizen in Bangalore had their surgery claim rejected three times due to "pre-existing condition" technicalities.',
        challenge: 'The insurer claimed a minor BP history from 15 years ago was a suppressed fact. The family was ready to give up after multiple appeals.',
        solution: 'Our experts analyzed the policy fine print and proved that the surgery was unrelated to the BP history using IRDAI guidelines on non-disclosure periods.',
        outcome: 'The full amount of ₹8,50,000 was credited to the client within 22 days of our intervention.',
        location: 'Bangalore, KA',
        date: '2025-11-20'
    },
    {
        id: 'lic-policy-revival-chennai',
        title: 'Revived 12-Year Lapsed LIC Policy with Full Bonus',
        category: 'Life Insurance',
        description: 'A client in Chennai found an old LIC bond from 2012 that had lapsed after only 3 years of premium payments.',
        challenge: 'The client thought the money was lost forever as the policy had "lapsed" status for over a decade.',
        solution: 'We facilitated the Special Revival Scheme (SRS) and helped the client pay the arrears with reduced interest, ensuring the accumulated bonus was preserved.',
        outcome: 'The policy was restored to "In-Force" status, protecting a maturity value of ₹25 Lakhs for the client\'s daughter\'s education.',
        location: 'Chennai, TN',
        date: '2025-12-15'
    },
    {
        id: 'death-claim-settlement-mumbai',
        title: 'Death Claim Settled for Widow After Initial Rejection',
        category: 'Death Claim',
        description: 'A tragic case where a life insurance death claim was rejected because the policyholder died within 2 years of inception.',
        challenge: 'Insurers often investigate "Early Death Claims" stringently. They alleged non-disclosure of health habits.',
        solution: 'We gathered clinical evidence from the family doctor and employer records to prove the death was a sudden cardiac event with no prior history.',
        outcome: 'The claim of ₹50 Lakhs was settled, providing critical financial support to the grieving family.',
        location: 'Mumbai, MH',
        date: '2026-01-05'
    },
    {
        id: 'motor-recovery-chennai-floods',
        title: 'Total Loss Motor Claim Settled During Chennai Floods',
        category: 'Motor Insurance',
        description: 'A luxury car was submerged during the intense Chennai rains, and the insurer initially offered only 40% of the IDV.',
        challenge: 'The insurer claimed "engine cranking" caused the damage (which is often an exclusion).',
        solution: 'Our technical team proved that the damage was purely hydrostatic and the owner had followed all safety protocols.',
        outcome: 'The client received the full IDV of ₹18 Lakhs within 30 days.',
        location: 'Chennai, TN',
        date: '2025-12-28'
    }
];
