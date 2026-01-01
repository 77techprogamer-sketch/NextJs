"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { showError } from '@/utils/toast'; // Import showError for user feedback

const VisitorCounter = () => {
  const [totalVisits, setTotalVisits] = useState<number | null>(null);
  const [uniqueVisitors, setUniqueVisitors] = useState<number | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const isMobile = useIsMobile();

  const fetchVisitorStats = useCallback(async () => {
    const { data, error } = await supabase.rpc('get_visitor_stats');

    if (error) {
      console.error('Error fetching visitor stats:', error.message);
      showError("Failed to load visitor statistics.");
    } else if (data && data.length > 0) {
      const stats = data[0];
      setTotalVisits(stats.total_visits);
      setUniqueVisitors(stats.unique_visitors);
      if (stats.last_visit) {
        setLastVisit(formatDistanceToNow(new Date(stats.last_visit), { addSuffix: true }));
      } else {
        setLastVisit(null);
      }
    }
  }, []);

  useEffect(() => {
    const logVisitorAndFetchInitialStats = async () => {
      let visitorIp: string | null = null;
      let visitorIsp: string | null = null;
      let visitorCity: string | null = null;
      let visitorRegion: string | null = null;
      let visitorCountry: string | null = null;

      try {
        // Fetch IP address - Attempt but don't fail hard
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          if (ipResponse.ok) {
            const { ip } = await ipResponse.json();
            visitorIp = ip;
          }
        } catch (e) {
          console.warn('Could not fetch IP from client side:', e);
        }

        // Fetch ISP and location information using the IP address
        if (visitorIp) {
          try {
            const geoResponse = await fetch(`https://ip-api.com/json/${visitorIp}`);
            if (geoResponse.ok) {
              const geoData = await geoResponse.json();
              if (geoData.status === 'success') {
                visitorIsp = geoData.isp || null;
                visitorCity = geoData.city || null;
                visitorRegion = geoData.regionName || null;
                visitorCountry = geoData.country || null;
              }
            }
          } catch (e) {
            console.warn('Could not fetch Geo data:', e);
          }
        }

        // Call the Edge Function to log the visitor
        const { data: edgeFunctionData, error: edgeFunctionError } = await supabase.functions.invoke('log-visitor', {
          body: {
            ip_address: visitorIp,
            isp: visitorIsp,
            city: visitorCity,
            region: visitorRegion,
            country: visitorCountry,
          },
        });

        if (edgeFunctionError) {
          console.error('Error calling Edge Function:', edgeFunctionError.message);
          // Optionally show a toast for rate limiting or other errors
          if (edgeFunctionError.status === 429) {
            // showError("You're visiting too frequently. Please wait a moment.");
          } else {
            // showError("Failed to log visitor. Please try again.");
          }
        } else {
          console.log('Visitor logged successfully via Edge Function:', edgeFunctionData);
        }

        // Fetch initial stats after logging the visitor
        fetchVisitorStats();

      } catch (error) {
        console.error('An error occurred in the visitor counter:', error);
        // showError("An unexpected error occurred.");
      }
    };

    logVisitorAndFetchInitialStats();

    // Realtime Presence for live visitor count
    const presenceKey = Math.random().toString(36).substring(7);
    const presenceChannel = supabase.channel('online-users', {
      config: {
        presence: {
          key: presenceKey,
        },
      },
    });

    presenceChannel
      .on('presence', { event: 'sync' }, () => {
        const presenceState = presenceChannel.presenceState();
        const count = Object.keys(presenceState).length;
        setOnlineCount(count);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await presenceChannel.track({ online_at: new Date().toISOString() });
        }
      });

    // Realtime subscription for visitor stats updates
    const statsChannel = supabase.channel('public:visitors');
    statsChannel
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'visitors' }, (payload) => {
        console.log('Realtime INSERT received:', payload);
        fetchVisitorStats(); // Re-fetch stats when a new visitor is inserted
      })
      .subscribe();

    return () => {
      supabase.removeChannel(presenceChannel);
      supabase.removeChannel(statsChannel);
    };
  }, [fetchVisitorStats]); // Dependency array includes fetchVisitorStats

  if (totalVisits === null || uniqueVisitors === null) {
    return null;
  }

  const containerClasses = cn(
    "fixed text-muted-foreground bg-background/80 backdrop-blur-sm rounded-lg flex flex-col items-end shadow-lg border animate-in fade-in-0 duration-700",
    isMobile ? "bottom-2 right-2 p-2 space-y-1 text-xs" : "bottom-4 right-4 p-3 space-y-2 text-xs"
  );

  return (
    <div className={containerClasses}>
      <div className="flex items-center" title="Total visits">
        <Eye className="h-4 w-4 mr-2" />
        <div className="flex flex-col items-end">
          <span>{totalVisits} total visits</span>
          {lastVisit && <span className="text-muted-foreground/70">Last visit {lastVisit}</span>}
        </div>
      </div>
      <div className="flex items-center" title="Visitors currently online">
        <Users className="h-4 w-4 mr-2 text-green-500" />
        <span>{onlineCount} currently online</span>
      </div>
    </div>
  );
};

export default VisitorCounter;