const fs = require('fs');

async function update() {
    let content = fs.readFileSync('src/data/cityData.ts', 'utf8');

    const updates = {
        warangal: `        description: "Secure your heritage in the historic city of Warangal. Our Insurance Support team provides reliable life and general services near the LIC Hanamkonda hub, ensuring your family's future is well-guarded with professional doorstep advisory.",
        hubContent: {
            itProfessionalFocus: "We provide tailored term insurance covers suitable for young professionals and business owners operating across the tri-cities (Warangal, Hanamkonda, Kazipet).",
            seniorCitizenFocus: "Our localized doorstep assistance helps senior policyholders bypass tedious branch visits for basic policy renewals and survival benefits.",
            localBranchDetails: "Direct involvement with the Hanamkonda branch and divisional networks ensures rapid resolution of legacy policy discrepancies.",
            localFaqs: [ { q: "Do you help with inter-branch policy transfers?", a: "Yes, we manage all paperwork required to transfer service branches for your convenience." } ]
        }
    }`,
        vadodara: `        description: "In the Cultural Capital of Gujarat, preserve your traditions and future. Our Insurance Support team offers trusted LIC advisory near Sayajigunj and health plans across Baroda. We ensure your claims and renewals are handled right at your doorstep in Alkapuri and Manjalpur.",
        hubContent: {
            itProfessionalFocus: "Our tailored comprehensive plans protect local entrepreneurs in Alkapuri and Gotri.",
            seniorCitizenFocus: "We act as a direct proxy for seniors in Karelibaug and Manjalpur, handling frustrating physical paperwork.",
            localBranchDetails: "Our centralized operations near Sayajigunj enable us to provide priority tracking of your LIC claims directly at the Divisional level without branch delays.",
            localFaqs: [ { q: "Can you assist with motor insurance claims for industrial vehicles?", a: "Yes, our motor insurance specialists provide expert assistance to ensure fleet owners receive fair depreciation and timely repair approvals." } ]
        }
    }`,
        raipur: `        description: "As Chhattisgarh's capital grows, so does the need for security. We offer comprehensive general and life Insurance Support in Raipur. Get expert LIC advice near the Pandri hub, with doorstep service for all your claim and renewal needs.",
        hubContent: {
            itProfessionalFocus: "Serving the developing Naya Raipur and Pandri business hubs with structured business continuity plans.",
            seniorCitizenFocus: "Residents of Shankar Nagar and Civil Lines rely on our advisors for doorstep medical check-ups and completely frictionless policy revivals.",
            localBranchDetails: "Our ties with the main Raipur divisional offices mean swift turnaround times for long-pending death claims.",
            localFaqs: [ { q: "How fast can you process a health claim in a major Raipur hospital?", a: "We maintain active relationships with TPA desks across major local hospitals to intervene immediately during cashless hospitalization emergencies." } ]
        }
    }`,
        indore: `        description: "Cleanest city, cleanest finances. Our Insurance Support team helps Indoris maintain financial hygiene with the right health and life portfolios. We provide doorstep LIC services near the Vijay Nagar and Palasia hubs, ensuring your family stays secure with expert local guidance.",
        hubContent: {
            itProfessionalFocus: "Indore's bustling commercial landscape in Vijay Nagar requires our dynamic personal and commercial covers.",
            seniorCitizenFocus: "We offer devoted care for seniors in Palasia and Saket, enabling them to file claims and revive policies entirely from the comfort of their homes.",
            localBranchDetails: "We coordinate rigorously with local branch managers to expedite complicated LIC verifications, dramatically cutting settlement times.",
            localFaqs: [ { q: "Do you offer doorstep premium collection in Indore?", a: "Yes, we handle seamless premium payment linkages and offline collections to ensure your critical health and life policies never lapse." } ]
        }
    }`,
        lucknow: `        description: "Protecting your family's heritage in Lucknow is easier with our Insurance Support. We offer personalized LIC policy services and health insurance guidance right at your doorstep. We are active across Gomti Nagar and Hazratganj, coordinating with the main LIC Jeevan Bhawan office to expedite your maturity claims and policy revivals.",
        hubContent: {
            itProfessionalFocus: "With Lucknow's growing corporate presence in Gomti Nagar and IT City, we offer comprehensive Employee Benefits.",
            seniorCitizenFocus: "We offer dedicated support for retired government employees in Indira Nagar and Aashiana.",
            localBranchDetails: "We coordinate closely with the LIC Divisional Office at Jeevan Bhawan (Hazratganj) to ensure priority processing.",
            localFaqs: [ { q: "Do you offer physical assistance for health insurance claims?", a: "Yes, our advisors provide comprehensive on-ground support at major multi-specialty hospitals in Lucknow." } ]
        }
    }`,
        nashik: `        description: "In the Wine Capital of India, secure your vineyards and vehicles alike. Our Insurance Support team offers specialized agricultural and personal solutions in Nashik. We provide doorstep LIC services near the Nashik Road and Jeevan Prakash offices, ensuring your claims are settled with local expertise.",
        hubContent: {
            itProfessionalFocus: "From manufacturing plants in Ambad to vineyards, we offer high-performance corporate liability and industrial all-risk covers.",
            seniorCitizenFocus: "We assist the traditional families of Panchavati and Gangapur Road with legacy LIC policy audits and swift death claim resolutions.",
            localBranchDetails: "Direct coordination with the LIC Nashik Divisional Office ensures we can handle branch-level interventions for delayed payouts effortlessly.",
            localFaqs: [ { q: "Do you process agricultural and crop-related insurance claims?", a: "Yes, we work with specialized insurers to provide robust agricultural and warehousing covers." } ]
        }
    }`,
        kanpur: `        description: "As the industrial capital of UP, Kanpur needs strong commercial insurance. Our Insurance Support team protects your factories and families alike. We offer doorstep LIC services near the Jeevan Bima Marg hub, ensuring fast-track claim processing and policy management for the industrial community.",
        hubContent: {
            itProfessionalFocus: "Kanpur's vast manufacturing and MSME sector requires complex commercial insurance solutions. We specialize in Workmen's Compensation.",
            seniorCitizenFocus: "We support Kanpur's elderly residents with hassle-free doorstep policy collections in Kidwai Nagar.",
            localBranchDetails: "By operating near Jeevan Bima Marg, we fast-track major commercial injury claims and life insurance settlements without bureaucratic friction.",
            localFaqs: [ { q: "Do you offer specialized insurance for the leather and textile industries in Kanpur?", a: "Absolutely. We arrange tailored factory fire, marine transit, and employee liability covers." } ]
        }
    }`,
        ajmer: `        description: "Secure your pilgrimage of life with our trusted Insurance Support in Ajmer. We provide seamless doorstep assistance for all your general and life insurance needs, coordinating with the local LIC Kutchery Road office for policy revivals and claims.",
        hubContent: {
            itProfessionalFocus: "For the business community and professionals in Vaishali Nagar, we configure group health covers and professional indemnity policies.",
            seniorCitizenFocus: "Our doorstep services in Civil Lines and Adarsh Nagar cater specifically to senior citizens needing physical assistance.",
            localBranchDetails: "We streamline all interactions with the LIC Kutchery Road branch, saving you the hassle of waiting in queues for basic policy updates.",
            localFaqs: [ { q: "Can I renew a lapsed endowment policy from my home in Ajmer?", a: "Yes, our representatives will collect all required medial declarations from your residence." } ]
        }
    }`,
        jammu: `        description: "In the City of Temples, secure your family's future with our comprehensive term and life Insurance Support. We assist locals near the LIC Jeevan Prakash office, providing expert local guidance for claim settlements and policy management in Jammu.",
        hubContent: {
            itProfessionalFocus: "We offer tailored term life plans specifically designed to protect families of professionals and business owners.",
            seniorCitizenFocus: "Our team prioritizes hassle-free assistance for the retired community in Trikuta Nagar and Gandhi Nagar.",
            localBranchDetails: "We provide dedicated liaison services with the Jeevan Prakash office to ensure complex claim matters are managed seamlessly on your behalf.",
            localFaqs: [ { q: "Are you able to assist with government sector employee health covers in Jammu?", a: "Yes, we structure specialized top-up plans that effectively bridge the gaps left by standard government healthcare provisions." } ]
        }
    }`
    }

    Object.keys(updates).forEach(city => {
        let cityStart = content.indexOf(city + ': {');
        if (cityStart === -1) cityStart = content.indexOf("'" + city + "': {");
        if (cityStart !== -1) {
            let cityEnd = content.indexOf('},', cityStart);
            let block = content.substring(cityStart, cityEnd + 2);
            let descStart = block.indexOf('description: "');
            if (descStart !== -1) {
                let p1 = block.substring(0, descStart);
                let newBlock = p1 + updates[city];
                if (newBlock[newBlock.length - 1] === '}') newBlock += ',';
                content = content.substring(0, cityStart) + newBlock + content.substring(cityEnd + 2);
            }
        }
    });

    fs.writeFileSync('src/data/cityData.ts', content);
    console.log("Updated cities!");
}

update();
