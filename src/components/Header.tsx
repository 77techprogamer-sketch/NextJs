"use client";

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import dynamic from 'next/dynamic';

const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'), { ssr: false });
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Import shadcn dropdown components
import { ChevronDown, ShieldCheck } from 'lucide-react'; // Import icons
import { slugify } from '@/utils/slugify'; // Import the slugify utility
import { formatLabel } from '@/utils/formatText';

const Header = () => {
  const { t } = useTranslation();

  // This function is now only for the main "Services Offered" button to scroll to the section
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      requestAnimationFrame(() => {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.location.href = "/#services";
    }
  };

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

  return (
    <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]" aria-label={t("insurance_support")} suppressHydrationWarning>
          <div className="h-9 w-9 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors" suppressHydrationWarning>
            {t("insurance_support")}
          </span>
        </Link>
        <nav className="flex items-center gap-5 lg:gap-8">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                // The main dropdown trigger still scrolls to services section on the home page
                // If on a service detail page, it will navigate to home and then scroll
                onClick={handleScrollToServices}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={t("services_offered_link")}
                suppressHydrationWarning
              >
                {t("services_offered_link")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {serviceKeys.map((key) => (
                <DropdownMenuItem key={key} asChild>
                  <Link
                    href={`/services/${slugify(key)}`} // Link to individual service page
                    className="cursor-pointer"
                    suppressHydrationWarning
                  >
                    {formatLabel(t(key))}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="border-t border-slate-100 mt-2 pt-2">
                <Link
                  href="/services"
                  className="flex items-center justify-center p-2 text-xs font-bold text-primary hover:bg-slate-50 transition-colors rounded-md"
                >
                  View All Services
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Free Tools"
                suppressHydrationWarning
              >
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem asChild>
                <Link href="/tools/human-life-value-calculator" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold text-primary">HLV Calculator</span>
                  <span className="text-xs text-muted-foreground">Calculate your ideal insurance cover</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/policy-recovery" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">Lost Policy Recovery</span>
                  <span className="text-xs text-muted-foreground">Find details of lost LIC policies</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/risk-scorecard" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">Risk Scorecard</span>
                  <span className="text-xs text-muted-foreground">Assess your financial risk profile</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={t("loans")}
                suppressHydrationWarning
              >
                {t("loans")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {[
                "loan_against_policy",
                "home_loan",
                "personal_loan",
                "business_loan",
                "education_loan",
                "vehicle_loan",
                "mortgage_loan"
              ].map((key) => (
                <DropdownMenuItem key={key} asChild>
                  <Link
                    href="/loans"
                    className="cursor-pointer"
                    suppressHydrationWarning
                  >
                    {t(key)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={t("resources")}
                suppressHydrationWarning
              >
                {t("resources")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem asChild>
                <Link href="/success-stories" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold text-primary">{t("success_stories")}</span>
                  <span className="text-xs text-muted-foreground">Proof of our expert claim recovery</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides/death-claim-settlement" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">Death Claim Guide</span>
                  <span className="text-xs text-muted-foreground">Step-by-step LIC claim process</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides/lapsed-policy-revival" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">Policy Revival Guide</span>
                  <span className="text-xs text-muted-foreground">How to restore old LIC policies</span>
                </Link>
              </DropdownMenuItem>
              <div className="border-t border-slate-100 mt-2 pt-2">
                <a
                  href="https://insurancesupportindia.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 text-xs font-bold text-primary hover:bg-slate-50 transition-colors rounded-md"
                >
                  {t("articles_link")}
                </a>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/support"
            className="text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium"
            suppressHydrationWarning
          >
            {t("support")}
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium"
            suppressHydrationWarning
          >
            {t("about_us")}
          </Link>
          <Link
            href="/get-started"
            className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
            suppressHydrationWarning
          >
            {t("get_quote")}
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;