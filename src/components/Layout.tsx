"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import DateTimeDisplay from './DateTimeDisplay'; // Removed the import

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* Removed: <div className="fixed top-4 right-4 z-50">
        <DateTimeDisplay />
      </div> */}
    </div>
  );
};

export default Layout;