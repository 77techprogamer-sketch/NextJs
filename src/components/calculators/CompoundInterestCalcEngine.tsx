'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer
} from 'recharts';
import { TrendingUp, IndianRupee } from 'lucide-react';

export default function CompoundInterestCalcEngine({ title, description }: { title: string, description: string }) {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [compounding, setCompounding] = useState(4); // quarterly

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    const r = rate / 100;
    const n = compounding;
    const chartData = [];

    for (let year = 1; year <= years; year++) {
      const amount = principal * Math.pow(1 + r / n, n * year);
      chartData.push({
        year: `Year ${year}`,
        'Principal': principal,
        'Total Value': Math.round(amount)
      });
    }

    const finalAmount = principal * Math.pow(1 + r / n, n * years);
    const totalInterest = finalAmount - principal;

    return {
      finalAmount: Math.round(finalAmount),
      totalInterest: Math.round(totalInterest),
      chartData
    };
  }, [principal, rate, years, compounding]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <TrendingUp className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Principal Amount</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="1000" max="10000000" step="1000" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Interest Rate (p.a)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input type="range" min="1" max="20" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Time Period</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Compounding</label>
              <select value={compounding} onChange={(e) => setCompounding(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-bold text-slate-900 outline-none">
                <option value={1}>Annually</option>
                <option value={2}>Half-Yearly</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Principal</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(principal)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Interest Earned</p>
              <p className="text-xl font-bold tracking-tight text-emerald-400">{formatCurrency(results.totalInterest)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Final Amount</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.finalAmount)}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>
          <div className="h-64 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCI" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} width={60} />
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Area type="monotone" dataKey="Total Value" stroke="#10b981" strokeWidth={3} fill="url(#colorCI)" />
                <Area type="monotone" dataKey="Principal" stroke="#3b82f6" strokeWidth={2} fill="none" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
