"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react"; // Import lazy, Suspense, and useEffect
import Layout from "./components/Layout";
import GeoBlocker from "./components/GeoBlocker";
import SmartLanguageSelector from "./components/SmartLanguageSelector"; // Import SmartLanguageSelector
import { Toaster } from "./components/ui/sonner";
import { useTranslation } from 'react-i18next';

// Lazy load page components
import Index from "./pages/Index";
// const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlockedPage = lazy(() => import("./pages/BlockedPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage")); // Lazy load ServiceDetailPage
const EngagementDashboard = lazy(() => import("./pages/EngagementDashboard"));
const SupportPage = lazy(() => import("./pages/SupportPage"));


import Analytics from "./components/Analytics";

function App() {
  const { t } = useTranslation();




  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu, true);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
    };
  }, []);

  return (
    <Router>
      <Analytics />
      <SmartLanguageSelector /> {/* Add SmartLanguageSelector */}
      <GeoBlocker />
      <Layout>
        <Suspense fallback={<div>Loading page...</div>}> {/* Add Suspense for lazy-loaded routes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/blocked" element={<BlockedPage />} />
            <Route path="/engagement" element={<EngagementDashboard />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/services/:serviceType" element={<ServiceDetailPage />} /> {/* New dynamic route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;
