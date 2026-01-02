import { describe, it, expect } from 'vitest';

// Mimic the logic we want to use in the Edge Function
const stripHtmlTags = (html: string): string => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
        return doc.body.textContent || "";
    } catch (e) {
        return html;
    }
};

describe('stripHtmlTags', () => {
    it('should remove simple HTML tags', () => {
        const input = 'This is <b>bold</b> text.';
        expect(stripHtmlTags(input)).toBe('This is bold text.');
    });

    it('should remove nested HTML tags', () => {
        const input = '<div><p>Paragraph 1</p><p>Paragraph 2</p></div>';
        // Note: textContent usually concatenates text. We might want to handle spacing,
        // but for now, let's just see if tags are gone.
        expect(stripHtmlTags(input)).toBe('Paragraph 1Paragraph 2');
    });

    it('should handle encoded entities', () => {
        const input = 'This &amp; that';
        expect(stripHtmlTags(input)).toBe('This & that');
    });

    it('should handle completely clean text', () => {
        const input = 'Just plain text';
        expect(stripHtmlTags(input)).toBe('Just plain text');
    });
});
