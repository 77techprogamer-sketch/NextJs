"use client";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const GeoBlocker = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'PK') {
          navigate('/blocked'); // Redirect using react-router-dom
        }
      } catch (error) {
        console.error('Error checking location:', error);
        // If we can't determine location, we allow access
      } finally {
        setIsLoading(false);
      }
    };

    checkLocation();
  }, [navigate]); // Add navigate to dependency array

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

  return null; // Render nothing if not blocked and not loading
};

export default GeoBlocker;