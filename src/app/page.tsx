import { Metadata } from "next";
import { getStaticTranslation } from "@/lib/i18n-static";
import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FAQSection from "@/components/sections/FAQSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import SupportScopeSection from "@/components/sections/SupportScopeSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ContactSection from "@/components/sections/ContactSection";
import LoansSection from "@/components/sections/LoansSection";
import { faqData } from "@/data/faqData";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AreasWeServe from "@/components/AreasWeServe";

export async function generateMetadata(): Promise<Metadata> {
    const { t } = getStaticTranslation();
    return {
        title: { absolute: t("home_page_title") },
        description: t("home_page_meta_description"),
        keywords: [
            "LIC Insurance Support", "LIC Agent Bangalore", "Insurance Advisor Bangalore", "LIC Policy Consultant",
            "Insurance Claim Recovery India", "Claim Settlement Expert", "Rejected Claim Help",
            "Rejected Claim Appeal Help",
            "LIC Agent Bangalore",
            "Insurance Advisor India",
            "Claim Settlement Support",
            "Lost Policy Recovery",
            "LIC Policy Status Check", "LIC Maturity Claim Help",
            "Insurance Consultancy"
        ],
        metadataBase: new URL("https://insurancesupport.online"),
        alternates: { canonical: "/" },
        openGraph: {
            title: t("home_page_title"),
            description: t("home_page_meta_description"),
            url: "https://insurancesupport.online",
            siteName: "Insurance Support India",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t("home_page_title"),
            description: t("home_page_meta_description"),
        }
    };
}

export default function Home() {
    const { t } = getStaticTranslation();
    return (
        <>
            <LocalBusinessJsonLd />
            <TrustBadges
                trustedByFamilies={t("trusted_by_families")}
                yearsExperience={t("years_experience_short")}
                irdaiCertified={t("irdai_certified_badge")}
                claimRecoveryExpert={t("claim_recovery_expert")}
                callNow={t("call_now")}
            />
            {/* SEO h1 - server-rendered for Googlebot */}
            <h1 className="sr-only">{t("hero_title")}</h1>
            {/* Client-side interactive sections (Hero with forms, animations) */}
            <HomeClient
                initialTitle={t("hero_title")}
                initialDescription={t("secure_family_future")}
            />
            {/* Server-rendered static sections for SEO */}
            <ServicesSection />
            <FAQSection items={faqData.slice(0, 6)} />
            <ProcessTimeline />
            <SupportScopeSection
                title={t("support_clarification_title")}
                desc={t("support_clarification_desc")}
                whatWeHelp={t("what_we_help_with")}
                whatWeDont={t("what_we_dont_do")}
                helpClaims={t("help_item_claims")}
                helpPolicy={t("help_item_policy")}
                helpLegal={t("help_item_legal")}
                helpAffiliated={t("help_item_affiliated")}
                dontPayout={t("dont_item_payout")}
            />
            <ServiceAreasSection />
            <ContactSection
                title={t("get_in_touch")}
                description={t("contact_description")}
                callUs={t("call_us")}
                whatsappUs={t("whatsapp_us")}
                visitUs={t("visit_us")}
                bangaloreOffice={t("bangalore_office")}
            />
            <LoansSection />
n            {/* Client Testimonials */}
            <TestimonialsSection />
            <AreasWeServe
                title={t("areas_we_serve")}
                subtitle={t("serving_across_india")}
                viewAll={t("view_all_locations")}
            />

            {/* Google Review CTA */}
            <section className="bg-amber-50 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Families Across India — See Why</h2>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Rated 4.2/5 by our clients. Read their stories or share your experience.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://g.page/r/CRDgJanrKjRhEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            Write a Google Review
                        </a>
                        <a
                            href="https://share.google/FBw8WZDuh4r3AD5f0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-bold transition-colors shadow border border-slate-200"
                        >
                            📍 Find Us on Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
