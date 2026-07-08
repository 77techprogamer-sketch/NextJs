'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { Info, Calculator, IndianRupee, TrendingUp } from 'lucide-react';

export default function SipCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [stepUp, setStepUp] = useState(0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = useMemo(() => {
    let currentMonthly = monthlyInvestment;
    let totalInvested = 0;
    let futureValue = 0;
    const monthlyRate = expectedReturn / 12 / 100;
    
    const chartData = [];

    // Exact mathematical compounding (Annuity calculation per month)
    for (let year = 1; year <= years; year++) {
      let yearlyInvested = currentMonthly * 12;
      
      // Calculate future value for this year's contributions exactly
      for (let month = 1; month <= 12; month++) {
        totalInvested += currentMonthly;
        futureValue = (futureValue + currentMonthly) * (1 + monthlyRate);
      }
      
      chartData.push({
        year: `Year ${year}`,
        Invested: Math.round(totalInvested),
        Returns: Math.round(futureValue - totalInvested),
        Total: Math.round(futureValue)
      });

      if (stepUp > 0) {
        currentMonthly = currentMonthly * (1 + (stepUp / 100));
      }
    }

    const estimatedReturns = futureValue - totalInvested;

    return {
      investedAmount: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
      chartData
    };
  }, [monthlyInvestment, expectedReturn, years, stepUp]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-blue-900/5 rounded-2xl border border-slate-200">
        
        {/* Left Pane - Inputs (Clean White) */}
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Calculator className="w-32 h-32" />
          </div>
          
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Monthly Investment
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input 
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="500" max="1000000" step="500" 
                value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Expected Return Rate
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
                type="range" min="1" max="30" step="0.5" 
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
                type="range" min="1" max="40" step="1" 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <label className="text-sm font-bold text-slate-700 tracking-wide uppercase flex items-center">
                    Step-Up (Annual Increase)
                    <span className="ml-2 bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</span>
                  </label>
                  <p className="text-xs text-slate-500 mt-1">Beat inflation by stepping up SIP</p>
                </div>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200 transition-all">
                  <input 
                    type="number" value={stepUp} onChange={(e) => setStepUp(Number(e.target.value))}
                    className="w-12 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input 
                type="range" min="0" max="50" step="1" 
                value={stepUp} onChange={(e) => setStepUp(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Right Pane - Results (Dark Rich Gradient) */}
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Investment</p>
              <p className="text-2xl font-bold tracking-tight">{formatCurrency(results.investedAmount)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Est. Returns</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-400">{formatCurrency(results.estimatedReturns)}</p>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Total Expected Value</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {formatCurrency(results.totalValue)}
                </p>
              </div>
              <TrendingUp className="w-12 h-12 text-emerald-400 opacity-80" />
            </div>
          </div>

          <div className="h-72 w-full relative z-10">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={results.chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInvestedDark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReturnsDark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} minTickGap={20} />
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
                />
                <Area type="monotone" dataKey="Invested" stackId="1" stroke="#3b82f6" strokeWidth={3} fill="url(#colorInvestedDark)" />
                <Area type="monotone" dataKey="Returns" stackId="1" stroke="#10b981" strokeWidth={3} fill="url(#colorReturnsDark)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Detailed Breakdown */}
      <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Investment Schedule & Breakdown</h3>
          <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
            {years} Years Horizon
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Year</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Amount Invested</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Wealth Gained</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {results.chartData.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-700">{row.year}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-600">{formatCurrency(row.Invested)}</td>
                  <td className="py-4 px-6 text-sm font-medium text-emerald-600">{formatCurrency(row.Returns)}</td>
                  <td className="py-4 px-6 text-sm font-black text-slate-900">{formatCurrency(row.Total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}
