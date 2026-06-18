"use client";

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function I18nProvider({ children, initialLang }: { children: React.ReactNode, initialLang?: string }) {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        let mounted = true;
        const init = async () => {
            try {
                if (initialLang && i18n.language !== initialLang) {
                    await i18n.changeLanguage(initialLang);
                }
                if (!i18n.isInitialized) {
                    await new Promise<void>((resolve, reject) => {
                        i18n.init((err) => {
                            if (err) reject(err);
                            else resolve();
                        });
                        // Fallback timeout
                        setTimeout(() => resolve(), 3000);
                    });
                }
            } catch (err) {
                console.error('i18n init error:', err);
            }
            if (mounted) setIsInitialized(true);
        };
        init();
        return () => { mounted = false; };
    }, [initialLang]);

    if (!isInitialized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
        );
    }

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}
