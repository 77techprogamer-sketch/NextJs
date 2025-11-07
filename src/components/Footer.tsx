"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start text-sm mb-1">
            <Mail className="h-4 w-4 mr-2" />
            info@insurancesupport.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-sm">
            <Phone className="h-4 w-4 mr-2" />
            +1 (555) 123-4567
          </p>
        </div>
        <div className="text-center">
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;