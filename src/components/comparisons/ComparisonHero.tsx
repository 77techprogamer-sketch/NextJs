import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ComparisonHeroProps {
  title: React.ReactNode;
  subtitle: string;
  benefits?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ComparisonHero({
  title,
  subtitle,
  benefits = [],
  ctaText = "Get Expert Advice",
  ctaLink = "/contact"
}: ComparisonHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        {benefits.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-200 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-xl bg-blue-600 hover:bg-blue-700 text-white">
          <Link href={ctaLink}>
            {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
