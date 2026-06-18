export interface CityOverride {
    summary: string;
    facts: string[];
    localContext: string;
    serviceSpecific?: Record<string, {
        summary?: string;
        facts?: string[];
        localContext?: string;
    }>;
}

export const CITY_CONTENT_OVERRIDES: Record<string, CityOverride> = {
    mumbai: {
        summary: "Mumbai's insurance landscape requires deep knowledge of TPA coordination and cashless networks. Our team provides specialized support for LIC policy revivals and health claim appeals across the Mumbai Metropolitan Region.",
        facts: [
            "Coordination with 450+ cashless hospitals including Lilavati and Nanavati",
            "Specialized LIC death claim support for complex urban documentation",
            "On-field document pickup service across Greater Mumbai",
            "Direct assistance for motor accidental claims at local authorized workshops"
        ],
        localContext: "Mumbai residents often face complex claim paperwork due to multi-specialty hospital billing. Our Bandra-based team simplifies this by handling direct TPA communication.",
        serviceSpecific: {
            'health-insurance': {
                summary: "Health Insurance in Mumbai is critical given the high cost of treatment. We help you navigate cashless hospitalization at top Mumbai hospitals and resolve rejected claims efficiently.",
                facts: [
                    "Direct TPA coordination with major Mumbai hospitals like SevenHills and Kokilaben",
                    "Expertise in resolving 24-hour stay requirement disputes for Mumbai clinics",
                    "Assistance with domiciliary hospitalization claims common in crowded urban pockets"
                ],
                localContext: "We have established relationships with billing departments at major hospitals in Andheri and South Mumbai to expedite your claim processing."
            },
            'motor-insurance': {
                summary: "Navigating motor insurance claims in Mumbai's traffic-prone environment can be stressful. We provide end-to-end support for accidental claims and surveyor coordination.",
                facts: [
                    "Spot survey assistance at accident locations across Mumbai",
                    "Coordination with 200+ authorized cashless garages in the MMR region",
                    "Expertise in Total Loss and Theft claims for high-value vehicles in Mumbai"
                ],
                localContext: "Our team helps you get the right depreciated value assessment, especially for claims arising from monsoon-related vehicle damage common in Mumbai."
            }
        }
    },
    delhi: {
        summary: "Serving the National Capital Region, our Delhi team specializes in corporate SME insurance and individual term plan management. We ensure your claims are processed according to the latest IRDAI norms.",
        facts: [
            "Specialized SME insurance desk for businesses in Okhla and Noida",
            "20+ years of experience in LIC policy revival for central Delhi families",
            "Expert support for international travel insurance claims for Delhi travelers",
            "Legal assistance coordination for disputed life insurance claims"
        ],
        localContext: "With the presence of many corporate headquarters in Delhi, we bridge the gap between policyholders and insurance companies for faster resolutions.",
        serviceSpecific: {
            'term-insurance': {
                summary: "Term Insurance is the backbone of financial planning in Delhi. We ensure your family doesn't face hurdles during the most critical times of claim settlement.",
                facts: [
                    "Assistance in identifying and documenting 'Standard Age Proof' for old policies",
                    "Guidance on Section 45 (Indisputability Clause) for claims in the NCR region",
                    "Support for NRIs with Delhi-base policies for claim documentation"
                ],
                localContext: "Our Connaught Place office provides a central point for families across Delhi to submit and verify original policy documents for death claims."
            },
            'sme-insurance': {
                summary: "For businesses in Delhi's industrial and commercial hubs, we provide tailored SME insurance support to protect your assets and employees.",
                facts: [
                    "Risk assessment for manufacturing units in Okhla and Bawana",
                    "Assistance with Group Mediclaim (GMC) policy administration for Delhi startups",
                    "Specialized support for Fire and Marine insurance claims for NCR traders"
                ],
                localContext: "We understand the specific fire safety compliance requirements for Delhi businesses and help align your insurance claims accordingly."
            }
        }
    },
    bangalore: {
        summary: "Expert guidance for health and life insurance in Bangalore's Silicon Valley. Specialized support for IT professionals (Manyata, Electronic City, Whitefield) and doorstep document coordination for senior citizens in Jayanagar and Indiranagar. Serving 15,000+ families across Bangalore with 25+ years of experience.",
        facts: [
            "Cashless claim support at Manipal, Apollo, Fortis, Narayana Health, Columbia Asia, Aster CMI, and 400+ network hospitals across Bangalore.",
            "Specialized 'Super Top-up' health plans for IT Corridor employees to supplement corporate GHI.",
            "Doorstep policy audits, LIC revival, and claim coordination for seniors and busy professionals.",
            "Physical proximity to LIC Residency Road & J.C. Road branches for fast-track claim processing.",
            "Free doorstep consultation across all Bangalore areas -- Indiranagar, Koramangala, Whitefield, HSR Layout, Electronic City, and more."
        ],
        localContext: "Based out of Jalahalli, our core team has served over 15,000 clients across Bangalore. Medical inflation here is at 15%, making personal health covers a necessity over just corporate GHI. We understand the unique needs of Bangalore's IT workforce and growing families.",
        serviceSpecific: {
            'health-insurance': {
                summary: "Secure the best health insurance in Bangalore with localized support for cashless claims at premium hospitals like Manipal, St. John's, and Narayana Health. We specialize in porting corporate GHI policies to private retail plans for tech professionals.",
                facts: [
                    "Direct coordination with major TPAs like Medi Assist and Vidal Health in Bangalore.",
                    "Expert assistance for health insurance reimbursement claims in non-cashless hospitals.",
                    "Guidance on high-sum assured plans for families living in fast-growing areas like Sarjapur and Hennur."
                ],
                localContext: "Bangalore has some of India's best hospitals, but medical costs are rising rapidly. A dedicated advisor ensures you aren't just covered, but actually supported during a medical crisis."
            },
            'lic-agent': {
                summary: "Connect with certified LIC agents in Bangalore for expert policy servicing, revival of lapsed policies, and smooth death/maturity claim settlements. We offer doorstep document collection throughout the Bangalore metropolitan region.",
                facts: [
                    "Assistance with legacy policy searches at LIC branches in Gandhinagar and J.C. Road.",
                    "Fast-track survival benefit and maturity claim processing.",
                    "Expert help for lost LIC policy bond retrieval and duplicate issuance."
                ]
            },
            'motor-insurance': {
                summary: "Looking for car insurance renewal online Bangalore? We provide instant digital renewals, NCB transfers, and expert advice on Bangalore-specific add-ons like Engine Protect for monsoon waterlogging.",
                facts: [
                    "Compare quotes from 10+ IRDAI-approved insurers for immediate online renewal.",
                    "Expert guidance on Zero Depreciation and Return to Invoice (RTI) add-ons.",
                    "Assistance with accidental claims and cashless garage coordination in Bangalore."
                ]
            }
        }
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

