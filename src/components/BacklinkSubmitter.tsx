"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BacklinkSubmitter() {
    const pathname = usePathname();

    useEffect(() => {
        const autoSubmit = async () => {
            const currentUrl = window.location.origin + window.location.pathname;
            const storageKey = `seo_submit_${pathname}`;
            const lastSubmit = localStorage.getItem(storageKey);
            const now = Date.now();
            const ONE_DAY = 24 * 60 * 60 * 1000;

            // Throttle: Only submit once per 24 hours per URL
            if (lastSubmit && (now - parseInt(lastSubmit)) < ONE_DAY) {
                return;
            }

            try {
                // Background submission
                const response = await fetch('/api/seo/auto-submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: currentUrl }),
                });

                if (response.ok) {
                    localStorage.setItem(storageKey, now.toString());
                    console.log(`[SEO] Automated submission successful for: ${pathname}`);
                }
            } catch (error) {
                console.warn('[SEO] Automated submission failed', error);
            }
        };

        // Delay slightly to not interfere with critical boat-up
        const timer = setTimeout(autoSubmit, 5000);
        return () => clearTimeout(timer);
    }, [pathname]);

    return null; // Invisible component
}
