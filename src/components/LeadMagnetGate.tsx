"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Mail, User, ShieldAlert } from 'lucide-react';
import { leadService } from '@/lib/leadService';
import { trackCTAClick } from '@/utils/trackCta';

interface LeadMagnetGateProps {
    title: string;
    description: string;
    downloadUrl: string;
    buttonText?: string;
    sourceName?: string;
}

export default function LeadMagnetGate({ 
    title, 
    description, 
    downloadUrl, 
    buttonText = "Download PDF Guide",
    sourceName = "LeadMagnet"
}: LeadMagnetGateProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await leadService.submitLead({
                fullName: formData.name,
                email: formData.email,
                service: sourceName,
                details: {
                    notes: `Requested lead magnet: ${title}`
                }
            }, sourceName);
            
            trackCTAClick(`Lead Magnet Unlocked: ${title}`);
            setIsUnlocked(true);
            
            // Trigger autoresponder via our webhook (which we will build next)
            fetch('/api/webhooks/lead-capture', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name: formData.name, 
                    email: formData.email, 
                    magnet: title 
                })
            }).catch(console.error);

        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isUnlocked) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
            >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">You're all set!</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">Your download is ready. We've also sent a copy to your email.</p>
                <a 
                    href={downloadUrl} 
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors"
                >
                    <Download className="w-5 h-5" />
                    {buttonText}
                </a>
            </motion.div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                >
                    {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <ShieldAlert className="w-5 h-5" />
                            Unlock Free Guide
                        </>
                    )}
                </button>
                <p className="text-xs text-center text-slate-500 mt-3">We respect your privacy. No spam ever.</p>
            </form>
        </div>
    );
}
