const fs = require('fs');
const path = require('path');

const enPath = path.join(process.cwd(), 'public/locales/en/translation.json');
const content = fs.readFileSync(enPath, 'utf8').trim();

// Remove the last closing brace
const updatedContent = content.substring(0, content.lastIndexOf('}')) + `,
  "service_seo_content": {
    "life-insurance": {
      "description": "Life insurance is not just about protection; it's about legacy. Our advisors help you navigate complex claim settlement processes and policy revivals to ensure your family's financial stability is never compromised.",
      "highlights": ["Claim Recovery Specialists", "Policy Revival Support", "Doorstep Document Help"]
    },
    "health-insurance": {
      "description": "Secure world-class healthcare with plans that offer cashless hospitalization, pre-existing disease coverage, and hassle-free claim processing for your entire family.",
      "highlights": ["Cashless Network Parks", "No-Claim Bonus Clarity", "Fast Pre-Auth Support"]
    },
    "motor-insurance": {
      "description": "From third-party liability to comprehensive coverage, get the best IDV for your vehicle with 24/7 roadside assistance and swift accidental claim settlements.",
      "highlights": ["Instant Policy Issuance", "Max IDV Assurance", "Zero Dep Coverage"]
    },
    "term-insurance": {
      "description": "The purest form of protection. Secure high-sum assured plans with affordable premiums, ensuring zero-hassle document processing for your nominees.",
      "highlights": ["High Sum Assured", "Nominee Assistance", "Tax Benefit Guidance"]
    },
    "sme-insurance": {
      "description": "Protect your business assets, employees, and liability with customized insurance solutions designed for the unique risks of small and medium enterprises.",
      "highlights": ["Liability Protection", "Asset Coverage", "Employee Benefit Plans"]
    },
    "travel-insurance": {
      "description": "Travel the world with peace of mind. Coverage for medical emergencies, trip cancellations, and lost baggage across international borders.",
      "highlights": ["Global Medical Cover", "Loss of Baggage Help", "Trip Cancellation Protection"]
    },
    "pension-plans": {
      "description": "Plan a dignified retirement with guaranteed income streams and tax-efficient wealth accumulation strategies tailored for your post-work life.",
      "highlights": ["Guaranteed Retirement Income", "Wealth Accumulation", "Tax-Efficient Withdrawals"]
    },
    "ulip-plans": {
      "description": "The power of investment combined with the security of insurance. Optimize your wealth growth while keeping your life cover intact.",
      "highlights": ["Market-Linked Growth", "Insurance Security", "Fund Switching Flexibility"]
    },
    "wedding-insurance": {
      "description": "Shield your big day from unforeseen cancellations, property damage, or liability issues, ensuring your celebration remains stress-free.",
      "highlights": ["Cancellation Protection", "Property Damage Cover", "Liability Shield"]
    },
    "cyber-insurance": {
      "description": "Protect your digital identity and finances against growing cyber threats, phishing attacks, and data breaches in an increasingly connected world.",
      "highlights": ["Phishing Attack Cover", "Data Breach Protection", "Digital ID Security"]
    }
  }
}`;

fs.writeFileSync(enPath, updatedContent + '\n}');
console.log("Updated en/translation.json successfully");
