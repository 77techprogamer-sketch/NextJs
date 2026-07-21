"use client";

import React from 'react';
import Link from 'next/link';

interface AutoLinkerProps {
    text: string;
    className?: string;
}

const KEYWORD_MAP: Record<string, string> = {
    "Home Loan": "/loans",
    "Personal Loan": "/loans",
    "Business Loan": "/loans",
    "Loan": "/loans",
    "Life Insurance": "/services/life-insurance",
    "Health Insurance": "/services/health-insurance",
    "Motor Insurance": "/services/motor-insurance",
    "Car Insurance": "/services/motor-insurance",
    "Bike Insurance": "/services/motor-insurance",
    "Term Insurance": "/services/term-insurance",
    "Life Insurance Support": "/services/life-insurance",
    "Policy Revival": "/contact",
    "Claim Recovery": "/support",
    "Claim Settlement": "/support",
    "Contact": "/contact",
    "Support": "/support",
    "About Us": "/about",
    "Services": "/#services",
    "LIC": "/services/life-insurance",
    "Insurance Support": "/",
    "जीवन बीमा": "/services/life-insurance",
    "स्वास्थ्य बीमा": "/services/health-insurance",
    "मोटर बीमा": "/services/motor-insurance",
    "टर्म बीमा": "/services/term-insurance",
    "पेंशन योजना": "/services/pension-plans",
    "यूलिप": "/services/ulip-plans",
    "बीमा सहायता": "/",
    "संपर्क": "/contact",
    "सहायता": "/support",
};

export const AutoLinker: React.FC<AutoLinkerProps> = ({ text, className }) => {
    if (!text) return null;

    // Escape special regex characters in keywords
    const escapedKeywords = Object.keys(KEYWORD_MAP)
        .sort((a, b) => b.length - a.length) // Match longer phrases first
        .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|');

    const regex = new RegExp(`\\b(${escapedKeywords})\\b`, 'gi');

    const parts = text.split(regex);

    return (
        <span className={className}>
            {parts.map((part, i) => {
                // Check if this part matches a keyword (case-insensitive check)
                const match = Object.keys(KEYWORD_MAP).find(k => k.toLowerCase() === part.toLowerCase());

                if (match) {
                    return (
                        <Link
                            key={i}
                            href={KEYWORD_MAP[match]}
                            className="text-primary hover:underline font-medium"
                        >
                            {part}
                        </Link>
                    );
                }
                return part;
            })}
        </span>
    );
};
