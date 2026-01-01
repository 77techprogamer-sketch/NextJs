"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserCheck } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
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
  const { t } = useTranslation();
  const location = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const chatbotUrl = useMemo(() => {
    const url = new URL(BASE_CHATBOT_URL);

    // Detect service from URL path (e.g., /services/health_insurance)
    const serviceMatch = location.pathname.match(/\/services\/([^/]+)/);
    const serviceKey = serviceMatch ? serviceMatch[1] : null;

    let context = FORM_CONFIGS[serviceKey || ""]?.chatbotContext;

    // Fallback to general inquiry if on home page
    if (!context && location.pathname === '/') {
      context = FORM_CONFIGS["general_inquiry"]?.chatbotContext;
    }

    if (context?.initialQuery) {
      url.searchParams.set("query", context.initialQuery);
    }

    return url.toString();
  }, [location.pathname]);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none group">
        {/* Availability Badge */}
        <div className={cn(
          "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border shadow-xl px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-auto",
          "animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300 fill-mode-forwards"
        )}>
          <div className="relative">
            <UserCheck className="h-4 w-4 text-green-500" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
          </div>
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
            {t("expert_available")}
          </span>
        </div>

        {/* FAB Button */}
        <Button
          size="icon"
          onClick={() => setIsChatbotOpen(true)}
          className={cn(
            "h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto bg-primary hover:bg-primary/90 text-white border-0",
            "animate-in zoom-in duration-300"
          )}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      <Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] h-[85vh] p-0 flex flex-col gap-0 overflow-hidden border-none shadow-2xl">
          <DialogHeader className="p-4 bg-primary text-white flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-white text-lg font-bold">{t("chat_with_expert")}</DialogTitle>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-white/80 font-medium uppercase tracking-widest">{t("expert_available")}</span>
                </div>
              </div>
            </div>
          </DialogHeader>
          <div className="flex-grow bg-white dark:bg-gray-950 relative">
            <iframe
              key={chatbotUrl} // Force reload on context change
              src={chatbotUrl}
              width="100%"
              height="100%"
              className="border-none"
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
