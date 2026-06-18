import React from 'react';
import Link from 'next/link';
import { calculatorsConfig } from '@/data/calculatorsConfig';

export const metadata = {
  title: 'Financial & Insurance Tools | Insurance Support',
  description: 'Explore our comprehensive suite of free financial, insurance, fitness, and investment calculators.',
};

export default function ToolsIndexPage() {
  // Group config calculators
  const groupedCalculators = calculatorsConfig.reduce((acc, calc) => {
    if (!acc[calc.categoryName]) {
      acc[calc.categoryName] = [];
    }
    acc[calc.categoryName].push(calc);
    return acc;
  }, {} as Record<string, typeof calculatorsConfig>);

  // Add specialized tools
  const specializedTools = [
    { title: 'Claim Rejection Checker', slug: 'claim-rejection-checker', desc: 'Check the probability of your insurance claim getting rejected.' },
    { title: 'Human Life Value Calculator', slug: 'human-life-value-calculator', desc: 'Calculate the true financial value of your human life to assess insurance needs.' },
    { title: 'Investment Returns', slug: 'investment-returns', desc: 'Calculate the future value and returns on your various investments.' },
    { title: 'Policy Recovery', slug: 'policy-recovery', desc: 'Get assistance in recovering lapsed or lost insurance policies.' },
    { title: 'Risk Scorecard', slug: 'risk-scorecard', desc: 'Evaluate your financial risk profile with our advanced scorecard tool.' },
    { title: 'Term Insurance Calculator', slug: 'term-insurance-calculator', desc: 'Find the optimal term insurance coverage for you and your family.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial & Insurance Tools</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Make informed decisions with our comprehensive suite of free calculators and assessment tools.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-7xl">
        <div className="space-y-16">
          
          {/* Specialized Tools */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Premium Assessment Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedTools.map((tool) => (
                <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group block h-full">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {tool.desc}
                    </p>
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                      Try Tool 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Configured Calculators */}
          {Object.entries(groupedCalculators).map(([categoryName, calculators]) => (
            <section key={categoryName}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">{categoryName} Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {calculators.map((calc) => (
                  <Link key={calc.slug} href={`/tools/${calc.category}/${calc.slug}`} className="group block h-full">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 h-full flex flex-col">
                      <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors mb-2">
                        {calc.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {calc.description}
                      </p>
                      <div className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                        Calculate 
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
