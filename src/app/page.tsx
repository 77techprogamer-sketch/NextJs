import { Metadata } from "next";
import { getServerSideTranslation } from "@/lib/i18n-server";
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

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getServerSideTranslation();
    return {
        title: { absolute: t("home_page_title") },
        description: t("home_page_meta_description"),
        keywords: [
            "LIC Insurance Support",
            "Insurance Claim Recovery India",
            "Rejected Claim Appeal Help",
            "LIC Agent Bangalore",
            "Insurance Advisor India",
            "Claim Settlement Support",
            "Lost Policy Recovery",
            "LIC Policy Status Check",
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

export default async function Home() {
    const { t } = await getServerSideTranslation();
    return (
        <>
            <LocalBusinessJsonLd />
            {/* Client-side interactive sections (Hero with forms, animations) */}
            <HomeClient
                initialTitle={t("hero_title")}
                initialDescription={t("secure_family_future")}
            />
            {/* Server-rendered static sections for SEO */}
            <ServicesSection t={t} />
            <WhyChooseUsSection t={t} />
            <FAQSection t={t} items={faqData.slice(0, 6)} />
            <ProcessTimeline t={t} />
            <SupportScopeSection t={t} />
            <ServiceAreasSection t={t} />
            <ContactSection t={t} />
            <LoansSection t={t} onGetQuote={() => {}} />
        </>
    );
}
