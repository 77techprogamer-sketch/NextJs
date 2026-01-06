'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  icon: LucideIcon
  href: string
}

export default function ServiceCard({ title, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}