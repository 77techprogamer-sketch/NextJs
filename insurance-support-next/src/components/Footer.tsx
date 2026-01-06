import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            Insurance Support
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted partner for comprehensive insurance solutions. We simplify insurance to help you protect what matters most.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Insurance Products</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/services/life-insurance" className="hover:text-white transition-colors">Life Insurance</Link></li>
                            <li><Link href="/services/health-insurance" className="hover:text-white transition-colors">Health Insurance</Link></li>
                            <li><Link href="/services/motor-insurance" className="hover:text-white transition-colors">Motor Insurance</Link></li>
                            <li><Link href="/services/term-insurance" className="hover:text-white transition-colors">Term Insurance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+91 99866 34506</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>hari.sahyadri@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 shrink-0 translate-y-0.5" />
                                <span>Bangalore, Karnataka, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-400">
                        © 2026 Insurance Support. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
