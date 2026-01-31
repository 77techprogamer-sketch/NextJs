"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { formatLabel, normalizeUIValue } from '@/utils/formatText';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, href, delay = 0 }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <Link href={href} className="block group">
      <ScrollReveal animation="fade-up" delay={delay} width="100%">
        <Card
          className="flex flex-col items-center text-center p-6 h-full border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <CardHeader className="pb-4 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="h-8 w-8 text-primary transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-foreground transition-colors duration-300" suppressHydrationWarning>{normalizeUIValue(title)}</h3>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground mt-2" suppressHydrationWarning>
            {t("click_to_get_quote", { type: formatLabel(title).toLowerCase() })}
          </CardContent>
        </Card>
      </ScrollReveal>
    </Link>
  );
};

export default ServiceCard;