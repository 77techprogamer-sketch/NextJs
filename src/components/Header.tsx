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
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ShieldCheck, Menu, ChevronRight } from 'lucide-react';
import { slugify } from '@/utils/slugify';
import { formatLabel } from '@/utils/formatText';

const Header = () => {
  const { t } = useTranslation();
  const [sheetOpen, setSheetOpen] = React.useState(false);

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
        <nav className="hidden lg:flex items-center gap-5 lg:gap-8">
          {/* ... (Existing Desktop Nav Content) ... */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                onClick={handleScrollToServices}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={t("buy_insurance", "Buy Insurance")}
                suppressHydrationWarning
              >
                {t("buy_insurance", "Buy Insurance")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {serviceKeys.map((key) => (
                <DropdownMenuItem key={key} asChild>
                  <Link
                    href={`/services/${slugify(key)}`}
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
                  {t("view_all_services")}
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={t("free_tools")}
                suppressHydrationWarning
              >
                {t("tools")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem asChild>
                <Link href="/tools/human-life-value-calculator" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold text-primary">{t("hlv_calculator")}</span>
                  <span className="text-xs text-muted-foreground">{t("hlv_calculator_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/policy-recovery" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">{t("lost_policy_recovery")}</span>
                  <span className="text-xs text-muted-foreground">{t("lost_policy_recovery_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/risk-scorecard" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">{t("risk_scorecard_tool")}</span>
                  <span className="text-xs text-muted-foreground">{t("risk_scorecard_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/investment-returns" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold text-primary">{t("wealth_discovery")}</span>
                  <span className="text-xs text-muted-foreground">{t("wealth_discovery_desc")}</span>
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
                  <span className="text-xs text-muted-foreground">{t("success_stories_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides/maturity-claim-guide" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold text-primary">{t("maturity_claim_guide")}</span>
                  <span className="text-xs text-muted-foreground">{t("maturity_claim_guide_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides/death-claim-settlement" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">{t("death_claim_guide")}</span>
                  <span className="text-xs text-muted-foreground">{t("death_claim_guide_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides/lapsed-policy-revival" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">{t("policy_revival_guide")}</span>
                  <span className="text-xs text-muted-foreground">{t("policy_revival_guide_desc")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides/lapsed-policy-revival" className="cursor-pointer flex flex-col items-start gap-1 p-2">
                  <span className="font-semibold">{t("lost_policy_guide")}</span>
                  <span className="text-xs text-muted-foreground">{t("lost_policy_guide_desc")}</span>
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
            onClick={() => {
              import('@/utils/trackCta').then(({ trackCTAClick }) => trackCTAClick('Header: Buy Policy'));
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-primary hover:bg-accent/90 h-10 px-6 shadow-sm"
            suppressHydrationWarning
          >
            {t("buy_policy", "Buy Policy")}
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-primary"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col gap-0 p-0 overflow-y-auto">
              <SheetHeader className="px-5 pt-6 pb-4 border-b">
                <SheetTitle className="flex items-center gap-2 text-left text-primary">
                  <ShieldCheck className="h-6 w-6" />
                  {t("insurance_support")}
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col flex-1 px-4 py-6 gap-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2 mb-2">
                  {t("buy_insurance", "Buy Insurance")}
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {serviceKeys.map((key) => (
                    <Link
                      key={key}
                      href={`/services/${slugify(key)}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setSheetOpen(false)}
                    >
                      {formatLabel(t(key))}
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </Link>
                  ))}
                </div>

                <Separator className="my-4" />

                <Link
                  href="/loans"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setSheetOpen(false)}
                >
                  {t("loans")}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>

                <Link
                  href="/support"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setSheetOpen(false)}
                >
                  {t("support")}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>

                <Link
                  href="/about"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setSheetOpen(false)}
                >
                  {t("about_us")}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>

                <Separator className="my-4" />

                <Link
                  href="/get-started"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setSheetOpen(false)}
                >
                  {t("buy_policy", "Buy Policy")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;