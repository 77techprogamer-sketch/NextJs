"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, ShieldCheck, ShieldEllipsis, ArrowRight, RefreshCcw, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizQuestion {
    id: string;
    questionKey: string;
    options: {
        labelKey: string;
        value: string;
        scoreWeight: number;
    }[];
}

const QUESTIONS: QuizQuestion[] = [
    {
        id: 'breadwinner',
        questionKey: 'quiz_breadwinner',
        options: [
            { labelKey: 'yes', value: 'yes', scoreWeight: 10 },
            { labelKey: 'no', value: 'no', scoreWeight: 0 },
        ],
    },
    {
        id: 'dependents',
        questionKey: 'quiz_dependents',
        options: [
            { labelKey: 'none', value: '0', scoreWeight: 0 },
            { labelKey: '1_2', value: '1-2', scoreWeight: -10 },
            { labelKey: '3_plus', value: '3+', scoreWeight: -20 },
        ],
    },
    {
        id: 'loans',
        questionKey: 'quiz_loans',
        options: [
            { labelKey: 'yes', value: 'yes', scoreWeight: -20 },
            { labelKey: 'no', value: 'no', scoreWeight: 0 },
        ],
    },
    {
        id: 'insurance',
        questionKey: 'quiz_insurance',
        options: [
            { labelKey: 'fully_covered', value: 'fully', scoreWeight: 40 },
            { labelKey: 'partially_covered', value: 'partial', scoreWeight: 20 },
            { labelKey: 'not_covered', value: 'none', scoreWeight: -30 },
        ],
    },
    {
        id: 'age',
        questionKey: 'quiz_age',
        options: [
            { labelKey: 'under_30', value: '<30', scoreWeight: 10 },
            { labelKey: '30_45', value: '30-45', scoreWeight: 0 },
            { labelKey: 'above_45', value: '45+', scoreWeight: -10 },
        ],
    },
];

interface LeadMagnetQuizProps {
    onComplete: (data: { score: number; riskLevel: string }) => void;
}

const LeadMagnetQuiz: React.FC<LeadMagnetQuizProps> = ({ onComplete }) => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isFinished, setIsFinished] = useState(false);

    const handleOptionSelect = (scoreWeight: number) => {
        const newAnswers = { ...answers, [QUESTIONS[currentStep].id]: scoreWeight };
        setAnswers(newAnswers);

        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers: Record<string, number>) => {
        let score = 70; // Base score
        Object.values(finalAnswers).forEach(weight => {
            score += weight;
        });

        // Clamp score
        score = Math.max(0, Math.min(100, score));

        let riskLevel = 'MEDIUM';
        if (score < 40) riskLevel = 'HIGH';
        else if (score > 75) riskLevel = 'LOW';

        // Track completion in GA
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'lead_magnet_completed', {
                'event_category': 'engagement',
                'event_label': riskLevel,
                'value': score
            });
        }

        setIsFinished(true);
        onComplete({ score, riskLevel });
    };

    const restartQuiz = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsFinished(false);
    };

    const resultInfo = () => {
        let score = 0;
        Object.values(answers).forEach(w => score += w);
        score += 70;
        score = Math.max(0, Math.min(100, score));

        if (score < 40) return {
            label: t('high_risk'),
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            icon: <ShieldAlert className="w-12 h-12 text-red-500" />
        };
        if (score > 75) return {
            label: t('low_risk'),
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            icon: <ShieldCheck className="w-12 h-12 text-green-500" />
        };
        return {
            label: t('medium_risk'),
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            icon: <ShieldEllipsis className="w-12 h-12 text-yellow-500" />
        };
    };

    return (
        <div className="w-full max-w-xl mx-auto glass-card border-primary/10 overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
                {!isFinished ? (
                    <motion.div
                        key="quiz-step"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-8 md:p-10"
                    >
                        {/* Progress Header */}
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                                {t('step_of', { current: currentStep + 1, total: QUESTIONS.length })}
                            </span>
                            <div className="h-1.5 w-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 leading-tight">
                            {t(QUESTIONS[currentStep].questionKey)}
                        </h3>

                        <div className="grid grid-cols-1 gap-4">
                            {QUESTIONS[currentStep].options.map((opt) => (
                                <Button
                                    key={opt.value}
                                    variant="outline"
                                    onClick={() => handleOptionSelect(opt.scoreWeight)}
                                    className="h-14 justify-between px-6 text-base font-medium rounded-2xl hover:border-primary hover:bg-primary/5 hover:text-primary transition-all group"
                                >
                                    {t(opt.labelKey)}
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="quiz-result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 md:p-12 text-center"
                    >
                        <div className={cn("inline-flex items-center justify-center p-4 rounded-full mb-6", resultInfo().bg)}>
                            {resultInfo().icon}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                            {t('your_risk_score')}: <span className={resultInfo().color}>{Math.max(0, Math.min(100, 70 + Object.values(answers).reduce((a, b) => a + b, 0)))}/100</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-8">
                            {t('risk_level_assessment', { level: resultInfo().label })}
                        </p>

                        <div className="space-y-4">
                            <Button
                                onClick={() => (window as any).triggerLeadMagnetHandoff && (window as any).triggerLeadMagnetHandoff({
                                    score: Math.max(0, Math.min(100, 70 + Object.values(answers).reduce((a, b) => a + b, 0))),
                                    riskLevel: resultInfo().label
                                })}
                                className="w-full h-14 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                            >
                                <FileText className="w-5 h-5" />
                                {t('get_personalized_report')}
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={restartQuiz}
                                className="text-slate-500 hover:text-primary gap-2"
                            >
                                <RefreshCcw className="w-4 h-4" />
                                {t('re_calculate')}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LeadMagnetQuiz;
