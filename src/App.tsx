"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react"; // Import lazy and Suspense
import Layout from "./components/Layout";
import GeoBlocker from "./components/GeoBlocker";
import { Toaster } from "./components/ui/sonner";
import { useTranslation } from 'react-i18next';

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlockedPage = lazy(() => import("./pages/BlockedPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage")); // Lazy load ServiceDetailPage
const EngagementDashboard = lazy(() => import("./pages/EngagementDashboard"));
const SupportPage = lazy(() => import("./pages/SupportPage"));

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <GeoBlocker />
      <Layout>
        <Suspense fallback={<div>Loading page...</div>}> {/* Add Suspense for lazy-loaded routes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
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