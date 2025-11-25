"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, onClick }) => {
  return (
    <Card
      className="flex flex-col items-center text-center p-4 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <Icon className="h-10 w-10 text-primary mb-2" />
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Click to get a quote for {title.toLowerCase()}.
      </CardContent>
    </Card>
  );
};

export default ServiceCard;