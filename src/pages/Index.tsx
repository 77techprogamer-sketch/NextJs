"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import VisitorCounter from "@/components/VisitorCounter";
import QuoteForm from "@/components/QuoteForm";
import SocialShareButtons from "@/components/SocialShareButtons"; // Import the new component

const insuranceOneLiners = [
  "Life insurance secures your loved ones' future, offering peace of mind.",
  "Health insurance protects your well-being and covers unexpected medical costs.",
  "Term insurance provides high coverage for a specific period at affordable premiums.",
  "Motor insurance safeguards your vehicle against damages and liabilities on the road.",
];

const Index = () => {
  const [currentOneLiner, setCurrentOneLiner] = useState(insuranceOneLiners[0]);
  const [oneLinerIndex, setOneLinerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOneLinerIndex((prevIndex) => (prevIndex + 1) % insuranceOneLiners.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentOneLiner(insuranceOneLiners[oneLinerIndex]);
  }, [oneLinerIndex]);

  const currentUrl = window.location.href;
  const pageTitle = "Insurance Support - Your Trusted Partner";

  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                Your Trusted Partner in Insurance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl transition-opacity duration-1000 ease-in-out">
                {currentOneLiner}
              </p>
              <ChatbotWidget />
              <p className="text-base text-muted-foreground mt-4 mb-1 font-bold">Share it if you like the service.</p> {/* Added font-bold */}
              <SocialShareButtons url={currentUrl} title={pageTitle} /> {/* Add social share buttons */}
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