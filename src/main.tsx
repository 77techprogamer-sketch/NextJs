import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { SessionContextProvider } from "@/integrations/supabase/SessionContextProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <SpeedInsights />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <SessionContextProvider>
            <HelmetProvider> {/* Wrap App with HelmetProvider */}
              <App />
            </HelmetProvider>
          </SessionContextProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);