import { z } from "zod";

export type FieldType = "text" | "number" | "select" | "radio" | "checkbox" | "date";

export interface FormFieldConfig {
    name: string;
    labelKey: string;
    type: FieldType;
    placeholderKey?: string;
    options?: { labelKey: string; value: string }[];
    validation?: z.ZodTypeAny;
    required?: boolean;
}

export interface ChatbotContext {
    initialQuery?: string;
    inputs?: Record<string, string>;
}

export interface InsuranceFormConfig {
    fields: FormFieldConfig[];
    chatbotContext?: ChatbotContext;
}

export const FORM_CONFIGS: Record<string, InsuranceFormConfig> = {
    general_inquiry: {
        fields: [
            {
                name: "fullName",
                labelKey: "your_full_name",
                type: "text",
                placeholderKey: "your_full_name",
                required: true,
            },
            {
                name: "mobileNumber",
                labelKey: "mobile_number",
                type: "text",
                placeholderKey: "9876543210",
                required: true,
            },
        ],
        chatbotContext: {
            initialQuery: "I have a general inquiry about your insurance services. Can you help me?",
        },
    },
    health_insurance: {
        fields: [
            {
                name: "fullName",
                labelKey: "your_full_name",
                type: "text",
                placeholderKey: "your_full_name",
                required: true,
            },
            {
                name: "mobileNumber",
                labelKey: "mobile_number",
                type: "text",
                placeholderKey: "9876543210",
                required: true,
            },
            {
                name: "sumAssured",
                labelKey: "sum_assured",
                type: "number",
                placeholderKey: "5,00,000",
                required: true,
            },
            {
                name: "healthMembers",
                labelKey: "health_members_option",
                type: "select",
                options: [
                    { labelKey: "self", value: "Self" },
                    { labelKey: "self_wife_1kid", value: "Self with Wife and 1 kid" },
                    { labelKey: "self_wife_2kids", value: "Self with Wife and 2 kids" },
                    { labelKey: "self_parents", value: "Self with Parents" },
                ],
                required: true,
            },
        ],
        chatbotContext: {
            initialQuery: "I'm looking for Health Insurance options and cover for my family. What do you recommend?",
        },
    },
    life_insurance: {
        fields: [
            {
                name: "fullName",
                labelKey: "your_full_name",
                type: "text",
                placeholderKey: "your_full_name",
                required: true,
            },
            {
                name: "mobileNumber",
                labelKey: "mobile_number",
                type: "text",
                placeholderKey: "9876543210",
                required: true,
            },
            {
                name: "sumAssured",
                labelKey: "sum_assured",
                type: "number",
                placeholderKey: "1,00,00,000",
                required: true,
            },
        ],
        chatbotContext: {
            initialQuery: "I want to learn more about Life Insurance and how to secure my family's future.",
        },
    },
};

export const DEFAULT_FORM_CONFIG: InsuranceFormConfig = {
    fields: [
        {
            name: "fullName",
            labelKey: "your_full_name",
            type: "text",
            placeholderKey: "your_full_name",
            required: true,
        },
        {
            name: "mobileNumber",
            labelKey: "mobile_number",
            type: "text",
            placeholderKey: "9876543210",
            required: true,
        },
        {
            name: "sumAssured",
            labelKey: "sum_assured",
            type: "number",
            placeholderKey: "5,00,000",
            required: true,
        },
    ],
};
