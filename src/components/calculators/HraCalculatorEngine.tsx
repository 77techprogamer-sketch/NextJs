'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Home, IndianRupee } from 'lucide-react';

export default function HraCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [hraReceived, setHraReceived] = useState(20000);
  const [rentPaid, setRentPaid] = useState(15000);
  const [isMetro, setIsMetro] = useState(true);
  const [da, setDa] = useState(0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.abs(amount));
  };

  const results = useMemo(() => {
    const daValue = basicSalary * (da / 100);
    const totalBasic = basicSalary + daValue;

    // HRA Exemption is minimum of:
    // 1. Actual HRA received
    // 2. Rent paid - 10% of basic+DA
    // 3. 50% of basic+DA for metro, 40% for non-metro
    const hraReceivedAnnually = hraReceived * 12;
    const rentPaidAnnually = rentPaid * 12;
    const basicAnnually = totalBasic * 12;

    const condition1 = hraReceivedAnnually;
    const condition2 = rentPaidAnnually - (0.10 * basicAnnually);
    const condition3 = isMetro ? 0.50 * basicAnnually : 0.40 * basicAnnually;

    const exemptAmount = Math.min(condition1, Math.max(0, condition2), condition3);
    const taxableHra = hraReceivedAnnually - exemptAmount;

    const chartData = [
      { name: 'Actual HRA', value: hraReceivedAnnually },
      { name: 'Exempt HRA', value: exemptAmount },
      { name: 'Taxable Hra', value: taxableHra }
    ];

    return {
      exemptAmount: Math.round(exemptAmount),
      taxableHra: Math.round(taxableHra),
      taxSaved: Math.round(taxableHra * 0.30), // approximate at 30% slab
      chartData,
      monthlyExempt: Math.round(exemptAmount / 12),
      monthlyTaxable: Math.round(taxableHra / 12)
    };
  }, [basicSalary, hraReceived, rentPaid, isMetro, da]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Home className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Basic Salary (Monthly)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="10000" max="500000" step="1000" value={basicSalary} onChange={(e) => setBasicSalary(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">HRA Received (Monthly)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={hraReceived} onChange={(e) => setHraReceived(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="0" max={basicSalary} step="500" value={hraReceived} onChange={(e) => setHraReceived(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Rent Paid (Monthly)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={rentPaid} onChange={(e) => setRentPaid(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="0" max="500000" step="500" value={rentPaid} onChange={(e) => setRentPaid(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">DA (% of Basic)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={da} onChange={(e) => setDa(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input type="range" min="0" max="50" step="1" value={da} onChange={(e) => setDa(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">City Type</label>
              <div className="flex gap-4">
                <button onClick={() => setIsMetro(true)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${isMetro ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Metro City</button>
                <button onClick={() => setIsMetro(false)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${!isMetro ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Non-Metro</button>
              </div>
              <p className="text-xs text-slate-500 mt-1">Metro: 50% of basic+DA exempt. Non-Metro: 40% exempt.</p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">HRA Exempted</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-400">{formatCurrency(results.exemptAmount)}</p>
              <p className="text-xs text-slate-500 mt-1">per year</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Taxable HRA</p>
              <p className="text-2xl font-bold tracking-tight text-red-400">{formatCurrency(results.taxableHra)}</p>
              <p className="text-xs text-slate-500 mt-1">per year</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-amber-200 font-medium mb-2 uppercase tracking-wider">Approx. Tax Saved</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.taxSaved)}</p>
                <p className="text-xs text-slate-400 mt-1">*Approx. at 30% tax slab</p>
              </div>
              <Home className="w-12 h-12 text-amber-400 opacity-80" />
            </div>
          </div>
          <div className="h-64 w-full relative z-10">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} width={60} />
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }} itemStyle={{ color: '#fff' }} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', color: '#fff' }} />
                <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
        <strong>How HRA is calculated:</strong> HRA exemption is the <em>minimum</em> of: (1) Actual HRA received, (2) Rent paid − 10% of Basic+DA, (3) 50% of Basic+DA (metro) or 40% (non-metro).
      </div>
    </CalculatorLayout>
  );
}
