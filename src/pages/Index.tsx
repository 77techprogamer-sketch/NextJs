"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import VisitorCounter from "@/components/VisitorCounter";
import QuoteForm from "@/components/QuoteForm";

const insuranceOneLiners = [
  "Life insurance secures your loved ones' future, offering peace of mind.",
  "Health insurance protects your well-being and covers unexpected medical costs.",
  "Term insurance provides high coverage for a specific period at affordable premiums.",
  "Motor insurance safeguards your vehicle against damages and liabilities on the road.",
];

const Index = () => {
  const [currentOneLiner, setCurrentOneLiner] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * insuranceOneLiners.length);
    setCurrentOneLiner(insuranceOneLiners[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 relative">
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4 w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Insurance Support</h1>
        <p className="text-xl text-gray-600 mb-8">
          {currentOneLiner}
        </p>
        <QuoteForm />
        <ChatbotWidget />
      </div>
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;