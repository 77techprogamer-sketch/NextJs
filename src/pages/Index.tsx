"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Heart, Car, Home, Plane, FireExtinguisher, Mail, Phone, MapPin, FileText, Building, MessageSquare, Wallet, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react'; // Added HeartHandshake and ShieldCheck icons
import ServiceCard from '@/components/ServiceCard';
import ServiceModal from '@/components/ServiceModal';
import ChatbotWidget from '@/components/ChatbotWidget';
import SocialShareButtons from '@/components/SocialShareButtons';
import VisitorCounter from '@/components/VisitorCounter';
import DateTimeDisplay from '@/components/DateTimeDisplay';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { cn } from '@/lib/utils'; // Import cn utility for class management

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('');
  const [dynamicOneLiner, setDynamicOneLiner] = useState('');
  const [currentBackgroundClass, setCurrentBackgroundClass] = useState('hero-morning-bg'); // State for CSS class

  const oneLiners = [
    t("secure_family_future"),
    t("protect_wellbeing"),
    t("affordable_term_insurance"),
    t("drive_with_confidence"),
    t("safeguard_business_home"),
    t("explore_world_worry_free"),
    t("peace_of_mind_priority"),
    t("find_perfect_coverage"),
    t("expert_advice_personalized_plans")
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * oneLiners.length);
    setDynamicOneLiner(oneLiners[randomIndex]);

    const updateBackgroundClass = () => {
      const currentHour = new Date().getHours();
      let newBackgroundClass = '';
      if (currentHour >= 5 && currentHour < 12) {
        newBackgroundClass = 'hero-morning-bg';
      } else if (currentHour >= 12 && currentHour < 17) {
        newBackgroundClass = 'hero-afternoon-bg';
      } else if (currentHour >= 17 && currentHour < 21) {
        newBackgroundClass = 'hero-evening-bg';
      } else {
        newBackgroundClass = 'hero-night-bg';
      }
      setCurrentBackgroundClass(newBackgroundClass);
    };

    updateBackgroundClass(); // Set initial background class
    const intervalId = setInterval(updateBackgroundClass, 60 * 60 * 1000); // Update every hour

    const hash = window.location.hash;
    if (hash === '#services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => clearInterval(intervalId); // Cleanup interval
  }, [oneLiners, i18n.language]);

  const currentUrl = "https://insurance-support.vercel.app/";
  const shareTitle = t("hero_title");

  const handleServiceCardClick = useCallback((insuranceType: string) => {
    setSelectedInsuranceType(insuranceType);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedInsuranceType('');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t("home_page_title")}</title>
        <meta name="description" content={t("home_page_meta_description")} />
        <link rel="canonical" href="https://insurance-support.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${t("home_page_title")}",
              "description": "${t("home_page_meta_description")}",
              "url": "https://insurance-support.vercel.app/"
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className={cn("relative w-full hero-section", currentBackgroundClass)}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white w-full h-full flex flex-col justify-between items-center text-center p-4 pt-16 pb-8">
          {/* DateTimeDisplay positioned at the top right of the hero section */}
          <DateTimeDisplay className="absolute top-4 right-4" /> 
          <div className="space-y-4 mt-8 mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-2">
              {t("hero_title")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              {dynamicOneLiner}
            </p>
          </div>
          {/* Main action buttons/widgets container - now always flex-col */}
          <div className="flex flex-col items-center justify-center gap-4 w-full mt-4 mb-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg w-full sm:w-auto"
              onClick={() => handleServiceCardClick('General Inquiry')}
            >
              {t("get_a_free_quote")}
            </Button>
            {/* SocialShareButtons and ChatbotWidget are now separate blocks */}
            <SocialShareButtons url={currentUrl} title={shareTitle} />
            <ChatbotWidget />
          </div>
        </div>
      </section>

      {/* Services Section (Target for scroll) */}
      <section id="services" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            {t("services_offered")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            {t("services_description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard 
              title={t("life_insurance")} 
              icon={Heart} 
              onClick={() => handleServiceCardClick('Life Insurance')} 
            />
            <ServiceCard 
              title={t("health_insurance")} 
              icon={Shield} 
              onClick={() => handleServiceCardClick('Health Insurance')} 
            />
            <ServiceCard 
              title={t("term_insurance")} 
              icon={FileText} 
              onClick={() => handleServiceCardClick('Term Insurance')} 
            />
            <ServiceCard 
              title={t("motor_insurance")} 
              icon={Car} 
              onClick={() => handleServiceCardClick('Motor Insurance')} 
            />
            <ServiceCard 
              title={t("sme_insurance")} 
              icon={Building} 
              onClick={() => handleServiceCardClick('Fire Insurance')} 
            />
            <ServiceCard 
              title={t("travel_insurance")} 
              icon={Plane} 
              onClick={() => handleServiceCardClick('Travel Insurance')} 
            />
            <ServiceCard 
              title={t("pension_plans")} 
              icon={Wallet} 
              onClick={() => handleServiceCardClick('Pension Plans')} 
            />
            <ServiceCard 
              title={t("ulip_plans")} 
              icon={TrendingUp} 
              onClick={() => handleServiceCardClick('ULIP Plans')} 
            />
            <ServiceCard 
              title={t("wedding_insurance")} 
              icon={HeartHandshake} 
              onClick={() => handleServiceCardClick('Wedding Insurance')} 
            />
            <ServiceCard 
              title={t("cyber_insurance")} 
              icon={ShieldCheck} 
              onClick={() => handleServiceCardClick('Cyber Insurance')} 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            {t("why_choose_us")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">
                {t("expert_guidance_title")}
              </CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">
                {t("expert_guidance_description")}
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">
                {t("comprehensive_coverage_title")}
              </CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">
                {t("comprehensive_coverage_description")}
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">
                {t("customer_satisfaction_title")}
              </CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">
                {t("customer_satisfaction_description")}
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            {t("get_in_touch")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            {t("contact_description")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-2xl mx-auto">
            <a 
              href="tel:+919986634506" 
              className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <Phone className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">
                {t("call_us")}
              </CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">
                +91-9986634506
              </CardDescription>
            </a>
            <a 
              href="https://wa.me/919986634506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <MessageSquare className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">
                {t("whatsapp_us")}
              </CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">
                +91-9986634506
              </CardDescription>
            </a>
            <a 
              href="https://maps.app.goo.gl/b1wFEf9wBJ25L4ao9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground"
            >
              <MapPin className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">
                {t("visit_us")}
              </CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">
                Bangalore Office
              </CardDescription>
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