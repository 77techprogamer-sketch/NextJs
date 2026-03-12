const fs = require('fs');
const path = require('path');
const enPath = path.join(process.cwd(), 'public/locales/en/translation.json');
let content = fs.readFileSync(enPath, 'utf8').trim();
if (content.endsWith('}\n}')) {
    content = content.substring(0, content.length - 2);
} else if (content.endsWith('}}')) {
    content = content.substring(0, content.length - 1);
}
// Robust fix: find the last occurrence of }} and remove one }
const lastDoubleBrace = content.lastIndexOf('}}');
if (lastDoubleBrace !== -1 && lastDoubleBrace === content.length - 2) {
    content = content.substring(0, content.length - 1);
}
fs.writeFileSync(enPath, content.trim() + '\n');
console.log("Cleaned up en/translation.json manually");
