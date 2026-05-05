'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const TranslateWrapper = ({ k }: { k: string }) => {
    const { t } = useTranslation();
    return <>{t(k)}</>;
};
