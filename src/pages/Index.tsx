"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
// ChatbotWidget import removed as it's now in App.tsx

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">
          Start building your amazing project here!
        </p>
      </div>
      <MadeWithDyad />
      {/* ChatbotWidget removed from here */}
    </div>
  );
};

export default Index;