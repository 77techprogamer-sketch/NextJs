"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Heart, Car, Home, Plane, FireExtinguisher, Mail, Phone, MapPin, FileText, Building, MessageSquare, Wallet, TrendingUp, HeartHandshake, ShieldCheck, Award, Briefcase, Users, Star } from 'lucide-react'; // Added professional icons
import ServiceCard from '@/components/ServiceCard';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { cn } from '@/lib/utils'; // Import cn utility for class management
import { slugify } from '@/utils/slugify';
import SocialShareButtons from '@/components/SocialShareButtons';
import { fetchBlogPosts } from '@/utils/blogFetcher';

const ServiceModal = React.lazy(() => import('@/components/ServiceModal'));
const Testimonials = React.lazy(() => import('@/components/Testimonials'));
const VisitorCounter = React.lazy(() => import('@/components/VisitorCounter'));
const DateTimeDisplay = React.lazy(() => import('@/components/DateTimeDisplay'));

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
          <React.Suspense fallback={<div className="h-6 w-24 bg-white/10 rounded animate-pulse absolute top-4 right-4" />}>
            <DateTimeDisplay className="absolute top-4 right-4" />
          </React.Suspense>
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
              className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg w-full sm:w-auto font-semibold px-8 py-6 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
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
          <div className="mt-6 flex items-center gap-6 text-gray-300 text-xs sm:text-sm border-t border-white/20 pt-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <span>{t("years_experience")}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span>{t("expert_claims_support")}</span>
            </div>
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

      {/* Expertise & Veteran Advantage Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-2">
                <Star className="h-4 w-4 fill-accent" />
                <span>{t("veteran_advantage")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {t("strategic_protection_title_start")} <span className="text-accent">{t("strategic_protection_title_highlight")}</span> {t("strategic_protection_title_end")}
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                {t("strategic_experience_description")}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">15k+</div>
                  <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">{t("portfolios_managed")}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">98%</div>
                  <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">{t("claims_settled_stat")}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-accent/10 rounded-2xl border border-white/10 p-8 flex flex-col justify-center gap-8 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t("strategic_advisory")}</h3>
                    <p className="text-primary-foreground/70 text-sm">{t("strategic_advisory_desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t("legacy_planning")}</h3>
                    <p className="text-primary-foreground/70 text-sm">{t("legacy_planning_desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t("unrivaled_claims_support")}</h3>
                    <p className="text-primary-foreground/70 text-sm">{t("unrivaled_claims_support_desc")}</p>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4 max-w-none text-sm sm:text-base">
                  {latestBlogPost.summary}
                </div>
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
                {t("bangalore_office")}
              </CardDescription>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <React.Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading testimonials...</div>}>
        <Testimonials />
      </React.Suspense>

      <React.Suspense fallback={null}>
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          insuranceType={selectedInsuranceType}
        />
      </React.Suspense>

      <React.Suspense fallback={null}>
        <VisitorCounter />
      </React.Suspense>
    </div>
  );
};

export default Index;