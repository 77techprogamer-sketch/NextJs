/**
 * Formats a string by replacing underscores with spaces and capitalizing each word.
 * Useful for displaying snake_case keys or slugs in a user-friendly way.
 */
export const formatLabel = (text: string | undefined | null): string => {
    if (!text) return '';

    return text
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

/**
 * Normalizes text for display when t() might return the key itself.
 */
export const normalizeUIValue = (text: string | undefined | null): string => {
    if (!text) return '';
    // If it's a slug or key with underscores, format it
    if (text.includes('_')) {
        return formatLabel(text);
    }
    return text;
};
