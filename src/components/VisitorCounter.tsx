"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const VisitorCounter = () => {
  const [totalVisits, setTotalVisits] = useState<number | null>(null);
  const [uniqueVisitors, setUniqueVisitors] = useState<number | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchIpAndCount = async () => {
      let visitorIp: string | null = null;
      let visitorIsp: string | null = null;

      try {
        // Fetch IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        if (!ipResponse.ok) {
          console.error('Failed to fetch IP address');
          return;
        }
        const { ip } = await ipResponse.json();
        visitorIp = ip;

        // Fetch ISP information using the IP address
        const ispResponse = await fetch(`http://ip-api.com/json/${ip}`);
        if (!ispResponse.ok) {
          console.error('Failed to fetch ISP information');
        } else {
          const ispData = await ispResponse.json();
          if (ispData.status === 'success' && ispData.isp) {
            visitorIsp = ispData.isp;
          } else {
            console.warn('ISP data not found or API call unsuccessful:', ispData);
          }
        }

        // Insert the visitor IP and ISP using the standard Supabase client
        const { error: insertError } = await supabase
          .from('visitors')
          .insert({ ip_address: visitorIp, isp: visitorIsp });

        if (insertError) {
          console.error('Error inserting visitor data:', insertError.message);
        } else {
          console.log('Visitor logged successfully with IP and ISP');
        }

        // Fetch updated visitor stats
        const { data, error } = await supabase.rpc('get_visitor_stats');

        if (error) {
          console.error('Error fetching visitor stats:', error.message);
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
      }
    };

    fetchIpAndCount();

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