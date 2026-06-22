import React from 'react';
import Link from 'next/link';

/**
 * Honeypot trap disabled - was causing GSC 404 errors
 * Bot protection handled by middleware instead
 */
export const HoneypotTrap: React.FC = () => {
    return null;
};

export default HoneypotTrap;