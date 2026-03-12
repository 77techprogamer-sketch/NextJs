const fs = require('fs');
const path = require('path');

const enPath = path.join(process.cwd(), 'public/locales/en/translation.json');
const bnPath = path.join(process.cwd(), 'public/locales/bn/translation.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

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
            } else if (objEn[key] === objTarget[key] && objEn[key].length > 5) {
                results.push(`PLACEHOLDER: ${currentPath}`);
            }
        }
    }
    return results;
}

const issues = findPlaceholders(en, bn);
console.log(issues.join('\n'));
