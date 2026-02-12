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
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, href, delay = 0, onClick }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  const CardContentWrapper = (
    <ScrollReveal animation="fade-up" delay={delay} width="100%">
      <Card
        className="flex flex-col items-center text-center p-6 h-full glass-card border-white/10 group-hover:border-accent/40 shadow-sm hover:translate-y-[-8px] transition-all duration-500"
      >
        <CardHeader className="pb-4 flex flex-col items-center">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-500">
            <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300" suppressHydrationWarning>{normalizeUIValue(title)}</h3>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-300" suppressHydrationWarning>
          {t("click_to_get_quote", { type: formatLabel(title).toLowerCase() })}
        </CardContent>
      </Card>
    </ScrollReveal>

  );

  if (onClick) {
    return (
      <div onClick={onClick} className="block group cursor-pointer">
        {CardContentWrapper}
      </div>
    );
  }

  return (
    <Link href={href} className="block group">
      {CardContentWrapper}
    </Link>
  );
};

export default ServiceCard;