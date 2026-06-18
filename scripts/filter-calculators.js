const fs = require('fs');
const filePath = 'src/data/calculatorsConfig.ts';
let content = fs.readFileSync(filePath, 'utf8');

const regex = /export const calculatorsConfig: CalculatorConfig\[\] = (\[[\s\S]*?\]);/;
const match = content.match(regex);

if (match) {
    let arr = JSON.parse(match[1]);
    const toRemove = [
        'HDFC SIP Calculator',
        'SBI SIP Calculator',
        'SBI SWP Calculator',
        'ICICI SWP Calculator',
        'Axis SWP Calculator',
        'Axis SIP Calculator',
        'Aditya Birla SWP Calculator',
        'Aditya Birla SIP Calculator',
        'Kotak SWP Calculator',
        'Kotak SIP Calculator'
    ];
    
    let originalLength = arr.length;
    arr = arr.filter(item => !toRemove.includes(item.title));
    console.log('Removed ' + (originalLength - arr.length) + ' items.');
    
    let newContent = content.replace(regex, 'export const calculatorsConfig: CalculatorConfig[] = ' + JSON.stringify(arr, null, 2) + ';');
    fs.writeFileSync(filePath, newContent);
    console.log('Updated file successfully.');
} else {
    console.log('Could not find the array.');
}
