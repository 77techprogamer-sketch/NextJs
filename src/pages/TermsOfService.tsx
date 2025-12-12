"use client";

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { Link } from 'react-router-dom'; // Import Link

const TermsOfService = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <Helmet>
        <title>{t("terms_of_service_page_title")}</title>
        <meta name="description" content={t("terms_of_service_meta_description")} />
        <link rel="canonical" href="https://insurance-support.vercel.app/terms" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${t("terms_of_service_page_title")}",
              "description": "${t("terms_of_service_meta_description")}",
              "url": "https://insurance-support.vercel.app/terms"
            }
          `}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">{t("terms_of_service")}</h1>
      <p className="mb-4">
        {t("terms_of_service_intro")}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t("acceptance_of_terms")}</h2>
      <p className="mb-4">
        {t("acceptance_of_terms_description")}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t("use_of_services")}</h2>
      <p className="mb-4">
        {t("use_of_services_description")}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t("intellectual_property")}</h2>
      <p className="mb-4">
        {t("intellectual_property_description")}
      </p>
      <p className="mb-4">
        {t("terms_of_service_reservation")}
      </p>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4 justify-center">
        <Link to="/" className="text-primary hover:underline">
          {t("return_to_home")}
        </Link>
        <Link to="/privacy" className="text-primary hover:underline">
          {t("privacy_policy")}
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;