"use client";

import React from 'react';
import LeadMagnetQuiz from '@/components/LeadMagnetQuiz';

export default function EmbedRiskScorecardPage() {
    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
            <div className="w-full max-w-xl">
                <LeadMagnetQuiz
                    onComplete={(data) => {
                        console.log('Embed Quiz Completed:', data);
                        // Optional: Post message to parent window if needed
                        window.parent.postMessage({ type: 'RISK_QUIZ_COMPLETE', data }, '*');
                    }}
                />
            </div>
        </div>
    );
}
