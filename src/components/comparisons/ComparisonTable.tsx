import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ComparisonRow {
  label: string;
  values: (string | boolean | React.ReactNode)[];
  highlightWinner?: number; // index of the winning column
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
}

export default function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm mb-12">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-6 bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-sm sticky left-0 z-10 w-1/3">
              Feature
            </th>
            {headers.map((header, idx) => (
              <th key={idx} className="p-6 bg-slate-50 border-b border-slate-200 text-slate-900 font-bold text-lg min-w-[200px]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="group hover:bg-slate-50/50 transition-colors">
              <td className="p-6 border-b border-slate-100 font-medium text-slate-700 sticky left-0 bg-white group-hover:bg-slate-50/50 transition-colors z-10">
                {row.label}
              </td>
              {row.values.map((val, colIndex) => {
                const isWinner = row.highlightWinner === colIndex;
                
                let renderVal = val;
                if (typeof val === 'boolean') {
                  renderVal = val ? (
                    <Check className="w-6 h-6 text-emerald-500 mx-auto md:mx-0" />
                  ) : (
                    <X className="w-6 h-6 text-red-400 mx-auto md:mx-0" />
                  );
                } else if (val === null || val === undefined || val === '') {
                  renderVal = <Minus className="w-6 h-6 text-slate-300 mx-auto md:mx-0" />;
                }

                return (
                  <td 
                    key={colIndex} 
                    className={cn(
                      "p-6 border-b border-slate-100 text-slate-600",
                      isWinner ? "bg-emerald-50/30 font-semibold text-emerald-800" : ""
                    )}
                  >
                    {renderVal}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
