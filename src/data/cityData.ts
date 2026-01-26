export interface CityData {
    name: string;
    slug: string; // url friendly
    state: string;
    areas: string[];
    phone?: string;
}

export const cityData: Record<string, CityData> = {
    bangalore: {
        name: 'Bangalore',
        slug: 'bangalore',
        state: 'Karnataka',
        areas: ['Indiranagar', 'Koramangala', 'Jayanagar', 'JP Nagar', 'Whitefield', 'HSR Layout', 'Electronic City', 'Hebbal', 'Malleshwaram'],
    },
    chennai: {
        name: 'Chennai',
        slug: 'chennai',
        state: 'Tamil Nadu',
        areas: ['T Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'Mylapore', 'Tambaram', 'Guindy', 'Porur'],
    },
    vellore: {
        name: 'Vellore',
        slug: 'vellore',
        state: 'Tamil Nadu',
        areas: ['Katpadi', 'Gandhinagar', 'Sathuvachari', 'Vellore Fort Area', 'Bagayam'],
    },
    hosur: {
        name: 'Hosur',
        slug: 'hosur',
        state: 'Tamil Nadu',
        areas: ['Industrial Area', 'Rayakottai Road', 'Bagalur Road'],
    },
    kanchipuram: {
        name: 'Kanchipuram',
        slug: 'kanchipuram',
        state: 'Tamil Nadu',
        areas: ['Temple City', 'Silk Saree Market Area'],
    },
    mysore: {
        name: 'Mysore',
        slug: 'mysore',
        state: 'Karnataka',
        areas: ['Vijayanagar', 'Gokulam', 'Saraswathipuram', 'Kuvempunagar'],
    },
    coimbatore: {
        name: 'Coimbatore',
        slug: 'coimbatore',
        state: 'Tamil Nadu',
        areas: ['Gandhipuram', 'RS Puram', 'Peelamedu', 'Saravanampatti'],
    },
    salem: {
        name: 'Salem',
        slug: 'salem',
        state: 'Tamil Nadu',
        areas: ['Fairlands', 'Hasthampatti', 'Ammapet'],
    },
    tirupati: {
        name: 'Tirupati',
        slug: 'tirupati',
        state: 'Andhra Pradesh',
        areas: ['Alipiri', 'Tirumala Bypass', 'Renigunta Road'],
    }
};

export const getCityData = (slug: string) => {
    return cityData[slug.toLowerCase()] || null;
};
