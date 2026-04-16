"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, ExternalLink } from 'lucide-react';

const BroadcastListener = () => {
    const [broadcast, setBroadcast] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchLatestBroadcast = async () => {
            try {
                const { data, error } = await supabase
                    .from('site_broadcasts')
                    .select('*')
                    .eq('is_active', true)
                    .order('created_at', { ascending: false })
                    .limit(1);

                if (!error && data && data.length > 0) {
                    const latest = data[0];
                    const readKey = `broadcast_read_${latest.id}`;
                    
                    if (!localStorage.getItem(readKey)) {
                        setBroadcast(latest);
                        setTimeout(() => setIsVisible(true), 3000);
                    }
                }
            } catch (err) {
                console.warn('Broadcast fetch failed:', err);
            }
        };

        fetchLatestBroadcast();
    }, []);

    const dismiss = () => {
        if (broadcast) {
            localStorage.setItem(`broadcast_read_${broadcast.id}`, 'true');
        }
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && broadcast && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    className="fixed top-20 sm:top-auto sm:bottom-8 left-4 right-4 sm:left-auto sm:right-4 z-[9999] w-auto max-w-sm ml-auto pointer-events-auto"
                >
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-5 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                        
                        <div className="flex gap-4 relative">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <Bell className="text-white w-6 h-6 animate-pulse" />
                            </div>
                            
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1 leading-tight text-base font-outfit">
                                    {broadcast.title}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug mb-4">
                                    {broadcast.message}
                                </p>
                                
                                <div className="flex items-center gap-3">
                                    {broadcast.link && (
                                        <a 
                                            href={broadcast.link}
                                            onClick={dismiss}
                                            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20"
                                        >
                                            {broadcast.cta_text || 'Learn More'}
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                    <button 
                                        onClick={dismiss}
                                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold px-2 transition-colors uppercase tracking-wider"
                                    >
                                        Skip
                                    </button>
                                </div>
                            </div>

                            <button 
                                onClick={dismiss}
                                className="absolute -top-1 -right-1 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BroadcastListener;
