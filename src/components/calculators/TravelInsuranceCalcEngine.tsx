'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Plane, IndianRupee } from 'lucide-react';

const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444'];

export default function TravelInsuranceCalcEngine({ title, description }: { title: string, description: string }) {
  const [destination, setDestination] = useState('europe');
  const [tripDays, setTripDays] = useState(15);
  const [travelers, setTravelers] = useState(2);
  const [seniorCitizens, setSeniorCitizens] = useState(0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    // Base rates per person per day (in ₹)
    const zoneRates: Record<string, number> = {
      asia: 150,
      europe: 350,
      usa: 450,
      worldwide: 500,
      schengen: 400
    };

    const baseRate = zoneRates[destination] || 350;
    const ageMultiplier = seniorCitizens > 0 ? 1.5 : 1.0;

    const basePremium = baseRate * tripDays * travelers * ageMultiplier;
    const gst = basePremium * 0.18;
    const totalPremium = basePremium + gst;

    const coverage = {
      medicalEmergency: 500000 * travelers,
      tripCancellation: 50000,
      baggageLoss: 25000 * travelers,
      personalAccident: 1000000 * travelers,
      flightDelay: 5000
    };

    return {
      basePremium: Math.round(basePremium),
      gst: Math.round(gst),
      totalPremium: Math.round(totalPremium),
      perPerson: Math.round(totalPremium / travelers),
      coverage,
      chartPieData: [
        { name: 'Medical', value: 40 },
        { name: 'Trip Cancel', value: 20 },
        { name: 'Baggage', value: 15 },
        { name: 'Accident', value: 25 }
      ]
    };
  }, [destination, tripDays, travelers, seniorCitizens]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Plane className="w-32 h-32" />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <label className="text-sm font-bold text-slate-700 tracking-wide uppercase block mb-3">Destination</label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 font-bold text-slate-900 outline-none">
                <option value="asia">Asia (Thailand, Singapore, etc.)</option>
                <option value="europe">Europe (Non-Schengen)</option>
                <option value="schengen">Schengen Countries</option>
                <option value="usa">USA / Canada</option>
                <option value="worldwide">Worldwide</option>
              </select>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Trip Duration</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={tripDays} onChange={(e) => setTripDays(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Days</span>
                </div>
              </div>
              <input type="range" min="1" max="180" step="1" value={tripDays} onChange={(e) => setTripDays(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Number of Travelers</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">ppl</span>
                </div>
              </div>
              <input type="range" min="1" max="10" step="1" value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Senior Citizens (65+)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={seniorCitizens} onChange={(e) => setSeniorCitizens(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">ppl</span>
                </div>
              </div>
              <input type="range" min="0" max={travelers} step="1" value={seniorCitizens} onChange={(e) => setSeniorCitizens(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Per Person</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.perPerson)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Medical Cover</p>
              <p className="text-xl font-bold tracking-tight text-cyan-400">{formatCurrency(results.coverage.medicalEmergency)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Total Premium</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.totalPremium)}</p>
              </div>
              <Plane className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>
          <div className="h-48 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={results.chartPieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none" cornerRadius={6}>
                  {results.chartPieData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <RechartsTooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
        <strong>Mandatory for Schengen:</strong> Travel insurance with minimum €30,000 medical cover is required for Schengen visa. Buy before visa appointment.
      </div>
    </CalculatorLayout>
  );
}
