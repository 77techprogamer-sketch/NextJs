"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import QuoteForm from "@/components/QuoteForm";
import { ChevronRight, Shield, Heart, Car, Building, Plane, Briefcase, PiggyBank, Gem, Gift, Lock } from "lucide-react";
import { slugify } from '@/utils/slugify';

const services = [
  {
    key: "life_insurance",
    icon: <Heart className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "life_insurance_description",
  },
  {
    key: "health_insurance",
    icon: <Shield className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "health_insurance_description",
  },
  {
    key: "term_insurance",
    icon: <PiggyBank className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "term_insurance_description",
  },
  {
    key: "motor_insurance",
    icon: <Car className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "motor_insurance_description",
  },
  {
    key: "sme_insurance",
    icon: <Building className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "sme_insurance_description",
  },
  {
    key: "travel_insurance",
    icon: <Plane className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "travel_insurance_description",
  },
  {
    key: "pension_plans",
    icon: <Briefcase className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "pension_plans_description",
  },
  {
    key: "ulip_plans",
    icon: <Gem className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "ulip_plans_description",
  },
  {
    key: "wedding_insurance",
    icon: <Gift className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "wedding_insurance_description",
  },
  {
    key: "cyber_insurance",
    icon: <Lock className="h-8 w-8 text-primary mb-2" />,
    descriptionKey: "cyber_insurance_description",
  },
];

const testimonials = [
  {
    name: "John Doe",
    quoteKey: "testimonial_john_doe",
  },
  {
    name: "Jane Smith",
    quoteKey: "testimonial_jane_smith",
  },
  {
    name: "Peter Jones",
    quoteKey: "testimonial_peter_jones",
  },
];

const faqs = [
  {
    questionKey: "faq_q1",
    answerKey: "faq_a1",
  },
  {
    questionKey: "faq_q2",
    answerKey: "faq_a2",
  },
  {
    questionKey: "faq_q3",
    answerKey: "faq_a3",
  },
];

const Index = () => {
  const { t } = useTranslation();
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setBackgroundImage("/morning-bg.jpg");
    } else if (hour >= 12 && hour < 17) {
      setBackgroundImage("/afternoon-bg.jpg");
    } else if (hour >= 17 && hour < 21) {
      setBackgroundImage("/evening-bg.jpg");
    } else {
      setBackgroundImage("/night-bg.jpg");
    }
  }, []);

  const handleQuoteSuccess = () => {
    setIsQuoteDialogOpen(false);
    // Optionally, show a toast notification or redirect
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>{t("insurance_support")}</title>
        <meta name="description" content={t("homepage_meta_description")} />
        <link rel="canonical" href="https://insurance-support.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "${t("insurance_support")}",
              "url": "https://insurance-support.vercel.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://insurance-support.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white p-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {t("hero_title")}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {t("hero_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  {t("get_a_quote")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{t("get_a_quote_for", { type: t("general_inquiry") })}</DialogTitle>
                </DialogHeader>
                <QuoteForm
                  insuranceType={t("general_inquiry")}
                  onClose={() => setIsQuoteDialogOpen(false)}
                  onSuccess={handleQuoteSuccess}
                />
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              {t("chat_with_us")}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("why_choose_us")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">{t("expert_advice")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("expert_advice_description")}</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Heart className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">{t("tailored_solutions")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("tailored_solutions_description")}</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Car className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">{t("seamless_experience")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("seamless_experience_description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("our_services")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link to={`/services/${slugify(service.key)}`} key={service.key}>
                <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader className="flex flex-col items-center">
                    {service.icon}
                    <CardTitle className="text-xl font-semibold mb-2">{t(service.key)}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4">{t(service.descriptionKey)}</p>
                    <Button variant="link" className="mt-auto">
                      {t("learn_more")} <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("testimonials")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-lg italic mb-4">"{t(testimonial.quoteKey)}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("faq")}</h2>
          <div className="max-w-3xl mx-auto text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{t(faq.questionKey)}</h3>
                <p className="text-muted-foreground">{t(faq.answerKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;