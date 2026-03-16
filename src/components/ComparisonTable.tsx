import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
    feature: string;
    col1: string | boolean;
    col2: string | boolean;
    highlight?: boolean;
}

interface ComparisonTableProps {
    title: string;
    headers: [string, string, string];
    rows: ComparisonRow[];
    note?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, headers, rows, note }) => {
    return (
        <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 text-center">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-100 dark:bg-slate-950">
                            <th className="p-4 font-bold text-sm text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">{headers[0]}</th>
                            <th className="p-4 font-bold text-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 text-center">{headers[1]}</th>
                            <th className="p-4 font-bold text-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 text-center">{headers[2]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <tr key={idx} className={`${row.highlight ? 'bg-primary/5' : ''} hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors`}>
                                <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/50">
                                    {row.feature}
                                </td>
                                <td className="p-4 text-sm text-center border-b border-slate-100 dark:border-slate-800/50">
                                    {typeof row.col1 === 'boolean' ? (
                                        row.col1 ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                                    ) : (
                                        <span className="font-semibold text-slate-900 dark:text-white">{row.col1}</span>
                                    )}
                                </td>
                                <td className="p-4 text-sm text-center border-b border-slate-100 dark:border-slate-800/50">
                                    {typeof row.col2 === 'boolean' ? (
                                        row.col2 ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                                    ) : (
                                        <span className="font-semibold text-slate-900 dark:text-white">{row.col2}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {note && (
                <div className="p-4 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-500 dark:text-slate-400 italic">
                    * {note}
                </div>
            )}
        </div>
    );
};

export default ComparisonTable;
