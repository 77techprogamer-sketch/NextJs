"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CHATBOT_URL = "https://udify.app/chatbot/iJnNXRIZHxwYL4iP";

const ChatbotWidget = () => {
  const openChatbot = () => {
    window.open(CHATBOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Have questions? Chat with our Assistant!
      </h2>
      <Button size="lg" onClick={openChatbot}>
        <MessageSquare className="mr-2 h-5 w-5" />
        Open Assistant
      </Button>
    </div>
  );
};

export default ChatbotWidget;