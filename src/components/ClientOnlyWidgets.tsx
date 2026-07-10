'use client';

import React from 'react';
import nextDynamic from 'next/dynamic';

const ChatbotWidget = nextDynamic(() => import('@/components/ChatbotWidget'), { ssr: false });
const SmartLanguageSelector = nextDynamic(() => import('@/components/SmartLanguageSelector'), { ssr: false });
const QuickDialSidebar = nextDynamic(() => import('@/components/QuickDialSidebar'), { ssr: false });
const WhatsAppWidget = nextDynamic(() => import('@/components/WhatsAppWidget'), { ssr: false });
const StickyMobileContactBar = nextDynamic(() => import('@/components/StickyMobileContactBar'), { ssr: false });
const QuestionForm = nextDynamic(() => import('@/components/QuestionForm'), { ssr: false });
const VisitorTracker = nextDynamic(() => import('@/components/VisitorTracker'), { ssr: false });
const LeadSyncManager = nextDynamic(() => import('@/components/LeadSyncManager').then(mod => mod.LeadSyncManager), { ssr: false });
const BroadcastListener = nextDynamic(() => import('@/components/BroadcastListener'), { ssr: false });
const ExitIntentPopup = nextDynamic(() => import('@/components/ExitIntentPopup'), { ssr: false });
const CollapsibleToolsFooter = nextDynamic(() => import('@/components/CollapsibleToolsFooter'), { ssr: false });
const GlobalForms = nextDynamic(() => import('@/components/GlobalForms'), { ssr: false });

export default function ClientOnlyWidgets() {
    return (
        <>
            <SmartLanguageSelector />
            <CollapsibleToolsFooter />
            <VisitorTracker />
            <QuickDialSidebar />
            <React.Suspense fallback={<div className="h-0" />}>
                <ChatbotWidget />
            </React.Suspense>
            <GlobalForms />
            <WhatsAppWidget />
            <StickyMobileContactBar />
            <LeadSyncManager />
            <BroadcastListener />
            <ExitIntentPopup />
        </>
    );
}
