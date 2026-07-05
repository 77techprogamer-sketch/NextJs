'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Receipt, IndianRupee } from 'lucide-react';

const COLORS = ['#ef4444', '#10b981', '#3b82f6', '#f59e0b'];

export default function IncomeTaxCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [regime, setRegime] = useState<'new' | 'old'>('new');
  const [income, setIncome] = useState(1200000);
  const [deductions, setDeductions] = useState({ section80C: 150000, section80D: 25000, section80CCD: 50000, hra: 0, standardDeduction: 75000 });
  const [surchargeRate, setSurchargeRate] = useState(0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const calculateTaxNew = (taxableIncome: number) => {
    if (taxableIncome <= 300000) return 0;
    if (taxableIncome <= 700000) return (taxableIncome - 300000) * 0.05;
    if (taxableIncome <= 1000000) return 20000 + (taxableIncome - 700000) * 0.10;
    if (taxableIncome <= 1200000) return 50000 + (taxableIncome - 1000000) * 0.15;
    if (taxableIncome <= 1500000) return 80000 + (taxableIncome - 1200000) * 0.20;
    return 140000 + (taxableIncome - 1500000) * 0.30;
  };

  const calculateTaxOld = (taxableIncome: number) => {
    if (taxableIncome <= 250000) return 0;
    if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
    if (taxableIncome <= 1000000) return 12500 + (taxableIncome - 500000) * 0.20;
    return 112500 + (taxableIncome - 1000000) * 0.30;
  };

  const results = useMemo(() => {
    let taxableIncome: number;
    let tax: number;

    if (regime === 'new') {
      taxableIncome = Math.max(0, income - 75000); // standard deduction only
      tax = calculateTaxNew(taxableIncome);
    } else {
      const totalDeductions = deductions.section80C + deductions.section80D + deductions.section80CCD + deductions.hra + deductions.standardDeduction;
      taxableIncome = Math.max(0, income - totalDeductions);
      tax = calculateTaxOld(taxableIncome);
    }

    // Rebate u/s 87A
    if (regime === 'new' && income <= 1200000) {
      tax = Math.max(0, tax - 60000);
    } else if (regime === 'old' && income <= 500000) {
      tax = Math.max(0, tax - 12500);
    }

    // Surcharge
    let surcharge = 0;
    if (income > 50000000) {
      surcharge = tax * 0.37;
    } else if (income > 20000000) {
      surcharge = tax * 0.25;
    } else if (income > 10000000) {
      surcharge = tax * 0.15;
    } else if (income > 5000000) {
      surcharge = tax * 0.10;
    }

    const cess = (tax + surcharge) * 0.04;
    const totalTax = tax + surcharge + cess;
    const effectiveRate = income > 0 ? ((totalTax / income) * 100).toFixed(2) : '0';

    const chartPieData = [
      { name: 'Tax Payable', value: Math.round(tax) },
      { name: 'Surcharge', value: Math.round(surcharge) },
      { name: 'Cess (4%)', value: Math.round(cess) },
      { name: 'Take Home', value: Math.round(income - totalTax) }
    ];

    return {
      taxableIncome: Math.round(taxableIncome),
      baseTax: Math.round(tax),
      surcharge: Math.round(surcharge),
      cess: Math.round(cess),
      totalTax: Math.round(totalTax),
      effectiveRate,
      monthlyTakeHome: Math.round((income - totalTax) / 12),
      chartPieData
    };
  }, [income, regime, deductions]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Receipt className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Tax Regime</label>
              <div className="flex gap-4">
                <button onClick={() => setRegime('new')} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${regime === 'new' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>New Regime</button>
                <button onClick={() => setRegime('old')} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${regime === 'old' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Old Regime</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Annual Income</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="250000" max="10000000" step="50000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            {regime === 'old' && (
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deductions (Old Regime Only)</p>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-slate-600">80C (PPF, ELSS, LIC)</label>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1">
                      <IndianRupee className="w-3 h-3 text-slate-400 mr-1" />
                      <input type="number" value={deductions.section80C} onChange={(e) => setDeductions({ ...deductions, section80C: Number(e.target.value) })} className="w-20 bg-transparent outline-none font-bold text-slate-900 text-right text-sm" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-slate-600">80D (Health Insurance)</label>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1">
                      <IndianRupee className="w-3 h-3 text-slate-400 mr-1" />
                      <input type="number" value={deductions.section80D} onChange={(e) => setDeductions({ ...deductions, section80D: Number(e.target.value) })} className="w-20 bg-transparent outline-none font-bold text-slate-900 text-right text-sm" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-slate-600">80CCD(1B) (NPS)</label>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1">
                      <IndianRupee className="w-3 h-3 text-slate-400 mr-1" />
                      <input type="number" value={deductions.section80CCD} onChange={(e) => setDeductions({ ...deductions, section80CCD: Number(e.target.value) })} className="w-20 bg-transparent outline-none font-bold text-slate-900 text-right text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Taxable Income</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.taxableIncome)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Effective Rate</p>
              <p className="text-xl font-bold tracking-tight">{results.effectiveRate}%</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Base Tax</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.baseTax)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Monthly Take Home</p>
              <p className="text-xl font-bold tracking-tight text-emerald-400">{formatCurrency(results.monthlyTakeHome)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-red-600/30 to-orange-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-red-200 font-medium mb-2 uppercase tracking-wider">Total Tax Liability</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.totalTax)}</p>
              </div>
              <Receipt className="w-12 h-12 text-red-400 opacity-80" />
            </div>
          </div>
          <div className="h-64 w-full relative z-10 flex justify-center items-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-slate-400 uppercase tracking-widest mb-1 mt-6">Total Tax</span>
              <span className="text-xl font-bold text-white tracking-tight">{formatCurrency(results.totalTax)}</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={results.chartPieData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={3} dataKey="value" stroke="none" cornerRadius={6}>
                  {results.chartPieData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} itemStyle={{ color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5 text-sm text-amber-800">
        <strong>Note:</strong> This calculator is for FY 2025-26 (AY 2026-27). New regime slabs apply with standard deduction of ₹75,000. Old regime allows 80C, 80D, HRA deductions.
      </div>
    </CalculatorLayout>
  );
}
