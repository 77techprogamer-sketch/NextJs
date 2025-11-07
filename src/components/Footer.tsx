"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li>Hari Kotian</li>
            <li>Call or Whatsapp on -- 9986634506</li>
          </ul>
        </div>
        <div className="text-center">
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;