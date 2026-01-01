"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Heart, Car, Home, Plane, FireExtinguisher, Mail, Phone, MapPin, FileText, Building, MessageSquare, Wallet, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react'; // Added HeartHandshake and ShieldCheck icons
import ServiceCard from '@/components/ServiceCard';
import ServiceModal from '@/components/ServiceModal';
import SocialShareButtons from '@/components/SocialShareButtons';
import VisitorCounter from '@/components/VisitorCounter';
import DateTimeDisplay from '@/components/DateTimeDisplay';
import { fetchBlogPosts } from '@/utils/blogFetcher';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { cn } from '@/lib/utils'; // Import cn utility for class management
import { slugify } from '@/utils/slugify';

const Index = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('');
  const [dynamicOneLiner, setDynamicOneLiner] = useState('');
  const [currentBackgroundClass, setCurrentBackgroundClass] = useState('hero-morning-bg'); // State for CSS class
  const [latestBlogPost, setLatestBlogPost] = useState<{ title: string; url: string; summary: string } | null>(null);
  const [loadingBlog, setLoadingBlog] = useState(true);

  useEffect(() => {
    const oneLinersList = [
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

    const randomIndex = Math.floor(Math.random() * oneLinersList.length);
    setDynamicOneLiner(oneLinersList[randomIndex]);

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

    const getLatestBlogPost = async () => {
      setLoadingBlog(true);
      const post = await fetchBlogPosts();
      setLatestBlogPost(post);
      setLoadingBlog(false);
    };
    getLatestBlogPost();

    return () => clearInterval(intervalId); // Cleanup interval
  }, [t, i18n.language]);

  const currentUrl = "https://insurance-support.vercel.app/";
  const shareTitle = t("hero_title");

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
              onClick={() => {
                setSelectedInsuranceType('general_inquiry');
                setIsModalOpen(true);
              }}
            >
              {t("get_a_free_quote")}
            </Button>
            {/* SocialShareButtons is now separate blocks */}
            <SocialShareButtons url={currentUrl} title={shareTitle} />
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
              href={`/services/${slugify('life_insurance')}`}
            />
            <ServiceCard
              title={t("health_insurance")}
              icon={Shield}
              href={`/services/${slugify('health_insurance')}`}
            />
            <ServiceCard
              title={t("term_insurance")}
              icon={FileText}
              href={`/services/${slugify('term_insurance')}`}
            />
            <ServiceCard
              title={t("motor_insurance")}
              icon={Car}
              href={`/services/${slugify('motor_insurance')}`}
            />
            <ServiceCard
              title={t("sme_insurance")}
              icon={Building}
              href={`/services/${slugify('sme_insurance')}`}
            />
            <ServiceCard
              title={t("travel_insurance")}
              icon={Plane}
              href={`/services/${slugify('travel_insurance')}`}
            />
            <ServiceCard
              title={t("pension_plans")}
              icon={Wallet}
              href={`/services/${slugify('pension_plans')}`}
            />
            <ServiceCard
              title={t("ulip_plans")}
              icon={TrendingUp}
              href={`/services/${slugify('ulip_plans')}`}
            />
            <ServiceCard
              title={t("wedding_insurance")}
              icon={HeartHandshake}
              href={`/services/${slugify('wedding_insurance')}`}
            />
            <ServiceCard
              title={t("cyber_insurance")}
              icon={ShieldCheck}
              href={`/services/${slugify('cyber_insurance')}`}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-8 sm:mb-12 text-center">
            {t("latest_blog_post")}
          </h2>

          {loadingBlog ? (
            <Card className="max-w-2xl mx-auto p-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-10 w-32 mt-4" />
              </div>
            </Card>
          ) : latestBlogPost ? (
            <Card className="max-w-2xl mx-auto overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
              <CardHeader className="bg-primary/5 dark:bg-primary/10">
                <CardTitle className="text-xl sm:text-2xl font-bold line-clamp-2">
                  {latestBlogPost.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div
                  className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4 prose dark:prose-invert max-w-none text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: latestBlogPost.summary }}
                />
                <Button
                  asChild
                  className="w-full sm:w-auto hover:scale-105 transition-transform"
                >
                  <a href={latestBlogPost.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {t("read_full_article")}
                    <FileText className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t("no_blog_posts_available")}
            </p>
          )}
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