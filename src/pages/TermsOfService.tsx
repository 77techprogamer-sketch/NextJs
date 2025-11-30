"use client";

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const TermsOfService = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
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
    </div>
  );
};

export default TermsOfService;