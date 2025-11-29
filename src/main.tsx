import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { SessionContextProvider } from "@/integrations/supabase/SessionContextProvider";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </ThemeProvider>
);