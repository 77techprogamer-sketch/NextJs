"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, AlertCircle, Info, HeartPulse, Building2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HealthInsuranceCalculator() {
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState('male');
    const [isSmoker, setIsSmoker] = useState(false);
    const [coverage, setCoverage] = useState(5);
    const [cityTier, setCityTier] = useState('metro');

    const [basicPremium, setBasicPremium] = useState(0);
    const [comprehensivePremium, setComprehensivePremium] = useState(0);
    const [superTopUpPremium, setSuperTopUpPremium] = useState(0);

    const calculatePremiums = useMemo(() => {
        const baseRatePerLakh = 45;
        const ageFactor = Math.pow(1.06, (age - 18));
        const smokerLoading = isSmoker ? 1.4 : 1.0;
        const genderFactor = gender === 'female' ? 0.95 : 1.0;
        const cityFactor = cityTier === 'metro' ? 1.25 : 1.0;
        const coverageAmount = coverage;

        const basicBase = baseRatePerLakh * coverageAmount * 0.7 * ageFactor * smokerLoading * genderFactor * cityFactor;
        const comprehensiveBase = baseRatePerLakh * coverageAmount * ageFactor * smokerLoading * genderFactor * cityFactor;
        const superTopUpBase = baseRatePerLakh * coverageAmount * 0.35 * ageFactor * smokerLoading * genderFactor * cityFactor;

        return {
            basic: Math.round(basicBase),
            comprehensive: Math.round(comprehensiveBase),
            superTopUp: Math.round(superTopUpBase),
        };
    }, [age, gender, isSmoker, coverage, cityTier]);

    useEffect(() => {
        setBasicPremium(calculatePremiums.basic);
        setComprehensivePremium(calculatePremiums.comprehensive);
        setSuperTopUpPremium(calculatePremiums.superTopUp);
    }, [calculatePremiums]);

    const handleGetQuote = () => {
        if (typeof window !== 'undefined' && (window as any).triggerGlobalForm) {
            (window as any).triggerGlobalForm({
                insuranceType: 'health_insurance',
                formData: {
                    source: 'health_insurance_calculator',
                    sumAssured: coverage * 100000,
                    estimatedPremium: comprehensivePremium,
                    age: age,
                    gender: gender === 'male' ? 'Male' : 'Female',
                    isSmoker: isSmoker,
                    cityTier: cityTier,
                }
            });
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Section */}
            <div className="lg:col-span-7 space-y-8">
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-0 space-y-8">
                        {/* Age Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label className="text-base font-bold text-slate-700">Your Current Age</Label>
                                <span className="text-2xl font-black text-primary">{age} Years</span>
                            </div>
                            <Slider
                                value={[age]}
                                onValueChange={(val) => setAge(val[0])}
                                min={18}
                                max={70}
                                step={1}
                                className="cursor-pointer"
                            />
                        </div>

                        {/* Gender & Lifestyle */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <Label className="text-base font-bold text-slate-700">Gender</Label>
                                <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4">
                                    <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                        <RadioGroupItem value="male" id="h-male" />
                                        <Label htmlFor="h-male" className="cursor-pointer">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                        <RadioGroupItem value="female" id="h-female" />
                                        <Label htmlFor="h-female" className="cursor-pointer">Female</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Label className="text-base font-bold text-slate-700">Tobacco/Smoking</Label>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4 text-slate-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="w-64 text-xs">Smokers pay significantly higher health premiums due to elevated risk of heart disease, cancer, and respiratory conditions.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <RadioGroup
                                    value={isSmoker ? 'yes' : 'no'}
                                    onValueChange={(val) => setIsSmoker(val === 'yes')}
                                    className="flex gap-4"
                                >
                                    <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                        <RadioGroupItem value="no" id="h-no" />
                                        <Label htmlFor="h-no" className="cursor-pointer">No</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                        <RadioGroupItem value="yes" id="h-yes" />
                                        <Label htmlFor="h-yes" className="cursor-pointer text-red-600">Yes</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        {/* Coverage Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Label className="text-base font-bold text-slate-700">Sum Insured (Health Cover)</Label>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4 text-slate-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="w-64 text-xs">IRDAI recommends a minimum of ₹5 Lakh health cover. In metro cities, ₹10-25 Lakh is advisable due to higher treatment costs.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <span className="text-2xl font-black text-primary">₹ {coverage >= 100 ? `${(coverage / 100).toFixed(1)} Cr` : `${coverage} Lakh`}</span>
                            </div>
                            <Slider
                                value={[coverage]}
                                onValueChange={(val) => setCoverage(val[0])}
                                min={3}
                                max={200}
                                step={1}
                                className="cursor-pointer"
                            />
                            <p className="text-xs text-slate-500 italic">Recommended: Minimum ₹10 Lakh for metro cities</p>
                        </div>

                        {/* City Tier */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Label className="text-base font-bold text-slate-700">City Tier</Label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info className="h-4 w-4 text-slate-400" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="w-64 text-xs">Metro cities (Tier-1) like Mumbai, Delhi, Bangalore have 20-30% higher medical treatment costs compared to Tier-2/3 cities.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <RadioGroup value={cityTier} onValueChange={setCityTier} className="flex gap-4">
                                <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                    <RadioGroupItem value="metro" id="metro" />
                                    <Label htmlFor="metro" className="cursor-pointer flex items-center gap-1"><Building2 className="h-3.5 w-3.5" /> Metro (Tier-1)</Label>
                                </div>
                                <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                    <RadioGroupItem value="non-metro" id="non-metro" />
                                    <Label htmlFor="non-metro" className="cursor-pointer flex items-center gap-1"><Building2 className="h-3.5 w-3.5" /> Non-Metro (Tier-2/3)</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Result Section */}
            <div className="lg:col-span-5 relative">
                <Card className="sticky top-24 overflow-hidden border-2 border-primary shadow-xl bg-slate-900 text-white">
                    <div className="absolute top-0 right-0 p-3 bg-primary text-[10px] font-black uppercase tracking-tighter">
                        Estimated Quote
                    </div>
                    <CardHeader className="pt-10 pb-4 text-center">
                        <CardTitle className="text-slate-400 text-sm font-bold uppercase tracking-widest">Annual Premium Range</CardTitle>
                        <div className="text-5xl font-black mt-2 flex items-baseline justify-center gap-1">
                            <span className="text-2xl text-slate-500">₹</span>
                            {Math.round(comprehensivePremium / 12).toLocaleString()}
                            <span className="text-lg text-slate-500 font-normal">/mo*</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Comprehensive plan estimate</p>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 space-y-6">
                        {/* Three plan tiers */}
                        <div className="space-y-3 border-y border-white/10 py-4">
                            <div className="flex justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                                    <span className="text-slate-400">Basic Plan</span>
                                </div>
                                <span className="font-bold">₹ {basicPremium.toLocaleString()}/yr</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                                    <span className="text-slate-400">Comprehensive</span>
                                </div>
                                <span className="font-bold text-green-400">₹ {comprehensivePremium.toLocaleString()}/yr</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                                    <span className="text-slate-400">Super Top-Up</span>
                                </div>
                                <span className="font-bold">₹ {superTopUpPremium.toLocaleString()}/yr</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-5 w-5 text-green-500 shrink-0" />
                                <p className="text-xs text-slate-400">Cashless treatment available at 10,000+ network hospitals across India.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <HeartPulse className="h-5 w-5 text-green-500 shrink-0" />
                                <p className="text-xs text-slate-400">Covers hospitalization, pre &post care, daycare procedures, and AYUSH treatments.</p>
                            </div>
                        </div>

                        <Button
                            onClick={handleGetQuote}
                            className="w-full h-14 text-lg font-black bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            GET FREE CONSULTATION
                        </Button>
                        <p className="text-[10px] text-center text-slate-500 italic">
                            *This is an indicative estimate. Actual premiums depend on medical history, pre-existing conditions, and insurer underwriting.
                        </p>
                    </CardContent>
                </Card>

                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                    <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-amber-900 text-sm">Pro Tip</h4>
                        <p className="text-amber-800 text-xs">Buy health insurance before age 35 to lock in lower premiums and avoid waiting period overlaps with pre-existing conditions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
