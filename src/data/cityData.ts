export interface CityData {
    name: string;
    slug: string; // url friendly
    state: string;
    areas: string[];
    description?: string;
    phone?: string;
}

export const cityData: Record<string, CityData> = {
    bangalore: {
        name: 'Bangalore',
        slug: 'bangalore',
        state: 'Karnataka',
        areas: ['Indiranagar', 'Koramangala', 'Jayanagar', 'JP Nagar', 'Whitefield', 'HSR Layout', 'Electronic City', 'Hebbal', 'Malleshwaram'],
        description: "As India's Silicon Valley, Bangalore sees high vehicle density and rapid urban growth. This makes comprehensive motor and health insurance essential for navigating the city's busy life."
    },
    chennai: {
        name: 'Chennai',
        slug: 'chennai',
        state: 'Tamil Nadu',
        areas: ['T Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'Mylapore', 'Tambaram', 'Guindy', 'Porur'],
        description: "Given Chennai's coastal weather and monsoon risks, property and health insurance are vital. We help residents secure their homes and health against unpredictable climatic changes."
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
        areas: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Kukatpally', 'Secunderabad'],
        description: "In the bustling IT hub of Hyderabad, securing your family's future is paramount. We provide comprehensive health and term life insurance solutions tailored for tech professionals and families."
    },
    pune: {
        name: 'Pune',
        slug: 'pune',
        state: 'Maharashtra',
        areas: ['Koregaon Park', 'Kalyani Nagar', 'Viman Nagar', 'Hinjewadi', 'Kothrud'],
        description: "Pune's dynamic lifestyle demands robust protection. From motor insurance for your daily commute to health plans for your family, we cover all your insurance needs in the Oxford of the East."
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
    }
};

export const getCityData = (slug: string) => {
    return cityData[slug.toLowerCase()] || null;
};
