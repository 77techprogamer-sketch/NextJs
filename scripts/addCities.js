const fs = require('fs');
const path = require('path');

const stateMap = {
  "visakhapatnam": "Andhra Pradesh", "pimpri-chinchwad": "Maharashtra", "ghaziabad": "Uttar Pradesh",
  "faridabad": "Haryana", "kalyan-dombivli": "Maharashtra", "vasai-virar": "Maharashtra", "dhanbad": "Jharkhand",
  "navi-mumbai": "Maharashtra", "allahabad": "Uttar Pradesh", "howrah": "West Bengal", "jodhpur": "Rajasthan",
  "kota": "Rajasthan", "solapur": "Maharashtra", "hubli-dharwad": "Karnataka", "bareilly": "Uttar Pradesh",
  "moradabad": "Uttar Pradesh", "gurgaon": "Haryana", "aligarh": "Uttar Pradesh", "tiruchirappalli": "Tamil Nadu",
  "mira-bhayandar": "Maharashtra", "thiruvananthapuram": "Kerala", "bhiwandi": "Maharashtra", "saharanspur": "Uttar Pradesh",
  "guntur": "Andhra Pradesh", "amravati": "Maharashtra", "bikaner": "Rajasthan", "noida": "Uttar Pradesh",
  "bhilai": "Chhattisgarh", "cuttack": "Odisha", "firozabad": "Uttar Pradesh", "nellore": "Andhra Pradesh",
  "bhavnagar": "Gujarat", "durgapur": "West Bengal", "asansol": "West Bengal", "rourkela": "Odisha",
  "nanded": "Maharashtra", "kolhapur": "Maharashtra", "akola": "Maharashtra", "gulbarga": "Karnataka",
  "jamnagar": "Gujarat", "loni": "Uttar Pradesh", "jhansi": "Uttar Pradesh", "ulhasnagar": "Maharashtra",
  "sangli-miraj-kupwad": "Maharashtra", "erode": "Tamil Nadu", "belgaum": "Karnataka", "ambattur": "Tamil Nadu",
  "tirunelveli": "Tamil Nadu", "malegaon": "Maharashtra", "gaya": "Bihar", "jalgaon": "Maharashtra",
  "udaipur": "Rajasthan", "maheshtala": "West Bengal", "davanagere": "Karnataka", "akbarpur": "Uttar Pradesh",
  "kurnool": "Andhra Pradesh", "rajpur-sonarpur": "West Bengal", "bokaro": "Jharkhand", "south-dumdum": "West Bengal",
  "bellary": "Karnataka", "patiala": "Punjab", "gopalpur": "Odisha", "agartala": "Tripura",
  "bhagalpur": "Bihar", "muzaffarnagar": "Uttar Pradesh", "bhatpara": "West Bengal", "panihati": "West Bengal",
  "latur": "Maharashtra", "dhule": "Maharashtra", "rohtak": "Haryana", "korba": "Chhattisgarh",
  "bhilwara": "Rajasthan", "brahmapur": "Odisha", "muzaffarpur": "Bihar", "ahmednagar": "Maharashtra",
  "mathura": "Uttar Pradesh", "kollam": "Kerala", "avadi": "Tamil Nadu", "kadapa": "Andhra Pradesh",
  "kamarhati": "West Bengal", "bilaspur": "Chhattisgarh", "shahjahanpur": "Uttar Pradesh", "satara": "Maharashtra",
  "bijapur": "Karnataka", "rampur": "Uttar Pradesh", "shimoga": "Karnataka", "chandrapur": "Maharashtra",
  "junagadh": "Gujarat", "alwar": "Rajasthan", "bardhaman": "West Bengal", "kulti": "West Bengal",
  "nizamabad": "Telangana", "parbhani": "Maharashtra", "tumkur": "Karnataka", "khammam": "Telangana",
  "uzhavarkarai": "Puducherry", "bihar-sharif": "Bihar", "panipat": "Haryana", "darbhanga": "Bihar",
  "bally": "West Bengal", "aizawl": "Mizoram", "dewas": "Madhya Pradesh", "ichalkaranji": "Maharashtra",
  "karnal": "Haryana", "bathinda": "Punjab", "jalna": "Maharashtra", "eluru": "Andhra Pradesh",
  "barasat": "West Bengal", "kirari-suleman-nagar": "Delhi", "purnia": "Bihar", "satna": "Madhya Pradesh",
  "mau": "Uttar Pradesh", "sonipat": "Haryana", "farrukhabad": "Uttar Pradesh", "sagar": "Madhya Pradesh",
  "durg": "Chhattisgarh", "imphal": "Manipur", "ratlam": "Madhya Pradesh", "hapur": "Uttar Pradesh",
  "arah": "Bihar", "anantapur": "Andhra Pradesh", "karimnagar": "Telangana", "etawah": "Uttar Pradesh",
  "ambarnath": "Maharashtra", "north-dumdum": "West Bengal", "bharatpur": "Rajasthan", "begusarai": "Bihar",
  "new-delhi": "Delhi", "gandhidham": "Gujarat", "baranagar": "West Bengal", "sikar": "Rajasthan",
  "thoothukudi": "Tamil Nadu", "rew": "Madhya Pradesh", "mirzapur": "Uttar Pradesh", "raichur": "Karnataka",
  "pali": "Rajasthan", "ramagundam": "Telangana", "vizianagaram": "Andhra Pradesh", "katihar": "Bihar",
  "haridwar": "Uttarakhand", "sriganganagar": "Rajasthan", "karawal-nagar": "Delhi", "nagercoil": "Tamil Nadu",
  "mango": "Jharkhand", "bulandshahr": "Uttar Pradesh", "thanjavur": "Tamil Nadu", "murwara": "Madhya Pradesh",
  "uluberia": "West Bengal", "shillong": "Meghalaya", "sambhal": "Uttar Pradesh", "singrauli": "Madhya Pradesh",
  "nadiad": "Gujarat", "secunderabad": "Telangana", "naihati": "West Bengal", "yamunanagar": "Haryana",
  "bidhan-nagar": "West Bengal", "pallavaram": "Tamil Nadu", "bidar": "Karnataka", "munger": "Bihar",
  "panchkula": "Haryana", "burhanpur": "Madhya Pradesh", "kharagpur": "West Bengal", "dindigul": "Tamil Nadu",
  "gandhinagar": "Gujarat", "hospet": "Karnataka", "nangloi-jat": "Delhi", "malda": "West Bengal",
  "ongole": "Andhra Pradesh", "deoghar": "Jharkhand", "chapra": "Bihar", "haldia": "West Bengal",
  "khandwa": "Madhya Pradesh", "nandyal": "Andhra Pradesh", "morena": "Madhya Pradesh", "amroha": "Uttar Pradesh",
  "anand": "Gujarat", "bhind": "Madhya Pradesh", "bhalswa-jahangir-pur": "Delhi", "madhyamgram": "West Bengal",
  "bhiwani": "Haryana", "berhampore": "West Bengal", "ambala": "Haryana", "morbi": "Gujarat",
  "fatehpur": "Uttar Pradesh", "raebareli": "Uttar Pradesh", "khora": "Uttar Pradesh", "chittoor": "Andhra Pradesh",
  "bhusawal": "Maharashtra", "orai": "Uttar Pradesh", "bahraich": "Uttar Pradesh", "phusro": "Jharkhand",
  "mehsana": "Gujarat", "raiganj": "West Bengal", "sirsa": "Haryana", "danapur": "Bihar",
  "serampore": "West Bengal", "sultan-pur-majra": "Delhi", "guna": "Madhya Pradesh", "jaunpur": "Uttar Pradesh",
  "panvel": "Maharashtra", "shivpuri": "Madhya Pradesh", "surendranagar": "Gujarat", "unnc": "Uttar Pradesh",
  "hugli-chinsurah": "West Bengal"
};

const cities = Object.keys(stateMap);

function capitalize(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const templates = [
  "Looking for expert Insurance Support in {name}? We provide localized guidance on health, life, and motor insurance. Skip the long queues and get professional advice tailored to the unique needs of {name} residents right at your doorstep.",
  "Secure your family's future with the most trusted Insurance Support team in {name}. From processing complex LIC claims to finding the best health coverage, our certified advisors offer hassle-free service across {state}.",
  "Residents and businesses in {name} can now rely on us for comprehensive Insurance Support. Whether you need an Employee Benefits plan or personal health insurance, our experts offer fast-track doorstep service throughout {name}.",
  "In {name}, protecting your assets has never been easier. We bring the LIC and General Insurance office directly to you. Our proficient advisors handle policy renewals and claim recoveries locally without any bureaucratic delays."
];

let addedCitiesData = `\n// Generated Tier 1 & 2 Cities\n`;

cities.forEach((citySlug, idx) => {
  const name = capitalize(citySlug);
  const state = stateMap[citySlug] || "India";
  const descTemplate = templates[idx % templates.length];
  const description = descTemplate.replace(/{name}/g, name).replace(/{state}/g, state);

  addedCitiesData += `    '${citySlug}': {
        name: '${name}',
        slug: '${citySlug}',
        state: '${state}',
        areas: ['${name} Central', 'City Center'],
        description: "${description}"
    },
`;
});

const cityDataPath = path.join(__dirname, '../src/data/cityData.ts');
let fileContent = fs.readFileSync(cityDataPath, 'utf8');

const targetRegex = /\r?\n    }\r?\n};\r?\n\r?\nexport const getCityData/;
const match = fileContent.match(targetRegex);

if (match) {
  const insertIndex = fileContent.indexOf('};', match.index); 
  fileContent = fileContent.substring(0, insertIndex) + ',' + addedCitiesData + fileContent.substring(insertIndex);
  fs.writeFileSync(cityDataPath, fileContent, 'utf8');
  console.log('Successfully appended 205 missing cities to cityData.ts');
} else {
  console.error('Could not find terminating block for cityData object in cityData.ts');
}
