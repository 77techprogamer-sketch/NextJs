"use client";

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Helmet } from 'react-helmet-async'; // Import Helmet

const PrivacyPolicy = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <Helmet>
        <title>{t("privacy_policy_page_title")}</title>
        <meta name="description" content={t("privacy_policy_meta_description")} />
        <link rel="canonical" href="https://insurance-support.vercel.app/privacy" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${t("privacy_policy_page_title")}",
              "description": "${t("privacy_policy_meta_description")}",
              "url": "https://insurance-support.vercel.app/privacy"
            }
          `}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">{t("privacy_policy")}</h1>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        {t("privacy_policy_intro")}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">{t("information_we_collect")}</h2>
        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
          {t("information_we_collect_description")}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">{t("how_we_use_your_information")}</h2>
        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
          {t("how_we_use_your_information_description")}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">{t("disclosure_of_your_information")}</h2>
        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
          {t("disclosure_of_your_information_description")}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">{t("data_security")}</h2>
        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
          {t("data_security_description")}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">{t("data_retention")}</h2>
        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
          {t("data_retention_description")}
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t border-muted">
        <p className="font-semibold text-primary">
          {t("privacy_contact_us")}
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;