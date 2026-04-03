const fs = require('fs');

async function addLongContent() {
    let content = fs.readFileSync('src/data/cityData.ts', 'utf8');

    const hyperLocalKeys = [
        'chennai-t-nagar', 'chennai-anna-nagar', 'chennai-velachery', 'chennai-adyar',
        'hyderabad-hitech-city', 'hyderabad-gachibowli', 'hyderabad-banjara-hills', 'hyderabad-secunderabad',
        'pune-hinjewadi', 'pune-viman-nagar', 'pune-kothrud', 'pune-magarpatta',
        'mumbai-andheri', 'mumbai-bandra', 'mumbai-south', 'mumbai-borivali',
        'delhi-connaught-place', 'delhi-dwarka', 'delhi-south', 'delhi-rohini',
        'kolkata-salt-lake', 'kolkata-new-town', 'kolkata-ballygunge', 'kolkata-park-street',
        'ahmedabad-satellite', 'ahmedabad-vastrapur', 'ahmedabad-sg-highway', 'ahmedabad-maninagar'
    ];

    let updatedCount = 0;

    hyperLocalKeys.forEach(cityKey => {
        const searchKeyPattern = new RegExp(`'${cityKey}':\\s*\\{`, 'g');
        const match = searchKeyPattern.exec(content);
        
        if (match) {
            const startIndex = match.index;
            
            // Extract the block for this city
            let bracketCount = 0;
            let endIndex = -1;
            
            for (let i = startIndex + match[0].length - 1; i < content.length; i++) {
                if (content[i] === '{') bracketCount++;
                else if (content[i] === '}') {
                    bracketCount--;
                    if (bracketCount === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }

            if (endIndex !== -1) {
                let block = content.substring(startIndex, endIndex + 1);
                
                // Extract CityName and AreaName from the name property 
                // e.g. name: 'T Nagar, Chennai'
                let areaName = cityKey;
                let cityName = 'the city';
                const nameMatch = block.match(/name:\s*'([^']+)'/);
                if (nameMatch) {
                    const parts = nameMatch[1].split(', ');
                    if (parts.length > 1) {
                        areaName = parts[0].trim();
                        cityName = parts[1].trim();
                    } else {
                        areaName = parts[0].trim();
                    }
                }

                // Check if longContent already exists to prevent duplication
                if (!block.includes('"longContent": [') && !block.includes('longContent: [')) {
                    // Find the end of hubContent to insert longContent after it
                    
                    let hubContentStartIndex = block.indexOf('"hubContent": {');
                    if(hubContentStartIndex !== -1) {
                        
                        let hcBracketCount = 0;
                        let hcEndIndex = -1;
                        for(let j = hubContentStartIndex + '"hubContent": '.length; j < block.length; j++) {
                             if (block[j] === '{') hcBracketCount++;
                             else if (block[j] === '}') {
                                 hcBracketCount--;
                                 if (hcBracketCount === 0) {
                                     hcEndIndex = j;
                                     break;
                                 }
                             }
                        }

                        if(hcEndIndex !== -1) {
                            const newLongContent = `,
        longContent: [
            {
                title: "The Local Insurance Landscape in ${areaName}, ${cityName}",
                paragraphs: [
                    "${areaName} represents one of the most vibrant and fast-evolving corridors in ${cityName}. The influx of professionals and the established residential communities here demand highly capable, localized financial security structures. With the ongoing urban development, navigating personal and commercial risks in ${areaName} has become increasingly critical. Our primary objective is to adapt leading health and life insurance products to seamlessly fit these hyper-local dynamics.",
                    "The fast-paced lifestyle and dense urban setup often bring unique health and lifestyle risks. As medical inflation continues to rise locally, standard base plans offered by employers usually fall short during major emergencies at premium local hospitals. Leading insurers have established strong cashless footprints here, but leveraging them requires knowing the intricate sub-limits and room-capping rules specific to your policy.",
                    "We believe in hyper-local service. Whether you are seeking portable health coverage or comprehensive term-life solutions within ${areaName}, our localized presence ensures that your requests do not get lost in centralized call centers. We maintain direct coordination with the closest branch offices, ensuring your queries are resolved right where you live and work."
                ]
            },
            {
                title: "Claim Scenarios and Local Resolutions in ${areaName}",
                paragraphs: [
                    "Handling insurance claims within ${cityName}'s vast metropolitan expanse can frequently lead to logistical and bureaucratic hurdles. We often encounter scenarios in ${areaName} where claims are partially settled or delayed due to complex pre-existing condition disputes or missing technical documentation from local clinics and hospitals.",
                    "Another significant friction point revolves around life insurance death claims and maturity benefit delays. Insurers enforce extremely strict regulatory checks. Without a dedicated advocate who understands the local branch workflows, policyholders can experience weeks of frustrating follow-ups.",
                    "Our intervention typically drastically reduces these turnaround times. By actively auditing portfolios before a claim event and acting as a physical liaison between our clients in ${areaName} and the respective insurance divisional offices, we bring success rates up. We prepare rock-solid case files that compel insurers to process the payouts fairly and swiftly."
                ]
            },
            {
                title: "Premium Doorstep Service Across ${cityName}",
                paragraphs: [
                    "Access to immediate, in-person advisory is a rare commodity in today's digital-first insurance landscape. Our unique value proposition to the residents of ${areaName} is our unconditional doorstep service. We eliminate the need for you to navigate ${cityName}'s traffic to reach an insurer's branch.",
                    "From collecting physical health declarations for lapsed policy revivals to delivering your duplicated policy bonds, our certified advisors handle the physical legwork. We constantly monitor the localized network status of your preferred hospitals, keeping you updated if any temporary suspensions affect your cashless options locally.",
                    "Choosing our specialized Insurance Support means choosing peace of mind. We stand by you during critical moments, coordinating directly with hospital billing departments and TPA desks to guarantee a seamless, transparent, and swift insurance experience entirely tailored for you."
                ]
            }
        ]`;
                            
                            const modifiedBlock = block.slice(0, hcEndIndex + 1) + newLongContent + block.slice(hcEndIndex + 1);
                            content = content.replace(block, modifiedBlock);
                            updatedCount++;
                        }
                    }
                }
            }
        }
    });

    fs.writeFileSync('src/data/cityData.ts', content);
    console.log("Successfully generated longContent for " + updatedCount + " hyper-local hubs!");
}

addLongContent().catch(console.error);
