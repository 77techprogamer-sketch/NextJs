const fs = require('fs');
const path = require('path');

const enTranslationPath = path.join('d:\\Insurance-Support\\insurance-support-next\\public\\locales\\en\\translation.json');
const enTranslation = JSON.parse(fs.readFileSync(enTranslationPath, 'utf8'));

function findTKeys(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /t\(['"]([^'"]+)['"]/g;
    let match;
    const missing = [];
    while ((match = regex.exec(content)) !== null) {
        const key = match[1];
        if (!enTranslation[key] && !key.includes('{{') && !key.includes(' ')) {
           missing.push(key);
        }
    }
    return missing;
}

const file1 = path.join('d:\\Insurance-Support\\insurance-support-next\\src\\components\\SupportClient.tsx');
const file2 = path.join('d:\\Insurance-Support\\insurance-support-next\\src\\components\\sections\\FAQSection.tsx');

const missing1 = findTKeys(file1);
const missing2 = findTKeys(file2);

console.log('Missing: ', Array.from(new Set([...missing1, ...missing2])).join(', '));
