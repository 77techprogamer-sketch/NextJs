import React, { ReactNode } from 'react';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function CalculatorLayout({ title, description, children }: CalculatorLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
