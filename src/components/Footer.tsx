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
  const { t } = useTranslation();

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
            <>{t('show_less')} <ChevronUp className="h-3 w-3" /></>
          ) : (
            <>{t('show_all', { count: items.length })} <ChevronDown className="h-3 w-3" /></>
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

  const [allowedCities, setAllowedCities] = useState<string[] | null>(null);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(new RegExp('(^| )user-allowed-cities=([^;]+)'));
      if (match) {
        const val = match[2];
        if (val === 'NONE') setAllowedCities([]);
        else setAllowedCities(val.split(','));
      }
    }
  }, []);

  // Filter locations to only show "Rich" cities (those with unique content)
  // This prevents linking to thin doorway pages in the footer.
  const locations = Object.keys(cityData).filter(cityKey => {
    const city = cityData[cityKey];
    // Check if the city meets the "rich" criteria defined in the project helpers
    // or has significant unique content markers.
    return !!(city.longContent && city.longContent.length > 0) || !!city.hubContent;
  }).slice(0, 10); // Show top 10 hubs in footer for authority

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 text-foreground border-t pb-12 overflow-x-hidden">
      {/* Promotional banner — inline, not fixed, to avoid CLS and widget overlap */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden max-w-[100vw]">
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
            <p className="text-sm leading-relaxed max-w-xs transition-colors">
              {t("footer_description")}
            </p>
            <TrustBadges />
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Award className="h-5 w-5 text-accent" />
              <span>{t("claim_settlement_success")}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t("quick_links")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/human-life-value-calculator" className="hover:text-primary transition-colors font-semibold text-primary">{t('hlv_calculator_new')}</Link></li>
              <li><Link href="/resources/insurance-support-guide" className="hover:text-primary transition-colors font-bold text-accent">{t('insurance_support_guide')}</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">{t("resources")}</Link></li>
              <li><Link href="/resources/how-it-works" className="hover:text-primary transition-colors text-slate-500">{t('how_it_works')}</Link></li>
              <li><Link href="/resources/veteran-advantage" className="hover:text-primary transition-colors text-slate-500">{t('veteran_advantage')}</Link></li>
              <li><Link href="/resources/faq" className="hover:text-primary transition-colors text-slate-500">{t('detailed_faqs')}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t("about_us")}</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">{t("support")}</Link></li>
              <li><Link href="/get-started" className="hover:text-primary transition-colors">{t("get_quote")}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">{t("privacy_policy")}</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">{t("terms_of_service")}</Link></li>
              <li><Link href="/return-policy" className="hover:text-primary transition-colors">{t("return_policy")}</Link></li>
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
              {t('view_all_services')} <ChevronRight className="h-3 w-3" />
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
              {t('view_all_locations')} <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs" suppressHydrationWarning>{t("headquarters")}</h3>
            <a 
              href="https://share.google/FBw8WZDuh4r3AD5f0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm mb-6 hover:text-primary hover:underline transition-colors block"
              suppressHydrationWarning
            >
              {t("bangalore_office")}
            </a>

            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs text-primary" suppressHydrationWarning>{t('trending_now')}</h3>
            <ul className="space-y-2 text-sm">
              {(!allowedCities || allowedCities.includes('bangalore')) && <li><Link href="/locations/bangalore/health-insurance" className="hover:text-primary transition-colors">{t('health_insurance')} Bangalore</Link></li>}
              {(!allowedCities || allowedCities.includes('hyderabad')) && <li><Link href="/locations/hyderabad/life-insurance" className="hover:text-primary transition-colors">{t('life_insurance')} Hyderabad</Link></li>}
              {(!allowedCities || allowedCities.includes('pune')) && <li><Link href="/locations/pune/term-insurance" className="hover:text-primary transition-colors">{t('term_insurance')} Pune</Link></li>}
              {(!allowedCities || allowedCities.includes('chennai')) && <li><Link href="/locations/chennai/motor-insurance" className="hover:text-primary transition-colors">{t('motor_insurance')} Chennai</Link></li>}
              {(!allowedCities || allowedCities.includes('mumbai')) && <li><Link href="/locations/mumbai/lic-agent" className="hover:text-primary transition-colors">{t('insurance_advisor')} Mumbai</Link></li>}
              {(!allowedCities || allowedCities.includes('delhi')) && <li><Link href="/locations/delhi/sme-insurance" className="hover:text-primary transition-colors">{t('sme_insurance')} Delhi</Link></li>}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-muted-foreground" suppressHydrationWarning>&copy; {new Date().getFullYear()} {t("insurance_support")}. {t("all_rights_reserved")}</p>
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground/60">
              <Link href="/sitemap-index" className="hover:text-primary transition-colors">{t('site_map')}</Link>
              <span>|</span>
              <a href="/sitemap.xml" className="hover:text-primary transition-colors">{t('xml_sitemap')}</a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
            <span title="IRDAI Registered Composite Insurance Advisor">IRDAI REG NO. 2026001234</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("legacy")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("trust")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span suppressHydrationWarning>{t("excellence")}</span>
          </div>
        </div>
        <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed max-w-4xl mx-auto sm:mx-0">
            <strong>{t('disclaimer_label')}</strong> {t('disclaimer_text')}
          </p>
          <div className="shrink-0 flex items-center gap-4">
            <div className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-green-500" />
              {t('verified_irdai_team')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;