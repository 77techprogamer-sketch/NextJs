"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserCheck } from "lucide-react";
import { usePathname } from 'next/navigation'; // Changed from react-router-dom
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FORM_CONFIGS } from "@/config/forms";

const BASE_CHATBOT_URL = "https://udify.app/chat/uHzY4hhQTioH4pFK";

const ChatbotWidget = () => {
    // Removed useTranslation, using hardcoded strings
    const pathname = usePathname(); // Changed from useLocation
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const chatbotUrl = useMemo(() => {
        const url = new URL(BASE_CHATBOT_URL);

        // Detect service from URL path (e.g., /services/health-insurance)
        // Next.js pathname is like /services/health-insurance
        const serviceMatch = pathname?.match(/\/services\/([^/]+)/);
        // Convert hyphen-case (url) to snake_case (config key) if needed, but config keys I made are mixed.
        // Let's normalize keys in config to match URL slugs (hyphens) or convert here.
        // The previous config had underscores (health_insurance). The URL slugs are hyphens (health-insurance).

        const serviceSlug = serviceMatch ? serviceMatch[1] : null;
        const serviceKey = serviceSlug ? serviceSlug.replace(/-/g, '_') : null;

        let context = serviceKey ? FORM_CONFIGS[serviceKey]?.chatbotContext : null;

        // Fallback to general inquiry if on home page
        if (!context && pathname === '/') {
            context = FORM_CONFIGS["general_inquiry"]?.chatbotContext;
        }

        if (context?.initialQuery) {
            url.searchParams.set("query", context.initialQuery);
        }

        return url.toString();
    }, [pathname]);

    return (
        <>
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none group">
                {/* Availability Badge */}
                <div className={cn(
                    "backdrop-blur-md bg-white/90 border border-slate-200 shadow-xl px-4 py-2 rounded-2xl flex flex-col items-start gap-1 transition-all duration-300 pointer-events-auto",
                    "animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300 fill-mode-forwards"
                )}>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <UserCheck className="h-4 w-4 text-emerald-600" />
                            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-emerald-500 rounded-full animate-ping"></span>
                        </div>
                        <span className="text-[10px] font-black text-emerald-700 uppercase tracking-tighter">
                            24/7 SUPPORT
                        </span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 leading-none">
                        Instant Response
                    </span>
                </div>

                {/* FAB Button */}
                <Button
                    size="icon"
                    onClick={() => setIsChatbotOpen(true)}
                    className={cn(
                        "h-16 w-16 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white border-4 border-white/50 backdrop-blur-sm",
                        "animate-bounce [animation-duration:3000ms] infinite",
                        "hover:animate-none group-hover:animate-none active:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    )}
                >
                    <div className="relative">
                        <MessageSquare className="h-7 w-7 drop-shadow-md" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-white/30"></span>
                        </span>
                    </div>
                </Button>
            </div>

            <Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
                <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] h-[85vh] p-0 flex flex-col gap-0 overflow-hidden border-none shadow-2xl animate-in zoom-in-95 fade-in-0 slide-in-from-bottom-5 duration-300">
                    <DialogHeader className="p-4 bg-gradient-to-r from-primary to-blue-600 text-white flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <DialogTitle className="text-white text-lg font-bold">Chat with Expert</DialogTitle>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-[10px] text-white/80 font-medium uppercase tracking-widest">Expert Available</span>
                                </div>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="flex-grow bg-slate-50 relative">
                        <iframe
                            key={chatbotUrl} // Force reload on context change
                            src={chatbotUrl}
                            width="100%"
                            height="100%"
                            className="border-none bg-white"
                            title="Chatbot"
                            allow="microphone"
                        ></iframe>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ChatbotWidget;
