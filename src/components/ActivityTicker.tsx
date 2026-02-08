"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle, Flame, ShieldCheck } from 'lucide-react';

const activities = [
    { id: 1, text: "Someone from Mumbai just used the Lost Policy Tool", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { id: 2, text: "New Claim Inquiry received from Delhi (5 mins ago)", icon: <Bell className="w-4 h-4 text-blue-500" /> },
    { id: 3, text: "Policy Recovery expert successfully found a policy for a client in Bangalore", icon: <ShieldCheck className="w-4 h-4 text-amber-500" /> },
    { id: 4, text: "42 people are looking at Life Insurance support right now", icon: <Flame className="w-4 h-4 text-orange-500" /> },
    { id: 5, text: "Claim of ₹15 Lakhs settled for a family in Chennai yesterday", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { id: 6, text: "Expert consultation booked for a Health Insurance query", icon: <Bell className="w-4 h-4 text-blue-500" /> }
];

const ActivityTicker = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // Show first after 5 seconds

        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % activities.length);
                setIsVisible(true);
            }, 1000); // Hide for 1 sec before showing next
        }, 12000); // Change every 12 seconds

        return () => {
            clearTimeout(showTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    className="fixed bottom-24 left-4 z-50 max-w-[280px] md:max-w-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-4 flex items-start gap-3"
                >
                    <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-full flex-shrink-0">
                        {activities[currentIndex].icon}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-tight">
                            {activities[currentIndex].text}
                        </p>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                            Just Now
                        </span>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="absolute top-0 right-0 -mr-1 -mt-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ActivityTicker;
