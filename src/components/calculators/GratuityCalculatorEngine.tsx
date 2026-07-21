'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { Gift, IndianRupee } from 'lucide-react';

export default function GratuityCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [lastSalary, setLastSalary] = useState(50000); // Basic + DA
  const [yearsOfService, setYearsOfService] = useState(10);
  const [isCovered, setIsCovered] = useState(true); // Under Payment of Gratuity Act

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    let gratuity = 0;

    if (isCovered) {
      // As per Payment of Gratuity Act, 1972
      // Gratuity = (Last drawn salary × 15 × Years of Service) / 26
      // Max ₹20,00,000
      gratuity = (lastSalary * 15 * yearsOfService) / 26;
      gratuity = Math.min(gratuity, 2000000);
    } else {
      // Not covered under Act
      // Gratuity = (Last drawn salary × 15 × Years of Service) / 30
      gratuity = (lastSalary * 15 * yearsOfService) / 30;
    }

    return {
      gratuity: Math.round(gratuity),
      isCovered,
      lastSalary,
      yearsOfService
    };
  }, [lastSalary, yearsOfService, isCovered]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Gift className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Coverage</label>
              <div className="flex gap-4">
                <button onClick={() => setIsCovered(true)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${isCovered ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Under Gratuity Act</button>
                <button onClick={() => setIsCovered(false)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${!isCovered ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Not Covered</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Last Drawn Salary (Basic + DA)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={lastSalary} onChange={(e) => setLastSalary(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="10000" max="500000" step="1000" value={lastSalary} onChange={(e) => setLastSalary(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Years of Service</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={yearsOfService} onChange={(e) => setYearsOfService(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="1" max="40" step="1" value={yearsOfService} onChange={(e) => setYearsOfService(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <p className="text-xs text-slate-500 mt-1">Minimum 5 years required (except in case of death/disability)</p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 space-y-4">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Formula Used</p>
              <p className="text-sm font-mono text-slate-300">
                {isCovered ? '(Basic+DA × 15 × Years) / 26' : '(Basic+DA × 15 × Years) / 30'}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex justify-between items-center">
              <p className="text-sm text-slate-400 font-medium">Last Salary (Basic+DA)</p>
              <p className="text-xl font-bold">{formatCurrency(lastSalary)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex justify-between items-center">
              <p className="text-sm text-slate-400 font-medium">Years of Service</p>
              <p className="text-xl font-bold">{yearsOfService} years</p>
            </div>
            <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center">
              <div>
                <p className="text-sm text-amber-200 font-medium mb-2 uppercase tracking-wider">Estimated Gratuity</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.gratuity)}</p>
                {isCovered && results.gratuity >= 2000000 && <p className="text-xs text-amber-400 mt-1">Capped at ₹20,00,000 as per Act</p>}
              </div>
              <Gift className="w-12 h-12 text-amber-400 opacity-80" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5 text-sm text-amber-800">
        <strong>Payment of Gratuity Act, 1972:</strong> Applicable to establishments with 10+ employees. Gratuity is payable on resignation, retirement, death, or disability after 5 years of continuous service. Tax exemption up to ₹20 lakhs.
      </div>
    </CalculatorLayout>
  );
}
