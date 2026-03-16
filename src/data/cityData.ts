import { contactConfig } from "./contact";

export interface CityData {
    name: string;
    slug: string; // url friendly
    state: string;
    areas: string[];
    description?: string;
    phone?: string;
    coordinates?: [number, number]; // [lat, lng]
    licOffice?: {
        name: string;
        address: string;
    };
    nearbyCities?: string[];
    hubContent?: {
        itProfessionalFocus?: string;
        seniorCitizenFocus?: string;
        localBranchDetails?: string;
        localFaqs?: { q: string, a: string }[];
    };
}

export const cityData: Record<string, CityData> = {
    bangalore: {
        name: 'Bangalore',
        slug: 'bangalore',
        state: 'Karnataka',
        areas: [
            'Indiranagar', 'Koramangala', 'Jayanagar', 'JP Nagar', 'Whitefield',
            'HSR Layout', 'Electronic City', 'Hebbal', 'Malleshwaram', 'BTM Layout',
            'Bellandur', 'Marathahalli', 'Yelahanka', 'Banashankari', 'Rajajinagar',
            'Basavanagudi', 'RT Nagar', 'KR Puram', 'Sarjapur Road', 'Bannerghatta Road',
            'RR Nagar', 'Vijayanagar', 'Vidyaranyapura', 'Sahakarnagar', 'Mahadevapura',
            'Brookefield', 'Kalyan Nagar', 'Kammanahalli', 'Frazer Town', 'Benson Town',
            'Jeevan Bima Nagar', 'Manyata Tech Park', 'Bagmane Tech Park', 'Brigade Gateway',
            'MG Road', 'Church Street', 'Nelamangala'
        ],
        description: "As India's Silicon Valley, Bangalore sees high tech-professional density. From the IT corridors of Outer Ring Road, Manyata Tech Park, and Bagmane Tech Park to the landmark Brigade Gateway and residential hubs of HSR Layout, we provide hyper-local Insurance Support. Skip the traffic at Silk Board—our certified advisors offer doorstep service for policy renewals, death claims, and health insurance disputes. We are intimately familiar with major LIC branches across the city, including the main Jeevan Prakash Building on JC Road, the Jeevan Bima Nagar hub, and localized branches in Bangalore South, ensuring your paperwork is processed rapidly without you ever needing to visit the branch. Specializing in Employee Benefits and Corporate Wellness plans for the city's vast startup ecosystem.",
        phone: contactConfig.phoneFull,
        coordinates: [12.9716, 77.5946],
        licOffice: {
            name: "LIC Bangalore Division I & II",
            address: "Jeevan Prakash, J.C. Road, Bangalore - 560002"
        },
        nearbyCities: ['mysore', 'hosur', 'tumkur', 'belagavi'],
        hubContent: {
            itProfessionalFocus: "Bangalore's IT corridor—from Electronic City and Whitefield to the tech parks of Manyata and Bagmane—requires specialized Employee Benefits and International Health Covers. We provide DOORSTEP service to your office or residence in HSR Layout, Koramangala, and Hebbal, ensuring your high-value policies are managed without city traffic hurdles.",
            seniorCitizenFocus: "For the retired professionals in Jayanagar, JP Nagar, and Malleshwaram, we offer personalized pension planning and premium-waiver health insurance strategies that ensure a dignified, worry-free retirement in the Garden City.",
            localBranchDetails: "Our team maintains direct coordination with the LIC Divisional Office at J.C. Road (Jeevan Prakash) and active Liaison with Jayanagar, Rajajinagar, and Jeevan Bima Nagar branches to fast-track your maturity claims and policy revivals.",
            localFaqs: [
                {
                    q: "Which is the best health insurance plan for IT employees in Bangalore?",
                    a: "IT professionals in Bangalore should look for plans with high sum assured, restoration benefits, and wellness incentives. Since most companies provide basic group cover, we recommend a 'Top-Up' or 'Super Top-Up' plan to cover major surgeries and critical illnesses not fully covered by employer plans."
                },
                {
                    q: "How to settle an LIC death claim if the branch is in another city but I stay in Bangalore?",
                    a: "You don't need to travel! We facilitate the 'Transfer of Records' or local facilitation through the Bangalore Divisional Office on J.C. Road. Our advisors handle the inter-branch communication and documentation at your doorstep."
                },
                {
                    q: "Can I get doorstep insurance service in areas like Sarjapur or Whitefield?",
                    a: "Yes, we provide guaranteed home visits for all insurance-related paperwork across Sarjapur, Whitefield, Marathahalli, and Varthur. You skip the Silk Board or ORR traffic; our certified advisor comes to you."
                }
            ]
        }
    },
    chennai: {
        name: 'Chennai',
        slug: 'chennai',
        state: 'Tamil Nadu',
        areas: [
            'T Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'Mylapore', 'Tambaram', 'Guindy', 'Porur',
            'OMR IT Corridor', 'ECR Road', 'Anna Nagar West', 'Taramani', 'Sholinganallur', 'Perungudi',
            'Besant Nagar Avenue', 'Nungambakkam', 'Mount Road District', 'Anna Nagar East'
        ],
        description: "Given Chennai's coastal geography and monsoon history, especially in low-lying areas like Velachery and Adyar, 'flood-protection' in motor and property insurance is a top priority. Our Insurance Support team helps residents in Anna Nagar and T. Nagar with localized claim support and LIC policy management. We coordinate closely with the LIC Mount Road (Jeevan Prakash) and Greams Road offices, ensuring your assets are resilient against the Bay of Bengal's unpredictability with professional doorstep advisory across the OMR IT Expressway and ECR corridors. We specialize in comprehensive Marine and Transit insurance for businesses near the Chennai Port.",
        phone: contactConfig.phoneFull,
        coordinates: [13.0827, 80.2707],
        licOffice: {
            name: "LIC Chennai Division I & II",
            address: "Jeevan Prakash, 102, Anna Salai, Chennai - 600002"
        },
        nearbyCities: ['vellore', 'kanchipuram', 'pondicherry']
    },
    vellore: {
        name: 'Vellore',
        slug: 'vellore',
        state: 'Tamil Nadu',
        areas: ['Katpadi', 'Gandhinagar', 'Sathuvachari', 'Vellore Fort Area', 'Bagayam', 'CMC Area'],
        description: "Vellore is a major educational and medical hub. We provide specialized Insurance Support for students, professionals, and families. Our advisors assist with LIC services near Katpadi and Sathuvachari (Jeevan Prakash), ensuring residents and visitors have expert health and life insurance guidance."
    },
    hosur: {
        name: 'Hosur',
        slug: 'hosur',
        state: 'Tamil Nadu',
        areas: ['Industrial Area', 'Rayakottai Road', 'Bagalur Road', 'SIPCOT Phase 1', 'SIPCOT Phase 2'],
        description: "As a booming industrial town, Hosur has specific needs for SME and workman compensation insurance. Our Insurance Support team guides local businesses and employees in securing their assets. We provide doorstep LIC services near the Bagalur Road office for personal and commercial policy management."
    },
    kanchipuram: {
        name: 'Kanchipuram',
        slug: 'kanchipuram',
        state: 'Tamil Nadu',
        areas: ['Temple City', 'Silk Saree Market Area', 'Little Kanchi', 'Orikkai'],
        description: "Heritage meets modernity in Kanchipuram. Whether you run a traditional business or need personal life cover, our Insurance Support ensures your legacy is protected. We assist locals near the LIC Gandhi Road office with policy renewals and claim recovery."
    },
    mysore: {
        name: 'Mysore',
        slug: 'mysore',
        state: 'Karnataka',
        areas: ['Vijayanagar', 'Gokulam', 'Saraswathipuram', 'Kuvempunagar', 'J.P. Nagar', 'Jayalakshmipuram'],
        description: "Mysore's peaceful life deserves refined protection. We offer tailored pension and retirement Insurance Support for the city's residents. Our experts provide doorstep LIC services near the Jeevan Prakash (Bannimantap) office, ensuring your future is stress-free and secure."
    },
    coimbatore: {
        name: 'Coimbatore',
        slug: 'coimbatore',
        state: 'Tamil Nadu',
        areas: ['Gandhipuram', 'RS Puram', 'Peelamedu', 'Saravanampatti', 'Race Course', 'Vadavalli'],
        description: "Known as the Manchester of South India, Coimbatore's textile and engineering sectors need robust Insurance Support. We assist locals with motor, health, and life insurance. Our team coordindates with the LIC Trichy Road office to provide professional doorstep service across Gandhipuram and RS Puram."
    },
    salem: {
        name: 'Salem',
        slug: 'salem',
        state: 'Tamil Nadu',
        areas: ['Fairlands', 'Hasthampatti', 'Ammapet', 'Suramangalam', 'Seelanaickenpatti'],
        description: "In the steel and textile hub of Salem, securing assets is a priority. We assist locals with motor, health, and property Insurance Support to safeguard their wealth. Get expert LIC advice near the Jeevan Prakash office, with doorstep assistance for all your claim and renewal needs."
    },
    tirupati: {
        name: 'Tirupati',
        slug: 'tirupati',
        state: 'Andhra Pradesh',
        areas: ['Alipiri', 'Tirumala Bypass', 'Renigunta Road', 'Bairagipatteda', 'K.T. Road'],
        description: "For the residents of the spiritual capital, we offer pure term insurance and endowment Insurance Support. We assist families near the LIC Prakasam Road office, ensuring the financial sanctity and security of your loved ones with expert local guidance."
    },
    hyderabad: {
        name: 'Hyderabad',
        slug: 'hyderabad',
        state: 'Telangana',
        areas: [
            'Banjara Hills', 'Jubilee Hills', 'Gachibowli DLF', 'Kukatpally', 'Secunderabad',
            'Hitech City Phase 2', 'Kondapur', 'Madhapur', 'Manikonda', 'Financial District',
            'Uppal', 'LB Nagar', 'Ameerpet', 'Begumpet', 'Jubilee Hills Road No. 36', 'Charminar Area'
        ],
        description: "In the bustling IT hub of Hyderabad, specifically serving the Hitech City, Financial District, and Gachibowli corridors, we provide comprehensive health and term life Insurance Support tailored for global professionals. Our expertise includes handling policy revivals and maturity claims near the LIC Saifabad Zonal Office and Basheerbagh hub. We bridge the gap between digital convenience and doorstep service for residents in Secunderabad and the elite circles of Jubilee Hills Road No. 36, also providing traditional heritage policy support near the Charminar area. Our advisors are experts in International Health Covers for the city's outbound consultant population.",
        phone: "+91-9962536848",
        coordinates: [17.3850, 78.4867],
        licOffice: {
            name: "LIC Hyderabad Divisional Office",
            address: "Jeevan Prakash, Saifabad, Hyderabad - 500063"
        },
        nearbyCities: ['warangal', 'vijayawada', 'vizag']
    },
    pune: {
        name: 'Pune',
        slug: 'pune',
        state: 'Maharashtra',
        areas: [
            'Koregaon Park Lane 7', 'Kalyani Nagar', 'Viman Nagar', 'Hinjewadi Phase 2', 'Kothrud',
            'Magarpatta City North', 'Wakad', 'Baner High Street', 'Balewadi', 'Pimple Saudagar',
            'Hadapsar', 'Kharadi'
        ],
        description: "Pune's dynamic lifestyle demands robust Insurance Support. From motor insurance for your daily commute to Hinjewadi IT Park Phase 1-3 or Magarpatta City, to health plans for your family in Baner High Street or Pimple Saudagar, we cover all your needs. We provide specialized LIC policy services with proximity to the LIC Model Colony and Jeevan Tara Shivajinagar offices, ensuring fast-track claim processing in the Oxford of the East, including the premium residential corridors of Koregaon Park. We also focus on Professional Indemnity insurance for the city's extensive manufacturing and design consultant community.",
        phone: "+91-9962536848"
    },
    mumbai: {
        name: 'Mumbai',
        slug: 'mumbai',
        state: 'Maharashtra',
        areas: [
            'Andheri', 'Bandra Kurla Complex (BKC)', 'Juhu Beach Area', 'Powai', 'Colaba Causeway',
            'Dadar', 'Nariman Point', 'Lower Parel', 'Worli Sea Face', 'Malad West', 'Kandivali East',
            'Borivali West', 'Cuffe Parade'
        ],
        description: "In the City of Dreams, financial security must keep pace with the fast life. From South Mumbai's corporate corridors at Nariman Point and Cuffe Parade to the BKC financial hub and residential circles of Juhu and Bandra, our Insurance Support team provides doorstep assistance. We specialize in LIC policy maturity and revival, coordinating with the Yogakshema (Nariman Point) and Santacruz hubs, alongside comprehensive health plans that cover Mumbai's top-tier medical facilities near the iconic Gateway of India. Expert advisors for Keyman Insurance and Director's Liability for the city's corporate leaders.",
        phone: "+91-9962536848",
        coordinates: [19.0760, 72.8777],
        licOffice: {
            name: "LIC Mumbai Divisional Office I, II, III & IV",
            address: "Jeevan Prakash, Sir P.M. Road, Fort, Mumbai - 400001"
        },
        nearbyCities: ['thane', 'pune', 'nashik', 'aurangabad']
    },
    ahmedabad: {
        name: 'Ahmedabad',
        slug: 'ahmedabad',
        state: 'Gujarat',
        areas: [
            'Satellite', 'Bodakdev', 'Vastrapur', 'Maninagar', 'Navrangpura', 'Prahlad Nagar Corporate Road',
            'Sindhu Bhavan Road', 'Gota', 'Chandkheda', 'SG Highway'
        ],
        description: "As a premier business and industrial hub, Ahmedabad requires high-performance Insurance Support. We assist entrepreneurs and families from the corporate offices of Prahlad Nagar and SG Highway to the residential circles of Sindhu Bhavan Road and Satellite. Our team provides specialized LIC advisory near the Relief Road and Jeevan Prakash (Satellite) hubs, offering doorstep claim assistance and policy revival services across the city's rapidly expanding western corridors."
    },
    kolkata: {
        name: 'Kolkata',
        slug: 'kolkata',
        state: 'West Bengal',
        areas: [
            'Salt Lake Sector V', 'New Town Action Area 1', 'Park Street Area', 'Ballygunge Circular Road',
            'Howrah', 'Behala', 'Garia', 'Tollygunge', 'Dum Dum', 'Kasba', 'Lake Town'
        ],
        description: "In the City of Joy, don't let financial worries dampen your spirit. Our expert Insurance Support advisors in Kolkata help you choose the best life and health insurance plans. We provide local assistance for LIC policyholders near Jeevan Deep (Chowringhee) and Jibon Bima Bhaban, offering doorstep recovery for rejected claims and policy revivals across the Salt Lake IT hub and the historical residential corridors of Ballygunge and Park Street.",
    },
    lucknow: {
        name: 'Lucknow',
        slug: 'lucknow',
        state: 'Uttar Pradesh',
        areas: ['Gomti Nagar', 'Hazratganj', 'Alambagh', 'Indira Nagar', 'Jankipuram', 'Aashiana', 'Mahanagar'],
        description: "Protecting your family's heritage in Lucknow is easier with our Insurance Support. We offer personalized LIC policy services and health insurance guidance right at your doorstep. We are active across Gomti Nagar and Hazratganj, coordinating with the main LIC Jeevan Bhawan office to expedite your maturity claims and policy revivals."
    },
    jaipur: {
        name: 'Jaipur',
        slug: 'jaipur',
        state: 'Rajasthan',
        areas: ['Vaishali Nagar', 'Mansarovar', 'Malviya Nagar', 'C Scheme', 'Jagatpura', 'Raja Park', 'Bani Park'],
        description: "In the Pink City, safeguard your lifestyle with our premium Insurance Support solutions. We assist with vehicle, property, and life insurance needs across Jaipur. Our advisors provide expert guidance near the LIC Bhawani Singh Road office, ensuring your claims are handled with local expertise."
    },
    chandigarh: {
        name: 'Chandigarh',
        slug: 'chandigarh',
        state: 'Chandigarh',
        areas: ['Sector 17', 'Sector 35', 'Manimajra', 'Zirakpur', 'Panchkula', 'Mohali Phase 7', 'Sector 22'],
        description: "Chandigarh's planned living deserves planned financial security. We provide expert Insurance Support for retirement planning and health coverage in the City Beautiful. We offer doorstep LIC services near Sector 17 and Sector 35 hubs, ensuring residents of Chandigarh, Mohali, and Panchkula get professional advice without the commute."
    },
    kochi: {
        name: 'Kochi',
        slug: 'kochi',
        state: 'Kerala',
        areas: ['Edappally', 'Kaloor', 'Fort Kochi', 'Kakkanad', 'Tripunithura', 'Aluva', 'Palarivattom'],
        description: "In God's Own Country, ensure your family's well-being with our comprehensive Insurance Support. We specialize in NRI investment options and local health coverage in Kochi. Our team coordinates with the LIC M.G. Road (Jeevan Prakash) office, providing doorstep support for claim recovery and policy management."
    },
    trivandrum: {
        name: 'Trivandrum',
        slug: 'trivandrum',
        state: 'Kerala',
        areas: ['Technopark', 'Kowdiar', 'Pattom', 'Vellayambalam', 'Kazhakoottam', 'Peroorkada'],
        description: "Secure your future in Kerala's capital with localized Insurance Support. We offer reliable LIC support near the Pattom office and health insurance advice to government employees and private professionals across Trivandrum, from Kowdiar to the Technopark hub."
    },
    madurai: {
        name: 'Madurai',
        slug: 'madurai',
        state: 'Tamil Nadu',
        areas: ['KK Nagar', 'Anna Nagar', 'TVS Nagar', 'Simmakkal', 'K.Pudur', 'Sellur'],
        description: "In the cultural capital of Madurai, we ensure your traditions are protected. Get best-in-class life and term Insurance Support from trusted local advisors. We provide doorstep LIC services near the Simmakkal area, assisting families with claim recovery and policy renewals."
    },
    trichy: {
        name: 'Trichy',
        slug: 'trichy',
        state: 'Tamil Nadu',
        areas: ['Thillai Nagar', 'Srirangam', 'Cantonment', 'K.K. Nagar', 'Lalgudi'],
        description: "Trichy's growing economy needs solid financial backing. Our Insurance Support team helps residents and businesses secure their future with tailored strategies. We are active near the LIC Thillai Nagar office, providing local expertise for policy revivals and maturity claims."
    },
    pondicherry: {
        name: 'Pondicherry',
        slug: 'pondicherry',
        state: 'Puducherry',
        areas: ['White Town', 'Lawspet', 'Reddiarpalayam', 'Ariyankuppam'],
        description: "Enjoy the serene life in Pondicherry while we handle your insurance worries. Our Insurance Support team provides hassle-free doorstep assistance for vehicle renewals, LIC policy checks near Mission Street, and health covers."
    },
    vijayawada: {
        name: 'Vijayawada',
        slug: 'vijayawada',
        state: 'Andhra Pradesh',
        areas: ['Benz Circle', 'Patamata', 'Gunadala', 'Bhavanipuram', 'One Town'],
        description: "As a commercial hub, Vijayawada demands smart financial planning. Our Insurance Support advisors help you navigate LIC and health options near the Benz Circle hub, ensuring your family and business are fully protected."
    },
    vizag: {
        name: 'Visakhapatnam',
        slug: 'vizag',
        state: 'Andhra Pradesh',
        areas: ['MVP Colony', 'Gajuwaka', 'Seethammadhara', 'Siripuram', 'Madhurawada', 'Rushikonda'],
        description: "Protect your home and health in the port city of Vizag. We offer specialized Insurance Support for the coastal community. Our team coordinates with the LIC Jeevan Prakash (Asilmetta) office, providing doorstep recovery for rejected claims and policy management."
    },
    surat: {
        name: 'Surat',
        slug: 'surat',
        state: 'Gujarat',
        areas: ['Adajan', 'Vesu', 'Piplod', 'Varachha', 'Katargam', 'Dumas Road', 'City Light'],
        description: "In the Diamond City, secure your valuable assets with our help. Our Insurance Support team provides top-notch business and family solutions for Surat's entrepreneurs. We offer specialized LIC advisory near the Adajan and Vesu hubs, ensuring doorstep service for policy renewals and claim recovery."
    },
    nagpur: {
        name: 'Nagpur',
        slug: 'nagpur',
        state: 'Maharashtra',
        areas: ['Dharampeth', 'Civil Lines', 'Manish Nagar', 'Sadar', 'Ramdaspeth', 'Sitabuldi'],
        description: "Nagpur's central location makes it a logistics hub. We offer specialized transit and motor Insurance Support, along with personal life cover. Our advisors are active near the LIC Jeevan Prakash (Sadar) office, providing local expertise for claim settlements and policy management across the Orange City."
    },
    indore: {
        name: 'Indore',
        slug: 'indore',
        state: 'Madhya Pradesh',
        areas: ['Vijay Nagar', 'Palasia', 'Saket', 'Rajwada', 'Bhawarkua', 'Rau'],
        description: "Cleanest city, cleanest finances. Our Insurance Support team helps Indoris maintain financial hygiene with the right health and life portfolios. We provide doorstep LIC services near the Vijay Nagar and Palasia hubs, ensuring your family stays secure with expert local guidance."
    },
    bhopal: {
        name: 'Bhopal',
        slug: 'bhopal',
        state: 'Madhya Pradesh',
        areas: ['Arera Colony', 'MP Nagar', 'Kolar Road', 'New Market', 'Bairagarh'],
        description: "In the City of Lakes, ensure your family stays afloat during tough times. Our Insurance Support advisors provide compassionate assistance for claim settlement and policy revival near the LIC Arera Colony and MP Nagar offices, offering professional doorstep service across Bhopal."
    },
    patna: {
        name: 'Patna',
        slug: 'patna',
        state: 'Bihar',
        areas: ['Boring Road', 'Kankarbagh', 'Rajendra Nagar', 'Bailey Road', 'Patliputra Colony'],
        description: "Patna's historic legacy deserves future protection. We bring trusted LIC and general Insurance Support to every household in the capital. Our team coordinates with the LIC Fraser Road office, ensuring doorstep service for policy revivals and maturity claims across Boring Road and Kankarbagh."
    },
    delhi: {
        name: 'Delhi',
        slug: 'delhi',
        state: 'Delhi',
        areas: [
            'Connaught Place - Block B', 'Dwarka Sector 10', 'Rohini Sector 7', 'Saket District Centre',
            'Vasant Kunj', 'Janakpuri District Center', 'Lajpat Nagar', 'Karol Bagh', 'Okhla',
            'Pitampura', 'Mayur Vihar', 'Laxmi Nagar'
        ],
        description: "In the heart of the nation, we offer capital-grade Insurance Support. Our advisors are active across NCR, from Connaught Place and Saket to the dense residential sectors of Dwarka and Rohini. We provide expert help with complex LIC claim settlements near the Jeevan Deep (Parliament Street) and Jeevan Bharti offices, ensuring your family stays secure amidst the city's fast-paced growth and air-quality-linked health challenges across the entire Delhi-NCR region. We provide specialized Critical Illness covers tailored for the specific lifestyle risks of metropolitan life.",
        phone: "+91-9962536848",
        coordinates: [28.6139, 77.2090],
        licOffice: {
            name: "LIC Delhi Divisional Office I, II & III",
            address: "Jeevan Prakash, 25, Kasturba Gandhi Marg, New Delhi - 110001"
        },
        nearbyCities: ['jaipur', 'chandigarh', 'lucknow', 'agra', 'kanpur']
    },
    agra: {
        name: 'Agra',
        slug: 'agra',
        state: 'Uttar Pradesh',
        areas: ['Tajganj', 'Sanjay Place', 'Kamla Nagar', 'Dayal Bagh', 'Civil Lines'],
        description: "Protect your home and heritage in the city of the Taj. Our Insurance Support team offers comprehensive property and life solutions. We provide local LIC assistance near Sanjay Place, ensuring Agra's residents and businesses have expert support for all their insurance needs."
    },
    ajmer: {
        name: 'Ajmer',
        slug: 'ajmer',
        state: 'Rajasthan',
        areas: ['Vaishali Nagar', 'Civil Lines', 'Pushkar Road', 'Adarsh Nagar'],
        description: "Secure your pilgrimage of life with our trusted Insurance Support in Ajmer. We provide seamless doorstep assistance for all your general and life insurance needs, coordinating with the local LIC Kutchery Road office for policy revivals and claims."
    },
    amritsar: {
        name: 'Amritsar',
        slug: 'amritsar',
        state: 'Punjab',
        areas: ['Ranjit Avenue', 'Lawrence Road', 'Model Town', 'Golden Temple Area', 'Majitha Road'],
        description: "In the Holy City, ensure your family's prosperity is well-guarded. We bring top-tier health and term Insurance Support to your doorstep in Amritsar. Our advisors assist with LIC services near the Jeevan Prakash office, providing local expertise for claim settlements and policy management."
    },
    dehradun: {
        name: 'Dehradun',
        slug: 'dehradun',
        state: 'Uttarakhand',
        areas: ['Rajpur Road', 'Clement Town', 'Vasant Vihar', 'Prem Nagar', 'Dalanwala', 'Balliwala'],
        description: "Retire peacefully in the Doon Valley with our specialized pension Insurance Support. We also offer robust vehicle insurance for the hilly terrains of Dehradun. Our experts provide doorstep LIC services near Rajpur Road, ensuring your financial goals are met with local expertise."
    },
    jalandhar: {
        name: 'Jalandhar',
        slug: 'jalandhar',
        state: 'Punjab',
        areas: ['Model Town', 'Jalandhar Cantt', 'Urban Estate', 'Adarsh Nagar', 'Civil Lines'],
        description: "For the NRI hub of Punjab, we offer specialized investment and Insurance Support management. Secure your assets in Jalandhar with our expert local advisors, coordinating with the LIC Jeevan Prakash office for seamless policy and claim support."
    },
    kanpur: {
        name: 'Kanpur',
        slug: 'kanpur',
        state: 'Uttar Pradesh',
        areas: ['Swaroop Nagar', 'Civil Lines', 'Kidwai Nagar', 'Kakadeo', 'Azad Nagar'],
        description: "As the industrial capital of UP, Kanpur needs strong commercial insurance. Our Insurance Support team protects your factories and families alike. We offer doorstep LIC services near the Jeevan Bima Marg hub, ensuring fast-track claim processing and policy management for the industrial community."
    },
    ludhiana: {
        name: 'Ludhiana',
        slug: 'ludhiana',
        state: 'Punjab',
        areas: ['Sarabha Nagar', 'Model Town', 'Civil Lines', 'Ferozepur Road'],
        description: "Protect your business in India's Manchester. We provide workmen compensation and industrial insurance alongside personal health covers in Ludhiana."
    },
    meerut: {
        name: 'Meerut',
        slug: 'meerut',
        state: 'Uttar Pradesh',
        areas: ['Shastri Nagar', 'Ganga Nagar', 'Pallav Puram', 'Modipuram'],
        description: "From sports goods to steady growth, Meerut is rising. Secure your journey with our reliable motor and life Insurance Support. We assist locals near the LIC Prabhat Nagar office, providing professional advice for policy renewals and claim settlements."
    },
    varanasi: {
        name: 'Varanasi',
        slug: 'varanasi',
        state: 'Uttar Pradesh',
        areas: ['Lanka', 'Sigra', 'Mahmoorganj', 'Cantonment', 'Sarnath', 'Bhelupur'],
        description: "In the world's oldest living city, ensure your legacy lives on. We offer dedicated Insurance Support, life plans, and endowment strategies for families in Kashi. Our advisors assist with LIC services near the Bhelupur office, providing doorstep recovery for rejected claims and policy revivals."
    },
    srinagar: {
        name: 'Srinagar',
        slug: 'srinagar',
        state: 'Jammu and Kashmir',
        areas: ['Rajbagh', 'Hyderpora', 'Lal Chowk', 'Sonwar', 'Bemina'],
        description: "Safeguard your Shikaras and homes in Paradise on Earth. We provide essential property, health, and life Insurance Support in Srinagar. Our experts offer doorstep LIC advisory near Residency Road, ensuring your family stays secure across the valley."
    },
    jammu: {
        name: 'Jammu',
        slug: 'jammu',
        state: 'Jammu and Kashmir',
        areas: ['Gandhi Nagar', 'Trikuta Nagar', 'Channi Himmat', 'Rehari', 'Bari Brahmana'],
        description: "In the City of Temples, secure your family's future with our comprehensive term and life Insurance Support. We assist locals near the LIC Jeevan Prakash office, providing expert local guidance for claim settlements and policy management in Jammu."
    },
    goa: {
        name: 'Goa',
        slug: 'goa',
        state: 'Goa',
        areas: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Porvorim', 'Calangute', 'Candolim'],
        description: "Live the Susegad life without worries. Our Insurance Support team handles your travel, vehicle, and health needs across the beautiful state of Goa. We provide doorstep LIC services near Panaji and Margao, ensuring your policies are managed with local expertise."
    },
    nashik: {
        name: 'Nashik',
        slug: 'nashik',
        state: 'Maharashtra',
        areas: ['College Road', 'Gangapur Road', 'Indira Nagar', 'Panchavati', 'Pathardi Phata', 'Govind Nagar'],
        description: "In the Wine Capital of India, secure your vineyards and vehicles alike. Our Insurance Support team offers specialized agricultural and personal solutions in Nashik. We provide doorstep LIC services near the Nashik Road and Jeevan Prakash offices, ensuring your claims are settled with local expertise."
    },
    rajkot: {
        name: 'Rajkot',
        slug: 'rajkot',
        state: 'Gujarat',
        areas: ['Kalawad Road', '150 Feet Ring Road', 'Amin Marg', 'Yagnik Road', 'Raiya Road'],
        description: "Drive your business in Rajkot with confidence. We provide SME and industrial Insurance Support solutions alongside personal term plans. Our advisors help you navigate LIC options near Tagore Road, ensuring doorstep service for policy renewals and maturity claims."
    },
    thane: {
        name: 'Thane',
        slug: 'thane',
        state: 'Maharashtra',
        areas: ['Ghodbunder Road', 'Vartak Nagar', 'Naupada', 'Kolshet', 'Hiranandani Estate', 'Majiwada', 'Wagle Estate'],
        description: "As the City of Lakes expands, so do we. Get premium home and life Insurance Support for your new apartment in Thane. We provide localized LIC assistance near the Thane Divisional Office in Naupada, ensuring your family stays secure with professional doorstep advisory."
    },
    vadodara: {
        name: 'Vadodara',
        slug: 'vadodara',
        state: 'Gujarat',
        areas: ['Alkapuri', 'Old Padra Road', 'Manjalpur', 'Krelebaug', 'Gotri', 'Akota', 'Sayajigunj'],
        description: "In the Cultural Capital of Gujarat, preserve your traditions and future. Our Insurance Support team offers trusted LIC advisory near Sayajigunj and health plans across Baroda. We ensure your claims and renewals are handled right at your doorstep in Alkapuri and Manjalpur."
    },
    aurangabad: {
        name: 'Aurangabad',
        slug: 'aurangabad',
        state: 'Maharashtra',
        areas: ['CIDCO', 'Garkheda', 'Samarth Nagar', 'Waluj', 'Paithan Road'],
        description: "Protect your assets in this historic tourism hub. Our Insurance Support advisors help you pick the best travel, property, and life policies in Aurangabad. We coordinate with the LIC Adalat Road office to expedite your claim settlements and policy revivals."
    },
    bhubaneswar: {
        name: 'Bhubaneswar',
        slug: 'bhubaneswar',
        state: 'Odisha',
        areas: ['Saheed Nagar', 'Patia', 'Chandrasekharpur', 'Jayadev Vihar', 'Khandagiri', 'Unit 9'],
        description: "Smart City needs smart protection. We provide tech-enabled Insurance Support for the modern residents of Bhubaneswar. Our team offers doorstep LIC services near the Unit 9 (Jeevan Prakash) office, ensuring fast-track claim processing across Patia and Saheed Nagar."
    },
    guwahati: {
        name: 'Guwahati',
        slug: 'guwahati',
        state: 'Assam',
        areas: ['Ganeshguri', 'Paltan Bazar', 'Zoo Road', 'Dispur', 'Bhetapara', 'Six Mile'],
        description: "Gateway to the North East, verify your vehicle and health Insurance Support with us. We ensure you are covered against the unique risks of the region. Our advisors provide doorstep LIC assistance near Fancy Bazar (Jeevan Prakash), serving families across Guwahati."
    },
    jamshedpur: {
        name: 'Jamshedpur',
        slug: 'jamshedpur',
        state: 'Jharkhand',
        areas: ['Sakchi', 'Bistupur', 'Telco Colony', 'Kadma', 'Sonari', 'Adityapur'],
        description: "In the Steel City, forged connections matter. We build lasting relationships by securing your family's financial steel frame with professional Insurance Support. We coordinate with the LIC Jeevan Prakash (Bistupur) office to provide doorstep assistance for policy maturity and claims."
    },
    raipur: {
        name: 'Raipur',
        slug: 'raipur',
        state: 'Chhattisgarh',
        areas: ['Shankar Nagar', 'Civil Lines', 'Pandri', 'Tatibandh', 'Naya Raipur'],
        description: "As Chhattisgarh's capital grows, so does the need for security. We offer comprehensive general and life Insurance Support in Raipur. Get expert LIC advice near the Pandri hub, with doorstep service for all your claim and renewal needs."
    },
    ranchi: {
        name: 'Ranchi',
        slug: 'ranchi',
        state: 'Jharkhand',
        areas: ['Morabadi', 'Doranda', 'Lalpur', 'Hinoo', 'Kanke Road', 'Ratu Road'],
        description: "Keep your cool in the City of Waterfalls with our hassle-free Insurance Support. We cover everything from bikes to businesses in Ranchi, coordinating with the main LIC Jeevan Prakash office to ensure your claims are settled without delays."
    },
    siliguri: {
        name: 'Siliguri',
        slug: 'siliguri',
        state: 'West Bengal',
        areas: ['Sevoke Road', 'Hill Cart Road', 'Pradhan Nagar', 'Matigara', 'Khalpara'],
        description: "Connecting the mainland to the hills, Siliguri relies on transport. We offer specialized commercial vehicle Insurance Support and personal cover. Our team provides local LIC assistance near the Jalpaiguri Division hub, serving the entire Siliguri corridor."
    },
    belagavi: {
        name: 'Belagavi',
        slug: 'belagavi',
        state: 'Karnataka',
        areas: ['Tilakwadi', 'Camp', 'Hanuman Nagar', 'Udyambag', 'Shahapur'],
        description: "In the Sugar Bowl of Karnataka, verify your sweetness of life with our comprehensive health and term Insurance Support in Belgaum. We offer doorstep LIC services near Kirloskar Road, ensuring your family stays financially secure."
    },
    hubli: {
        name: 'Hubli-Dharwad',
        slug: 'hubli-dharwad',
        state: 'Karnataka',
        areas: ['Vidya Nagar', 'Keshwapur', 'Gokul Road', 'Navanagar', 'Seven Seas Corner'],
        description: "Twin cities, double the protection. We cover the educational and commercial hubs of Hubli-Dharwad with tailored Insurance Support. Our advisors provide local LIC expertise near the Dharwad Road office, offering doorstep assistance for all your policy needs."
    },
    mangalore: {
        name: 'Mangalore',
        slug: 'mangalore',
        state: 'Karnataka',
        areas: [
            'Bejai', 'Kadri', 'Kankanady', 'Urwa', 'Hampankatta', 'Ladyhill',
            'Panambur', 'Surathkal', 'Ullal', 'Bajpe', 'Pandeshwar', 'Maryhill', 'Bondel'
        ],
        description: "As Karnataka's premier port city, Mangalore (Kudla) has a unique insurance landscape blending maritime commerce, banking, and a growing IT sector. We provide hyper-local support for Mangaloreans, ranging from health insurance for families in Kadri and Bejai to claim assistance for the industrial hubs of Surathkal and Panambur. We are deeply familiar with the LIC Pandeshwar branch operations and major private insurers in the city, offering doorstep service for policy renewals and maturity claims so you don't have to navigate the city's hilly terrain or monsoon rains just for paperwork.",
        phone: "+91-9986634506",
        coordinates: [12.9141, 74.8560]
    },
    warangal: {
        name: 'Warangal',
        slug: 'warangal',
        state: 'Telangana',
        areas: ['Hanamkonda', 'Kazipet', 'Subedari', 'Warangal Fort Area'],
        description: "Secure your heritage in the historic city of Warangal. Our Insurance Support team provides reliable life and general services near the LIC Hanamkonda hub, ensuring your family's future is well-guarded with professional doorstep advisory."
    },
    kozhikode: {
        name: 'Kozhikode',
        slug: 'kozhikode',
        state: 'Kerala',
        areas: ['Mavoor Road', 'Nadakkavu', 'West Hill', 'Medical College Area', 'Beach Road'],
        description: "In the City of Spices, add the flavor of security to your life. We offer comprehensive health and NRI Insurance Support in Calicut. Our team coordinates with the LIC Mananchira Square (Jeevan Prakash) office, providing doorstep support for claim recovery and policy revivals."
    },
    thrissur: {
        name: 'Thrissur',
        slug: 'thrissur',
        state: 'Kerala',
        areas: ['Ayyanthole', 'Punkunnam', 'Mission Quarters', 'Swaraj Round', 'Guruvayur Road'],
        description: "Cultural capital needs financial culture. Our Insurance Support team helps Thrissur families plan their wealth. We offer doorstep LIC services near the Swaraj Round hub, ensuring your investments and policies are managed with local expertise."
    },
    gwalior: {
        name: 'Gwalior',
        slug: 'gwalior',
        state: 'Madhya Pradesh',
        areas: ['City Center', 'Lashkar', 'Morar', 'Thatipur', 'Gritly'],
        description: "Fortify your finances in Gwalior. Our Insurance Support team brings royal-grade protection for your vehicles, home, and health. We provide localized LIC assistance near the City Center office, ensuring your claims are processed without delays."
    },
    jabalpur: {
        name: 'Jabalpur',
        slug: 'jabalpur',
        state: 'Madhya Pradesh',
        areas: ['Civil Lines', 'Wright Town', 'Vijay Nagar', 'Ranjhi', 'Adhartal'],
        description: "By the Narmada, ensure your life flows smoothly. Our Insurance Support team offers specialized pension and term plans near the LIC Madan Mahal office, providing doorstep service for all residents of Jabalpur."
    },
    ujjain: {
        name: 'Ujjain',
        slug: 'ujjain',
        state: 'Madhya Pradesh',
        areas: ['Freeganj', 'Mahakal Vanijya', 'Rishi Nagar', 'Nanakheda', 'Tower Chowk'],
        description: "In the City of Mahakal, time is precious. Secure your time and family with our trusted Insurance Support. We coordinate with the LIC Freeganj office to provide professional doorstep advisory and claim recovery services across Ujjain."
    }
};

export const getCityData = (slug: string) => {
    return cityData[slug.toLowerCase()] || null;
};
