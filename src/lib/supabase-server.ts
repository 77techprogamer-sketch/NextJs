/**
 * Server-safe Supabase fetch helper.
 * Used exclusively in Server Components to fetch public data lightly via REST API.
 */

export interface PincodeData {
    post_office: string;
    pincode: number;
    district: string;
}

export async function fetchCityPincodes(cityName: string, limit: number = 8): Promise<PincodeData[]> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey || !cityName) return [];

    try {
        const cleanName = encodeURIComponent(cityName.trim());
        const orFilter = `or=(city.ilike.*${cleanName}*,district.ilike.*${cleanName}*)`;
        
        const response = await fetch(
            `${supabaseUrl}/rest/v1/indian_pincodes?${orFilter}&select=post_office,pincode,district&limit=${limit}`,
            {
                method: 'GET',
                headers: {
                    apikey: anonKey,
                    Authorization: `Bearer ${anonKey}`,
                    'Content-Type': 'application/json',
                },
                // Cache heavily since Indian pincodes almost never change
                next: { revalidate: 604800 } // 1 week
            }
        );

        if (!response.ok) {
            console.error('Supabase fetch returned error:', response.status, response.statusText);
            return [];
        }

        const data: PincodeData[] = await response.json();
        
        // Remove duplicates if the SQL had overlapping post offices/pincodes
        const uniquePincodes = new Map<number, PincodeData>();
        data.forEach(item => {
            if (!uniquePincodes.has(item.pincode)) {
                uniquePincodes.set(item.pincode, item);
            }
        });
        
        return Array.from(uniquePincodes.values()).slice(0, limit);
    } catch (e) {
        console.error('Failed to fetch pincodes:', e);
        return [];
    }
}
