'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { ShieldCheck, IndianRupee } from 'lucide-react';

export default function LicCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [sumAssured, setSumAssured] = useState(1000000);
  const [age, setAge] = useState(30);
  const [policyTerm, setPolicyTerm] = useState(20);
  const [bonusRate, setBonusRate] = useState(40); // ₹40 per 1000 SA per year

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = useMemo(() => {
    // Estimating premium
    const baseRatePerThousand = 45 + (age * 0.5); 
    const basePremium = (sumAssured / 1000) * baseRatePerThousand;
    const firstYearGst = basePremium * 0.045; 
    const subsequentGst = basePremium * 0.0225;
    
    const firstYearPremium = basePremium + firstYearGst;
    const subsequentPremium = basePremium + subsequentGst;

    const totalPremiumPaid = firstYearPremium + (subsequentPremium * (policyTerm - 1));
    const totalBonus = (sumAssured / 1000) * bonusRate * policyTerm;
    const maturityAmount = sumAssured + totalBonus;

    const chartData = [];
    const schedule = [];
    
    let cumulativePremium = 0;
    let cumulativeBonus = 0;

    for (let i = 1; i <= policyTerm; i++) {
      const premiumForYear = i === 1 ? firstYearPremium : subsequentPremium;
      cumulativePremium += premiumForYear;
      cumulativeBonus += (sumAssured / 1000) * bonusRate;
      
      const currentDeathBenefit = sumAssured + cumulativeBonus;
      
      chartData.push({
        year: `Year ${i}`,
        'Premiums Paid': Math.round(cumulativePremium),
        'Projected Value': i === policyTerm ? Math.round(maturityAmount) : Math.round(cumulativeBonus) // illustrative
      });

      schedule.push({
        year: `Year ${i}`,
        premium: Math.round(premiumForYear),
        cumulativePremium: Math.round(cumulativePremium),
        deathBenefit: Math.round(currentDeathBenefit),
        maturity: i === policyTerm ? Math.round(maturityAmount) : 0
      });
    }

    return {
      annualPremium: Math.round(firstYearPremium),
      monthlyPremium: Math.round(firstYearPremium / 12),
      totalPremiumPaid: Math.round(totalPremiumPaid),
      estimatedMaturity: Math.round(maturityAmount),
      chartData,
      schedule
    };
  }, [sumAssured, age, policyTerm, bonusRate]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        
        {/* Input Section (Clean White) */}
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <ShieldCheck className="w-32 h-32" />
          </div>
          
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Sum Assured
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input 
                    type="number"
                    value={sumAssured}
                    onChange={(e) => setSumAssured(Number(e.target.value))}
                    className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="100000" max="20000000" step="100000" 
                value={sumAssured} onChange={(e) => setSumAssured(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Your Age
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input 
                    type="number" value={age} onChange={(e) => setAge(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="18" max="65" step="1" 
                value={age} onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                  Policy Term
                </label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input 
                    type="number" value={policyTerm} onChange={(e) => setPolicyTerm(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="10" max="35" step="1" 
                value={policyTerm} onChange={(e) => setPolicyTerm(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <label className="text-sm font-bold text-slate-700 tracking-wide uppercase flex items-center">
                    Expected Bonus Rate
                  </label>
                  <p className="text-xs text-slate-500 mt-1">Per ₹1,000 SA per year</p>
                </div>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input 
                    type="number" value={bonusRate} onChange={(e) => setBonusRate(Number(e.target.value))}
                    className="w-12 bg-transparent outline-none font-bold text-slate-900 text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="10" max="100" step="1" 
                value={bonusRate} onChange={(e) => setBonusRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Output Section (Dark Rich Gradient) */}
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Premium Paid</p>
              <p className="text-2xl font-bold tracking-tight">{formatCurrency(results.totalPremiumPaid)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">1st Year Premium</p>
              <p className="text-2xl font-bold tracking-tight text-blue-400">{formatCurrency(results.annualPremium)}</p>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-indigo-200 font-medium mb-2 uppercase tracking-wider">Est. Maturity Amount</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {formatCurrency(results.estimatedMaturity)}
                </p>
              </div>
              <ShieldCheck className="w-12 h-12 text-indigo-400 opacity-80" />
            </div>
          </div>

          <div className="h-64 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', color: '#fff' }} />
                <Line type="monotone" dataKey="Premiums Paid" stroke="#94a3b8" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="Projected Value" stroke="#818cf8" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-400 mt-6 text-center italic relative z-10">
            * This is an illustrative estimation. Actual premiums, taxes, and declared bonuses may vary based on specific LIC guidelines.
          </p>
        </div>
      </div>
      
      {/* Detailed Breakdown */}
      <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Policy Schedule & Benefit Illustration</h3>
          <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
            {policyTerm} Years Term
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Year</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Annual Premium</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Cumulative Premium</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Death Benefit</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Maturity Benefit</th>
              </tr>
            </thead>
            <tbody>
              {results.schedule.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-700">{row.year}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-600">{formatCurrency(row.premium)}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-600">{formatCurrency(row.cumulativePremium)}</td>
                  <td className="py-4 px-6 text-sm font-medium text-amber-600">{formatCurrency(row.deathBenefit)}</td>
                  <td className="py-4 px-6 text-sm font-black text-indigo-600">{row.maturity > 0 ? formatCurrency(row.maturity) : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}
