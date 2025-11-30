"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound"; // Import the NotFound component
import { Toaster } from "./components/ui/sonner";
import { useTranslation } from 'react-i18next'; // Import useTranslation

function App() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route for any unmatched paths */}
        </Routes>
        <Toaster />
        {/* Test translation message */}
        <div className="fixed bottom-0 left-0 p-2 bg-gray-800 text-white text-xs">
          {t("test_message")}
        </div>
      </Layout>
    </Router>
  );
}

export default App;