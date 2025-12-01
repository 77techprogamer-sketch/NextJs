"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserCheck } from "lucide-react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const CHATBOT_URL = "https://udify.app/chat/uHzY4hhQTioH4pFK";

const ChatbotWidget = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const openChatbot = () => {
    window.open(CHATBOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center"> {/* Changed items-end to items-center */}
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
    </div>
  );
};

export default ChatbotWidget;