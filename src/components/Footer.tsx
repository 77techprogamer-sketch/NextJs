"use client";

import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award } from 'lucide-react';
import { slugify } from '@/utils/slugify';
import { formatLabel } from '@/utils/formatText';
import { cityData } from '@/data/cityData';
const Footer = () => {
  const { t } = useTranslation();

  const serviceKeys = [
    "life_insurance",
    "health_insurance",
    "term_insurance",
    "motor_insurance",
    "sme_insurance",
    "travel_insurance",
    "pension_plans",
    "ulip_plans",
    "wedding_insurance",
    "cyber_insurance",
  ];

  // Manually defined city list merged with dynamic checks or just hardcoded to ensure order
  const locations = Object.keys(cityData);

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 text-foreground border-t pb-12">
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="font-bold text-lg px-4" suppressHydrationWarning>
            {t("gst_rates_slashed")} {t("finance_options")}
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground" suppressHydrationWarning>{t("insurance_support")}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs transition-colors" suppressHydrationWarning>
              {t("footer_description")}
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Award className="h-5 w-5 text-accent" />
              <span suppressHydrationWarning>{t("veteran_lead_team")}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t("quick_links")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("resources")}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("about_us")}</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("support")}</Link></li>
              <li><Link href="/get-started" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("get_quote")}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("privacy_policy")}</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("terms_of_service")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t("services_offered")}</h3>
            <ul className="space-y-2 text-sm">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link href={`/services/${slugify(key)}`} className="hover:text-primary transition-colors" suppressHydrationWarning>
                    {formatLabel(t(key))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs" suppressHydrationWarning>{t("we_serve")}</h3>
            <ul className="space-y-2 text-sm">
              {locations.map((cityKey) => {
                const city = cityData[cityKey];
                return (
                  <li key={cityKey}>
                    <Link href={`/locations/${city.slug}`} className="hover:text-primary transition-colors">
                      {city.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs" suppressHydrationWarning>{t("headquarters")}</h3>
            <p className="text-sm mb-2" suppressHydrationWarning>{t("bangalore_office")}</p>
            <p className="text-xs font-medium uppercase tracking-tighter opacity-70" suppressHydrationWarning>{t("established_text")}</p>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground" suppressHydrationWarning>&copy; {new Date().getFullYear()} {t("insurance_support")}. {t("all_rights_reserved")}</p>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary/80">
            <span suppressHydrationWarning>{t("legacy")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("trust")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("excellence")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;