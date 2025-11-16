"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="w-full bg-muted text-muted-foreground border-t">
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="font-bold text-lg px-4">
            🎉 GST rates have been slashed and removed on select plans! 🎉
          </span>
          <span className="font-bold text-lg px-4">
            🎉 GST rates have been slashed and removed on select plans! 🎉
          </span>
          <span className="font-bold text-lg px-4">
            🎉 GST rates have been slashed and removed on select plans! 🎉
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm font-semibold">Insurance Support</p>
          <p className="text-xs">Contact: Hari Kotian | 9986634506</p>
        </div>
        <div className="text-center">
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;