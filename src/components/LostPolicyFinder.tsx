"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, FileSearch } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LostPolicyFinderProps {
    onAction?: (data?: any) => void;
}

const LostPolicyFinder: React.FC<LostPolicyFinderProps> = ({ onAction }) => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const [formData, setFormData] = useState({
        insurer: '',
        yearsSinceLapse: '',
        hasBond: ''
    });

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            calculateScore();
        }
    };

    const calculateScore = () => {
        let tempScore = 50; // Base probability

        // Insurer Factor
        if (formData.insurer === 'LIC') tempScore += 20; // NIC/LIC is easier to trace usually

        // Time Factor
        const years = parseInt(formData.yearsSinceLapse);
        if (years < 3) tempScore += 20;
        else if (years < 10) tempScore += 10;
        else tempScore -= 10;

        // Document Factor
        if (formData.hasBond === 'yes') tempScore += 25;
        else if (formData.hasBond === 'copy') tempScore += 15;

        // Cap at 98%
        setScore(Math.min(tempScore, 98));
        setShowResult(true);
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800/50 overflow-hidden glass-card">
            <div className="bg-gradient-to-br from-primary to-blue-700 p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <FileSearch className="w-12 h-12 mx-auto mb-3 opacity-90 relative z-10" />
                <h3 className="text-2xl font-bold relative z-10" suppressHydrationWarning>{t("lost_policy_recovery_tool")}</h3>
                <p className="text-sm text-blue-100 opacity-80 relative z-10" suppressHydrationWarning>{t("check_eligibility_revival")}</p>
            </div>

            <div className="p-6">
                {!showResult ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <Label className="text-base font-semibold" suppressHydrationWarning>{t("which_insurance_company")}</Label>
                                    <Select onValueChange={(val) => setFormData({ ...formData, insurer: val })}>
                                        <SelectTrigger className="h-12 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                                            <SelectValue placeholder={t("select_insurer")} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-slate-200 dark:border-slate-700">
                                            <SelectItem value="LIC">{t("lic_of_india")}</SelectItem>
                                            <SelectItem value="Private">{t("private_insurers")}</SelectItem>
                                            <SelectItem value="Unknown">{t("unknown")}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <Label className="text-base font-semibold" suppressHydrationWarning>{t("years_lapse_question")}</Label>
                                    <Select onValueChange={(val) => setFormData({ ...formData, yearsSinceLapse: val })}>
                                        <SelectTrigger className="h-12 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                                            <SelectValue placeholder={t("select_duration")} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-slate-200 dark:border-slate-700">
                                            <SelectItem value="1">{t("less_than_1_year")}</SelectItem>
                                            <SelectItem value="3">{t("1_3_years")}</SelectItem>
                                            <SelectItem value="5">{t("3_10_years")}</SelectItem>
                                            <SelectItem value="15">{t("more_than_10_years")}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <Label className="text-base font-semibold" suppressHydrationWarning>{t("original_bond_question")}</Label>
                                    <Select onValueChange={(val) => setFormData({ ...formData, hasBond: val })}>
                                        <SelectTrigger className="h-12 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                                            <SelectValue placeholder={t("select_document_status")} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-slate-200 dark:border-slate-700">
                                            <SelectItem value="yes">{t("yes_have_it")}</SelectItem>
                                            <SelectItem value="copy">{t("have_copy_only")}</SelectItem>
                                            <SelectItem value="no">{t("lost_completely")}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 flex justify-between items-center bg-slate-50/80 dark:bg-slate-800/50 p-4 rounded-xl">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest" suppressHydrationWarning>
                                {t("step_of", { current: step, total: 3 })}
                            </span>
                            <Button
                                onClick={handleNext}
                                disabled={
                                    (step === 1 && !formData.insurer) ||
                                    (step === 2 && !formData.yearsSinceLapse) ||
                                    (step === 3 && !formData.hasBond)
                                }
                                className="px-8 rounded-lg shadow-lg shadow-primary/20 transition-all font-bold"
                            >
                                {step === 3 ? t("check_probability") : t("next")}
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-2"
                    >
                        <div className="mb-6 flex justify-center">
                            {score > 70 ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full"
                                >
                                    <AlertCircle className="w-16 h-16 text-yellow-500" />
                                </motion.div>
                            )}
                        </div>
                        <h4 className="text-3xl font-black mb-3 text-slate-800 dark:text-white" suppressHydrationWarning>
                            {t("recovery_chance", { score })}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed" suppressHydrationWarning>
                            {score > 80
                                ? t("recovery_excellent")
                                : t("recovery_possible")}
                        </p>

                        <div className="bg-slate-50/80 dark:bg-slate-800/40 p-6 rounded-2xl mb-8 text-sm text-left border border-slate-100 dark:border-slate-700/50">
                            <strong className="block mb-3 text-slate-800 dark:text-slate-200" suppressHydrationWarning>{t("why_use_service")}</strong>
                            <ul className="space-y-3">
                                {[
                                    { key: "trace_policy_numbers", icon: "•" },
                                    { key: "handle_paperwork", icon: "•" },
                                    { key: "no_upfront_fees", icon: "•" }
                                ].map(item => (
                                    <li key={item.key} className="flex gap-2 text-slate-600 dark:text-slate-400">
                                        <span className="text-primary font-bold">{item.icon}</span>
                                        <span suppressHydrationWarning>{t(item.key)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-xl shadow-green-500/20 text-lg font-bold tracking-wide transition-all active:scale-[0.98]"
                            size="lg"
                            onClick={() => {
                                if (onAction) {
                                    onAction({
                                        insuranceType: 'policy_recovery',
                                        formData: formData
                                    });
                                } else {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            suppressHydrationWarning
                        >
                            {t("start_recovery_free")}
                        </Button>

                        <p className="text-[10px] text-slate-400 mt-6 italic" suppressHydrationWarning>
                            {t("recovery_disclaimer")}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default LostPolicyFinder;
