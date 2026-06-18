const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'public', 'locales');
const languages = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];

const newKeysEn = {
  support_clarification_title: "What We Help With & What We Don't",
  support_clarification_desc: "To set the right expectations, here is a clear breakdown of the areas we can support you with and the areas outside our scope.",
  what_we_help_with: "What we help with",
  what_we_dont_do: "What we don't do",
  help_item_claims: "Claims Assistance & Guidance",
  help_item_policy: "Policy Understanding & Review",
  help_item_legal: "Legal & Grievance Support",
  dont_item_underwrite: "We do not sell insurance or underwrite policies",
  dont_item_payout: "We cannot guarantee claim payouts"
};

const newKeysKn = {
  support_clarification_title: "ನಾವು ಏನು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಏನು ಮಾಡುವುದಿಲ್ಲ",
  support_clarification_desc: "ಸರಿಯಾದ ನಿರೀಕ್ಷೆಗಳನ್ನು ಹೊಂದಿಸಲು, ನಾವು ಬೆಂಬಲಿಸುವ ಮತ್ತು ಬೆಂಬಲಿಸದ ಕ್ಷೇತ್ರಗಳ ಸ್ಪಷ್ಟ ವಿವರಣೆ ಇಲ್ಲಿದೆ.",
  what_we_help_with: "ನಾವು ಸಹಾಯ ಮಾಡುವ ಕ್ಷೇತ್ರಗಳು",
  what_we_dont_do: "ನಾವು ಮಾಡದಿರುವ ವಿಷಯಗಳು",
  help_item_claims: "ಕ್ಲೈಮ್ ಸಹಾಯ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ",
  help_item_policy: "ಪಾಲಿಸಿ ತಿಳುವಳಿಕೆ ಮತ್ತು ವಿಮರ್ಶೆ",
  help_item_legal: "ಕಾನೂನು ಮತ್ತು ಕುಂದುಕೊರತೆ ಬೆಂಬಲ",
  dont_item_underwrite: "ನಾವು ವಿಮೆಯನ್ನು ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ",
  dont_item_payout: "ಕ್ಲೈಮ್ ಪಾವತಿಗಳನ್ನು ನಾವು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ"
};

languages.forEach(lang => {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add keys if they don't exist
    let keysToAdd = lang === 'kn' ? newKeysKn : newKeysEn;
    
    const merged = { ...data, ...keysToAdd };
    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
    console.log(`Updated ${lang}/translation.json`);
  }
});
