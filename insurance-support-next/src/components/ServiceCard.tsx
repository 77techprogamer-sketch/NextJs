import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
    return (
        <Link href={href} className="group block h-full">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
                    <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                    <Button variant="ghost" className="w-full group-hover:bg-primary/5 p-0 sm:px-4 justify-start sm:justify-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </CardContent>
            </Card>
        </Link>
    )
}
