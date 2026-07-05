'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { 
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { IndianRupee, TrendingUp } from 'lucide-react';

const COLORS = ['#8b5cf6', '#d946ef'];

export default function FinancialCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(5);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = useMemo(() => {
    const r = rate / 100;
    const futureValue = amount * Math.pow((1 + r), years);
    const totalReturn = futureValue - amount;

    const chartData = [
      { name: 'Principal Amount', value: amount },
      { name: 'Wealth Gained', value: totalReturn }
    ];

    return {
      principal: Math.round(amount),
      totalReturn: Math.round(totalReturn),
      futureValue: Math.round(futureValue),
      chartData
    };
  }, [amount, rate, years]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        
        {/* Input Section (Clean White) */}
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <TrendingUp className="w-32 h-32" />
          </div>
          
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Principal Amount
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="10000" max="50000000" step="10000" 
                value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Growth Rate (p.a)
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-200 transition-all">
                  <input 
                    type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input 
                type="range" min="1" max="50" step="0.5" 
                value={rate} onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Time Period
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-200 transition-all">
                  <input 
                    type="number" value={years} onChange={(e) => setYears(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="1" max="40" step="1" 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
              />
            </div>
          </div>
        </div>

        {/* Output Section (Dark Rich Gradient) */}
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Base Amount</p>
              <p className="text-2xl font-bold tracking-tight">{formatCurrency(results.principal)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Calculated Returns</p>
              <p className="text-2xl font-bold tracking-tight text-fuchsia-400">{formatCurrency(results.totalReturn)}</p>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-violet-200 font-medium mb-2 uppercase tracking-wider">Final Future Value</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {formatCurrency(results.futureValue)}
                </p>
              </div>
              <TrendingUp className="w-12 h-12 text-violet-400 opacity-80" />
            </div>
          </div>

          <div className="h-64 w-full relative z-10 flex justify-center items-center">
            {/* Center Label for Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-slate-400 uppercase tracking-widest mb-1 mt-6">Future Value</span>
              <span className="text-xl font-bold text-white tracking-tight">
                {formatCurrency(results.futureValue)}
              </span>
            </div>

            <ResponsiveContainer width="100%" height={300}>
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
    </CalculatorLayout>
  );
}
