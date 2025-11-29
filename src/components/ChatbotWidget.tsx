"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserCheck } from "lucide-react";

const CHATBOT_URL = "https://udify.app/chat/uHzY4hhQTioH4pFK";

const ChatbotWidget = () => {
  const openChatbot = () => {
    window.open(CHATBOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center md:items-center w-full"> {/* Changed md:items-start to md:items-center */}
      <p className="text-lg font-semibold mb-4 text-foreground">
        Have questions? We're here to help.
      </p>
      <Button
        size="lg"
        onClick={openChatbot}
        className="shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Chat with an Expert
      </Button>
      <div className="flex items-center text-green-600 dark:text-green-500 mt-3" title="Expert is available for chat">
        <UserCheck className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">Expert available</span>
      </div>
    </div>
  );
};

export default ChatbotWidget;