"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-10 border-b">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-foreground" aria-label={t("insurance_support")}>
          {t("insurance_support")}
        </Link>
        <nav className="flex items-center gap-4">
          <Link 
            to="/#services" 
            onClick={handleScrollToServices} 
            className="text-foreground hover:text-primary transition-colors text-sm sm:text-base"
          >
            {t("services_offered_link")}
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;