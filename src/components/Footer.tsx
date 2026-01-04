"use client";

import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
        <div className="text-center sm:text-left">
          <Link to="/support" className="text-sm font-semibold hover:text-primary transition-colors">
            {t("insurance_support")} {t("support")}
          </Link>
          <p className="text-xs">{t("insurance_support_contact")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;