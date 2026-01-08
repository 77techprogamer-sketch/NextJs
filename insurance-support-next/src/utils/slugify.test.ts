import { describe, it, expect } from 'vitest';
import { slugify } from './slugify';

describe('slugify', () => {
    it('should convert string to lowercase', () => {
        expect(slugify('Hello')).toBe('hello');
    });

    it('should replace spaces with hyphens', () => {
        expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should remove special characters', () => {
        expect(slugify('Hello! @World#')).toBe('hello-world');
    });

    it('should handle strings with multiple spaces', () => {
        expect(slugify('Hello   World')).toBe('hello-world');
    });

    it('should handle empty strings', () => {
        expect(slugify('')).toBe('');
    });
});
