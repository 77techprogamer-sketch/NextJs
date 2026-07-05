'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer
} from 'recharts';
import { HeartPulse, IndianRupee } from 'lucide-react';

export default function HealthInsuranceCalcEngine({ title, description }: { title: string, description: string }) {
  const [age, setAge] = useState(30);
  const [members, setMembers] = useState([30, 28]); // insured ages
  const [sumInsured, setSumInsured] = useState(1000000);
  const [isFamilyFloater, setIsFamilyFloater] = useState(true);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const addMember = () => {
    if (members.length < 6) setMembers([...members, 25]);
  };

  const removeMember = (idx: number) => {
    if (members.length > 1) setMembers(members.filter((_, i) => i !== idx));
  };

  const updateMemberAge = (idx: number, newAge: number) => {
    const updated = [...members];
    updated[idx] = newAge;
    setMembers(updated);
  };

  const results = useMemo(() => {
    // Simplified premium estimation based on age, SI, and family size
    const maxAge = Math.max(...members);
    const memberCount = members.length;

    let baseRate = 0;

    if (maxAge <= 35) baseRate = sumInsured * 0.004;
    else if (maxAge <= 45) baseRate = sumInsured * 0.006;
    else if (maxAge <= 55) baseRate = sumInsured * 0.009;
    else if (maxAge <= 65) baseRate = sumInsured * 0.015;
    else baseRate = sumInsured * 0.025;

    // Family floater discount
    if (isFamilyFloater && memberCount > 1) {
      baseRate = baseRate * (1 + (memberCount - 1) * 0.5);
    } else {
      baseRate = baseRate * memberCount;
    }

    // GST
    const gst = baseRate * 0.18;
    const total = baseRate + gst;

    const chartData = members.map((memberAge, i) => ({
      name: i === 0 ? 'Primary' : `Member ${i + 1}`,
      age: memberAge,
      premium: Math.round(isFamilyFloater ? total / memberCount : (baseRate / memberCount))
    }));

    return {
      basePremium: Math.round(baseRate),
      gst: Math.round(gst),
      annualPremium: Math.round(total),
      monthlyPremium: Math.round(total / 12),
      chartData
    };
  }, [age, members, sumInsured, isFamilyFloater]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <HeartPulse className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Plan Type</label>
              <div className="flex gap-4">
                <button onClick={() => setIsFamilyFloater(true)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${isFamilyFloater ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Family Floater</button>
                <button onClick={() => setIsFamilyFloater(false)} className={`flex-1 py-3 rounded-lg border font-semibold transition-colors ${!isFamilyFloater ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>Individual</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Sum Insured</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={sumInsured} onChange={(e) => setSumInsured(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="100000" max="10000000" step="100000" value={sumInsured} onChange={(e) => setSumInsured(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <p className="text-xs text-slate-500 mt-1">Recommended: ₹10L+ for metro cities</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Insured Members ({members.length})</label>
                {members.length < 6 && (
                  <button onClick={addMember} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100">+ Add Member</button>
                )}
              </div>
              <div className="space-y-3">
                {members.map((memberAge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16">{i === 0 ? 'Primary' : `Member ${i + 1}`}</span>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1 flex-1">
                      <input type="number" value={memberAge} onChange={(e) => updateMemberAge(i, Number(e.target.value))} className="w-full bg-transparent outline-none font-bold text-slate-900 text-sm" />
                      <span className="text-slate-400 text-xs ml-1">yr</span>
                    </div>
                    {i > 0 && (
                      <button onClick={() => removeMember(i)} className="text-red-400 hover:text-red-600 text-xs">✕</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Base Premium</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.basePremium)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">GST (18%)</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.gst)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Monthly Premium</p>
              <p className="text-xl font-bold tracking-tight text-pink-400">{formatCurrency(results.monthlyPremium)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Number of Members</p>
              <p className="text-xl font-bold tracking-tight">{members.length}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-red-200 font-medium mb-2 uppercase tracking-wider">Annual Premium</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.annualPremium)}</p>
              </div>
              <HeartPulse className="w-12 h-12 text-red-400 opacity-80" />
            </div>
          </div>
          <div className="h-56 w-full relative z-10">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} width={60} />
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Bar dataKey="premium" fill="#ec4899" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-5 text-sm text-red-800">
        <strong>Tip:</strong> Buy health insurance early for lower premiums. A ₹10L family floater for a young family typically costs ₹15,000-25,000/year.
      </div>
    </CalculatorLayout>
  );
}
