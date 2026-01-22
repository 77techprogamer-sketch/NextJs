"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Import cn utility
import { useTranslation } from 'react-i18next';

interface DateTimeDisplayProps {
  className?: string;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setCurrentDateTime(new Date());

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, []);

  if (!mounted || !currentDateTime) {
    return null;
  }

  const formattedDate = currentDateTime.toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString(i18n.language, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
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