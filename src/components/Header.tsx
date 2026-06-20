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
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ShieldCheck, Phone } from 'lucide-react';
import { slugify } from '@/utils/slugify';
import { formatLabel } from '@/utils/formatText';
import TopNotificationBar from './TopNotificationBar';
import Image from 'next/image';


const Header = () => {
  const { t } = useTranslation();

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
    <div className="w-full sticky top-0 z-50">
      <TopNotificationBar />
      <header className="w-full bg-background shadow-sm border-b">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group" aria-label={t("insurance_support")}>
          <div className="h-9 w-9 rounded-lg overflow-hidden shrink-0 group-hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Insurance Support"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors">
            {t("insurance_support")}
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://g.page/r/CRDgJanrKjRhEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              4.9★ Google
            </a>
        </div>
          <nav className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleScrollToServices}
                className="hidden md:flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                    href={`/services/${slugify(key)}`}
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
            className="hidden md:block text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium"
          >
            {t("support")}
          </Link>
          <Link
            href="/resources"
            className="hidden md:block text-foreground hover:text-primary transition-colors text-sm sm:text-base"
            aria-label={t("resources_link", "Resources")}
          >
            {t("resources_link", "Resources")}
          </Link>
          <Link
            href="/blog"
            className="hidden md:block text-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium"
            aria-label={t("articles_link", "Expert Insights")}
          >
            {t("articles_link", "Expert Insights")}
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Contact</span>
            </Link>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
      </header>
    </div>
  );
};

export default Header;
