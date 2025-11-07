"use client";

import React, { useState, useEffect } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

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
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Insurance Support</h1>
        <p className="text-xl text-gray-600">
          {currentOneLiner}
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;