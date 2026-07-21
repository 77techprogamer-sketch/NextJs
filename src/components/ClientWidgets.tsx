'use client'

import dynamic from 'next/dynamic'

const ChatbotWidget = dynamic(() => import('@/components/ChatbotWidget'), { ssr: false })
const SmartLanguageSelector = dynamic(() => import('@/components/SmartLanguageSelector'), { ssr: false })
const QuickDialSidebar = dynamic(() => import('@/components/QuickDialSidebar'), { ssr: false })
const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), { ssr: false })
const StickyMobileContactBar = dynamic(() => import('@/components/StickyMobileContactBar'), { ssr: false })
const QuestionForm = dynamic(() => import('@/components/QuestionForm'), { ssr: false })
const VisitorTracker = dynamic(() => import('@/components/VisitorTracker'), { ssr: false })
const LeadSyncManager = dynamic(() => import('@/components/LeadSyncManager').then(mod => mod.LeadSyncManager), { ssr: false })
const BroadcastListener = dynamic(() => import('@/components/BroadcastListener'), { ssr: false })
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'), { ssr: false })
const CollapsibleToolsFooter = dynamic(() => import('@/components/CollapsibleToolsFooter'), { ssr: false })
const GlobalForms = dynamic(() => import('@/components/GlobalForms'), { ssr: false })

export {
    ChatbotWidget,
    SmartLanguageSelector,
    QuickDialSidebar,
    WhatsAppWidget,
    StickyMobileContactBar,
    QuestionForm,
    VisitorTracker,
    LeadSyncManager,
    BroadcastListener,
    ExitIntentPopup,
    CollapsibleToolsFooter,
    GlobalForms,
}
