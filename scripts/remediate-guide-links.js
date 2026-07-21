const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, '..', 'src', 'app', 'resources', 'guides');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    const guideName = path.basename(path.dirname(filePath));
    let defaultService = 'life-insurance';
    if (guideName.includes('health')) {
        defaultService = 'health-insurance';
    } else if (guideName.includes('motor') || guideName.includes('car')) {
        defaultService = 'motor-insurance';
    }

    // Regex to match /locations/state/city but NOT /locations/state/city/service
    const regex = /href="\/locations\/([a-z-]+)\/([a-z-]+)(?!\/)"/g;
    
    content = content.replace(regex, (match, state, city) => {
        return `href="/locations/${state}/${city}/${defaultService}"`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file === 'page.tsx') {
            processFile(fullPath);
        }
    }
}

walk(guidesDir);
