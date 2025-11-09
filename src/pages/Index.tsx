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
    <div className="flex flex-col justify-between relative min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Welcome to Insurance Support</h1>
            <p className="text-xl text-gray-600 mb-8">
              {currentOneLiner}
            </p>
            <ChatbotWidget />
          </div>
          <div className="w-full">
            <QuoteForm />
          </div>
        </div>
      </div>
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;