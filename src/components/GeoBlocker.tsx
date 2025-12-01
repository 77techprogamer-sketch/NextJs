"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const GeoBlocker = () => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Using a free IP geolocation service
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'PK') {
          setIsBlocked(true);
          // Redirect to a blocked page or show a message
          router.push('/blocked');
        }
      } catch (error) {
        console.error('Error checking location:', error);
        // If we can't determine location, we allow access
      } finally {
        setIsLoading(false);
      }
    };

    checkLocation();
  }, [router]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Checking your location...</p>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Restricted</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sorry, access to this website from Pakistan is currently restricted.
          </p>
          <button 
            onClick={() => window.location.href = 'https://www.google.com'}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Google
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default GeoBlocker;