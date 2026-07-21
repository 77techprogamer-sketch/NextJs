'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { PiggyBank, IndianRupee } from 'lucide-react';

export default function TaxAndPensionEngine({ title, description }: { title: string, description: string }) {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(10);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = useMemo(() => {
    const yearsToRetirement = retirementAge - currentAge;
    
    if (yearsToRetirement <= 0) {
      return { invested: 0, corpus: 0, monthlyPension: 0, chartData: [], schedule: [] };
    }
    
    // Future value of annuity formula: P * (((1 + r)^n - 1) / r) * (1 + r)
    // Here we compute exact year by year for the schedule
    const monthlyRate = expectedReturn / 12 / 100;
    
    let totalInvested = 0;
    let futureValue = 0;
    
    const chartData = [];
    const schedule = [];

    // Calculate year by year
    for (let year = 1; year <= yearsToRetirement; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvested += monthlyContribution;
        futureValue = (futureValue + monthlyContribution) * (1 + monthlyRate);
      }
      
      const currentAgeAtYear = currentAge + year;
      
      chartData.push({
        age: `Age ${currentAgeAtYear}`,
        'Total Invested': Math.round(totalInvested),
        'Wealth Gained': Math.round(futureValue - totalInvested)
      });

      schedule.push({
        age: currentAgeAtYear,
        invested: Math.round(totalInvested),
        returns: Math.round(futureValue - totalInvested),
        corpus: Math.round(futureValue)
      });
    }

    return {
      invested: Math.round(totalInvested),
      corpus: Math.round(futureValue),
      monthlyPension: Math.round((futureValue * 0.06) / 12), // assuming 6% annuity rate
      chartData,
      schedule
    };
  }, [currentAge, retirementAge, monthlyContribution, expectedReturn]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        
        {/* Input Section (Clean White) */}
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <PiggyBank className="w-32 h-32" />
          </div>
          
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Current Age
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input 
                    type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="18" max="65" step="1" 
                value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Retirement Age
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input 
                    type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="40" max="75" step="1" 
                value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Monthly Contribution
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input 
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="500" max="150000" step="500" 
                value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            
            <div className="pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Expected Return (p.a)
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input 
                    type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input 
                type="range" min="4" max="15" step="0.5" 
                value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Output Section (Dark Rich Gradient) */}
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Invested</p>
              <p className="text-2xl font-bold tracking-tight">{formatCurrency(results.invested)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Est. Monthly Pension (@6%)</p>
              <p className="text-2xl font-bold tracking-tight text-teal-400">{formatCurrency(results.monthlyPension)}</p>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-teal-200 font-medium mb-2 uppercase tracking-wider">Retirement Corpus</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {formatCurrency(results.corpus)}
                </p>
              </div>
              <PiggyBank className="w-12 h-12 text-teal-400 opacity-80" />
            </div>
          </div>

          <div className="h-64 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="age" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} minTickGap={20} />
                <YAxis 
                  axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} 
                  tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                  width={60}
                />
                <RechartsTooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)'
                  }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', color: '#fff' }} />
                <Bar dataKey="Total Invested" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Wealth Gained" stackId="a" fill="#2dd4bf" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Detailed Breakdown */}
      {results.schedule.length > 0 && (
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-800">Corpus Accumulation Schedule</h3>
            <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
              {retirementAge - currentAge} Years to Retire
            </span>
          </div>
          <div className="overflow-x-auto max-h-96">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-slate-50 z-10 shadow-sm">
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Age</th>
                  <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Total Invested</th>
                  <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Wealth Gained</th>
                  <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Retirement Corpus</th>
                </tr>
              </thead>
              <tbody>
                {results.schedule.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-sm font-bold text-slate-700">{row.age} Years</td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-600">{formatCurrency(row.invested)}</td>
                    <td className="py-4 px-6 text-sm font-medium text-teal-600">+{formatCurrency(row.returns)}</td>
                    <td className="py-4 px-6 text-sm font-black text-slate-900">{formatCurrency(row.corpus)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
}
