const fs = require('fs');
const path = require('path');

const srcDir = path.join('d:\\Insurance-Support\\insurance-support-next\\src');
const localesDir = path.join('d:\\Insurance-Support\\insurance-support-next\\public\\locales');
const enTranslationPath = path.join(localesDir, 'en', 'translation.json');
const enTranslation = JSON.parse(fs.readFileSync(enTranslationPath, 'utf8'));

// Recursively find all TSX/TS files
function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);
const missingKeys = new Set();
const regex = /t\(['"]([^'"]+)['"]/g;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    if (!enTranslation[key] && !key.includes('{{') && !key.includes(' ') && key !== '' && !key.includes('/') && !key.includes(':')) {
       missingKeys.add(key);
    }
  }
});

const missingArray = Array.from(missingKeys);
console.log('Missing keys found:', missingArray.join(', '));

// Convert underscore keys to basic English strings (e.g., 'expert_guidance' -> 'Expert Guidance')
function keyToEnglish(key) {
  return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Custom mappings for the ones seen in screenshot if they differ
const newTranslations = {};
missingArray.forEach(key => {
    newTranslations[key] = keyToEnglish(key);
});
// A few specific ones based on standard context
if (newTranslations['24_7_support']) newTranslations['24_7_support'] = '24/7 Support';
if (newTranslations['expert_guidance_desc']) newTranslations['expert_guidance_desc'] = 'Our experienced advisors help you find the best plans.';
if (newTranslations['support_desc']) newTranslations['support_desc'] = 'We provide 24/7 dedicated support to ensure your peace of mind.';
if (newTranslations['claims_desc']) newTranslations['claims_desc'] = 'Unrivaled support during critical moments.';


if (missingArray.length > 0) {
    const dirs = fs.readdirSync(localesDir);
    dirs.forEach(dir => {
        const filePath = path.join(localesDir, dir, 'translation.json');
        if (fs.existsSync(filePath)) {
            let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            let updated = false;
            for (const key of missingArray) {
                if (!data[key]) {
                    data[key] = newTranslations[key];
                    updated = true;
                }
            }
            if (updated) {
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log('Updated missing keys in ' + dir);
            }
        }
    });
}
