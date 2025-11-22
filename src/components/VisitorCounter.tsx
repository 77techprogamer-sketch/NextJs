import React, { useEffect, useState } from 'react';
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

      useEffect(() => {
        const logVisitorAndFetchStats = async () => {
          let visitorIp: string | null = null;
          let visitorIsp: string | null = null;
          let visitorCity: string | null = null;
          let visitorRegion: string | null = null;
          let visitorCountry: string | null = null;

          try {
            // Fetch IP address
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            if (!ipResponse.ok) {
              console.error('Failed to fetch IP address');
              showError("Failed to get your IP address."); // Enabled error toast
              return;
            }
            const { ip } = await ipResponse.json();
            visitorIp = ip;

            // Fetch ISP and location information using the IP address
            const geoResponse = await fetch(`https://ip-api.com/json/${ip}`); // Changed to HTTPS
            if (!geoResponse.ok) {
              console.error('Failed to fetch geo information');
              showError("Failed to get your location information."); // Enabled error toast
            } else {
              const geoData = await geoResponse.json();
              if (geoData.status === 'success') {
                visitorIsp = geoData.isp || null;
                visitorCity = geoData.city || null;
                visitorRegion = geoData.regionName || null;
                visitorCountry = geoData.country || null;
              } else {
                console.warn('Geo data not found or API call unsuccessful:', geoData);
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
                // showError("You're visiting too frequently. Please wait a moment."); // Keep this commented if you don't want to alert users about rate limits
              } else {
                showError("Failed to log visitor. Please try again."); // Enabled error toast
              }
            } else {
              console.log('Visitor logged successfully via Edge Function:', edgeFunctionData);
            }

            // Fetch updated visitor stats
            const { data, error } = await supabase.rpc('get_visitor_stats');

            if (error) {
              console.error('Error fetching visitor stats:', error.message);
              showError("Failed to fetch visitor statistics."); // Enabled error toast
            } else if (data && data.length > 0) {
              const stats = data[0];
              setTotalVisits(stats.total_visits);
              setUniqueVisitors(stats.unique_visitors);
              if (stats.last_visit) {
                setLastVisit(formatDistanceToNow(new Date(stats.last_visit), { addSuffix: true }));
              }
            }
          } catch (error) {
            console.error('An error occurred in the visitor counter:', error);
            showError("An unexpected error occurred."); // Enabled error toast
          }
        };

        logVisitorAndFetchStats();

        // Realtime Presence for live visitor count
        const presenceKey = Math.random().toString(36).substring(7);
        const channel = supabase.channel('online-users', {
          config: {
            presence: {
              key: presenceKey,
            },
          },
        });

        channel
          .on('presence', { event: 'sync' }, () => {
            const presenceState = channel.presenceState();
            const count = Object.keys(presenceState).length;
            setOnlineCount(count);
          })
          .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
              await channel.track({ online_at: new Date().toISOString() });
            }
          });

        return () => {
          supabase.removeChannel(channel);
        };
      }, []);

      if (totalVisits === null || uniqueVisitors === null) {
        return null;
      }

      const containerClasses = cn(
        "fixed text-gray-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg flex flex-col items-end shadow-lg border",
        isMobile ? "bottom-2 right-2 p-2 space-y-1 text-xs" : "bottom-4 right-4 p-3 space-y-2 text-xs"
      );

      return (
        <div className={containerClasses}>
          <div className="flex items-center" title="Total visits">
            <Eye className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-end">
              <span>{totalVisits} total visits</span>
              {lastVisit && <span className="text-gray-400">Last visit {lastVisit}</span>}
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