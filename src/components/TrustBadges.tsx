import React from "react";
import { ShieldCheck, Award, Users, Clock, Phone, Star } from "lucide-react";
import { contactConfig } from "@/data/contact";

interface TrustBadgesProps {
    trustedByFamilies: string;
    yearsExperience: string;
    irdaiCertified: string;
    claimRecoveryExpert: string;
    callNow: string;
}

export default function TrustBadges({ trustedByFamilies, yearsExperience, irdaiCertified, claimRecoveryExpert, callNow }: TrustBadgesProps) {
    const badges = [
        { icon: Users, label: trustedByFamilies, color: "text-blue-400" },
        { icon: Clock, label: yearsExperience, color: "text-green-400" },
        { icon: ShieldCheck, label: irdaiCertified, color: "text-yellow-400" },
        { icon: Award, label: claimRecoveryExpert, color: "text-purple-400" },
    ];

    return (
        <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {badges.map((badge, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <badge.icon className={`w-5 h-5 ${badge.color}`} />
                            <span className="text-sm font-medium text-slate-300">{badge.label}</span>
                        </div>
                    ))}
                    <a
                        href={contactConfig.getDialUrl()}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        {callNow}: {contactConfig.phoneFull}
                    </a>
                    <a
                        href="https://wa.me/919986634506?text=Hi%2C%20I%20need%20help%20with%20my%20insurance%20claim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}
