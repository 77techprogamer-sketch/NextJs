import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { SessionContextProvider } from "@/integrations/supabase/SessionContextProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n.ts'; // Import i18n configuration
import React, { Suspense } from 'react'; // Import Suspense

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense for i18n loading */}
      <I18nextProvider i18n={i18n}> {/* Wrap with I18nextProvider */}
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <SessionContextProvider>
            <App />
          </SessionContextProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);