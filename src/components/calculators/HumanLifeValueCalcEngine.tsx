'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { UserCheck, IndianRupee } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export default function HumanLifeValueCalcEngine({ title, description }: { title: string, description: string }) {
  const [age, setAge] = useState(35);
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [expenses, setExpenses] = useState(400000);
  const [liabilities, setLiabilities] = useState(5000000);
  const [goals, setGoals] = useState(3000000); // education, marriage etc.
  const [inflationRate, setInflationRate] = useState(6);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    const workingYears = Math.max(0, 60 - age);
    const realReturnRate = 0.10 - (inflationRate / 100); // 10% investment return - inflation

    // Future value of income stream
    let incomeReplacementValue = 0;
    for (let year = 1; year <= workingYears; year++) {
      const futureIncome = annualIncome * Math.pow(1 + inflationRate / 100, year);
      incomeReplacementValue += futureIncome / Math.pow(1.10, year);
    }

    // Total needs
    const totalNeeds = incomeReplacementValue + liabilities + goals;
    const hlv = Math.round(totalNeeds);

    const chartPieData = [
      { name: 'Income Replacement', value: Math.round(incomeReplacementValue) },
      { name: 'Liabilities', value: Math.round(liabilities) },
      { name: 'Future Goals', value: Math.round(goals) }
    ];

    return {
      hlv,
      incomeReplacementValue: Math.round(incomeReplacementValue),
      totalNeeds: Math.round(totalNeeds),
      workingYears,
      chartPieData
    };
  }, [age, annualIncome, expenses, liabilities, goals, inflationRate]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <UserCheck className="w-32 h-32" />
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
                  <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="200000" max="10000000" step="100000" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Annual Expenses</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="100000" max={annualIncome} step="50000" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Total Liabilities</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={liabilities} onChange={(e) => setLiabilities(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="0" max="50000000" step="1000000" value={liabilities} onChange={(e) => setLiabilities(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Future Goals (Education, etc.)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={goals} onChange={(e) => setGoals(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="0" max="20000000" step="1000000" value={goals} onChange={(e) => setGoals(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Working Years Left</p>
              <p className="text-2xl font-bold tracking-tight">{results.workingYears} Yrs</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Income Replacement</p>
              <p className="text-xl font-bold tracking-tight text-blue-400">{formatCurrency(results.incomeReplacementValue)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Human Life Value (HLV)</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.hlv)}</p>
                <p className="text-xs text-slate-400 mt-1">Recommended life insurance cover</p>
              </div>
              <UserCheck className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>
          <div className="h-56 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={results.chartPieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" stroke="none" cornerRadius={8}>
                  {results.chartPieData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
        <strong>What is HLV?</strong> Human Life Value is the present value of your future earnings. It helps determine how much life insurance you need to financially protect your family if you're no longer around.
      </div>
    </CalculatorLayout>
  );
}
