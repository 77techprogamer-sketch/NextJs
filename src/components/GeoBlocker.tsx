"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GeoBlocker = () => {
  const router = useRouter();

  useEffect(() => {
    const checkIpReputation = async () => {
      try {
        // 1. Get visitor's IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();

        if (!ip) return; // Fail open — don't block if IP can't be determined

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
        // Fail silently — never block a user due to a network error
      }
    };

    checkIpReputation();
  }, [router]);

  return null; // Never render anything — this is a background check only
};

export default GeoBlocker;