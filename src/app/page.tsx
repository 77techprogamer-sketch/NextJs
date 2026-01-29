import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";
import enTranslations from "../../public/locales/en/translation.json";

export default function Home() {
    return (
        <>
            <LocalBusinessJsonLd />
            <HomeClient
                heroTitle={enTranslations.hero_title}
                heroDescription={enTranslations.secure_family_future}
            />
        </>
    );
}
