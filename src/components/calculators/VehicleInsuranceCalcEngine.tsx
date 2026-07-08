'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Car, IndianRupee, ShieldCheck } from 'lucide-react';

const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444'];

export default function VehicleInsuranceCalcEngine({ title, description, vehicleType }: { title: string, description: string, vehicleType?: string }) {
  const isCar = vehicleType !== 'bike';
  const [idv, setIdv] = useState(isCar ? 800000 : 80000);
  const [age, setAge] = useState(isCar ? 3 : 2);
  const [cc, setCc] = useState(isCar ? 1200 : 150);
  const [ncb, setNcb] = useState(20); // No Claim Bonus %
  const [isThirdParty, setIsThirdParty] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    let ownDamagePremium = 0;
    let thirdPartyPremium = 0;

    if (isCar) {
      // Car insurance calculation
      const idvFactor = idv / 1000;
      const ageFactor = age <= 1 ? 1.0 : age <= 3 ? 0.9 : age <= 5 ? 0.8 : 0.7;
      const ccFactor = cc <= 1000 ? 1.0 : cc <= 1500 ? 1.2 : 1.4;
      const baseRate = 3.0; // %

      ownDamagePremium = (idv * (baseRate / 100) * ageFactor * ccFactor);

      // Fixed third party premium for private car (as per IRDAI)
      thirdPartyPremium = cc <= 1000 ? 2097 : cc <= 1500 ? 3416 : 7897;
    } else {
      // Bike insurance calculation
      const idvFactor = idv / 1000;
      const ageFactor = age <= 1 ? 1.0 : age <= 3 ? 0.85 : age <= 5 ? 0.75 : 0.65;
      const baseRate = 2.5;

      ownDamagePremium = (idv * (baseRate / 100) * ageFactor);

      // Two-wheeler third party (fixed)
      thirdPartyPremium = cc <= 75 ? 538 : cc <= 150 ? 714 : cc <= 350 ? 1366 : 2804;
    }

    // Apply NCB
    ownDamagePremium = ownDamagePremium * (1 - ncb / 100);

    const gst = (ownDamagePremium + thirdPartyPremium) * 0.18;
    const totalPremium = isThirdParty ? thirdPartyPremium + gst : ownDamagePremium + thirdPartyPremium + gst;

    return {
      ownDamage: Math.round(ownDamagePremium),
      thirdParty: Math.round(thirdPartyPremium),
      gst: Math.round(gst),
      totalPremium: Math.round(totalPremium),
      chartPieData: isThirdParty
        ? [{ name: 'Third Party', value: Math.round(thirdPartyPremium) }, { name: 'GST', value: Math.round(gst) }]
        : [
          { name: 'Own Damage', value: Math.round(ownDamagePremium) },
          { name: 'Third Party', value: Math.round(thirdPartyPremium) },
          { name: 'GST (18%)', value: Math.round(gst) }
        ]
    };
  }, [idv, age, cc, ncb, isThirdParty, isCar]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Car className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Cover Type</label>
              <div className="flex gap-4">
                <button onClick={() => setIsThirdParty(false)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${!isThirdParty ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Comprehensive</button>
                <button onClick={() => setIsThirdParty(true)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${isThirdParty ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Third Party Only</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">IDV (Insured Declared Value)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={idv} onChange={(e) => setIdv(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="10000" max={isCar ? 2000000 : 200000} step="5000" value={idv} onChange={(e) => setIdv(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Vehicle Age</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="0" max="15" step="1" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">{isCar ? 'Engine Capacity (CC)' : 'Engine CC'}</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={cc} onChange={(e) => setCc(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">CC</span>
                </div>
              </div>
              <input type="range" min="50" max={isCar ? 5000 : 1000} step="10" value={cc} onChange={(e) => setCc(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">No Claim Bonus (NCB)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={ncb} onChange={(e) => setNcb(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input type="range" min="0" max="65" step="5" value={ncb} onChange={(e) => setNcb(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <p className="text-xs text-slate-500 mt-1">NCB: 0yr: 0%, 1yr: 20%, 2yr: 25%, 3yr: 35%, 4yr: 45%, 5yr+: 65%</p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Own Damage</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.ownDamage)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Third Party</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.thirdParty)}</p>
            </div>
            <div className="relative z-10 grid grid-cols-1">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                <p className="text-sm text-slate-400 font-medium mb-1">GST (18%)</p>
                <p className="text-xl font-bold tracking-tight">{formatCurrency(results.gst)}</p>
              </div>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-amber-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Total Premium</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.totalPremium)}</p>
              </div>
              <ShieldCheck className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>
          <div className="h-56 w-full relative z-10">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={results.chartPieData.filter(d => d.value > 0)} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" stroke="none" cornerRadius={6}>
                  {results.chartPieData.filter(d => d.value > 0).map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5 text-sm text-amber-800">
        <strong>Note:</strong> Premiums are indicative. Actual rates vary by insurer, vehicle model, and location. NCB applies to Own Damage cover only.
      </div>
    </CalculatorLayout>
  );
}
