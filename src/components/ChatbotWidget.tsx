"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CHATBOT_URL = "https://udify.app/chatbot/iJnNXRIZHxwYL4iP";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-50"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className={`flex flex-col p-0 ${isMobile ? "w-[95vw] h-[90vh] max-w-none max-h-none" : "w-[400px] h-[600px]"}`}>
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Chat with us!</DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
          <iframe
            src={CHATBOT_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Udify Chatbot"
            className="border-none"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotWidget;