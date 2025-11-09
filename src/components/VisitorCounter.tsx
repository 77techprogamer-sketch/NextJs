"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

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

        // A '23505' error code means the IP already exists, which is expected.
        // We only log other, unexpected errors.
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
      } catch (error) {
        console.error('An error occurred in the visitor counter:', error);
      }
    };

    fetchIpAndCount();
  }, []);

  if (count === null) {
    return null; // Don't render anything until the count is fetched
  }

  return (
    <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-gray-100 bg-opacity-75 p-2 rounded-md flex items-center shadow-sm">
       <Eye className="h-4 w-4 mr-1" />
      <span>{count} unique visitors</span>
    </div>
  );
};

export default VisitorCounter;