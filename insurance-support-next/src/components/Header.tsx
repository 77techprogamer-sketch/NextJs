"use client";

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import LanguageSwitcher from './LanguageSwitcher';
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
      servicesSection.scrollIntoView({ behavior: 'smooth' });
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
    <header className="w-full bg-background shadow-sm sticky top-0 z-10 border-b">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group" aria-label={t("insurance_support")}>
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center group-hover:bg-accent transition-colors">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors">
            {t("insurance_support")}
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                // The main dropdown trigger still scrolls to services section on the home page
                // If on a service detail page, it will navigate to home and then scroll
                onClick={handleScrollToServices}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={t("services_offered_link")}
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
                  >
                    {formatLabel(t(key))}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/support"
            className="text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium"
          >
            {t("support")}
          </Link>
          <a
            href="https://insurancesupportindia.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors text-sm sm:text-base"
            aria-label={t("articles_link")}
          >
            {t("articles_link")}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;