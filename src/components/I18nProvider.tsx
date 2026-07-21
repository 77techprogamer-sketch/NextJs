"use client";

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function I18nProvider({ children, initialLang }: { children: React.ReactNode, initialLang?: string }) {
    useEffect(() => {
        // Change language if needed — translations are already bundled, so this is instant
        if (initialLang && i18n.language !== initialLang) {
            i18n.changeLanguage(initialLang);
        }
        // Ensure i18n is initialized (no-op if already done)
        if (!i18n.isInitialized) {
            i18n.init();
        }
    }, [initialLang]);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}
