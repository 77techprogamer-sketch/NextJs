"use client";

import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const VisitorTracker = () => {
  useEffect(() => {
    const logVisitor = async () => {
      // 1. Bot Detection
      const isBotCookie = document.cookie.split('; ').find(row => row.startsWith('is-bot='));
      const isBotUA = /googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|Google-InspectionTool|Storebot-Google|Lighthouse|IndexNow/i.test(navigator.userAgent);
      
      if (isBotCookie || isBotUA) {
        return;
      }

      // 2. Session deduplication (Once per session)
      const sessionLogKey = 'site_session_logged';
      const sessionLogged = sessionStorage.getItem(sessionLogKey);

      if (sessionLogged) {
        return;
      }

      let visitorAsn: string | null = null;
      let visitorIspName: string | null = null;
      let visitorCity: string | null = null;
      let visitorRegion: string | null = null;
      let visitorCountry: string | null = null;

      try {
        // Fetch ISP and location information from our API route
        try {
          const geoResponse = await fetch('/api/location');
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            if (!geoData.error) {
              visitorAsn = geoData.asn || null;
              visitorIspName = geoData.isp_name || null;
              visitorCity = geoData.city || null;
              visitorRegion = geoData.region || null;
              visitorCountry = geoData.country_name || null;
            }
          }
        } catch (e) {
          console.warn('Could not fetch Geo data from API:', e);
        }

        // Call the Edge Function to log the visitor
        const { error: edgeFunctionError } = await supabase.functions.invoke('log-visitor', {
          body: {
            isp: visitorIspName,
            asn: visitorAsn,
            city: visitorCity,
            region: visitorRegion,
            country: visitorCountry,
            path: window.location.pathname,
            referrer: document.referrer || 'Direct'
          },
        });

        if (!edgeFunctionError) {
          // Successfully logged! Mark session as logged.
          sessionStorage.setItem(sessionLogKey, 'true');

          // NEW: Trigger passive SEO indexing submission
          fetch('/api/seo/auto-submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: window.location.href })
          }).catch(err => console.warn('SEO Auto-submit failed:', err));
        }

      } catch (error) {
        console.error('An error occurred in the visitor tracker:', error);
      }
    };

    logVisitor();
  }, []);

  return null; // This component is invisible
};

export default VisitorTracker;
