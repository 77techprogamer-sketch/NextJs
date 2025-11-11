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

        // 3. Get the total count of unique visitors
        const { count, error: countError } = await supabase
          .from('visitors')
          .select('*', { count: 'exact', head: true });

        if (countError) {
          console.error('Error fetching visitor count:', countError.message);
        } else {
          setCount(count);
        }

        // 4. Get the last visit timestamp
        const { data: lastVisitorData, error: lastVisitorError } = await supabase
          .from('visitors')
          .select('created_at')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (lastVisitorError) {
          console.error('Error fetching last visit:', lastVisitorError.message);
        } else if (lastVisitorData) {
          setLastVisit(formatDistanceToNow(new Date(lastVisitorData.created_at), { addSuffix: true }));
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