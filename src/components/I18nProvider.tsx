"use client";

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    const [isInitialized, setIsInitialized] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Ensure i18n is initialized
        if (!i18n.isInitialized) {
            i18n.init().then(() => {
                console.log('i18n initialized in I18nProvider');
                setIsInitialized(true);
            }).catch((err) => {
                console.error('Failed to initialize i18n:', err);
                setIsInitialized(true); // Still render to avoid blocking
            });
        } else {
            console.log('i18n already initialized');
            setIsInitialized(true);
        }
    }, []);

    // Prevent hydration mismatch while still rendering content on the server
    // We render the provider but allow the child components to handle individual hydration if needed
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}
