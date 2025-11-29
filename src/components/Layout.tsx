"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer'; // Import the Footer component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {children} {/* Render children here */}
      </main>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default Layout;