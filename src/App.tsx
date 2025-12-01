"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import BlockedPage from "./pages/BlockedPage"; // Import the new BlockedPage
import GeoBlocker from "./components/GeoBlocker"; // Import GeoBlocker
import { Toaster } from "./components/ui/sonner";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <GeoBlocker /> {/* Place GeoBlocker here to run on all routes */}
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/blocked" element={<BlockedPage />} /> {/* Route for blocked users */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <div className="fixed bottom-0 left-0 p-2 bg-gray-800 text-white text-xs">
          {t("test_message")}
        </div>
      </Layout>
    </Router>
  );
}

export default App;