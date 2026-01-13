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
}

export const DEFAULT_FORM_CONFIG: InsuranceFormConfig = {
    chatbotContext: {
        initialQuery: "I have a general inquiry.",
    },
    fields: [
        { name: 'sumAssured', labelKey: 'sum_assured', type: 'number', placeholderKey: 'enter_amount' }
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
            { name: 'pincode', labelKey: 'pincode', type: 'text', placeholderKey: 'enter_pincode' }
        ]
    },
    life_insurance: {
        chatbotContext: {
            initialQuery: "I want to learn more about Life Insurance and how to secure my family's future.",
        },
        fields: [
            { name: 'sumAssured', labelKey: 'sum_assured', type: 'number', placeholderKey: 'enter_amount' },
            { name: 'income', labelKey: 'annual_income', type: 'number', placeholderKey: 'enter_income' }
        ]
    },
    motor_insurance: {
        chatbotContext: {
            initialQuery: "I need to insure my vehicle. What motor insurance plans do you have?",
        },
        fields: [
            { name: 'vehicleNumber', labelKey: 'vehicle_number', type: 'text', placeholderKey: 'enter_vehicle_number' },
            { name: 'registrationYear', labelKey: 'registration_year', type: 'number', placeholderKey: 'enter_year' }
        ]
    },
    term_insurance: {
        chatbotContext: {
            initialQuery: "I am interested in Term Insurance plans. Please guide me.",
        },
        fields: [
            { name: 'sumAssured', labelKey: 'sum_assured', type: 'number', placeholderKey: 'enter_amount' },
            { name: 'tobaccoUser', labelKey: 'tobacco_user', type: 'radio', options: [{ labelKey: 'yes', value: 'yes' }, { labelKey: 'no', value: 'no' }] }
        ]
    },
    sme_insurance: {
        chatbotContext: {
            initialQuery: "I am looking for insurance for my small business (SME).",
        },
        fields: [
            { name: 'businessName', labelKey: 'business_name', type: 'text', placeholderKey: 'enter_business_name' }
        ]
    },
    travel_insurance: {
        chatbotContext: {
            initialQuery: "I am planning a trip and need travel insurance.",
        },
        fields: [
            { name: 'destination', labelKey: 'destination', type: 'text', placeholderKey: 'enter_destination' }
        ]
    },
    pension_plans: {
        chatbotContext: {
            initialQuery: "I want to plan for my retirement with a pension plan.",
        },
        fields: [
            { name: 'retirementAge', labelKey: 'target_retirement_age', type: 'number', placeholderKey: 'enter_age' }
        ]
    },
    ulip_plans: {
        chatbotContext: {
            initialQuery: "Tell me about ULIP plans for investment and insurance.",
        },
        fields: [
            { name: 'investmentAmount', labelKey: 'investment_amount', type: 'number', placeholderKey: 'enter_amount' }
        ]
    },
    wedding_insurance: {
        chatbotContext: {
            initialQuery: "I want to insure my wedding event.",
        },
        fields: [
            { name: 'eventDate', labelKey: 'event_date', type: 'date' }
        ]
    },
    cyber_insurance: {
        chatbotContext: {
            initialQuery: "I need cyber insurance protection.",
        },
        fields: [
            { name: 'websiteUrl', labelKey: 'website_url', type: 'text', placeholderKey: 'enter_url' }
        ]
    }
};
