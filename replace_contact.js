const fs = require('fs');

const files = [
    'src/data/cityData.ts',
    'src/components/SupportClient.tsx',
    'src/components/ServiceJsonLd.tsx',
    'src/components/ServerJsonLd.tsx',
    'src/app/resources/insurance-support-guide/page.tsx',
    'src/app/resources/bangalore-insurance-support/page.tsx',
    'src/app/locations/[city]/[service]/page.tsx',
    'src/app/locations/[city]/page.tsx',
    'src/app/about-hari-kotian/page.tsx',
    'src/app/about/page.tsx'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;
        
        // Simple string replacements
        content = content.replace(/['"]\+91-?9986634506['"]/g, "contactConfig.phoneFull");
        content = content.replace(/['"]contact@insurancesupport\.online['"]/g, "contactConfig.email");
        
        // Template literal replacements for href=tel:
        content = content.replace(/href=['"]tel:\+919986634506['"]/g, "href={`tel:${contactConfig.phoneFull}`}");
        content = content.replace(/href=\{`tel:\+919986634506`\}/g, "href={`tel:${contactConfig.phoneFull}`}");
        
        // In about-hari-kotian/page.tsx there is a div with the text:
        content = content.replace(/>contact@insurancesupport\.online</g, ">{contactConfig.email}<");
        
        if (content !== original) {
            // Check if import is already there
            if (!content.includes('import { contactConfig }')) {
                const lines = content.split('\n');
                let lastImportIdx = -1;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].trim().startsWith('import ')) {
                        lastImportIdx = i;
                    }
                }
                const importStmt = "import { contactConfig } from '@/data/contact';";
                if (lastImportIdx >= 0) {
                    lines.splice(lastImportIdx + 1, 0, importStmt);
                } else {
                    lines.unshift(importStmt);
                }
                content = lines.join('\n');
            }
            fs.writeFileSync(file, content);
            console.log('Updated ' + file);
        }
    } catch (e) {
        console.error('Error in ' + file + ': ' + e.message);
    }
});
