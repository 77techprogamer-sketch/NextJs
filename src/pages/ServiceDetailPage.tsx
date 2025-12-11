"use client";

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const { t } = useTranslation();

  // Convert slug back to translation key format (e.g., 'life-insurance' -> 'life_insurance')
  const translationKey = serviceType?.replace(/-/g, '_');

  // Fallback for when serviceType is undefined or not found
  const serviceTitle = translationKey ? t(translationKey) : t('service_not_found');
  const serviceDescription = translationKey ? t(`${translationKey}_long_description`) : t('service_not_found_description');
  const pageTitle = translationKey ? t(`${translationKey}_page_title`) : t('service_not_found_page_title');
  const metaDescription = translationKey ? t(`${translationKey}_meta_description`) : t('service_not_found_meta_description');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, [serviceType]);

  if (!translationKey || serviceTitle === translationKey) { // Check if translation key exists and is not just the key itself
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center text-center">
        <Helmet>
          <title>{t('service_not_found_page_title')}</title>
          <meta name="description" content={t('service_not_found_meta_description')} />
          <link rel="canonical" href={`https://insurance-support.vercel.app/services/${serviceType}`} />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "${t('service_not_found_page_title')}",
                "description": "${t('service_not_found_meta_description')}",
                "url": "https://insurance-support.vercel.app/services/${serviceType}"
              }
            `}
          </script>
        </Helmet>
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{t('service_not_found')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t('service_not_found_description')}</p>
        <Link to="/">
          <Button className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> {t('return_to_home')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://insurance-support.vercel.app/services/${serviceType}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${pageTitle}",
              "description": "${metaDescription}",
              "url": "https://insurance-support.vercel.app/services/${serviceType}"
            }
          `}
        </script>
      </Helmet>
      <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" /> {t('back_to_home')}
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">{serviceTitle}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {serviceDescription}
      </p>

      {/* Add more specific content or components here based on serviceType if needed */}
      <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{t('get_a_free_quote_for_service', { service: serviceTitle })}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{t('service_quote_cta')}</p>
        <Link to="/#services"> {/* Link back to the main page's services section to open the modal */}
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            {t('get_a_free_quote')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailPage;