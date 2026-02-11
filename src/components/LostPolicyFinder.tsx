"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, FileSearch } from 'lucide-react';

interface LostPolicyFinderProps {
    onAction?: (data?: any) => void;
}

const LostPolicyFinder: React.FC<LostPolicyFinderProps> = ({ onAction }) => {
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
        <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-primary p-6 text-white text-center">
                <FileSearch className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <h3 className="text-xl font-bold">Lost Policy Recovery Tool</h3>
                <p className="text-sm text-blue-100">Check your eligibility for policy revival</p>
            </div>

            <div className="p-6">
                {!showResult ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Which Insurance Company?</Label>
                                    <Select onValueChange={(val) => setFormData({ ...formData, insurer: val })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Insurer" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="LIC">LIC of India</SelectItem>
                                            <SelectItem value="Private">HDFC / ICICI / SBI / Others</SelectItem>
                                            <SelectItem value="Unknown">I don&apos;t remember</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Approximately how many years ago did it lapse?</Label>
                                    <Select onValueChange={(val) => setFormData({ ...formData, yearsSinceLapse: val })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Less than 1 year</SelectItem>
                                            <SelectItem value="3">1 - 3 years</SelectItem>
                                            <SelectItem value="5">3 - 10 years</SelectItem>
                                            <SelectItem value="15">More than 10 years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Do you have the Original Policy Bond?</Label>
                                    <Select onValueChange={(val) => setFormData({ ...formData, hasBond: val })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Document Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes, I have it</SelectItem>
                                            <SelectItem value="copy">I have a Xerox/Photo only</SelectItem>
                                            <SelectItem value="no">No, lost completely</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        <div className="mt-6 flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Step {step} of 3</span>
                            <Button onClick={handleNext} disabled={
                                (step === 1 && !formData.insurer) ||
                                (step === 2 && !formData.yearsSinceLapse) ||
                                (step === 3 && !formData.hasBond)
                            }>
                                {step === 3 ? 'Check Probability' : 'Next'}
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-4"
                    >
                        <div className="mb-4 flex justify-center">
                            {score > 70 ? (
                                <CheckCircle2 className="w-16 h-16 text-green-500" />
                            ) : (
                                <AlertCircle className="w-16 h-16 text-yellow-500" />
                            )}
                        </div>
                        <h4 className="text-2xl font-bold mb-2">Recovery Chance: {score}%</h4>
                        <p className="text-muted-foreground mb-6">
                            {score > 80
                                ? "Excellent! Your policy is highly likely to be recoverable with full benefits."
                                : "Your case requires expert handling, but recovery is possible."}
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-6 text-sm text-left border">
                            <strong>Why use our service?</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                                <li>We trace lost policy numbers using archives.</li>
                                <li>We handle &quot;Indemnity Bond&quot; paperwork for lost documents.</li>
                                <li>No upfront fees for checking status.</li>
                            </ul>
                        </div>

                        <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
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
                        >
                            Start Recovery Process Free
                        </Button>

                        <p className="text-xs text-muted-foreground mt-4">
                            *This is an estimate. Official confirmation requires insurer verification.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default LostPolicyFinder;
