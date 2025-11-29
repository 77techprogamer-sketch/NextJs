"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Import the Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default Layout;