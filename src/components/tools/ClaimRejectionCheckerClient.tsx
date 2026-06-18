"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle2, ChevronRight, FileSearch, ShieldAlert, ArrowLeft } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import { Progress } from '@/components/ui/progress';

type Step = 1 | 2 | 3 | 4;

export default function ClaimRejectionCheckerClient() {
    const { t } = useTranslation();
    const [step, setStep] = useState<Step>(1);
    
    const [policyType, setPolicyType] = useState<string>('');
    const [rejectionReason, setRejectionReason] = useState<string>('');
    const [claimAmount, setClaimAmount] = useState<string>('');

    const handleNext = () => setStep((s) => Math.min(s + 1, 4) as Step);
    const handleBack = () => setStep((s) => Math.max(s - 1, 1) as Step);

    const calculateViability = () => {
        let score = 50; // base score
        let message = '';
        let color = 'text-yellow-600';

        // Reason weights
        switch (rejectionReason) {
            case 'delay':
                score += 30; // Delay is highly contestable
                message = "Claims rejected due to delay in intimation have a high chance of reversal if a valid reason (like medical emergency) is provided, per IRDAI guidelines.";
                color = 'text-green-600';
                break;
            case 'non-disclosure':
                score += 10;
                message = "Non-disclosure rejections can often be challenged, especially if the non-disclosed condition was not material to the cause of the claim (e.g. death claim) or if the policy is over 3 years old (Section 45).";
                color = 'text-yellow-600';
                break;
            case 'conditions':
                score += 20;
                message = "Rejections based on fine print or policy conditions are frequently overturned by the Insurance Ombudsman if they are deemed ambiguous or unfair.";
                color = 'text-green-600';
                break;
            case 'lapsed':
                score -= 20;
                message = "Claims on lapsed policies are difficult to recover unless there was a failure in communication from the insurer regarding renewal or grace periods.";
                color = 'text-orange-600';
                break;
            case 'fraud':
                score -= 40;
                message = "Rejections based on alleged fraud or misrepresentation require strong documentary evidence to counter the insurer's investigation.";
                color = 'text-red-600';
                break;
            default:
                message = "Every rejected claim deserves a second look by an expert. Many technical rejections can be overturned through proper representation.";
                break;
        }

        if (score > 100) score = 100;
        if (score < 10) score = 10;

        return { score, message, color };
    };

    const { score, message, color } = calculateViability();

    const getWhatsappLink = () => {
        const msg = `Hi, my ${policyType || 'insurance'} claim of ${claimAmount || 'some amount'} was rejected due to '${rejectionReason || 'some reason'}'. I got a viability score of ${score}%. Can you help me appeal?`;
        return contactConfig.getWhatsappUrl(msg);
    };

    return (
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                    <FileSearch className="h-8 w-8 text-primary" />
                    Claim Rejection Checker
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Has your insurance claim been unfairly rejected? Answer three quick questions to check the viability of an appeal to the Grievance Cell or Insurance Ombudsman.
                </p>
            </div>

            <Card className="shadow-lg border-primary/10">
                <CardHeader className="bg-gray-50 dark:bg-gray-800/50 border-b">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Appeal Viability Assessment</CardTitle>
                        <span className="text-sm font-medium text-gray-500">Step {step} of 4</span>
                    </div>
                    <Progress value={(step / 4) * 100} className="h-2 mt-4" />
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <h3 className="text-lg font-semibold mb-4">What type of insurance policy was the claim filed under?</h3>
                            <RadioGroup value={policyType} onValueChange={setPolicyType} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Health Insurance', 'Life Insurance', 'Motor Insurance', 'Other General Insurance'].map((type) => (
                                    <div key={type} className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                                        <RadioGroupItem value={type} id={type} />
                                        <Label htmlFor={type} className="flex-1 cursor-pointer">{type}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            <div className="flex justify-end pt-4">
                                <Button onClick={handleNext} disabled={!policyType} className="w-full sm:w-auto">
                                    Next <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <h3 className="text-lg font-semibold mb-4">What was the primary reason given for rejection?</h3>
                            <RadioGroup value={rejectionReason} onValueChange={setRejectionReason} className="grid grid-cols-1 gap-3">
                                {[
                                    { value: 'non-disclosure', label: 'Non-disclosure of pre-existing disease / material facts' },
                                    { value: 'delay', label: 'Delay in intimation or submission of documents' },
                                    { value: 'conditions', label: 'Claim falls under exclusion / Policy conditions not met' },
                                    { value: 'lapsed', label: 'Policy was in lapsed status' },
                                    { value: 'fraud', label: 'Investigation findings (alleged fraud or misrepresentation)' },
                                    { value: 'other', label: 'Other / Not sure' }
                                ].map((reason) => (
                                    <div key={reason.value} className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                                        <RadioGroupItem value={reason.value} id={reason.value} />
                                        <Label htmlFor={reason.value} className="flex-1 cursor-pointer">{reason.label}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            <div className="flex justify-between pt-4">
                                <Button variant="outline" onClick={handleBack}>
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                </Button>
                                <Button onClick={handleNext} disabled={!rejectionReason}>
                                    Next <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <h3 className="text-lg font-semibold mb-4">What is the approximate claim amount?</h3>
                            <Select value={claimAmount} onValueChange={setClaimAmount}>
                                <SelectTrigger className="w-full h-12 text-lg">
                                    <SelectValue placeholder="Select amount range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="under_1l">Under ₹1 Lakh</SelectItem>
                                    <SelectItem value="1l_to_5l">₹1 Lakh - ₹5 Lakhs</SelectItem>
                                    <SelectItem value="5l_to_20l">₹5 Lakhs - ₹20 Lakhs</SelectItem>
                                    <SelectItem value="above_20l">Above ₹20 Lakhs</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex justify-between pt-8">
                                <Button variant="outline" onClick={handleBack}>
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                </Button>
                                <Button onClick={handleNext} disabled={!claimAmount} size="lg" className="bg-primary hover:bg-primary/90">
                                    Check Viability <FileSearch className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-8 animate-in fade-in zoom-in duration-500 text-center">
                            <div className="inline-block p-4 rounded-full bg-primary/10 mb-2">
                                {score >= 60 ? (
                                    <CheckCircle2 className={`h-16 w-16 ${color}`} />
                                ) : (
                                    <ShieldAlert className={`h-16 w-16 ${color}`} />
                                )}
                            </div>
                            
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Appeal Viability Score: <span className={color}>{score}%</span></h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
                                    {message}
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl border border-blue-100 dark:border-blue-900 text-left">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-3">
                                    <AlertCircle className="h-5 w-5" /> What to do next?
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 text-blue-800 dark:text-blue-300">
                                    <li>Do not accept the rejection as final. IRDAI has strict guidelines against unfair claim repudiation.</li>
                                    <li>Gather all relevant medical or policy documents and previous correspondence.</li>
                                    <li>Get a free expert evaluation of your rejection letter to draft a strong representation to the Grievance Cell or Ombudsman.</li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
                                        WhatsApp Rejection Letter
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-2 hover:bg-gray-50">
                                    <a href={contactConfig.getDialUrl()}>
                                        Call Expert Now
                                    </a>
                                </Button>
                            </div>
                            
                            <Button variant="ghost" onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500">
                                Start Over
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
