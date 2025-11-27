"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-10 border-b">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground" aria-label="Home - Insurance Support">
          Insurance Support
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;