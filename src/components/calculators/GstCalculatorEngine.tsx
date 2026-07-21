'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { Calculator, IndianRupee } from 'lucide-react';

export default function GstCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [mode, setMode] = useState<'add' | 'remove'>('add');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    if (mode === 'add') {
      const gstAmount = amount * (gstRate / 100);
      const totalAmount = amount + gstAmount;
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      return { baseAmount: amount, gstAmount, cgst, sgst, totalAmount };
    } else {
      const baseAmount = amount / (1 + gstRate / 100);
      const gstAmount = amount - baseAmount;
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      return { baseAmount, gstAmount, cgst, sgst, totalAmount: amount };
    }
  }, [amount, gstRate, mode]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Calculator className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Calculation Mode</label>
              <div className="flex gap-4">
                <button onClick={() => setMode('add')} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${mode === 'add' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Add GST</button>
                <button onClick={() => setMode('remove')} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${mode === 'remove' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Remove GST</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">{mode === 'add' ? 'Amount (Excl. GST)' : 'Amount (Incl. GST)'}</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="100" max="1000000" step="100" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">GST Rate</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 12, 18, 28].map(rate => (
                  <button key={rate} onClick={() => setGstRate(rate)} className={`py-2 rounded-lg border font-semibold text-sm transition-colors ${gstRate === rate ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>{rate}%</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 space-y-4">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex justify-between items-center">
              <p className="text-sm text-slate-400 font-medium">Base Amount</p>
              <p className="text-xl font-bold">{formatCurrency(results.baseAmount)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex justify-between items-center">
              <p className="text-sm text-slate-400 font-medium">CGST ({gstRate / 2}%)</p>
              <p className="text-xl font-bold text-emerald-400">{formatCurrency(results.cgst)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex justify-between items-center">
              <p className="text-sm text-slate-400 font-medium">SGST ({gstRate / 2}%)</p>
              <p className="text-xl font-bold text-emerald-400">{formatCurrency(results.sgst)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex justify-between items-center">
              <p className="text-sm text-slate-400 font-medium">Total GST</p>
              <p className="text-xl font-bold text-amber-400">{formatCurrency(results.gstAmount)}</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center">
              <div>
                <p className="text-sm text-emerald-200 font-medium mb-2 uppercase tracking-wider">{mode === 'add' ? 'Total (Incl. GST)' : 'Base Amount (Excl. GST)'}</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(mode === 'add' ? results.totalAmount : results.baseAmount)}</p>
              </div>
              <Calculator className="w-12 h-12 text-emerald-400 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
