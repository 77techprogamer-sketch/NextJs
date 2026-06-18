"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Import cn utility
import { useTranslation } from 'react-i18next';

interface DateTimeDisplayProps {
  className?: string;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute — avoids 60 re-renders/minute

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString(i18n.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className={cn(
      "text-white font-bold flex flex-col items-end text-xs sm:text-sm", // Base responsive text size
      className
    )}>
      <span>{formattedDate}</span>
      <span>{formattedTime}</span>
    </div>
  );
};

export default DateTimeDisplay;