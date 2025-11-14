"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState<number>(0);

  useEffect(() => {
    const fetchIpAndCount = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        if (!ipResponse.ok) {
          console.error('Failed to fetch IP address');
          return;
        }
        const { ip } = await ipResponse.json();

        // Invoke the Edge Function to log the visitor IP
        const { data: edgeFunctionData, error: edgeFunctionError } = await supabase.functions.invoke('log-visitor', {
          body: { ip_address: ip },
        });

        if (edgeFunctionError) {
          console.error('Error invoking log-visitor Edge Function:', edgeFunctionError.message);
        } else {
          console.log('Visitor logged via Edge Function:', edgeFunctionData);
        }

        const { data, error } = await supabase.rpc('get_visitor_stats');

        if (error) {
          console.error('Error fetching visitor stats:', error.message);
        } else if (data && data.length > 0) {
          const stats = data[0];
          setCount(stats.total_visitors);
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

  if (count === null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg flex flex-col items-end shadow-lg space-y-2 border">
      <div className="flex items-center" title="Unique visitors">
        <Eye className="h-4 w-4 mr-2" />
        <div className="flex flex-col items-end">
          <span>{count} unique visitors</span>
          {lastVisit && <span className="text-gray-400">Last visit {lastVisit}</span>}
        </div>
      </div>
      <div className="flex items-center" title="Visitors currently online">
        <Users className="h-4 w-4 mr-2 text-blue-500" />
        <span>{onlineCount} currently online</span>
      </div>
    </div>
  );
};

export default VisitorCounter;