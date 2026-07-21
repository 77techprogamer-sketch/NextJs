'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { TrendingUp, IndianRupee } from 'lucide-react';

const COLORS = ['#8b5cf6', '#06b6d4'];

export default function UlipCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [premium, setPremium] = useState(50000);
  const [years, setYears] = useState(20);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [premiumPaymentTerm, setPremiumPaymentTerm] = useState(10);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  const results = useMemo(() => {
    const annualPremium = premium;
    const totalPremiumsPaid = annualPremium * premiumPaymentTerm;
    const monthlyRate = expectedReturn / 12 / 100;

    const chartData = [];
    let fundValue = 0;
    let totalInvested = 0;

    for (let year = 1; year <= years; year++) {
      for (let month = 1; month <= 12; month++) {
        if (year <= premiumPaymentTerm) {
          fundValue += annualPremium / 12;
          totalInvested += annualPremium / 12;
        }
        fundValue *= (1 + monthlyRate);
      }

      // Fund management charge (approx 1.35% p.a. of fund value)
      const fmc = fundValue * 0.0135;
      fundValue -= fmc;

      if (year % 2 === 0 || year === years || year === 1) {
        chartData.push({
          year: `Year ${year}`,
          'Premium Paid': Math.round(totalInvested),
          'Fund Value': Math.round(fundValue)
        });
      }
    }

    const netReturn = fundValue - totalInvested;
    const effectiveIRR = totalInvested > 0 ? (Math.pow(fundValue / totalInvested, 1 / years) - 1) * 100 : 0;

    const pieData = [
      { name: 'Premiums Paid', value: Math.round(totalInvested) },
      { name: 'Net Returns', value: Math.round(netReturn) }
    ];

    return {
      totalPremiumsPaid: Math.round(totalPremiumsPaid),
      fundValue: Math.round(fundValue),
      netReturn: Math.round(netReturn),
      effectiveIRR: effectiveIRR.toFixed(2),
      chartData,
      pieData
    };
  }, [premium, years, expectedReturn, premiumPaymentTerm]);

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
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Annual Premium</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={premium} onChange={(e) => setPremium(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="10000" max="1000000" step="5000" value={premium} onChange={(e) => setPremium(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Policy Term</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 transition-all">
                  <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="10" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Premium Payment Term</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 transition-all">
                  <input type="number" value={premiumPaymentTerm} onChange={(e) => setPremiumPaymentTerm(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="5" max={years} step="1" value={premiumPaymentTerm} onChange={(e) => setPremiumPaymentTerm(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Expected Return (p.a)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 transition-all">
                  <input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input type="range" min="4" max="15" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Premiums Paid</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.totalPremiumsPaid)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Net Returns</p>
              <p className="text-xl font-bold tracking-tight text-cyan-400">{formatCurrency(results.netReturn)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Effective IRR</p>
              <p className="text-xl font-bold tracking-tight text-violet-400">{results.effectiveIRR}%</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Life Cover</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(premium * 10 * years)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-violet-200 font-medium mb-2 uppercase tracking-wider">Estimated Fund Value</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.fundValue)}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-violet-400 opacity-80" />
            </div>
          </div>
          <div className="h-64 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPremiumULIP" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorFundULIP" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} width={60} />
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} itemStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="Premium Paid" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorPremiumULIP)" />
                <Area type="monotone" dataKey="Fund Value" stroke="#06b6d4" strokeWidth={2} fill="url(#colorFundULIP)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-violet-50 border border-violet-100 rounded-xl p-5 text-sm text-violet-800">
        <strong>About ULIP:</strong> ULIP = Life Cover + Market-Linked Investment. Tax benefits under Section 80C (premium) and Section 10(10D) (maturity). Fund management charges (~1.35% p.a.) are deducted from NAV.
      </div>
    </CalculatorLayout>
  );
}
