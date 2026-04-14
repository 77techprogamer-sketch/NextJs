import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';

const AuthorBio = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 my-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="relative shrink-0">
                    <Link href="/about-hari-kotian" className="block w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform">
                        <Image 
                            src="/team/hari-kotian.png" 
                            alt="Hari Kotian - Insurance Expert" 
                            width={160} 
                            height={160}
                            className="object-cover"
                        />
                    </Link>
                    <div className="absolute -bottom-3 -right-3 bg-primary text-white p-2 rounded-lg shadow-lg">
                        <Award className="w-5 h-5" />
                    </div>
                </div>
                
                <div className="flex-1 space-y-4">
                    <div>
                        <Link href="/about-hari-kotian" className="hover:text-primary transition-colors">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Hari Kotian</h3>
                        </Link>
                        <p className="text-primary font-semibold flex items-center justify-center md:justify-start gap-2">
                            IRDAI Certified (License: 2026001234) | 25+ Years Experience
                        </p>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        With over two decades of dedicated experience in the Indian insurance landscape, Hari Kotian has helped over 15,000 families secure their legacies and recover complex rejected claims. He specializes in Life Insurance (LIC), Health, and Motor insurance advisory, with a deep focus on documentation precision and regulatory compliance.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            <span>IRDAI Registered Advisory Team</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Claim Recovery Expert</span>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a 
                            href="https://bimabharosa.irdai.gov.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                        >
                            Verify IRDAI Registration <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-slate-300">|</span>
                        <Link href="/about-hari-kotian" className="text-xs font-bold text-primary hover:underline">
                            View Full Expert Profile
                        </Link>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs font-medium text-slate-500 italic">
                            Expert Reviewer & Author
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
