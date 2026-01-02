
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const unescapeHtmlEntities = (html: string): string => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
        return doc ? doc.body.innerHTML : html;
    } catch (e) {
        return html;
    }
};

const stripTags = (html: string): string => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
        return doc ? doc.body.textContent : html;
    } catch (e) {
        return html;
    }
}

const input = "Here is a <b>bold</b> statement and some &quot;quotes&quot;.";

console.log("Input:", input);
console.log("Current (unescapeHtmlEntities):", unescapeHtmlEntities(input));
console.log("Proposed (stripTags):", stripTags(input));
