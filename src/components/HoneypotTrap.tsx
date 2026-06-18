import React from 'react';
import Link from 'next/link';

/**
 * Hidden honeypot trap links for scraper detection
 * These links are invisible to users but visible to bots that scrape all links
 * Any bot hitting these paths is identified as non-human
 */
export const HoneypotTrap: React.FC = () => {
    return (
        <div style={{ position: 'absolute', left: '-9999px', display: 'none' }} aria-hidden="true">
            <Link href="/hidden-admin-access/legacy-config">Admin panel backup</Link>
            <Link href="/private-backup/database-dump">Database archive</Link>
            <Link href="/config-files/supabase-keys">Configuration files</Link>
            <Link href="/hidden-admin-access/secrets">Secret keys</Link>
        </div>
    );
};

export default HoneypotTrap;