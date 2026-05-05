"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, IndianRupee, RefreshCcw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteForm from '@/components/QuoteForm';

import { useTranslation } from 'react-i18next';

export default function HLVCalculator() {
    const { t, i18n } = useTranslation();
    const [step, setStep] = useState(1);
    const [result, setResult] = useState<number | null>(null);

    // Inputs
    const [age, setAge] = useState<number>(30);
    const [retirementAge, setRetirementAge] = useState<number>(60);
    const [annualIncome, setAnnualIncome] = useState<number>(1000000); // 10 LPA
    const [personalExpenses, setPersonalExpenses] = useState<number>(30); // % of income
    const [savings, setSavings] = useState<number>(500000);
    const [loans, setLoans] = useState<number>(2000000);
    const [inflation, setInflation] = useState<number>(6); // 6%

    // Form visibility for lead capture after result
    const [showConsultation, setShowConsultation] = useState(false);

    const calculateHLV = () => {
        const yearsLeft = retirementAge - age;
        if (yearsLeft <= 0) {
            setResult(0);
            return;
        }

        const yearlySurplus = annualIncome * (1 - personalExpenses / 100);
        const realRate = 0.02;
        const incomePV = yearlySurplus * (1 - Math.pow(1 + realRate, -yearsLeft)) / realRate;
        const hlv = Math.round(incomePV + loans - savings);

        setResult(hlv > 0 ? hlv : 0);

        // Track in GA if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'calculator_used', {
                'event_category': 'tools',
                'event_label': 'hlv_calculator',
                'value': hlv
            });
        }
    };

    const formatCurrency = (amt: number) => {
        return new Intl.NumberFormat(i18n.language === 'hi' ? 'hi-IN' : 'en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amt);
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Input Section */}
            <Card className="border-t-4 border-t-primary shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-primary" />
                        {t('hlv_calc_title', 'Calculate Your HLV')}
                    </CardTitle>
                    <CardDescription>{t('hlv_calc_subtitle', 'Adjust the values to match your financial profile.')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>{t('current_age', 'Current Age')}: <span className="text-primary font-bold">{age}</span></Label>
                            <Label>{t('retire_at', 'Retire at')}: <span className="text-primary font-bold">{retirementAge}</span></Label>
                        </div>
                        <Slider
                            value={[age]}
                            min={18} max={60} step={1}
                            onValueChange={(val) => setAge(val[0])}
                            className="py-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>18</span><span>60</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>{t('annual_income', 'Annual Income')} (₹)</Label>
                        <Input
                            type="number"
                            value={annualIncome}
                            onChange={(e) => setAnnualIncome(Number(e.target.value))}
                            className="text-lg font-semibold"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>{t('outstanding_loans', 'Outstanding Loans')} (₹) <span className="text-xs text-muted-foreground">{t('loans_sublabel', '(Home, Car, Personal)')}</span></Label>
                        <Input
                            type="number"
                            value={loans}
                            onChange={(e) => setLoans(Number(e.target.value))}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>{t('existing_savings', 'Existing Savings/Investments')} (₹)</Label>
                        <Input
                            type="number"
                            value={savings}
                            onChange={(e) => setSavings(Number(e.target.value))}
                        />
                    </div>

                    <div className="pt-4">
                        <Button onClick={calculateHLV} size="lg" className="w-full text-lg shadow-md hover:shadow-xl transition-all font-bold">
                            {t('calculate_btn', 'Calculate My Value')}
                        </Button>
                    </div>

                </CardContent>
            </Card>

            {/* Result Section */}
            <div className="space-y-6">
                <AnimatePresence mode='wait'>
                    {result !== null ? (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Card className="bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full"></div>
                                <CardHeader>
                                    <CardDescription className="text-slate-300">{t('recommended_cover', 'Your Recommended Insurance Cover')}</CardDescription>
                                    <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
                                        {formatCurrency(result)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-300 mb-6">
                                        {t('hlv_result_desc', 'To ensure your family maintains their current lifestyle relative to inflation, this is the corpus they would need today.')}
                                    </p>

                                    <div className="bg-white/10 p-4 rounded-lg mb-6 backdrop-blur-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">{t('income_protection', 'Income Protection')}</span>
                                            <span className="text-green-400 font-bold">{t('included', 'Included')}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">{t('loan_coverage', 'Loan Coverage')}</span>
                                            <span className="text-green-400 font-bold">{t('included', 'Included')}</span>
                                        </div>
                                    </div>

                                    {!showConsultation ? (
                                        <Button
                                            onClick={() => setShowConsultation(true)}
                                            variant="secondary"
                                            size="lg"
                                            className="w-full font-bold"
                                        >
                                            {t('get_quote_btn', 'Get Quote for this Amount')} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                        >
                                            <div className="bg-white text-slate-900 p-4 rounded-xl">
                                                <h4 className="font-bold mb-4">{t('get_expert_assistance', 'Get Expert Assistance')}</h4>
                                                <QuoteForm insuranceType="life_insurance" />
                                            </div>
                                        </motion.div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <Card className="bg-slate-50 border-dashed border-2 flex items-center justify-center h-[400px]">
                            <div className="text-center p-6 text-muted-foreground">
                                <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <h3 className="text-xl font-semibold mb-2">{t('ready_to_calc', 'Ready to Calculate?')}</h3>
                                <p>{t('ready_to_calc_desc', 'Enter your details on the left to see your comprehensive Human Life Value analysis.')}</p>
                            </div>
                        </Card>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
