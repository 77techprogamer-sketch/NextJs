"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CHATBOT_URL = "https://udify.app/chatbot/iJnNXRIZHxwYL4iP";

const ChatbotWidget = () => {
  const isMobile = useIsMobile();

  // Determine dimensions based on mobile state
  const iframeWidth = isMobile ? "100%" : "600px"; // 600px wide on desktop
  const iframeHeight = isMobile ? "70vh" : "700px"; // 700px tall on desktop

  return (
    <div className={`flex flex-col items-center justify-center w-full p-4 ${isMobile ? "" : "max-w-3xl mx-auto"}`}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Chat with our AI Assistant</h2>
      <div className="border rounded-lg overflow-hidden shadow-lg bg-white" style={{ width: iframeWidth, height: iframeHeight }}>
        <iframe
          src={CHATBOT_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Udify Chatbot"
          className="border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default ChatbotWidget;