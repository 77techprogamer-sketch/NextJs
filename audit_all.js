const fs = require('fs');
const path = require('path');

const locales = ['hi', 'mr', 'kn', 'ta', 'te'];
const enPath = path.join(process.cwd(), 'public/locales/en/translation.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

function findPlaceholders(objEn, objTarget, path = '') {
    let results = [];
    for (const key in objEn) {
        const currentPath = path ? `${path}.${key}` : key;
        if (typeof objEn[key] === 'object' && objEn[key] !== null) {
            if (!objTarget[key]) {
                results.push(`MISSING: ${currentPath}`);
            } else {
                results = results.concat(findPlaceholders(objEn[key], objTarget[key], currentPath));
            }
        } else {
            if (!objTarget[key]) {
                results.push(`MISSING: ${currentPath}`);
            } else if (objEn[key] === objTarget[key] && objEn[key].length > 5 && !['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'].includes(objEn[key])) {
                results.push(`PLACEHOLDER: ${currentPath}`);
            }
        }
    }
    return results;
}

locales.forEach(lang => {
    const p = path.join(process.cwd(), `public/locales/${lang}/translation.json`);
    if (fs.existsSync(p)) {
        const target = JSON.parse(fs.readFileSync(p, 'utf8'));
        const issues = findPlaceholders(en, target);
        console.log(`--- ${lang} ---`);
        if (issues.length > 50) {
            console.log(`Found ${issues.length} issues (truncated)`);
            console.log(issues.slice(0, 10).join('\n'));
        } else {
            console.log(issues.join('\n'));
        }
    }
});
