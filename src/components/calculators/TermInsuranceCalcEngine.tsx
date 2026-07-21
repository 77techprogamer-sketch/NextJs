'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Heart, IndianRupee, ShieldCheck } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export default function TermInsuranceCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [age, setAge] = useState(30);
  const [income, setIncome] = useState(1200000);
  const [existingCover, setExistingCover] = useState(0);
  const [existingLoans, setExistingLoans] = useState(0);
  const [dependents, setDependents] = useState(2);
  const [yearsOfSupport, setYearsOfSupport] = useState(25);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    // Human Life Value method
    const workingYears = Math.max(0, 60 - age);
    const incomeMultiplier = Math.min(workingYears, yearsOfSupport);

    // Total income needed = Annual income * years of support
    const totalIncomeNeeded = income * incomeMultiplier;

    // Add liabilities, subtract existing cover
    const totalObligations = totalIncomeNeeded + existingLoans;
    const netCoverNeeded = Math.max(0, totalObligations - existingCover);

    // Factors in dependents
    const dependentFactor = 1 + (dependents * 0.15);
    const recommendedCover = netCoverNeeded * dependentFactor;

    // Estimated premium (approx ₹12-15 per ₹1000 cover per year for online term)
    const premiumRatePerThousand = age <= 30 ? 12 : age <= 35 ? 14 : age <= 40 ? 18 : age <= 45 ? 25 : 35;
    const annualPremium = (recommendedCover / 1000) * premiumRatePerThousand;
    const monthlyPremium = annualPremium / 12;

    const chartPieData = [
      { name: 'Income Replacement', value: Math.round(totalIncomeNeeded) },
      { name: 'Loans/Liabilities', value: Math.round(existingLoans) },
      { name: 'Existing Cover (offset)', value: -Math.round(existingCover) }
    ];

    return {
      recommendedCover: Math.round(recommendedCover),
      annualPremium: Math.round(annualPremium),
      monthlyPremium: Math.round(monthlyPremium),
      chartPieData,
      coverToIncomeRatio: (recommendedCover / income).toFixed(1)
    };
  }, [age, income, existingCover, existingLoans, dependents, yearsOfSupport]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <ShieldCheck className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Current Age</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="18" max="60" step="1" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Annual Income</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="300000" max="50000000" step="100000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Existing Loans</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={existingLoans} onChange={(e) => setExistingLoans(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="0" max="10000000" step="500000" value={existingLoans} onChange={(e) => setExistingLoans(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Existing Life Cover</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={existingCover} onChange={(e) => setExistingCover(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="0" max="20000000" step="1000000" value={existingCover} onChange={(e) => setExistingCover(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Number of Dependents</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={dependents} onChange={(e) => setDependents(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">ppl</span>
                </div>
              </div>
              <input type="range" min="0" max="6" step="1" value={dependents} onChange={(e) => setDependents(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Cover:Income Ratio</p>
              <p className="text-2xl font-bold tracking-tight text-blue-400">{results.coverToIncomeRatio}x</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Monthly Premium</p>
              <p className="text-2xl font-bold tracking-tight text-amber-400">{formatCurrency(results.monthlyPremium)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Recommended Sum Assured</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.recommendedCover)}</p>
              </div>
              <Heart className="w-12 h-12 text-red-400 opacity-80" />
            </div>
          </div>
          <div className="h-56 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={[
                  { name: 'Income Replacement', value: results.chartPieData[0].value },
                  { name: 'Liabilities', value: results.chartPieData[1].value }
                ]} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={5} dataKey="value" stroke="none" cornerRadius={8}>
                  {[COLORS[0], COLORS[1]].map((color, i) => (<Cell key={i} fill={color} />))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-sm text-emerald-800">
        <strong>Rule of Thumb:</strong> Aim for 15-20x your annual income as life cover. Buy early — premiums increase 8-10% per year with age.
      </div>
    </CalculatorLayout>
  );
}
