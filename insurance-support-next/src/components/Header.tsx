'use client'

import Link from 'next/link'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <Shield className="h-6 w-6" />
                        <span>Insurance Support</span>
                    </Link>

                    <div className="hidden md:flex gap-6 items-center">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                            Features
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="tel:+919986634506" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary">
                            +91 99866 34506
                        </Link>
                        <Link href="/support">
                            <Button>Get a Quote</Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
