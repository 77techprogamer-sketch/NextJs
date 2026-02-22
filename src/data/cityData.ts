export interface CityData {
    name: string;
    slug: string; // url friendly
    state: string;
    areas: string[];
    description?: string;
    phone?: string;
    coordinates?: [number, number]; // [lat, lng]
}

export const cityData: Record<string, CityData> = {
    bangalore: {
        name: 'Bangalore',
        slug: 'bangalore',
        state: 'Karnataka',
        areas: ['Indiranagar', 'Koramangala', 'Jayanagar', 'JP Nagar', 'Whitefield', 'HSR Layout', 'Electronic City', 'Hebbal', 'Malleshwaram'],
        description: "As India's Silicon Valley, Bangalore sees high tech-professional density. From the busy streets of MG Road to the tech hubs of Whitefield and Electronic City, we provide specialized health insurance for IT professionals and motor cover for the city's unique traffic conditions. Our advisors are familiar with local LIC branches in Jayanagar and Indiranagar for faster processing.",
        phone: "+91-9962536848",
        coordinates: [12.9716, 77.5946]
    },
    chennai: {
        name: 'Chennai',
        slug: 'chennai',
        state: 'Tamil Nadu',
        areas: ['T Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'Mylapore', 'Tambaram', 'Guindy', 'Porur'],
        description: "Given Chennai's coastal geography and monsoon history, especially in low-lying areas like Velachery and Adyar, 'flood-protection' in motor and property insurance is a top priority. We help residents in Anna Nagar and T. Nagar with localized claim support and LIC policy management, ensuring your assets are resilient against the Bay of Bengal's unpredictability.",
        phone: "+91-9962536848",
        coordinates: [13.0827, 80.2707]
    },
    vellore: {
        name: 'Vellore',
        slug: 'vellore',
        state: 'Tamil Nadu',
        areas: ['Katpadi', 'Gandhinagar', 'Sathuvachari', 'Vellore Fort Area', 'Bagayam'],
        description: "Vellore is a major educational and medical hub. We provide specialized insurance solutions for students, professionals, and families to ensure complete financial protection."
    },
    hosur: {
        name: 'Hosur',
        slug: 'hosur',
        state: 'Tamil Nadu',
        areas: ['Industrial Area', 'Rayakottai Road', 'Bagalur Road'],
        description: "As a booming industrial town, Hosur has specific needs for SME and workman compensation insurance. We guide local businesses and employees in securing their assets."
    },
    kanchipuram: {
        name: 'Kanchipuram',
        slug: 'kanchipuram',
        state: 'Tamil Nadu',
        areas: ['Temple City', 'Silk Saree Market Area'],
        description: "Heritage meets modernity in Kanchipuram. Whether you run a traditional business or need personal life cover, our local support ensures your legacy is protected."
    },
    mysore: {
        name: 'Mysore',
        slug: 'mysore',
        state: 'Karnataka',
        areas: ['Vijayanagar', 'Gokulam', 'Saraswathipuram', 'Kuvempunagar'],
        description: "Mysore's peaceful life deserves refined protection. We offer tailored pension and retirement plans for the city's residents to ensure a stress-free future."
    },
    coimbatore: {
        name: 'Coimbatore',
        slug: 'coimbatore',
        state: 'Tamil Nadu',
        areas: ['Gandhipuram', 'RS Puram', 'Peelamedu', 'Saravanampatti'],
        description: "Known as the Manchester of South India, Coimbatore's textile and engineering sectors need robust business insurance. We also provide top-tier health plans for families."
    },
    salem: {
        name: 'Salem',
        slug: 'salem',
        state: 'Tamil Nadu',
        areas: ['Fairlands', 'Hasthampatti', 'Ammapet'],
        description: "In the steel and textile hub of Salem, securing assets is a priority. We assist locals with motor, health, and property insurance to safeguard their hard-earned wealth."
    },
    tirupati: {
        name: 'Tirupati',
        slug: 'tirupati',
        state: 'Andhra Pradesh',
        areas: ['Alipiri', 'Tirumala Bypass', 'Renigunta Road'],
        description: "For the residents of the spiritual capital, we offer pure term insurance and endowment plans to ensure the financial sanctity and security of your loved ones."
    },
    hyderabad: {
        name: 'Hyderabad',
        slug: 'hyderabad',
        state: 'Telangana',
        areas: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Kukatpally', 'Secunderabad', 'Hitech City'],
        description: "In the bustling IT hub of Hyderabad, specifically serving the Hitech City and Gachibowli corridors, we provide comprehensive health and term life insurance solutions tailored for global professionals. Our expertise includes handling policy revivals for long-term residents in Secunderabad and Banjara Hills, bridging the gap between digital convenience and doorstep service.",
        phone: "+91-9962536848",
        coordinates: [17.3850, 78.4867]
    },
    pune: {
        name: 'Pune',
        slug: 'pune',
        state: 'Maharashtra',
        areas: ['Koregaon Park', 'Kalyani Nagar', 'Viman Nagar', 'Hinjewadi', 'Kothrud', 'Magarpatta'],
        description: "Pune's dynamic lifestyle demands robust protection. From motor insurance for your daily commute to Hinjewadi or Magarpatta, to health plans for your family, we cover all your insurance needs in the Oxford of the East.",
        phone: "+91-9962536848"
    },
    mumbai: {
        name: 'Mumbai',
        slug: 'mumbai',
        state: 'Maharashtra',
        areas: ['Andheri', 'Bandra', 'Juhu', 'Powai', 'Colaba', 'Dadar'],
        description: "In the City of Dreams, financial security must keep pace with the fast life. From South Mumbai's corporate corridors to the residential hubs of Andheri and Bandra, we provide doorstep insurance assistance. We specialize in marine insurance for business owners and comprehensive health plans that cover Mumbai's top-tier medical facilities.",
        phone: "+91-9962536848",
        coordinates: [19.0760, 72.8777]
    },
    ahmedabad: {
        name: 'Ahmedabad',
        slug: 'ahmedabad',
        state: 'Gujarat',
        areas: ['Satellite', 'Bodakdev', 'Vastrapur', 'Maninagar', 'Navrangpura'],
        description: "As a major business center, Ahmedabad requires specialized commercial and personal insurance. We help secure your business assets and family health with top-tier policies."
    },
    kolkata: {
        name: 'Kolkata',
        slug: 'kolkata',
        state: 'West Bengal',
        areas: ['Salt Lake', 'New Town', 'Park Street', 'Ballygunge', 'Howrah'],
        description: "In the City of Joy, don't let financial worries dampen your spirit. Our expert advisors in Kolkata help you choose the best life and health insurance plans for lifelong peace of mind."
    },
    lucknow: {
        name: 'Lucknow',
        slug: 'lucknow',
        state: 'Uttar Pradesh',
        areas: ['Gomti Nagar', 'Hazratganj', 'Alambagh', 'Indira Nagar'],
        description: "Protecting your family's heritage in Lucknow is easier with our support. We offer personalized LIC policy services and health insurance guidance right at your doorstep."
    },
    jaipur: {
        name: 'Jaipur',
        slug: 'jaipur',
        state: 'Rajasthan',
        areas: ['Vaishali Nagar', 'Mansarovar', 'Malviya Nagar', 'C Scheme'],
        description: "In the Pink City, safeguard your royal lifestyle with our premium insurance solutions. We assist with vehicle, property, and life insurance needs across Jaipur."
    },
    chandigarh: {
        name: 'Chandigarh',
        slug: 'chandigarh',
        state: 'Chandigarh',
        areas: ['Sector 17', 'Sector 35', 'Manimajra', 'Zirakpur'],
        description: "Chandigarh's planned living deserves planned financial security. We provide expert consultancy for retirement planning and health coverage in the City Beautiful."
    },
    kochi: {
        name: 'Kochi',
        slug: 'kochi',
        state: 'Kerala',
        areas: ['Edappally', 'Kaloor', 'Fort Kochi', 'Kakkanad'],
        description: "In God's Own Country, ensure your family's well-being with our comprehensive insurance plans. We specialize in NRI investment options and local health coverage in Kochi."
    },
    trivandrum: {
        name: 'Trivandrum',
        slug: 'trivandrum',
        state: 'Kerala',
        areas: ['Technopark', 'Kowdiar', 'Pattom', 'Vellayambalam'],
        description: "Secure your future in Kerala's capital. We offer reliable LIC support and health insurance advice to government employees and private professionals in Thiruvananthapuram."
    },
    madurai: {
        name: 'Madurai',
        slug: 'madurai',
        state: 'Tamil Nadu',
        areas: ['KK Nagar', 'Anna Nagar', 'TVS Nagar', 'Simmakkal'],
        description: "In the cultural capital of Madurai, we ensure your traditions are protected. Get best-in-class life and term insurance support from trusted local advisors."
    },
    trichy: {
        name: 'Trichy',
        slug: 'trichy',
        state: 'Tamil Nadu',
        areas: ['Thillai Nagar', 'Srirangam', 'Cantonment', 'K.K. Nagar'],
        description: "Trichy's growing economy needs solid financial backing. We help residents and businesses secure their future with tailored insurance strategies."
    },
    pondicherry: {
        name: 'Pondicherry',
        slug: 'pondicherry',
        state: 'Puducherry',
        areas: ['White Town', 'Lawspet', 'Reddiarpalayam'],
        description: "Enjoy the serene life in Pondicherry while we handle your insurance worries. We provide hassle-free support for vehicle renewals and health policies."
    },
    vijayawada: {
        name: 'Vijayawada',
        slug: 'vijayawada',
        state: 'Andhra Pradesh',
        areas: ['Benz Circle', 'Patamata', 'Gunadala', 'Bhavanipuram'],
        description: "As a commercial hub, Vijayawada demands smart financial planning. Our advisors help you navigate the best investment and insurance options available."
    },
    vizag: {
        name: 'Visakhapatnam',
        slug: 'vizag',
        state: 'Andhra Pradesh',
        areas: ['MVP Colony', 'Gajuwaka', 'Seethammadhara', 'Siripuram'],
        description: "Protect your home and health in the port city of Vizag. We offer specialized marine, property, and personal insurance services for the coastal community."
    },
    surat: {
        name: 'Surat',
        slug: 'surat',
        state: 'Gujarat',
        areas: ['Adajan', 'Vesu', 'Piplod', 'Varachha'],
        description: "In the Diamond City, secure your valuable assets with our help. We provide top-notch business and family insurance solutions for Surat's entrepreneurs."
    },
    nagpur: {
        name: 'Nagpur',
        slug: 'nagpur',
        state: 'Maharashtra',
        areas: ['Dharampeth', 'Civil Lines', 'Manish Nagar', 'Sadar'],
        description: "Nagpur's central location makes it a logistics hub. We offer specialized transit and motor insurance, along with personal life cover for residents."
    },
    indore: {
        name: 'Indore',
        slug: 'indore',
        state: 'Madhya Pradesh',
        areas: ['Vijay Nagar', 'Palasia', 'Saket', 'Rajwada'],
        description: "Cleanest city, cleanest finances. We help Indoris maintain financial hygiene with the right health and life insurance portfolios."
    },
    bhopal: {
        name: 'Bhopal',
        slug: 'bhopal',
        state: 'Madhya Pradesh',
        areas: ['Arera Colony', 'MP Nagar', 'Kolar Road', 'New Market'],
        description: "In the City of Lakes, ensure your family stays afloat during tough times. We provide compassionate support for claim settlement and policy revival."
    },
    patna: {
        name: 'Patna',
        slug: 'patna',
        state: 'Bihar',
        areas: ['Boring Road', 'Kankarbagh', 'Rajendra Nagar', 'Bailey Road'],
        description: "Patna's historic legacy deserves future protection. We bring trusted LIC and general insurance services to every household in the capital."
    },
    delhi: {
        name: 'Delhi',
        slug: 'delhi',
        state: 'Delhi',
        areas: ['Connaught Place', 'Dwarka', 'Rohini', 'Saket', 'Vasant Kunj', 'Janakpuri', 'Lajpat Nagar', 'Karol Bagh'],
        description: "In the heart of the nation, we offer capital-grade insurance services. Our advisors are active across NCR, from Connaught Place to Dwarka. We provide expert help with complex LIC claim settlements and motor insurance renewals, ensuring your family stays secure amidst the city's fast-paced growth and environmental challenges like air-quality-linked health covers.",
        phone: "+91-9962536848",
        coordinates: [28.6139, 77.2090]
    },
    agra: {
        name: 'Agra',
        slug: 'agra',
        state: 'Uttar Pradesh',
        areas: ['Tajganj', 'Sanjay Place', 'Kamla Nagar', 'Dayal Bagh'],
        description: "Protect your home and heritage in the city of the Taj. We offer comprehensive property and life insurance solutions for Agra's residents and businesses."
    },
    ajmer: {
        name: 'Ajmer',
        slug: 'ajmer',
        state: 'Rajasthan',
        areas: ['Vaishali Nagar', 'Civil Lines', 'Pushkar Road'],
        description: "Secure your pilgrimage of life with our trusted insurance plans in Ajmer. We provide seamless support for all your general and life insurance needs."
    },
    amritsar: {
        name: 'Amritsar',
        slug: 'amritsar',
        state: 'Punjab',
        areas: ['Ranjit Avenue', 'Lawrence Road', 'Model Town'],
        description: "In the Holy City, ensure your family's prosperity is well-guarded. We bring top-tier health and term insurance advice to your doorstep in Amritsar."
    },
    dehradun: {
        name: 'Dehradun',
        slug: 'dehradun',
        state: 'Uttarakhand',
        areas: ['Rajpur Road', 'Clement Town', 'Vasant Vihar', 'Prem Nagar'],
        description: "Retire peacefully in the Doon Valley with our specialized pension plans. We also offer robust vehicle insurance for the hilly terrains of Dehradun."
    },
    jalandhar: {
        name: 'Jalandhar',
        slug: 'jalandhar',
        state: 'Punjab',
        areas: ['Model Town', 'Jalandhar Cantt', 'Urban Estate'],
        description: "For the NRI hub of Punjab, we offer specialized investment and insurance management services. Secure your assets in Jalandhar with our expert help."
    },
    kanpur: {
        name: 'Kanpur',
        slug: 'kanpur',
        state: 'Uttar Pradesh',
        areas: ['Swaroop Nagar', 'Civil Lines', 'Kidwai Nagar', 'Kakadeo'],
        description: "As the industrial capital of UP, Kanpur needs strong commercial insurance. We protect your factories and families alike with tailored policies."
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
        areas: ['Shastri Nagar', 'Ganga Nagar', 'Pallav Puram'],
        description: "From sports goods to steady growth, Meerut is rising. Secure your journey with our reliable motor and life insurance services."
    },
    varanasi: {
        name: 'Varanasi',
        slug: 'varanasi',
        state: 'Uttar Pradesh',
        areas: ['Lanka', 'Sigra', 'Mahmoorganj', 'Cantonment'],
        description: "In the world's oldest living city, ensure your legacy lives on. We offer dedicated life insurance and endowment plans for families in Kashi."
    },
    srinagar: {
        name: 'Srinagar',
        slug: 'srinagar',
        state: 'Jammu and Kashmir',
        areas: ['Rajbagh', 'Hyderpora', 'Lal Chowk'],
        description: "Safeguard your Shikaras and homes in Paradise on Earth. We provide essential property and health insurance support in Srinagar."
    },
    jammu: {
        name: 'Jammu',
        slug: 'jammu',
        state: 'Jammu and Kashmir',
        areas: ['Gandhi Nagar', 'Trikuta Nagar', 'Channi Himmat'],
        description: "In the City of Temples, secure your family's future with our comprehensive term and life insurance plans."
    },
    goa: {
        name: 'Goa',
        slug: 'goa',
        state: 'Goa',
        areas: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Porvorim'],
        description: "Live the Susegad life without worries. We handle your travel, vehicle, and health insurance needs across the beautiful state of Goa."
    },
    nashik: {
        name: 'Nashik',
        slug: 'nashik',
        state: 'Maharashtra',
        areas: ['College Road', 'Gangapur Road', 'Indira Nagar', 'Panchavati'],
        description: "In the Wine Capital of India, secure your vineyards and vehicles alike. We offer specialized agricultural and personal insurance in Nashik."
    },
    rajkot: {
        name: 'Rajkot',
        slug: 'rajkot',
        state: 'Gujarat',
        areas: ['Kalawad Road', '150 Feet Ring Road', 'Amin Marg'],
        description: "Drive your business in Rajkot with confidence. We provide SME and industrial insurance solutions alongside personal term plans."
    },
    thane: {
        name: 'Thane',
        slug: 'thane',
        state: 'Maharashtra',
        areas: ['Ghodbunder Road', 'Vartak Nagar', 'Naupada', 'Kolshet'],
        description: "As the City of Lakes expands, so do we. Get premium home and life insurance support for your new apartment in Thane."
    },
    vadodara: {
        name: 'Vadodara',
        slug: 'vadodara',
        state: 'Gujarat',
        areas: ['Alkapuri', 'Old Padra Road', 'Manjalpur', 'Karelibaug'],
        description: "In the Cultural Capital of Gujarat, preserve your traditions and future. We offer trusted LIC advisory and health plans in Baroda."
    },
    aurangabad: {
        name: 'Aurangabad',
        slug: 'aurangabad',
        state: 'Maharashtra',
        areas: ['CIDCO', 'Garkheda', 'Samarth Nagar'],
        description: "Protect your assets in this historic tourism hub. Our advisors help you pick the best travel and property insurance in Aurangabad."
    },
    bhubaneswar: {
        name: 'Bhubaneswar',
        slug: 'bhubaneswar',
        state: 'Odisha',
        areas: ['Saheed Nagar', 'Patia', 'Chandrasekharpur', 'Jayadev Vihar'],
        description: "Smart City needs smart protection. We provide tech-enabled insurance services for the modern residents of Bhubaneswar."
    },
    guwahati: {
        name: 'Guwahati',
        slug: 'guwahati',
        state: 'Assam',
        areas: ['Ganeshguri', 'Paltan Bazar', 'Zoo Road', 'Dispur'],
        description: "Gateway to the North East, verify your vehicle and health insurance with us. We ensure you are covered against the unique risks of the region."
    },
    jamshedpur: {
        name: 'Jamshedpur',
        slug: 'jamshedpur',
        state: 'Jharkhand',
        areas: ['Sakchi', 'Bistupur', 'Telco Colony', 'Kadma'],
        description: "In the Steel City, forged connections matter. We build lasting relationships by securing your family's financial steel frame with life insurance."
    },
    raipur: {
        name: 'Raipur',
        slug: 'raipur',
        state: 'Chhattisgarh',
        areas: ['Shankar Nagar', 'Civil Lines', 'Pandri'],
        description: "As Chhattisgarh's capital grows, so does the need for security. We offer comprehensive general and life insurance plans in Raipur."
    },
    ranchi: {
        name: 'Ranchi',
        slug: 'ranchi',
        state: 'Jharkhand',
        areas: ['Morabadi', 'Doranda', 'Lalpur', 'Hinoo'],
        description: "Keep your cool in the City of Waterfalls with our hassle-free insurance support. We cover everything from bikes to businesses in Ranchi."
    },
    siliguri: {
        name: 'Siliguri',
        slug: 'siliguri',
        state: 'West Bengal',
        areas: ['Sevoke Road', 'Hill Cart Road', 'Pradhan Nagar'],
        description: "Connecting the mainland to the hills, Siliguri relies on transport. We offer specialized commercial vehicle insurance and personal cover."
    },
    belagavi: {
        name: 'Belagavi',
        slug: 'belagavi',
        state: 'Karnataka',
        areas: ['Tilakwadi', 'Camp', 'Hanuman Nagar'],
        description: "In the Sugar Bowl of Karnataka, verify your sweetness of life with our comprehensive health and term plans in Belgaum."
    },
    hubli: {
        name: 'Hubli-Dharwad',
        slug: 'hubli-dharwad',
        state: 'Karnataka',
        areas: ['Vidya Nagar', 'Keshwapur', 'Gokul Road'],
        description: "Twin cities, double the protection. We cover the educational and commercial hubs of Hubli-Dharwad with tailored insurance solutions."
    },
    mangalore: {
        name: 'Mangalore',
        slug: 'mangalore',
        state: 'Karnataka',
        areas: ['Bejai', 'Kadri', 'Kankanady', 'Urwa'],
        description: "From the port to the hills, Mangaloreans need robust cover. We specialize in marine and health insurance for the coastal city."
    },
    warangal: {
        name: 'Warangal',
        slug: 'warangal',
        state: 'Telangana',
        areas: ['Hanamkonda', 'Kazipet', 'Subedari'],
        description: "Secure your heritage in the historic city of Warangal. We provide reliable life and general insurance services to local families."
    },
    kozhikode: {
        name: 'Kozhikode',
        slug: 'kozhikode',
        state: 'Kerala',
        areas: ['Mavoor Road', 'Nadakkavu', 'West Hill'],
        description: "In the City of Spices, add the flavor of security to your life. We offer comprehensive health and NRI insurance support in Calicut."
    },
    thrissur: {
        name: 'Thrissur',
        slug: 'thrissur',
        state: 'Kerala',
        areas: ['Ayyanthole', 'Punkunnam', 'Mission Quarters'],
        description: "Cultural capital needs financial culture. We help Thrissur families plan their wealth with the best investment and insurance schemes."
    },
    gwalior: {
        name: 'Gwalior',
        slug: 'gwalior',
        state: 'Madhya Pradesh',
        areas: ['City Center', 'Lashkar', 'Morar'],
        description: "Fortify your finances in Gwalior. We bring royal-grade protection for your vehicles, home, and health."
    },
    jabalpur: {
        name: 'Jabalpur',
        slug: 'jabalpur',
        state: 'Madhya Pradesh',
        areas: ['Civil Lines', 'Wright Town', 'Vijay Nagar'],
        description: "By the Narmada, ensure your life flows smoothly. We offer specialized pension and term plans for residents of Jabalpur."
    },
    ujjain: {
        name: 'Ujjain',
        slug: 'ujjain',
        state: 'Madhya Pradesh',
        areas: ['Freeganj', 'Mahakal Vanijya', 'Rishi Nagar'],
        description: "In the City of Mahakal, time is precious. Secure your time and family with our trusted term life insurance policies."
    }
};

export const getCityData = (slug: string) => {
    return cityData[slug.toLowerCase()] || null;
};
