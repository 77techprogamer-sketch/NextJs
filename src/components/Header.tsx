"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Import shadcn dropdown components
import { ChevronDown } from 'lucide-react'; // Import an icon for the dropdown
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
        <Link to="/" className="text-xl sm:text-2xl font-bold text-foreground" aria-label={t("insurance_support")}>
          {t("insurance_support")}
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
                    to={`/services/${slugify(key)}`} // Link to individual service page
                    className="cursor-pointer"
                  >
                    {formatLabel(t(key))}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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