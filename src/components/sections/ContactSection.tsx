import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { contactConfig } from '@/data/contact';

interface ContactProps {
    title: string;
    description: string;
    callUs: string;
    whatsappUs: string;
    visitUs: string;
    bangaloreOffice: string;
}

const ContactSection = ({ title, description, callUs, whatsappUs, visitUs, bangaloreOffice }: ContactProps) => {
        return (
        <section id="contact" className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8" suppressHydrationWarning>
                    {title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto" suppressHydrationWarning>
                    {description}
                </p>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-2xl mx-auto">
                    <a href={contactConfig.getDialUrl()} className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                        <Phone className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>{callUs}</h3>
                        <CardDescription className="text-center text-sm sm:text-base">{contactConfig.phoneFull}</CardDescription>
                    </a>
                    <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                        <MessageSquare className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>{whatsappUs}</h3>
                        <CardDescription className="text-center text-sm sm:text-base">{contactConfig.phoneFull}</CardDescription>
                    </a>
                    <a href="https://share.google/FBw8WZDuh4r3AD5f0" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card text-card-foreground">
                        <MapPin className="text-primary h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
                        <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold leading-none tracking-tight" suppressHydrationWarning>{visitUs}</h3>
                        <CardDescription className="text-center text-sm sm:text-base" suppressHydrationWarning>{bangaloreOffice}</CardDescription>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
