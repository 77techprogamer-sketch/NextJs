import React from 'react';
import { ShieldCheck, Award, Lock, CheckCircle } from 'lucide-react';

const TrustBadges = () => {
    return (
        <div className="flex flex-wrap items-center gap-6 py-4 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 group">
                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Security</p>
                    <p className="text-sm font-semibold">SSL Secured</p>
                </div>
            </div>

            <div className="flex items-center gap-2 group">
                <div className="p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Compliance</p>
                    <p className="text-sm font-semibold">IRDA Verified</p>
                </div>
            </div>

            <div className="flex items-center gap-2 group">
                <div className="p-2 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                    <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Legacy</p>
                    <p className="text-sm font-semibold">ISO 9001:2015</p>
                </div>
            </div>

            <div className="flex items-center gap-2 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Experience</p>
                    <p className="text-sm font-semibold">25+ YRS PRO</p>
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
