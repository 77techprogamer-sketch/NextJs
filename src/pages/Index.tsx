"use client";

import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Heart, Shield, Car, Home, Plane, FireExtinguisher } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Temporarily simplified for debugging
  const handleServiceCardClick = (insuranceType: string) => {
    console.log(`Clicked on ${insuranceType}`);
    // In a real scenario, this would open the modal
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Temporary Heading for Debugging */}
      <section className="py-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">Welcome to Insurance Support</h1>
        <p className="text-lg text-muted-foreground mt-2">Debugging Services Section</p>
      </section>

      {/* Services Section (Target for scroll) */}
      <section id="services" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Our Services Offered</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">We provide a wide array of insurance solutions tailored to protect what matters most to you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard title="Life Insurance" icon={Heart} onClick={() => handleServiceCardClick('Life Insurance')} />
            <ServiceCard title="Health Insurance" icon={Shield} onClick={() => handleServiceCardClick('Health Insurance')} />
            <ServiceCard title="Motor Insurance" icon={Car} onClick={() => handleServiceCardClick('Motor Insurance')} />
            <ServiceCard title="Home Insurance" icon={Home} onClick={() => handleServiceCardClick('Home Insurance')} />
            <ServiceCard title="Travel Insurance" icon={Plane} onClick={() => handleServiceCardClick('Travel Insurance')} />
            <ServiceCard title="Fire Insurance" icon={FireExtinguisher} onClick={() => handleServiceCardClick('Fire Insurance')} />
          </div>
        </div>
      </section>

      {/* Other sections are temporarily removed for debugging */}
    </div>
  );
};

export default Index;