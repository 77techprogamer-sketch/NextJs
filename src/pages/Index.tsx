"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import VisitorCounter from "@/components/VisitorCounter";
import QuoteForm from "@/components/QuoteForm";
import SocialShareButtons from "@/components/SocialShareButtons";
import ServiceCard from "@/components/ServiceCard"; // Import ServiceCard
import ServiceModal from "@/components/ServiceModal"; // Import ServiceModal
import { HeartPulse, ShieldCheck, CalendarClock, Car, Home, Plane, Flame } from "lucide-react"; // Import icons

const insuranceOneLiners = [
  "Life insurance secures your loved ones' future, offering peace of mind.",
  "Health insurance protects your well-being and covers unexpected medical costs.",
  "Term insurance provides high coverage for a specific period at affordable premiums.",
  "Motor insurance safeguards your vehicle against damages and liabilities on the road.",
];

const services = [
  { title: "Health Insurance", icon: HeartPulse },
  { title: "Life Insurance", icon: ShieldCheck },
  { title: "Term Insurance", icon: CalendarClock },
  { title: "Motor Insurance", icon: Car },
  { title: "Home Insurance", icon: Home },
  { title: "Travel Insurance", icon: Plane },
  { title: "Fire Insurance", icon: Flame },
];

const Index = () => {
  const [currentOneLiner, setCurrentOneLiner] = useState(insuranceOneLiners[0]);
  const [oneLinerIndex, setOneLinerIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setOneLinerIndex((prevIndex) => (prevIndex + 1) % insuranceOneLiners.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentOneLiner(insuranceOneLiners[oneLinerIndex]);
  }, [oneLinerIndex]);

  const handleServiceClick = (serviceType: string) => {
    setSelectedServiceType(serviceType);
    setIsModalOpen(true);
  };

  const currentUrl = window.location.href;
  const pageTitle = "Insurance Support - Your Trusted Partner";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insurance Support by Hari Kotian",
    "image": "https://insurance-support.vercel.app/placeholder.svg", // Replace with a more specific image if available
    "url": "https://insurance-support.vercel.app/",
    "telephone": "+919986634506",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address (if applicable)", // Update with actual address
      "addressLocality": "Your City (if applicable)", // Update with actual city
      "addressRegion": "Your Region (if applicable)", // Update with actual region
      "postalCode": "Your Postal Code (if applicable)", // Update with actual postal code
      "addressCountry": "IN"
    },
    "description": "Your trusted partner for comprehensive insurance solutions including life, health, term, motor, home, travel, and fire insurance. Get expert advice and free quotes.",
    "openingHours": "Mo-Fr 09:00-18:00", // Update with actual opening hours
    "priceRange": "$$", // Update with actual price range if applicable
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Insurance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Health Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Life Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Term Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motor Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travel Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Insurance"
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                Insurance Support: Your Trusted Partner
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl transition-opacity duration-1000 ease-in-out">
                {currentOneLiner}
              </p>
              <ChatbotWidget />
              <p className="text-base text-muted-foreground mt-4 mb-1 font-bold">Share! if you like our Service.</p>
              <SocialShareButtons url={currentUrl} title={pageTitle} />
            </div>
            <div className="w-full flex justify-center md:justify-end">
              <QuoteForm />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 bg-muted/30 rounded-lg mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                onClick={() => handleServiceClick(service.title)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <VisitorCounter />
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        insuranceType={selectedServiceType}
      />
    </div>
  );
};

export default Index;