const fs = require('fs');
const path = require('path');

const blogsPath = path.join(__dirname, '../src/data/blogs.json');
let content = fs.readFileSync(blogsPath, 'utf8');

const replacements = [
    [/\u2014/g, ' - '], // em-dash
    [/\u2013/g, '-'],   // en-dash
    [/\u2018/g, "'"],   // smart single quote left
    [/\u2019/g, "'"],   // smart single quote right
    [/\u201C/g, '"'],   // smart double quote left
    [/\u201D/g, '"'],   // smart double quote right
    [/\u2022/g, '*'],   // bullet
    [/\u2026/g, '...'], // ellipsis
    [/\u20B9/g, 'Rs. '], // Rupee symbol
    [/\u2713/g, '[OK]'], // checkmark
    [/\u2192/g, '->'],   // arrow
    [/\u00A0/g, ' '],    // non-breaking space
    [/\u200B/g, ''],     // zero-width space
];

console.log('Original length:', content.length);

replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
});

// Final pass: check for any remaining non-ASCII
let nonAsciiCount = 0;
for (let i = 0; i < content.length; i++) {
    if (content.charCodeAt(i) > 127) {
        nonAsciiCount++;
        // If we still have some, let's just log a few
        if (nonAsciiCount < 10) {
            console.log(`Still found char ${content[i]} (code ${content.charCodeAt(i)}) at index ${i}`);
        }
    }
}

console.log('Remaining non-ASCII characters:', nonAsciiCount);

if (nonAsciiCount > 0) {
    console.log('Forcefully removing all remaining non-ASCII characters...');
    content = content.replace(/[^\x00-\x7F]/g, '');
}

fs.writeFileSync(blogsPath, content, 'utf8');
console.log('Sanitization complete. New length:', content.length);
