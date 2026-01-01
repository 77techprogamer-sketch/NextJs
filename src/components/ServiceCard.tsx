"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { formatLabel } from '@/utils/formatText';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, href }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <Link to={href} className="block">
      <Card
        className="flex flex-col items-center text-center p-4 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105"
      >
        <CardHeader className="pb-2 flex flex-col items-center">
          <Icon className="h-10 w-10 text-primary mb-2" />
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {t("click_to_get_quote", { type: formatLabel(title).toLowerCase() })}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;