import { LocalBusinessJsonLd } from "@/components/ServerJsonLd";
import HomeClient from "@/components/HomeClient";

export default function Home() {
    return (
        <>
            <LocalBusinessJsonLd />
            <HomeClient />
        </>
    );
}
