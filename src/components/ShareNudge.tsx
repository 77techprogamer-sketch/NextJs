"use client";

import React, { useState, useEffect } from 'react';
import { X, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const ShareNudge = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasDismissed, setHasDismissed] = useState(false);

    useEffect(() => {
        // Check localStorage
        const dismissed = localStorage.getItem('share_nudge_dismissed');
        if (dismissed) {
            setHasDismissed(true);
            return;
        }

        // Show after 30 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setHasDismissed(true);
        localStorage.setItem('share_nudge_dismissed', 'true');
    };

    const handleShare = async () => {
        const url = window.location.href;
        const title = document.title;

        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    url
                });
                handleDismiss(); // Dismiss after successful share intent
            } catch (err) {
                console.error("Share failed:", err);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard! Thanks for sharing.");
            handleDismiss();
        }
    };

    if (hasDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-24 right-4 z-[60] max-w-sm w-full p-4"
                >
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-sm">Found this helpful?</h3>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Share this page with your friends and help us grow!
                                </p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleDismiss}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        <Button onClick={handleShare} className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white">
                            <Share2 className="h-4 w-4" />
                            Share Now
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShareNudge;
