export interface ChatbotContext {
    initialQuery?: string;
    inputs?: Record<string, string>;
}

export interface InsuranceFormConfig {
    chatbotContext?: ChatbotContext;
}

export const FORM_CONFIGS: Record<string, InsuranceFormConfig> = {
    general_inquiry: {
        chatbotContext: {
            initialQuery: "I have a general inquiry about your insurance services. Can you help me?",
        },
    },
    health_insurance: {
        chatbotContext: {
            initialQuery: "I'm looking for Health Insurance options and cover for my family. What do you recommend?",
        },
    },
    life_insurance: {
        chatbotContext: {
            initialQuery: "I want to learn more about Life Insurance and how to secure my family's future.",
        },
    },
    // Adding missing ones for completeness based on service IDs
    motor_insurance: {
        chatbotContext: {
            initialQuery: "I need to insure my vehicle. What motor insurance plans do you have?",
        }
    },
    term_insurance: {
        chatbotContext: {
            initialQuery: "I am interested in Term Insurance plans. Please guide me.",
        }
    },
    sme_insurance: {
        chatbotContext: {
            initialQuery: "I am looking for insurance for my small business (SME).",
        }
    },
    travel_insurance: {
        chatbotContext: {
            initialQuery: "I am planning a trip and need travel insurance.",
        }
    },
    pension_plans: {
        chatbotContext: {
            initialQuery: "I want to plan for my retirement with a pension plan.",
        }
    },
    ulip_plans: {
        chatbotContext: {
            initialQuery: "Tell me about ULIP plans for investment and insurance.",
        }
    },
    wedding_insurance: {
        chatbotContext: {
            initialQuery: "I want to insure my wedding event.",
        }
    },
    cyber_insurance: {
        chatbotContext: {
            initialQuery: "I need cyber insurance protection.",
        }
    }
};
