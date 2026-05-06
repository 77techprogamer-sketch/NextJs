"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, AlertTriangle, ShieldCheck, ShieldAlert, ArrowRight, RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import QuoteForm from '@/components/QuoteForm';

const ClaimStressTest: React.FC = () => {
    const { t } = useTranslation();
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
    const [isFinished, setIsFinished] = useState(false);

    const checklistItems = [
        { id: 'nominee', key: 'lead_magnets.claim_stress_test.questions.nominee' },
        { id: 'discharge', key: 'lead_magnets.claim_stress_test.questions.discharge' },
        { id: 'exclusions', key: 'lead_magnets.claim_stress_test.questions.exclusions' },
        { id: 'sum_assured', key: 'lead_magnets.claim_stress_test.questions.sum_assured' },
        { id: 'contact', key: 'lead_magnets.claim_stress_test.questions.contact' },
        { id: 'tpa', key: 'lead_magnets.claim_stress_test.questions.tpa' },
        { id: 'bills', key: 'lead_magnets.claim_stress_test.questions.bills' },
    ];

    const toggleItem = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const score = Object.values(checkedItems).filter(Boolean).length;
    const total = checklistItems.length;

    const getResult = () => {
        if (score === total) return {
            status: 'safe',
            label: t('lead_magnets.claim_stress_test.results.safe'),
            color: 'text-green-600',
            bg: 'bg-green-50',
            icon: ShieldCheck
        };
        if (score >= total / 2) return {
            status: 'warning',
            label: t('lead_magnets.claim_stress_test.results.warning'),
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            icon: AlertTriangle
        };
        return {
            status: 'danger',
            label: t('lead_magnets.claim_stress_test.results.danger'),
            color: 'text-red-600',
            bg: 'bg-red-50',
            icon: ShieldAlert
        };
    };

    const result = getResult();
    const ResultIcon = result.icon;

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
            <div className="p-8 bg-slate-900 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('lead_magnets.claim_stress_test.title')}</h3>
                <p className="text-slate-400">{t('lead_magnets.claim_stress_test.subtitle')}</p>
            </div>

            <div className="p-8">
                {!isFinished ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                    >
                        {checklistItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={cn(
                                    "flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group",
                                    checkedItems[item.id] 
                                        ? "bg-primary/5 border-primary/20" 
                                        : "bg-white border-slate-100 hover:border-slate-200"
                                )}
                            >
                                <div className={cn(
                                    "w-6 h-6 rounded-md border flex items-center justify-center transition-all",
                                    checkedItems[item.id] ? "bg-primary border-primary text-white" : "border-slate-300 group-hover:border-primary/50"
                                )}>
                                    {checkedItems[item.id] && <CheckCircle2 className="w-4 h-4" />}
                                </div>
                                <span className={cn(
                                    "flex-1 text-sm font-medium",
                                    checkedItems[item.id] ? "text-slate-900" : "text-slate-600"
                                )}>
                                    {t(item.key)}
                                </span>
                            </div>
                        ))}

                        <div className="pt-6">
                            <Button 
                                onClick={() => setIsFinished(true)}
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl"
                            >
                                {t('lead_magnets.claim_stress_test.cta')}
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className={cn("inline-flex items-center justify-center p-4 rounded-full mb-6", result.bg)}>
                            <ResultIcon className={cn("w-12 h-12", result.color)} />
                        </div>
                        
                        <h4 className={cn("text-2xl font-bold mb-2", result.color)}>
                            {score}/{total} {t('support_page.hero_badge')}
                        </h4>
                        <p className="text-slate-600 font-medium mb-8">
                            {result.label}
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                            <h5 className="font-bold text-slate-900 mb-4">{t('lead_magnets.claim_stress_test.results.action_cta')}</h5>
                            <QuoteForm insuranceType="claim_audit" />
                        </div>

                        <Button 
                            variant="ghost" 
                            onClick={() => { setIsFinished(false); setCheckedItems({}); }}
                            className="text-slate-400 hover:text-primary gap-2"
                        >
                            <RefreshCcw className="w-4 h-4" />
                            {t('re_calculate')}
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ClaimStressTest;
