export interface FormFieldConfig {
    name: string;
    labelKey: string;
    type: 'text' | 'number' | 'email' | 'tel' | 'date' | 'select' | 'radio';
    placeholderKey?: string;
    options?: { labelKey: string; value: string }[];
    required?: boolean;
}

export interface ChatbotContext {
    initialQuery?: string;
    inputs?: Record<string, string>;
}

export interface InsuranceFormConfig {
    chatbotContext?: ChatbotContext;
    fields: FormFieldConfig[];
    suppressDefaultFields?: ('age' | 'gender' | 'dateOfBirth')[];
}

export const DEFAULT_FORM_CONFIG: InsuranceFormConfig = {
    chatbotContext: {
        initialQuery: "I have a general inquiry.",
    },
    fields: [
        { name: 'sumAssured', labelKey: 'sum_assured', type: 'number', placeholderKey: 'enter_amount', required: true }
    ]
};

export const FORM_CONFIGS: Record<string, InsuranceFormConfig> = {
    general_inquiry: DEFAULT_FORM_CONFIG,
    health_insurance: {
        chatbotContext: {
            initialQuery: "I'm looking for Health Insurance options and cover for my family. What do you recommend?",
        },
        fields: [
            {
                name: 'healthMembers',
                labelKey: 'who_needs_coverage',
                type: 'select',
                options: [
                    { labelKey: 'self', value: 'Self' },
                    { labelKey: 'self_spouse_kids_1', value: 'Self with Wife and 1 kid' },
                    { labelKey: 'self_spouse_kids_2', value: 'Self with Wife and 2 kids' },
                    { labelKey: 'self_parents', value: 'Self with Parents' }
                ]
            },
            { name: 'pincode', labelKey: 'pincode', type: 'text', placeholderKey: 'enter_pincode', required: true }
        ]
    },
    life_insurance: {
        chatbotContext: {
            initialQuery: "I want to learn more about Life Insurance and how to secure my family's future.",
        },
        fields: [
            { name: 'sumAssured', labelKey: 'sum_assured', type: 'number', placeholderKey: 'enter_amount', required: true },
            { name: 'annualIncome', labelKey: 'annual_income', type: 'number', placeholderKey: 'enter_income' }
        ]
    },
    motor_insurance: {
        chatbotContext: {
            initialQuery: "I need to insure my vehicle. What motor insurance plans do you have?",
        },
        suppressDefaultFields: ['age', 'gender', 'dateOfBirth'],
        fields: [
            { name: 'vehicleNumber', labelKey: 'vehicle_number', type: 'text', placeholderKey: 'enter_vehicle_number', required: true },
            {
                name: 'vehicleType',
                labelKey: 'vehicle_type',
                type: 'radio',
                options: [
                    { labelKey: 'car', value: 'Car' },
                    { labelKey: 'bike', value: 'Bike' },
                    { labelKey: 'commercial_vehicle', value: 'Commercial Vehicle' }
                ],
                required: true
            },
            {
                name: 'previousPolicyType',
                labelKey: 'previous_policy_type',
                type: 'radio',
                options: [
                    { labelKey: 'comprehensive', value: 'Comprehensive' },
                    { labelKey: 'third_party', value: 'Third Party' }
                ]
            },
            {
                name: 'newPolicyType',
                labelKey: 'new_policy_type_intended',
                type: 'radio',
                options: [
                    { labelKey: 'comprehensive', value: 'Comprehensive' },
                    { labelKey: 'third_party', value: 'Third Party' }
                ],
                required: true
            }
        ]
    },
    term_insurance: {
        chatbotContext: {
            initialQuery: "I am interested in Term Insurance plans. Please guide me.",
        },
        fields: [
            { name: 'sumAssured', labelKey: 'sum_assured', type: 'number', placeholderKey: 'enter_amount', required: true },
            { name: 'annualIncome', labelKey: 'annual_income', type: 'number', placeholderKey: 'enter_income' },
            { name: 'tobaccoUser', labelKey: 'tobacco_user', type: 'radio', options: [{ labelKey: 'yes', value: 'yes' }, { labelKey: 'no', value: 'no' }] }
        ]
    },
    sme_insurance: {
        chatbotContext: {
            initialQuery: "I am looking for insurance for my small business (SME).",
        },
        suppressDefaultFields: ['age', 'gender', 'dateOfBirth'],
        fields: [
            { name: 'businessName', labelKey: 'business_name', type: 'text', placeholderKey: 'enter_business_name', required: true },
            {
                name: 'industryType',
                labelKey: 'industry_type',
                type: 'select',
                options: [
                    { labelKey: 'retail', value: 'Retail' },
                    { labelKey: 'manufacturing', value: 'Manufacturing' },
                    { labelKey: 'it_services', value: 'IT Services' },
                    { labelKey: 'consulting', value: 'Consulting' },
                    { labelKey: 'other', value: 'Other' }
                ],
                required: true
            },
            {
                name: 'annualTurnover',
                labelKey: 'annual_turnover',
                type: 'select',
                options: [
                    { labelKey: 'turnover_upto_50l', value: 'Upto 50 Lakhs' },
                    { labelKey: 'turnover_50l_2cr', value: '50 Lakhs - 2 Crores' },
                    { labelKey: 'turnover_2cr_10cr', value: '2 Crores - 10 Crores' },
                    { labelKey: 'turnover_above_10cr', value: 'Above 10 Crores' }
                ]
            }
        ]
    },
    travel_insurance: {
        chatbotContext: {
            initialQuery: "I am planning a trip and need travel insurance.",
        },
        fields: [
            {
                name: 'destination',
                labelKey: 'destination',
                type: 'select',
                options: [
                    { labelKey: 'usa_canada', value: 'USA/Canada' },
                    { labelKey: 'europe', value: 'Europe' },
                    { labelKey: 'asia', value: 'Asia' },
                    { labelKey: 'worldwide', value: 'Worldwide' }
                ],
                required: true
            },
            { name: 'travelStartDate', labelKey: 'travel_start_date', type: 'date', required: true },
            { name: 'tripDuration', labelKey: 'trip_duration_days', type: 'number', placeholderKey: 'enter_days', required: true }
        ]
    },
    pension_plans: {
        chatbotContext: {
            initialQuery: "I want to plan for my retirement with a pension plan.",
        },
        fields: [
            { name: 'retirementAge', labelKey: 'target_retirement_age', type: 'number', placeholderKey: 'enter_age' },
            { name: 'monthlyInvestment', labelKey: 'monthly_investment_capability', type: 'number', placeholderKey: 'enter_amount' }
        ]
    },
    ulip_plans: {
        chatbotContext: {
            initialQuery: "Tell me about ULIP plans for investment and insurance.",
        },
        fields: [
            { name: 'investmentAmount', labelKey: 'investment_amount', type: 'number', placeholderKey: 'enter_amount' },
            {
                name: 'riskAppetite',
                labelKey: 'risk_appetite',
                type: 'radio',
                options: [
                    { labelKey: 'low_risk', value: 'Low' },
                    { labelKey: 'balanced', value: 'Balanced' },
                    { labelKey: 'high_growth', value: 'High Growth' }
                ]
            }
        ]
    },
    wedding_insurance: {
        chatbotContext: {
            initialQuery: "I want to insure my wedding event.",
        },
        suppressDefaultFields: ['age', 'gender', 'dateOfBirth'],
        fields: [
            { name: 'eventDate', labelKey: 'event_date', type: 'date' },
            { name: 'expectedGuests', labelKey: 'expected_guests', type: 'number', placeholderKey: 'enter_count' },
            { name: 'totalBudget', labelKey: 'total_wedding_budget', type: 'number', placeholderKey: 'enter_amount' }
        ]
    },
    cyber_insurance: {
        chatbotContext: {
            initialQuery: "I need cyber insurance protection.",
        },
        suppressDefaultFields: ['age', 'gender', 'dateOfBirth'],
        fields: [
            { name: 'companyName', labelKey: 'company_name', type: 'text', placeholderKey: 'enter_company_name' },
            { name: 'websiteUrl', labelKey: 'website_url', type: 'text', placeholderKey: 'enter_url' },
            {
                name: 'dataRecordsCount',
                labelKey: 'data_records_held',
                type: 'select',
                options: [
                    { labelKey: 'records_upto_10k', value: 'Upto 10,000' },
                    { labelKey: 'records_10k_100k', value: '10,000 - 1,00,000' },
                    { labelKey: 'records_above_100k', value: 'Above 1,00,000' }
                ]
            }
        ]
    },
    loan_inquiry: {
        chatbotContext: {
            initialQuery: "I am interested in applying for a loan.",
        },
        fields: [
            { name: 'loanAmount', labelKey: 'loan_amount', type: 'number', placeholderKey: 'enter_amount', required: true },
            { name: 'annualIncome', labelKey: 'annual_income', type: 'number', placeholderKey: 'enter_income' },
            {
                name: 'employmentType',
                labelKey: 'employment_type',
                type: 'select',
                options: [
                    { labelKey: 'salaried', value: 'Salaried' },
                    { labelKey: 'self_employed_professional', value: 'Self Employed Professional' },
                    { labelKey: 'self_employed_business', value: 'Self Employed Business' },
                    { labelKey: 'student', value: 'Student' },
                    { labelKey: 'homemaker', value: 'Homemaker' },
                    { labelKey: 'other', value: 'Other' }
                ],
                required: true
            },
            { name: 'pincode', labelKey: 'pincode', type: 'text', placeholderKey: 'enter_pincode', required: true }
        ]
    },
    policy_recovery: {
        chatbotContext: {
            initialQuery: "I need help recovering a lost insurance policy.",
        },
        fields: [
            {
                name: 'insurer',
                labelKey: 'insurance_company',
                type: 'select',
                options: [
                    { labelKey: 'lic_of_india', value: 'LIC' },
                    { labelKey: 'private_insurers', value: 'Private' },
                    { labelKey: 'unknown', value: 'Unknown' }
                ],
                required: true
            },
            {
                name: 'yearsSinceLapse',
                labelKey: 'years_since_lapse_label',
                type: 'select',
                options: [
                    { labelKey: 'less_than_1_year', value: '1' },
                    { labelKey: '1_3_years', value: '3' },
                    { labelKey: '3_10_years', value: '5' },
                    { labelKey: 'more_than_10_years', value: '15' }
                ],
                required: true
            },
            {
                name: 'hasBond',
                labelKey: 'original_bond_status',
                type: 'select',
                options: [
                    { labelKey: 'yes_have_it', value: 'yes' },
                    { labelKey: 'have_copy_only', value: 'copy' },
                    { labelKey: 'lost_completely', value: 'no' }
                ],
                required: true
            },
            { name: 'policyNumber', labelKey: 'policy_number_optional', type: 'text', placeholderKey: 'enter_policy_number' }
        ]
    },
    // Loan Aliases
    home_loan: { ...DEFAULT_FORM_CONFIG, ...{ fields: [] } }, // Placeholder to be replaced below
    personal_loan: { ...DEFAULT_FORM_CONFIG, ...{ fields: [] } },
    business_loan: { ...DEFAULT_FORM_CONFIG, ...{ fields: [] } },
    mortgage_loan: { ...DEFAULT_FORM_CONFIG, ...{ fields: [] } },
    vehicle_loan: { ...DEFAULT_FORM_CONFIG, ...{ fields: [] } },
    education_loan: { ...DEFAULT_FORM_CONFIG, ...{ fields: [] } }
};

// Apply loan_inquiry config to all loan types
const loanTypes = ['home_loan', 'personal_loan', 'business_loan', 'mortgage_loan', 'vehicle_loan', 'education_loan'];
loanTypes.forEach(type => {
    FORM_CONFIGS[type] = FORM_CONFIGS['loan_inquiry'];
});
