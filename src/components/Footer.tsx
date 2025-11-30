"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <footer className="w-full bg-muted text-muted-foreground border-t">
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="font-bold text-lg px-4">
            {t("gst_rates_slashed")}
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm font-semibold">{t("insurance_support")}</p>
          <p className="text-xs">{t("insurance_support_contact")}</p>
        </div>
        <div className="text-center">
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;