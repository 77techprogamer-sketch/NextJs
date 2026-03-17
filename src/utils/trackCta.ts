import { supabase } from '@/integrations/supabase/client';

export const trackCTAClick = async (ctaName: string) => {
  try {
    let visitorAsn: string | null = null;
    let visitorIspName: string | null = null;
    let visitorCity: string | null = null;
    let visitorRegion: string | null = null;
    let visitorCountry: string | null = null;

    // Fetch ISP and location information from our own API route
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
      console.warn('Could not fetch Geo data from API for CTA track:', e);
    }

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

    // Call the log-cta-click Edge Function
    const { error } = await supabase.functions.invoke('log-cta-click', {
      body: {
        cta_name: ctaName,
        page_url: pageUrl,
        isp: visitorIspName,
        asn: visitorAsn,
        city: visitorCity,
        region: visitorRegion,
        country: visitorCountry,
      },
    });

    if (error) {
      console.error('Failed to log CTA click via edge function:', error.message);
    }
  } catch (err) {
    console.error('Error tracking CTA click:', err);
  }
};
