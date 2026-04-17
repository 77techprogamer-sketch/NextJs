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
    bangalore: {
        summary: "Expert guidance for health and life insurance in Bangalore. Specialized support for IT employees (Manyata, Electronic City) and doorstep document coordination for senior citizens in Jayanagar and Indiranagar.",
        facts: [
            "Network support for Manipal, Apollo, and Fortis Bangalore.",
            "Specialized 'Super Top-up' plans for IT Corridor employees.",
            "Doorstep policy audits and claim coordination for seniors.",
            "Physically proximity to LIC Residency Road & J.C. Road branches."
        ],
        localContext: "Medical inflation in Bangalore is at 15%, making personal health covers a necessity over corporate GHI."
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
    },
    ahmedabad: {
        summary: "As a premier business and industrial hub in Gujarat, Ahmedabad demands high-performance Insurance Support for its thriving entrepreneurial community.",
        facts: [
            "Ahmedabad is a critical center for LIC's Western Zone operations.",
            "High concentration of textile and chemical industry SMEs requiring tailored commercial liability covers.",
            "Rapidly growing demand for family floater health plans in Satellite and Prahlad Nagar."
        ],
        localContext: "Our advisors coordinate closely with the Relief Road and Satellite hubs to ensure your claims are processed with priority."
    },
    jaipur: {
        summary: "In the Pink City, we blend royal-grade protection with modern efficiency to safeguard your family's heritage and future.",
        facts: [
            "Jaipur serves as a major insurance hub for the entire Rajasthan region.",
            "High adoption of pure term insurance among the city's growing white-collar workforce.",
            "Extensive cashless hospital network including major multi-specialty centers in Malviya Nagar."
        ],
        localContext: "We provide doorstep service across Vaishali Nagar and Mansarovar, handling all LIC paperwork so you don't have to."
    },
    lucknow: {
        summary: "Serving the capital of Uttar Pradesh, our Lucknow team provides sophisticated insurance audits for legacy family portfolios and new-age professionals.",
        facts: [
            "Home to the prominent LIC Jeevan Bhawan divisional office.",
            "Increasing demand for critical illness riders due to lifestyle changes in the urban population.",
            "Specialized expertise in reviving long-lapsed traditional policies for government employees."
        ],
        localContext: "We are active throughout Gomti Nagar and Hazratganj, offering on-ground support for health insurance claim filings."
    },
    nagpur: {
        summary: "As the winter capital of Maharashtra and a major logistics hub, Nagpur requires robust general and life insurance strategies for its diverse population.",
        facts: [
            "Nagpur is a strategic node for transit and motor insurance due to its central location.",
            "Strong local presence of LIC divisional offices in the Sadar area.",
            "Growing network of cashless hospitals servicing the Vidarbha region."
        ],
        localContext: "Our local coordinators provide physical document collection across Dharampeth and Manish Nagar, ensuring zero-hassle policy management."
    },
    indore: {
        summary: "In India's cleanest city, we help you maintain financial hygiene with optimized insurance portfolios that maximize protection and minimize waste.",
        facts: [
            "Indore is the commercial heart of Madhya Pradesh with high insurance awareness.",
            "Significant demand for top-up health plans among IT professionals in Vijay Nagar.",
            "Efficient LIC settlement record across the city's various urban branches."
        ],
        localContext: "We offer weekend doorstep consultations for busy professionals, ensuring your family's security is never on the backburner."
    },
    thane: {
        summary: "As Thane evolves into a major residential and corporate hub, our team provides premium insurance advisory for families in high-rise townships and growing businesses.",
        facts: [
            "Thane has seen the highest surge in home insurance inquiries in the Mumbai Metropolitan Region.",
            "Extensive network of premium hospitals in the Ghodbunder Road corridor.",
            "Direct coordination with the Thane LIC divisional office in Naupada."
        ],
        localContext: "From Hiranandani Estate to Vartak Nagar, we bring the insurance office to your living room."
    },
    bhopal: {
        summary: "In the City of Lakes, we provide steady and reliable insurance support to ensure your family's financial boat stays afloat through every storm.",
        facts: [
            "Bhopal has a high density of life insurance policyholders among its administrative workforce.",
            "Focus on 'Engine Protect' and comprehensive motor riders due to seasonal waterlogging risks.",
            "Trust-based legacy of traditional LIC plans in the old city and M.P. Nagar."
        ],
        localContext: "Our advisors are well-versed in the specific needs of government retirees and offer specialized pension planning support."
    },
    visakhapatnam: {
        summary: "As a major port and industrial city, Visakhapatnam (Vizag) requires specialized marine, industrial, and personal insurance solutions.",
        facts: [
            "Strategic center for coastal insurance risks and maritime commercial covers.",
            "Strong LIC presence with the Jeevan Prakash divisional office in Asilmetta.",
            "High demand for robust health insurance among the city's industrial workforce."
        ],
        localContext: "We provide comprehensive service from Gajuwaka to MVP Colony, ensuring your port-city assets are fully protected."
    },
    patna: {
        summary: "Patna's historic importance is matched by our commitment to securing the financial future of its residents with modern insurance tools.",
        facts: [
            "Major hub for life insurance claim settlements in the Bihar region.",
            "Rising awareness of private health insurance in Boring Road and Kankarbagh.",
            "Legacy of traditional endowment plans that we help optimize for better returns."
        ],
        localContext: "Our team coordinates directly with the Fraser Road LIC offices to expedite your maturity and survival benefit claims."
    },
    surat: {
        summary: "In the Diamond City, we offer high-carat insurance protection for businesses and families who value transparency and reliability.",
        facts: [
            "Surat has a massive demand for SME and business liability insurance among its textile and diamond units.",
            "Highest growth rate for high-sum assured term insurance in Gujarat.",
            "Robust cashless hospital network in the Adajan and Vesu corridors."
        ],
        localContext: "We specialize in auditing business insurance portfolios to ensure zero gaps in coverage for Surat's entrepreneurs."
    }
};

