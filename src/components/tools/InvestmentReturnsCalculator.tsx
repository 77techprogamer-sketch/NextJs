"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Shield, Calendar, ArrowRight, Info, AlertCircle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const InvestmentReturnsCalculator = () => {
    const { t } = useTranslation();
    const [age, setAge] = useState(30);
    const [monthlyPremium, setMonthlyPremium] = useState(5000);
    const [term, setTerm] = useState(20);

    // Derived Calculations
    const results = useMemo(() => {
        const annualPremium = monthlyPremium * 12;
        const totalInvested = annualPremium * term;

        // Base Sum Assured Estimation (roughly 12-15x annual premium for standard plans)
        // Age adjustment: higher age = higher mortality cost = lower effective SA for same premium
        const ageFactor = Math.max(0.7, 1 - (age - 20) * 0.008);
        const baseSA = annualPremium * term * 0.8 * ageFactor;

        // Bonus Estimation (based on industry rates ₹40-46 per ₹1000 SA)
        const bonusRate = term >= 20 ? 45 : 40;
        const annualBonus = (bonusRate / 1000) * baseSA;
        const totalBonus = annualBonus * term;

        // Final Additional Bonus (FAB) Estimation for long terms
        const fabRate = term >= 25 ? 200 : term >= 20 ? 100 : 50;
        const fab = (fabRate / 1000) * baseSA;

        const maturityBenefit = baseSA + totalBonus + fab;
        const returns = maturityBenefit - totalInvested;
        const roi = (returns / totalInvested) * 100;

        return {
            totalInvested,
            maturityBenefit,
            returns,
            roi,
            baseSA,
            bonusRate
        };
    }, [age, monthlyPremium, term]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Input Section */}
            <Card className="p-6 md:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-white/20 shadow-2xl space-y-8">
                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Current Age
                        </label>
                        <span className="text-xl font-black text-primary">{age} Years</span>
                    </div>
                    <Slider
                        value={[age]}
                        onValueChange={(val) => setAge(val[0])}
                        min={0}
                        max={60}
                        step={1}
                        className="py-4"
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> Monthly Savings
                        </label>
                        <span className="text-xl font-black text-primary">{formatCurrency(monthlyPremium)}</span>
                    </div>
                    <Slider
                        value={[monthlyPremium]}
                        onValueChange={(val) => setMonthlyPremium(val[0])}
                        min={1000}
                        max={100000}
                        step={1000}
                        className="py-4"
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Policy Term
                        </label>
                        <span className="text-xl font-black text-primary">{term} Years</span>
                    </div>
                    <Slider
                        value={[term]}
                        onValueChange={(val) => setTerm(val[0])}
                        min={10}
                        max={30}
                        step={1}
                        className="py-4"
                    />
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                        Estimations are based on industry-standard bonus rates of approximately ₹{results.bonusRate} per ₹1,000 Sum Assured.
                        Actual returns may vary based on plan choice and professional underwriting.
                    </p>
                </div>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
                <Card className="p-8 bg-primary text-white border-none shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>

                    <div className="relative z-10">
                        <h3 className="text-lg font-bold opacity-80 uppercase tracking-widest mb-2">Estimated Wealth at Maturity</h3>
                        <div className="text-5xl md:text-6xl font-black mb-6 animate-in slide-in-from-bottom-2 duration-500">
                            {formatCurrency(results.maturityBenefit)}
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                            <div>
                                <span className="text-xs uppercase font-bold opacity-70">Total Invested</span>
                                <p className="text-xl font-bold">{formatCurrency(results.totalInvested)}</p>
                            </div>
                            <div>
                                <span className="text-xs uppercase font-bold opacity-70">Estimated Gain</span>
                                <p className="text-xl font-bold text-emerald-300">+{formatCurrency(results.returns)}</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-6 bg-white dark:bg-slate-900 border-white/20 shadow-xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-black block">{formatCurrency(results.baseSA)}</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Guaranteed Life Cover</span>
                        </div>
                    </Card>
                    <Card className="p-6 bg-white dark:bg-slate-900 border-white/20 shadow-xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-black block">{results.roi.toFixed(1)}%</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Total Absolute ROI</span>
                        </div>
                    </Card>
                </div>

                <div className="text-center space-y-4 pt-4">
                    <p className="text-sm text-slate-500 font-medium">
                        Secure your family&apos;s future and build wealth simultaneously.
                    </p>
                    <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                        Get Detailed Illustration <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentReturnsCalculator;
