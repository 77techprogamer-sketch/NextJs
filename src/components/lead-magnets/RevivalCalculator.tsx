"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Calculator, RefreshCw, AlertCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import QuoteForm from '@/components/QuoteForm';

const RevivalCalculator: React.FC = () => {
    const { t } = useTranslation();
    const [premium, setPremium] = useState<string>('');
    const [years, setYears] = useState<string>('2');
    const [result, setResult] = useState<{ total: number; interest: number } | null>(null);
    const [showLeadForm, setShowLeadForm] = useState(false);

    const calculate = () => {
        const p = parseFloat(premium);
        const y = parseFloat(years);
        if (isNaN(p) || isNaN(y)) return;

        // Simplified calculation: 10% annual interest compounded
        const interestRate = 0.10;
        let totalInterest = 0;
        let currentPremium = p;
        
        for(let i = 0; i < y; i++) {
            totalInterest += currentPremium * interestRate * (y - i);
        }

        setResult({
            total: p * y + totalInterest,
            interest: totalInterest
        });
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
            <div className="p-8 bg-blue-600 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">{t('lead_magnets.revival_calculator.title')}</h3>
                </div>
                <p className="text-blue-100">{t('lead_magnets.revival_calculator.subtitle')}</p>
            </div>

            <div className="p-8">
                {!showLeadForm ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">{t('lead_magnets.revival_calculator.fields.premium')}</label>
                            <input
                                type="number"
                                value={premium}
                                onChange={(e) => setPremium(e.target.value)}
                                placeholder="e.g. 50000"
                                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">{t('lead_magnets.revival_calculator.fields.years')}</label>
                            <select
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white"
                            >
                                {[1, 2, 3, 4, 5, 10, 15].map(y => (
                                    <option key={y} value={y}>{y} {y === 1 ? 'Year' : 'Years'}</option>
                                ))}
                            </select>
                        </div>

                        <Button 
                            onClick={calculate}
                            disabled={!premium}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200"
                        >
                            {t('lead_magnets.revival_calculator.fields.calculate')}
                        </Button>

                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center"
                            >
                                <div className="text-sm text-slate-500 mb-1">{t('lead_magnets.revival_calculator.results.estimated_cost')}</div>
                                <div className="text-3xl font-bold text-slate-900 mb-2">
                                    ₹{Math.round(result.total).toLocaleString('en-IN')}*
                                </div>
                                <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-6">
                                    <AlertCircle className="h-3 w-3" />
                                    {t('lead_magnets.revival_calculator.results.breakdown')}
                                </div>

                                <Button 
                                    onClick={() => setShowLeadForm(true)}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white group"
                                >
                                    {t('lead_magnets.revival_calculator.results.cta')}
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                            <h4 className="text-lg font-bold text-slate-900 mb-4 text-center">Get Your Accurate Quote</h4>
                            <QuoteForm insuranceType="revival_calculator" />
                            <Button 
                                variant="ghost" 
                                onClick={() => setShowLeadForm(false)}
                                className="w-full mt-4 text-slate-400 hover:text-primary"
                            >
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Back to Calculator
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
                *Interest calculation is indicative. Actual interest varies by policy date and type.
            </div>
        </div>
    );
};

export default RevivalCalculator;
