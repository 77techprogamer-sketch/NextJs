"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserCheck } from "lucide-react";
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CHATBOT_URL = "https://udify.app/chat/uHzY4hhQTioH4pFK";

const ChatbotWidget = () => {
  const { t } = useTranslation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const openChatbot = () => {
    setIsChatbotOpen(true);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Button
        size="lg"
        onClick={openChatbot}
        className="shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        {t("chat_with_expert")}
      </Button>
      <div className="flex items-center text-green-600 dark:text-green-500 mt-3" title={t("expert_available")}>
        <UserCheck className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">{t("expert_available")}</span>
      </div>

      <Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] h-[80vh] p-0 flex flex-col">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>{t("chat_with_expert")}</DialogTitle>
          </DialogHeader>
          <iframe
            src={CHATBOT_URL}
            width="100%"
            height="100%"
            className="flex-grow border-none rounded-b-lg"
            title="Chatbot"
            allow="microphone"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatbotWidget;