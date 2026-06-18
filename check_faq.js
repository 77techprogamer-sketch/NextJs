const fs = require('fs');
const path = require('path');

const file = 'd:/Insurance-Support/insurance-support-next/public/locales/en/translation.json';
const t = JSON.parse(fs.readFileSync(file, 'utf8'));

function getKeys(obj, prefix='') {
  let keys=[];
  for(let k in obj){
    if(typeof obj[k]==='object'){
      keys=keys.concat(getKeys(obj[k], prefix+k+'.'));
    } else {
      keys.push(prefix+k);
    }
  }
  return keys;
}

const allTKeys = getKeys(t);
const tSet = new Set(allTKeys);

function scan(dir){
  let missing = [];
  const files = fs.readdirSync(dir);
  for(const f of files){
    const fp = path.join(dir, f);
    if(fs.statSync(fp).isDirectory()){
      missing = missing.concat(scan(fp));
    } else if(fp.endsWith('.tsx') || fp.endsWith('.ts')){
      const content = fs.readFileSync(fp, 'utf8');
      const regex = /t\(['"]([^'"]+)['"]/g;
      let match;
      while((match=regex.exec(content))!==null){
        const key = match[1];
        if(!tSet.has(key) && !key.includes('{{') && !key.includes(' ') && key.startsWith('faq_')){
          missing.push(key);
        }
      }
    }
  }
  return missing;
}

const missing = scan('d:/Insurance-Support/insurance-support-next/src');
console.log('Missing FAQ keys from translation.json: ', Array.from(new Set(missing)));
