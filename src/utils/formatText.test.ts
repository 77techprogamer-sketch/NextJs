import { describe, it, expect } from 'vitest';
import { formatLabel } from './formatText';

describe('formatText', () => {
    describe('formatLabel', () => {
        it('should replace underscores with spaces', () => {
            expect(formatLabel('life_insurance')).toBe('Life Insurance');
        });

        it('should capitalize the first letter of each word', () => {
            expect(formatLabel('health_insurance')).toBe('Health Insurance');
        });

        it('should handle single words', () => {
            expect(formatLabel('term')).toBe('Term');
        });

        it('should handle empty strings', () => {
            expect(formatLabel('')).toBe('');
        });
    });

    // Assuming formatLink exists and behaves similarly or inversely
    // I need to check the file content first. I'll comment this out if I'm not sure, 
    // but based on previous turns, I saw formatText.ts exists.
    // I will write the file based on the view_file output which I will receive in the next turn.
    // Actually, I am calling write_to_file in PARALLEL with view_file.
    // So I should assume formatLabel exists (used in ServiceCard).
    // I'll stick to formatLabel for now to be safe.
});
