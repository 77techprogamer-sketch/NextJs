"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const GeoBlocker = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkIpReputation = async () => {
      try {
        // 1. Get visitor's IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();

        if (!ip) throw new Error('Could not determine IP');

        // 2. Check StopForumSpam (Community-driven, CORS-friendly API)
        const sfsResponse = await fetch(`https://api.stopforumspam.org/api?ip=${ip}&json`);
        const data = await sfsResponse.json();

        if (data.success && data.ip) {
          const { appears, frequency, confidence } = data.ip;

          // Logic: Block if the IP appears in the database AND has a high frequency/confidence
          // frequency > 5 typically indicates a persistent spammer/bot
          const SEVERE_THRESHOLD = 5;
          const IS_SEVERE = appears && (frequency > SEVERE_THRESHOLD || confidence > 90);

          if (IS_SEVERE) {
            console.warn(`Access blocked: IP ${ip} is severely blacklisted (freq: ${frequency}, conf: ${confidence}%)`);
            router.push('/blocked');
          }
        }
      } catch (error) {
        console.error('Security check error (failing-open):', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkIpReputation();
  }, [router]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Verifying connection security...</p>
        </div>
      </div>
    );
  }

  return null; // Render nothing if not blocked and not loading
};

export default GeoBlocker;