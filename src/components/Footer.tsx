"use client";

import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { slugify } from '@/utils/slugify';
import { formatLabel } from '@/utils/formatText';
import { cityData } from '@/data/cityData';
import TrustBadges from './TrustBadges';

interface CollapsibleListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  limit?: number;
}

function CollapsibleList<T>({ items, renderItem, limit = 6 }: CollapsibleListProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);

  // SEO critical: We render ALL items in the DOM so crawlers see the links.
  // We use CSS to hide the extra items visually.

  return (
    <div className="space-y-2">
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className={index >= limit && !isExpanded ? 'hidden' : 'block'}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
      {items.length > limit && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline focus:outline-none"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp className="h-3 w-3" /></>
          ) : (
            <>Show All ({items.length}) <ChevronDown className="h-3 w-3" /></>
          )}
        </button>
      )}
    </div>
  );
}

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
    <footer className="w-full bg-slate-50 dark:bg-slate-950 text-foreground border-t pb-12 overflow-x-hidden">
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 overflow-hidden max-w-[100vw]">
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
            <TrustBadges />
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Award className="h-5 w-5 text-accent" />
              <span suppressHydrationWarning>{t("veteran_lead_team")}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t("quick_links")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/human-life-value-calculator" className="hover:text-primary transition-colors font-semibold text-primary" suppressHydrationWarning>HLV Calculator (New)</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("resources")}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("about_us")}</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("support")}</Link></li>
              <li><Link href="/get-started" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("get_quote")}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("privacy_policy")}</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("terms_of_service")}</Link></li>
              <li><Link href="/return-policy" className="hover:text-primary transition-colors" suppressHydrationWarning>{t("return_policy")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t("services_offered")}</h3>
            <CollapsibleList
              items={serviceKeys}
              limit={5}
              renderItem={(key) => (
                <Link href={`/services/${slugify(key)}`} className="hover:text-primary transition-colors" suppressHydrationWarning>
                  {formatLabel(t(key))}
                </Link>
              )}
            />
            <Link href="/services" className="text-xs font-bold text-primary mt-2 flex items-center gap-1 hover:underline">
              View All Services <ChevronRight className="h-3 w-3" />
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs" suppressHydrationWarning>{t("we_serve")}</h3>
            <CollapsibleList
              items={locations}
              limit={5}
              renderItem={(cityKey) => {
                const city = cityData[cityKey];
                return (
                  <Link href={`/locations/${city.slug}`} className="hover:text-primary transition-colors">
                    {city.name}
                  </Link>
                );
              }}
            />
            <Link href="/locations" className="text-xs font-bold text-primary mt-2 flex items-center gap-1 hover:underline">
              View All 30+ Locations <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs" suppressHydrationWarning>{t("headquarters")}</h3>
            <p className="text-sm mb-6" suppressHydrationWarning>{t("bangalore_office")}</p>

            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs text-primary" suppressHydrationWarning>Trending Now</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations/bangalore/health-insurance" className="hover:text-primary transition-colors">Health Insurance Bangalore</Link></li>
              <li><Link href="/locations/hyderabad/life-insurance" className="hover:text-primary transition-colors">Life Insurance Hyderabad</Link></li>
              <li><Link href="/locations/pune/term-insurance" className="hover:text-primary transition-colors">Term Insurance Pune</Link></li>
              <li><Link href="/locations/chennai/motor-insurance" className="hover:text-primary transition-colors">Motor Insurance Chennai</Link></li>
              <li><Link href="/locations/mumbai/lic-agent" className="hover:text-primary transition-colors">Insurance Advisor Mumbai</Link></li>
              <li><Link href="/locations/delhi/sme-insurance" className="hover:text-primary transition-colors">SME Insurance Delhi</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-muted-foreground" suppressHydrationWarning>&copy; {new Date().getFullYear()} {t("insurance_support")}. {t("all_rights_reserved")}</p>
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground/60">
              <Link href="/sitemap-index" className="hover:text-primary transition-colors">Site Map</Link>
              <span>|</span>
              <a href="/sitemap.xml" className="hover:text-primary transition-colors">XML Sitemap</a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
            <span title="Team of IRDAI Certified Insurance Advisors">IRDAI CERTIFIED ADVISORS</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("legacy")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("trust")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("excellence")}</span>
          </div>
        </div>
        <div className="mt-8 text-center sm:text-left">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed max-w-4xl mx-auto sm:mx-0">
            <strong>Disclaimer:</strong> Insurance is a subject matter of solicitation. Insurance Support is a professional advisory firm providing consultancy for IRDAI approved insurance products.
            All policy issuance and claim settlements are subject to the terms and conditions and underwriting of the respective insurance companies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;