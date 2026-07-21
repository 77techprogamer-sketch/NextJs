"use client";

import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import LeadMagnetGate from '@/components/LeadMagnetGate';
import { motion, AnimatePresence } from 'framer-motion';

interface Guide {
    title: string;
    description: string;
    icon: string;
    pages: string;
    topics: string[];
    downloadUrl: string;
}

export default function GuidesGrid({ guides }: { guides: Guide[] }) {
    const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 flex flex-col">
                        <div className="text-4xl mb-4">{guide.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{guide.title}</h3>
                        <p className="text-slate-600 mb-4 flex-1">{guide.description}</p>
                        <div className="text-xs text-slate-400 mb-4">{guide.pages}</div>
                        <ul className="space-y-2 mb-6">
                            {guide.topics.map((topic, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                    {topic}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setSelectedGuide(guide)}
                            className="w-full block text-center bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-semibold transition-colors"
                        >
                            Download Free PDF
                        </button>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedGuide && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }} 
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => setSelectedGuide(null)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                            animate={{ opacity: 1, scale: 1, y: 0 }} 
                            exit={{ opacity: 0, scale: 0.95, y: 20 }} 
                            className="relative w-full max-w-lg z-10"
                        >
                            <button 
                                onClick={() => setSelectedGuide(null)}
                                className="absolute -top-12 right-0 text-white hover:text-slate-200 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <LeadMagnetGate 
                                title={selectedGuide.title}
                                description="Enter your email to unlock this free guide. We'll also send a copy directly to your inbox."
                                downloadUrl={selectedGuide.downloadUrl}
                                sourceName="LeadMagnet"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
