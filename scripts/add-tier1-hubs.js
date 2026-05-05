const fs = require('fs');

async function update() {
    let content = fs.readFileSync('src/data/cityData.ts', 'utf8');

    const newHubs = {
        // CHENNAI
        'chennai-t-nagar': {
            name: 'T Nagar, Chennai',
            slug: 'chennai-t-nagar',
            state: 'Tamil Nadu',
            areas: ['T Nagar', 'Nungambakkam', 'West Mambalam', 'Kodambakkam'],
            description: "In the commercial heart of Chennai, we offer premium localized Insurance Support. Whether you run a retail business in T Nagar or reside in Nungambakkam, our advisors provide fast-track doorstep service for LIC policy revivals and comprehensive health insurance.",
            nearbyCities: ['chennai', 'chennai-anna-nagar', 'chennai-adyar'],
            hubContent: {
                itProfessionalFocus: "We offer tailored Term insurance and health plans for professionals residing in the central Chennai corridors around Nungambakkam.",
                seniorCitizenFocus: "For the established families in West Mambalam, we provide doorstep assistance for LIC survival benefits and pension claims.",
                localBranchDetails: "We coordinate with the Greams Road and Mount Road LIC branches to expedite your paperwork locally.",
                localFaqs: [
                    {
                        q: "Do you service the entire T Nagar and shopping district?",
                        a: "Yes, our advisors provide guaranteed doorstep service across all streets of T Nagar, Nungambakkam, and Kodambakkam."
                    }
                ]
            }
        },
        'chennai-anna-nagar': {
            name: 'Anna Nagar, Chennai',
            slug: 'chennai-anna-nagar',
            state: 'Tamil Nadu',
            areas: ['Anna Nagar East', 'Anna Nagar West', 'Shenoy Nagar', 'Kilpauk'],
            description: "Serving the premium residential hub of Anna Nagar, we offer hyper-local Insurance Support. Our experts handle LIC policy tracking, life insurance queries, and comprehensive health portfolio audits with guaranteed doorstep visits.",
            nearbyCities: ['chennai', 'chennai-t-nagar'],
            hubContent: {
                itProfessionalFocus: "For the business community and professionals in Anna Nagar, we structure comprehensive family floater plans with extensive cashless networks.",
                seniorCitizenFocus: "Anna Nagar's retirees rely on us for seamless pension certificates and LIC survival benefits tracking right at their doorstep.",
                localBranchDetails: "We work directly with local LIC branches to ensure your legacy policies are up-to-date.",
                localFaqs: [
                    {
                        q: "How to handle a death claim if the policy is registered at the Anna Nagar branch?",
                        a: "We collect all original documents from your home and process the death claim directly with the branch manager, ensuring speedy payout."
                    }
                ]
            }
        },
        'chennai-velachery': {
            name: 'Velachery, Chennai',
            slug: 'chennai-velachery',
            state: 'Tamil Nadu',
            areas: ['Velachery', 'Taramani', 'Guindy', 'Madipakkam'],
            description: "For the IT professionals and families in Velachery and the OMR gateway, we bring Insurance Support right to your apartment complex. Skip the traffic—our experts handle LIC claim settlements and health insurance queries with guaranteed doorstep visits.",
            nearbyCities: ['chennai', 'chennai-adyar'],
            hubContent: {
                itProfessionalFocus: "Velachery's IT park professionals require robust coverage. We provide 'Corporate-to-Retail' health conversion strategies and Term insurance tailored for the tech roles common in Taramani and Guindy.",
                seniorCitizenFocus: "We offer dedicated support for parents of IT professionals, ensuring their mediclaim policies are robust enough to cover premium hospitals in the Velachery area.",
                localBranchDetails: "We handle the logistical hurdles of inter-branch policy transfers for families who have recently relocated to Velachery.",
                localFaqs: [
                    {
                        q: "Do you provide insurance advice for Velachery residents outside office hours?",
                        a: "Yes, we understand IT schedules. We offer weekend and evening doorstep consultations across Velachery and Taramani."
                    }
                ]
            }
        },
        'chennai-adyar': {
            name: 'Adyar, Chennai',
            slug: 'chennai-adyar',
            state: 'Tamil Nadu',
            areas: ['Adyar', 'Besant Nagar', 'Thiruvanmiyur', 'Kotturpuram'],
            description: "In the serene neighborhoods of Adyar and Besant Nagar, we provide premium localized Insurance Support. From premium health covers to seamless LIC policy management, our team ensures you get expert advice at your home.",
            nearbyCities: ['chennai', 'chennai-velachery'],
            hubContent: {
                itProfessionalFocus: "We configure specialized Motor and Health covers suited for Adyar residents, including 'Engine Protect' for those coastal monsoon days.",
                seniorCitizenFocus: "For the established residents of Besant Nagar and Adyar, we offer personalized pension revivals and doorstep assistance for medical claims.",
                localBranchDetails: "Proximity to the South Chennai Divisional Offices allows us to follow up personally on your pending claims.",
                localFaqs: [
                    {
                        q: "Can I get help with a rejected health claim in Adyar?",
                        a: "Absolutely. We specialize in auditing and overturning rejected claims at major cashless hospitals servicing South Chennai."
                    }
                ]
            }
        },

        // HYDERABAD
        'hyderabad-hitech-city': {
            name: 'Hitech City, Hyderabad',
            slug: 'hyderabad-hitech-city',
            state: 'Telangana',
            areas: ['Hitech City', 'Madhapur', 'Kondapur', 'Jubilee Enclave'],
            description: "In the heart of Hyderabad's IT corridor, we provide hyper-local Insurance Support. Whether you need High-Sum Term Insurance or Super Top-Up health plans, our advisors provide fast-track doorstep service across Hitech City and Madhapur.",
            nearbyCities: ['hyderabad', 'hyderabad-gachibowli', 'hyderabad-banjara-hills'],
            hubContent: {
                itProfessionalFocus: "Hitech City is all about tech. We specialize in configuring Group Health Insurance for growing startups and portable individual policies for highly mobile developers.",
                seniorCitizenFocus: "We assist parents of IT professionals residing in Kondapur with complicated life insurance maturity claims right in their living rooms.",
                localBranchDetails: "We coordinate with major Hyderabad branches to expedite your paperwork locally.",
                localFaqs: [
                    {
                        q: "Are corporate top-ups better than personal health insurance in Hitech City?",
                        a: "Corporate top-ups are cheaper, but personal plans offer lifelong renewability. We recommend a balanced hybrid approach."
                    }
                ]
            }
        },
        'hyderabad-gachibowli': {
            name: 'Gachibowli, Hyderabad',
            slug: 'hyderabad-gachibowli',
            state: 'Telangana',
            areas: ['Gachibowli', 'Financial District', 'Nanakramguda', 'Kokapet'],
            description: "Serving the Financial District and Gachibowli, we offer premium Insurance Support tailored for global professionals. Our expertise includes handling LIC policy revivals and high-value health covers with guaranteed doorstep visits.",
            nearbyCities: ['hyderabad', 'hyderabad-hitech-city'],
            hubContent: {
                itProfessionalFocus: "Gachibowli demands high-flexibility insurance. We offer specialized 'Loss of Income' covers and Super Top-Up health plans tailored for finance and tech professionals.",
                seniorCitizenFocus: "We act as a direct proxy for seniors in Gachibowli, handling frustrating physical paperwork for policy revivals.",
                localBranchDetails: "Strong ties with Hyderabad divisional offices ensure your legacy policies are processed rapidly.",
                localFaqs: [
                    {
                        q: "Can I get doorstep insurance service in Nanakramguda or Kokapet?",
                        a: "Yes, our advisors provide guaranteed home visits across the entire Financial District and Gachibowli belt."
                    }
                ]
            }
        },
        'hyderabad-banjara-hills': {
            name: 'Banjara Hills, Hyderabad',
            slug: 'hyderabad-banjara-hills',
            state: 'Telangana',
            areas: ['Banjara Hills', 'Jubilee Hills', 'Panjagutta', 'Somajiguda'],
            description: "For the elite residential circles of Banjara Hills and Jubilee Hills, we bring traditional trust with modern convenience. Our experts handle LIC policy tracking and comprehensive health portfolio audits with priority doorstep service.",
            nearbyCities: ['hyderabad', 'hyderabad-hitech-city', 'hyderabad-secunderabad'],
            hubContent: {
                itProfessionalFocus: "For the business leaders and founders in Jubilee Hills, we structure comprehensive family floater plans with extensive global networks.",
                seniorCitizenFocus: "Dedicated support for LIC pensioners in Banjara Hills. We facilitate policy audits and doorstep survival certificate submissions.",
                localBranchDetails: "We work directly with the Saifabad Zonal Office to ensure your legacy policies are up-to-date and claims fast-tracked.",
                localFaqs: [
                    {
                        q: "Do you service the entire Jubilee Hills Road No. 36 area?",
                        a: "Yes, our top advisors provide guaranteed doorstep service across all roads in Banjara Hills and Jubilee Hills."
                    }
                ]
            }
        },
        'hyderabad-secunderabad': {
            name: 'Secunderabad, Hyderabad',
            slug: 'hyderabad-secunderabad',
            state: 'Telangana',
            areas: ['Secunderabad', 'Begumpet', 'Tarnaka', 'Malkajgiri'],
            description: "Bridging the gap in Secunderabad, we provide expert LIC advisory and health plan optimization. Our Insurance Support team ensures residents receive swift, localized assistance without having to navigate heavy city traffic.",
            nearbyCities: ['hyderabad', 'hyderabad-banjara-hills'],
            hubContent: {
                itProfessionalFocus: "Serving professionals commuting from Tarnaka and Begumpet, we offer Term insurance with Critical Illness riders.",
                seniorCitizenFocus: "For our valued military veterans and seniors in Secunderabad, we simplify the complex LIC paperwork for pension revivals.",
                localBranchDetails: "Active liaison with local Secunderabad branches. We handle the logistical hurdles of policy settlements personally.",
                localFaqs: [
                    {
                        q: "How to revive an old LIC policy in Secunderabad?",
                        a: "Simply contact us. We will calculate the exact interest and visit your home in Secunderabad to collect the signed forms."
                    }
                ]
            }
        },

        // PUNE
        'pune-hinjewadi': {
            name: 'Hinjewadi, Pune',
            slug: 'pune-hinjewadi',
            state: 'Maharashtra',
            areas: ['Hinjewadi Phase 1-3', 'Wakad', 'Baner', 'Balewadi'],
            description: "In Pune's premier IT hub, we provide localized Insurance Support. From health covers tailored for tech employees in Hinjewadi to doorstep LIC policy revivals in Wakad, our team ensures you get expert advice at your convenience.",
            nearbyCities: ['pune', 'pune-viman-nagar'],
            hubContent: {
                itProfessionalFocus: "Hinjewadi demands robust tech-focused insurance. We provide high-value Term Insurance tailored for software engineers in Phase 1-3.",
                seniorCitizenFocus: "For the parents living in Wakad and Baner, we offer personalized pension revivals and doorstep assistance for medical claims.",
                localBranchDetails: "We coordinate with the central Pune LIC branches to expedite your paperwork, saving you a trip from Wakad.",
                localFaqs: [
                    {
                        q: "Is LIC policy loan available at the Hinjewadi branch?",
                        a: "Yes, but for faster processing, we handle the loan application end-to-end at your doorstep in Wakad or Baner."
                    }
                ]
            }
        },
        'pune-viman-nagar': {
            name: 'Viman Nagar, Pune',
            slug: 'pune-viman-nagar',
            state: 'Maharashtra',
            areas: ['Viman Nagar', 'Kalyani Nagar', 'Koregaon Park', 'Kharadi'],
            description: "Serving the premium Eastern corridor of Pune, we offer hyper-local Insurance Support. Whether you reside in Viman Nagar or run a business in Koregaon Park, our advisors provide fast-track doorstep service across all neighborhoods.",
            nearbyCities: ['pune', 'pune-magarpatta'],
            hubContent: {
                itProfessionalFocus: "We offer specialized motor insurance riders and 'Loss of Income' covers for professionals commuting to Kharadi.",
                seniorCitizenFocus: "Viman Nagar's retirees rely on us for seamless pension certificates and LIC survival benefits tracking right at their doorstep.",
                localBranchDetails: "Strong ties with Pune central divisional offices ensure your legacy policies are processed rapidly.",
                localFaqs: [
                    {
                        q: "Which hospitals in Eastern Pune have the best cashless tie-ups?",
                        a: "We coordinate closely with hospitals like Sahyadri and Ruby Hall to ensure smooth cashless admission if you live in Viman Nagar."
                    }
                ]
            }
        },
        'pune-kothrud': {
            name: 'Kothrud, Pune',
            slug: 'pune-kothrud',
            state: 'Maharashtra',
            areas: ['Kothrud', 'Karve Nagar', 'Bavdhan', 'Deccan Gymkhana'],
            description: "For the established families and institutions in Kothrud, we offer traditional trust with modern convenience. Our experts handle LIC policy tracking, life insurance queries, and comprehensive health portfolio audits with guaranteed doorstep visits.",
            nearbyCities: ['pune', 'pune-hinjewadi'],
            hubContent: {
                itProfessionalFocus: "For the local business community, we structure comprehensive family floater plans with extensive cashless networks.",
                seniorCitizenFocus: "Personalized service for retirees in Kothrud and Karve Nagar. We manage your LIC portfolio with monthly physical touchpoints.",
                localBranchDetails: "We work directly with the Shivajinagar LIC branch to ensure your legacy policies are up-to-date.",
                localFaqs: [
                    {
                        q: "How to handle a death claim registered near Kothrud?",
                        a: "We collect all original documents from your home and process the death claim directly with the branch manager."
                    }
                ]
            }
        },
        'pune-magarpatta': {
            name: 'Magarpatta, Pune',
            slug: 'pune-magarpatta',
            state: 'Maharashtra',
            areas: ['Magarpatta City', 'Hadapsar', 'Amanora Park Town', 'Fatima Nagar'],
            description: "For the IT professionals and families in Magarpatta City and Hadapsar, we bring Insurance Support right to your township. Skip the traffic—our experts handle LIC claim settlements and health insurance queries with guaranteed doorstep visits.",
            nearbyCities: ['pune', 'pune-viman-nagar'],
            hubContent: {
                itProfessionalFocus: "Magarpatta's IT park professionals require global coverage. We provide International Health Covers and high-value Term Insurance.",
                seniorCitizenFocus: "We offer dedicated support for seniors residing in Amanora and Magarpatta, ensuring their mediclaim policies are robust.",
                localBranchDetails: "We handle the logistical hurdles of inter-branch policy transfers for families who have recently relocated to Magarpatta.",
                localFaqs: [
                    {
                        q: "Do you provide insurance advice for Magarpatta residents outside office hours?",
                        a: "Yes, we understand IT schedules. We offer weekend and evening doorstep consultations inside Magarpatta City and Amanora."
                    }
                ]
            }
        },

        // MUMBAI
        'mumbai-andheri': {
            name: 'Andheri, Mumbai',
            slug: 'mumbai-andheri',
            state: 'Maharashtra',
            areas: ['Andheri East', 'Andheri West', 'Vile Parle', 'Jogeshwari'],
            description: "In the bustling hub of Andheri, Mumbai, we provide premium localized Insurance Support. From rapid claim assistance at Kokilaben Hospital to doorstep LIC policy revivals in Vile Parle, our team ensures you get expert advice at your home or office.",
            nearbyCities: ['mumbai', 'mumbai-bandra', 'mumbai-borivali'],
            hubContent: {
                itProfessionalFocus: "Andheri is a commercial powerhouse. We specialize in configuring Group Health Insurance for growing SMEs and studios.",
                seniorCitizenFocus: "For the established residents of Andheri West and Vile Parle, we offer personalized pension revivals and doorstep assistance.",
                localBranchDetails: "We coordinate with the Santacruz and Andheri LIC branches to expedite your paperwork locally.",
                localFaqs: [
                    {
                        q: "How to handle a health insurance claim at Nanavati or Kokilaben hospital?",
                        a: "We provide physical liaison with the TPA desks to fast-track your pre-authorization directly with insurers."
                    }
                ]
            }
        },
        'mumbai-bandra': {
            name: 'Bandra, Mumbai',
            slug: 'mumbai-bandra',
            state: 'Maharashtra',
            areas: ['Bandra West', 'Bandra East', 'BKC', 'Khar'],
            description: "Serving the elite residential and commercial district of Bandra and BKC, we offer hyper-local Insurance Support. Our advisors provide fast-track doorstep service across Bandra West, Khar, and BKC corporate parks.",
            nearbyCities: ['mumbai', 'mumbai-andheri', 'mumbai-south'],
            hubContent: {
                itProfessionalFocus: "BKC demands high-flexibility corporate insurance. We offer specialized Directors Liability covers and Super Top-Up health plans.",
                seniorCitizenFocus: "We assist Bandra's senior residents with complicated life insurance maturity claims right in their living rooms.",
                localBranchDetails: "Strong ties with Mumbai Santacruz divisional offices ensure your legacy policies are processed rapidly.",
                localFaqs: [
                    {
                        q: "Can I get help with a rejected health claim at Lilavati Hospital?",
                        a: "Absolutely. We specialize in auditing and overturning rejected claims at major cashless hospitals like Lilavati in Bandra."
                    }
                ]
            }
        },
        'mumbai-south': {
            name: 'South Mumbai',
            slug: 'mumbai-south',
            state: 'Maharashtra',
            areas: ['Colaba', 'Nariman Point', 'Cuffe Parade', 'Worli', 'Malabar Hill'],
            description: "For the heritage families and corporate leaders in South Mumbai, we offer traditional trust with modern convenience. Our experts handle LIC policy tracking, portfolio audits, and premium health plans with guaranteed doorstep visits across SoBo.",
            nearbyCities: ['mumbai', 'mumbai-bandra'],
            hubContent: {
                itProfessionalFocus: "For corporate leaders in Nariman Point, we structure comprehensive global family floater plans.",
                seniorCitizenFocus: "Dedicated support for VIP pensioners in Cuffe Parade and Malabar Hill. We securely handle physical document submissions to Yogakshema.",
                localBranchDetails: "We work directly with the LIC Yogakshema headquarters to ensure your legacy policies are up-to-date.",
                localFaqs: [
                    {
                        q: "Can I revive my LIC policy at the Fort branch?",
                        a: "Yes, and we handle all the technical paperwork for you, collecting forms directly from your South Mumbai residence."
                    }
                ]
            }
        },
        'mumbai-borivali': {
            name: 'Borivali, Mumbai',
            slug: 'mumbai-borivali',
            state: 'Maharashtra',
            areas: ['Borivali West', 'Borivali East', 'Kandivali', 'Dahisar'],
            description: "For the families in the Western Suburbs, we bring Insurance Support right to your apartment complex. Skip the SV Road traffic—our experts handle LIC claim settlements and health insurance queries with guaranteed doorstep visits across Borivali.",
            nearbyCities: ['mumbai', 'mumbai-andheri'],
            hubContent: {
                itProfessionalFocus: "Borivali's commuting professionals require robust travel and health coverage. We provide customized family plans.",
                seniorCitizenFocus: "We offer dedicated support for parents residing in Borivali West, ensuring their mediclaim policies are robust enough.",
                localBranchDetails: "We handle the logistical hurdles of working with the Western Suburb LIC branches for fast payouts.",
                localFaqs: [
                    {
                        q: "Do you provide insurance advice for Borivali residents on weekends?",
                        a: "Yes, we understand weekday commutes are tough. We offer weekend doorstep consultations in Borivali and Kandivali."
                    }
                ]
            }
        },

        // DELHI
        'delhi-connaught-place': {
            name: 'Connaught Place, Delhi',
            slug: 'delhi-connaught-place',
            state: 'Delhi',
            areas: ['Connaught Place', 'Paharganj', 'Barakhamba Road', 'Gole Market'],
            description: "In the central pulsing heart of Delhi, we provide premium localized Insurance Support. From corporate health covers to doorstep LIC policy revivals near Jeevan Bharti, our team ensures you get expert advice at your office.",
            nearbyCities: ['delhi', 'delhi-south'],
            hubContent: {
                itProfessionalFocus: "We serialize Group Health Insurance for growing firms and portable individual policies for consultants around CP.",
                seniorCitizenFocus: "For the established residents in Central Delhi, we offer personalized pension revivals and doorstep assistance.",
                localBranchDetails: "We coordinate with the Jeevan Bharti and Jeevan Deep LIC branches to expedite your paperwork locally.",
                localFaqs: [
                    {
                        q: "What is the fastest way to settle an LIC claim near CP?",
                        a: "Submission at the Divisional Office is fastest. We provide doorstep collection of bonds in CP to ensure quick payment."
                    }
                ]
            }
        },
        'delhi-dwarka': {
            name: 'Dwarka, Delhi',
            slug: 'delhi-dwarka',
            state: 'Delhi',
            areas: ['Dwarka Sectors 1-23', 'Janakpuri', 'Palam', 'Uttam Nagar'],
            description: "Serving the expansive residential sectors of Dwarka and Janakpuri, we offer hyper-local Insurance Support. Our advisors provide fast-track doorstep service for LIC claims and comprehensive family health plans.",
            nearbyCities: ['delhi', 'delhi-rohini'],
            hubContent: {
                itProfessionalFocus: "Dwarka demands highly robust family insurance. We offer specialized covers and Super Top-Up health plans tailored for professionals residing in the sectors.",
                seniorCitizenFocus: "We assist Dwarka's senior residents with complicated life insurance maturity claims right in their living rooms.",
                localBranchDetails: "Strong ties with West Delhi divisional offices ensure your legacy policies are processed rapidly.",
                localFaqs: [
                    {
                        q: "Can I get health claim support at major hospitals in Dwarka?",
                        a: "Absolutely. We specialize in coordinating with TPA desks at major cashless hospitals across Dwarka and Janakpuri."
                    }
                ]
            }
        },
        'delhi-south': {
            name: 'South Delhi',
            slug: 'delhi-south',
            state: 'Delhi',
            areas: ['Saket', 'Vasant Kunj', 'Hauz Khas', 'Greater Kailash', 'Lajpat Nagar'],
            description: "For the established families and expats in South Delhi, we offer traditional trust with premium convenience. Our experts handle LIC policy tracking, life insurance queries, and premium health portfolio audits with guaranteed doorstep visits.",
            nearbyCities: ['delhi', 'delhi-connaught-place'],
            hubContent: {
                itProfessionalFocus: "For the business community in South Delhi, we structure comprehensive family floater plans with extensive global networks.",
                seniorCitizenFocus: "South Delhi's retirees rely on us for seamless pension certificates and doorstep survival benefits tracking.",
                localBranchDetails: "We work directly with the main Delhi Zonal and Divisional branches to ensure your legacy policies are up-to-date.",
                localFaqs: [
                    {
                        q: "Does your health insurance support include hospitals like Max Saket?",
                        a: "Yes, we have direct coordination channels for cashless settlements at Max Saket and other top South Delhi hospitals."
                    }
                ]
            }
        },
        'delhi-rohini': {
            name: 'Rohini, Delhi',
            slug: 'delhi-rohini',
            state: 'Delhi',
            areas: ['Rohini Sectors', 'Pitampura', 'Shalimar Bagh', 'Prashant Vihar'],
            description: "For the families in Rohini and Pitampura, we bring Insurance Support right to your home. Skip the Ring Road traffic—our experts handle LIC claim settlements and health queries with guaranteed doorstep visits.",
            nearbyCities: ['delhi', 'delhi-dwarka'],
            hubContent: {
                itProfessionalFocus: "North-West Delhi professionals require global coverage. We provide robust health and high-value Term Insurance.",
                seniorCitizenFocus: "We offer dedicated support for parents residing in Rohini, ensuring their mediclaim policies are strong.",
                localBranchDetails: "We handle the logistical hurdles of inter-branch policy transfers for families in North Delhi.",
                localFaqs: [
                    {
                        q: "Can you assist with claims at Fortis Shalimar Bagh?",
                        a: "Yes, our experts assist with the entire pre-auth documentation if your initial request is stuck at North Delhi hospitals."
                    }
                ]
            }
        },

        // KOLKATA
        'kolkata-salt-lake': {
            name: 'Salt Lake, Kolkata',
            slug: 'kolkata-salt-lake',
            state: 'West Bengal',
            areas: ['Salt Lake Sector I-V', 'Kestopur', 'Bidhannagar'],
            description: "In the IT and planned residential hub of Salt Lake, we provide premium localized Insurance Support. Whether you work in Sector V or live in Sector II, our advisors provide fast-track doorstep service for LIC revivals and health plans.",
            nearbyCities: ['kolkata', 'kolkata-new-town'],
            hubContent: {
                itProfessionalFocus: "Salt Lake Sector V is the tech hub. We specialize in configuring Group Health Insurance and Super Top-Ups.",
                seniorCitizenFocus: "For the established residents of Bidhannagar, we offer personalized pension revivals and doorstep assistance.",
                localBranchDetails: "We coordinate with local Salt Lake and New Town LIC branches to expedite your paperwork locally.",
                localFaqs: [
                    {
                        q: "Do you service all sectors of Salt Lake?",
                        a: "Yes, our advisors provide guaranteed doorstep service across all sectors including the Sector V IT hub."
                    }
                ]
            }
        },
        'kolkata-new-town': {
            name: 'New Town, Kolkata',
            slug: 'kolkata-new-town',
            state: 'West Bengal',
            areas: ['New Town Action Area 1-3', 'Rajarhat', 'Eco Park Area'],
            description: "Serving the modern township of New Town and Rajarhat, we offer hyper-local Insurance Support. Our expertise includes handling LIC policy tracking and comprehensive health portfolio audits with guaranteed doorstep visits.",
            nearbyCities: ['kolkata', 'kolkata-salt-lake'],
            hubContent: {
                itProfessionalFocus: "New Town demands high-flexibility insurance for its newly settled corporate workforce. We offer tailored family floater plans.",
                seniorCitizenFocus: "New Town's retired residents rely on us for seamless pension certificates right at their doorstep.",
                localBranchDetails: "We work seamlessly with the newly established branches in Rajarhat for quick processing.",
                localFaqs: [
                    {
                        q: "Can I get doorstep insurance service in Action Area 3?",
                        a: "Absolutely. We cover all action areas of New Town and Rajarhat with home visits."
                    }
                ]
            }
        },
        'kolkata-ballygunge': {
            name: 'Ballygunge, Kolkata',
            slug: 'kolkata-ballygunge',
            state: 'West Bengal',
            areas: ['Ballygunge', 'Gariahat', 'Lansdowne', 'Kalighat'],
            description: "For the heritage families in Ballygunge and South Kolkata, we offer traditional trust with premium convenience. Our experts handle LIC policy tracking, life queries, and health portfolio audits with priority doorstep service.",
            nearbyCities: ['kolkata', 'kolkata-park-street'],
            hubContent: {
                itProfessionalFocus: "For South Kolkata's elite, we structure comprehensive family floater plans with extensive global networks.",
                seniorCitizenFocus: "Ballygunge's seniors rely on us for seamless pension certificates and LIC survival benefits tracking.",
                localBranchDetails: "We work directly with South Kolkata divisional offices to ensure your legacy policies are up-to-date.",
                localFaqs: [
                    {
                        q: "How to handle a death claim registered near Gariahat?",
                        a: "We collect all original documents from your home and process the claim directly, ensuring zero hassle."
                    }
                ]
            }
        },
        'kolkata-park-street': {
            name: 'Park Street, Kolkata',
            slug: 'kolkata-park-street',
            state: 'West Bengal',
            areas: ['Park Street', 'Chowringhee', 'Camac Street', 'Maidan Area'],
            description: "For the corporate heart of Kolkata, we bring Insurance Support right to your office or home near Park Street. Skip the traffic—our experts handle LIC claim settlements and health insurance queries efficiently.",
            nearbyCities: ['kolkata', 'kolkata-ballygunge'],
            hubContent: {
                itProfessionalFocus: "Central Kolkata professionals require global coverage. We provide high-value Term Insurance and Corporate Liability.",
                seniorCitizenFocus: "We offer dedicated support for residents in the central areas, ensuring robust mediclaim policies.",
                localBranchDetails: "We operate closely with Jibon Bima Bhaban and Jeevan Deep to fast-track all central Kolkata claims.",
                localFaqs: [
                    {
                        q: "Can you assist with a policy revival near Chowringhee?",
                        a: "Yes, our central coordination enables us to provide priority tracking of your LIC claims directly at the Divisional level."
                    }
                ]
            }
        },

        // AHMEDABAD
        'ahmedabad-satellite': {
            name: 'Satellite, Ahmedabad',
            slug: 'ahmedabad-satellite',
            state: 'Gujarat',
            areas: ['Satellite', 'Prahlad Nagar', 'Jodhpur', 'Ramdev Nagar'],
            description: "In the premium western suburb of Satellite, we provide localized Insurance Support. From health covers tailored for business owners to doorstep LIC policy revivals, our team ensures expert advice at your convenience.",
            nearbyCities: ['ahmedabad', 'ahmedabad-vastrapur'],
            hubContent: {
                itProfessionalFocus: "Satellite and Prahlad Nagar demand robust business and family insurance portfolios.",
                seniorCitizenFocus: "For the families living in Satellite, we offer personalized pension revivals and doorstep assistance for medical claims.",
                localBranchDetails: "We coordinate with the Jeevan Prakash (Satellite) LIC branch to expedite your paperwork locally.",
                localFaqs: [
                    {
                        q: "Is LIC policy loan available at the Satellite branch?",
                        a: "Yes, and we handle the loan application end-to-end at your doorstep in Prahlad Nagar or Satellite."
                    }
                ]
            }
        },
        'ahmedabad-vastrapur': {
            name: 'Vastrapur, Ahmedabad',
            slug: 'ahmedabad-vastrapur',
            state: 'Gujarat',
            areas: ['Vastrapur', 'Bodakdev', 'Thaltej', 'Gurukul'],
            description: "Serving the upscale neighborhoods of Vastrapur and Bodakdev, we offer hyper-local Insurance Support. Whether you reside near the lake or SG Highway, our advisors provide fast-track doorstep service.",
            nearbyCities: ['ahmedabad', 'ahmedabad-satellite', 'ahmedabad-sg-highway'],
            hubContent: {
                itProfessionalFocus: "We offer specialized motor insurance riders and robust health covers for professionals in Bodakdev.",
                seniorCitizenFocus: "Vastrapur's retirees rely on us for seamless pension certificates and LIC benefits tracking at their doorstep.",
                localBranchDetails: "Strong ties with West Ahmedabad divisional offices ensure your legacy policies are processed rapidly.",
                localFaqs: [
                    {
                        q: "Which hospitals in Western Ahmedabad have the best cashless tie-ups?",
                        a: "We coordinate closely with top hospitals across Bodakdev and Thaltej to ensure smooth cashless admission."
                    }
                ]
            }
        },
        'ahmedabad-sg-highway': {
            name: 'SG Highway, Ahmedabad',
            slug: 'ahmedabad-sg-highway',
            state: 'Gujarat',
            areas: ['SG Highway', 'Gota', 'Sindhu Bhavan Road', 'Makarba'],
            description: "For the fast-growing corporate and residential stretch of SG Highway, we offer modern Insurance Support. Our experts handle LIC policy tracking, commercial insurance, and health portfolio audits with guaranteed doorstep visits.",
            nearbyCities: ['ahmedabad', 'ahmedabad-vastrapur'],
            hubContent: {
                itProfessionalFocus: "For the corporate offices along Sindhu Bhavan Road, we structure comprehensive group health and liability plans.",
                seniorCitizenFocus: "Personalized service for families in Gota and Makarba. We manage your LIC portfolio with ease.",
                localBranchDetails: "We work directly with relevant LIC branches to ensure your corporate and personal policies are up-to-date.",
                localFaqs: [
                    {
                        q: "How to handle a commercial claim along SG Highway?",
                        a: "We provide dedicated commercial support for businesses operating across the SG Highway and Sindhu Bhavan corridor."
                    }
                ]
            }
        },
        'ahmedabad-maninagar': {
            name: 'Maninagar, Ahmedabad',
            slug: 'ahmedabad-maninagar',
            state: 'Gujarat',
            areas: ['Maninagar', 'Kankaria', 'Ghodasar', 'Isanpur'],
            description: "For the established families in Maninagar and South Ahmedabad, we bring Insurance Support right to your home. Our experts handle LIC claim settlements and health insurance queries with guaranteed doorstep visits.",
            nearbyCities: ['ahmedabad', 'ahmedabad-satellite'],
            hubContent: {
                itProfessionalFocus: "Maninagar requires comprehensive family coverage. We provide reliable health and life Insurance Support.",
                seniorCitizenFocus: "We offer dedicated support for seniors residing in Maninagar, ensuring their mediclaim policies are robust.",
                localBranchDetails: "We handle the logistical hurdles of inter-branch policy transfers for families in South Ahmedabad.",
                localFaqs: [
                    {
                        q: "Do you provide insurance advice for Maninagar residents easily?",
                        a: "Yes, we offer convenient doorstep consultations across Maninagar and Kankaria."
                    }
                ]
            }
        }
    };

    const keysToAddStr = Object.keys(newHubs).map(key => {
        return "    '" + key + "': " + JSON.stringify(newHubs[key], null, 4).replace(/\n/g, '\n    ') + ",";
    }).join('\n');

    // Find the end of export const cityData: Record<string, CityData> = { ... }
    const match = content.match(/export const cityData: Record<string, CityData> = \{/);
    if (!match) throw new Error("Could not find cityData definition");

    const startIndex = match.index;
    
    // Simple bracket matching to find the end
    let bracketCount = 0;
    let endIndex = -1;
    for (let i = startIndex; i < content.length; i++) {
        if (content[i] === '{') bracketCount++;
        else if (content[i] === '}') {
            bracketCount--;
            if (bracketCount === 0) {
                endIndex = i;
                break;
            }
        }
    }

    if (endIndex === -1) throw new Error("Could not find end of cityData object");

    // Insert keys right before the last closing brace
    const newContent = content.substring(0, endIndex) + "\n" + keysToAddStr + "\n" + content.substring(endIndex);
    fs.writeFileSync('src/data/cityData.ts', newContent);
    console.log("Added " + Object.keys(newHubs).length + " Tier-1 hyper-local hubs successfully!");
}

update().catch(console.error);
