"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { formatLabel, normalizeUIValue } from '@/utils/formatText';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, href }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <Link href={href} className="block group">
      <Card
        className="flex flex-col items-center text-center p-6 h-full border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-accent/50 group-hover:ring-1 group-hover:ring-accent/20"
      >
        <CardHeader className="pb-4 flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-300">
            <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300" suppressHydrationWarning>{normalizeUIValue(title)}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600 dark:text-gray-300" suppressHydrationWarning>
          {t("click_to_get_quote", { type: formatLabel(title).toLowerCase() })}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;