"use client";

import React, { useState, useEffect } from 'react';

export default function DelayedLoader({ children, delay = 3500 }: { children: React.ReactNode, delay?: number }) {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const handleInteraction = () => {
            setShouldLoad(true);
            cleanup();
        };

        const cleanup = () => {
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            if (timeout) clearTimeout(timeout);
        };

        // Load eagerly on interaction
        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('mousemove', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });

        // Fallback: load after delay anyway
        timeout = setTimeout(() => {
            setShouldLoad(true);
            cleanup();
        }, delay);

        return cleanup;
    }, [delay]);

    if (!shouldLoad) return null;

    return <>{children}</>;
}
