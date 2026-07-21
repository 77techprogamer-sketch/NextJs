const fs = require('fs');
const lines = `LIC	LIC Surrender Value Calculator	https://www.policybazaar.com/lic-of-india/lic-surrender-value-calculator/
LIC	LIC Jeevan Labh Surrender Value Calculator	https://www.policybazaar.com/gu-in/lic-of-india/lic-jeevan-labh-surrender-value-calculator/
LIC	LIC Jeevan Saral Surrender Value Calculator	https://www.policybazaar.com/bn-in/lic-of-india/lic-jeevan-saral-surrender-value-after-10-years-calculator/
LIC	LIC ULIP Calculator	https://www.policybazaar.com/mr-in/lic-of-india/lic-ulip-calculator/
LIC	LIC Amritbaal Premium Calculator	https://www.policybazaar.com/lic-of-india/lic-amritbaal-premium-calculator/
LIC	LIC New Jeevan Shanti Calculator	https://www.policybazaar.com/lic-of-india/lic-new-jeevan-shanti-calculator/
LIC	LIC Jeevan Utsav Calculator	https://www.policybazaar.com/lic-of-india/lic-jeevan-utsav-calculator/
LIC	LIC Premium Payment Late Fee Calculator	https://www.policybazaar.com/gu-in/lic-of-india/lic-premium-payment-late-fee-calculator/
LIC	LIC Nivesh Plus Return Calculator	https://www.policybazaar.com/bn-in/lic-of-india/lic-nivesh-plus-return-calculator/
LIC	LIC Child Money Back Plan Calculator	https://www.policybazaar.com/lic-of-india/lic-child-money-back-plan-calculator/
LIC	LIC Pension Plan Calculator	https://www.policybazaar.com/bn-in/lic-of-india/lic-pension-plan-calculator/
LIC	LIC Yuva Term Plan Calculator	https://www.policybazaar.com/lic-of-india/lic-yuva-term-plan-calculator/
LIC	LIC Index Plus Premium and Maturity Calculator	https://www.policybazaar.com/lic-of-india/lic-index-plus-premium-and-maturity-calculator/
LIC	LIC 1 Crore Policy Premium Calculator	https://www.policybazaar.com/mr-in/lic-of-india/lic-1-crore-policy-premium-calculator/
LIC	LIC Jeevan Chhaya Plan 103 Maturity Calculator	https://www.policybazaar.com/lic-of-india/lic-jeevan-chhaya-plan-103-maturity-calculator/
LIC	LIC HFL Loan Calculator	https://www.policybazaar.com/lic-of-india/lic-hfl-loan-calculator/
LIC	LIC Bonus Calculator	https://www.policybazaar.com/gu-in/lic-of-india/articles/everything-about-lic-bonus-calculator/
SIP	SIP Calculator	https://www.policybazaar.com/sip/sip-calculator/
SIP	Cost of Delay Calculator	https://www.policybazaar.com/sip/cost-of-delay-calculator/
SIP	Step-up SIP Calculator	https://www.policybazaar.com/sip/step-up-sip-calculator/
SIP	XIRR Calculator	https://www.policybazaar.com/sip/xirr-meaning-in-mutual-funds/xirr-calculator/
SIP	SWP Calculator	https://www.policybazaar.com/sip/systematic-withdrawal-plan/swp-calculator/
SIP	HDFC SIP Calculator	https://www.policybazaar.com/hi-in/sip/hdfc-sip-investment/hdfc-sip-calculator/
SIP	SBI SIP Calculator	https://www.policybazaar.com/hi-in/sip/sbi-sip-investment/sbi-sip-calculator/
SIP	SBI SWP Calculator	https://www.policybazaar.com/sip/systematic-withdrawal-plan/sbi-swp/calculator/
SIP	ICICI SWP Calculator	https://www.policybazaar.com/sip/systematic-withdrawal-plan/icici-swp/calculator/
SIP	Axis SWP Calculator	https://www.policybazaar.com/sip/systematic-withdrawal-plan/axis-swp/calculator/
SIP	Axis SIP Calculator	https://www.policybazaar.com/sip/axis-sip-plans/axis-sip-calculator/
SIP	Aditya Birla SWP Calculator	https://www.policybazaar.com/sip/systematic-withdrawal-plan/aditya-birla-swp/calculator/
SIP	Aditya Birla SIP Calculator	https://www.policybazaar.com/sip/aditya-birla-sip-plans/aditya-birla-sip-calculator/
SIP	Kotak SWP Calculator	https://www.policybazaar.com/sip/systematic-withdrawal-plan/kotak-swp/calculator/
SIP	Kotak SIP Calculator	https://www.policybazaar.com/sip/kotak-sip-plans/kotak-sip-calculator/
FD	FD Calculator	https://www.policybazaar.com/fd-interest-rates/fd-calculator/
FD	FD Premature Withdrawal Penalty Calculator	https://www.policybazaar.com/fd-interest-rates/fd-premature-withdrawal-penalty-calculator/
FD	Monthly Payout FD Calculator	https://www.policybazaar.com/fd-interest-rates/monthly-payout-fd-calculator/
Investment / Financial Tools	Income Tax Calculator	https://www.policybazaar.com/financial-tools-calculators/income-tax-calculator/
Investment / Financial Tools	HRA Calculator	https://www.policybazaar.com/financial-tools-calculators/hra-calculator/
Investment / Financial Tools	GST Calculator	https://www.policybazaar.com/financial-tools-calculators/gst-calculator/
Investment / Financial Tools	Gratuity Calculator	https://www.policybazaar.com/hi-in/gratuity-calculator/
Investment / Financial Tools	Education Loan EMI Calculator	https://www.policybazaar.com/child-plans/education-loan/education-loan-emi-calculator/
Investment / Financial Tools	NRI Income Tax Calculator	https://www.policybazaar.com/income-tax/nri-taxation/nri-income-tax-calculator/
Investment / Financial Tools	Post Office RD Calculator	https://www.policybazaar.com/post-office/post-office-rd/post-office-rd-calculator/
Investment / Financial Tools	Compound Interest Calculator	https://www.policybazaar.com/compound-interest-calculator/
Investment / Financial Tools	NPS Vatsalya Calculator	https://www.policybazaar.com/life-insurance/child-plans/nps-vatsalya-scheme/nps-vatsalya-calculator/
Pension / Retirement	NPS Calculator	https://www.policybazaar.com/life-insurance/pension-plans/nps-calculator/
Pension / Retirement	NPS Calculator for Government Employees	https://www.policybazaar.com/life-insurance/pension-plans/nps-calculator-for-government-employess/
Pension / Retirement	Post Office NPS Calculator	https://www.policybazaar.com/life-insurance/pension-plans/post-office-nps-calculator/
Pension / Retirement	Retirement Calculator	https://www.policybazaar.com/life-insurance/pension-plans/retirement-calculator/
Pension / Retirement	EPF Calculator	https://www.policybazaar.com/life-insurance/pension-plans/articles/epf/calculator/
Pension / Retirement	Annuity Calculator	https://www.policybazaar.com/life-insurance/pension-plans/articles/annuity-calculator/
Pension / Retirement	PVIFA Calculator	https://www.policybazaar.com/life-insurance/pension-plans/articles/pvifa-formula-table-and-calculator/
Pension / Retirement	Tata AIA Pension Calculator	https://www.policybazaar.com/pension-plans/tata-aia-pension-plans/tata-pension-calculator/
Pension / Retirement	APY Calculator - Bank of Baroda	https://www.policybazaar.com/life-insurance/pension-plans/atal-pension-yojana/bob-apy/calculator/
Pension / Retirement	APY Calculator - HDFC Bank	https://www.policybazaar.com/life-insurance/pension-plans/atal-pension-yojana/hdfc-bank-apy/calculator/
Pension / Retirement	APY Calculator - Axis Bank	https://www.policybazaar.com/life-insurance/pension-plans/atal-pension-yojana/axis-bank-apy/calculator/
Pension / Retirement	HDFC NPS Calculator	https://www.policybazaar.com/hi-in/life-insurance/pension-plans/hdfc-nps-calculator/
Fitness / Health Wellness	BMI Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/bmi/
Fitness / Health Wellness	Calorie Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/calorie/
Fitness / Health Wellness	Macro Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/macro/
Fitness / Health Wellness	Due Date Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/due-date/
Fitness / Health Wellness	Pregnancy Weight Gain Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/pregnancy-weight-gain/
Fitness / Health Wellness	Pregnancy Conception Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/pregnancy-conception/
Fitness / Health Wellness	Ovulation Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/ovulation/
Fitness / Health Wellness	BMR Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/bmr/
Fitness / Health Wellness	Body Fat Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/body-fat/
Fitness / Health Wellness	Ideal Weight Calculator	https://www.policybazaar.com/health-wellness/fitness-calculators/ideal-weight/`.trim().split('\n');

const makeSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const makeCategorySlug = (cat) => {
    let s = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (s.includes('fitness')) return 'fitness';
    if (s.includes('investment')) return 'investment';
    if (s.includes('pension')) return 'pension';
    return s;
};

const config = lines.map(line => {
    let [category, title, url] = line.split('\t');
    title = title.trim();
    let slug = makeSlug(title);
    let categorySlug = makeCategorySlug(category.trim());
    
    // Assign Engine Type
    let engineType = 'generic';
    if (category.includes('LIC')) engineType = 'lic';
    if (category.includes('SIP')) engineType = 'sip';
    if (category.includes('FD')) engineType = 'fd';
    if (category.includes('Fitness')) engineType = 'fitness';
    if (category.includes('Investment')) engineType = 'financial';
    if (category.includes('Pension')) engineType = 'pension';
    
    return {
        id: slug,
        slug: slug,
        category: categorySlug,
        categoryName: category.trim(),
        title: title,
        engineType: engineType,
        description: `Use our ${title} to calculate values accurately and instantly online.`,
        seoTitle: `${title} 2026 | Free Online Tool`,
        seoDescription: `Calculate your ${title.toLowerCase()} easily with our free online calculator. Get accurate estimates instantly without registration.`
    };
});

const fileContent = `export type CalculatorEngineType = 'lic' | 'sip' | 'fd' | 'fitness' | 'financial' | 'pension' | 'generic';

export interface CalculatorConfig {
  id: string;
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  engineType: CalculatorEngineType;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const calculatorsConfig: CalculatorConfig[] = ${JSON.stringify(config, null, 2)};
`;

fs.writeFileSync('src/data/calculatorsConfig.ts', fileContent);
console.log('Saved to src/data/calculatorsConfig.ts');
