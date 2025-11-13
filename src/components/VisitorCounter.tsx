"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);

  useEffect(() => {
    const fetchIpAndCount = async () => {
      try {
        // 1. Fetch user's IP address from an external service
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        if (!ipResponse.ok) {
          console.error('Failed to fetch IP address');
          return;
        }
        const { ip } = await ipResponse.json();

        // 2. Insert IP into Supabase. The primary key constraint will handle duplicates.
        const { error: insertError } = await supabase
          .from('visitors')
          .insert({ ip_address: ip });

        if (insertError && insertError.code !== '23505') {
            console.error('Error logging visitor:', insertError.message);
        }

        // 3. Get visitor stats using the secure RPC function
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
  }, []);

  if (count === null) {
    return null; // Don't render anything until the data is fetched
  }

  return (
    <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-gray-100 bg-opacity-75 p-2 rounded-md flex items-center shadow-sm">
       <Eye className="h-4 w-4 mr-2" />
      <div className="flex flex-col items-end">
        <span>{count} unique visitors</span>
        {lastVisit && <span className="text-gray-400">Last visit {lastVisit}</span>}
      </div>
    </div>
  );
};

export default VisitorCounter;