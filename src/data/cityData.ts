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
    }
};

export const getCityData = (slug: string) => {
    return cityData[slug.toLowerCase()] || null;
};
