const fs = require('fs');
const path = require('path');

const localesDir = path.join('d:\\Insurance-Support\\insurance-support-next\\public\\locales');
const dirs = fs.readdirSync(localesDir);

const newKeys = {
    'start_general_inquiry': 'Start General Inquiry',
    'general_inquiry_title': 'General Inquiry',
    'general_inquiry_description': 'Have a question about our services or your policy? Contact our support team for assistance.',
    'get_support_now': 'Get Support Now',
    'claim_filing_checklist_title': 'Claim Filing Checklist',
    'claim_filing_step_1': 'Keep your policy document ready',
    'claim_filing_step_2': 'Gather all medical/repair bills',
    'claim_filing_step_3': 'Submit claim form within 24 hours',
    'common_pitfalls_title': 'Common Pitfalls',
    'pitfall_1': 'Delay in intimating the insurer',
    'pitfall_2': 'Hiding pre-existing conditions',
    'pitfall_3': 'Submitting incomplete documentation',
    'need_immediate_assistance': 'Need Immediate Assistance?',
    'call_our_support_team': 'Call our support team for immediate help.',
    'read_detailed_answer': 'Read detailed answer'
};

dirs.forEach(dir => {
    const filePath = path.join(localesDir, dir, 'translation.json');
    if (fs.existsSync(filePath)) {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let updated = false;
        for (const [key, value] of Object.entries(newKeys)) {
            if (!data[key]) {
                data[key] = value;
                updated = true;
            }
        }
        if (updated) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log('Updated missing keys in ' + dir);
        }
    }
});
