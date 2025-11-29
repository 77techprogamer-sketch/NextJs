"use client";

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Heart, Car, Home, Plane, FireExtinguisher, Mail, Phone, MapPin, FileText, Building } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ServiceModal from '@/components/ServiceModal';
import ChatbotWidget from '@/components/ChatbotWidget';
import SocialShareButtons from '@/components/SocialShareButtons';
import VisitorCounter from '@/components/VisitorCounter';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('');

  const handleServiceCardClick = (insuranceType: string) => {
    setSelectedInsuranceType(insuranceType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInsuranceType('');
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const currentYear = new Date().getFullYear();
  const currentUrl = "https://insurance-support.vercel.app/"; // Replace with dynamic URL if needed
  const shareTitle = "Insurance Support - Get Free Quotes for Life, Health, Motor & More";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex items-end justify-center text-center p-4" style={{ backgroundImage: 'url(/placeholder.svg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Your Trusted Partner for Comprehensive Insurance</h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto">Get free quotes for life, health, term, motor, home, travel, and fire insurance. Chat with expert advisors and secure your future with the best plans.</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4"> {/* Changed justify-start to justify-between */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3" onClick={() => handleServiceCardClick('General Inquiry')}>Get a Free Quote</Button>
            <ChatbotWidget />
          </div>
          <SocialShareButtons url={currentUrl} title={shareTitle} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">Expert Guidance</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">Our experienced advisors help you find the best plans.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">Comprehensive Coverage</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">Wide range of insurance products to meet all your needs.</CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">Customer Satisfaction</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">Dedicated support to ensure your peace of mind.</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section (Target for scroll) */}
      <section id="services" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Our Services Offered</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">We provide a wide array of insurance solutions tailored to protect what matters most to you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard title="Life Insurance" icon={Heart} onClick={() => handleServiceCardClick('Life Insurance')} />
            <ServiceCard title="Health Insurance" icon={Shield} onClick={() => handleServiceCardClick('Health Insurance')} />
            <ServiceCard title="Term Insurance" icon={FileText} onClick={() => handleServiceCardClick('Term Insurance')} />
            <ServiceCard title="Motor (Private/Commercial Vehicles) Insurance" icon={Car} onClick={() => handleServiceCardClick('Motor Insurance')} />
            <ServiceCard title="SME (Fire and Home) Insurance" icon={Building} onClick={() => handleServiceCardClick('Fire Insurance')} />
            <ServiceCard title="Travel Insurance" icon={Plane} onClick={() => handleServiceCardClick('Travel Insurance')} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">Have questions? Our team is ready to assist you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <a 
              href="tel:+919986634506" 
              className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <Phone className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">Call Us</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">+91-9986634506</CardDescription>
            </a>
            <a 
              href="https://maps.app.goo.gl/b1wFEf9wBJ25L4ao9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <MapPin className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">Visit Us</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">Bangalore Office</CardDescription>
            </a>
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        insuranceType={selectedInsuranceType}
      />
      <VisitorCounter />
    </div>
  );
};

export default Index;