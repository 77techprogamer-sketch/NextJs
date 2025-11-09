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
    <div className="flex flex-col min-h-full">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                Your Trusted Partner in Insurance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                {currentOneLiner}
              </p>
              <ChatbotWidget />
            </div>
            <div className="w-full flex justify-center md:justify-end">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;