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
    <div className="flex flex-col items-center md:items-start w-full">
      <p className="text-lg font-semibold mb-4 text-foreground">
        Have questions? We're here to help.
      </p>
      <Button size="lg" onClick={openChatbot} className="shadow-lg">
        <MessageSquare className="mr-2 h-5 w-5" />
        Chat with an Expert
      </Button>
    </div>
  );
};

export default ChatbotWidget;