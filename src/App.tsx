"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import the new PrivacyPolicy component
import TermsOfService from "./pages/TermsOfService"; // Import the new TermsOfService component
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} /> {/* New route for Privacy Policy */}
          <Route path="/terms" element={<TermsOfService />} />   {/* New route for Terms of Service */}
        </Routes>
        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;