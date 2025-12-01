"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Import cn utility

interface DateTimeDisplayProps {
  className?: string;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ className }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-IN', {
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