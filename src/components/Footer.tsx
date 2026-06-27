"use client";

import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award } from 'lucide-react';
const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <footer className="w-full bg-muted text-muted-foreground border-t">
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="font-bold text-lg px-4">
            {t("gst_rates_slashed")}
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">{t("insurance_support")}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs transition-colors">
              {t("footer_company_description", "Providing strategic insurance advisory and risk management solutions with over 25 years of industry excellence.")}
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Award className="h-5 w-5 text-accent" />
              <span>{t("footer_team_tagline", "A Team led by Veterans")}</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t("footer_quick_links", "Quick Links")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support" className="hover:text-primary transition-colors">{t("support")}</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Expert Resources</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Industry Blog</Link></li>
              <li><Link href="/locations/karnataka/bangalore/life-insurance" className="hover:text-primary transition-colors">Insurance in Bangalore</Link></li>
              <li><Link href="/locations/telangana/hyderabad/health-insurance" className="hover:text-primary transition-colors">Insurance in Hyderabad</Link></li>
              <li><Link href="/locations/tamil-nadu/chennai/motor-insurance" className="hover:text-primary transition-colors">Insurance in Chennai</Link></li>
              <li><Link href="/locations/maharashtra/pune/term-insurance" className="hover:text-primary transition-colors">Insurance in Pune</Link></li>
              <li><Link href="/locations/maharashtra/mumbai/health-insurance" className="hover:text-primary transition-colors">Insurance in Mumbai</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">{t("privacy_policy")}</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">{t("terms_of_service")}</Link></li>
              <li className="pt-2"><a href="https://g.page/r/CRDgJanrKjRhEBM/review" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-amber-500 font-bold flex items-center gap-1">⭐ Review us on Google</a></li>
              <li><a href="https://www.facebook.com/insurancesupport" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li><li><a href="https://www.linkedin.com/company/insurancesupport" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li><li><a href="https://www.instagram.com/insurancesupport" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li><li><a href="https://twitter.com/insurancesupport" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">Compare Alternatives</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/alternatives/policybazaar" className="hover:text-primary transition-colors">PolicyBazaar Alternative</Link></li>
              <li><Link href="/alternatives/acko" className="hover:text-primary transition-colors">Acko Alternative</Link></li>
              <li><Link href="/alternatives/digit" className="hover:text-primary transition-colors">Digit Alternative</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
            <p className="text-sm mb-1 font-semibold">Insurance Support Online</p>
            <p className="text-sm mb-1 text-muted-foreground">Bangalore, India</p>
            <p className="text-sm mb-1">
              <a href="tel:+919986634506" className="text-primary font-semibold hover:underline">+91-99866 34506</a>
            </p>
            <p className="text-sm mb-3">
              <a href="mailto:contact@insurancesupport.online" className="text-primary hover:underline">contact@insurancesupport.online</a>
            </p>
            <p className="text-sm mb-2 font-semibold text-primary flex items-center gap-2 justify-center sm:justify-start">
              <ShieldCheck className="w-4 h-4" />
              IRDAI Reg No: 0149161D
            </p>
            <p className="text-xs font-medium uppercase tracking-tighter opacity-70 mt-4">{t("footer_established", "25+ Years of Experience")}</p>
          </div>
        </div>
        <div className="pt-8 border-t border-muted-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} {t("insurance_support")}. {t("all_rights_reserved")}</p>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary/60">
            <span>{t("footer_value_legacy", "Legacy")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span>{t("footer_value_trust", "Trust")}</span>
            <span className="h-1 w-1 bg-accent rounded-full"></span>
            <span>{t("footer_value_excellence", "Excellence")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;