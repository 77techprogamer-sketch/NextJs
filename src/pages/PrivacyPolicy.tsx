"use client";

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const PrivacyPolicy = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{t("privacy_policy")}</h1>
      <p className="mb-4">
        {t("privacy_policy_intro")}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t("information_we_collect")}</h2>
      <p className="mb-4">
        {t("information_we_collect_description")}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t("how_we_use_your_information")}</h2>
      <p className="mb-4">
        {t("how_we_use_your_information_description")}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t("disclosure_of_your_information")}</h2>
      <p className="mb-4">
        {t("disclosure_of_your_information_description")}
      </p>
      <p className="mb-4">
        {t("privacy_contact_us")}
      </p>
    </div>
  );
};

export default PrivacyPolicy;