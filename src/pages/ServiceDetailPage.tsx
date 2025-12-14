"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { slugify } from '@/utils/slugify';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import QuoteForm from '@/components/QuoteForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Import Card components
import { fetchBlogPosts } from '@/utils/blogFetcher'; // Import the blog fetcher utility

interface ServiceDetail {
  titleKey: string;
  descriptionKey: string;
  metaDescriptionKey: string;
  image: string;
  features: string[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  life_insurance: {
    titleKey: "life_insurance",
    descriptionKey: "life_insurance_description",
    metaDescriptionKey: "life_insurance_meta_description",
    image: "/life-insurance.jpg",
    features: ["financial_security", "tax_benefits", "wealth_creation"],
  },
  health_insurance: {
    titleKey: "health_insurance",
    descriptionKey: "health_insurance_description",
    metaDescriptionKey: "health_insurance_meta_description",
    image: "/health-insurance.jpg",
    features: ["medical_expenses", "cashless_hospitalization", "pre_post_hospitalization"],
  },
  term_insurance: {
    titleKey: "term_insurance",
    descriptionKey: "term_insurance_description",
    metaDescriptionKey: "term_insurance_meta_description",
    image: "/term-insurance.jpg",
    features: ["high_cover_low_premium", "pure_protection", "income_replacement"],
  },
  motor_insurance: {
    titleKey: "motor_insurance",
    descriptionKey: "motor_insurance_description",
    metaDescriptionKey: "motor_insurance_meta_description",
    image: "/motor-insurance.jpg",
    features: ["own_damage_cover", "third_party_liability", "personal_accident_cover"],
  },
  sme_insurance: {
    titleKey: "sme_insurance",
    descriptionKey: "sme_insurance_description",
    metaDescriptionKey: "sme_insurance_meta_description",
    image: "/sme-insurance.jpg",
    features: ["business_interruption", "property_damage", "liability_cover"],
  },
  travel_insurance: {
    titleKey: "travel_insurance",
    descriptionKey: "travel_insurance_description",
    metaDescriptionKey: "travel_insurance_meta_description",
    image: "/travel-insurance.jpg",
    features: ["medical_emergencies", "trip_cancellation", "baggage_loss"],
  },
  pension_plans: {
    titleKey: "pension_plans",
    descriptionKey: "pension_plans_description",
    metaDescriptionKey: "pension_plans_meta_description",
    image: "/pension-plans.jpg",
    features: ["retirement_income", "annuity_options", "financial_independence"],
  },
  ulip_plans: {
    titleKey: "ulip_plans",
    descriptionKey: "ulip_plans_description",
    metaDescriptionKey: "ulip_plans_meta_description",
    image: "/ulip-plans.jpg",
    features: ["investment_growth", "life_cover", "fund_switching"],
  },
  wedding_insurance: {
    titleKey: "wedding_insurance",
    descriptionKey: "wedding_insurance_description",
    metaDescriptionKey: "wedding_insurance_meta_description",
    image: "/wedding-insurance.jpg",
    features: ["cancellation_cover", "damage_to_property", "public_liability"],
  },
  cyber_insurance: {
    titleKey: "cyber_insurance",
    descriptionKey: "cyber_insurance_description",
    metaDescriptionKey: "cyber_insurance_meta_description",
    image: "/cyber-insurance.jpg",
    features: ["data_breach_costs", "cyber_extortion", "legal_expenses"],
  },
};

const ServiceDetailPage = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const { t } = useTranslation();
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [latestBlogPost, setLatestBlogPost] = useState<{ title: string; url: string; summary: string } | null>(null); // Updated type

  const serviceKey = Object.keys(serviceDetails).find(key => slugify(key) === serviceType);
  const service = serviceKey ? serviceDetails[serviceKey] : null;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
    const getLatestBlogPost = async () => {
      const post = await fetchBlogPosts(); // Call without serviceTypeSlug
      setLatestBlogPost(post);
    };
    getLatestBlogPost();
  }, [serviceType]); // Keep serviceType in dependency array for re-fetch on route change

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("service_not_found")}</h1>
        <p>{t("service_not_found_description")}</p>
      </div>
    );
  }

  const handleQuoteSuccess = () => {
    setIsQuoteDialogOpen(false);
    // Optionally, show a toast notification or redirect
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>{t(service.titleKey)} - {t("insurance_support")}</title>
        <meta name="description" content={t(service.metaDescriptionKey)} />
        <link rel="canonical" href={`https://insurance-support.vercel.app/services/${serviceType}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${t(service.titleKey)}",
              "description": "${t(service.metaDescriptionKey)}",
              "url": "https://insurance-support.vercel.app/services/${serviceType}"
            }
          `}
        </script>
      </Helmet>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{t(service.titleKey)}</h1>
          <p className="text-lg text-muted-foreground mb-6">{t(service.descriptionKey)}</p>
          <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="w-full sm:w-auto">
                {t("get_a_quote")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{t("get_a_quote_for", { type: t(service.titleKey) })}</DialogTitle>
              </DialogHeader>
              <QuoteForm
                insuranceType={t(service.titleKey)}
                onClose={() => setIsQuoteDialogOpen(false)}
                onSuccess={handleQuoteSuccess}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex justify-center">
          <img
            src={service.image}
            alt={t(service.titleKey)}
            className="rounded-lg shadow-lg max-h-80 object-cover w-full md:w-auto"
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">{t("key_features")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((featureKey, index) => (
            <Card key={index} className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{t(featureKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t(`${featureKey}_description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {latestBlogPost ? (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">{t("latest_blog_post")}</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{latestBlogPost.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Display the summary content */}
              <div 
                className="text-muted-foreground mb-4 prose dark:prose-invert max-w-none" 
                dangerouslySetInnerHTML={{ __html: latestBlogPost.summary }} 
              />
              <a
                href={latestBlogPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                {t("read_more")}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </CardContent>
          </Card>
        </section>
      ) : (
        <section className="mb-12 text-center text-muted-foreground">
          <p>{t("no_blog_posts_available")}</p>
        </section>
      )}
    </div>
  );
};

export default ServiceDetailPage;