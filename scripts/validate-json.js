const fs = require('fs');
const path = require('path');

function validateJsonFiles(dir) {
    let hasError = false;
    
    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        
        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (filePath.endsWith('.json')) {
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    JSON.parse(content);
                } catch (e) {
                    console.error(`\x1b[31m[ERROR]\x1b[0m Invalid JSON in file: ${filePath}`);
                    console.error(e.message);
                    hasError = true;
                }
            }
        }
    }
    
    if (fs.existsSync(dir)) {
        walkDir(dir);
    } else {
        console.warn(`Directory not found for validation: ${dir}`);
    }
    
    return hasError;
}

console.log('Validating JSON files...');
const localesError = validateJsonFiles(path.join(__dirname, '../public/locales'));

if (localesError) {
    console.error('\x1b[31mJSON validation failed. Fix the errors above before building.\x1b[0m');
    process.exit(1);
} else {
    console.log('\x1b[32mAll JSON files are valid!\x1b[0m');
}
