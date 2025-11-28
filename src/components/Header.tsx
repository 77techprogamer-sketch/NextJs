"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
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
        <Link to="/" className="text-xl sm:text-2xl font-bold text-foreground" aria-label="Home - Insurance Support">
          Insurance Support
        </Link>
        <nav className="flex items-center gap-4">
          <Link 
            to="/#services" 
            onClick={handleScrollToServices} 
            className="text-foreground hover:text-primary transition-colors text-sm sm:text-base"
          >
            Services Offered
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;