"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, IndianRupee, TrendingUp, AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

type LoanType = 'home' | 'car' | 'personal' | 'education';

interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

const LOAN_PRESETS: Record<LoanType, { label: string; defaultAmount: number; defaultRate: number; defaultTenure: number }> = {
  home: { label: 'Home Loan', defaultAmount: 5000000, defaultRate: 8.5, defaultTenure: 20 },
  car: { label: 'Car Loan', defaultAmount: 800000, defaultRate: 9.0, defaultTenure: 5 },
  personal: { label: 'Personal Loan', defaultAmount: 300000, defaultRate: 12.0, defaultTenure: 3 },
  education: { label: 'Education Loan', defaultAmount: 1000000, defaultRate: 9.5, defaultTenure: 7 },
};

function formatCurrency(amt: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amt);
}

function formatCompact(amt: number): string {
  if (amt >= 10000000) return `₹${(amt / 10000000).toFixed(2)} Cr`;
  if (amt >= 100000) return `₹${(amt / 100000).toFixed(2)} L`;
  return `₹${amt.toLocaleString('en-IN')}`;
}

export default function EMICalculator() {
  const [loanType, setLoanType] = useState<LoanType>('home');
  const [principal, setPrincipal] = useState<string>(LOAN_PRESETS.home.defaultAmount.toString());
  const [annualRate, setAnnualRate] = useState<number>(LOAN_PRESETS.home.defaultRate);
  const [tenureYears, setTenureYears] = useState<number>(LOAN_PRESETS.home.defaultTenure);
  const [showAmortization, setShowAmortization] = useState(false);

  const handleLoanTypeChange = (type: LoanType) => {
    setLoanType(type);
    const preset = LOAN_PRESETS[type];
    setPrincipal(preset.defaultAmount.toString());
    setAnnualRate(preset.defaultRate);
    setTenureYears(preset.defaultTenure);
    setShowAmortization(false);
  };

  const principalNum = Number(principal) || 0;
  const monthlyRate = annualRate / 12 / 100;
  const numMonths = tenureYears * 12;

  const calculation = useMemo(() => {
    if (principalNum <= 0 || monthlyRate <= 0 || numMonths <= 0) return null;

    const emi = Math.round(
      (principalNum * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) /
      (Math.pow(1 + monthlyRate, numMonths) - 1)
    );

    const totalPayment = emi * numMonths;
    const totalInterest = totalPayment - principalNum;

    // Generate amortization schedule
    const schedule: AmortizationRow[] = [];
    let balance = principalNum;

    for (let m = 1; m <= numMonths; m++) {
      const interestPayment = Math.round(balance * monthlyRate);
      const principalPayment = emi - interestPayment;
      balance = Math.max(0, balance - principalPayment);

      schedule.push({
        month: m,
        emi,
        principal: principalPayment,
        interest: interestPayment,
        balance,
      });
    }

    return { emi, totalPayment, totalInterest, schedule };
  }, [principalNum, monthlyRate, numMonths]);

  const principalPercent = calculation
    ? Math.round((principalNum / calculation.totalPayment) * 100)
    : 0;
  const interestPercent = calculation
    ? Math.round((calculation.totalInterest / calculation.totalPayment) * 100)
    : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Input Section */}
      <div className="lg:col-span-7 space-y-6">
        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calculator className="h-6 w-6 text-primary" />
              Loan Details
            </CardTitle>
            <CardDescription>Enter your loan information to calculate EMI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Loan Type Selection */}
            <div className="space-y-3">
              <Label className="text-base font-bold text-slate-700">Loan Type</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(Object.keys(LOAN_PRESETS) as LoanType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleLoanTypeChange(type)}
                    className={`px-4 py-3 rounded-xl border-2 transition-all text-sm font-bold ${
                      loanType === type
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    {LOAN_PRESETS[type].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Loan Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-base font-bold text-slate-700">Loan Amount</Label>
                <span className="text-2xl font-black text-primary">
                  {principalNum > 0 ? formatCompact(principalNum) : '₹ 0'}
                </span>
              </div>
              <Input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Enter loan amount"
                className="h-12 text-lg font-semibold"
              />
              <Slider
                value={[Math.min(Math.max(principalNum / 100000, 1), 200)]}
                onValueChange={(val) => setPrincipal((val[0] * 100000).toString())}
                min={1}
                max={200}
                step={1}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>₹1 Lakh</span>
                <span>₹2 Crore</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-base font-bold text-slate-700">Interest Rate (p.a.)</Label>
                <span className="text-2xl font-black text-primary">{annualRate}%</span>
              </div>
              <Slider
                value={[annualRate]}
                onValueChange={(val) => setAnnualRate(Math.round(val[0] * 10) / 10)}
                min={5}
                max={20}
                step={0.1}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-base font-bold text-slate-700">Loan Tenure</Label>
                <span className="text-2xl font-black text-primary">{tenureYears} Years</span>
              </div>
              <Slider
                value={[tenureYears]}
                onValueChange={(val) => setTenureYears(val[0])}
                min={1}
                max={30}
                step={1}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Result Section */}
      <div className="lg:col-span-5 relative">
        <Card className="sticky top-24 overflow-hidden border-2 border-primary shadow-xl bg-slate-900 text-white">
          <div className="absolute top-0 right-0 p-3 bg-primary text-[10px] font-black uppercase tracking-tighter">
            EMI Estimate
          </div>
          <CardHeader className="pt-10 pb-4 text-center">
            <CardTitle className="text-slate-400 text-sm font-bold uppercase tracking-widest">
              Monthly EMI
            </CardTitle>
            {calculation ? (
              <div className="text-5xl font-black mt-4 flex items-baseline justify-center gap-1">
                <span className="text-2xl text-slate-500">₹</span>
                {calculation.emi.toLocaleString('en-IN')}
                <span className="text-lg text-slate-500 font-normal">/mo</span>
              </div>
            ) : (
              <div className="text-4xl font-black mt-4 text-slate-600">₹ --</div>
            )}
          </CardHeader>
          {calculation && (
            <CardContent className="px-8 pb-8 space-y-4">
              {/* Breakdown */}
              <div className="space-y-2 border-y border-white/10 py-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Principal</span>
                  <span className="font-bold">{formatCurrency(principalNum)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Interest</span>
                  <span className="font-bold text-amber-400">{formatCurrency(calculation.totalInterest)}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                  <span className="text-slate-400">Total Payment</span>
                  <span className="font-bold text-green-400">{formatCurrency(calculation.totalPayment)}</span>
                </div>
              </div>

              {/* Visual Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Principal ({principalPercent}%)</span>
                  <span>Interest ({interestPercent}%)</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden bg-slate-700 flex">
                  <div
                    className="bg-primary h-full"
                    style={{ width: `${principalPercent}%` }}
                  />
                  <div
                    className="bg-amber-400 h-full"
                    style={{ width: `${interestPercent}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">
                    EMI stays fixed throughout the loan tenure.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">
                    Early payments have more interest; later payments have more principal.
                  </p>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Amortization Schedule */}
        {calculation && calculation.schedule.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setShowAmortization(!showAmortization)}
              className="w-full flex items-center justify-between p-4 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <span className="font-bold text-slate-700">Amortization Schedule</span>
              {showAmortization ? (
                <ChevronUp className="h-5 w-5 text-slate-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-500" />
              )}
            </button>

            {showAmortization && (
              <div className="mt-4 bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="max-h-96 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 sticky top-0">
                      <tr>
                        <th className="text-left py-3 px-4 font-bold text-slate-700">Month</th>
                        <th className="text-right py-3 px-4 font-bold text-slate-700">EMI</th>
                        <th className="text-right py-3 px-4 font-bold text-slate-700">Principal</th>
                        <th className="text-right py-3 px-4 font-bold text-slate-700">Interest</th>
                        <th className="text-right py-3 px-4 font-bold text-slate-700">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calculation.schedule.map((row) => (
                        <tr key={row.month} className="border-t border-slate-100 hover:bg-slate-50">
                          <td className="py-2 px-4 font-medium">{row.month}</td>
                          <td className="text-right py-2 px-4">{formatCurrency(row.emi)}</td>
                          <td className="text-right py-2 px-4 text-green-600">{formatCurrency(row.principal)}</td>
                          <td className="text-right py-2 px-4 text-amber-600">{formatCurrency(row.interest)}</td>
                          <td className="text-right py-2 px-4 font-medium">{formatCurrency(row.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
          <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
          <div>
            <h4 className="font-bold text-amber-900 text-sm">Pro Tip</h4>
            <p className="text-amber-800 text-xs leading-relaxed">
              Even a 0.5% reduction in interest rate can save you lakhs over the loan tenure. Compare rates from multiple lenders before committing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
