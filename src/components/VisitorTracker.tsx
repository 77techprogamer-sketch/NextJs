"use client";

import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const logVisitor = async () => {
      try {
        const isBotUA = /googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|Google-InspectionTool|Storebot-Google|Lighthouse|IndexNow/i.test(navigator.userAgent);
        if (isBotUA) return;

        const sessionLogKey = 'site_session_logged';
        if (sessionStorage.getItem(sessionLogKey)) return;

        // Simple fetch to API endpoint - no direct Supabase calls
        try {
          const res = await fetch('/api/webhooks/lead-capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'visit', page_url: window.location.href, referrer: document.referrer, user_agent: navigator.userAgent, visited_at: new Date().toISOString() }),
          });
          if (res.ok) sessionStorage.setItem(sessionLogKey, 'true');
        } catch (err) {}
      } catch (err) {}
    };
    logVisitor();
  }, []);

  return null;
};

export default VisitorTracker;
