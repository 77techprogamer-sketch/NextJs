'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { 
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Calculator, IndianRupee, PieChart as PieChartIcon } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981'];

export default function FdCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(6.5);
  const [years, setYears] = useState(5);
  const [compoundingFreq, setCompoundingFreq] = useState(4); // 4 = Quarterly

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = useMemo(() => {
    // Exact mathematical formula: A = P(1 + r/n)^(nt)
    const principal = totalInvestment;
    const rate = expectedReturn / 100;
    const n = compoundingFreq;
    const t = years;

    const futureValue = principal * Math.pow((1 + rate / n), n * t);
    const estimatedReturns = futureValue - principal;

    const chartData = [
      { name: 'Total Investment', value: principal },
      { name: 'Interest Earned', value: estimatedReturns }
    ];

    // Build schedule
    const schedule = [];
    let currentBalance = principal;
    for (let i = 1; i <= years; i++) {
      const yearStart = currentBalance;
      currentBalance = principal * Math.pow((1 + rate / n), n * i);
      const interestEarned = currentBalance - yearStart;
      schedule.push({
        year: `Year ${i}`,
        principal: Math.round(yearStart),
        interest: Math.round(interestEarned),
        balance: Math.round(currentBalance)
      });
    }

    return {
      investedAmount: Math.round(principal),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
      chartData,
      schedule
    };
  }, [totalInvestment, expectedReturn, years, compoundingFreq]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        
        {/* Input Section (Clean White) */}
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <PieChartIcon className="w-32 h-32" />
          </div>
          
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Total Investment
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input 
                    type="number"
                    value={totalInvestment}
                    onChange={(e) => setTotalInvestment(Number(e.target.value))}
                    className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="5000" max="10000000" step="5000" 
                value={totalInvestment} onChange={(e) => setTotalInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Interest Rate (p.a)
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
                type="range" min="1" max="15" step="0.1" 
                value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Time Period
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input 
                    type="number" value={years} onChange={(e) => setYears(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="1" max="30" step="1" 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Compounding Frequency
                </label>
                <select 
                  value={compoundingFreq} 
                  onChange={(e) => setCompoundingFreq(Number(e.target.value))}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-bold text-slate-900 outline-none focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all"
                >
                  <option value={12}>Monthly</option>
                  <option value={4}>Quarterly</option>
                  <option value={2}>Half-Yearly</option>
                  <option value={1}>Yearly</option>
                </select>
              </div>
              <p className="text-xs text-slate-500">Most Indian banks compound FD interest Quarterly.</p>
            </div>
          </div>
        </div>

        {/* Output Section (Dark Rich Gradient) */}
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Investment</p>
              <p className="text-2xl font-bold tracking-tight">{formatCurrency(results.investedAmount)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Interest Earned</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-400">{formatCurrency(results.estimatedReturns)}</p>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Maturity Value</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {formatCurrency(results.totalValue)}
                </p>
              </div>
              <Calculator className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>

          <div className="h-64 w-full relative z-10 flex justify-center items-center">
            {/* Center Label for Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-slate-400 uppercase tracking-widest mb-1 mt-6">Total Value</span>
              <span className="text-xl font-bold text-white tracking-tight">
                {formatCurrency(results.totalValue)}
              </span>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={results.chartData}
                  cx="50%" cy="50%"
                  innerRadius={75} outerRadius={105}
                  paddingAngle={5} dataKey="value" stroke="none"
                  cornerRadius={8}
                >
                  {results.chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
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
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '14px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Detailed Breakdown */}
      <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Compounding Schedule</h3>
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
            {years} Years Lock-in
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Year</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Opening Balance</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Interest Earned</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {results.schedule.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-700">{row.year}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-600">{formatCurrency(row.principal)}</td>
                  <td className="py-4 px-6 text-sm font-medium text-emerald-600">+{formatCurrency(row.interest)}</td>
                  <td className="py-4 px-6 text-sm font-black text-slate-900">{formatCurrency(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}
