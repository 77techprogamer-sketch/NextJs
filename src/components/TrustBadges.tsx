import React from "react";
import { ShieldCheck, Award, Users, Clock, Phone, Star } from "lucide-react";
import { contactConfig } from "@/data/contact";

export default function TrustBadges({ t }: { t: (key: string, opts?: any) => string }) {
    const badges = [
        { icon: Users, label: t("trusted_by_families"), color: "text-blue-400" },
        { icon: Clock, label: t("years_experience_short"), color: "text-green-400" },
        { icon: ShieldCheck, label: t("irdai_certified_badge"), color: "text-yellow-400" },
        { icon: Award, label: t("claim_recovery_expert"), color: "text-purple-400" },
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
                        href="https://g.page/r/CRDgJanrKjRhEBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                    >
                        <Star className="w-4 h-4" />
                        Review on Google
                    </a>
                </div>
            </div>
        </section>
    );
}
