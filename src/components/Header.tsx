"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-10 border-b">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Insurance Support
        </Link>
        <nav>
          {/* Admin navigation removed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;