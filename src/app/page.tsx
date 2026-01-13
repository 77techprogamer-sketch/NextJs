"use client";
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, Heart, Car, Home, Plane, FireExtinguisher, Mail, Phone, MapPin, FileText, Building, MessageSquare, Wallet, TrendingUp, HeartHandshake, ShieldCheck, Award, Briefcase, Users, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { slugify } from '@/utils/slugify';
import SocialShareButtons from '@/components/SocialShareButtons';
import { fetchBlogPosts } from '@/utils/blogFetcher';
import dynamic from 'next/dynamic';
import '@/i18n'; // Ensure i18n is initialized

const ServiceModal = dynamic(() => import('@/components/ServiceModal'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const VisitorCounter = dynamic(() => import('@/components/VisitorCounter'), { ssr: false });
const DateTimeDisplay = dynamic(() => import('@/components/DateTimeDisplay'), { ssr: false });
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { ssr: false });

const Index = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInsuranceType, setSelectedInsuranceType] = useState('');
    const [dynamicOneLiner, setDynamicOneLiner] = useState('');
    const [currentBackgroundClass, setCurrentBackgroundClass] = useState('hero-morning-bg');
    const [latestBlogPost, setLatestBlogPost] = useState<{ title: string; url: string; summary: string } | null>(null);
    const [loadingBlog, setLoadingBlog] = useState(true);

    useEffect(() => {
        // Force i18n initialization if needed
        if (!i18n.isInitialized) {
            i18n.init();
        }
    }, [i18n]);

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

        return () => { };
    }, [t, i18n.language]);

    const currentUrl = "https://insurance-support.vercel.app/";
    const shareTitle = t("hero_title");

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedInsuranceType('');
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary text-white">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/50 via-primary to-primary"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

                <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center text-center space-y-8 pt-20">
                    <React.Suspense fallback={<div className="h-6 w-32 bg-white/10 rounded animate-pulse absolute top-6 right-6" />}>
                        <DateTimeDisplay className="absolute top-6 right-6 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/10" />
                    </React.Suspense>

                    <div className="space-y-6 max-w-4xl mx-auto animate-fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-accent mb-4">
                            <Star className="w-4 h-4 fill-accent" />
                            <span>#1 Trusted Insurance Partner in Bangalore</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            {t("hero_title_start", "Secure Your")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent animate-shimmer bg-[length:200%_auto]">{t("hero_title_highlight", "Future")}</span>
                            <br className="hidden sm:block" /> {t("hero_title_end", "With Expert Guidance")}
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            {dynamicOneLiner || "Comprehensive coverage for life, health, and vehicle tailored to your needs."}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto pt-4 animate-fade-up [animation-delay:200ms]">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-primary text-lg w-full sm:w-auto font-bold px-8 py-7 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(234,179,8,0.6)]"
                            onClick={() => {
                                setSelectedInsuranceType('general_inquiry');
                                setIsModalOpen(true);
                            }}
                        >
                            {t("get_a_free_quote")}
                        </Button>
                        <SocialShareButtons url={currentUrl} title={shareTitle} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 pt-8 border-t border-white/10 animate-fade-up [animation-delay:400ms]">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-3xl font-bold text-white">15k+</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Clients</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-3xl font-bold text-white">98%</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Claims Settled</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-3xl font-bold text-white">24/7</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Support</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-3xl font-bold text-white">50+</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Awards</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
                        {t("services_offered")}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
                        {t("services_description")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <ServiceCard title={t("life_insurance")} icon={Heart} href={`/services/${slugify('life_insurance')}`} />
                        <ServiceCard title={t("health_insurance")} icon={Shield} href={`/services/${slugify('health_insurance')}`} />
                        <ServiceCard title={t("term_insurance")} icon={FileText} href={`/services/${slugify('term_insurance')}`} />
                        <ServiceCard title={t("motor_insurance")} icon={Car} href={`/services/${slugify('motor_insurance')}`} />
                        <ServiceCard title={t("sme_insurance")} icon={Building} href={`/services/${slugify('sme_insurance')}`} />
                        <ServiceCard title={t("travel_insurance")} icon={Plane} href={`/services/${slugify('travel_insurance')}`} />
                        <ServiceCard title={t("pension_plans")} icon={Wallet} href={`/services/${slugify('pension_plans')}`} />
                        <ServiceCard title={t("ulip_plans")} icon={TrendingUp} href={`/services/${slugify('ulip_plans')}`} />
                        <ServiceCard title={t("wedding_insurance")} icon={HeartHandshake} href={`/services/${slugify('wedding_insurance')}`} />
                        <ServiceCard title={t("cyber_insurance")} icon={ShieldCheck} href={`/services/${slugify('cyber_insurance')}`} />
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
                                    {latestBlogPost?.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4 max-w-none text-sm sm:text-base">
                                    {latestBlogPost?.summary}
                                </div>
                                <Button
                                    asChild
                                    className="w-full sm:w-auto hover:scale-105 transition-transform"
                                >
                                    <a href={latestBlogPost?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
                        <a href="tel:+919986634506" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                            <Phone className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                            <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">{t("call_us")}</CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base">+91-9986634506</CardDescription>
                        </a>
                        <a href="https://wa.me/919986634506" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                            <MessageSquare className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                            <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">{t("whatsapp_us")}</CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base">+91-9986634506</CardDescription>
                        </a>
                        <a href="https://maps.app.goo.gl/b1wFEf9wBJ25L4ao9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                            <MapPin className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                            <CardTitle className="mb-1 sm:mb-2 text-lg sm:text-xl">{t("visit_us")}</CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base">{t("bangalore_office")}</CardDescription>
                        </a>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials Section */}
            <React.Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading testimonials...</div>}>
                <Testimonials />
            </React.Suspense>

            <React.Suspense fallback={null}>
                <ServiceModal isOpen={isModalOpen} onClose={handleCloseModal} insuranceType={selectedInsuranceType} />
            </React.Suspense>

            <React.Suspense fallback={null}>
                <VisitorCounter />
            </React.Suspense>

            <React.Suspense fallback={null}>
                <FloatingCTA onGetQuote={() => {
                    setSelectedInsuranceType('general_inquiry');
                    setIsModalOpen(true);
                }} />
            </React.Suspense>
        </div>
    );
};

export default Index;
