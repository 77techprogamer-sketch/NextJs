'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import { CreditCard, IndianRupee } from 'lucide-react';

const COLORS = ['#3b82f6', '#ef4444'];

export default function EmiCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, amount));
  };

  const results = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const numPayments = tenure * 12;

    // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPayment = emi * numPayments;
    const totalInterest = totalPayment - loanAmount;

    // Amortization schedule
    const schedule = [];
    let balance = loanAmount;
    for (let year = 1; year <= Math.min(tenure, 30); year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;
      for (let m = 1; m <= 12; m++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = emi - interestPayment;
        balance -= principalPayment;
        yearlyPrincipal += principalPayment;
        yearlyInterest += interestPayment;
      }
      schedule.push({
        year: `Year ${year}`,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        balance: Math.round(Math.max(0, balance))
      });
    }

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      schedule,
      pieData: [
        { name: 'Principal', value: Math.round(loanAmount) },
        { name: 'Interest', value: Math.round(totalInterest) }
      ]
    };
  }, [loanAmount, interestRate, tenure]);

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden shadow-2xl shadow-slate-900/5 rounded-2xl border border-slate-200">
        <div className="p-8 md:p-10 xl:col-span-5 bg-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <CreditCard className="w-32 h-32" />
          </div>
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Loan Amount</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <IndianRupee className="w-4 h-4 text-slate-500 mr-1" />
                  <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-24 bg-transparent outline-none font-bold text-slate-900 text-right" />
                </div>
              </div>
              <input type="range" min="100000" max="100000000" step="100000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Interest Rate (p.a)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">%</span>
                </div>
              </div>
              <input type="range" min="5" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-slate-700 tracking-wide uppercase">Loan Tenure</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                  <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-16 bg-transparent outline-none font-bold text-slate-900 text-right" />
                  <span className="text-slate-500 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input type="range" min="1" max="30" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 xl:col-span-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Interest</p>
              <p className="text-xl font-bold tracking-tight text-red-400">{formatCurrency(results.totalInterest)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 font-medium mb-1">Total Payment</p>
              <p className="text-xl font-bold tracking-tight">{formatCurrency(results.totalPayment)}</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-blue-600/20 to-red-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-blue-200 font-medium mb-2 uppercase tracking-wider">Monthly EMI</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{formatCurrency(results.emi)}</p>
              </div>
              <CreditCard className="w-12 h-12 text-blue-400 opacity-80" />
            </div>
          </div>
          <div className="h-56 w-full relative z-10 flex justify-center items-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-slate-400 uppercase tracking-widest mb-1 mt-6">Total</span>
              <span className="text-xl font-bold text-white tracking-tight">{formatCurrency(results.totalPayment)}</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={results.pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={5} dataKey="value" stroke="none" cornerRadius={8}>
                  {results.pieData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Amortization Schedule</h3>
          <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">{tenure} Years</span>
        </div>
        <div className="overflow-x-auto max-h-96">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50 z-10 shadow-sm">
              <tr className="border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Year</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Principal Paid</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Interest Paid</th>
                <th className="py-4 px-6 font-semibold text-slate-500 uppercase tracking-wider text-xs">Balance</th>
              </tr>
            </thead>
            <tbody>
              {results.schedule.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-700">{row.year}</td>
                  <td className="py-4 px-6 text-sm font-medium text-blue-600">{formatCurrency(row.principal)}</td>
                  <td className="py-4 px-6 text-sm font-medium text-red-600">{formatCurrency(row.interest)}</td>
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
