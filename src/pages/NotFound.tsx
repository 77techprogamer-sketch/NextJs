import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Helmet } from 'react-helmet-async'; // Import Helmet

const NotFound = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>{t("not_found_page_title")}</title>
        <meta name="description" content={t("not_found_meta_description")} />
        <link rel="canonical" href="https://insurance-support.vercel.app/404" />
        <meta name="robots" content="noindex, nofollow" /> {/* Added noindex, nofollow */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${t("not_found_page_title")}",
              "description": "${t("not_found_meta_description")}",
              "url": "https://insurance-support.vercel.app/404"
            }
          `}
        </script>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{t("page_not_found")}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t("return_to_home")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;