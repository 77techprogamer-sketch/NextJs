'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { IndianRupee, Landmark, ShieldCheck } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981'];

export default function PpfCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [annualInvestment, setAnnualInvestment] = useState(150000);
  const [years, setYears] = useState(15);
  const [interestRate, setInterestRate] = useState(7.1);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = useMemo(() => {
    const r = interestRate / 100;
    let balance = 0;
    const schedule = [];
    const chartData = [];

    for (let i = 1; i <= years; i++) {
      balance += annualInvestment;
      const interest = balance * r;
      balance += interest;

      schedule.push({
        year: i,
        deposit: annualInvestment,
        interest: Math.round(interest),
        balance: Math.round(balance)
      });

      if (i % 3 === 0 || i === years) {
        chartData.push({
          year: `Year ${i}`,
          'Total Deposits': annualInvestment * i,
          'Interest Earned': Math.round(balance - (annualInvestment * i))
        });
      }
    }

    const totalDeposits = annualInvestment * years;
    const totalInterest = balance - totalDeposits;

    return {
      totalDeposits: Math.round(totalDeposits),
      totalInterest: Math.round(totalInterest),
      maturityValue: Math.round(balance),
      schedule,
      chartData,
      chartPieData: [
        { name: 'Total Deposits', value: Math.round(totalDeposits) },
        { name: 'Interest Earned', value: Math.round(totalInterest) }
      ]
    };
  }, [annualInvestment, years, interestRate]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Landmark className="w-32 h-32" />
          </div>
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Annual Investment</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={annualInvestment} onChange={(e) => setAnnualInvestment(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="500" max="150000" step="500" value={annualInvestment} onChange={(e) => setAnnualInvestment(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <p className="text-xs text-slate-500 mt-1">Min ₹500, Max ₹1,50,000 per year (Section 80C limit)</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Time Period</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="15" max="50" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <p className="text-xs text-slate-500 mt-1">Minimum lock-in: 15 years (extendable in blocks of 5 years)</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Interest Rate (p.a)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input type="range" min="5" max="10" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <p className="text-xs text-slate-500 mt-1">Current PPF rate: 7.1% p.a. (Q1 FY 2025-26)</p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Deposits</p>
              <p className="text-2xl font-bold tracking-tight">{formatCurrency(results.totalDeposits)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Interest Earned</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-400">{formatCurrency(results.totalInterest)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Maturity Value</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.maturityValue)}</p>
              </div>
              <Landmark className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>
          <div className="h-64 w-full relative z-10 flex justify-center items-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-slate-400 uppercase tracking-widest mb-1 mt-6">Maturity</span>
              <span className="text-xl font-bold text-white tracking-tight">{formatCurrency(results.maturityValue)}</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={results.chartPieData} cx="50%" cy="50%" innerRadius={75} outerRadius={105} paddingAngle={5} dataKey="value" stroke="none" cornerRadius={8}>
                  {results.chartPieData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }} itemStyle={{ color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '14px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">PPF Year-wise Breakdown</h3>
          <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">{years} Years</span>
        </div>
        <div className="overflow-x-auto max-h-96">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50 z-10 shadow-sm">
              <tr className="border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Year</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Annual Deposit</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Interest Earned</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {results.schedule.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-700">Year {row.year}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-600">{formatCurrency(row.deposit)}</td>
                  <td className="py-4 px-6 text-sm font-medium text-emerald-600">+{formatCurrency(row.interest)}</td>
                  <td className="py-4 px-6 text-sm font-black text-slate-900">{formatCurrency(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}
