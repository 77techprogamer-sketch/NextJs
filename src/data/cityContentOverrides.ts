export interface CityOverride {
    summary: string;
    facts: string[];
    localContext: string;
}

export const CITY_CONTENT_OVERRIDES: Record<string, CityOverride> = {
    mumbai: {
        summary: "As India's financial capital, Mumbai has a unique insurance ecosystem. From corporate liability to high-value life covers in areas like Marine Lines and South Mumbai, the city demands expert-led financial planning.",
        facts: [
            "Mumbai hosts the headquarters of most major Indian insurance providers including LIC.",
            "Higher-than-average claim payouts for health insurance due to premium hospital infrastructure.",
            "Specialized expertise available for marine and corporate insurance cases."
        ],
        localContext: "Our team coordinates directly with headquarters located in the city, ensuring your claims are fast-tracked without the usual bureaucratic delays."
    },
    delhi: {
        summary: "Serving the National Capital Region (NCR), our Delhi experts navigate the complex regulatory and policy-making landscape to provide you with the most up-to-date insurance advice.",
        facts: [
            "Direct proximity to IRDAI (Insurance Regulatory and Development Authority of India) regional offices.",
            "High demand for pollution-linked health insurance riders in the NCR region.",
            "Expertise in coordinating across Delhi, Gurgaon, and Noida jurisdictions."
        ],
        localContext: "We understand the NCR lifestyle and provide doorstep service throughout South Delhi, Dwarka, and Rohini with local coordinators."
    },
    bangalore: {
        summary: "In the 'Silicon Valley of India', we specialize in insurance solutions for tech professionals and startup founders who value digital speed and human reliability.",
        facts: [
            "Bangalore has the highest adoption rate for modern health insurance tech in the country.",
            "Specialized plans available for IT professionals with corporate health benefits integration.",
            "Large network of cashless hospitals including Manipal, Apollo, and Fortis."
        ],
        localContext: "Based out of Jalahalli, our core team has served over 15,000 clients across Bangalore, from Whitefield to Electronic City."
    },
    hyderabad: {
        summary: "The Pearl City's growing IT and pharma sectors have led to a surge in high-value term insurance and comprehensive health cover requirements.",
        facts: [
            "Hyderabad is a major hub for medical insurance TPA (Third Party Administrator) operations.",
            "Fastest-growing market for family floater health plans in Southern India.",
            "Strong local LIC network with legacy policy histories going back decades."
        ],
        localContext: "Our advisors cover major hubs including HITEC City, Kondapur, and Secunderabad, offering localized Telugu and Hindi support."
    },
    chennai: {
        summary: "As the 'Detroit of India', Chennai residents have a deep understanding of motor and industrial insurance, requiring sophisticated and transparent policy management.",
        facts: [
            "Chennai features a robust network of government and private health facilities with seamless cashless tie-ups.",
            "High awareness of critical illness covers among the city's coastal residents.",
            "Historical legacy of strong LIC branch networks across the city."
        ],
        localContext: "We provide comprehensive service across OMR, Adyar, and Anna Nagar, ensuring your documents are collected from your home or office."
    },
    kolkata: {
        summary: "The cultural capital of India has a historic relationship with insurance, dating back to the earliest LIC branches established near Chowringhee.",
        facts: [
            "Kolkata holds some of the oldest active life insurance policies in the country.",
            "Strong preference for endowment and money-back plans that offer guaranteed returns.",
            "Dedicated support available for legacy LIC policy searches and lost bond retrieval."
        ],
        localContext: "Our experts understand the traditional values of Kolkata families and offer patient, human-led advisory near Park Street and Salt Lake."
    },
    pune: {
        summary: "The IT and automotive hub of Maharashtra requires a blend of traditional life covers and modern, digital-first health and motor insurance solutions.",
        facts: [
            "Pune has a high density of young professionals seeking aggressive wealth-creation ULIPs.",
            "Large network of network hospitals for cashless treatment in Baner and Hinjewadi.",
            "Specialized support for automobile insurance due to the city's manufacturing legacy."
        ],
        localContext: "We offer quick doorstep document collection throughout Pune, focusing on tech corridors and residential hubs like Kothrud."
    }
};
