"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, TrendingUp, AlertCircle, Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TermCalculator() {
    // State for inputs
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState('male');
    const [isSmoker, setIsSmoker] = useState(false);
    const [coverage, setCoverage] = useState(100); // In Lakhs
    const [tenure, setTenure] = useState(30);
    
    // Result State
    const [premium, setPremium] = useState(0);

    // Calculate premium based on a simplified actuarial model
    const calculatePremium = useMemo(() => {
        // Base rate: ₹7.5 per 1 Lakh coverage for a 30yo healthy male
        const baseRatePerLakh = 7.5;
        
        // Age factor: Exponential growth (premium roughly doubles every 10 years)
        const ageFactor = Math.pow(1.07, (age - 18));
        
        // Smoker loading: smokers pay ~60% more
        const smokerLoading = isSmoker ? 1.6 : 1.0;
        
        // Gender discount: Females generally pay ~10% less
        const genderDiscount = gender === 'female' ? 0.9 : 1.0;
        
        // Tenure adjustment: Longer tenure increases annual risk slightly
        const tenureFactor = 1 + (tenure / 100);

        const annualPremiumBase = baseRatePerLakh * coverage * ageFactor * smokerLoading * genderDiscount * tenureFactor;
        
        // Add 18% GST
        const finalAnnualPremium = annualPremiumBase * 1.18;
        
        return Math.round(finalAnnualPremium);
    }, [age, gender, isSmoker, coverage, tenure]);

    useEffect(() => {
        setPremium(calculatePremium);
    }, [calculatePremium]);

    const monthlyPremium = Math.round(premium / 12);

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
                                max={65} 
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
                                        <RadioGroupItem value="male" id="male" />
                                        <Label htmlFor="male" className="cursor-pointer">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                        <RadioGroupItem value="female" id="female" />
                                        <Label htmlFor="female" className="cursor-pointer">Female</Label>
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
                                                <p className="w-64 text-xs">Premiums are significantly higher for smokers due to higher mortality risk.</p>
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
                                        <RadioGroupItem value="no" id="no" />
                                        <Label htmlFor="no" className="cursor-pointer">No</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex-1">
                                        <RadioGroupItem value="yes" id="yes" />
                                        <Label htmlFor="yes" className="cursor-pointer text-red-600">Yes</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        {/* Coverage Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label className="text-base font-bold text-slate-700">Sum Assured (Life Cover)</Label>
                                <span className="text-2xl font-black text-primary">₹ {coverage >= 100 ? `${(coverage / 100).toFixed(1)} Cr` : `${coverage} Lakh`}</span>
                            </div>
                            <Slider 
                                value={[coverage]} 
                                onValueChange={(val) => setCoverage(val[0])} 
                                min={25} 
                                max={1000} 
                                step={25}
                                className="cursor-pointer"
                            />
                            <p className="text-xs text-slate-500 italic">Recommended: 15x your annual income</p>
                        </div>

                        {/* Tenure Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label className="text-base font-bold text-slate-700">Policy Tenure</Label>
                                <span className="text-2xl font-black text-primary">{tenure} Years</span>
                            </div>
                            <Slider 
                                value={[tenure]} 
                                onValueChange={(val) => setTenure(val[0])} 
                                min={5} 
                                max={40} 
                                step={5}
                                className="cursor-pointer"
                            />
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
                        <CardTitle className="text-slate-400 text-sm font-bold uppercase tracking-widest">Starting Monthly Premium</CardTitle>
                        <div className="text-6xl font-black mt-2 flex items-baseline justify-center gap-1">
                            <span className="text-3xl text-slate-500">₹</span>
                            {monthlyPremium.toLocaleString()}
                            <span className="text-lg text-slate-500 font-normal">/mo*</span>
                        </div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 space-y-6">
                        <div className="space-y-2 border-y border-white/10 py-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Annual Premium</span>
                                <span className="font-bold">₹ {premium.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm italic text-slate-500">
                                <span>Includes 18% GST</span>
                                <span>-</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-5 w-5 text-green-500 shrink-0" />
                                <p className="text-xs text-slate-400">Guaranteed fixed premiums for the entire duration of the policy.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <TrendingUp className="h-5 w-5 text-green-500 shrink-0" />
                                <p className="text-xs text-slate-400">Claim settlements verified by Insurance Support veteran advisors.</p>
                            </div>
                        </div>

                        <Button className="w-full h-14 text-lg font-black bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            <Phone className="h-5 w-5" />
                            GET DETAILED QUOTE
                        </Button>
                        <p className="text-[10px] text-center text-slate-500 italic">
                            *This is an indicative estimate. Actual premiums depend on medical history and insurer underwriting.
                        </p>
                    </CardContent>
                </Card>

                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                    <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-amber-900 text-sm">Pro Tip</h4>
                        <p className="text-amber-800 text-xs">Buying term insurance before age 30 can save you up to 40% in lifetime premium costs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
